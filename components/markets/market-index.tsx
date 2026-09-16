import Image from "next/image";
import Link from "next/link";
import { MARKET_DETAILS, type Market } from "@/lib/markets";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink";

function Arrow() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
      <path
        d="M9 1L13 5L9 9M13 5H1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** The mechanics that separate one market from another, in a fixed order. */
const specs = (market: Market) => [
  { label: "Where buying concentrates", value: market.concentration },
  { label: "Ownership", value: market.essentials.ownership },
  { label: "Registered at", value: market.essentials.registry },
  { label: "The buyer must obtain", value: market.essentials.obtain },
];

function MarketEntry({ market, index }: { market: Market; index: number }) {
  return (
    <li className="border-t border-ink/15 pt-8 pb-12 lg:pt-10 lg:pb-14">
      <Link href={market.href} className={`group block ${focusRing}`}>
        {/* The country carried on its own photograph, the way a market is
            actually recognised. */}
        <div className="relative h-72 overflow-hidden bg-ink sm:h-80 lg:h-[26rem]">
          <Image
            src={market.photo}
            alt={market.alt}
            fill
            sizes="(min-width: 1440px) 1360px, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <div
            aria-hidden="true"
            className="from-ink/85 via-ink/25 absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t to-transparent"
          />

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-6 lg:p-8">
            <div>
              <p className="text-[13px] tracking-tight text-paper/60 tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-1 text-[2.25rem] leading-[1.02] font-bold tracking-[-0.035em] text-paper sm:text-[2.75rem] lg:text-[3.5rem]">
                {market.label}
              </h2>
            </div>
            <span
              aria-hidden="true"
              className="flex size-10 shrink-0 items-center justify-center border border-paper/40 text-paper transition-colors duration-200 group-hover:border-paper group-hover:bg-paper group-hover:text-ink"
            >
              <Arrow />
            </span>
          </div>
        </div>

        <div className="mt-7 grid gap-8 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-6">
            <p className="max-w-[56ch] text-[17px] leading-[1.7] text-ink/80">
              {market.summary}
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium tracking-tight text-ink">
              {market.label === "United Arab Emirates"
                ? "Buying in the UAE"
                : `Buying in ${market.label}`}
              <span className="transition-transform duration-200 ease-out group-hover:translate-x-0.5">
                <Arrow />
              </span>
            </span>
          </div>

          <dl className="lg:col-span-6">
            {specs(market).map((spec) => (
              <div
                key={spec.label}
                className="flex items-baseline justify-between gap-6 border-b border-ink/12 py-3 first:border-t first:border-ink/12"
              >
                <dt className="shrink-0 text-[15px] tracking-tight text-ink/55">
                  {spec.label}
                </dt>
                <dd className="text-right text-[15px] font-medium tracking-tight text-ink">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Link>
    </li>
  );
}

/**
 * Four markets, each described as a market rather than as stock we hold:
 * where buying concentrates, what ownership means, who registers the deed and
 * what a buyer has to obtain. The argument for any one of them lives on its
 * own page.
 */
export function MarketIndex() {
  return (
    <section className="site-container section-y">
      <ul>
        {MARKET_DETAILS.map((market, index) => (
          <MarketEntry key={market.href} market={market} index={index} />
        ))}
      </ul>
    </section>
  );
}
