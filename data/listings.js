/*
  HANOI EXPAT DIRECTORY — DATA FILE
  =================================
  This is the only file you need to touch to add a new business.

  HOW TO ADD A LISTING (do this daily!):
  1. Copy one of the objects inside the LISTINGS array below.
  2. Paste it at the top of the array, give it a unique "id" (no spaces, e.g. "hanoi-smile-dental").
  3. Fill in the real details. Keep "unverified: true" until you have confirmed
     the phone number and address yourself, then delete that line.
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
  /* ------------------------------------------------------------------
     COPY-PASTE TEMPLATE — copy everything between the two dashed lines
     below, paste it directly under this block, then fill it in.
     Keep every comma exactly where it is.

  {
    id: "",             // unique, lowercase, dashes not spaces: "hanoi-smile-dental"
    name: "",           // "Hanoi Smile Dental"
    category: "",       // must match a key from CATEGORIES above, e.g. "dentists"
    description: "",    // one line, roughly 90 characters
    address: "",        // "Tay Ho District, Hanoi"
    phone: "",          // "+84 24 1234 5678"
    website: "",        // full URL, or leave as "" if they have none
    englishLevel: "",   // "Fluent", "Good" or "Basic"
    tier: "free",       // "free", "featured" or "prime"
    dateAdded: "",      // "2026-08-13"
    unverified: true    // delete this line once you've confirmed phone+address
  },

     ------------------------------------------------------------------
     Two rules that cover almost every mistake:
       • Every line inside { } ends with a comma EXCEPT the last one.
       • Every entry ends with },  except the very last entry in the file.
     If you use an apostrophe in text, that is fine. If you need a double
     quote, write it as \" so it does not end the string early.

     Broke something? The site will tell you what and where instead of
     going blank, and GitHub emails you within a minute of pushing.
     ------------------------------------------------------------------ */
  {
    id: "hanoi-family-medical-practice",
    name: "Family Medical Practice Hanoi",
    category: "doctors",
    description: "International GP clinic with multilingual doctors and 24/7 emergency care.",
    address: "298I Kim Ma, Ba Dinh District, Hanoi",
    phone: "+84 24 3843 0748",
    website: "https://www.vietnammedicalpractice.com/hanoi/en",
    englishLevel: "Fluent",
    tier: "free",
    dateAdded: "2026-08-13",
    unverified: true,
    verify: "https://www.google.com/maps/search/?api=1&query=Family+Medical+Practice+Hanoi"
  },
  {
    id: "hanoi-h-plus-medical-center",
    name: "H PLUS International Medical Center",
    category: "doctors",
    description: "International medical center with an English site and overseas contact line.",
    address: "7th–8th Floors, Lotte Mall West Lake, Tay Ho District, Hanoi",
    phone: "+84 24 7306 9889",
    website: "https://en.clinichplus.com/",
    englishLevel: "Fluent",
    tier: "free",
    dateAdded: "2026-08-13",
    unverified: true,
    verify: "https://www.google.com/maps/search/?api=1&query=H+PLUS+International+Medical+Center+Hanoi"
  },
  {
    id: "hanoi-westcoast-dental",
    name: "Westcoast International Dental Clinic",
    category: "dentists",
    description: "International dental clinic with English service and general specialist care.",
    address: "2F Syrena Shopping Center, 51 Xuan Dieu, Tay Ho District, Hanoi",
    phone: "+84 968 565 151",
    website: "https://westcoastinternational.com/",
    englishLevel: "Fluent",
    tier: "free",
    dateAdded: "2026-08-13",
    unverified: true,
    verify: "https://www.google.com/maps/search/?api=1&query=Westcoast+International+Dental+Clinic+Hanoi"
  },
  {
    id: "hanoi-australian-dental",
    name: "Australian Dental Clinic",
    category: "dentists",
    description: "Dental clinic explicitly serving expatriates and tourists, with an English site.",
    address: "3 Nguyen Du, Hai Ba Trung District, Hanoi",
    phone: "+84 906 200 434",
    website: "https://australiandentalclinic.vn/",
    englishLevel: "Fluent",
    tier: "free",
    dateAdded: "2026-08-13",
    unverified: true,
    verify: "https://www.google.com/maps/search/?api=1&query=Australian+Dental+Clinic+Hanoi"
  },
  {
    id: "hanoi-asvelis-vet",
    name: "ASVELIS Veterinary Clinic",
    category: "vets",
    description: "Full-service vet clinic with an English site and international pet owners.",
    address: "House G, 98 To Ngoc Van, Tay Ho District, Hanoi",
    phone: "+84 24 3718 2779",
    website: "https://asvelis.com/",
    englishLevel: "Fluent",
    tier: "free",
    dateAdded: "2026-08-13",
    unverified: true,
    verify: "https://www.google.com/maps/search/?api=1&query=ASVELIS+Veterinary+Clinic+Hanoi"
  },
  {
    id: "hanoi-animal-doctors",
    name: "Animal Doctors International",
    category: "vets",
    description: "International veterinary hospital with English service and emergency care.",
    address: "78 To Ngoc Van, Tay Ho District, Hanoi",
    phone: "+84 28 7304 1144",
    website: "https://www.theanimaldoctors.org/",
    englishLevel: "Fluent",
    tier: "free",
    dateAdded: "2026-08-13",
    unverified: true,
    verify: "https://www.google.com/maps/search/?api=1&query=Animal+Doctors+International+Hanoi"
  },
  {
    id: "hanoi-5th-avenue-barbershop",
    name: "5th Avenue Barbershop",
    category: "hairdressers",
    description: "Tay Ho barber with an English/Vietnamese team serving locals and expats.",
    address: "34 Quang An, Tay Ho District, Hanoi",
    phone: "+84 879 797 995",
    website: "https://5thavenuebarbershop.com/",
    englishLevel: "Fluent",
    tier: "free",
    dateAdded: "2026-08-13",
    unverified: true,
    verify: "https://www.google.com/maps/search/?api=1&query=5th+Avenue+Barbershop+Hanoi"
  },
  {
    id: "hanoi-pewpum-barbershop",
    name: "PEWPUM BARBERSHOP",
    category: "hairdressers",
    description: "Classic Tay Ho barbershop with English social posts and foreign visitors.",
    address: "34 Ngo 52 To Ngoc Van, Tay Ho District, Hanoi",
    phone: "+84 969 558 695",
    website: "https://www.facebook.com/pumbarbershop.official/",
    englishLevel: "Good",
    tier: "free",
    dateAdded: "2026-08-13",
    unverified: true,
    verify: "https://www.google.com/maps/search/?api=1&query=PEWPUM+BARBERSHOP+Hanoi"
  },
  {
    id: "hanoi-serene-spa",
    name: "Serene Spa Hanoi",
    category: "massage",
    description: "Old Quarter massage spa with English booking and international reviews.",
    address: "68 Ma May, Hoan Kiem District, Hanoi",
    phone: "+84 916 362 368",
    website: "https://serenespa.vn/",
    englishLevel: "Fluent",
    tier: "free",
    dateAdded: "2026-08-13",
    unverified: true,
    verify: "https://www.google.com/maps/search/?api=1&query=Serene+Spa+Hanoi+68+Ma+May"
  },
  {
    id: "hanoi-healing-spa-may",
    name: "Hanoi Healing Spa by MAY",
    category: "massage",
    description: "Old Quarter massage and beauty spa with English-friendly WhatsApp booking.",
    address: "63 Hang Cot, Hoan Kiem District, Hanoi",
    phone: "+84 862 051 089",
    website: "https://mayspahanoi.com/",
    englishLevel: "Fluent",
    tier: "free",
    dateAdded: "2026-08-13",
    unverified: true,
    verify: "https://www.google.com/maps/search/?api=1&query=Hanoi+Healing+Spa+by+MAY"
  },
  {
    id: "hanoi-acc-chiropractic",
    name: "ACC Chiropractic Clinic",
    category: "chiropractors",
    description: "Chiropractic and musculoskeletal clinic with English site and foreign doctors.",
    address: "1F–2F HDI Tower, 55 Le Dai Hanh, Hai Ba Trung District, Hanoi",
    phone: "+84 965 688 828",
    website: "https://acc.vn/en/",
    englishLevel: "Fluent",
    tier: "free",
    dateAdded: "2026-08-13",
    unverified: true,
    verify: "https://www.google.com/maps/search/?api=1&query=ACC+Chiropractic+Clinic+Hanoi"
  },
  {
    id: "hanoi-khanh-an-rehab",
    name: "Khanh An Physical Rehabilitation Clinic",
    category: "chiropractors",
    description: "Physical rehabilitation clinic rated highly for English by verified nomads.",
    address: "16 Chau Long, Ba Dinh District, Hanoi",
    phone: "+84 852 879 679",
    website: "https://www.facebook.com/khanhanclinic/",
    englishLevel: "Good",
    tier: "free",
    dateAdded: "2026-08-13",
    unverified: true,
    verify: "https://www.google.com/maps/search/?api=1&query=Khanh+An+Physical+Rehabilitation+Clinic+Hanoi"
  },
  {
    id: "hanoi-asl-law",
    name: "ASL LAW",
    category: "lawyers",
    description: "Full-service law firm advising foreign businesses in English.",
    address: "12F Tower 319, 63 Le Van Luong, Yen Hoa, Hanoi",
    phone: "+84 24 7301 2558",
    website: "https://aslgate.com/",
    englishLevel: "Fluent",
    tier: "free",
    dateAdded: "2026-08-13",
    unverified: true,
    verify: "https://www.google.com/maps/search/?api=1&query=ASL+LAW+Hanoi"
  },
  {
    id: "hanoi-castglobal-law",
    name: "CastGlobal Law Vietnam - Hanoi Branch",
    category: "lawyers",
    description: "Foreign-invested law firm serving international companies from its Hanoi branch.",
    address: "Rm 1621, 16F ICON4 Tower, 243A De La Thanh, Lang, Hanoi",
    phone: "+84 24 3760 6628",
    website: "https://cast-vietnam.com/",
    englishLevel: "Good",
    tier: "free",
    dateAdded: "2026-08-13",
    unverified: true,
    verify: "https://www.google.com/maps/search/?api=1&query=CastGlobal+Law+Vietnam+Hanoi+Branch"
  },
  {
    id: "hanoi-asian-tigers",
    name: "Asian Tigers Group Vietnam",
    category: "movers",
    description: "International moving and relocation company with English Hanoi support.",
    address: "78 Xuan Dieu, Tay Ho District, Hanoi",
    phone: "+84 24 3768 5882",
    website: "https://asiantigersgroup.com/vietnam/",
    englishLevel: "Fluent",
    tier: "free",
    dateAdded: "2026-08-13",
    unverified: true,
    verify: "https://www.google.com/maps/search/?api=1&query=Asian+Tigers+Group+Vietnam+Hanoi"
  },
  {
    id: "hanoi-crown-relocations",
    name: "Crown Relocations - Hanoi",
    category: "movers",
    description: "Global mover offering packing, relocation and immigration support in English.",
    address: "Room 301, 3F Coalimex Building, 33 Trang Thi, Cua Nam, Hanoi",
    phone: "+84 24 3936 6741",
    website: "https://www.crownrelo.com/office/hanoi",
    englishLevel: "Fluent",
    tier: "free",
    dateAdded: "2026-08-13",
    unverified: true,
    verify: "https://www.google.com/maps/search/?api=1&query=Crown+Relocations+Hanoi"
  },
  {
    id: "hanoi-property-people",
    name: "Property People Hanoi",
    category: "realestate",
    description: "Foreign-owned Hanoi rental agency with English service for tenants.",
    address: "Ngo 25 Tay Ho, Tay Ho District, Hanoi",
    phone: "+84 364 509 214",
    website: "https://propertypeoplehanoi.com/",
    englishLevel: "Fluent",
    tier: "free",
    dateAdded: "2026-08-13",
    unverified: true,
    verify: "https://www.google.com/maps/search/?api=1&query=Property+People+Hanoi"
  },
  {
    id: "hanoi-housing",
    name: "Hanoi Housing",
    category: "realestate",
    description: "English-language rental agency for apartments, villas and offices in Hanoi.",
    address: "21 To Ngoc Van, Tay Ho District, Hanoi",
    phone: "+84 906 308 222",
    website: "https://hanoihousing.vn/",
    englishLevel: "Fluent",
    tier: "free",
    dateAdded: "2026-08-13",
    unverified: true,
    verify: "https://www.google.com/maps/search/?api=1&query=Hanoi+Housing+21+To+Ngoc+Van"
  },
  {
    id: "hanoi-vietnam-visa-com",
    name: "Vietnam-visa.com",
    category: "visa",
    description: "English visa, work-permit and residence-card support with a Hanoi office.",
    address: "23F TASCO Building, Lot HH2-2 Pham Hung, Tu Liem, Hanoi",
    phone: "+84 387 285 099",
    website: "https://www.vietnam-visa.com/",
    englishLevel: "Fluent",
    tier: "free",
    dateAdded: "2026-08-13",
    unverified: true,
    verify: "https://www.google.com/maps/search/?api=1&query=Vietnam-visa.com+Hanoi+TASCO+Building"
  },
  {
    id: "hanoi-vietnamvisavoa",
    name: "VietnamVisaVOA.com",
    category: "visa",
    description: "Hanoi visa service with English support via WhatsApp, Zalo and email.",
    address: "35 Luong Dinh Cua, Dong Da District, Hanoi",
    phone: "+84 969 255 515",
    website: "https://vietnamvisavoa.com/en/",
    englishLevel: "Fluent",
    tier: "free",
    dateAdded: "2026-08-13",
    unverified: true,
    verify: "https://www.google.com/maps/search/?api=1&query=VietnamVisaVOA.com+Hanoi"
  },
  {
    id: "hanoi-indochine-insurance",
    name: "Indochine Insurance Brokers",
    category: "finance",
    description: "Insurance broker with English site and Hanoi head office for personal cover.",
    address: "7F Hanoi Tourist Tower, 18 Ly Thuong Kiet, Cua Nam, Hanoi",
    phone: "+84 24 3266 6119",
    website: "https://www.iib.com.vn/",
    englishLevel: "Fluent",
    tier: "free",
    dateAdded: "2026-08-13",
    unverified: true,
    verify: "https://www.google.com/maps/search/?api=1&query=Indochine+Insurance+Brokers+Hanoi"
  },
  {
    id: "hanoi-hsbc",
    name: "HSBC Bank (Vietnam) Ltd. - Ha Noi Branch",
    category: "finance",
    description: "International bank with English online support and a main Hanoi branch.",
    address: "Capital Palace, 29 Lieu Giai, Ngoc Ha, Hanoi",
    phone: "+84 24 6270 7707",
    website: "https://www.hsbc.com.vn/en-vn/",
    englishLevel: "Fluent",
    tier: "free",
    dateAdded: "2026-08-13",
    unverified: true,
    verify: "https://www.google.com/maps/search/?api=1&query=HSBC+Ha+Noi+Branch+29+Lieu+Giai"
  },
  {
    id: "hanoi-bis",
    name: "British International School Hanoi",
    category: "schools",
    description: "British international school with English-medium teaching from early years to IB.",
    address: "Hoa Lan Road, Vinhomes Riverside, Phuc Loi, Hanoi",
    phone: "+84 24 3946 0435",
    website: "https://www.nordangliaeducation.com/bis-hanoi",
    englishLevel: "Fluent",
    tier: "free",
    dateAdded: "2026-08-13",
    unverified: true,
    verify: "https://www.google.com/maps/search/?api=1&query=British+International+School+Hanoi"
  },
  {
    id: "hanoi-concordia",
    name: "Concordia International School Hanoi",
    category: "schools",
    description: "American international school with English instruction from preschool to Grade 12.",
    address: "Van Tri Golf Course, Thien Loc, Hanoi",
    phone: "+84 24 3795 8878",
    website: "https://www.concordiahanoi.org/",
    englishLevel: "Fluent",
    tier: "free",
    dateAdded: "2026-08-13",
    unverified: true,
    verify: "https://www.google.com/maps/search/?api=1&query=Concordia+International+School+Hanoi"
  },
  {
    id: "hanoi-james-motorbikes",
    name: "James Hanoi Motorbikes",
    category: "auto",
    description: "Motorbike rentals and sales with English website, WhatsApp and rider support.",
    address: "449 Hong Ha, Hoan Kiem District, Hanoi",
    phone: "+84 915 010 817",
    website: "https://jamesmotorbikes.com/",
    englishLevel: "Fluent",
    tier: "free",
    dateAdded: "2026-08-13",
    unverified: true,
    verify: "https://www.google.com/maps/search/?api=1&query=James+Hanoi+Motorbikes"
  },
  {
    id: "hanoi-rentabike-vietnam",
    name: "RentABike Vietnam",
    category: "auto",
    description: "Motorbike rentals for tourists and expats with English support in Tay Ho.",
    address: "29 Ngo 35 Dang Thai Mai, Tay Ho District, Hanoi",
    phone: "+84 904 392 423",
    website: "https://rentabikevn.com/",
    englishLevel: "Fluent",
    tier: "free",
    dateAdded: "2026-08-13",
    unverified: true,
    verify: "https://www.google.com/maps/search/?api=1&query=RentABike+Vietnam+Hanoi"
  },
  {
    id: "hanoi-hanoi-peak-bespoke",
    name: "Hanoi Peak bespoke",
    category: "tailors",
    description: "Bespoke suit tailor with English-facing Facebook and strong visitor reviews.",
    address: "46 Tho Nhuom, Cua Nam, Hanoi",
    phone: "+84 936 798 588",
    website: "https://www.facebook.com/bespokehanoi/",
    englishLevel: "Good",
    tier: "free",
    dateAdded: "2026-08-13",
    unverified: true,
    verify: "https://www.google.com/maps/search/?api=1&query=Hanoi+Peak+bespoke"
  },
  {
    id: "hanoi-duc-nhan-tailor",
    name: "Duc Nhan Tailor",
    category: "tailors",
    description: "Old Quarter custom tailor popular with English-speaking business travelers.",
    address: "32 Hang Non, Hoan Kiem District, Hanoi",
    phone: "+84 914 648 452",
    website: "",
    englishLevel: "Good",
    tier: "free",
    dateAdded: "2026-08-13",
    unverified: true,
    verify: "https://www.google.com/maps/search/?api=1&query=Duc+Nhan+Tailor+Hanoi"
  },
  {
    id: "hanoi-yoga-lab",
    name: "Yoga Lab Hanoi",
    category: "fitness",
    description: "Bilingual yoga studio with English classes and WhatsApp booking.",
    address: "5F, 19-21 Yen Ninh Alley, Ba Dinh District, Hanoi",
    phone: "+84 866 956 514",
    website: "https://www.yogalabhanoi.com/",
    englishLevel: "Fluent",
    tier: "free",
    dateAdded: "2026-08-13",
    unverified: true,
    verify: "https://www.google.com/maps/search/?api=1&query=Yoga+Lab+Hanoi"
  },
  {
    id: "hanoi-crossfit-tay-ho",
    name: "CrossFit Tay Ho",
    category: "fitness",
    description: "CrossFit gym with English site and an international Hanoi member community.",
    address: "34 Dang Thai Mai, Tay Ho District, Hanoi",
    phone: "+84 36 381 0923",
    website: "https://www.crossfittayho.com/",
    englishLevel: "Fluent",
    tier: "free",
    dateAdded: "2026-08-13",
    unverified: true,
    verify: "https://www.google.com/maps/search/?api=1&query=CrossFit+Tay+Ho+Hanoi"
  },
  {
    id: "hanoi-laundry-shop",
    name: "Hanoi Laundry Shop",
    category: "homeservices",
    description: "Laundry pickup and express service with English website and WhatsApp contact.",
    address: "42 Hang Duong, Hoan Kiem District, Hanoi",
    phone: "+84 915 253 490",
    website: "https://hanoilaundry.com/",
    englishLevel: "Good",
    tier: "free",
    dateAdded: "2026-08-13",
    unverified: true,
    verify: "https://www.google.com/maps/search/?api=1&query=Hanoi+Laundry+Shop+42+Hang+Duong"
  },
  {
    id: "hanoi-life-balance",
    name: "Life Balance",
    category: "homeservices",
    description: "Home and office cleaning company with English page and 24/7 support contact.",
    address: "88 Lang Ha, Dong Da District, Hanoi",
    phone: "+84 911 200 100",
    website: "https://lifebalance.vn/en/cleaning-services/",
    englishLevel: "Good",
    tier: "free",
    dateAdded: "2026-08-13",
    unverified: true,
    verify: "https://www.google.com/maps/search/?api=1&query=Life+Balance+Cleaning+Hanoi+88+Lang+Ha"
  }
];
