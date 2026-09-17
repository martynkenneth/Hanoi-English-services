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
  },
];
