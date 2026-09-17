/*
  LINK CHECKER
  ============
  Fetches every website and referral link in data/listings.js and reports the
  ones that no longer work.

  This exists because a listed business had to email and tell us their own
  link was broken. A dead link on a directory that sells itself on verified
  details is the same class of problem as a wrong phone number, and nobody
  will report most of them — they will just leave.

  Run it yourself:            node tools/check-links.js
  GitHub also runs it weekly and emails you when something breaks.

  Exits 0 when every link resolves, 1 when any is dead.
*/

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const TIMEOUT_MS = 15000;

const sandbox = {};
vm.runInNewContext(
  fs.readFileSync(path.join(ROOT, "data", "listings.js"), "utf8") +
    ";globalThis.__l__ = LISTINGS;",
  sandbox,
  { filename: "data/listings.js" }
);
const LISTINGS = sandbox.__l__;

// Some sites reject requests that do not look like a browser, which would
// otherwise produce a page of false alarms.
const HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (compatible; HanoiExpatDirectory-LinkCheck/1.0; +https://hanoiexpatdirectory.com)",
  Accept: "text/html,application/xhtml+xml,*/*",
};

async function check(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      redirect: "follow",
      headers: HEADERS,
      signal: controller.signal,
    });
    return { ok: res.status < 400, status: res.status };
  } catch (err) {
    return { ok: false, status: err.name === "AbortError" ? "timeout" : err.message };
  } finally {
    clearTimeout(timer);
  }
}

// One retry, because a single transient failure is not a broken link and a
// checker that cries wolf gets ignored.
async function checkTwice(url) {
  const first = await check(url);
  if (first.ok) return first;
  await new Promise((r) => setTimeout(r, 2000));
  return check(url);
}

(async () => {
  const targets = [];
  LISTINGS.forEach((l) => {
    if (l.website) targets.push({ name: l.name, kind: "website", url: l.website });
    if (l.referralUrl)
      targets.push({ name: l.name, kind: "referral", url: l.referralUrl });
  });

  console.log(`\nChecking ${targets.length} links from ${LISTINGS.length} listings…\n`);

  const broken = [];
  for (const t of targets) {
    const res = await checkTwice(t.url);
    if (res.ok) {
      console.log(`  ✓ ${res.status}  ${t.name} (${t.kind})`);
    } else {
      console.log(`  ✗ ${res.status}  ${t.name} (${t.kind})  ${t.url}`);
      broken.push({ ...t, status: res.status });
    }
  }

  if (broken.length) {
    console.error(`\n✗ ${broken.length} link(s) need attention:\n`);
    broken.forEach((b) =>
      console.error(`  - ${b.name} — ${b.kind} — ${b.url}  (${b.status})`)
    );
    console.error(
      "\n  Ask the business for the correct address rather than guessing at one.\n" +
        "  If they have no working site, set website to \"\" — an empty field is\n" +
        "  better than a link that fails.\n"
    );
    process.exit(1);
  }

  console.log(`\n✓ All ${targets.length} links resolved.\n`);
})();
