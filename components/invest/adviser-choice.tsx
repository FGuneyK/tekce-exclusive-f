import Link from "next/link";
import { COMPANY } from "@/lib/company";
import { darkButton } from "@/lib/ui";

/**
 * The buyer's two routes into a purchase: directly with TEKCE Exclusive's
 * own sales team, or through a partner agency. The second route also points
 * agencies to the partner programme.
 */
export function AdviserChoice() {
  return (
    <section id="adviser" className="scroll-mt-14 lg:scroll-mt-28">
      <div className="site-container section-y">
        <h2 className="max-w-[18ch] text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-ink sm:text-[2.5rem] lg:text-5xl">
          Choose how you buy.
        </h2>

        {/* Two doors of equal weight; the choice is the buyer’s, not ours. */}
        <div className="mt-12 grid gap-4 lg:mt-16 lg:grid-cols-2 lg:gap-5">
          <div className="flex min-h-[24rem] flex-col justify-between gap-12 bg-ink p-8 sm:p-10 lg:min-h-[28rem] lg:p-12">
            <h3 className="max-w-[16ch] text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-paper lg:text-[2.5rem]">
              Buy directly from TEKCE Exclusive.
            </h3>
            <div>
              <p className="max-w-[28rem] text-[17px] leading-[1.6] text-paper/75">
                Our sales team can take you through current projects, send you
                the full project information and arrange viewings, with TEKCE
                Group’s local support on the ground.
              </p>
              <a href={COMPANY.email.href} className={`mt-8 ${darkButton.primary}`}>
                Email our sales team
              </a>
              <p className="mt-5 text-sm tracking-tight text-paper/60">
                Or call{" "}
                <a
                  href={COMPANY.phone.href}
                  className="font-medium whitespace-nowrap text-paper transition-colors duration-150 hover:text-paper/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
                >
                  {COMPANY.phone.display}
                </a>
              </p>
            </div>
          </div>

          <div className="flex min-h-[24rem] flex-col justify-between gap-12 border border-ink/10 bg-mist p-8 sm:p-10 lg:min-h-[28rem] lg:p-12">
            <h3 className="max-w-[14ch] text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-ink lg:text-[2.5rem]">
              Already have an agency you trust?
            </h3>
            <div>
              <p className="max-w-[28rem] text-[17px] leading-[1.6] text-ink/70">
                Ask them about projects on TEKCE Exclusive. If they are not yet
                part of the network, they can apply to join, and introductions
                they make are then registered to them.
              </p>
              <Link
                href="/partners"
                className="mt-8 inline-flex h-11 min-w-[11.5rem] items-center justify-center bg-ink px-5 text-sm font-medium tracking-tight text-paper transition-colors duration-150 hover:bg-ink-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              >
                How the network works
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-8 max-w-[48rem] text-sm leading-[1.6] text-ink/50">
          The value of property can fall as well as rise. Nothing on this page
          is financial, legal or tax advice; take independent advice before you
          buy.
        </p>
      </div>
    </section>
  );
}
