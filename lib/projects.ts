export type Project = {
  slug: string;
  name: string;
  location: string;
  country: string;
  image: string;
  alt: string;
};

const media = (file: string) =>
  `https://crm.tekceexclusive.com/api/v2/files/download/media/public/huge/${file}.webp`;

/**
 * Projects listed on tekceexclusive.com/projects (checked 2026-09-14).
 * Order matters on the homepage: the showcase alternates wide and narrow
 * frames, so landscape-led images sit in the wide slots.
 */
export const FEATURED_PROJECTS: Project[] = [
  {
    slug: "viva-defne",
    name: "Viva Defne",
    location: "Aksu, Antalya",
    country: "Türkiye",
    image: media("e6c1f528-829c-415e-bfca-fb72c13a0504"),
    alt: "Viva Defne: residential blocks with planted balconies above a communal pool.",
  },
  {
    slug: "city-nest",
    name: "City Nest",
    location: "Muratpaşa, Antalya",
    country: "Türkiye",
    image: media("380f373d-e3f3-4d65-b0a4-28e3ddd67a7a"),
    alt: "City Nest: a curved apartment building with wraparound balconies.",
  },
  {
    slug: "viva-altea-beach",
    name: "Viva Altea Beach",
    location: "Altea, Alicante",
    country: "Spain",
    image: media("757bf99c-92d3-4723-8949-021604f967b5"),
    alt: "Viva Altea Beach: street elevation with timber screens and ground-floor shops.",
  },
  {
    slug: "neovilla-papatya-no2",
    name: "Neovilla Papatya No2",
    location: "Serik, Antalya",
    country: "Türkiye",
    image: media("4b28a21c-8955-4f29-a36c-8112d194a5db"),
    alt: "Neovilla Papatya No2: a detached villa with a grey and white facade.",
  },
];
