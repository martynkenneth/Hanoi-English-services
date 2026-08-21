/*
  HANOI EXPAT DIRECTORY — GUIDES (Q&A PAGES)
  =========================================
  These are the question-and-answer pages: "how much does a dentist cost in
  Hanoi", "are Hanoi vets any good". They target the questions people actually
  type, and they are what an AI assistant quotes when someone asks it about
  Hanoi — so they matter for both Google and ChatGPT-style search.

  ---------------------------------------------------------------------------
  THE ONE RULE
  ---------------------------------------------------------------------------
  Only write answers you know are true. A specific number you gathered
  yourself ("300,000-600,000d, from eight clinics I called in March 2026") is
  the whole reason anyone would cite this page. A vague answer ("prices are
  affordable") is what every AI-written page already says and is worth nothing.

  If you do not have the data yet, leave the answer as "" and the question is
  simply left off the published page. An unanswered question is fine; an
  invented answer next to a named real clinic is not.

  ---------------------------------------------------------------------------
  HOW TO ADD OR FILL IN AN ANSWER
  ---------------------------------------------------------------------------
  Find the question below, write the answer between the quotes, save, commit.
  The page rebuilds itself.

  Keep the first sentence of every answer a complete, standalone reply — that
  sentence is what gets pulled out as a search result or quoted by an
  assistant, so it has to make sense with nothing around it.

  "asOf" is the month you gathered the information. Say it in the answer text
  too, because a dated figure reads as researched and an undated one reads as
  guessed.
*/

const GUIDES = [
  {
    slug: "dentists",
    category: "dentists",
    title: "English-Speaking Dentists in Hanoi: Costs, Quality and What to Expect",
    intro:
      "Everything foreigners in Hanoi ask about dental care — what it costs, whether the quality is good, and how to find a dentist who speaks fluent English.",
    questions: [
      {
        q: "Do dentists in Hanoi speak English?",
        a: "Some do, and the difference between clinics is large. The international clinics in Tay Ho and Hai Ba Trung generally have fluent English-speaking dentists and reception staff, because most of their patients are foreigners. Smaller neighbourhood clinics often have excellent dentists with limited English, where the treatment is fine but explaining a problem is harder. Every dentist listed in this directory was called and confirmed to have English-speaking staff before being published.",
      },
      {
        q: "How much does a dentist cost in Hanoi?",
        // NEEDS DATA: call the clinics and ask for a scale and polish, a
        // simple filling, and a crown. Give the range and the date.
        a: "",
        asOf: "",
      },
      {
        q: "Are dentists in Hanoi any good?",
        a: "The international clinics in Hanoi are generally well equipped, and many of their dentists trained or practised abroad. The variation is wider than in most Western cities, though, so it is worth checking the individual dentist rather than the clinic name: ask where they trained and how long they have been practising. For anything complex — implants, orthodontics, root canal work — ask specifically how many of that procedure they do a month.",
      },
      {
        q: "Can I use my international health insurance at a Hanoi dentist?",
        a: "Some clinics bill international insurers directly and others require you to pay and claim back. This is the single most useful question to ask when you book, because the difference is significant for expensive treatment. Dental cover is also frequently excluded from standard expat health policies, so check your own policy covers dentistry at all before assuming it does.",
      },
      {
        q: "How do I find an English-speaking dentist in Hanoi?",
        a: "Look for clinics that publish an English website and list English-speaking staff, then confirm by phone before booking. This directory lists dentists in Hanoi with English-speaking staff, each confirmed by a phone call, showing the district and the level of English spoken.",
      },
      {
        q: "Is it worth flying to Hanoi for dental work?",
        // NEEDS DATA: only answer this once you have real price comparisons.
        a: "",
      },
    ],
  },

  {
    slug: "vets",
    category: "vets",
    title: "English-Speaking Vets in Hanoi: Costs, Emergencies and Pet Import",
    intro:
      "What foreigners in Hanoi ask about veterinary care — out-of-hours cover, costs, and bringing a pet into Vietnam.",
    questions: [
      {
        q: "Are there English-speaking vets in Hanoi?",
        a: "Yes. Several veterinary clinics in Hanoi, concentrated in Tay Ho where most foreign residents live, have English-speaking vets and were set up largely to serve international pet owners. The vets listed in this directory were each called and confirmed to have English-speaking staff.",
      },
      {
        q: "What do I do if my pet needs a vet at night in Hanoi?",
        a: "Find out your clinic's out-of-hours arrangement when you first register, not when you need it. Not every Hanoi veterinary clinic operates 24 hours, and the ones that do are not always the nearest. Save the number in your phone before an emergency, because searching for an open clinic at 2am with a sick animal is the worst possible time to start.",
      },
      {
        q: "How much does a vet cost in Hanoi?",
        // NEEDS DATA: ask about a consultation, vaccinations, and neutering.
        a: "",
        asOf: "",
      },
      {
        q: "Can I bring my dog or cat to Vietnam?",
        a: "Yes, though the paperwork needs starting well in advance and the requirements change, so confirm current rules with the Vietnamese authorities or a relocation agent rather than relying on an older account. Vaccination records and an import permit are generally involved. Several Hanoi veterinary clinics handle the Vietnamese side of the paperwork and are the practical people to ask.",
      },
    ],
  },

  {
    slug: "visa",
    category: "visa",
    title: "Vietnam Visas and Work Permits: What Expats in Hanoi Ask",
    intro:
      "The questions foreigners living in Hanoi ask most about visas, work permits and residence cards.",
    questions: [
      {
        q: "Do I need a visa agent in Vietnam, or can I do it myself?",
        a: "For a straightforward tourist visa most people manage alone, but for work permits, residence cards and anything involving an employer, an agent is usually worth the fee. The requirements change frequently and are not always documented in English, which is where agents earn their money — knowing what the rules are this month rather than last year.",
      },
      {
        q: "How much does a visa service cost in Hanoi?",
        // NEEDS DATA: ask agents for their fee for a work permit and a TRC.
        a: "",
        asOf: "",
      },
      {
        q: "Is a visa run or an extension better?",
        // NEEDS DATA: both cost and current rules. Do not answer from memory,
        // this is exactly the topic where out-of-date advice does harm.
        a: "",
      },
      {
        q: "How do I find English-speaking visa help in Hanoi?",
        a: "Use an agent that publishes an English website and will answer questions by message before you pay anything. The visa services in this directory each have English-speaking staff, confirmed by phone. Be wary of any agent who will not put their fee in writing.",
      },
    ],
  },
];
