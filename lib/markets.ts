import { MARKETS, type NavItem } from "@/lib/navigation";

export type Market = NavItem & {
  timeZone: string;
  image: string;
  alt: string;
};

const band = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=2400&h=520&q=80`;

/**
 * Markets come from the shared navigation list, so the header dropdown and
 * this section can never disagree. Photographs are atmospheric Unsplash
 * images of each region, not TEKCE locations.
 */
const DETAILS: Record<string, Omit<Market, keyof NavItem>> = {
  "/markets/spain": {
    timeZone: "Europe/Madrid",
    image: band("1712045927218-521b149861b2"),
    alt: "Terracotta rooftops above a Mediterranean bay on the Spanish coast.",
  },
  "/markets/turkiye": {
    timeZone: "Europe/Istanbul",
    image: band("1753188355215-b4eed6e3f831"),
    alt: "Pine-covered cliffs above a turquoise inlet.",
  },
  "/markets/north-cyprus": {
    timeZone: "Asia/Famagusta",
    image: band("1677023484276-b13e371152a0"),
    alt: "A harbour lined with boats beneath a stone castle.",
  },
  "/markets/united-arab-emirates": {
    timeZone: "Asia/Dubai",
    image: band("1607414851776-f2fcc379fb48"),
    alt: "A skyline of towers silhouetted against a sunset over water.",
  },
};

export const MARKET_DETAILS: Market[] = MARKETS.map((market) => {
  const details = DETAILS[market.href];
  if (!details) throw new Error(`Missing market details for ${market.href}`);
  return { ...market, ...details };
});
