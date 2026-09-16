export type OfficeCity = {
  city: string;
  areas?: string[];
  lat: number;
  lon: number;
};

export type OfficeCountry = {
  country: string;
  /** True where TEKCE sells property; Sweden hosts an office only. */
  market: boolean;
  cities: OfficeCity[];
};

/**
 * TEKCE offices as listed on tekce.com/corporate/contact (checked
 * 2026-09-15). Coordinates are city-level and only position dots on the
 * network map.
 */
export const OFFICE_COUNTRIES: OfficeCountry[] = [
  {
    country: "Spain",
    market: true,
    cities: [
      { city: "Málaga", areas: ["Benalmádena"], lat: 36.6, lon: -4.52 },
      { city: "Alicante", areas: ["Orihuela Costa"], lat: 37.93, lon: -0.74 },
    ],
  },
  {
    country: "Türkiye",
    market: true,
    cities: [
      {
        city: "Antalya",
        areas: ["Lara", "Konyaaltı", "Alanya", "Belek", "Döşemealtı"],
        lat: 36.9,
        lon: 30.7,
      },
      { city: "Istanbul", areas: ["Cevizlibağ", "Göztepe"], lat: 41.01, lon: 28.98 },
      { city: "Ankara", lat: 39.93, lon: 32.86 },
      { city: "Bodrum", lat: 37.03, lon: 27.43 },
      { city: "Fethiye", lat: 36.62, lon: 29.12 },
      { city: "Mersin", areas: ["Mezitli"], lat: 36.75, lon: 34.5 },
      { city: "Bursa", lat: 40.19, lon: 29.06 },
      { city: "Trabzon", lat: 41.0, lon: 39.72 },
      { city: "Yalova", lat: 40.65, lon: 29.27 },
    ],
  },
  {
    country: "North Cyprus",
    market: true,
    cities: [{ city: "Girne", lat: 35.34, lon: 33.32 }],
  },
  {
    country: "United Arab Emirates",
    market: true,
    cities: [{ city: "Dubai", lat: 25.2, lon: 55.27 }],
  },
  {
    country: "Sweden",
    market: false,
    cities: [{ city: "Stockholm", areas: ["Bromma"], lat: 59.34, lon: 17.94 }],
  },
];

/** TEKCE Exclusive's own office (Kadıköy, Istanbul), per lib/company.ts. */
export const EXCLUSIVE_OFFICE = { label: "TEKCE Exclusive, Istanbul", lat: 40.99, lon: 29.03 };
