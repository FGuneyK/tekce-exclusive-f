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
