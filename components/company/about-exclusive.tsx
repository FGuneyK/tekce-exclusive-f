import Image from "next/image";
import { MARKETS } from "@/lib/navigation";

// Unsplash photo-1763965367191-6455ef032c79
const IMAGE =
  "https://images.unsplash.com/photo-1763965367191-6455ef032c79?auto=format&fit=crop&w=1800&h=1500&q=80";

/**
 * Establishment year and office from tekceexclusive.com (checked
 * 2026-09-15); markets from the shared navigation list.
 */
const FACTS = [
  { term: "Established", detail: "2018" },
  { term: "Office", detail: "Kadıköy, Istanbul" },
  { term: "Group", detail: "TEKCE Group" },
  { term: "Works with", detail: "Developers, partner agencies and buyers" },
  { term: "Markets", detail: MARKETS.map((market) => market.label).join(", ") },
];

export function AboutExclusive() {
  return (
    <section id="about" className="scroll-mt-14 lg:scroll-mt-28">
      <div className="site-container section-y grid gap-12 lg:grid-cols-12 lg:gap-x-16">
        <div className="lg:col-span-6">
          <h2 className="max-w-[16ch] text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-ink sm:text-[2.5rem] lg:text-5xl">
            Built to take projects to international buyers.
          </h2>

          <div className="mt-8 max-w-[34rem] text-[17px] leading-[1.7] text-ink/75 [&>p+p]:mt-5">
            <p>
              TEKCE Exclusive was established in 2018 to sell real estate
              projects. Where an agency sells one home at a time, we take on a
              whole development: its positioning and pricing, its sales
              materials, its distribution through a network of partners, and
              the management of every sale that follows.
            </p>
            <p>
              Developers bring the project and the authority to sell it. We take
              it to international buyers. TEKCE Exclusive and TEKCE are sister
              companies within TEKCE Group.
            </p>
          </div>

          <dl className="mt-12 grid max-w-[34rem] border-b border-ink/10 sm:grid-cols-2 sm:gap-x-8">
            {FACTS.map((fact) => (
              <div
                key={fact.term}
                className="border-t border-ink/10 py-4 sm:last:col-span-2"
              >
                <dt className="text-sm tracking-tight text-ink/50">{fact.term}</dt>
                <dd className="mt-1 text-[15px] font-medium tracking-tight text-ink">
                  {fact.detail}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden bg-mist lg:col-span-6 lg:aspect-auto lg:min-h-[40rem]">
          <Image
            src={IMAGE}
            alt="The Bosphorus in Istanbul at dusk, with the city’s Asian shore beyond."
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
