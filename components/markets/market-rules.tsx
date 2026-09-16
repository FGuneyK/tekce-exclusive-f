import type { Market } from "@/lib/markets";

const shortName = (label: string) =>
  label === "United Arab Emirates" ? "the UAE" : label;

/**
 * What a foreign buyer may own here and how title actually works — the part
 * that separates one market from another once the photographs stop mattering.
 */
export function MarketRules({ market }: { market: Market }) {
  return (
    <section className="bg-mist">
      <div className="site-container section-y grid gap-10 lg:grid-cols-12 lg:gap-x-16">
        <div className="lg:col-span-4">
          <h2 className="max-w-[14ch] text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-ink sm:text-[2.5rem]">
            What you can own.
          </h2>
          <p className="mt-5 max-w-[34rem] text-[17px] leading-[1.7] text-ink/75">
            Ownership means something slightly different in each of these four
            countries. This is what it means in {shortName(market.label)}.
          </p>
        </div>

        <ul className="lg:col-span-8">
          {market.rules.map((rule) => (
            <li
              key={rule}
              className="border-b border-ink/15 py-5 text-[17px] leading-[1.6] text-ink/85 first:border-t first:border-ink/15"
            >
              {rule}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
