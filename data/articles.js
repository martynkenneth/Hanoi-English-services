/*
  HANOI EXPAT DIRECTORY — ARTICLES
  ================================
  Topic articles built around a question people actually search, using quotes
  from the businesses in the directory as evidence.

  Deliberately NOT one article per business. "Interview with X" is a page
  nobody searches for and that competes with that business's own site, and
  thirty of them following one template is the pattern search engines demote.
  A topic article gives several businesses a reason to share it, keeps us the
  journalist rather than the press office, and targets a real query.

  ---------------------------------------------------------------------------
  QUOTES
  ---------------------------------------------------------------------------
  A quote with an empty "text" is simply left off the page. Never write words
  and attribute them to a named business — collect them through the interview
  form, paste the answer in, and it appears.

  Light editing is fine: trim filler, fix a typo, cut a sentence. Do not
  rewrite the meaning or smooth the voice away. The value of these pages is
  that a real person said a real thing.

  ---------------------------------------------------------------------------
  ADDING AN ARTICLE
  ---------------------------------------------------------------------------
  Copy an entry, change slug/category/title, write the sections, and the page
  builds itself at /articles/<slug>/ with an internal link from the matching
  category page.
*/

const ARTICLES = [
  {
    slug: "renting-a-motorbike-in-hanoi",
    category: "auto",
    title: "Renting a Motorbike in Hanoi: What to Check Before You Pay",
    intro:
      "A bike is how most foreigners get around Hanoi, and the rental itself is cheap. The costs that catch people out are the ones nobody mentions until something goes wrong — damage, punctures, deposits and licences.",
    asOf: "September 2026",
    sections: [
      {
        heading: "What it actually costs",
        body:
          "A reliable 110cc semi-automatic commuter bike rents for around 1,300,000₫ a month in Hanoi, with budget options from about 700,000₫. Daily rates run roughly 200,000–260,000₫ for a small scooter and 470,000–1,300,000₫ for a touring or adventure bike. Monthly is dramatically better value if you are staying more than a fortnight, and monthly rentals from established shops often include servicing and oil changes.",
        quote: { business: "", text: "" },
      },
      {
        heading: "What the price does not include",
        body:
          "This is where the real difference between shops shows up. Servicing and mechanical breakdown are commonly covered on a monthly rental; damage and punctures almost never are. Before you pay, get a clear answer on who pays for a flat tyre, what happens if the bike is stolen, whether there is a kilometre limit, and whether breakdown support extends outside Hanoi. A shop used to foreign customers will volunteer all of this without being asked, which is itself a useful signal.",
        quote: { business: "", text: "" },
      },
      {
        heading: "Do not leave your passport",
        body:
          "Some rental shops ask to hold your passport as security. You are not obliged to agree, and you should not: you may need it for a hotel, a bank, a clinic or a flight at no notice, and recovering it from a shop in a dispute is far harder than recovering a cash deposit. Offer a cash deposit or a photocopy instead. A shop that refuses any alternative is telling you something about how a disagreement would go.",
        quote: { business: "", text: "" },
      },
      {
        heading: "The licence question people get wrong",
        body:
          "What you legally need depends on the engine size of the bike you are actually riding, not on what you rode at home. This matters far more than the fine: riding without the correct licence can void your travel or health insurance entirely, which turns a minor accident into a very expensive one. Check your own position before you ride, and check that any paperwork a shop provides is genuine.",
        quote: { business: "", text: "" },
      },
      {
        heading: "Checking the bike before you take it",
        body:
          "Photograph the bike from every angle before you ride away, including existing scratches, and make sure the shop sees you do it. Check the brakes, the lights, the horn and the tyre tread. Confirm the registration paperwork is in the bike and ask what to do if you are stopped. Five minutes here prevents the most common dispute in Hanoi bike rental, which is an argument about damage that was already there.",
        quote: { business: "", text: "" },
      },
    ],
    sources: [
      ["Offroad Vietnam published rental prices", "https://offroadvietnam.com/prices"],
      ["James Motorbikes rental policy", "https://jamesmotorbikes.com/policy/"],
    ],
  },,
  {
    slug: "how-long-does-a-vietnam-visa-take",
    category: "visa",
    title: "How Long Does a Vietnam Visa Take? What Affects Timing and Cost",
    intro:
      "The honest answer is that it depends on your passport. Processing time, paperwork and price all shift with nationality, visa type and how much notice you give — which is why two people applying the same week can have very different experiences.",
    asOf: "September 2026",
    sections: [
      {
        heading: "Why there is no single answer",
        body:
          "Most guides quote one processing time. In practice it varies with nationality, the visa you are applying for, and how quickly the Immigration Department approves your case. Official fees are published — a single-entry e-visa is US$25 and multiple-entry US$50 — but nothing on the official portal promises a turnaround that applies to everyone. Treat any figure you are quoted as an estimate rather than a guarantee, and check the government site for current requirements rather than relying on an older account.",
        quote: {
          business: "VietnamVisaVOA.com",
          person: "Gracie",
          role: "Visa Consultant",
          text: "The most common mistake is waiting until the last minute. Many travellers assume the process is always immediate, but processing times can vary depending on nationality, visa type, and Immigration Department approval.",
        },
      },
      {
        heading: "Your nationality changes more than you would expect",
        body:
          "This is the part that catches people out, particularly anyone comparing notes with a friend who applied recently. Two applicants submitting identical paperwork on the same day can face different requirements, different processing times and different costs, purely because of their passport. Advice from someone of another nationality is worth very little here, however recent it is.",
        quote: {
          business: "VietnamVisaVOA.com",
          person: "Gracie",
          role: "Visa Consultant",
          text: "Vietnam visa requirements are not always the same for everyone. Nationality, travel history, purpose of travel, and entry dates can all affect the process. Providing complete and accurate information from the beginning usually makes everything much smoother.",
        },
      },
      {
        heading: "What to have ready before you start",
        body:
          "Gathering documents first is the single easiest way to avoid delay, because an application that stalls halfway while you find a booking confirmation loses days rather than minutes. Have the basics to hand before you begin, and expect that some nationalities will be asked for more.",
        quote: {
          business: "VietnamVisaVOA.com",
          person: "Gracie",
          role: "Visa Consultant",
          text: "A clear, valid passport copy, travel dates, flight details, and accommodation information are a good starting point. Depending on the nationality and visa type, additional documents or travel history may be required.",
        },
      },
      {
        heading: "What actually moves the price",
        body:
          "The government fee is the smaller and more predictable part of what you pay. An e-visa costs US$25 or US$50 depending on entries; agents typically add US$10–49 for handling, and rush processing can add US$65–80 on top. Work permits and residence cards follow the same pattern: the Hanoi work permit state fee is 400,000₫, while agency packages start around 4,230,000₫ because document preparation is the real work. Ask any agent to itemise government fee, service fee, translation, notarisation and any rush charge separately.",
        quote: {
          business: "VietnamVisaVOA.com",
          person: "Gracie",
          role: "Visa Consultant",
          text: "The main factors are visa type, nationality, processing speed, and whether additional services such as airport fast-track assistance are needed. Some people are surprised that urgent processing and special handling for certain nationalities can cost more than the standard visa fee.",
        },
      },
      {
        heading: "Choosing between a cheap agent and a good one",
        body:
          "For a straightforward tourist e-visa most people manage alone on the official portal, and an agent is buying you speed and someone to chase problems. For work permits, residence cards or anything involving an employer, that chasing is worth paying for. What separates agents is not the headline price but whether they have handled your nationality before and whether anyone answers when something goes wrong mid-application.",
        quote: {
          business: "VietnamVisaVOA.com",
          person: "Gracie",
          role: "Visa Consultant",
          text: "Price is important, but so is reliability. We encourage customers to check what is actually included, whether the provider has experience with their nationality, and whether there is support available if any issue arises during the application process.",
        },
      },
    ],
    sources: [
      ["Official Vietnam e-visa portal", "https://evisa.gov.vn/"],
      ["Vietnam Government Portal work-permit guide", "https://vietnam.gov.vn/work-permits-68947"],
      ["VisaInfo published agency fee table", "https://visainfo.vn/en/service-fees"],
    ],
  },
];
