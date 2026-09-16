import type { Market } from "@/lib/markets";

const shortName = (label: string) =>
  label === "United Arab Emirates" ? "the UAE" : label;

/**
 * The sequence a purchase follows in this country, as TEKCE's own guide sets
 * it out. The order is the point: what has to happen before the deed moves.
 */
export function MarketProcess({ market }: { market: Market }) {
  return (
    <section className="site-container section-y grid gap-10 lg:grid-cols-12 lg:gap-x-16">
      <div className="lg:col-span-4">
        <h2 className="max-w-[14ch] text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-ink sm:text-[2.5rem]">
          How a purchase runs.
        </h2>
        <p className="mt-5 max-w-[34rem] text-[17px] leading-[1.7] text-ink/75">
          Every market has its own order of events, and in {shortName(market.label)}{" "}
          it runs like this. The deed is the last step, not the first.
        </p>
      </div>

      <ol className="lg:col-span-8">
        {market.steps.map((step, index) => (
          <li
            key={step}
            className="flex gap-6 border-b border-ink/12 py-5 first:border-t first:border-ink/12 lg:gap-10"
          >
            <span
              aria-hidden="true"
              className="w-6 shrink-0 text-[15px] text-ink/35 tabular-nums"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-[17px] leading-[1.55] tracking-tight text-ink/85">
              {step}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
