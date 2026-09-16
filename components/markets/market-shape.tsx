import type { Market } from "@/lib/markets";

/**
 * The facts a reader checks, then the three things that actually characterise
 * the market. Stated as what is true there, not as reasons to buy.
 */
export function MarketShape({ market }: { market: Market }) {
  const facts = [
    { label: "Where buying concentrates", value: market.concentration },
    { label: "Ownership", value: market.essentials.ownership },
    { label: "Registered at", value: market.essentials.registry },
    { label: "The buyer must obtain", value: market.essentials.obtain },
    { label: "Title deed timetable", value: market.essentials.timetable },
  ];

  return (
    <section className="bg-mist">
      <div className="site-container section-y">
        <dl className="grid gap-x-10 gap-y-6 border-t border-ink/15 pt-6 sm:grid-cols-2 lg:grid-cols-5">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-[13px] tracking-tight text-ink/50">
                {fact.label}
              </dt>
              <dd className="mt-1.5 text-[15px] leading-[1.45] font-medium tracking-tight text-ink">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-16 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-x-16">
          <h2 className="max-w-[18ch] text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-ink sm:text-[2.5rem] lg:col-span-5">
            What shapes the market.
          </h2>
          <div className="flex flex-col gap-4 lg:col-span-7">
            {market.context.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-[58ch] text-[17px] leading-[1.7] text-ink/75"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <ul className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-10">
          {market.reasons.map((reason) => (
            <li key={reason.title} className="border-t border-ink/20 pt-4">
              <h3 className="text-[17px] leading-[1.35] font-semibold tracking-[-0.02em] text-ink">
                {reason.title}
              </h3>
              <p className="mt-2.5 text-[15px] leading-[1.65] text-ink/75">
                {reason.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
