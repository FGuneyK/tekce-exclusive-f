export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "note"; text: string };

export type Article = {
  slug: string;
  title: string;
  /** The standfirst: one or two sentences under the headline. */
  dek: string;
  topic: string;
  /** ISO date. */
  date: string;
  image: string;
  alt: string;
  credit: string;
  /** Where the rail's call to action points, and what it says. */
  cta: { title: string; href: string };
  blocks: Block[];
  sources: { label: string; href: string }[];
};

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=2000&h=1125&q=80`;

const crm = (file: string) =>
  `https://crm.tekceexclusive.com/api/v2/files/download/media/public/huge/${file}.webp`;

/**
 * Four articles written for the prototype. The arguments and the phrasing are
 * ours; every fact, rate, threshold and date in them comes from TEKCE's
 * published country and cost guides or from the project unit tables on
 * tekceexclusive.com (checked September 2026), and each article lists its
 * sources. Nothing here is a return, yield or tax-planning claim.
 *
 * Newest first — the index features the first entry.
 */
export const ARTICLES: Article[] = [
  {
    slug: "what-a-purchase-adds-to-the-price",
    title: "What a purchase really adds to the price, in four markets.",
    dek: "The asking price is where the arithmetic starts. Taxes and fees add between six and twenty per cent, and the markets differ more on this than on almost anything else.",
    topic: "Buying guide",
    date: "2026-09-18",
    image: unsplash("1681790659871-f1a8147d154f"),
    alt: "Cream and white apartment buildings stepping up a hillside above palms.",
    credit: "Photograph: Unsplash",
    cta: { title: "Compare the four markets", href: "/markets" },
    blocks: [
      { type: "p", text: "A buyer comparing a flat in Antalya with one in Alicante is usually comparing two asking prices. That is the wrong comparison. By the time the deed is in their name, each country will have added its own taxes, registration charges and professional fees, and the gap between the cheapest and the dearest of our four markets on that measure alone is wider than most price negotiations." },
      { type: "p", text: "These are the figures TEKCE publishes for each market, set side by side. They are planning figures: the exact amount depends on the property, the region and your own position." },
      {
        type: "table",
        head: ["Market", "Added to the price", "Largest single item"],
        rows: [
          ["Türkiye", "6% – 9%", "Title deed transfer tax, 2% + 2%"],
          ["United Arab Emirates", "About 7% – 8% on a ready home", "Dubai Land Department fee, 4%"],
          ["Spain", "About 9% – 14%", "VAT of 10% on a new home, or transfer tax of 7% – 10% on a resale"],
          ["North Cyprus", "8% – 20%", "Conveyance tax, 9% for foreign buyers"],
        ],
      },
      { type: "h2", text: "Spain: new or resale decides it" },
      { type: "p", text: "Spain taxes a new home and a resale differently, and never both ways at once. A new home from a developer carries VAT at 10% — 21% on land, commercial units and separately deeded parking. A resale carries transfer tax instead, set by the region at between 7% and 10%. A new home also carries stamp duty of 1.2% to 1.5%; a resale only carries it where there is a mortgage." },
      { type: "p", text: "On top of that sit legal fees of about 1% plus VAT, the notary at around €1,000 to €1,500 and the Land Registry at around €750. TEKCE's own worked examples make the difference concrete: a €100,000 resale in Málaga comes to about 10.2% on top, a €100,000 new build in Alicante to about 14.6%." },
      { type: "h2", text: "Türkiye: the lowest range, with a local custom" },
      { type: "p", text: "The main cost in Türkiye is the title deed transfer tax: 2% from the buyer and 2% from the seller, calculated on the declared price. By local custom the buyer often ends up paying the whole of it. The estate agent's fee runs from 2% to 6% plus VAT, charged to buyer and seller separately." },
      { type: "list", items: [
        "An appraisal report is only required where the purchase supports a citizenship or residence application.",
        "Buying foreign currency through a bank for the purchase carries a 0.2% foreign exchange transaction tax.",
        "A sworn translator costs around €150 where one is needed at the deed office.",
        "Once you own it, annual property tax is 0.2% in metropolitan areas and 0.1% elsewhere.",
      ] },
      { type: "h2", text: "North Cyprus: why the range is so wide" },
      { type: "p", text: "Eight to twenty per cent looks like a guess. It is not; it is two different purchases. A new home carries VAT at 5% and the full conveyance tax, which for foreign buyers has been 9% since 15 May 2025, the first 6% of it due when the contract is registered. A resale is exempt from VAT." },
      { type: "p", text: "Stamp duty is 0.5% of the sale price, legal fees run from £1,000 to £1,500 plus 16% VAT, and a new home also needs an electricity distribution fee of roughly £1,200 to £2,500." },
      { type: "h2", text: "The UAE: most of it in one fee" },
      { type: "p", text: "In Dubai the Land Department fee does most of the work: 4% of the price. Add a registration fee of AED 4,000 plus VAT, an agency fee of 2%, a DEWA utility connection of around AED 2,300 for an apartment, and a No Objection Certificate from the developer at anywhere between AED 500 and AED 5,000." },
      { type: "p", text: "On a ready apartment at AED 1,000,000, that comes to between AED 67,000 and AED 71,500 — about 6.7% to 7.2%. An off-plan purchase is structured differently, because the connection and certificate fees do not fall due at the point of sale." },
      { type: "quote", text: "Compare what the home costs you to own on the day you get the keys, not what it is listed at." },
      { type: "h2", text: "What to ask before comparing two homes" },
      { type: "list", items: [
        "Is it new or resale? In Spain and North Cyprus that single answer moves the total by several points.",
        "Which region is it in? Spanish transfer tax and stamp duty are set regionally.",
        "Who pays what? Türkiye's transfer tax is nominally split, and in practice often not.",
        "Will you borrow? A mortgage adds its own valuation, arrangement and registration costs everywhere.",
      ] },
      { type: "note", text: "Rates and fees as published in TEKCE's cost guides, checked in September 2026. They are planning figures, not a quotation, and not legal or tax advice." },
    ],
    sources: [
      { label: "Costs of buying property in Spain — tekce.com", href: "https://tekce.com/spain/purchase-costs" },
      { label: "Costs of buying property in Turkey — tekce.com", href: "https://tekce.com/turkiye/purchase-costs" },
      { label: "Costs of buying property in North Cyprus — tekce.com", href: "https://tekce.com/north-cyprus/purchase-costs" },
      { label: "Property purchase costs in the UAE — tekce.com", href: "https://tekce.com/uae/purchase-costs" },
    ],
  },
  {
    slug: "spain-after-the-golden-visa",
    title: "Spain after the Golden Visa.",
    dek: "Since 3 April 2025, buying a home in Spain no longer leads to residency on its own. Owning and living there are now two separate questions — and the second one still has answers.",
    topic: "Markets · Spain",
    date: "2026-09-11",
    image: unsplash("1539703130602-b55b0896896d"),
    alt: "A terracotta apartment complex above the Mediterranean at dusk, palms along the road below.",
    credit: "Photograph: Unsplash",
    cta: { title: "Buying in Spain", href: "/markets/spain" },
    blocks: [
      { type: "p", text: "Until 3 April 2025, a property investment could be the route to a Spanish residence permit. That route has closed. It is the single biggest change to the Spanish market for foreign buyers in years, and it is widely misunderstood in both directions: some buyers still assume a purchase brings residency, and others assume that without the Golden Visa there is no longer any point in owning." },
      { type: "p", text: "Neither is right. What changed is the link between the two. Buying a home no longer gives you the right to live in Spain; the right to live in Spain is still available, through other doors." },
      { type: "h2", text: "What closed, and what did not" },
      { type: "p", text: "The property-investment Golden Visa is the only thing that went. Nothing about the right to buy changed. Spain places no general restriction on foreign buyers: you buy in your own name, with the same ownership rights as a Spanish citizen, and you need an NIE — the Spanish identification number for foreigners — before the purchase can complete." },
      { type: "h2", text: "The two routes owners use now" },
      { type: "list", items: [
        "The Non-Lucrative Visa, for people who can support themselves without working in Spain. It is the most common route for retirees and second-home owners.",
        "The Digital Nomad Visa, for people who work remotely for companies outside Spain.",
      ] },
      { type: "p", text: "Owning a home is a condition of neither. It does make the application simpler, because you can show a registered address from the first day — which is why, for many buyers, the purchase now comes first and residency follows once they decide to spend more of the year there." },
      { type: "quote", text: "Owning a home and holding residency are now two separate questions. The first no longer answers the second." },
      { type: "h2", text: "Why the market did not stall" },
      { type: "p", text: "Foreign buyers still account for around one in seven home sales in Spain. Much of that demand now comes from people who want to live in the house for part of the year — the buyers the two remaining visas are designed for — rather than from investors buying a permit. And a Spanish residence permit, however it is obtained, still carries the thing the Golden Visa was always partly about: free travel across the 29 countries of the Schengen area." },
      { type: "h2", text: "What a purchase still involves" },
      { type: "p", text: "The mechanics are unchanged. A lawyer runs due diligence on the property, a reservation deposit holds it, you sign the purchase proposal, your NIE and a Spanish bank account are arranged, and the deed is transferred in front of a notary and recorded in the Registro de la Propiedad. It usually takes four to eight weeks from viewing to deed, two to four when everything is prepared in advance, and roughly a month longer with a mortgage." },
      { type: "p", text: "Budget around 9% to 14% on top of the price, depending on the region and on whether the home is new or resale. Spanish banks do lend to foreign buyers: a 20% deposit is the standard minimum, non-residents are usually asked for 25% to 40%, and lenders want proof of steady income and a valid residence permit." },
      { type: "note", text: "A summary of TEKCE's published guide to buying in Spain, checked in September 2026. It is not legal or immigration advice; visa requirements change and apply case by case." },
    ],
    sources: [
      { label: "The ultimate guide to buying property in Spain — tekce.com", href: "https://tekce.com/spain" },
      { label: "Costs of buying property in Spain — tekce.com", href: "https://tekce.com/spain/purchase-costs" },
    ],
  },
  {
    slug: "north-cyprus-permit-and-deed",
    title: "North Cyprus: the permit, the one-property rule, and the wait for the deed.",
    dek: "The most particular set of rules of our four markets. None of it is a reason not to buy; all of it is a reason to know the sequence before you start.",
    topic: "Markets · North Cyprus",
    date: "2026-09-04",
    image: unsplash("1713016601363-8ffee7a2ff0c"),
    alt: "White apartment blocks and houses packed down to the sea, seen from the air.",
    credit: "Photograph: Unsplash",
    cta: { title: "Buying in North Cyprus", href: "/markets/north-cyprus" },
    blocks: [
      { type: "p", text: "Most property markets make the same promise: find a home, agree a price, sign, and the deed is yours within weeks. North Cyprus works differently, and a buyer who expects it to work like Spain or the UAE will spend the first months of ownership surprised. A buyer who knows the sequence in advance will not." },
      { type: "h2", text: "One island, two countries" },
      { type: "p", text: "Cyprus is divided. The north is the Turkish Republic of Northern Cyprus — a de facto state with its own elected government and institutions, which most of the world does not diplomatically recognise. For a buyer the everyday consequence is travel: flights land in Türkiye first and continue to Ercan. Roughly 35,000 foreign nationals live among a population of about 350,000, and most foreign buyers are German or British." },
      { type: "h2", text: "One property per foreign buyer" },
      { type: "p", text: "A foreign national may own one property in North Cyprus. The limit is set by land: a single plot of up to 1,338 m² — four evlek, in the local measure — or a house whose plot does not exceed 6,691 m². It is worth knowing before you plan a second purchase, and it shapes how families structure a purchase from the start." },
      { type: "h2", text: "The permit, and what protects you while you wait" },
      { type: "p", text: "Every purchase by a foreigner needs a purchase permit from the Council of Ministers, and the title deed is granted only once that permission comes through. It takes between three and twelve months." },
      { type: "p", text: "That sounds like a long time to own nothing. It is not what happens. Full rights to the property begin when the sales contract is signed and registered at the Land Registry — which is also the moment the first 6% of the conveyance tax falls due. The deed follows the permit; the protection does not wait for it." },
      { type: "quote", text: "The deed arrives late. The rights arrive on the day the contract is registered." },
      { type: "h2", text: "Three kinds of deed" },
      { type: "list", items: [
        "Türk Koçanı — the Turkish title deed.",
        "Eşdeğer Koçan — the equivalent title deed.",
        "Tahsis Koçanı — the allocation title deed.",
      ] },
      { type: "p", text: "Each is under the warranty of the TRNC and the Turkish Republic, each is legally valid, and each can be traded. The difference lies in the history of the land, which is exactly what due diligence on the property is for." },
      { type: "h2", text: "The sequence, start to finish" },
      { type: "list", items: [
        "Due diligence on the property and its ownership history.",
        "A deposit reserves it.",
        "The purchase proposal is signed.",
        "A local bank account is opened.",
        "The permit is applied for, and the deed is transferred once it is granted.",
      ] },
      { type: "h2", text: "What it costs, and borrowing" },
      { type: "p", text: "Allow 8% to 20% on top of the value. A new home carries 5% VAT and the full 9% conveyance tax for foreign buyers; a resale is exempt from VAT. Stamp duty is 0.5%. Borrowing is harder to arrange here than in the other markets: where a mortgage is granted, it is capped at around half the property value, with a fee of about 1% of the amount borrowed." },
      { type: "note", text: "A summary of TEKCE's published guides to buying in North Cyprus, checked in September 2026. It is not legal advice, and the permit process applies case by case." },
    ],
    sources: [
      { label: "Living in North Cyprus: country and real estate guide — tekce.com", href: "https://tekce.com/north-cyprus" },
      { label: "Costs of buying property in North Cyprus — tekce.com", href: "https://tekce.com/north-cyprus/purchase-costs" },
    ],
  },
  {
    slug: "why-sold-homes-stay-on-the-list",
    title: "Why sold homes stay on the list.",
    dek: "Most new-build listings show what is left. We show the whole building, sold units included — because what has gone is the most useful thing a buyer, an agent or a developer can know.",
    topic: "For developers & partners",
    date: "2026-08-28",
    image: crm("ca7b6c78-d1d3-472b-987a-df923c0ed8a6"),
    alt: "The communal pool and sun terrace in front of the two blocks at Viva Defne.",
    credit: "Viva Defne, Aksu. Photograph supplied by the developer.",
    cta: { title: "See the unit lists", href: "/projects" },
    blocks: [
      { type: "p", text: "Open a typical new-development listing and you see what is for sale. What you do not see is the building: which homes went first, which are left, and what that says about the ones still on offer. The sold units vanish, and with them the most honest piece of information the project has." },
      { type: "p", text: "On our project pages they stay. Every home in a building is listed in unit order, sold ones marked sold, with the developer's base price on those still available. It is the developer's own table, and it is published the same way for every project we represent." },
      { type: "h2", text: "What a sold unit tells a buyer" },
      { type: "p", text: "It tells them what everyone else chose. At City Nest in Antalya, 29 of the 52 homes have been sold. The pattern inside that number is more useful than the number: more than half of the one-bedroom homes on the lower floors have gone, while six of the nine two-bedroom homes on the fifth floor are still available. A buyer reading that list knows something no brochure would put in writing." },
      { type: "p", text: "It also sets expectations. A project with 18 of its 20 homes available, like Viva Altea Beach, is early in its life; one with more than half sold is further along. Neither is better. Both are worth knowing before a viewing, not after it." },
      { type: "quote", text: "What has already gone is the most honest thing a building can tell you." },
      { type: "h2", text: "What it tells an agent" },
      { type: "p", text: "A partner agency advising a client on a project abroad is usually working from a sales sheet. A full unit list lets them do something better: show the client the real position of the building, steer them towards the homes that suit them and away from the ones that are already gone, and avoid the conversation every agent dreads — the one where the chosen unit turns out to have sold last week." },
      { type: "h2", text: "What it asks of a developer" },
      { type: "p", text: "Publishing sold units is a small act of confidence. It shows momentum where there is momentum, and it removes the temptation to present every project as equally fresh. It also asks the developer to keep the list current, because a list that is out of date is worse than no list. That discipline is the point: a building whose availability you can trust is easier to sell to someone who has never seen it." },
      { type: "h2", text: "How it looks on our pages" },
      { type: "p", text: "Each project page opens with a summary by bedroom count — size, how many are left, and the lowest price still on offer — above a strip with one mark for every home in the building, filled where it is still for sale. The full unit list sits behind it, one click away, with an option to hide what has sold." },
    ],
    sources: [
      { label: "Project unit tables on tekceexclusive.com, checked 16 September 2026", href: "https://tekceexclusive.com/projects" },
    ],
  },
];

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/** Deterministic, so server and client agree. */
export const formatDate = (iso: string) => {
  const [year, month, day] = iso.split("-").map(Number);
  return `${day} ${MONTHS[month - 1]} ${year}`;
};

const wordsIn = (block: Block) => {
  if (block.type === "list") return block.items.join(" ").split(/\s+/).length;
  if (block.type === "table") return block.rows.flat().join(" ").split(/\s+/).length;
  return block.text.split(/\s+/).length;
};

/** Minutes at about 220 words a minute, never less than one. */
export const readingTime = (article: Article) =>
  Math.max(
    1,
    Math.round(article.blocks.reduce((sum, block) => sum + wordsIn(block), 0) / 220),
  );

export const headingId = (text: string) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const articleBySlug = (slug: string) =>
  ARTICLES.find((article) => article.slug === slug);
