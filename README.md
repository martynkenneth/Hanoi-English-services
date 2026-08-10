# Hanoi Expat Directory

A super-simple, static directory of English-speaking services in Hanoi — doctors, vets, hairdressers, lawyers, movers and more. No backend, no database, no build step. Just HTML/CSS/JS.

## Run it locally

Open `index.html` in a browser, or serve it with any static server, e.g.:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Add a new listing (do this daily)

Everything lives in **`data/listings.js`**. Copy an existing entry, paste it at the top of the `LISTINGS` array, and fill in the real details. See the comment at the top of that file for the field guide. No build step — save, commit, push, done.

Delete `sample: true` and the demo listings once you have real ones — they're only there to show the layout.

### Listing tiers (your monetization model)

| Tier | Behaviour |
|---|---|
| `free` | Normal listing in its category |
| `featured` | ⭐ gold badge, shown at the top of its category |
| `prime` | 👑 badge, top of its category, positioned as the top-tier paid option |

Set `tier` on any listing to control placement — this is what you'll sell as a subscription.

## Add a new category

Add an entry to the `CATEGORIES` array in `data/listings.js` (pick a short `key`, a `label`, and an emoji `icon`), then use that `key` on any listing.

Categories included out of the box, picked for what expats in Hanoi actually need:

- 🩺 Doctors & Clinics
- 🦷 Dentists
- 🐾 Vets & Pet Care
- 💇 Hairdressers & Barbers
- 💆 Massage & Spa
- 🦴 Chiropractors
- ⚖️ Lawyers & Legal
- 📦 House Movers
- 🏠 Real Estate Agents
- 🛂 Visa & Immigration
- 💰 Insurance & Banking
- 🎓 Schools & Tutors (incl. Vietnamese lessons)
- 🚗 Auto & Motorbike Services
- 🧵 Tailors
- 🏋️ Fitness & Gyms
- 🧹 Home Services & Cleaning

## Deploying (free) with GitHub Pages

1. Push this repo to GitHub (already done if you're reading this from the repo).
2. In the repo, go to **Settings → Pages**.
3. Under "Build and deployment", choose **Deploy from a branch**, pick this branch and `/ (root)`.
4. Save — GitHub will give you a URL like `https://<username>.github.io/Hanoi-English-services/`.

That URL is what you share in the Facebook expat groups.

## Marketing / growth notes

- The homepage search bar and category chips are the main navigation — keep listing descriptions short (one line) so cards stay scannable on mobile, since most traffic from Facebook groups will be on phones.
- The **"List Your Business"** section (`#advertise`) has three pricing tiers baked in (Free / Featured / Prime) with a `mailto:` CTA — update the email address in `index.html` if needed, or swap it for a form later.
- Every listing you add manually can be a free listing to start — use "Featured"/"Prime" as the upsell once a business wants better placement.
