import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarketCosts } from "@/components/markets/market-costs";
import { MarketDistricts } from "@/components/markets/market-districts";
import { MarketFaq } from "@/components/markets/market-faq";
import { MarketHero } from "@/components/markets/market-hero";
import { MarketProcess } from "@/components/markets/market-process";
import { MarketRules } from "@/components/markets/market-rules";
import { MarketShape } from "@/components/markets/market-shape";
import { MarketsAsk } from "@/components/markets/markets-ask";
import { MARKET_DETAILS, marketBySlug } from "@/lib/markets";

export function generateStaticParams() {
  return MARKET_DETAILS.map((market) => ({
    slug: market.href.replace("/markets/", ""),
  }));
}

export async function generateMetadata(
  props: PageProps<"/markets/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const market = marketBySlug(slug);
  if (!market) return {};

  return {
    title: `Buying property in ${market.label} | TEKCE Exclusive`,
    description: `How the ${market.label} property market works for a foreign buyer: where buying concentrates, what ownership means, how a purchase runs, and what it costs on top of the price.`,
  };
}

/**
 * An account of one market, written from the outside: what the place is, what
 * shapes it, the order a purchase follows there, and what it adds to the
 * price. Every figure comes from TEKCE's published country and cost guides.
 */
export default async function MarketPage(props: PageProps<"/markets/[slug]">) {
  const { slug } = await props.params;
  const market = marketBySlug(slug);
  if (!market) notFound();

  return (
    <main>
      <MarketHero market={market} />
      <MarketShape market={market} />
      <MarketDistricts market={market} />
      <MarketProcess market={market} />
      <MarketRules market={market} />
      <MarketCosts market={market} />
      <MarketFaq market={market} />
      <MarketsAsk market={market} />
    </main>
  );
}
