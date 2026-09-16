import type { Market } from "@/lib/markets";

/**
 * What a purchase adds on top of the asking price, item by item. The figure
 * a buyer most wants and most rarely gets before they have committed, so it
 * is set at display size rather than buried in a footnote.
 */
export function MarketCosts({ market }: { market: Market }) {
  return (
    <section className="bg-ink">
      <div className="site-container section-y">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-x-16">
          <h2 className="max-w-[14ch] text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-paper sm:text-[2.5rem] lg:col-span-5">
            What it costs on top.
          </h2>
          <p className="text-[1.75rem] leading-[1.15] font-semibold tracking-[-0.03em] text-paper lg:col-span-7 lg:text-[2.25rem]">
            {market.costs.headline}.
          </p>
        </div>

        <table className="mt-12 w-full border-collapse text-left text-[15px] tracking-tight">
          <thead>
            <tr>
              <th scope="col" className="border-b border-paper/25 py-3 pr-4 text-[13px] font-medium text-paper/55">
                Cost
              </th>
              <th scope="col" className="border-b border-paper/25 px-4 py-3 text-[13px] font-medium text-paper/55">
                Rate
              </th>
              <th scope="col" className="border-b border-paper/25 py-3 pl-4 text-right text-[13px] font-medium text-paper/55">
                Paid by
              </th>
            </tr>
          </thead>
          <tbody>
            {market.costs.rows.map((row) => (
              <tr key={row.item}>
                <th
                  scope="row"
                  className="w-[13rem] border-b border-paper/12 py-4 pr-4 align-top font-medium text-paper"
                >
                  {row.item}
                </th>
                <td className="border-b border-paper/12 px-4 py-4 align-top text-paper/80">
                  {row.rate}
                </td>
                <td className="w-24 border-b border-paper/12 py-4 pl-4 text-right align-top whitespace-nowrap text-paper/60">
                  {row.paidBy}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-x-16">
          {market.costs.note && (
            <p className="max-w-[60ch] text-[15px] leading-[1.7] text-paper/70 lg:col-span-7">
              {market.costs.note}
            </p>
          )}
          <div className="lg:col-span-5">
            <h3 className="text-[13px] font-medium tracking-tight text-paper">
              Borrowing
            </h3>
            <p className="mt-2 max-w-[40ch] text-[15px] leading-[1.7] text-paper/70">
              {market.borrowing}
            </p>
          </div>
        </div>

        <p className="mt-10 max-w-[70ch] border-t border-paper/15 pt-6 text-[14px] leading-[1.6] text-paper/50">
          Rates and fees as published in TEKCE&rsquo;s cost guide for this
          market, checked in September 2026. They are planning figures, not a
          quotation, and not legal or tax advice — the rate that applies to you
          depends on the region, the property and your own position.
        </p>
      </div>
    </section>
  );
}
