import Image from "next/image";
import Link from "next/link";
import { DataPanel, type PanelData } from "@/components/data-panel";

const BENEFITS = [
  "Lead registration and client protection",
  "Transparent commission structure",
  "Transaction and closing support",
  "Project materials and live availability",
];

// Illustrative mock record; the reference number is invented for the prototype.
const REGISTRATION: PanelData = {
  title: "Lead registration",
  tag: "Confirmed",
  rows: [
    { label: "Client ref.", value: "PT-20418" },
    { label: "Project", value: "Viva Altea Beach" },
    { label: "Registered to", value: "Your agency" },
    { label: "Status", value: "Protected", marker: "lock" },
  ],
};

// Unsplash photo-1583691028182-e8f01e74bfa2
const IMAGE =
  "https://images.unsplash.com/photo-1583691028182-e8f01e74bfa2?auto=format&fit=crop&w=1400&h=1750&q=80";

export function Partners() {
  return (
    <section id="partners" className="scroll-mt-14 lg:scroll-mt-28 bg-mist">
      {/*
        DOM order is intro → photograph → details, which is the phone reading
        order. From lg the photograph moves to the right and spans both rows,
        and the details settle against its bottom edge.
      */}
      <div className="site-container section-y grid gap-10 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-12">
        <div className="lg:col-span-6">
          <h2 className="text-[2.25rem] leading-[1.04] font-bold tracking-[-0.035em] sm:text-[3rem] lg:text-[3.5rem]">
            <span className="block text-ink/55">Your client.</span>
            <span className="block text-ink/55">Your relationship.</span>
            <span className="block text-ink">Protected.</span>
          </h2>
          <p className="mt-7 max-w-[32rem] text-lg leading-[1.6] text-ink/70">
            TEKCE Exclusive gives partners access to selected projects while
            TEKCE’s local infrastructure supports viewings, documentation and
            closing.
          </p>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden bg-ink sm:aspect-[4/3] lg:col-span-6 lg:col-start-7 lg:row-span-2 lg:row-start-1 lg:aspect-auto lg:min-h-[36rem]">
          <Image
            src={IMAGE}
            alt="A closed door with a brushed steel handle, crossed by a band of late light."
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <DataPanel
            panel={REGISTRATION}
            className="absolute bottom-5 left-5 w-[min(20rem,calc(100%-2.5rem))] lg:bottom-8 lg:left-8"
          />
        </div>

        <div className="lg:col-span-6 lg:row-start-2 lg:self-end">
          <ul className="grid sm:grid-cols-2 sm:gap-x-8">
            {BENEFITS.map((benefit) => (
              <li
                key={benefit}
                className="flex gap-3 border-t border-ink/10 py-4 text-[15px] leading-snug font-medium tracking-tight text-ink"
              >
                <span aria-hidden="true" className="mt-[7px] block size-1.5 shrink-0 bg-ink" />
                {benefit}
              </li>
            ))}
          </ul>

          <Link
            href="/partners"
            className="mt-8 inline-flex h-11 items-center justify-center bg-ink px-5 text-sm font-medium tracking-tight text-paper transition-colors duration-150 hover:bg-ink-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            Become a Partner
          </Link>
        </div>
      </div>
    </section>
  );
}
