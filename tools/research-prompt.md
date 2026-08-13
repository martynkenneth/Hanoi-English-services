# Research prompt for collecting listings

Paste the block below into ChatGPT (with web browsing enabled) to gather a
batch of real businesses. Paste its JSON output back and it can be converted
straight into `data/listings.js`.

Reuse this for later batches by changing the category list in step 1 — ask for
only the categories still thin on listings, and tell it which businesses are
already in the directory so it doesn't repeat them.

---

You are helping compile a directory of English-speaking services in Hanoi,
Vietnam, aimed at expats and foreign residents.

**Use web browsing for every entry. Do not answer from memory.**

## What I need

2–3 real businesses in Hanoi for each category listed below. Each one must:

- Actually exist and be currently operating in Hanoi
- Serve English-speaking customers — this is the whole point of the directory
- Have a findable phone number and address

## Categories

Use these exact `category` keys:

| key | meaning |
|---|---|
| `doctors` | Doctors & clinics, general practice, international hospitals |
| `dentists` | Dental clinics |
| `vets` | Vets, pet clinics, pet grooming |
| `hairdressers` | Hairdressers and barbers |
| `massage` | Massage and spa |
| `chiropractors` | Chiropractors, physiotherapy, osteopathy |
| `lawyers` | Lawyers and legal services |
| `movers` | House movers, relocation, shipping |
| `realestate` | Real estate agents, rental agents |
| `visa` | Visa, work permit and immigration services |
| `finance` | Insurance brokers, banking, financial advice |
| `schools` | International schools, language schools, tutors |
| `auto` | Car and motorbike sales, rental, repair |
| `tailors` | Tailors and clothing alterations |
| `fitness` | Gyms, fitness studios, yoga |
| `homeservices` | Cleaning, handyman, aircon servicing, laundry |

## Output format

Return **only** a JSON array, no commentary before or after. One object per
business, with exactly these keys:

```json
[
  {
    "id": "hanoi-family-medical",
    "name": "Hanoi Family Medical Practice",
    "category": "doctors",
    "description": "International GP clinic with English-speaking doctors and 24/7 emergency line.",
    "address": "Ba Dinh District, Hanoi",
    "phone": "+84 24 3843 0748",
    "website": "https://www.hfh.com.vn",
    "englishLevel": "Fluent",
    "verify": "https://www.google.com/maps/search/Hanoi+Family+Medical+Practice",
    "source": "Official website, accessed via search",
    "confidence": "high"
  }
]
```

### Field rules

- **id** — lowercase, dashes not spaces, unique across the whole list
- **name** — the business's own name, as it writes it
- **category** — exactly one key from the table above, nothing else
- **description** — one line, **90 characters maximum**, saying what they do
  and why an English speaker would pick them. No marketing fluff.
- **address** — district is enough, e.g. `Tay Ho District, Hanoi`. Include the
  street if you are confident of it.
- **phone** — international format, `+84 ...`. Use `""` if you cannot find one.
- **website** — full URL including `https://`, or a Facebook page URL.
  Use `""` if they genuinely have neither.
- **englishLevel** — exactly one of `Fluent`, `Good`, `Basic`. Base it on
  evidence: an English website or English reviews mentioning staff who speak
  it. If there is no evidence either way, use `Basic` and say so in `source`.
- **verify** — a Google Maps search URL for the business, so I can check it in
  one click
- **source** — where you got the details, in a few words
- **confidence** — `high`, `medium` or `low`, for the phone and address
  specifically

## Rules that matter more than completeness

1. **Never invent a phone number, address or website.** A wrong number is worse
   than a missing one — it sends people to a stranger and makes the directory
   look unreliable. Use `""` and set `confidence` to `low`.
2. **Return fewer entries rather than padding.** If you can only verify one
   real business in a category, return one. Do not fill space.
3. **No permanently closed businesses.** Check recent reviews or activity.
4. **No duplicates**, including the same chain listed twice under different
   branches. One entry per business.
5. **Prefer businesses with evidence of serving foreigners** — an English
   website, English-language reviews, or expat forum mentions.

Start now. Return only the JSON array.
