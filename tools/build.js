/*
  STATIC PAGE BUILDER
  ===================
  Generates one page per category from data/listings.js, plus a sitemap.

  Why this exists: the homepage renders its listings with JavaScript, so to a
  search engine the whole directory was a single URL. These pages put every
  category in real HTML at its own address, which is what someone searching
  "english speaking dentist hanoi" should actually land on.

  Run it after editing listings:      node tools/build.js

  You normally won't need to — GitHub rebuilds these automatically whenever
  data/listings.js changes on main. Run it locally if you want to preview.
*/

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const SITE = "https://hanoiexpatdirectory.com";

// --- Load the data ------------------------------------------------------
const sandbox = {};
vm.runInNewContext(
  fs.readFileSync(path.join(ROOT, "data", "listings.js"), "utf8") +
    ';globalThis.__out__ = { categories: CATEGORIES, listings: LISTINGS };',
  sandbox,
  { filename: "data/listings.js" }
);
const { categories: CATEGORIES, listings: LISTINGS } = sandbox.__out__;

// Guides are optional — the site builds fine before any exist.
let GUIDES = [];
const guidesPath = path.join(ROOT, "data", "guides.js");
if (fs.existsSync(guidesPath)) {
  const gs = {};
  vm.runInNewContext(
    fs.readFileSync(guidesPath, "utf8") + ";globalThis.__g__ = GUIDES;",
    gs,
    { filename: "data/guides.js" }
  );
  GUIDES = gs.__g__ || [];
}

/*
  A short, specific introduction per category. These are deliberately about
  what to check before you book, not padding — a page of restated listings
  reads as thin content and gets demoted rather than ranked.
*/
const INTROS = {
  doctors:
    "International clinics in Hanoi generally run English-speaking reception and can handle insurance paperwork directly. Ask whether your insurer is billed directly or whether you pay and claim back, because the difference matters for anything serious.",
  dentists:
    "Dental work is one of the more common reasons expats in Hanoi pay out of pocket, so it is worth asking for a written quote before treatment starts. Clinics used to foreign patients will provide one without being pushed.",
  vets:
    "If you have brought a pet to Vietnam or adopted here, find your vet before you need one. Ask about out-of-hours cover when you register — an emergency at 2am is a bad time to discover the clinic closes at six.",
  hairdressers:
    "The gap between a good and a bad haircut in Hanoi is usually communication rather than skill. Salons used to foreign customers will talk through what you want first, and bringing a photo removes most of the remaining risk.",
  massage:
    "Massage and spa prices in Hanoi vary enormously for broadly similar treatments. Check whether the quoted price includes tip, and whether the therapist is trained in the specific style you are booking.",
  chiropractors:
    "Chiropractic, physiotherapy and osteopathy are grouped together here because Hanoi clinics often provide more than one. If you are being treated for something specific, ask which discipline the practitioner is actually qualified in.",
  lawyers:
    "Most foreigners in Hanoi need a lawyer for one of three things: a business registration, a property lease, or a work permit. Firms used to foreign clients will quote a fixed fee for these rather than charging hourly.",
  movers:
    "International movers handle customs paperwork as well as the physical move, which is the part that goes wrong without help. Get quotes from more than one, and confirm whether the price covers door to door or port to port.",
  realestate:
    "Rental agents in Hanoi are usually paid by the landlord, so their service is free to you — but that also means their incentive is to close, not to find your best option. View several places before committing.",
  visa:
    "Visa and work permit rules in Vietnam change more often than most other paperwork, so confirm current requirements rather than relying on what worked for someone last year. A good agent will tell you what has changed.",
  finance:
    "Health insurance and international banking are the two financial services most expats in Hanoi need early. Ask specifically whether a health policy covers treatment outside Vietnam, since many do not.",
  schools:
    "International schools in Hanoi differ most in curriculum — British, American and IB routes are not interchangeable if you expect to move again. Language schools and private tutors are listed here too.",
  auto:
    "Renting or buying a motorbike is the default way to get around Hanoi. Confirm what licence you legally need for the engine size you are riding, and check the paperwork is genuine before handing over money.",
  tailors:
    "Hanoi tailoring is good value but the outcome depends on fittings. Allow time for at least two, and be wary of anyone promising a finished suit overnight.",
  fitness:
    "Gyms and studios in Hanoi range from full international facilities to small specialist studios. Ask about the contract length before joining — month-to-month is common and worth requesting.",
  homeservices:
    "Cleaning, laundry, handyman and aircon servicing are inexpensive in Hanoi and most providers will work to a regular schedule. Agree the scope in writing for anything recurring.",
};

// --- Helpers ------------------------------------------------------------
function esc(str) {
  return String(str == null ? "" : str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function safeUrl(url) {
  const t = String(url || "").trim();
  if (!t) return "";
  if (/^https?:\/\//i.test(t)) return esc(t);
  if (/^[a-z][a-z0-9+.-]*:/i.test(t)) return "";
  return esc("https://" + t.replace(/^\/+/, ""));
}

const TIER_ORDER = { prime: 0, featured: 1, free: 2 };

function cardHtml(l) {
  const badge =
    l.tier === "prime"
      ? '<span class="badge-featured">👑 Prime</span>'
      : l.tier === "featured"
      ? '<span class="badge-featured">⭐ Featured</span>'
      : "";
  const phoneHref = (l.phone || "").replace(/[^\d+]/g, "");
  const call = l.phone ? `<a href="tel:${esc(phoneHref)}">📞 Call</a>` : "";
  const url = safeUrl(l.website);
  const web = url
    ? `<a class="primary" href="${url}" target="_blank" rel="noopener">🌐 Website</a>`
    : "";
  return `      <div class="card ${l.tier === "free" ? "" : "featured"}">
        ${badge}
        <span class="english-level">English: ${esc(l.englishLevel || "Unknown")}</span>
        <h3>${esc(l.name)}</h3>
        <p class="desc">${esc(l.description)}</p>
        <div class="meta">📍 ${esc(l.address || "Hanoi")}</div>
        <div class="card-actions">${call}${web}</div>
      </div>`;
}

// Structured data, so search engines read these as real businesses with real
// phone numbers rather than as a list of link text.
function jsonLd(cat, items) {
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `English-speaking ${cat.label.toLowerCase()} in Hanoi`,
    itemListElement: items.map((l, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "LocalBusiness",
        name: l.name,
        description: l.description,
        telephone: l.phone || undefined,
        url: safeUrl(l.website) || undefined,
        address: {
          "@type": "PostalAddress",
          streetAddress: l.address,
          addressLocality: "Hanoi",
          addressCountry: "VN",
        },
      },
    })),
  };
  return JSON.stringify(data, null, 2);
}

function otherCategoryLinks(currentKey) {
  return CATEGORIES.filter((c) => c.key !== currentKey)
    .map((c) => `<a href="${SITE}/${c.key}/">${c.icon} ${esc(c.label)}</a>`)
    .join("\n      ");
}

// A listing page answers "who"; the guide answers "how much" and "any good".
// Someone who lands on one usually wants the other, and the link passes
// authority between two pages targeting the same subject.
function guideLinkFor(cat) {
  const guide = GUIDES.find(
    (g) => g.category === cat.key && (g.questions || []).some((q) => q.a && q.a.trim())
  );
  if (!guide) return "";
  return `  <section class="category-section">
    <h2 class="category-title">Questions about ${esc(cat.label.toLowerCase())} in Hanoi</h2>
    <p class="guide-lede">${esc(guide.intro)}</p>
    <p><a class="cta-btn" href="${SITE}/guides/${guide.slug}/">Read the guide →</a></p>
  </section>
`;
}

function page(cat, items) {
  const title = `English-Speaking ${cat.label} in Hanoi`;
  const desc = `${items.length} English-speaking ${cat.label.toLowerCase()} in Hanoi, with phone numbers, districts and the level of English spoken. Free directory for expats.`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(title)} | Hanoi Expat Directory</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${SITE}/${cat.key}/">
<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 30 20%22><rect width=%2230%22 height=%2220%22 fill=%22%23da251d%22/><polygon fill=%22%23ffff00%22 points=%2215,4 16.57,8.84 21.66,8.84 17.54,11.83 19.11,16.66 15,13.67 10.89,16.66 12.46,11.83 8.34,8.84 13.43,8.84%22/></svg>">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Hanoi Expat Directory">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${SITE}/${cat.key}/">
<meta property="og:image" content="${SITE}/img/social-card.png">
<meta name="twitter:card" content="summary_large_image">
<link rel="stylesheet" href="${SITE}/css/style.css">
<script type="module" src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "5dff00a34d7e47459a37916dae3bd27f"}'></script>
<script type="application/ld+json">
${jsonLd(cat, items)}
</script>
</head>
<body>

<header class="site-header">
  <div class="wrap header-inner">
    <a href="${SITE}/" class="logo">
      <svg class="logo-flag" viewBox="0 0 30 20" role="img" aria-label="Vietnam">
        <rect width="30" height="20" fill="#da251d"/>
        <polygon fill="#ffff00" points="15,4 16.57,8.84 21.66,8.84 17.54,11.83 19.11,16.66 15,13.67 10.89,16.66 12.46,11.83 8.34,8.84 13.43,8.84"/>
      </svg>
      Hanoi <span>Expat Directory</span>
    </a>
    <nav class="header-nav">
      <a href="${SITE}/">All categories</a>
      <a href="${SITE}/#get-listed">List Your Business</a>
    </nav>
  </div>
</header>

<section class="hero">
  <div class="wrap">
    <h1>${esc(cat.icon)} ${esc(title)}</h1>
    <p>${esc(INTROS[cat.key] || "")}</p>
  </div>
</section>

<main class="wrap">
  <div class="results-bar">
    <span>${items.length} listing${items.length === 1 ? "" : "s"}, all confirmed by phone</span>
    <a class="link-btn" href="${SITE}/">← All categories</a>
  </div>
  <section class="category-section">
    <div class="card-grid">
${items.map(cardHtml).join("\n")}
    </div>
  </section>

${guideLinkFor(cat)}
  <section class="category-section">
    <h2 class="category-title">Other services in Hanoi</h2>
    <nav class="cat-links">
      ${otherCategoryLinks(cat.key)}
    </nav>
  </section>
</main>

<section class="advertise">
  <div class="wrap">
    <h2>Run a ${esc(cat.label.toLowerCase().replace(/s$/, ""))} business in Hanoi?</h2>
    <p>Get listed free in front of English-speaking residents searching for exactly what you do.</p>
    <a class="cta-btn" href="${SITE}/#get-listed">Get Listed →</a>
  </div>
</section>

<footer class="site-footer">
  <div class="wrap">
    <p>Made by expats living in Hanoi. Spotted something out of date? <a href="mailto:martynsessford@gmail.com">Let us know</a>.</p>
    <p class="fine-print">Every listing here was confirmed by phone. Details change — please check with the business before visiting.</p>
  </div>
</footer>

</body>
</html>
`;
}

// --- Write everything ---------------------------------------------------
let written = 0;
const urls = [`${SITE}/`];

CATEGORIES.forEach((cat) => {
  const items = LISTINGS.filter((l) => l.category === cat.key).sort(
    (a, b) => (TIER_ORDER[a.tier] ?? 2) - (TIER_ORDER[b.tier] ?? 2)
  );
  // A page with nothing on it is worse than no page at all.
  if (items.length === 0) return;

  const dir = path.join(ROOT, cat.key);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), page(cat, items));
  urls.push(`${SITE}/${cat.key}/`);
  written++;
});

// --- Guide (Q&A) pages --------------------------------------------------
/*
  Two things make these worth building rather than just more prose:

  FAQPage structured data gives an assistant clean question/answer pairs it
  can lift, instead of leaving it to infer them from paragraphs.

  Every answer opens with a complete standalone sentence, because that is the
  unit that gets quoted — in a search result, or by an AI that read the page
  and is answering somebody who will never visit it.
*/
function faqJsonLd(guide, answered) {
  return JSON.stringify(
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      name: guide.title,
      mainEntity: answered.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
    null,
    2
  );
}

function guidePage(guide, answered, cat, items) {
  const desc = guide.intro;
  const url = `${SITE}/guides/${guide.slug}/`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(guide.title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${url}">
<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 30 20%22><rect width=%2230%22 height=%2220%22 fill=%22%23da251d%22/><polygon fill=%22%23ffff00%22 points=%2215,4 16.57,8.84 21.66,8.84 17.54,11.83 19.11,16.66 15,13.67 10.89,16.66 12.46,11.83 8.34,8.84 13.43,8.84%22/></svg>">
<meta property="og:type" content="article">
<meta property="og:site_name" content="Hanoi Expat Directory">
<meta property="og:title" content="${esc(guide.title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE}/img/social-card.png">
<meta name="twitter:card" content="summary_large_image">
<link rel="stylesheet" href="${SITE}/css/style.css">
<script type="module" src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "5dff00a34d7e47459a37916dae3bd27f"}'></script>
<script type="application/ld+json">
${faqJsonLd(guide, answered)}
</script>
</head>
<body>

<header class="site-header">
  <div class="wrap header-inner">
    <a href="${SITE}/" class="logo">
      <svg class="logo-flag" viewBox="0 0 30 20" role="img" aria-label="Vietnam">
        <rect width="30" height="20" fill="#da251d"/>
        <polygon fill="#ffff00" points="15,4 16.57,8.84 21.66,8.84 17.54,11.83 19.11,16.66 15,13.67 10.89,16.66 12.46,11.83 8.34,8.84 13.43,8.84"/>
      </svg>
      Hanoi <span>Expat Directory</span>
    </a>
    <nav class="header-nav">
      <a href="${SITE}/">All categories</a>
      <a href="${SITE}/#get-listed">List Your Business</a>
    </nav>
  </div>
</header>

<section class="hero">
  <div class="wrap">
    <h1>${esc(guide.title)}</h1>
    <p>${esc(guide.intro)}</p>
  </div>
</section>

<main class="wrap">
  <article class="guide">
${
  guide.asOf
    ? `    <p class="checked">Prices checked ${esc(guide.asOf)}. Vietnamese đồng is the authoritative figure — dollar equivalents move with the exchange rate.</p>\n`
    : ""
}${answered
  .map(
    (item) => `    <section class="qa">
      <h2>${esc(item.q)}</h2>
      <p>${esc(item.a)}</p>${
      item.asOf ? `\n      <p class="asof">Checked ${esc(item.asOf)}.</p>` : ""
    }
    </section>`
  )
  .join("\n")}
${
  (guide.sources || []).length
    ? `    <section class="sources">
      <h2>Where these prices come from</h2>
      <ul>
${guide.sources
  .map(
    ([name, href]) =>
      `        <li><a href="${esc(href)}" target="_blank" rel="noopener nofollow">${esc(name)}</a></li>`
  )
  .join("\n")}
      </ul>
      <p class="asof">Prices are market benchmarks for Hanoi, not quotes from the businesses listed below. Always confirm directly before booking.</p>
    </section>\n`
    : ""
}  </article>

  <section class="category-section">
    <h2 class="category-title">${cat.icon} ${esc(cat.label)} in Hanoi</h2>
    <p class="guide-lede">${items.length} ${esc(cat.label.toLowerCase())} with English-speaking staff, each confirmed by phone.</p>
    <div class="card-grid">
${items.map(cardHtml).join("\n")}
    </div>
    <p class="guide-lede"><a href="${SITE}/${cat.key}/">See the full ${esc(cat.label.toLowerCase())} listing →</a></p>
  </section>
</main>

<footer class="site-footer">
  <div class="wrap">
    <p>Made by expats living in Hanoi. Something out of date? <a href="mailto:martynsessford@gmail.com">Let us know</a>.</p>
    <p class="fine-print">Every business listed here was confirmed by phone. Prices and details change — please check directly before booking.</p>
  </div>
</footer>

</body>
</html>
`;
}

let guidesWritten = 0;
const skippedQuestions = [];

GUIDES.forEach((guide) => {
  // An unanswered question is simply left off. Publishing the question with
  // an empty or invented answer would be worse than not having the page.
  const answered = (guide.questions || []).filter((x) => x.a && x.a.trim());
  const unanswered = (guide.questions || []).filter((x) => !x.a || !x.a.trim());
  unanswered.forEach((x) => skippedQuestions.push(`${guide.slug}: ${x.q}`));

  if (answered.length === 0) return;

  const cat = CATEGORIES.find((c) => c.key === guide.category);
  if (!cat) {
    console.error(`✗ guide "${guide.slug}" points at unknown category "${guide.category}".`);
    process.exitCode = 1;
    return;
  }
  const items = LISTINGS.filter((l) => l.category === cat.key).sort(
    (a, b) => (TIER_ORDER[a.tier] ?? 2) - (TIER_ORDER[b.tier] ?? 2)
  );

  const dir = path.join(ROOT, "guides", guide.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), guidePage(guide, answered, cat, items));
  urls.push(`${SITE}/guides/${guide.slug}/`);
  guidesWritten++;
});

// Write real anchors into the homepage between the build markers. These must
// be actual HTML, not injected by script — a crawler that only sees an empty
// nav never discovers the category pages, which was the whole problem.
const indexPath = path.join(ROOT, "index.html");
let index = fs.readFileSync(indexPath, "utf8");
const START = "<!-- BUILD:CATEGORY-LINKS -->";
const END = "<!-- /BUILD:CATEGORY-LINKS -->";
const linkBlock = CATEGORIES.filter((c) =>
  LISTINGS.some((l) => l.category === c.key)
)
  .map(
    (c) =>
      `      <a href="/${c.key}/">${c.icon} ${esc(c.label)}</a>`
  )
  .join("\n");

const startAt = index.indexOf(START);
const endAt = index.indexOf(END);
if (startAt === -1 || endAt === -1) {
  console.error("\n✗ Could not find the BUILD:CATEGORY-LINKS markers in index.html.\n");
  process.exit(1);
}
index =
  index.slice(0, startAt + START.length) +
  "\n" +
  linkBlock +
  "\n      " +
  index.slice(endAt);

// Tell the homepage which categories have a guide, so filtering to one can
// offer it. Written here rather than hand-maintained, so the homepage can
// never link to a guide that was removed or never published.
const G_START = "// BUILD:GUIDE-SLUGS";
const G_END = "// /BUILD:GUIDE-SLUGS";
const gStart = index.indexOf(G_START);
const gEnd = index.indexOf(G_END);
if (gStart === -1 || gEnd === -1) {
  console.error("\n✗ Could not find the BUILD:GUIDE-SLUGS markers in index.html.\n");
  process.exit(1);
}
// Map category -> the guide's own opening question. Templating a sentence
// from the category label produced things like "What do visa & immigration
// cost in Hanoi?"; the real question is already written properly.
const guideInfo = {};
GUIDES.forEach((g) => {
  const first = (g.questions || []).find((q) => q.a && q.a.trim());
  if (first) guideInfo[g.category] = { slug: g.slug, q: first.q };
});
index =
  index.slice(0, gStart + G_START.length) +
  "\n  window.GUIDE_INFO = " +
  JSON.stringify(guideInfo) +
  ";\n  " +
  index.slice(gEnd);

fs.writeFileSync(indexPath, index);

const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(
  path.join(ROOT, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((u) => `  <url>\n    <loc>${u}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`)
  .join("\n")}
</urlset>
`
);

fs.writeFileSync(
  path.join(ROOT, "robots.txt"),
  `User-agent: *
Allow: /
Disallow: /tools/

Sitemap: ${SITE}/sitemap.xml
`
);

console.log(`\n✓ Built ${written} category pages and ${guidesWritten} guide pages.`);
console.log(`  sitemap.xml and robots.txt written — ${urls.length} URLs total.`);

if (skippedQuestions.length) {
  console.log(
    `\n⚠ ${skippedQuestions.length} question(s) left off, no answer written yet:`
  );
  skippedQuestions.forEach((q) => console.log("    - " + q));
  console.log(
    "\n  These are the ones worth real research — a price you gathered yourself\n" +
      "  is the reason anyone would cite this site. Fill them in data/guides.js.\n"
  );
} else {
  console.log("");
}
