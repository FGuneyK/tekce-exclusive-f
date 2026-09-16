import Image from "next/image";
import Link from "next/link";
import type { Market } from "@/lib/markets";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

/**
 * Type first, then the country at full width. No sticky panel here: a market
 * is not a thing you buy, so the page opens with the account and one way to
 * start a conversation, not with a price.
 */
export function MarketHero({ market }: { market: Market }) {
  return (
    <>
      <section className="site-container pt-6 pb-10 lg:pt-8 lg:pb-12">
        <nav aria-label="Breadcrumb">
          <Link
            href="/markets"
            className={`inline-flex items-center gap-2 text-sm tracking-tight text-ink/55 transition-colors duration-150 hover:text-ink ${focusRing}`}
          >
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
              <path
                d="M5 1L1 5L5 9M1 5H13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            All markets
          </Link>
        </nav>

        <div className="mt-6 grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-x-16">
          <h1 className="text-[2.5rem] leading-[1.02] font-bold tracking-[-0.035em] text-ink sm:text-[3.25rem] lg:col-span-6 lg:text-[4rem]">
            {market.label}
          </h1>

          <div className="lg:col-span-6 lg:pb-2">
            <p className="max-w-[40rem] text-[17px] leading-[1.7] text-ink/80">
              {market.blurb}
            </p>
            <a
              href="#ask"
              className={`mt-6 inline-flex h-11 min-w-[11.5rem] items-center justify-center bg-ink px-5 text-sm font-medium tracking-tight text-paper transition-colors duration-150 hover:bg-ink-deep ${focusRing}`}
            >
              Inquire Now
            </a>
          </div>
        </div>
      </section>

      <div className="relative h-64 bg-ink sm:h-80 lg:h-[32rem]">
        <Image
          src={market.photo}
          alt={market.alt}
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </>
  );
}
