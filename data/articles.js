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
          "A reliable 110cc semi-automatic commuter bike rents for around 1,300,000₫ a month in Hanoi, with budget options from about 700,000₫. Daily rates run roughly 200,000–260,000₫ for a small scooter and 470,000–1,300,000₫ for a touring or adventure bike. Monthly is dramatically better value if you are staying more than a fortnight, and monthly rentals from established shops often include servicing and oil changes. What moves the price within those ranges is a longer list than most people expect, and two of the factors are worth knowing before you compare quotes: transmission type, because automatics generally cost more than semi-automatics, and where you rent from, because going direct to an operator is usually cheaper than booking through a hotel.",
        quote: {
          business: "Just Cruizin' Hanoi",
          person: "To Hoai Lam",
          role: "Founder",
          text: "Engine size, bike age, bike type — automatics are typically more costly than semi-automatics and even manual bikes — bike condition, and rental length. Monthly city rentals are massively discounted compared to daily or weekly rentals. Renting directly from operators is normally more affordable than via hotels, and rentals in high-demand tourist hubs and big cities are more costly.",
        },
      },
      {
        heading: "What the price does not include",
        body:
          "This is where the real difference between shops shows up. Servicing and mechanical breakdown are commonly covered on a monthly rental; damage and punctures almost never are. Before you pay, get a clear answer on who pays for a flat tyre, what happens if the bike is stolen, whether there is a kilometre limit, and whether breakdown support extends outside Hanoi. A shop used to foreign customers will volunteer all of this without being asked, which is itself a useful signal. The obligation runs both ways, though: a monthly rate that includes servicing assumes you actually turn up for the service.",
        quote: {
          business: "Just Cruizin' Hanoi",
          person: "To Hoai Lam",
          role: "Founder",
          text: "Making sure a motorbike deal is smooth sailing requires effort on both ends. As much as we are responsible for ensuring the units provided are safe and reliable, they need to be serviced on time and operated correctly. The most common mistake is thinking it is all about getting on a bike and riding, failing to tell us about problems at their early stages, and not turning up for the monthly services.",
        },
      },
      {
        heading: "The charges that catch people out",
        body:
          "These are the ones nobody thinks to ask about, and all three are avoidable if you do. Getting a bike repaired yourself rather than through the shop can be charged back to you, because the shop has no way to judge the work. Keeping a monthly rental a few days longer can be billed at the daily rate rather than pro-rata, which is dramatically more expensive. And taking a bike outside the city or the area the agreement covers can carry its own fee. Ask about all three before you sign, not after.",
        quote: {
          business: "Just Cruizin' Hanoi",
          person: "To Hoai Lam",
          role: "Founder",
          text: "Charges concerning unauthorised repairs. In the case of monthly rentals, the application of daily or weekly fees for temporary extension, and extra fees for taking the vehicle outside the city or permitted areas.",
        },
      },
      {
        heading: "Electric or petrol?",
        body:
          "Asked what customers ask most often, Just Cruizin' answered in two words. Electric bikes are now common enough in Hanoi that this is the first decision rather than an afterthought, and the answer depends less on the bike than on where you live. Charging is the deciding factor: if you cannot charge where you park, an electric bike is impractical however good it is, and some apartment buildings restrict charging. Ask about realistic range for the riding you actually do, where you would charge, and what happens if you run out mid-journey. If you plan trips outside the city, ask specifically about charging along the route.",
        quote: {
          business: "Just Cruizin' Hanoi",
          person: "To Hoai Lam",
          role: "Founder",
          text: "EV or fuel?",
        },
      },
      {
        heading: "Do not leave your passport",
        body:
          "Some rental shops ask to hold your passport as security. You are not obliged to agree, and you should not: you may need it for a hotel, a bank, a clinic or a flight at no notice, and recovering it from a shop in a dispute is far harder than recovering a cash deposit. A photo of the information pages plus a cash deposit is normal practice at shops used to foreign customers, and a shop that will accept nothing less than the physical document is telling you how a disagreement would go.",
        quote: {
          business: "Just Cruizin' Hanoi",
          person: "To Hoai Lam",
          role: "Founder",
          text: "We require a photo of their passport info pages, rent and deposit cash, basic driving skills, and road rule knowledge.",
        },
      },
      {
        heading: "The licence question people get wrong",
        body:
          "What you legally need depends on the engine size of the bike you are actually riding, not on what you rode at home. This matters more than the fine in two ways: riding without the correct licence can void your travel or health insurance entirely, and a bike stopped without the right paperwork can be confiscated — which is your rental shop's asset, and becomes your problem. Check your own position before you ride, and check that any paperwork a shop provides is genuine.",
        quote: {
          business: "Just Cruizin' Hanoi",
          person: "To Hoai Lam",
          role: "Founder",
          text: "It is not just about getting on and riding. It is also about knowing your bike, your expectations of it, how to operate it, and what you can do to help your service provider make sure it does not run out of oil or get confiscated.",
        },
      },
      {
        heading: "Checking the bike before you take it",
        body:
          "Photograph the bike from every angle before you ride away, including existing scratches, and make sure the shop sees you do it. Check the brakes, the lights, the horn and the tyre tread. Confirm the registration paperwork is in the bike and ask what to do if you are stopped. Five minutes here prevents the most common dispute in Hanoi bike rental, which is an argument about damage that was already there. Getting the right bike in the first place matters just as much as checking it.",
        quote: {
          business: "Just Cruizin' Hanoi",
          person: "To Hoai Lam",
          role: "Founder",
          text: "Know what you want, what you are capable of, and choose the right unit from the get go.",
        },
      },
    ],
    sources: [
      ["Offroad Vietnam published rental prices", "https://offroadvietnam.com/prices"],
      ["James Motorbikes rental policy", "https://jamesmotorbikes.com/policy/"],
    ],
  },
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
  {
    slug: "choosing-a-yoga-class-in-hanoi",
    category: "fitness",
    title: "Yoga in Hanoi: How to Choose a Class That Suits You",
    intro:
      "Hanoi has plenty of studios and most will happily take your money for whichever class you pick. Choosing well takes about five minutes of asking, and the questions worth asking are not the obvious ones.",
    asOf: "September 2026",
    sections: [
      {
        heading: "Do not choose a class by its style name",
        body:
          "The style name is the least reliable guide to what a class will actually be like. Two classes sharing a name, at different studios or even with different teachers at the same studio, can differ in pace, intensity and focus far more than the label suggests. Read the class description rather than the title, and if it is still unclear, ask before you book rather than finding out on the mat.",
        quote: {
          business: "SAGE Wellness",
          person: "Huệ Trần",
          role: "Founder",
          text: "Choosing a class based only on the style name. A Vinyasa or Hatha class can feel very different depending on the teacher, pace and focus. We always recommend checking the class description and asking the studio if you are unsure which class would suit you.",
        },
      },
      {
        heading: "Ask whether the class is taught in English",
        body:
          "It sounds obvious, and it is still the question Hanoi studios field most often from foreign residents. A class listed in English on a website is not always taught in English on the day, particularly when a teacher is covering for someone else. Ask when you book rather than when you arrive.",
        quote: {
          business: "SAGE Wellness",
          person: "Huệ Trần",
          role: "Founder",
          text: "“Is the class taught in English?” is probably the question we hear most. Language can make a big difference, especially when you are trying a new teacher or style, so we always encourage international guests to ask before booking.",
        },
      },
      {
        heading: "What to bring to your first class",
        body:
          "Less than most people expect. Studios in Hanoi generally provide mats and props, so comfortable clothes and water are usually enough. Arrive early enough to find the room and speak to the teacher, and mention any injury or limitation before the class starts rather than halfway through it.",
        quote: {
          business: "SAGE Wellness",
          person: "Huệ Trần",
          role: "Founder",
          text: "Not much. Comfortable clothes and a water bottle are enough. We provide mats and props. We recommend arriving 10 to 15 minutes early for your first class and letting the teacher know about any injuries or limitations before class.",
        },
      },
      {
        heading: "How the pricing works",
        body:
          "Yoga in Hanoi is generally sold either as a single drop-in class or as a package, and the price per class falls substantially with the package. That is the main variable, so work out roughly how often you will realistically attend before buying either. A studio that publishes both prices clearly is much easier to compare than one that quotes only on request.",
        quote: {
          business: "SAGE Wellness",
          person: "Huệ Trần",
          role: "Founder",
          text: "For regular yoga classes, pricing mainly depends on whether you book a single class or a package. There should not really be a surprise final bill — we believe prices and policies should be clear before you book.",
        },
      },
      {
        heading: "Cheaper is not the same as better value",
        body:
          "Price per class is the easiest thing to compare and the least informative. Class size changes how much attention you get, and a packed class with an excellent teacher can still be worse for a beginner than a quiet one with an average teacher. Ask how many people are usually in the room at the time you would actually attend, not the studio's capacity.",
        quote: {
          business: "SAGE Wellness",
          person: "Huệ Trần",
          role: "Founder",
          text: "Look beyond the price per class. Class size, teacher quality, the amount of individual attention you receive, the space and the overall experience can be very different from one studio to another. The cheapest class is not necessarily the best value for you, and neither is the most expensive one.",
        },
      },
      {
        heading: "You do not need to be flexible to start",
        body:
          "The most common reason people give for not trying a class is the one teachers hear as a misunderstanding. Flexibility is an outcome rather than an entry requirement, and a beginner in a room of experienced practitioners is entirely normal rather than conspicuous.",
        quote: {
          business: "SAGE Wellness",
          person: "Huệ Trần",
          role: "Founder",
          text: "You do not need to be flexible, experienced, or have a “yoga body” to join a class. And you do not have to commit to one style straight away. Try different teachers and practices and find what works for your body and what you need at that moment.",
        },
      },
      {
        heading: "Message the studio before you book",
        body:
          "This matters most if you are in Hanoi briefly and cannot afford to waste a session on the wrong class. A studio used to international guests will recommend something based on your experience and what you want from it. How they answer tells you as much about the studio as the recommendation does about the class.",
        quote: {
          business: "SAGE Wellness",
          person: "Huệ Trần",
          role: "Founder",
          text: "If you are staying in Hanoi for a short time, do not be afraid to contact a studio before booking. A good studio should be able to recommend a class based on your experience, energy level and what you are looking for, whether that is movement, mobility, strength or simply slowing down.",
        },
      },
    ],
  },
];
