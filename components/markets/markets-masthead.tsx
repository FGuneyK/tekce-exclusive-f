/**
 * An index page, so the masthead is type only: what the four markets are and
 * why they are not interchangeable, then straight into the list.
 */
export function MarketsMasthead() {
  return (
    <section className="bg-ink">
      <div className="site-container grid gap-6 pt-12 pb-12 sm:pt-14 lg:grid-cols-12 lg:items-end lg:gap-x-16 lg:pt-16 lg:pb-14">
        <h1 className="max-w-[16ch] text-[2.5rem] leading-[1.04] font-bold tracking-[-0.035em] text-paper sm:text-[3.25rem] lg:col-span-7 lg:text-[4rem]">
          Four markets, four sets of rules.
        </h1>

        <p className="max-w-[34rem] text-lg leading-[1.6] text-paper/75 lg:col-span-5 lg:pb-2">
          Spain, Türkiye, North Cyprus and the United Arab Emirates are the
          four markets we sell in. What follows is an account of each one as a
          market — where buying concentrates, what owning actually means, and
          how a purchase runs — not a pitch for any of them.
        </p>
      </div>
    </section>
  );
}
