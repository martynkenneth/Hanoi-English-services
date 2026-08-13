/*
  Checks data/listings.js for the mistakes that are easy to make by hand.
  Run it yourself before pushing:      node tools/check-listings.js
  GitHub also runs it automatically on every push and emails you if it fails.

  Exits 0 when everything is fine, 1 when something needs fixing.
*/

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const dataFile = path.join(__dirname, "..", "data", "listings.js");
const problems = [];
const warnings = [];

// --- 1. Does the file parse at all? ------------------------------------
let CATEGORIES, LISTINGS;
try {
  const sandbox = {};
  // `const` at the top level of a script is block-scoped and never lands on
  // the sandbox object, so hand the two values out explicitly.
  const source =
    fs.readFileSync(dataFile, "utf8") +
    '\n;globalThis.__out__ = {' +
    '  categories: typeof CATEGORIES === "undefined" ? undefined : CATEGORIES,' +
    '  listings: typeof LISTINGS === "undefined" ? undefined : LISTINGS' +
    '};';
  vm.runInNewContext(source, sandbox, { filename: "data/listings.js" });
  CATEGORIES = sandbox.__out__.categories;
  LISTINGS = sandbox.__out__.listings;
} catch (err) {
  console.error("\n✗ data/listings.js could not be read.\n");
  console.error("  " + err.message);
  console.error(
    "\n  This is almost always a missing comma or an unclosed quote,\n" +
      "  usually in the entry you edited last.\n"
  );
  process.exit(1);
}

if (!Array.isArray(CATEGORIES)) problems.push('CATEGORIES is missing or is not a list.');
if (!Array.isArray(LISTINGS)) problems.push('LISTINGS is missing or is not a list.');
if (problems.length) {
  console.error("\n✗ " + problems.join("\n✗ ") + "\n");
  process.exit(1);
}

// --- 2. Are the individual entries usable? -----------------------------
const VALID_TIERS = ["free", "featured", "prime"];
const categoryKeys = CATEGORIES.map((c) => c.key);
const seenIds = new Map();

LISTINGS.forEach((l, i) => {
  const label = `entry #${i + 1} "${(l && l.name) || (l && l.id) || "unnamed"}"`;

  if (!l || typeof l !== "object") {
    problems.push(`${label}: not a listing object.`);
    return;
  }
  if (!l.name) problems.push(`${label}: missing "name".`);
  if (!l.id) {
    warnings.push(`${label}: no "id" set. Give it a unique one.`);
  } else if (seenIds.has(l.id)) {
    problems.push(
      `${label}: id "${l.id}" is already used by entry #${seenIds.get(l.id)}. Ids must be unique.`
    );
  } else {
    seenIds.set(l.id, i + 1);
  }

  if (!categoryKeys.includes(l.category)) {
    problems.push(
      `${label}: category "${l.category}" does not exist.\n` +
        `      Valid options: ${categoryKeys.join(", ")}`
    );
  }
  if (l.tier && !VALID_TIERS.includes(l.tier)) {
    problems.push(`${label}: tier "${l.tier}" is not one of ${VALID_TIERS.join(", ")}.`);
  }
  if (!l.description) warnings.push(`${label}: no description — the card will look bare.`);
  if (!l.phone && !l.website) {
    warnings.push(`${label}: no phone and no website, so nobody can contact them.`);
  }
  if (l.website && !/^https?:\/\//i.test(l.website)) {
    warnings.push(`${label}: website "${l.website}" has no https:// prefix.`);
  }
});

// --- 3. Are the paid slots oversold? -----------------------------------
// The pricing page promises "only 3 Featured per category" and "the only
// Prime in your category". Selling a fourth Featured dentist silently breaks
// that promise for the three who already paid, so make it impossible to miss.
const SLOT_LIMITS = { featured: 3, prime: 1 };

Object.entries(SLOT_LIMITS).forEach(([tier, limit]) => {
  const byCategory = new Map();
  LISTINGS.forEach((l) => {
    if (l && l.tier === tier) {
      if (!byCategory.has(l.category)) byCategory.set(l.category, []);
      byCategory.get(l.category).push(l.name || l.id || "unnamed");
    }
  });

  byCategory.forEach((names, category) => {
    if (names.length > limit) {
      problems.push(
        `category "${category}" has ${names.length} ${tier} listings but only ${limit} ` +
          `${limit === 1 ? "slot is" : "slots are"} sold:\n` +
          `      ${names.join(", ")}\n` +
          `      Either downgrade one, or change SLOT_LIMITS here and on the pricing page.`
      );
    }
  });
});

// --- 4. Report ---------------------------------------------------------
const sampleCount = LISTINGS.filter((l) => l && l.sample).length;
const unverifiedCount = LISTINGS.filter((l) => l && l.unverified && !l.sample).length;
const confirmedCount = LISTINGS.length - sampleCount - unverifiedCount;

if (warnings.length) {
  console.log("\n⚠ Worth a look (these do not break anything):\n");
  warnings.forEach((w) => console.log("  - " + w));
}

if (problems.length) {
  console.error(`\n✗ ${problems.length} problem(s) must be fixed:\n`);
  problems.forEach((p) => console.error("  - " + p));
  console.error("");
  process.exit(1);
}

console.log(
  `\n✓ data/listings.js is valid — ${LISTINGS.length} listings across ` +
    `${CATEGORIES.length} categories.\n` +
    `  ${confirmedCount} confirmed, ${unverifiedCount} awaiting verification` +
    (sampleCount ? `, ${sampleCount} still samples` : "") +
    ".\n"
);
