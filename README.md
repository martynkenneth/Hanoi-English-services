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
| `prime` | 👑 badge, top of its category, **plus** a "Featured this week" spotlight at the top of the homepage |

The Prime spotlight only shows when no search or category filter is active, so a
paid placement never pushes aside what someone is actively looking for.

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
4. Save — GitHub serves the site, and the `CNAME` file points it at the
   custom domain.

`https://hanoiexpatdirectory.com` is what you share in the Facebook expat
groups. The old github.io address keeps working and redirects.

## Connecting the "Get Listed" form

The form on the site is plain HTML in `index.html`, so it always renders.
Submissions POST to a Google Form. That is deliberate: the form used to be a
Jotform embed, and `form.jotform.com` is unreachable from Vietnamese ISPs —
the entire audience for this directory — so it appeared as a grey box.

Everything is wired up except the Google Form itself. Do this once:

1. **Create the form** at [forms.new](https://forms.new). Add one question per
   field, in this order:

   | # | Question | Type |
   |---|---|---|
   | 1 | Business name | Short answer |
   | 2 | Category | Short answer |
   | 3 | One-line description | Short answer |
   | 4 | Address or district | Short answer |
   | 5 | Phone or Zalo | Short answer |
   | 6 | Email | Short answer |
   | 7 | Website | Short answer |
   | 8 | English level | Short answer |
   | 9 | Listing type | Short answer |
   | 10 | Anything else | Paragraph |

   **Use Short answer even for the three that are dropdowns on the site.**
   Google rejects a response whose multiple-choice value doesn't exactly match
   one of its options, so renaming a single category would start silently
   losing submissions. Our own dropdown already limits what people can pick.

2. **Turn on email alerts:** Responses tab → ⋮ → "Get email notifications for
   new responses". Without this you will not know a business applied.

3. **Get the pre-filled link:** ⋮ menu → "Get pre-filled link". Type the field's
   own name into each box — literally `business_name` in the first, `category`
   in the second, and so on — then "Get link" → "Copy link".

4. **Fill in `js/form.js`.** The copied URL contains `entry.123456=business_name`
   pairs. Put each number against the matching name in `FIELD_IDS`, and set
   `ACTION` to your form URL ending in `/formResponse` (not `/viewform`).

Until `ACTION` is set the form still works — it falls back to opening the
visitor's email client with every answer pre-filled. Nothing is ever lost, but
the fallback loses people, so connect it properly.

## Already set up

- **Live** at `https://hanoiexpatdirectory.com` via GitHub Pages from `main`.
  Pushing to `main` redeploys within a minute. The domain is set by the
  `CNAME` file in the repo root — deleting it reverts the site to the
  github.io address, so leave it alone.
- **Cloudflare Web Analytics** — no cookies, so no cookie banner needed.
  Numbers at dash.cloudflare.com → Analytics & Logs → Web Analytics.
- **Social share tags** point at the GitHub Pages URL. If you move to a custom
  domain, update the `og:` tags in `index.html` and re-scrape with the
  [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/).
- **Listing safety net** — see "If you break the listings file" below.

## If you break the listings file

`data/listings.js` is hand-edited JavaScript, so a missing comma is easy. Three
things catch it:

- The page shows a plain-English error instead of going blank, and skips a
  single bad entry rather than dropping every listing.
- `node tools/check-listings.js` reports syntax errors, unknown categories,
  duplicate ids and oversold paid slots.
- GitHub runs that check on every push and emails you if it fails. The live
  site keeps serving the last good version in the meantime.

## Marketing / growth notes

- The homepage search bar and category chips are the main navigation — keep listing descriptions short (one line) so cards stay scannable on mobile, since most traffic from Facebook groups will be on phones.
- The **"List Your Business"** section (`#advertise`) has three tiers (Free / Featured / Prime). The paid ones sell scarce position, not activity: 3 Featured and 1 Prime per category, enforced by `tools/check-listings.js` so a slot cannot be oversold by accident. Change the caps in `SLOT_LIMITS` there and in the pricing cards together.
- Every listing you add manually can be a free listing to start — use "Featured"/"Prime" as the upsell once a business wants better placement.
