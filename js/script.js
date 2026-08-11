(function () {
  const TIER_ORDER = { prime: 0, featured: 1, free: 2 };

  const categoryGrid = document.getElementById("categoryGrid");
  const listingsEl = document.getElementById("listings");
  const searchInput = document.getElementById("searchInput");
  const resultsCount = document.getElementById("resultsCount");
  const clearFiltersBtn = document.getElementById("clearFilters");

  // A typo in data/listings.js stops that file executing, so LISTINGS never
  // gets defined and every listing vanishes. Say so plainly instead of
  // leaving a blank page with no clue what went wrong.
  if (typeof LISTINGS === "undefined" || typeof CATEGORIES === "undefined") {
    listingsEl.innerHTML =
      '<div class="empty-state">' +
      "<strong>The listings file has a syntax error.</strong><br>" +
      "Nothing is broken permanently — data/listings.js just couldn't be read, " +
      "usually a missing comma or an unclosed quote in the entry you edited last.<br>" +
      "Open the browser console (F12) to see the exact line." +
      "</div>";
    return;
  }

  // Drop entries that would render as a broken card, and say which and why in
  // the console. One bad listing should never take the other 40 down with it.
  const VALID_TIERS = ["free", "featured", "prime"];
  const seenIds = new Set();
  const rejected = [];

  const CLEAN_LISTINGS = LISTINGS.filter((l, i) => {
    const where = `entry #${i + 1} (${(l && l.name) || l?.id || "unnamed"})`;
    if (!l || typeof l !== "object") {
      rejected.push(`${where}: not a listing object`);
      return false;
    }
    if (!l.name) {
      rejected.push(`${where}: missing "name"`);
      return false;
    }
    if (!CATEGORIES.some((c) => c.key === l.category)) {
      rejected.push(`${where}: category "${l.category}" is not in CATEGORIES`);
      return false;
    }
    if (l.id && seenIds.has(l.id)) {
      rejected.push(`${where}: duplicate id "${l.id}"`);
      return false;
    }
    if (l.id) seenIds.add(l.id);
    if (l.tier && !VALID_TIERS.includes(l.tier)) {
      // Not fatal — just fall back to a free listing rather than dropping it.
      rejected.push(`${where}: unknown tier "${l.tier}", treated as "free"`);
      l.tier = "free";
    }
    return true;
  });

  if (rejected.length) {
    console.warn(
      "[Hanoi Directory] " +
        rejected.length +
        " listing problem(s) found in data/listings.js:\n  - " +
        rejected.join("\n  - ")
    );
  }

  let activeCategory = null; // null = all categories
  let searchTerm = "";

  function categoryMeta(key) {
    return CATEGORIES.find((c) => c.key === key);
  }

  // Business details are hand-typed into data/listings.js, so an stray "&" or
  // "<" in a name would otherwise break the page silently.
  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // Only allow real web links through to href. A bare "example.com" gets
  // https:// added; anything carrying another scheme (javascript:, data:) is
  // dropped rather than linked.
  function safeUrl(url) {
    const trimmed = String(url || "").trim();
    if (!trimmed) return "";
    if (/^https?:\/\//i.test(trimmed)) return esc(trimmed);
    if (/^[a-z][a-z0-9+.-]*:/i.test(trimmed)) return "";
    return esc("https://" + trimmed.replace(/^\/+/, ""));
  }

  function renderCategoryChips() {
    const allChip = document.createElement("button");
    allChip.className = "chip active";
    allChip.textContent = "All Services";
    allChip.dataset.key = "";
    categoryGrid.appendChild(allChip);

    CATEGORIES.forEach((cat) => {
      const chip = document.createElement("button");
      chip.className = "chip";
      chip.dataset.key = cat.key;
      chip.innerHTML = `${cat.icon} ${cat.label}`;
      categoryGrid.appendChild(chip);
    });

    categoryGrid.addEventListener("click", (e) => {
      const chip = e.target.closest(".chip");
      if (!chip) return;
      activeCategory = chip.dataset.key || null;
      [...categoryGrid.children].forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      render();
    });
  }

  function matchesSearch(listing, term) {
    if (!term) return true;
    const cat = categoryMeta(listing.category);
    const haystack = [
      listing.name,
      listing.description,
      listing.address,
      cat ? cat.label : "",
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(term);
  }

  function cardHtml(listing, showCategory) {
    const isFeatured = listing.tier === "featured" || listing.tier === "prime";
    const badge =
      listing.tier === "prime"
        ? `<span class="badge-featured">👑 Prime</span>`
        : listing.tier === "featured"
        ? `<span class="badge-featured">⭐ Featured</span>`
        : "";
    const phoneHref = (listing.phone || "").replace(/[^\d+]/g, "");
    const callBtn = listing.phone
      ? `<a href="tel:${esc(phoneHref)}">📞 Call</a>`
      : "";
    const url = safeUrl(listing.website);
    const webBtn = url
      ? `<a class="primary" href="${url}" target="_blank" rel="noopener">🌐 Website</a>`
      : "";
    const sampleNote = listing.sample
      ? `<div class="meta">🧪 sample listing — replace with a real business</div>`
      : "";
    // On the spotlight row the category is useful context; inside a category
    // section it would just repeat the heading.
    const catMeta = categoryMeta(listing.category);
    const catNote =
      showCategory && catMeta
        ? `<div class="meta">${catMeta.icon} ${esc(catMeta.label)}</div>`
        : "";

    return `
      <div class="card ${isFeatured ? "featured" : ""}">
        ${badge}
        <span class="english-level">English: ${esc(listing.englishLevel || "Unknown")}</span>
        <h3>${esc(listing.name)}</h3>
        <p class="desc">${esc(listing.description)}</p>
        <div class="meta">📍 ${esc(listing.address || "Hanoi")}</div>
        ${catNote}
        ${sampleNote}
        <div class="card-actions">${callBtn}${webBtn}</div>
      </div>
    `;
  }

  function render() {
    const term = searchTerm.trim().toLowerCase();
    clearFiltersBtn.hidden = !(activeCategory || term);

    const categoriesToShow = activeCategory
      ? CATEGORIES.filter((c) => c.key === activeCategory)
      : CATEGORIES;

    let totalResults = 0;
    let html = "";

    // Prime listings get a spotlight at the top of the homepage, across every
    // category. Only when nothing is filtered, so it never hides real results.
    const primes = CLEAN_LISTINGS.filter((l) => l.tier === "prime");
    if (!activeCategory && !term && primes.length) {
      html += `
        <section class="category-section spotlight">
          <h2 class="category-title">👑 Featured this week <span class="count">(${primes.length})</span></h2>
          <div class="card-grid">
            ${primes.map((l) => cardHtml(l, true)).join("")}
          </div>
        </section>
      `;
    }

    categoriesToShow.forEach((cat) => {
      const items = CLEAN_LISTINGS.filter(
        (l) => l.category === cat.key && matchesSearch(l, term)
      ).sort((a, b) => (TIER_ORDER[a.tier] ?? 2) - (TIER_ORDER[b.tier] ?? 2));

      if (items.length === 0) return;
      totalResults += items.length;

      html += `
        <section class="category-section">
          <h2 class="category-title">${cat.icon} ${esc(cat.label)} <span class="count">(${items.length})</span></h2>
          <div class="card-grid">
            ${items.map((l) => cardHtml(l, false)).join("")}
          </div>
        </section>
      `;
    });

    if (totalResults === 0) {
      html = `<div class="empty-state">No listings match yet. New businesses are added daily — check back soon, or <a href="#advertise">get your business listed</a>.</div>`;
    }

    listingsEl.innerHTML = html;
    resultsCount.textContent = `${totalResults} listing${totalResults === 1 ? "" : "s"}`;
  }

  searchInput.addEventListener("input", (e) => {
    searchTerm = e.target.value;
    render();
  });

  clearFiltersBtn.addEventListener("click", () => {
    activeCategory = null;
    searchTerm = "";
    searchInput.value = "";
    [...categoryGrid.children].forEach((c, i) =>
      c.classList.toggle("active", i === 0)
    );
    render();
  });

  renderCategoryChips();
  render();
})();
