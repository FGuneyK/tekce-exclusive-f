export type HomeType = "Apartment" | "Penthouse" | "Villa";

/** One home in a project, exactly as the developer's unit table publishes it. */
export type Unit = {
  id: string;
  /** "" where no floor is published. */
  floor: string;
  beds: number | null;
  baths: number | null;
  /** Internal area in m², null where not published. */
  internal: number | null;
  /** Total area in m², including terraces and balconies. */
  total: number | null;
  /** Euros. Null on sold homes, which carry no price. */
  price: number | null;
  sold: boolean;
};

export type Fact = { label: string; value: string };
export type Photo = { src: string; alt: string };

export type Project = {
  slug: string;
  /** Developer reference as published by TEKCE Exclusive, e.g. "105". */
  reference: string;
  name: string;
  location: string;
  country: string;
  /** Market page this project belongs to, so the filter and nav agree. */
  market: string;
  image: string;
  alt: string;
  /** One line of fact about the project, taken from the published description. */
  summary: string;
  types: HomeType[];
  /** Only set where TEKCE Exclusive publishes a construction stage. */
  stage?: string;
  /** What the gallery actually is, so the page can say so. */
  imagery: "Photographs" | "Computer-generated images";
  gallery: Photo[];
  description: string[];
  facts: Fact[];
  /**
   * The developer's specification, set as data instead of prose. Only the
   * groups a developer actually publishes are listed.
   */
  features: { group: string; items: string[] }[];
  locationNote: string[];
  /** Distances the developer publishes, in kilometres. */
  nearby: { label: string; km: number }[];
  units: Unit[];
};

const media = (file: string) =>
  `https://crm.tekceexclusive.com/api/v2/files/download/media/public/huge/${file}.webp`;

/*
  Unit rows are transcribed from each project's table on tekceexclusive.com in
  the source's own columns:

    status | unit | floor | beds | baths | internal m² | total m² | price €

  "A" is available, "S" is sold, "-" is a value the developer does not
  publish. Commercial units are left out — this list is homes.
*/
const units = (rows: string[]): Unit[] =>
  rows.map((row) => {
    const [status, id, floor, beds, baths, internal, total, price] =
      row.split("|");
    const value = (cell: string) => (cell === "-" ? null : Number(cell));
    return {
      id,
      floor: floor === "-" ? "" : floor,
      beds: value(beds),
      baths: value(baths),
      internal: value(internal),
      total: value(total),
      price: value(price),
      sold: status === "S",
    };
  });

/**
 * Every project TEKCE Exclusive represents, as published on
 * tekceexclusive.com/projects and each project's own page (checked
 * 2026-09-16). Descriptions are rewritten in the site's voice; every fact,
 * figure, distance and price in them comes from the developer's own copy or
 * unit table. Nothing here is invented.
 *
 * Order is the curated one used on the homepage: the showcase alternates wide
 * and narrow frames, so landscape-led images sit in the wide slots.
 */
export const PROJECTS: Project[] = [
  {
    slug: "viva-defne",
    reference: "105",
    name: "Viva Defne",
    location: "Aksu, Antalya",
    country: "Türkiye",
    market: "/markets/turkiye",
    image: media("e6c1f528-829c-415e-bfca-fb72c13a0504"),
    alt: "Viva Defne: residential blocks with planted balconies above a communal pool.",
    summary:
      "Two blocks on 7,716 m² in Altıntaş, built to LEED certification, 6 km from Antalya airport and 7 km from the Lara beaches.",
    types: ["Apartment"],
    stage: "Under construction",
    imagery: "Photographs",
    gallery: [
      {
        src: media("ca7b6c78-d1d3-472b-987a-df923c0ed8a6"),
        alt: "The communal pool and sun terrace in front of the two blocks.",
      },
      {
        src: media("7da5c11b-83ae-4109-a0bf-650bd507e508"),
        alt: "A planted courtyard with water features running between the blocks.",
      },
      {
        src: media("f256c660-7528-47c2-90aa-45ed2d2706f0"),
        alt: "Viva Defne from the air, among the low-rise blocks of Altıntaş.",
      },
      {
        src: media("61c27eff-ca76-49b0-81e9-e8e0411eb29a"),
        alt: "An apartment kitchen with fitted units, open to the living room.",
      },
      {
        src: media("d5c44e44-b304-480a-8233-444855579b13"),
        alt: "A finished room opening onto its terrace, with the city beyond.",
      },
      {
        src: media("8084597e-9f93-4f83-9f94-1161a88947dd"),
        alt: "A bathroom with a glazed shower cabin and a vanity unit.",
      },
    ],
    description: [
      "Viva Defne stands on a 7,716 m² site in Altıntaş, in Antalya's Aksu district: two blocks, one of 63 apartments and one of 13 commercial units, arranged around a 194 m² communal pool and a planted courtyard.",
      "It is built to LEED certification, and that shows up in the specification rather than the brochure — an eco-conscious design with A-rated VRF air conditioning, an LED lighting system, aluminium blinds and a 25 m² garden terrace on every floor.",
      "Apartments are handed over finished, down to the kitchen and the bathroom fittings.",
    ],
    features: [
      {
        group: "On site",
        items: [
          "Communal pool, 194 m²",
          "Landscaped grounds",
          "Pergola",
          "25 m² garden terrace on each floor",
          "Indoor car park, remote entry",
          "Camera security",
          "Caretaker",
          "Generator",
          "Lift",
        ],
      },
      {
        group: "In each home",
        items: [
          "Steel entrance door",
          "Laminated floors",
          "False ceilings",
          "LED lighting system",
          "Aluminium blinds",
          "Cloakroom",
          "VRF air conditioning, A rated",
          "Video intercom to caretaker and security",
          "Three-piece built-in kitchen",
          "Ceramic bathroom surfaces",
          "Hilton-style vanity unit",
          "Shower cabin",
        ],
      },
    ],
    facts: [
      { label: "Site area", value: "7,716 m²" },
      { label: "Blocks", value: "Two" },
      { label: "Homes", value: "63 apartments" },
      { label: "Also on site", value: "13 commercial units" },
      { label: "Communal pool", value: "194 m²" },
      { label: "Certification", value: "LEED" },
    ],
    locationNote: [
      "Aksu sits east of Antalya proper, on the strip between the airport and the Lara beaches, and the project is close to the main road.",
      "It is 6.3 km from the Antalya airport entrance, 7 km from the beaches at Lara, 8.7 km from the Antalya Expo Center and its shopping, 3 km from a public high school and 9.7 km from a private college, 12.8 km from the ancient city of Perge and 21.7 km from the Land of Legends at Belek.",
    ],
    nearby: [
      { label: "Shops & markets", km: 0.5 },
      { label: "Airport", km: 6 },
      { label: "Beach", km: 7 },
      { label: "Hospital", km: 9.5 },
      { label: "School", km: 5 },
      { label: "University", km: 15 },
      { label: "City centre", km: 15.8 },
    ],
    units: units([
      "A|1|-|1|-|-|61|120000", "A|2|-|2|-|-|94|190000", "A|3|-|2|-|-|97|210000",
      "S|4|-|1|-|-|61|-", "S|5|-|2|-|-|97|-", "S|6|-|2|-|-|94|-",
      "A|7|-|1|-|-|62|120000", "S|8|1|1|-|-|62|-", "S|9|1|2|-|-|95|-",
      "S|10|1|2|-|-|99|-", "S|11|1|1|-|-|69|-", "S|12|1|1|-|-|70|-",
      "A|13|1|2|-|-|100|225000", "A|14|1|2|-|-|94|205000", "S|15|1|1|-|-|61|-",
      "S|16|2|1|-|-|61|-", "A|17|2|2|-|-|94|200000", "A|18|2|2|-|-|99|220000",
      "S|19|2|1|-|-|69|-", "S|20|2|1|-|-|69|-", "S|21|2|2|-|-|99|-",
      "S|22|2|2|-|-|94|-", "A|23|2|1|-|-|61|110000", "A|24|3|1|-|-|61|110000",
      "S|25|3|2|-|-|94|-", "A|26|3|2|-|-|102|225000", "S|27|3|1|-|-|70|-",
      "S|28|3|1|-|-|72|-", "A|29|3|2|-|-|100|221200", "A|30|3|2|-|-|95|215000",
      "A|31|3|1|-|-|62|127500", "S|32|4|1|-|-|61|-", "A|33|4|2|-|-|96|210000",
      "S|34|4|2|-|-|99|-", "A|35|4|1|-|-|70|164982", "A|36|4|1|-|-|69|170000",
      "S|37|4|2|-|-|101|-", "S|38|4|2|-|-|95|-", "A|39|4|1|-|-|62|132473",
      "A|40|5|1|-|-|62|142500", "S|41|5|2|-|-|94|-", "S|42|5|2|-|-|101|-",
      "A|43|5|1|-|-|69|175000", "A|44|5|1|-|-|69|175000", "A|45|5|2|-|-|102|250000",
      "A|46|5|2|-|-|94|230000", "A|47|5|1|-|-|63|142500", "A|48|6|1|-|-|61|147480",
      "A|49|6|2|-|-|94|225000", "A|50|6|2|-|-|99|245000", "A|51|6|1|-|-|69|180983",
      "A|52|6|1|-|-|69|180000", "S|53|6|2|-|-|99|-", "S|54|6|2|-|-|98|-",
      "A|55|6|1|-|-|61|147500", "A|56|7|1|-|-|61|152500", "A|57|7|2|-|-|95|230000",
      "S|58|7|2|-|-|99|-", "S|59|7|1|-|-|69|-", "A|60|7|1|-|-|69|185000",
      "A|61|7|2|-|-|99|260000", "A|62|7|2|-|-|94|240000", "A|63|7|1|-|-|61|152500",
    ]),
  },
  {
    slug: "city-nest",
    reference: "128",
    name: "City Nest",
    location: "Muratpaşa, Antalya",
    country: "Türkiye",
    market: "/markets/turkiye",
    image: media("380f373d-e3f3-4d65-b0a4-28e3ddd67a7a"),
    alt: "City Nest: a curved apartment building with wraparound balconies.",
    summary:
      "Fifty-two homes in the Sinan neighbourhood, a walk from Antalya's Old Town, the tram and Mermerli beach.",
    types: ["Apartment"],
    imagery: "Computer-generated images",
    gallery: [
      {
        src: media("063ef416-766e-4082-b794-c93df107af75"),
        alt: "The curved facade of City Nest with its stacked balconies.",
      },
      {
        src: media("12511a0c-c9d2-4dcb-b6b0-5c36902d4ab3"),
        alt: "A living room with a fireplace wall and the kitchen behind it.",
      },
      {
        src: media("f20975fe-334b-43bb-b666-8a7000533b07"),
        alt: "A living room opening to the balcony over a pale timber floor.",
      },
      {
        src: media("cc8bae78-5dbb-4c5b-b6e8-aa7cfd534b61"),
        alt: "A bedroom set against a deep green headboard wall.",
      },
      {
        src: media("2aa80638-ebba-4497-b124-c8cc432998bf"),
        alt: "A bathroom lined in veined marble.",
      },
      {
        src: media("04a482dd-ad40-40fb-b153-f85c8cf6f4ae"),
        alt: "The building seen from the corner of the street.",
      },
    ],
    description: [
      "City Nest puts 52 homes on a 624 m² plot in Sinan, a long-established Muratpaşa neighbourhood that is being rebuilt block by block. The Old Town, the MarkAntalya shopping centre, the Meydan health centre, the tram and Mermerli beach are all reachable on foot.",
      "The lower floors are one-bedroom homes of 54 to 65 m²; the fifth floor holds nine larger two-bedroom homes of 110 to 130 m². For its size, the building is unusually well serviced.",
    ],
    features: [
      {
        group: "On site",
        items: [
          "Indoor car park, 19 cars",
          "Car lift",
          "Two passenger lifts",
          "Photovoltaic panels",
          "Shelter generator",
          "Communal EV charging",
          "Fire escape",
          "Fire extinguishing system",
          "Water tanks, supply and firefighting",
          "Security",
          "Camera security",
        ],
      },
    ],
    facts: [
      { label: "Site area", value: "624 m²" },
      { label: "Homes", value: "52" },
      { label: "Car park", value: "Indoor, 19 cars, car lift" },
      { label: "Lifts", value: "Two" },
      { label: "Power", value: "Photovoltaic panels, generator" },
      { label: "EV charging", value: "Communal points" },
    ],
    locationNote: [
      "Sinan is a rooted residential quarter in the middle of Antalya, close enough to the Old Town that most daily errands are done on foot.",
      "Mermerli Beach, the Old Town, the MarkAntalya shopping centre, the Private Meydan Health Center and the tram stop are all within walking distance, and Antalya airport is 14 km away.",
    ],
    nearby: [
      { label: "City centre", km: 0 },
      { label: "Shops & markets", km: 0.2 },
      { label: "School", km: 0.2 },
      { label: "Beach", km: 1 },
      { label: "Hospital", km: 1 },
      { label: "University", km: 1.8 },
      { label: "Airport", km: 14 },
    ],
    units: units([
      "S|1|-|1|1|49|60|-", "S|2|0|1|1|52|65|-", "A|3|0|1|1|48|59|137500",
      "A|4|0|1|1|49|58|127000", "A|5|0|1|1|49|60|136000", "A|6|0|1|1|48|58|131000",
      "A|7|0|1|1|48|58|139000", "A|8|1|1|1|49|60|151000", "A|9|1|1|1|52|65|159000",
      "A|10|1|1|1|48|59|140000", "S|11|1|1|1|49|58|-", "A|12|1|1|1|49|60|138000",
      "A|13|1|1|1|48|58|135000", "A|14|1|1|1|48|58|142000", "S|15|1|1|1|43|54|-",
      "S|16|1|1|1|45|57|-", "S|17|2|1|1|49|60|-", "S|18|2|1|1|52|65|-",
      "S|19|2|1|1|48|59|-", "S|20|2|1|1|49|58|-", "S|21|2|1|1|49|60|-",
      "S|22|2|1|1|48|58|-", "A|23|2|1|1|48|58|143000", "A|24|2|1|1|43|54|133000",
      "S|25|2|1|1|45|57|-", "A|26|3|1|1|49|60|154000", "S|27|3|1|1|52|65|-",
      "A|28|3|1|1|48|59|143000", "S|29|3|1|1|49|58|-", "S|30|3|1|1|49|60|-",
      "S|31|3|1|1|48|58|-", "S|32|3|1|1|48|58|-", "S|33|3|1|1|43|54|-",
      "S|34|3|1|1|45|57|-", "S|35|4|1|1|49|60|-", "S|36|4|1|1|52|65|-",
      "A|37|4|1|1|48|59|146000", "A|38|4|1|1|49|58|135000", "S|39|4|1|1|49|60|-",
      "S|40|4|1|1|48|58|-", "S|41|4|1|1|48|58|-", "S|42|4|1|1|43|54|-",
      "S|43|4|1|1|45|57|-", "A|44|5|2|2|90|120|319000", "S|45|5|2|2|85|130|-",
      "S|46|5|2|2|89|118|-", "A|47|5|2|2|82|116|275000", "S|48|5|2|2|84|120|-",
      "A|49|5|2|2|90|116|284000", "A|50|5|2|2|88|110|285000", "A|51|5|2|2|78|110|285000",
      "A|52|5|2|2|79|116|300000",
    ]),
  },
  {
    slug: "viva-altea-beach",
    reference: "125",
    name: "Viva Altea Beach",
    location: "Altea, Alicante",
    country: "Spain",
    market: "/markets/spain",
    image: media("757bf99c-92d3-4723-8949-021604f967b5"),
    alt: "Viva Altea Beach: street elevation with timber screens and ground-floor shops.",
    summary:
      "Twenty homes 80 m from the water: sixteen two-bedroom apartments and four one-bedroom penthouses on the top floor.",
    types: ["Apartment", "Penthouse"],
    stage: "Under construction",
    imagery: "Computer-generated images",
    gallery: [
      {
        src: media("c5e9b23a-2767-4b23-8785-94c1ab82a43b"),
        alt: "The street elevation at dusk, with lit ground-floor units under the balconies.",
      },
      {
        src: media("ba8e4cf9-d769-49e0-8298-bcd7e104d279"),
        alt: "A living room opening to the terrace through full-height glazing.",
      },
      {
        src: media("b21b1f95-b3f2-4aa1-953a-d8661d289212"),
        alt: "A kitchen and dining area with an island and woven pendant lights.",
      },
      {
        src: media("c8502f85-994c-475f-87d0-b20461a7768b"),
        alt: "A bedroom with a built-in headboard and a door to the terrace.",
      },
      {
        src: media("d1248c04-936d-4d62-b37b-bfff706f665f"),
        alt: "A bathroom with twin basins set into a curved vanity.",
      },
      {
        src: media("194b8176-cef0-4ce3-b84a-4ca3c92bf5bc"),
        alt: "Looking up the facade, past its slatted screens and deep balconies.",
      },
    ],
    description: [
      "Viva Altea Beach sits on the second line from the beach in Altea, 80 m from the water and 350 m from the middle of town — close to the main road, so the rest of the coast is easy to reach.",
      "There are twenty homes: sixteen two-bedroom apartments across floors one to four, and four one-bedroom penthouses on the fifth. Two commercial units take the ground floor.",
      "Benidorm and its international school are 5 km away, the hospital 10 km, Terra Natura 12 km. Alicante city centre is about 45 minutes by car, Alicante airport about 50, and Valencia airport a little over an hour.",
    ],
    features: [],
    facts: [
      { label: "Homes", value: "20" },
      { label: "Apartments", value: "16, two bedrooms" },
      { label: "Penthouses", value: "4, one bedroom" },
      { label: "Also on site", value: "2 commercial units" },
      { label: "Beach", value: "80 m" },
      { label: "Town centre", value: "350 m" },
    ],
    locationNote: [
      "The project is on the main road, one line back from the beach, which puts the sea at one end of the street and the town at the other.",
      "It is 350 m from the centre of Altea, 800 m from the shopping centre, 5 km from Benidorm city centre and its international school, 10 km from the hospital and 12 km from the Terra Natura zoo and water park.",
    ],
    nearby: [
      { label: "Beach", km: 0.08 },
      { label: "City centre", km: 0.3 },
      { label: "Shops & markets", km: 0.8 },
      { label: "School", km: 5 },
      { label: "Hospital", km: 10 },
      { label: "Airport", km: 65.4 },
    ],
    units: units([
      "A|1A|1|2|2|94|109|475000", "A|1B|1|2|2|95|105|465000", "A|1C|1|2|2|95|105|480000",
      "A|1D|1|2|2|95|110|480000", "A|2A|2|2|2|86|109|485000", "A|2B|2|2|2|86|105|475000",
      "A|2C|2|2|2|87|105|480000", "A|2D|2|2|2|86|110|490000", "A|3A|3|2|2|86|109|495000",
      "S|3B|3|2|2|86|105|-", "A|3C|3|2|2|87|105|490000", "A|3D|3|2|2|86|110|500000",
      "A|4A|4|2|2|86|109|505000", "A|4B|4|2|2|86|105|495000", "A|4C|4|2|2|87|105|510000",
      "S|4D|4|2|2|86|110|-", "A|5A|5|1|1|75|95|500000", "A|5B|5|1|1|75|91|490000",
      "A|5C|5|1|1|78|91|495000", "A|5D|5|1|1|87|96|505000",
    ]),
  },
  {
    slug: "neovilla-papatya-no2",
    reference: "109",
    name: "Neovilla Papatya No2",
    location: "Serik, Antalya",
    country: "Türkiye",
    market: "/markets/turkiye",
    image: media("4b28a21c-8955-4f29-a36c-8112d194a5db"),
    alt: "Neovilla Papatya No2: a detached villa with a grey and white facade.",
    summary:
      "One four-bedroom villa in Kadriye with its own pool and garden, 2 km from the golf courses and 4 km from the beach.",
    types: ["Villa"],
    stage: "Under construction",
    imagery: "Photographs",
    gallery: [
      {
        src: media("d7f607bf-f8a5-4d46-9226-3d53b8e2e3f8"),
        alt: "The villa and its garden seen from above.",
      },
      {
        src: media("1cb3a17f-e843-41bb-826b-423dba68c7e2"),
        alt: "An open-plan living room and kitchen behind full-height glazing.",
      },
      {
        src: media("16612b8d-548f-40f2-9256-8f11c9d61f42"),
        alt: "A kitchen with a stone island, open to the living room.",
      },
      {
        src: media("e8bcd072-90fc-4be5-9251-2eb60c6ec4cd"),
        alt: "A timber staircase rising past a tall window.",
      },
      {
        src: media("10ff331e-1d48-49e2-a0a1-0a00cd4c0dbb"),
        alt: "A living room with sliding doors onto the garden.",
      },
      {
        src: media("efbf71a9-ddef-4f59-8e60-f4e11754f472"),
        alt: "The villa from the street side, with parking inside the wall.",
      },
    ],
    description: [
      "One villa: four bedrooms, four bathrooms, 220 m² inside and 400 m² in total, in Kadriye — the part of Serik that grew up around the golf courses and the Land of Legends.",
      "The ground floor is open plan, and the house is equipped throughout.",
    ],
    features: [
      {
        group: "On the plot",
        items: ["Private pool", "Large garden", "Outdoor parking"],
      },
      {
        group: "In the house",
        items: [
          "Spot and LED lighting",
          "Central satellite system",
          "Internet",
          "PVC windows",
          "Air conditioning",
          "Steel entrance door",
          "Lacquered interior doors",
          "Built-in kitchen",
          "Blinds",
        ],
      },
    ],
    facts: [
      { label: "Homes", value: "One villa" },
      { label: "Bedrooms", value: "4" },
      { label: "Internal area", value: "220 m²" },
      { label: "Total area", value: "400 m²" },
      { label: "Outside", value: "Private pool and garden" },
      { label: "Parking", value: "Outdoor, on the plot" },
    ],
    locationNote: [
      "Kadriye is in the Serik district, east of Antalya, best known for the Land of Legends theme park and the golf courses around Belek.",
      "The villa is 1.5 km from the centre of Kadriye, 2 km from the golf courses, 3 km from the Land of Legends, 4 km from Kadriye beach, 27 km from Antalya airport and 32 km from the city centre.",
    ],
    nearby: [
      { label: "School", km: 1.9 },
      { label: "Hospital", km: 3.5 },
      { label: "Beach", km: 4.1 },
      { label: "University", km: 4.4 },
      { label: "Airport", km: 27 },
    ],
    units: units([
      "A|1|3|4|4|220|400|752000",
    ]),
  },
];

export type ProjectSummary = {
  available: number;
  total: number;
  /** Euros, across the homes still available. */
  price: [number, number];
  /** Total area in m², across the homes still available. */
  area: [number, number];
  /** Every bedroom count the project offers, low to high. */
  beds: number[];
};

const summarise = (project: Project): ProjectSummary => {
  const available = project.units.filter((unit) => !unit.sold);
  const prices = available
    .map((unit) => unit.price)
    .filter((price): price is number => price !== null);
  const areas = available
    .map((unit) => unit.total)
    .filter((area): area is number => area !== null);
  const beds = [
    ...new Set(
      project.units
        .map((unit) => unit.beds)
        .filter((count): count is number => count !== null),
    ),
  ].sort((a, b) => a - b);

  return {
    available: available.length,
    total: project.units.length,
    price: [Math.min(...prices), Math.max(...prices)],
    area: [Math.min(...areas), Math.max(...areas)],
    beds,
  };
};

/** Worked out once at module load — the figures never change at runtime. */
const SUMMARIES = new Map(
  PROJECTS.map((project) => [project.slug, summarise(project)]),
);

export const summaryOf = (project: Project): ProjectSummary => {
  const summary = SUMMARIES.get(project.slug);
  if (!summary) throw new Error(`No summary for ${project.slug}`);
  return summary;
};

export const projectBySlug = (slug: string) =>
  PROJECTS.find((project) => project.slug === slug);

/** The homepage showcase carries the four projects in the curated order. */
export const FEATURED_PROJECTS = PROJECTS;
