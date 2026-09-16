import Link from "next/link";
import { COMPANY } from "@/lib/company";
import type { Market } from "@/lib/markets";
import { NAV_ITEMS } from "@/lib/navigation";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

const button =
  "inline-flex h-11 min-w-[11.5rem] items-center justify-center px-5 text-sm font-medium tracking-tight transition-colors duration-150";

const partners = NAV_ITEMS.find((item) => item.label === "Partners");

const shortName = (label: string) =>
  label === "United Arab Emirates" ? "the UAE" : label;

/**
 * Two readers arrive at the foot of these pages: someone deciding where to
 * buy, and an agency deciding where to sell. One line each, one action each.
 * On a country page the first question is already narrowed to that country.
 */
export function MarketsAsk({ market }: { market?: Market }) {
  return (
    <section id="ask" className="scroll-mt-16 bg-mist lg:scroll-mt-32">
      <div className="site-container section-y grid gap-10 lg:grid-cols-12 lg:gap-x-16">
        <div className="lg:col-span-6">
          <h2 className="max-w-[18ch] text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-ink sm:text-[2.5rem]">
            {market
              ? `Thinking about ${shortName(market.label)}?`
              : "Not sure which one is yours?"}
          </h2>
          <p className="mt-5 max-w-[36rem] text-lg leading-[1.6] text-ink/75">
            {market ? (
              <>
                Tell us how you want to use the place and how much of the year
                you would spend in it. We will tell you what that means for the
                paperwork, the costs and the kind of home that suits it.
              </>
            ) : (
              <>
                Tell us how you want to use the place and how much of the year
                you would spend in it. That narrows four markets to one faster
                than any comparison table.
              </>
            )}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={COMPANY.email.href}
              className={`${button} bg-ink text-paper hover:bg-ink-deep ${focusRing}`}
            >
              {COMPANY.email.display}
            </a>
            <a
              href={COMPANY.phone.href}
              className={`${button} border border-ink/25 text-ink hover:border-ink hover:bg-ink/5 ${focusRing}`}
            >
              {COMPANY.phone.display}
            </a>
          </div>
        </div>

        <div className="lg:col-span-6 lg:pt-3">
          <div className="border-t border-ink/15 pt-6">
            <h3 className="text-lg font-semibold tracking-[-0.02em] text-ink">
              {market
                ? `Selling in ${shortName(market.label)} already?`
                : "Selling in one of these markets already?"}
            </h3>
            <p className="mt-2 max-w-[36rem] text-[15px] leading-[1.6] text-ink/70">
              Agencies with international clients can register those clients
              against our projects and sell them under one set of rules,
              whichever country the buyer ends up choosing.
            </p>
            {partners && (
              <Link
                href={partners.href}
                className={`mt-4 inline-flex items-center gap-2 text-sm font-medium tracking-tight text-ink underline decoration-ink/30 underline-offset-4 transition-colors duration-150 hover:decoration-ink ${focusRing}`}
              >
                How the partner network works
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
