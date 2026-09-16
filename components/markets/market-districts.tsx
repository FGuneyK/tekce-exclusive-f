import type { Market } from "@/lib/markets";

/**
 * Where foreign buying actually happens in this country, area by area. The
 * character of each place, not a ranking of them.
 */
export function MarketDistricts({ market }: { market: Market }) {
  return (
    <section className="site-container section-y">
      <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-x-16">
        <h2 className="max-w-[14ch] text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-ink sm:text-[2.5rem] lg:col-span-5">
          Where buying concentrates.
        </h2>
        <p className="max-w-[36rem] text-[17px] leading-[1.6] text-ink/70 lg:col-span-7 lg:pb-1">
          Foreign demand in any market gathers in a handful of places, and each
          one attracts a different buyer for a different reason.
        </p>
      </div>

      <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {market.districts.map((district) => (
          <li key={district.name} className="border-t border-ink/20 pt-4">
            <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-ink">
              {district.name}
            </h3>
            <p className="mt-2.5 text-[15px] leading-[1.65] text-ink/75">
              {district.text}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
