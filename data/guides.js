/*
  HANOI EXPAT DIRECTORY — GUIDES (Q&A PAGES)
  =========================================
  Question-and-answer pages: "how much does a dentist cost in Hanoi", "are
  Hanoi vets any good". They target what people actually type, and they are
  what an AI assistant quotes when someone asks it about Hanoi.

  Prices below come from the Hanoi English-Service Price Benchmark, researched
  21 August 2026, with each category's sources listed on its page.

  ---------------------------------------------------------------------------
  THE RULES
  ---------------------------------------------------------------------------
  1. Only write answers you know are true. A dated, sourced number is the
     entire reason anyone would cite this page over the hundred AI-written
     ones. "Prices are affordable" is worth nothing.

  2. Say when you checked. An undated figure reads as guessed.

  3. Never attach a price to a named business unless that business published
     it. The ranges here are market benchmarks, not quotes from the businesses
     in the directory.

  4. Where the underlying research was weak, say so in the answer. Hedged and
     honest beats confident and wrong — and the hedge is itself a trust signal.

  5. An empty answer ("") is left off the published page entirely. That is
     always better than filler.

  ---------------------------------------------------------------------------
  REFRESHING PRICES
  ---------------------------------------------------------------------------
  These date. Re-check every six months, update the numbers and the asOf, and
  the pages rebuild themselves.
*/

const GUIDES = [
  // ---------------------------------------------------------------- doctors
  {
    slug: "doctors",
    category: "doctors",
    title: "Seeing a Doctor in Hanoi: Costs and What to Expect",
    intro:
      "What a GP visit, specialist appointment and health check actually cost at Hanoi's English-speaking clinics, and how to avoid a surprise bill.",
    asOf: "August 2026",
    questions: [
      {
        q: "How much does it cost to see a doctor in Hanoi?",
        a: "A GP consultation at an international clinic in Hanoi typically costs 800,000–2,100,000₫ (about US$31–80), and a specialist 1,500,000–2,700,000₫. Hanoi French Hospital, which publishes its tariff openly, charges 1,500,000₫ for a GP and 2,100,000₫ for a paediatrician or specialist by appointment. An emergency consultation runs to around 3,240,000₫.",
      },
      {
        q: "How much is a full health check in Hanoi?",
        a: "A basic health check at Hanoi French Hospital costs 4,100,000₫ for men and 4,600,000₫ for women, with advanced packages at 6,000,000₫ and 6,800,000₫. Executive packages run from 10,100,000₫ to 65,500,000₫ depending on scope. These are among the few genuinely published medical prices in Hanoi, so they make a reliable benchmark even if you go elsewhere.",
      },
      {
        q: "What is not included in a Hanoi consultation fee?",
        a: "The consultation fee covers the doctor's time and nothing else. Blood tests, imaging, medication, procedures and after-hours surcharges are all billed separately, so a 1,500,000₫ consultation can easily become several times that. Ask for an estimate before agreeing to tests, and be aware an inpatient shared room runs roughly 9,900,000–10,920,000₫ a day before treatment.",
      },
      {
        q: "Do doctors in Hanoi speak English?",
        a: "At the international clinics, yes — English-speaking doctors and reception staff are standard, because most of their patients are foreign. Public hospitals are a different matter and you should expect to need a translator. Every clinic in this directory was phoned and confirmed to have English-speaking staff before being listed.",
      },
      {
        q: "Will my insurance be accepted at a Hanoi clinic?",
        a: "Some Hanoi clinics bill international insurers directly and others require you to pay and claim back. This is worth establishing before you need care rather than at the desk, because for anything serious the difference is thousands of dollars of cash flow. Call your clinic and your insurer and get the answer from both.",
      },
    ],
    sources: [
      ["Hanoi French Hospital published room and consultation rates", "https://www.hfh.com.vn/en/admission-guide/room-rates/"],
      ["Hanoi French Hospital health-check packages", "https://www.hfh.com.vn/en/health-check/"],
    ],
  },

  // --------------------------------------------------------------- dentists
  {
    slug: "dentists",
    category: "dentists",
    title: "Dentists in Hanoi: What Treatment Actually Costs",
    intro:
      "Real price ranges for cleaning, fillings, crowns and implants at Hanoi's English-speaking dental clinics — and the question to ask before agreeing to an implant quote.",
    asOf: "August 2026",
    questions: [
      {
        q: "How much does a dentist cost in Hanoi?",
        a: "A scale and clean in Hanoi costs 250,000–1,300,000₫ (about US$10–50) depending on whether you go local or international, and a composite filling 260,000–650,000₫ per tooth. Many clinics waive the check-up fee if you go ahead with treatment; where charged it is usually under 500,000₫. A simple extraction runs 650,000–1,300,000₫.",
      },
      {
        q: "How much is a crown or implant in Hanoi?",
        a: "A porcelain-fused-to-metal crown in Hanoi costs roughly 2,900,000–3,900,000₫ and a zirconia crown 5,200,000–6,500,000₫, while a single implant runs US$800–1,400 (20,900,000–36,500,000₫). All-on-4 full-arch treatment is quoted at US$5,000–10,000. Premium brands sit well above these ranges, so the material matters as much as the clinic.",
      },
      {
        q: "What should I ask before accepting an implant quote in Hanoi?",
        a: "Ask exactly what the implant price includes, because advertised implant prices in Hanoi are frequently not like-for-like. A quote may or may not cover the fixture, the abutment, the crown, CBCT imaging, bone grafting, a temporary tooth and follow-up appointments. Two clinics quoting US$800 can mean very different final bills, so get the inclusions in writing.",
      },
      {
        q: "Are dentists in Hanoi any good?",
        a: "Hanoi's international dental clinics are generally well equipped and many of their dentists trained or practised abroad, but the spread in quality is wider than in most Western cities. Judge the individual dentist rather than the clinic name: ask where they trained, how long they have practised, and for complex work how many of that specific procedure they perform each month.",
      },
      {
        q: "Is it worth flying to Hanoi for dental work?",
        a: "For major work the arithmetic can favour it — an implant at US$800–1,400 or a crown at US$110–260 is a fraction of UK, US or Australian prices, and Hanoi has clinics set up for international patients. It stops making sense for small treatments once flights and hotels are counted, and you should factor in being in the country long enough for follow-ups. Ask any clinic what happens if something needs adjusting after you fly home.",
      },
      {
        q: "Do dentists in Hanoi speak English?",
        a: "The international clinics in Tay Ho and Hai Ba Trung generally have fluent English-speaking dentists and reception staff. Smaller neighbourhood clinics often have excellent dentists with limited English, where the treatment is fine but describing a problem is harder. Every dentist in this directory was called and confirmed to have English-speaking staff.",
      },
    ],
    sources: [
      ["Picasso Dental (formerly Serenity), Hanoi implant pricing", "https://serenitydentalclinic.com/"],
      ["Greenfield Dental treatment prices", "https://us-uk.bookimed.com/clinic/greenfield-dental/"],
      ["Hanoi dental cost benchmark", "https://www.dentavacation.com/dental-work-hanoi-vietnam/"],
    ],
  },

  // ------------------------------------------------------------------- vets
  {
    slug: "vets",
    category: "vets",
    title: "Vets in Hanoi: Costs, Emergencies and Bringing a Pet to Vietnam",
    intro:
      "What veterinary care costs for foreign pet owners in Hanoi, how to plan for an out-of-hours emergency, and what is involved in importing a pet.",
    asOf: "August 2026",
    questions: [
      {
        q: "How much does a vet cost in Hanoi?",
        a: "A routine consultation in Hanoi costs roughly 260,000–550,000₫ (about US$10–20), rising to 450,000–800,000₫ at an international clinic, with vaccinations at 350,000–650,000₫ per shot. Be aware that Hanoi veterinary clinics rarely publish full tariffs, so treat these as market ranges rather than quotes and confirm with the clinic. Surgery at international-standard clinics commonly runs from around 1,800,000₫ into the millions depending on the procedure and your animal's weight.",
      },
      {
        q: "How much is neutering or spaying in Hanoi?",
        a: "Expect roughly 1,850,000–2,200,000₫ for a cat and anywhere from 2,100,000₫ to 6,850,000₫ for a dog, where weight is the biggest single factor. These figures come from an international-standard clinic tariff elsewhere in Vietnam rather than a published Hanoi price, because Hanoi clinics generally quote privately. Ring two clinics and compare — this is a category where the spread is genuinely large.",
      },
      {
        q: "What do I do if my pet needs a vet at night in Hanoi?",
        a: "Establish your clinic's out-of-hours arrangement when you first register, not when you need it. Not every Hanoi veterinary clinic operates 24 hours, and the nearest is not always the one that does. Expect an emergency surcharge that can reach 3,000,000₫ before any treatment, and save the number in your phone now — searching for an open clinic at 2am with a sick animal is the worst possible moment to start.",
      },
      {
        q: "Can I bring my dog or cat to Vietnam?",
        a: "Yes, though the paperwork needs starting well in advance and the rules change, so confirm current requirements rather than relying on an older account. Vaccination records, a health certificate and an import permit are generally involved; a Vietnamese health certificate itself costs only around 100,000–200,000₫. Several Hanoi veterinary clinics handle the Vietnamese side of the process and are the practical people to ask.",
      },
      {
        q: "Are there English-speaking vets in Hanoi?",
        a: "Yes, mostly concentrated in Tay Ho where the majority of foreign residents live. Several clinics there were established largely to serve international pet owners and have English-speaking vets rather than only English-speaking reception. Every vet in this directory was phoned and confirmed.",
      },
    ],
    sources: [
      ["Expat Focus Vietnam veterinary care guide", "https://www.expatfocus.com/vietnam/guide/vietnam-veterinary-care"],
      ["Paws International Clinic 2026 tariff (Da Nang — used as a Vietnam international-clinic comparator, not a Hanoi price)", "https://pawsclinic.vn/services/paws-pricing/"],
    ],
  },

  // ----------------------------------------------------------- hairdressers
  {
    slug: "hairdressers",
    category: "hairdressers",
    title: "Hairdressers and Barbers in Hanoi: Prices for English Speakers",
    intro:
      "What a cut, colour or treatment costs in Hanoi, and why the quoted price often is not the final one.",
    asOf: "August 2026",
    questions: [
      {
        q: "How much is a haircut in Hanoi?",
        a: "A men's haircut in Hanoi costs 100,000–200,000₫ at a good-value salon and 250,000–400,000₫ at an English-focused or premium one. Women's cuts run 150,000–300,000₫ and 350,000–520,000₫ respectively. Salons that advertise English-speaking stylists sit at the upper end, which is what you are paying for.",
      },
      {
        q: "How much does hair colour cost in Hanoi?",
        a: "A full colour in Hanoi costs 480,000–1,300,000₫ at value salons and 1,000,000–2,900,000₫ at premium ones, while balayage or ombre is typically 2,280,000–3,120,000₫ on promotion against a 3,800,000–5,200,000₫ list price. Keratin and straightening treatments run 900,000–2,500,000₫. Chemical work is usually consultation-priced rather than fixed.",
      },
      {
        q: "Why did my Hanoi salon bill come to more than the quoted price?",
        a: "Colour prices in Hanoi are quoted for standard hair length and thickness, and almost everything else is an extra. Long or thick hair, additional bleach rounds, toner, bond-building treatments and a senior stylist are all commonly charged on top. Ask for the all-in figure for your hair specifically, and check whether an advertised promotional rate has expired.",
      },
      {
        q: "Can I find an English-speaking hairdresser in Hanoi?",
        a: "Yes — several Hanoi salons, mostly in Tay Ho, advertise English-speaking stylists specifically because so many of their clients are foreign. The gap between a good and a bad haircut here is usually communication rather than skill, so bring a photo regardless of how good the English is. Every salon in this directory was phoned and confirmed.",
      },
    ],
    sources: [
      ["Maika Hair Salon published rates", "https://www.maikahairsalon.com/"],
      ["Nhat Tam Salon 2026 price guide", "https://nhattamsalon.vn/en-hair-salon-hanoi-price-usd-guide/"],
      ["X Salon, Tay Ho", "https://en.xsalon.vn/"],
    ],
  },

  // ---------------------------------------------------------------- massage
  {
    slug: "massage",
    category: "massage",
    title: "Massage and Spa Prices in Hanoi",
    intro:
      "What a massage costs across Hanoi's market, from neighbourhood shops to hotel spas, and how to avoid the two common billing surprises.",
    asOf: "August 2026",
    questions: [
      {
        q: "How much does a massage cost in Hanoi?",
        a: "A 60-minute massage at an honest mid-market Hanoi spa costs 250,000–700,000₫ (about US$10–27), while a five-star hotel spa charges 1,000,000–8,000,000₫ per treatment. A foot massage runs 250,000–450,000₫ and aromatherapy or oil massage 300,000–800,000₫ for the hour. A 90-minute hot stone treatment is typically 490,000–900,000₫.",
      },
      {
        q: "How much is a facial or spa package in Hanoi?",
        a: "A facial in Hanoi costs 450,000–750,000₫ for 45–75 minutes, and a combined scrub, massage and facial package runs 800,000₫ to 3,850,000₫ depending on the venue. Central Hanoi spas with English menus commonly price packages around 1,150,000–1,620,000₫. The range is wide because it spans neighbourhood shops and hotel spas doing broadly similar treatments.",
      },
      {
        q: "Is tip included in Hanoi massage prices?",
        a: "Usually not, and this is the most common billing surprise for visitors. Ask whether tax and service charge are included in the quoted price, and budget for a tip on top, as tipping therapists is customary. Also treat a booking-platform discount as a one-off rather than the standing walk-in rate.",
      },
      {
        q: "Are Hanoi spas any good?",
        a: "Hanoi's mid-market spas offer genuinely good value, and the difference between a 300,000₫ and a 1,000,000₫ massage is more often the surroundings than the therapist. What varies most is hygiene and whether the therapist is trained in the specific style you booked. If you want a particular technique, ask about the therapist's training rather than the spa's decor.",
      },
    ],
    sources: [
      ["Orient Spa Hanoi published price menu", "https://www.orientspahanoi.com/services-prices.html"],
      ["Hanoi spa market benchmark 2026", "https://thewellfrog.com/vn/hanoi/spas"],
    ],
  },

  // ---------------------------------------------------------- chiropractors
  {
    slug: "chiropractors",
    category: "chiropractors",
    title: "Chiropractors and Physiotherapy in Hanoi: Costs",
    intro:
      "What chiropractic and rehabilitation treatment costs in Hanoi, and the question that matters more than the first-visit price.",
    asOf: "August 2026",
    questions: [
      {
        q: "How much does a chiropractor cost in Hanoi?",
        a: "An initial consultation with an international chiropractor in Hanoi costs around 800,000₫, with a first examination and treatment from 1,380,000₫. Ongoing sessions at international-standard clinics generally run 1,000,000–2,500,000₫, typically lasting 45–90 minutes. These are published rates rather than estimates, which makes this one of the more transparent categories in Hanoi.",
      },
      {
        q: "What should I ask before starting chiropractic treatment in Hanoi?",
        a: "Ask for the cost of the full proposed course, not just the first visit. Chiropractic in Hanoi is sold as a personalised plan, so an attractive initial consultation fee can precede a multi-session course costing several million đồng. Imaging, physiotherapy and rehabilitation equipment are usually charged separately again.",
      },
      {
        q: "Is chiropractic in Hanoi regulated?",
        a: "The international clinics in Hanoi employ foreign-trained chiropractors and operate to international standards, but the wider market is uneven. Ask specifically where the practitioner qualified and whether they are licensed to practise chiropractic rather than physiotherapy or massage. It is a reasonable question and a good clinic will answer it without hesitation.",
      },
      {
        q: "Is there English-speaking physiotherapy in Hanoi?",
        a: "Yes — Hanoi has both international chiropractic clinics with foreign doctors and Vietnamese rehabilitation clinics with English-speaking staff, and the two differ substantially in price. The clinics in this directory were each phoned to confirm English is spoken. Chiropractic, physiotherapy and osteopathy are grouped together here because Hanoi clinics often provide more than one.",
      },
    ],
    sources: [
      ["ACC Chiropractic Clinic published tariff and FAQ", "https://acc.vn/en/frequently-asked-questions-about-chiropractic-treatment-at-acc/"],
      ["Vietnam chiropractic clinic benchmark", "https://www.docosan.com/blog/en/best-chiropractic-clinic-vietnam/"],
    ],
  },

  // ---------------------------------------------------------------- lawyers
  {
    slug: "lawyers",
    category: "lawyers",
    title: "Lawyers in Hanoi: What Legal Advice Costs Foreigners",
    intro:
      "Hourly rates, company setup costs and the fee structure to insist on before instructing a Hanoi law firm.",
    asOf: "August 2026",
    questions: [
      {
        q: "How much does a lawyer cost in Hanoi?",
        a: "English-speaking law firms in Hanoi commonly charge US$50–165 an hour depending on seniority — roughly US$50 for a paralegal, US$100 for an associate, US$120 for a senior lawyer and US$165 for a partner. General Vietnamese legal advice is benchmarked at 1,000,000–5,000,000₫ per hour. Written advice typically starts around US$100.",
      },
      {
        q: "How much does it cost to set up a company in Vietnam?",
        a: "A standard foreign-invested company setup in Vietnam costs US$2,000–3,500 or more, with published packages starting around US$2,000 covering the investment registration certificate, enterprise registration certificate, company stamp and charter. Complex or specially licensed businesses can run to US$7,000–9,000 and beyond. Government fees are usually separate from the firm's fee.",
      },
      {
        q: "What should I agree with a Hanoi lawyer before instructing them?",
        a: "Get a written scope with either a fee cap or staged pricing before any work starts. Hourly billing without a cap is where foreign clients in Vietnam most often get caught out. Confirm separately what is excluded, because VAT, government fees, translation, notarisation, legalisation, court fees and third-party specialists are typically all on top.",
      },
      {
        q: "Do I need an English-speaking lawyer in Vietnam?",
        a: "For anything contractual, yes — Vietnamese law and its documentation are complex enough that misunderstanding a clause is expensive. Most foreigners need a lawyer for one of three things: company registration, a property lease, or a work permit. Firms used to foreign clients will quote a fixed fee for those rather than billing hourly.",
      },
    ],
    sources: [
      ["SB Law published hourly rates, Hanoi", "https://lawyer24h.net/lawyer-in-house-vietnam/"],
      ["Nova Law company setup packages", "https://novalaw.vn/en/set-up-company-in-vietnam-service/"],
      ["Vietnam legal fee benchmark", "https://anlawvietnam.com/en/understanding-legal-fees-affordable-law-firms-in-vietnam/"],
    ],
  },

  // ----------------------------------------------------------------- movers
  {
    slug: "movers",
    category: "movers",
    title: "House Movers in Hanoi: What a Move Costs",
    intro:
      "Published starting prices by move size, the add-ons that inflate the final bill, and why a 'from' price is worth little.",
    asOf: "August 2026",
    questions: [
      {
        q: "How much does it cost to move house in Hanoi?",
        a: "A small Hanoi move of 10–15 boxes starts around 1,200,000₫, a standard 20–30 box move around 2,600,000₫, and a 40–60 box family move around 4,700,000₫. A large apartment of 60–100 boxes starts near 7,000,000₫ and a villa move 12,000,000₫. App-based services quote from 1,700,000₫ for an apartment and 3,000,000₫ for a one-storey house.",
      },
      {
        q: "How much is moving from Hanoi to Ho Chi Minh City?",
        a: "An intercity move between Hanoi and Ho Chi Minh City runs roughly 10,000,000–40,000,000₫ depending on volume and service level. The spread is wide because it depends heavily on whether you want a full packing service and how much furniture needs dismantling. Get a written quote after a survey rather than working from the headline figure.",
      },
      {
        q: "What extras do Hanoi movers charge?",
        a: "Expect packing materials to add 5–10%, full packing 15–30%, and unpacking another 10–20% on top of the base price. Furniture dismantling and reassembly is commonly 300,000–700,000₫ per item, stairs add 5–15%, and a narrow alley or long carry adds 5–10% each. In Hanoi's Old Quarter the access surcharges matter more than most people expect.",
      },
      {
        q: "How do I avoid being overcharged by a Hanoi mover?",
        a: "Insist on a binding written quote after a photo survey or site visit, not a 'from' price over the phone. A low starting figure tells you almost nothing, because the access and packing surcharges are where the bill actually forms. Confirm the insurance and damage policy in writing too, and whether packaging removal is included.",
      },
    ],
    sources: [
      ["Hanoi Packers Movers published moving-cost table", "https://chuyennhahoangminh.com/moving-cost-vietnam/"],
      ["bTaskee published home-moving prices", "https://www.btaskee.com/en-VN/home-moving/"],
    ],
  },

  // ------------------------------------------------------------- realestate
  {
    slug: "realestate",
    category: "realestate",
    title: "Renting in Hanoi: Agent Fees and How the Commission Works",
    intro:
      "Who pays the estate agent in Hanoi, when a tenant gets charged, and what that means for whose interests the agent is serving.",
    asOf: "August 2026",
    questions: [
      {
        q: "Do I pay an estate agent fee when renting in Hanoi?",
        a: "Usually not — for a standard long-term rental in Hanoi the tenant normally pays nothing, because the landlord pays the agent's commission of about one month's rent. You may be charged half a month to a full month's rent for a short lease or an unusually difficult search. Confirm this at the outset rather than assuming.",
      },
      {
        q: "What deposit will I need to rent in Hanoi?",
        a: "A security deposit of one to two months' rent is standard in Hanoi, and it is not an agent fee. Rent is also frequently paid several months in advance, so budget for a significant upfront sum beyond the deposit. Get the deposit return conditions in the written contract.",
      },
      {
        q: "If the agent is free, whose side are they on?",
        a: "The landlord's, because that is who pays them — 'free to the tenant' does not mean impartial. A Hanoi agent's incentive is to close a deal quickly, not to find you the best available property, so view several places through more than one agent before committing. Ask directly who is paying their commission.",
      },
      {
        q: "What commission is charged on a property sale in Hanoi?",
        a: "Sale brokerage in Vietnam is typically around 2% of the transaction value. This is separate from the taxes and registration fees on a property transfer, which are the buyer's or seller's responsibility depending on what is agreed. Foreign ownership of property in Vietnam is restricted, so take legal advice before committing to a purchase.",
      },
    ],
    sources: [
      ["Hanoi Housing published agent fee guide", "https://hanoihousing.vn/en/blog/how-to-work-with-agents-in-hanoi-questions-fees-trust-tips.html"],
      ["Vietnam rental guide", "https://www.livinginvietnam.com/how-to-rent-your-dream-home-in-vietnam-with-just-a-few-clicks/"],
      ["Vietnam property fee benchmark", "https://achievereal.com/important-taxes-and-fees-for-personal-real-estate/333/?language=en"],
    ],
  },

  // ------------------------------------------------------------------- visa
  {
    slug: "visa",
    category: "visa",
    title: "Vietnam Visas, Work Permits and Residence Cards: Real Costs",
    intro:
      "Government fees separated from agency fees, so you can see what you are actually paying for.",
    asOf: "August 2026",
    questions: [
      {
        q: "How much does a Vietnam e-visa cost?",
        a: "The official Vietnam e-visa fee is US$25 for single entry and US$50 for multiple entry, paid directly to the government portal. Agents charge roughly US$10–49 on top to handle it, and rush processing can add US$65–80. You can apply yourself for a straightforward tourist visa; the agent fee buys speed and someone to chase problems.",
      },
      {
        q: "How much does a work permit cost in Hanoi?",
        a: "The Hanoi government fee for a work permit is 400,000₫, but agency packages start around 4,230,000₫ because the state fee is the smallest part of the job. Employer-of-record or complex handling runs US$500–1,500. The gap between the two figures is document preparation, translation, notarisation and dealing with the department.",
      },
      {
        q: "How much is a temporary residence card in Vietnam?",
        a: "TRC government fees are US$145 for up to two years, US$155 for two to five years and US$165 for five to ten years. Agency service on top typically runs 5,000,000–8,000,000₫, with published packages around 6,220,000₫ for a two-year card including stamping. As with work permits, most of what you pay an agent is document handling rather than the state fee.",
      },
      {
        q: "Do I need a visa agent in Vietnam or can I do it myself?",
        a: "For a tourist e-visa most people manage alone; for work permits, residence cards and anything involving an employer, an agent is usually worth the fee. Requirements change frequently and are not always documented in English, which is precisely what you are paying an agent to keep track of. Ask any agent to separate the government fee from their service fee in writing.",
      },
      {
        q: "What should I check before paying a Hanoi visa agent?",
        a: "Get an itemised breakdown separating government fee, service fee, translation, notarisation, medical check, legalisation, courier and any rush charge. Being able to buy a service does not mean you are eligible for the visa, and no honest agent will guarantee an outcome. Be wary of anyone who will not put their fee in writing before you pay.",
      },
    ],
    sources: [
      ["Official Vietnam e-visa portal", "https://evisa.gov.vn/"],
      ["Vietnam Government Portal work-permit guide", "https://vietnam.gov.vn/work-permits-68947"],
      ["Temporary residence card state fees", "https://vietanlaw.com/labour-law-consultancy/service-temporary-residence-cards/"],
      ["VisaInfo published agency fee table", "https://visainfo.vn/en/service-fees"],
    ],
  },

  // ---------------------------------------------------------------- finance
  {
    slug: "finance",
    category: "finance",
    title: "Health Insurance and Banking for Expats in Hanoi",
    intro:
      "What expat health cover costs by tier, what Vietnamese bank accounts charge, and why comparing premiums alone is a mistake.",
    asOf: "August 2026",
    questions: [
      {
        q: "How much does expat health insurance cost in Vietnam?",
        a: "Expat health insurance in Vietnam runs from about US$300–600 a year for basic Vietnam-only cover to US$3,000–6,000 or more for premium worldwide policies. Mid-tier local or regional cover is roughly US$700–1,200, and international-standard plans US$1,200–3,000. Age, deductible and region of cover move these figures substantially.",
      },
      {
        q: "What should I check on a Vietnam health policy besides the price?",
        a: "Check the annual maximum, because cheap local policies frequently cap total payouts at 100,000,000–500,000,000₫, which does not go far in a serious admission. Also confirm outpatient cover, dental, maternity, pre-existing conditions, evacuation, and whether treatment outside Vietnam is included at all. Comparing premiums without comparing these is meaningless.",
      },
      {
        q: "What do Vietnamese bank accounts cost?",
        a: "Opening an account in Vietnam is usually free, with monthly maintenance around 5,000–15,000₫ if balance conditions are not met and a debit card annual fee of 50,000–100,000₫. Some international banks waive card fees entirely — HSBC Vietnam charges no issuance or annual fee, with replacement cards at 110,000₫. A minimum balance may apply.",
      },
      {
        q: "How much do ATMs charge foreign cards in Vietnam?",
        a: "Vietnamese ATM operators typically charge 22,000–66,000₫ per withdrawal on a foreign card, before whatever your home bank adds in fees and exchange margin. Withdrawing larger amounts less often is meaningfully cheaper. Opening a local account removes the problem entirely if you are staying long enough to justify it.",
      },
    ],
    sources: [
      ["Vietnam expat health insurance cost guide 2026", "https://medicaltourism.vn/blog/health-insurance-for-expats-in-vietnam-a-complete-guide/"],
      ["Feather Vietnam health insurance guide", "https://feather-insurance.com/en-vn/blog/health-insurance-vietnam-guide"],
      ["HSBC Vietnam debit card fees", "https://www.hsbc.com.vn/en-vn/debit-cards/"],
      ["Vietnam bank account fee benchmark", "https://thenest.asia/open-personal-bank-account-in-vietnam/"],
    ],
  },

  // ---------------------------------------------------------------- schools
  {
    slug: "schools",
    category: "schools",
    title: "International Schools and Tutors in Hanoi: Fees",
    intro:
      "What Hanoi's English-medium schools charge per year, the extras that are not in the tuition figure, and private tutoring rates.",
    asOf: "August 2026",
    questions: [
      {
        q: "How much does an international school in Hanoi cost?",
        a: "Hanoi's English-medium and international schools charge roughly 100,000,000₫ to over 1,000,000,000₫ a year, with the top of the market around 1,050,000,000₫ for Grades 11–12. A mid-to-premium school publishes 440,000,000₫ for kindergarten, 613,000,000₫ for Grades 1–3 and 733,000,000₫ for Grades 9–10 in 2026–27. That is roughly US$3,800 to US$40,000 a year depending on the school and year group.",
      },
      {
        q: "What extra fees do Hanoi international schools charge?",
        a: "Tuition is rarely the whole cost — expect application and registration fees, a capital or development levy, bus, meals, uniform, devices, exam entry, trips and English-language support. One Hanoi school's first-year kindergarten entry adds 26,000,000₫ enrolment, a 50,000,000₫ refundable deposit and a 5,000,000₫ entrance test on top of tuition. Some schools do include meals, day trips and health insurance, so ask what is bundled before comparing two fee lists.",
      },
      {
        q: "How much do private tutors cost in Hanoi?",
        a: "Private tutoring in Hanoi costs 345,000–780,000₫ an hour for general English, 500,000–1,000,000₫ for an experienced in-person native speaker, and 780,000–1,400,000₫ for IELTS, specialist subjects or a licensed international teacher. Rates depend more on qualification and specialism than on subject. In-person tutoring costs more than online.",
      },
      {
        q: "How do I choose between international schools in Hanoi?",
        a: "Start with curriculum rather than price, because British, American and IB routes are not interchangeable if there is any chance you will move country again mid-education. Then compare total annual cost including the extras above, not headline tuition. Visit during a school day rather than at an open evening if you can.",
      },
    ],
    sources: [
      ["Hanoi international school tuition market report 2026", "https://e.vnexpress.net/news/news/education/hanoi-international-school-tuition-reaches-38-000-a-year-5074942.html"],
      ["Hanoi International School published 2026–27 fees", "https://www.international-schools-database.com/in/hanoi/hanoi-international-school/fees"],
      ["BVIS Hanoi tuition fee information", "https://www.nordangliaeducation.com/bvis-hanoi/admissions/tuition-fees"],
      ["Vietnam tutoring rate benchmark 2026", "https://teflinstitute.com/blog/what-cities-tefl-certification-pay-the-most-in-vietnam-for-tefl-teachers/"],
    ],
  },

  // ------------------------------------------------------------------- auto
  {
    slug: "auto",
    category: "auto",
    title: "Motorbike Rental and Car Repair in Hanoi: Costs",
    intro:
      "What renting a scooter costs by the day and the month, what car servicing runs to, and the rental terms worth reading before you sign.",
    asOf: "August 2026",
    questions: [
      {
        q: "How much does it cost to rent a motorbike in Hanoi?",
        a: "A reliable 110cc semi-automatic commuter bike in Hanoi rents for around 1,300,000₫ a month (about US$50), with budget options from 700,000₫. Daily rates are roughly 200,000–260,000₫ for a 50–110cc scooter and 470,000–1,300,000₫ for a touring or adventure bike. Monthly rentals from English-speaking operators often include oil changes and mechanical breakdown repairs.",
      },
      {
        q: "What is not covered in a Hanoi motorbike rental?",
        a: "Damage and punctures are normally the renter's responsibility even where servicing is included. Before signing, check the deposit or passport policy, any kilometre limit, what insurance actually covers, and whether breakdown support extends outside Hanoi. Operators used to foreign customers will explain all of this without being asked.",
      },
      {
        q: "How much does car servicing cost in Hanoi?",
        a: "An inspection or diagnostic in Vietnam costs roughly 200,000–500,000₫, with computer diagnostics 300,000–800,000₫, while routine maintenance runs 1,000,000–2,000,000₫ and advanced maintenance 3,000,000–10,000,000₫. Be aware these are national workshop benchmarks rather than published Hanoi garage prices, since most English-serving garages here quote privately. Ask for labour and diagnosis to be itemised separately from parts, oil, filters and tyres.",
      },
      {
        q: "Do I need a licence to ride a motorbike in Hanoi?",
        a: "Yes, and the requirement depends on engine size, so confirm what you legally need for the bike you are actually renting rather than assuming an international permit covers it. Riding unlicensed can void your travel or health insurance entirely, which matters far more than the fine. Check that any paperwork a rental shop provides is genuine before handing over money.",
      },
    ],
    sources: [
      ["Offroad Vietnam published rental prices", "https://offroadvietnam.com/prices"],
      ["James Motorbikes rental policy", "https://jamesmotorbikes.com/policy/"],
      ["Vietnam workshop diagnostic and maintenance benchmarks", "https://en.thanhphongauto.com/bao-duong-o-theo-km/"],
    ],
  },

  // ---------------------------------------------------------------- tailors
  {
    slug: "tailors",
    category: "tailors",
    title: "Tailors in Hanoi: What a Custom Suit Costs",
    intro:
      "Real price ranges for shirts, dresses and suits in Hanoi, and what actually separates a US$120 suit from a US$500 one.",
    asOf: "August 2026",
    questions: [
      {
        q: "How much does a tailored suit cost in Hanoi?",
        a: "An entry to mid-range two-piece suit in Hanoi costs US$120–200 (3,130,000–5,220,000₫), and a quality bespoke suit US$200–500 (5,220,000–13,050,000₫). Premium imported cloth and full canvas construction can push well beyond that. The Hanoi average for a genuinely custom suit sits around the US$200–500 mark.",
      },
      {
        q: "How much is a custom shirt or dress in Hanoi?",
        a: "A custom shirt in Hanoi costs US$30–50 (780,000–1,310,000₫) and a dress US$40–80 (1,040,000–2,090,000₫). These are among the best-value tailoring prices anywhere, which is why so many visitors have several made at once. Fabric choice moves the price more than the garment type does.",
      },
      {
        q: "What makes one Hanoi suit cost four times another?",
        a: "Chiefly the cloth and the construction — a fused jacket with domestic fabric is a fundamentally different garment from a canvassed one in imported cloth, even if both are 'bespoke'. Number of fittings, lining, and whether a second pair of trousers is included also move the price. Ask specifically whether the jacket is fused or canvassed, because that single answer explains most of the gap.",
      },
      {
        q: "How long does tailoring take in Hanoi, and should I trust an overnight suit?",
        a: "Allow time for at least two fittings, and be wary of anyone promising a finished suit overnight. A rushed garment is where Hanoi tailoring's reputation gets damaged, and alterations after you have flown home are not possible. Express turnaround is usually available but it costs more and gives you less room to correct a poor fit.",
      },
    ],
    sources: [
      ["Hanoi tailor price guide 2026", "https://www.bestpricetravel.com/travel-guide/tailor-in-hanoi-4022.html"],
      ["Tailor Bros Hanoi pricing", "https://tailorbros.com/"],
      ["Carlo Pham on Vietnam suit costs", "https://www.carlopham.com/post/how-much-does-a-tailored-suit-cost-in-vietnam"],
    ],
  },

  // ---------------------------------------------------------------- fitness
  {
    slug: "fitness",
    category: "fitness",
    title: "Gyms in Hanoi: Membership Prices",
    intro:
      "What Hanoi gyms cost by tier, how much a long contract really saves, and the terms to check before signing.",
    asOf: "August 2026",
    questions: [
      {
        q: "How much does a gym membership cost in Hanoi?",
        a: "A basic local gym in Hanoi costs 200,000–500,000₫ a month, a mid-range gym 600,000–1,200,000₫, and a premium gym or club 1,200,000–3,000,000₫ and up. Day passes run 40,000–300,000₫ depending on the venue. The premium end buys pool, sauna, classes and multi-branch access rather than better equipment.",
      },
      {
        q: "Is a long gym contract cheaper in Hanoi?",
        a: "Substantially — one Hanoi chain charges 1,200,000₫ for a single month on its entry tier but 8,000,000₫ for twelve months, an effective 667,000₫ a month. Its top tier drops from 3,000,000₫ monthly to an effective 1,500,000₫ on an annual contract, and off-peak annual membership falls to about 583,000₫ a month. The saving is real, but so is the commitment.",
      },
      {
        q: "What should I check before joining a Hanoi gym?",
        a: "Check the commitment length, because an attractive per-month figure may require 24 to 60 months paid upfront. Confirm which branches you can access, whether classes, pool and sauna are included, any joining fee, and the rules on freezing or transferring a membership. Displayed prices in Hanoi are frequently negotiable, particularly at the end of a month.",
      },
      {
        q: "Are there English-speaking gyms in Hanoi?",
        a: "Yes — several Hanoi gyms and studios, concentrated in Tay Ho and Ba Dinh, have English-speaking trainers and an international membership. Class-based studios and CrossFit boxes tend to be the most English-friendly because coaching requires communication. Every gym in this directory was phoned to confirm.",
      },
    ],
    sources: [
      ["Elite Fitness published membership tariff", "https://elitefitness.com.vn/membership/"],
      ["Hanoi gym and fitness guide 2026", "https://www.roampads.com/blog/hanoi-gyms-and-fitness-guide"],
    ],
  },

  // ----------------------------------------------------------- homeservices
  {
    slug: "homeservices",
    category: "homeservices",
    title: "Cleaners and Handymen in Hanoi: What They Cost",
    intro:
      "Hourly cleaning rates, deep clean pricing, and what a plumber or electrician charges for a call-out in Hanoi.",
    asOf: "August 2026",
    questions: [
      {
        q: "How much does a cleaner cost in Hanoi?",
        a: "App-based home cleaning in Hanoi costs about 80,000–96,000₫ an hour, working out at 192,000₫ for two hours up to 55m², 240,000₫ for three hours up to 85m², and 304,000₫ for four hours. Independent cleaners fall in a similar 80,000–150,000₫ hourly band. Choosing a specific preferred cleaner typically adds around 20,000₫ per booking.",
      },
      {
        q: "How much is a deep clean in Hanoi?",
        a: "A deep clean of about 150m² over four hours with three staff costs around 1,200,000₫ in Hanoi. This is the service worth booking when moving into or out of an apartment, where a standard hourly clean will not be enough. Prices rise at weekends, before 8am, after 5pm, and over public holidays.",
      },
      {
        q: "What does a plumber or electrician charge in Hanoi?",
        a: "A minor plumbing or electrical job in Hanoi costs roughly 300,000–500,000₫ in labour, and a larger fixture, blockage or installation job 500,000–800,000₫, both excluding VAT and materials. Air-conditioner cleaning runs about 120,000–250,000₫ per unit at independent level. Gas refills and parts are quote-only.",
      },
      {
        q: "What should I confirm before booking a handyman in Hanoi?",
        a: "Confirm the call-out fee, minimum charge, whether VAT and materials are included, and what warranty applies to the work. Ask specifically whether the technician speaks English or only the booking support does, because that distinction matters when something needs explaining at your door. Trade pricing here is far less transparent than app-based cleaning, so agree the scope before work starts.",
      },
    ],
    sources: [
      ["bTaskee published hourly cleaning prices", "https://www.btaskee.com/en-VN/home-cleaning/"],
      ["bTaskee deep cleaning prices", "https://www.btaskee.com/en-VN/deep-cleaning/"],
      ["Calibee published plumbing and repair tariff", "https://calibee.com/en/plumbing-repair-maintenance/"],
    ],
  },
];
