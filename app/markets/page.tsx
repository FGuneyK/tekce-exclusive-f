import type { Metadata } from "next";
import { MarketComparison } from "@/components/markets/market-comparison";
import { MarketIndex } from "@/components/markets/market-index";
import { MarketsAsk } from "@/components/markets/markets-ask";
import { MarketsMasthead } from "@/components/markets/markets-masthead";

export const metadata: Metadata = {
  title: "Markets | TEKCE Exclusive",
  description:
    "Spain, T\u00fcrkiye, North Cyprus and the United Arab Emirates: where TEKCE sells, and how a purchase actually runs in each market.",
};

/**
 * An index, like /projects: one row per market with the figures that separate
 * them, the mechanics set side by side, and a way in to each market's own
 * page. Written for buyers and partner agencies, not developers — what a
 * market is worth to a developer depends on where their project already is.
 */
export default function MarketsPage() {
  return (
    <main>
      <MarketsMasthead />
      <MarketIndex />
      <MarketComparison />
      <MarketsAsk />
    </main>
  );
}
