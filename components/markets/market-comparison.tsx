import { MARKET_DETAILS } from "@/lib/markets";

const ROWS: {
  label: string;
  value: (market: (typeof MARKET_DETAILS)[number]) => string;
}[] = [
  { label: "Ownership", value: (market) => market.essentials.ownership },
  { label: "Registered at", value: (market) => market.essentials.registry },
  { label: "The buyer must obtain", value: (market) => market.essentials.obtain },
  { label: "Title deed timetable", value: (market) => market.essentials.timetable },
];

/**
 * The part of a market that a brochure never puts side by side. Four columns
 * on desktop; on phones the same content stacks per market, because a
 * five-by-four table is not readable at that width.
 */
export function MarketComparison() {
  return (
    <section className="bg-ink">
      <div className="site-container section-y">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-x-16">
          <h2 className="max-w-[18ch] text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-paper sm:text-[2.5rem] lg:col-span-6">
            The differences that actually matter.
          </h2>
          <p className="max-w-[34rem] text-[17px] leading-[1.6] text-paper/70 lg:col-span-6 lg:pb-1">
            Every one of these markets is sold as easy. They are not the same,
            and the gaps are worth knowing before you choose: who registers the
            deed, what you have to obtain, and how long it takes to arrive.
          </p>
        </div>

        {/* Desktop: one column per market. */}
        <table className="mt-12 hidden w-full border-collapse text-[15px] tracking-tight lg:table">
          <thead>
            <tr>
              <th scope="col" className="w-[15rem] border-b border-paper/25 py-3 text-left text-[13px] font-medium text-paper/55">
                <span className="sr-only">Detail</span>
              </th>
              {MARKET_DETAILS.map((market) => (
                <th
                  key={market.href}
                  scope="col"
                  className="border-b border-paper/25 px-4 py-3 text-left text-lg font-semibold tracking-[-0.02em] text-paper last:pr-0"
                >
                  {market.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr key={row.label}>
                <th
                  scope="row"
                  className="border-b border-paper/12 py-4 pr-4 text-left align-top text-[14px] font-normal text-paper/55"
                >
                  {row.label}
                </th>
                {MARKET_DETAILS.map((market) => (
                  <td
                    key={market.href}
                    className="border-b border-paper/12 px-4 py-4 align-top text-paper/90 last:pr-0"
                  >
                    {row.value(market)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {/* Phones and tablets: the same rows, market by market. */}
        <div className="mt-10 lg:hidden">
          {MARKET_DETAILS.map((market) => (
            <div key={market.href} className="border-t border-paper/25 py-6">
              <h3 className="text-lg font-semibold tracking-[-0.02em] text-paper">
                {market.label}
              </h3>
              <dl className="mt-3">
                {ROWS.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-baseline justify-between gap-6 border-b border-paper/12 py-2.5 last:border-b-0"
                  >
                    <dt className="shrink-0 text-[14px] text-paper/55">
                      {row.label}
                    </dt>
                    <dd className="text-right text-[15px] tracking-tight text-paper/90">
                      {row.value(market)}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-[70ch] border-t border-paper/15 pt-6 text-[14px] leading-[1.6] text-paper/50">
          Drawn from TEKCE&rsquo;s published country guides. It is a summary of
          how a purchase runs, not legal or tax advice, and the rules change —
          check the position that applies to you before you commit.
        </p>
      </div>
    </section>
  );
}
