import { MARKETS, type NavItem } from "@/lib/navigation";

export type Market = NavItem & {
  timeZone: string;
  image: string;
  alt: string;
  /** 4:3 crop of the same photograph, for the market page. */
  photo: string;
  /** Where foreign buying concentrates in this country. */
  concentration: string;
  /** A neutral account of the market, for the index row. */
  summary: string;
  /** The longer account, for the market's own page. */
  blurb: string;
  /** Reasons that hold up without a price or a yield attached. */
  reasons: { title: string; text: string }[];
  /** How a purchase runs, per TEKCE's published country guide. */
  steps: string[];
  /** Background on the market itself, beyond the opening blurb. */
  context: string[];
  /** Where foreign buying actually happens, area by area. */
  districts: { name: string; text: string }[];
  /** What a foreign buyer may own, and how title works. */
  rules: string[];
  /** Questions with answers the guides actually give. */
  faqs: { q: string; a: string }[];
  /** What a purchase adds on top of the price, per TEKCE's cost guide. */
  costs: {
    headline: string;
    rows: { item: string; rate: string; paidBy: string }[];
    note?: string;
  };
  /** What borrowing looks like for a foreign buyer here. */
  borrowing: string;
  /** The mechanics that differ between markets, for the comparison. */
  essentials: {
    ownership: string;
    registry: string;
    obtain: string;
    timetable: string;
  };
};

const band = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=2400&h=520&q=80`;

const portrait = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&h=1200&q=80`;

/**
 * Each market is described as a market, not as a sales pitch: what it is,
 * where buying concentrates, and the mechanics of ownership there.
 *
 * Markets come from the shared navigation list, so the header dropdown, the
 * homepage section and this page can never disagree. Photographs are
 * atmospheric Unsplash images of each region, not TEKCE locations.
 *
 * Buying steps, ownership types, registries and timetables are taken from
 * TEKCE's own published country guides at tekce.com/spain, /turkiye,
 * /north-cyprus and /uae (checked 2026-09-16). Nothing here is a price, a
 * yield or a tax claim, and anything a guide does not state is left out.
 */
const DETAILS: Record<string, Omit<Market, keyof NavItem>> = {
  "/markets/spain": {
    timeZone: "Europe/Madrid",
    image: band("1712045927218-521b149861b2"),
    photo: portrait("1539703130602-b55b0896896d"),
    alt: "A terracotta apartment complex above the Mediterranean at dusk, palms along the road below.",
    concentration: "Costa del Sol and Costa Blanca",
    summary:
      "Foreign buyers have been on the Spanish coast since the early 1960s, and whole stretches of it are built around them. It is the only one of these four markets inside the Schengen area. Since the property-investment Golden Visa closed in April 2025, owning a home and holding residency are separate questions there.",
    blurb:
      "Spain has been selling homes to foreign buyers since the early 1960s, and the coast is built around it. The Costa del Sol and the Costa Blanca are where most of that demand still lands, and where the paperwork, the agents and the flights are all long established.",
    reasons: [
      {
        title: "Two coastlines, one short flight away",
        text: "Atlantic on one side, Mediterranean on the other, with direct flights from most European cities.",
      },
      {
        title: "Inside Schengen",
        text: "A Spanish residence permit lets you travel freely across 29 European countries.",
      },
      {
        title: "Two residence routes are open",
        text: "The Non-Lucrative Visa for people living on income from elsewhere, and the Digital Nomad Visa for remote workers. The property-investment Golden Visa closed on 3 April 2025 — buying a home does not, by itself, grant residency.",
      },
    ],
    steps: [
      "TEKCE's lawyers run due diligence on the property and its ownership",
      "A reservation deposit holds it",
      "You sign the purchase proposal",
      "Your NIE number and a Spanish bank account are arranged",
      "The title deed is transferred in front of a notary",
    ],
    context: [
      "Spain takes between 85 and 90 million visitors a year, and roughly 6.5 million of its 48.5 million residents are foreign nationals. Property is a large part of the reason for both.",
      "Foreign buyers account for around one in seven home sales, a share that has held through the post-pandemic recovery. Much of that demand now comes from people who intend to live in the house for part of the year rather than visit it.",
      "The country is federal in this respect: each of Spain's seventeen autonomous regions sets its own transfer tax and stamp duty, so the same home costs a different amount to buy depending on which side of a regional border it sits.",
    ],
    districts: [
      { name: "Costa del Sol", text: "Andalusia's coast, and the top of the market: more than 320 days of sun a year, international schools and a concentration of golf courses. British, Scandinavian and German buyers dominate." },
      { name: "Costa Blanca", text: "Around Alicante, and Spain's most affordable coastal market, with blue-flag beaches and strong health infrastructure. Mostly British, Dutch and Belgian retirees and second-home buyers." },
      { name: "Costa Brava", text: "Cliffside houses and historic coastal towns near the French border, in Girona. Draws French and German buyers looking for privacy rather than amenities." },
      { name: "Costa de la Luz", text: "The Atlantic side, in Cádiz and Huelva: low-density development and protected natural parks. Mainly Spanish and Portuguese buyers, away from mass tourism." },
      { name: "Costa Dorada", text: "Tarragona, and the most family-oriented of the coasts — modern beachfront apartments, Barcelona within reach and theme-park resorts. Popular with northern European families." },
    ],
    rules: [
      "Spain places no general restriction on foreign buyers. You buy in your own name, with the same ownership rights as a Spanish citizen.",
      "Most property is freehold — propiedad plena — meaning the building and the land under it. Leasehold, derecho de superficie, exists but is uncommon.",
      "Title is recorded in the Registro de la Propiedad, the public property register. Registration is what proves ownership and what a lender or a later buyer checks.",
      "An NIE, the Spanish identification number for foreigners, is required before a purchase can complete.",
    ],
    faqs: [
      { q: "Can a foreign national buy property in Spain?", a: "Yes. There is no general restriction, and you buy in your own name with the same rights as a Spanish citizen. You need an NIE number, which is arranged as part of the purchase." },
      { q: "Does buying a home give residency?", a: "Not automatically. The property-investment Golden Visa route closed on 3 April 2025. Owners apply through the Non-Lucrative Visa, for people living on income earned elsewhere, or the Digital Nomad Visa, for remote workers. Owning a home is not a condition for either, but it makes the application simpler because you can show a registered address." },
      { q: "How long does a purchase take?", a: "Usually four to eight weeks from the viewing to the title deed, and two to four weeks when everything has been prepared in advance. A mortgage adds roughly a month." },
      { q: "What does a purchase add to the price?", a: "Around 9% to 14%. The figure depends on whether the home is new or resale, and on the region, because each sets its own transfer tax and stamp duty." },
    ],
    costs: {
      headline: "Around 9% to 14% on top of the price",
      rows: [
        { item: "VAT (IVA)", rate: "10% on a new home; 21% on land, commercial units and separately deeded parking", paidBy: "Buyer" },
        { item: "Transfer tax (ITP)", rate: "7%–10% on a resale, set by the region", paidBy: "Buyer" },
        { item: "Stamp duty (AJD)", rate: "1.2%–1.5%, set by the region", paidBy: "Buyer" },
        { item: "Legal fees", rate: "About 1% plus VAT", paidBy: "Buyer" },
        { item: "Notary", rate: "About €1,000–€1,500", paidBy: "Buyer" },
        { item: "Land Registry", rate: "About €750", paidBy: "Buyer" },
      ],
      note: "VAT and transfer tax are never both paid — a home is one or the other. Notary and registry together usually come to €2,000–€2,500. TEKCE's own worked examples put a €100,000 resale in Málaga at about 10.2% and a €100,000 new build in Alicante at about 14.6%.",
    },
    borrowing:
      "Spanish banks lend to foreign buyers. A deposit of at least 20% is standard and non-residents are usually asked for 25% to 40%, alongside proof of steady income and a valid residence permit.",
    essentials: {
      ownership: "Freehold (propiedad plena)",
      registry: "Registro de la Propiedad",
      obtain: "NIE number",
      timetable: "4–8 weeks to the deed",
    },
  },
  "/markets/turkiye": {
    timeZone: "Europe/Istanbul",
    image: band("1753188355215-b4eed6e3f831"),
    photo: portrait("1727714193260-4ea7de96f73d"),
    alt: "White houses stepping down a hillside to a bay full of moored boats.",
    concentration: "Antalya, Istanbul, Bodrum and Fethiye",
    summary:
      "A large domestic market with a long coastline, where foreign demand concentrates on the Mediterranean coast and Istanbul. A purchase can lead to a residence permit or to citizenship, but not automatically: the value and the type of the property decide whether it qualifies.",
    blurb:
      "Türkiye is where the group started, in Antalya in 2004, and it is still the market with the deepest coverage: nine cities, from the Turquoise Coast to Istanbul and the Black Sea. It is also where most of the projects TEKCE Exclusive represents are being built.",
    reasons: [
      {
        title: "A bridge between two continents",
        text: "Istanbul is the only city in the world that sits on two of them, and it connects to more destinations than almost anywhere else.",
      },
      {
        title: "The Turquoise Coast",
        text: "Antalya, Bodrum and Fethiye are where foreign buyers concentrate — beaches, ancient sites and a long season.",
      },
      {
        title: "Residence and citizenship exist, with conditions",
        text: "A purchase can lead to a residence permit or to citizenship, but not every property qualifies: the value and the type of the property decide.",
      },
    ],
    steps: [
      "TEKCE's lawyers run due diligence on the property and its ownership",
      "A reservation deposit holds it",
      "You sign the purchase agreement",
      "Your tax number and a Turkish bank account are arranged",
      "The title deed — the tapu — is transferred under legal supervision",
    ],
    context: [
      "Türkiye is a large domestic market before it is an international one: a population of 86 million, a young one, and housing demand that runs well ahead of the foreign share of it.",
      "Foreign buying is concentrated rather than spread. Istanbul leads on volume, with Antalya and the Mediterranean coast behind it, and the buyer profile shifts sharply by city — northern Europeans on the coast, Gulf and Middle Eastern buyers in Istanbul, Trabzon and Mersin.",
      "Transactions, title deeds and the taxes attached to them are handled by government authorities, and the deed itself — the tapu — is the single document that matters.",
    ],
    districts: [
      { name: "Antalya", text: "The centre of foreign buying on the Turquoise Coast: beaches, ancient sites and a long season, with stock running from seafront villas to city apartments. Russian, German and British buyers dominate." },
      { name: "Istanbul", text: "The widest range of property in the country — apartments with a view, restored historic buildings, waterfront homes — and buyers from across Europe, the Middle East and the Gulf." },
      { name: "Alanya", text: "Further along the southern coast and cheaper than Antalya proper, with a large established expatriate community. Mostly northern European buyers." },
      { name: "Bodrum and Fethiye", text: "The Aegean resorts in Muğla. Bodrum holds the top of the domestic luxury market; Fethiye and Marmaris carry a steadier second-home trade." },
      { name: "Mersin", text: "A Mediterranean port city, cheaper again, which has grown since Çukurova airport opened at Tarsus. Strong Middle Eastern, Russian and Ukrainian interest." },
      { name: "Trabzon", text: "The Black Sea coast — green and wet rather than Mediterranean — and consistently popular with buyers from the Gulf." },
    ],
    rules: [
      "Most property is freehold: the buyer owns the building and the land under it, and that ownership passes to their heirs. Leasehold exists but is rare.",
      "Title is recorded at the Tapu Sicil Müdürlüğü, the Land Registry. The deed is the tapu, and the registry is a public record of the property's legal status.",
      "Foreign buyers are limited to 25,000 m² of empty building land or agricultural land, and land bought within that limit must be developed within two years. The limit does not bear on buying a finished home.",
      "A Turkish tax number and a local bank account are needed before the deed can be transferred.",
    ],
    faqs: [
      { q: "Does buying give a residence permit or citizenship?", a: "Not automatically — the value and the type of the property decide. Since 16 October 2023, a residence permit requires a residential property worth at least USD 200,000. Citizenship under the investment programme requires a real estate investment of at least USD 400,000, registered at the title deed office and supported by an official valuation report showing that value." },
      { q: "Does the citizenship route cover a family?", a: "Yes. A qualifying purchase of USD 400,000 covers the owner, their spouse, and their minor or dependent children, so one investment can cover every eligible family member at once." },
      { q: "What does a purchase add to the price?", a: "Six to nine per cent, most of it the title deed transfer tax and the estate agent's fee. An appraisal report is an additional cost, but only where a citizenship or residence application is being made." },
      { q: "Is the market regulated?", a: "Yes. Real estate transactions, title deeds and tax processes are regulated and overseen by official government authorities." },
    ],
    costs: {
      headline: "A further 6% to 9% of the price",
      rows: [
        { item: "Title deed transfer tax", rate: "2% from the buyer and 2% from the seller, on the declared price", paidBy: "Both" },
        { item: "Estate agent fee", rate: "2%–6% plus VAT, buyer and seller separately", paidBy: "Both" },
        { item: "Appraisal report", rate: "Required only for a citizenship or residence application", paidBy: "Buyer" },
        { item: "Sworn translator", rate: "About €150", paidBy: "Buyer" },
        { item: "Annual property tax", rate: "0.2% in metropolitan areas, 0.1% elsewhere", paidBy: "Owner" },
      ],
      note: "By local custom the buyer often carries the whole of the transfer tax rather than half of it.",
    },
    borrowing:
      "Turkish banks lend to foreign buyers against proof of income. Twenty per cent is the minimum deposit, and non-residents are usually asked for 25% to 40%.",
    essentials: {
      ownership: "Freehold, in most cases",
      registry: "Tapu Sicil Müdürlüğü (Land Registry)",
      obtain: "Turkish tax number",
      timetable: "Not published",
    },
  },
  "/markets/north-cyprus": {
    timeZone: "Asia/Famagusta",
    image: band("1677023484276-b13e371152a0"),
    photo: portrait("1677023484276-b13e371152a0"),
    alt: "A harbour lined with boats beneath a stone castle.",
    concentration: "Girne and Gazimağusa",
    summary:
      "A small island market still filling in, with the most particular rules of the four. A foreign national may own one property, and the title deed only follows a purchase permit from the Council of Ministers — though full rights to the property begin at signature, not at the deed.",
    blurb:
      "An island market that is still filling in, on the Mediterranean and within reach of Türkiye. It is also the market with the most particular rules, and the one where knowing them in advance matters most.",
    reasons: [
      {
        title: "Rights from the day you sign",
        text: "Once the sales contract is signed you hold full rights to the property, while the title deed works its way through.",
      },
      {
        title: "Deeds are tradable and warranted",
        text: "Three kinds exist — Türk Koçanı, Eşdeğer Koçan and Tahsis Koçanı — each under the warranty of the TRNC and the Turkish Republic.",
      },
      {
        title: "One property per foreign buyer",
        text: "Foreign nationals may own a single property, on land of up to 1,338 m², or a house whose plot does not exceed 6,691 m². Worth knowing before you plan a second purchase.",
      },
    ],
    steps: [
      "TEKCE's lawyers run due diligence on the property and its ownership history",
      "A deposit reserves it",
      "You sign the purchase proposal",
      "A local bank account is arranged",
      "The purchase permit is applied for, and the title deed transferred once it is granted",
    ],
    context: [
      "Cyprus is one island and two countries. The north is the Turkish Republic of Northern Cyprus, a de facto state with its own elected government, which most of the world does not diplomatically recognise. The practical consequence for a buyer is that flights land in Türkiye first and continue to Ercan.",
      "It is small: roughly 35,000 foreign nationals live among a population of about 350,000, and most foreign buyers are German or British. Three hundred days of sun a year do much of the selling.",
      "Because the market is young, a large share of what is for sale is new and unbuilt, and the legal sequence — contract, permit, deed — matters more here than in the other three markets.",
    ],
    districts: [
      { name: "Girne (Kyrenia)", text: "The best-known part of the island: a harbour, a castle, historic sites and the liveliest evenings, with demand concentrated in Alsancak and Lapta." },
      { name: "Gazimağusa (Famagusta)", text: "A university city with a deep harbour and long beaches. The student population keeps demand steady right through the year." },
      { name: "İskele", text: "Twenty kilometres north of Gazimağusa, with long golden beaches and the newest concentration of modern projects. Prices sit below the older coastal towns." },
      { name: "Esentepe", text: "Quiet north coast a short drive from Girne, next to the island's main golf course. Most homes have a sea view, and Bahçeli and Küçük Erenköy sit alongside it." },
      { name: "Lefkoşa (Nicosia)", text: "The capital and the working city — government, universities, the main hospitals — with apartments and traditional Cypriot villas rather than resort stock." },
      { name: "Lefke", text: "Overlooking the Güzelyurt gulf, the most rural and the quietest of the six." },
    ],
    rules: [
      "A foreign national may own one property only: land of up to 1,338 m² — four evlek — or a house whose plot does not exceed 6,691 m².",
      "Every purchase by a foreigner needs a purchase permit from the Council of Ministers, and the title deed is granted only once that permission comes through. It takes between three and twelve months.",
      "Full rights to the property begin when the sales contract is signed and registered, not when the deed arrives. That registration is what protects the buyer in the meantime.",
      "Three kinds of title deed exist — Türk Koçanı, Eşdeğer Koçan and Tahsis Koçanı. Each is warranted by the TRNC and the Turkish Republic, and each can be traded.",
    ],
    faqs: [
      { q: "Can a foreign national buy property here?", a: "Yes, subject to two things: a purchase permit from the Council of Ministers for the property, and the limit of one property per foreign buyer." },
      { q: "What protects a buyer before the deed arrives?", a: "The sales contract, once it is signed and registered at the Land Registry. Full rights to the property start there, and the deed follows when the permit is granted — three to twelve months later." },
      { q: "What does a purchase add to the price?", a: "Between 8% and 20%, and the spread is real rather than cautious: a new home carries 5% VAT and the full 9% conveyance tax, while a resale is exempt from VAT." },
      { q: "Can a foreign buyer borrow here?", a: "It is harder than in the other three markets. Where a mortgage is granted it is capped at around half the property value, with a fee of about 1% of the amount borrowed." },
    ],
    costs: {
      headline: "A further 8% to 20% on top of the property value",
      rows: [
        { item: "VAT", rate: "5% on a new home; resales are exempt", paidBy: "Buyer" },
        { item: "Title deed conveyance tax", rate: "9% for foreign buyers since 15 May 2025; the first 6% falls due when the contract is registered", paidBy: "Buyer" },
        { item: "Stamp duty", rate: "0.5% of the sale price", paidBy: "Buyer" },
        { item: "Legal fees", rate: "£1,000–£1,500 plus 16% VAT", paidBy: "Buyer" },
        { item: "Electricity distribution", rate: "About £1,200–£2,500", paidBy: "Buyer" },
        { item: "Annual property tax", rate: "£0.2 per m²", paidBy: "Owner" },
      ],
      note: "The wide range is real: a new home carries VAT and the full conveyance tax, while a resale carries neither VAT nor, if it has already been transferred, the same registration sequence.",
    },
    borrowing:
      "Borrowing is harder to arrange here than in the other three markets. Where a mortgage is granted it is capped at around half the property value, with a fee of about 1% of the amount borrowed.",
    essentials: {
      ownership: "Freehold, one property per foreign buyer",
      registry: "Land Registry, after the permit",
      obtain: "Council of Ministers purchase permit",
      timetable: "Deed in 3–12 months",
    },
  },
  "/markets/united-arab-emirates": {
    timeZone: "Asia/Dubai",
    image: band("1607414851776-f2fcc379fb48"),
    photo: portrait("1607414851776-f2fcc379fb48"),
    alt: "A skyline of towers silhouetted against a sunset over water.",
    concentration: "Dubai Marina, Palm Jumeirah, Downtown Dubai",
    summary:
      "The most procedural of the four, and the fastest. Foreign buyers own outright, but only inside designated freehold areas, and the transfer is completed in person at the Land Department rather than in front of a notary.",
    blurb:
      "Dubai is the most procedural of the four markets and the fastest. Foreign buyers own outright, but only inside designated freehold areas, and the transfer itself happens in a single room at the Land Department.",
    reasons: [
      {
        title: "Outright ownership, inside the zones",
        text: "Designated freehold areas — Dubai Marina, Palm Jumeirah and Downtown Dubai among them — where a foreign buyer owns the property and the land under it.",
      },
      {
        title: "A transfer measured in weeks",
        text: "From signing the sale agreement, becoming the legal owner typically takes no more than 30 days.",
      },
      {
        title: "Off-plan is the normal way to buy new",
        text: "Construction runs three to five years, and developers commonly spread payment across it in instalments.",
      },
    ],
    steps: [
      "Terms are settled with the lawyers — price, payment method and the rest",
      "The sale agreement (MOU, or Form F) is signed and endorsed at the Registration Trustee's office",
      "The developer issues a No Objection Certificate confirming nothing is owed",
      "Ownership is transferred in person at the Dubai Land Department",
    ],
    context: [
      "Foreign ownership in Dubai is geographic before it is anything else. Full ownership is available only inside designated freehold areas; outside them a foreign buyer takes a leasehold interest, which few do.",
      "Off-plan is the normal way to buy something new. Construction runs three to five years, and developers commonly spread payment across the build rather than asking for it at the start.",
      "The procedure is unusually centralised: one authority, the Dubai Land Department, registers the transfer, and the whole thing is designed to complete in weeks rather than months.",
    ],
    districts: [
      { name: "Dubai Marina", text: "Towers around the marina walk, with restaurants, cafés and the mall at their base — the most lived-in of the luxury districts, and the most rented." },
      { name: "Palm Jumeirah", text: "The man-made island: sea views, private beach access, and a mix of hotels, townhouses, apartments and villas around Atlantis, Nakheel Mall and The Pointe." },
      { name: "Downtown Dubai", text: "The Burj Khalifa, the Dubai Mall and the retail and dining around them. Dense, central, and the most urban of the residential districts." },
      { name: "Business Bay", text: "Residential towers mixed with offices and commercial complexes, and still being built out at pace." },
      { name: "Jumeirah Beach Residence", text: "Six clusters of forty towers sitting between the city and the beach, looking over the Arabian Gulf and the marina." },
      { name: "Dubailand", text: "One of the fastest-growing districts by area, with villas and apartment projects from the larger developers, and theme parks, recreation centres and malls planned around them." },
    ],
    rules: [
      "Freehold is available only in designated areas. Inside them a foreign buyer owns the property and the land under it, on a title deed issued by the Dubai Land Department.",
      "Leasehold runs ten to ninety-nine years, after which the property reverts to the landowner. Expatriate buyers rarely choose it.",
      "The sale agreement is the Memorandum of Understanding, or Form F, and it is endorsed by both parties at a Registration Trustee's office.",
      "A No Objection Certificate from the developer confirms that nothing is owed on the property before ownership can move.",
    ],
    faqs: [
      { q: "Can a foreign national buy in Dubai?", a: "Yes, but only in freehold areas. Property bought there comes with full ownership rights and an official title deed issued by the Dubai Land Department." },
      { q: "Can a non-resident get a mortgage?", a: "Yes. Non-residents get a lower loan-to-value than residents and shorter terms — around fifteen years against twenty-five. Banks ask for three to six months of statements, salary slips, employment contracts or tax returns, and approval usually takes a few weeks. Mortgages are available on completed homes only, not off-plan." },
      { q: "How long does a purchase take?", a: "Typically no more than thirty days from signing the sale agreement to becoming the legal owner." },
      { q: "What does a purchase add to the price?", a: "Around 7% to 8% on a ready home, the largest single item being the Dubai Land Department fee at 4%. An off-plan purchase has a different structure, because the connection and certificate fees do not fall due at the point of sale." },
    ],
    costs: {
      headline: "Around 7% to 8% of the price on a ready home",
      rows: [
        { item: "Dubai Land Department fee", rate: "4% of the price", paidBy: "Buyer" },
        { item: "Property registration fee", rate: "AED 4,000 plus 5% VAT", paidBy: "Buyer" },
        { item: "Agency fee", rate: "2% of the price", paidBy: "Buyer" },
        { item: "DEWA connection", rate: "About AED 2,300 for an apartment", paidBy: "Buyer" },
        { item: "No Objection Certificate", rate: "AED 500–5,000, set by the developer", paidBy: "Buyer" },
      ],
      note: "An off-plan purchase skips the DEWA connection and the NOC at the point of sale, so its cost structure differs from a ready home.",
    },
    borrowing:
      "Mortgages are straightforward on ready and near-complete homes. A foreign buyer can typically borrow 60% to 75% against a freehold property, with the loan kept within about seven years of income.",
    essentials: {
      ownership: "Freehold, in designated areas",
      registry: "Dubai Land Department",
      obtain: "Developer's No Objection Certificate",
      timetable: "About 30 days from signing",
    },
  },
};

export const MARKET_DETAILS: Market[] = MARKETS.map((market) => {
  const details = DETAILS[market.href];
  if (!details) throw new Error(`Missing market details for ${market.href}`);
  return { ...market, ...details };
});

export const marketBySlug = (slug: string) =>
  MARKET_DETAILS.find((market) => market.href === `/markets/${slug}`);
