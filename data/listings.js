/*
  HANOI EXPAT DIRECTORY — DATA FILE
  =================================
  This is the only file you need to touch to add a new business.

  HOW TO ADD A LISTING (do this daily!):
  1. Copy one of the objects inside the LISTINGS array below.
  2. Paste it at the top of the array, give it a unique "id" (no spaces, e.g. "hanoi-smile-dental").
  3. Fill in the real details. Delete the "sample: true" line — that's only for the demo entries.
  4. Set "tier" to "free", "featured" or "prime" depending on what the business paid for.
     - "prime"    -> shown in the homepage spotlight + top of its category, across the site
     - "featured" -> gold badge + top of its own category
     - "free"     -> normal listing
  5. Save the file, commit, and push. That's it — no build step required.

  Categories must match one of the "key" values in CATEGORIES below.
  Want a new category? Add an entry to CATEGORIES first, then use its key.
*/

const CATEGORIES = [
  { key: "doctors",      label: "Doctors & Clinics",       icon: "🩺" },
  { key: "dentists",     label: "Dentists",                icon: "🦷" },
  { key: "vets",         label: "Vets & Pet Care",          icon: "🐾" },
  { key: "hairdressers", label: "Hairdressers & Barbers",   icon: "💇" },
  { key: "massage",      label: "Massage & Spa",            icon: "💆" },
  { key: "chiropractors",label: "Chiropractors",            icon: "🦴" },
  { key: "lawyers",      label: "Lawyers & Legal",          icon: "⚖️" },
  { key: "movers",       label: "House Movers",             icon: "📦" },
  { key: "realestate",   label: "Real Estate Agents",       icon: "🏠" },
  { key: "visa",         label: "Visa & Immigration",       icon: "🛂" },
  { key: "finance",      label: "Insurance & Banking",      icon: "💰" },
  { key: "schools",      label: "Schools & Tutors",         icon: "🎓" },
  { key: "auto",         label: "Auto & Motorbike",         icon: "🚗" },
  { key: "tailors",      label: "Tailors",                  icon: "🧵" },
  { key: "fitness",      label: "Fitness & Gyms",           icon: "🏋️" },
  { key: "homeservices", label: "Home Services & Cleaning", icon: "🧹" },
];

const LISTINGS = [
  {
    id: "sample-family-clinic",
    name: "Hanoi Family Medical Clinic",
    category: "doctors",
    description: "General practice with English-speaking doctors, walk-ins welcome, 24/7 hotline.",
    address: "Tay Ho District, Hanoi",
    phone: "+84 24 xxx xxxx",
    website: "",
    englishLevel: "Fluent",
    tier: "prime",
    dateAdded: "2026-08-01",
    sample: true
  },
  {
    id: "sample-dental",
    name: "Smile Care Dental",
    category: "dentists",
    description: "Modern dental clinic, international-trained dentists, English consultations.",
    address: "Ba Dinh District, Hanoi",
    phone: "+84 24 xxx xxxx",
    website: "",
    englishLevel: "Fluent",
    tier: "featured",
    dateAdded: "2026-08-02",
    sample: true
  },
  {
    id: "sample-vet",
    name: "Paws & Claws Vet Clinic",
    category: "vets",
    description: "Small animal vet clinic, vaccinations, grooming and pet passports for travel.",
    address: "Tay Ho District, Hanoi",
    phone: "+84 24 xxx xxxx",
    website: "",
    englishLevel: "Good",
    tier: "free",
    dateAdded: "2026-08-03",
    sample: true
  },
  {
    id: "sample-hair",
    name: "The Cutting Room",
    category: "hairdressers",
    description: "Western-style barbershop and salon, colour specialists, no language barrier.",
    address: "Tay Ho District, Hanoi",
    phone: "+84 24 xxx xxxx",
    website: "",
    englishLevel: "Fluent",
    tier: "featured",
    dateAdded: "2026-08-04",
    sample: true
  },
  {
    id: "sample-massage",
    name: "Serenity Spa & Massage",
    category: "massage",
    description: "Traditional and deep-tissue massage, quiet spa setting, online booking in English.",
    address: "Hoan Kiem District, Hanoi",
    phone: "+84 24 xxx xxxx",
    website: "",
    englishLevel: "Good",
    tier: "free",
    dateAdded: "2026-08-05",
    sample: true
  },
  {
    id: "sample-chiro",
    name: "Align Chiropractic Hanoi",
    category: "chiropractors",
    description: "Licensed chiropractor treating back, neck and posture issues, sports injuries.",
    address: "Cau Giay District, Hanoi",
    phone: "+84 24 xxx xxxx",
    website: "",
    englishLevel: "Fluent",
    tier: "free",
    dateAdded: "2026-08-05",
    sample: true
  },
  {
    id: "sample-lawyer",
    name: "Nguyen & Partners Law Firm",
    category: "lawyers",
    description: "Foreign investment, work permits, property and family law, English-speaking team.",
    address: "Hoan Kiem District, Hanoi",
    phone: "+84 24 xxx xxxx",
    website: "",
    englishLevel: "Fluent",
    tier: "featured",
    dateAdded: "2026-08-06",
    sample: true
  },
  {
    id: "sample-movers",
    name: "SafeMove Relocation Services",
    category: "movers",
    description: "Local and international moves, packing service, storage. Quotes over WhatsApp.",
    address: "Serves all of Hanoi",
    phone: "+84 24 xxx xxxx",
    website: "",
    englishLevel: "Good",
    tier: "free",
    dateAdded: "2026-08-06",
    sample: true
  },
  {
    id: "sample-realestate",
    name: "Hanoi Homes Real Estate",
    category: "realestate",
    description: "Apartments and houses for expats, no-commission listings, English-speaking agents.",
    address: "Tay Ho District, Hanoi",
    phone: "+84 24 xxx xxxx",
    website: "",
    englishLevel: "Fluent",
    tier: "free",
    dateAdded: "2026-08-07",
    sample: true
  },
  {
    id: "sample-visa",
    name: "VisaEase Hanoi",
    category: "visa",
    description: "Visa extensions, work permits, temporary residence cards — done for you.",
    address: "Serves all of Hanoi",
    phone: "+84 24 xxx xxxx",
    website: "",
    englishLevel: "Fluent",
    tier: "prime",
    dateAdded: "2026-08-07",
    sample: true
  },
  {
    id: "sample-schools",
    name: "Hanoi Language Exchange",
    category: "schools",
    description: "Vietnamese lessons for expats, private or group classes, flexible scheduling.",
    address: "Cau Giay District, Hanoi",
    phone: "+84 24 xxx xxxx",
    website: "",
    englishLevel: "Fluent",
    tier: "free",
    dateAdded: "2026-08-08",
    sample: true
  },
  {
    id: "sample-auto",
    name: "Hanoi Motorbike Rentals & Repair",
    category: "auto",
    description: "Automatic and manual bike rentals, honest repairs, English spoken.",
    address: "Ba Dinh District, Hanoi",
    phone: "+84 24 xxx xxxx",
    website: "",
    englishLevel: "Basic",
    tier: "free",
    dateAdded: "2026-08-08",
    sample: true
  }
];
