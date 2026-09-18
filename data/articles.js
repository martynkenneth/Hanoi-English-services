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
      "A bike is how most foreigners get around Hanoi, and the rental itself is cheap. What catches people out are the things nobody mentions until something goes wrong — what the price excludes, which charges appear later, and what a shop will ask you to leave as a deposit.",
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
        heading: "What to prepare before you rent",
        body:
          "Shops differ in what they ask for, so check before you arrive rather than turning up short. A cash deposit, evidence you can actually ride, and some form of identification is the usual baseline. The passport is where practice genuinely varies: plenty of reputable Hanoi operators accept one as a deposit and treat it as entirely normal, while others are satisfied with a photo of the information pages plus cash. You are not obliged to hand over the document itself, and it is worth a moment's thought before you do — you may need it for a hotel, a bank or a flight at short notice, and retrieving it during a disagreement is harder than retrieving cash. If a shop will only take the physical passport and you would rather it did not, ask whether a larger cash deposit would do instead. The point is to decide knowingly rather than by default.",
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
  {
    slug: "where-to-live-in-hanoi",
    category: "realestate",
    title: "Where to Live in Hanoi: Choosing an Area and Renting Without Surprises",
    intro:
      "Every agent in Hanoi gets asked which district is best, and the honest answer is that it depends on your morning commute rather than on the area's reputation. Here is how to narrow it down, and what to check before you sign anything.",
    asOf: "September 2026",
    sections: [
      {
        heading: "Which area is right depends on your commute, not the guidebook",
        body:
          "The honest answer to the question every agent gets asked is that it depends on where you need to be each morning. There is no single best district, only the one that fits your workplace, your children's school and how much of your day you are willing to spend on a bike. As a rough signal of where English-speaking services actually cluster: of the 36 businesses in this directory, 14 are in Tay Ho and 5 in Hoan Kiem, with the rest spread across Ba Dinh, Hai Ba Trung, Dong Da and Yen Hoa.",
        quote: {
          business: "Kensington Vietnam Real Estate",
          person: "Harry Nguyen",
          role: "Co-founder & Executive Director",
          text: "“Which area of Hanoi is best for me?” The answer depends on their workplace, children’s school, preferred lifestyle and daily commute.",
        },
      },
      {
        heading: "Take the traffic seriously",
        body:
          "This is the factor foreigners most consistently underestimate, because a distance that looks trivial on a map does not behave like one at eight in the morning. Before committing to a lease, ride the actual commute at the actual time you would be making it, in both directions. A place ten minutes further out can cost you an hour a day.",
        quote: {
          business: "Kensington Vietnam Real Estate",
          person: "Harry Nguyen",
          role: "Co-founder & Executive Director",
          text: "Traffic in Hanoi is not always ideal, so commuting time to work or school should be an important consideration when choosing where to live.",
        },
      },
      {
        heading: "Decide what you want before you start looking",
        body:
          "Viewing property without clear criteria is how people spend three weeks seeing places and end up taking whichever one they saw last. Fixing your priorities first — and being honest about which are genuinely non-negotiable — turns a vague search into a short list.",
        quote: {
          business: "Kensington Vietnam Real Estate",
          person: "Harry Nguyen",
          role: "Co-founder & Executive Director",
          text: "Not having clear requirements for the home they want to rent. Defining priorities such as location, budget, property type, size and move-in date helps make the search much faster and more effective.",
        },
      },
      {
        heading: "What to tell an agent up front",
        body:
          "The more precise you are at the start, the less of your time gets spent on properties that were never going to work. Mention the awkward requirements early rather than after a viewing — pets in particular narrow the field considerably in Hanoi, and there is no point discovering that at the end.",
        quote: {
          business: "Kensington Vietnam Real Estate",
          person: "Harry Nguyen",
          role: "Co-founder & Executive Director",
          text: "They should share their preferred area, budget, move-in date, lease term and any specific requirements such as pets, furniture or view.",
        },
      },
      {
        heading: "Check what the rent actually includes",
        body:
          "Two apartments advertised at the same monthly figure can cost meaningfully different amounts to live in. Management fees, VAT, internet and utilities are sometimes bundled and sometimes not, and the difference can run to a significant share of the rent. Get the full monthly cost in writing before you sign, not the headline number.",
        quote: {
          business: "Kensington Vietnam Real Estate",
          person: "Harry Nguyen",
          role: "Co-founder & Executive Director",
          text: "Location, property condition, size, view, furniture quality and lease term have the greatest impact on rent. Tenants should also confirm whether management fees, VAT, internet and utilities are included, as these can affect the final monthly cost.",
        },
      },
      {
        heading: "Good places go quickly",
        body:
          "This runs against the usual advice to take your time, and it is worth taking seriously. Hanoi has no shortage of listings, but the number that genuinely match a specific combination of area, budget and quality is much smaller than the volume suggests. If you have done the work of defining what you want, be ready to act when it appears.",
        quote: {
          business: "Kensington Vietnam Real Estate",
          person: "Harry Nguyen",
          role: "Co-founder & Executive Director",
          text: "Although there are many rental listings in Hanoi, genuinely good homes that meet a client’s location, quality and budget requirements are more limited. When they find the right property, they should be prepared to make a decision quickly.",
        },
      },
      {
        heading: "Does using an agent cost you anything?",
        body:
          "Generally not. For a standard long-term rental in Hanoi the landlord pays the agent's commission, usually around one month's rent, and the tenant pays nothing. Worth remembering what that means, though: the agent is paid by the other side of the transaction, so their incentive is to close a deal rather than to find you the best available option. That is not a reason to avoid agents, but it is a reason to view through more than one and to read the lease yourself.",
        quote: {
          business: "Kensington Vietnam Real Estate",
          person: "Harry Nguyen",
          role: "Co-founder & Executive Director",
          text: "We normally do not charge tenants a brokerage fee, so using our service does not usually make the rental more expensive. We help clients verify listings, arrange viewings, negotiate fair terms, review the lease and communicate with the landlord throughout the tenancy.",
        },
      },
    ],
  },
  {
    slug: "choosing-a-dentist-in-hanoi",
    category: "dentists",
    title: "Choosing a Dentist in Hanoi: What to Ask Before Treatment",
    intro:
      "Dental work is one of the things foreigners in Hanoi most often pay for out of pocket, and the price range for what sounds like the same problem is enormous. Knowing which questions to ask is worth more than any price list.",
    asOf: "September 2026",
    sections: [
      {
        heading: "Why nobody can quote you a price from a photo",
        body:
          "This is the question every Hanoi clinic fields first, and the honest answer frustrates people: it cannot be answered until someone has looked. The gap is not small either. Using the ranges in our dental price guide, a simple filling runs 260,000–650,000₫, while the same broken tooth needing root canal treatment and a crown is closer to 7,000,000₫. That is a tenfold difference decided by something only an examination and often an X-ray can establish. Treat any firm price quoted over a message, before anyone has seen the tooth, as a number that may well change.",
        quote: {
          business: "Dental 365",
          person: "Dr. Thy Nga Nguyen",
          role: "Main Dentist",
          text: "Usually it is the condition of the tooth and how complicated the treatment turns out to be. Two people can both say they have a “broken tooth,” but one might only need a filling while the other needs a root canal and crown. So it is difficult to judge from a photo or message alone. We always try to explain the options and costs before doing anything.",
        },
      },
      {
        heading: "Do not wait until it hurts",
        body:
          "Pain is a late signal in dentistry, not an early one. By the time a problem announces itself, the cheap version of the fix has often passed, which is how a filling becomes a root canal. Living abroad makes this worse: it is easy to defer something small until a trip home that keeps getting postponed.",
        quote: {
          business: "Dental 365",
          person: "Dr. Thy Nga Nguyen",
          role: "Main Dentist",
          text: "Waiting until something hurts. We see a few patients who have known about a small problem for a while but put it off. Usually the earlier we catch something, the easier it is to deal with.",
        },
      },
      {
        heading: "What to bring to a first appointment",
        body:
          "Very little, which is worth knowing if the admin is what has been putting you off. The two things genuinely worth digging out are any records from a previous dentist and an honest account of your medical history, because both change what a dentist will recommend.",
        quote: {
          business: "Dental 365",
          person: "Dr. Thy Nga Nguyen",
          role: "Main Dentist",
          text: "Nothing. If you have old X-rays or records from your previous dentist, bring them along. And let us know if you are taking any medication or have any medical conditions we should know about. Otherwise, just come in.",
        },
      },
      {
        heading: "Comparing a cheap quote with an expensive one",
        body:
          "Price lists are the easiest thing to compare across clinics and the least informative, because two clinics quoting for a crown may not be quoting for the same crown. Materials vary, who performs the treatment varies, and what happens if something fails afterwards varies most of all. Ask those three questions of both clinics and the comparison becomes meaningful.",
        quote: {
          business: "Dental 365",
          person: "Dr. Thy Nga Nguyen",
          role: "Main Dentist",
          text: "I would ask them not to compare only the number on the price list. Ask what treatment you actually need, what materials are being used, who is doing the treatment, what happens if there is a problem afterwards, and whether you feel comfortable with the dentist. Cheap treatment is not necessarily bad, and expensive treatment is not automatically good. You need to understand what you are paying for.",
        },
      },
      {
        heading: "You are allowed to ask questions",
        body:
          "Worth stating plainly, because a language barrier and an unfamiliar system make people more reluctant to interrupt than they would be at home — and dentistry is one of the worst places to nod along to something you have not understood. A clinic that treats foreign patients regularly expects to be asked.",
        quote: {
          business: "Dental 365",
          person: "Dr. Thy Nga Nguyen",
          role: "Main Dentist",
          text: "That they can ask as many questions as they want. If you do not understand why we are recommending something, ask us. If you want to know if there is another option, ask us. If you are nervous, tell us. Especially when you are having dental treatment in another country, you should feel comfortable with the plan before you start.",
        },
      },
      {
        heading: "Do not choose purely on how close it is",
        body:
          "Convenience is the reason most people give for the dentist they ended up with, and it is a poor one for anything beyond a check-up. The things that matter — whether treatment is explained clearly, whether you feel rushed into deciding — cost you nothing to assess on a first visit, and a twenty-minute journey is not much against work you may live with for years.",
        quote: {
          business: "Dental 365",
          person: "Dr. Thy Nga Nguyen",
          role: "Main Dentist",
          text: "Do not choose a dentist only because they are close to your apartment. Find somewhere you feel comfortable, where things are explained clearly and you do not feel rushed into making a decision. And regular check-ups really are easier than emergency appointments.",
        },
      },
    ],
    sources: [
      ["Hanoi dental cost benchmark", "https://www.dentavacation.com/dental-work-hanoi-vietnam/"],
    ],
  },
];
