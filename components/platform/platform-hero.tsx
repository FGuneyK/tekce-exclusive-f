import Image from "next/image";
import Link from "next/link";
import { DataPanel, type PanelData } from "@/components/data-panel";
import { CTA } from "@/lib/navigation";
import { darkButton } from "@/lib/ui";

// Unsplash photo-1731742305570-f99f0b1a8025
const IMAGE =
  "https://images.unsplash.com/photo-1731742305570-f99f0b1a8025?auto=format&fit=crop&w=2400&h=1300&q=80";

/** Illustrative panels, one per surface of the platform. Mock data only. */
const VIEWING: PanelData = {
  title: "TeleProperty",
  tag: "Live session",
  rows: [
    { label: "360° tour", value: "Open", marker: "square" },
    { label: "Sales specialist", value: "Connected", marker: "check" },
  ],
};

const LEAD: PanelData = {
  title: "Lead registration",
  tag: "Confirmed",
  rows: [
    { label: "Registered to", value: "Partner agency" },
    { label: "Status", value: "Protected", marker: "lock" },
  ],
};

const AVAILABILITY: PanelData = {
  title: "Availability",
  tag: "Block A",
  rows: [
    { label: "2 bedroom", value: "Available", marker: "square" },
    { label: "Penthouse", value: "Reserved" },
  ],
};

export function PlatformHero() {
  return (
    <section className="bg-ink">
      <div className="site-container pt-14 pb-16 sm:pt-16 lg:pt-20 lg:pb-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-x-16">
          <h1 className="max-w-[16ch] text-[2.75rem] leading-[1.03] font-bold tracking-[-0.035em] text-paper sm:text-[3.5rem] lg:col-span-7 lg:text-[4rem] xl:text-[4.75rem]">
            The platform behind every project we sell.
          </h1>
          <div className="lg:col-span-5 lg:pb-2">
            <p className="max-w-[30rem] text-lg leading-[1.6] text-paper/75">
              Distribution, remote viewing, sales management and reporting in
              one connected system, so developers, partners and buyers work
              from the same information.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href={CTA.href} className={darkButton.primary}>
                {CTA.label}
              </Link>
              <Link href="#how-it-works" className={darkButton.secondary}>
                How it works
              </Link>
            </div>
          </div>
        </div>

        {/*
          The product stage: one photograph with a panel from each surface
          laid over it. Phones keep a single panel so the photograph still
          reads.
        */}
        <div className="relative mt-12 h-[24rem] overflow-hidden bg-ink-deep sm:h-[32rem] lg:mt-16 lg:h-[38rem]">
          <Image
            src={IMAGE}
            alt="A residential building at night, its floors lit one above the other."
            fill
            preload
            sizes="(min-width: 1440px) 1360px, 100vw"
            className="object-cover"
          />
          <DataPanel
            panel={VIEWING}
            className="absolute top-8 left-8 hidden w-[19rem] md:block"
          />
          <DataPanel
            panel={LEAD}
            className="absolute bottom-5 left-5 w-[min(19rem,calc(100%-2.5rem))] md:top-1/2 md:right-8 md:bottom-auto md:left-auto md:-translate-y-1/2"
          />
          <DataPanel
            panel={AVAILABILITY}
            className="absolute bottom-8 left-[28%] hidden w-[19rem] md:block"
          />
        </div>
      </div>
    </section>
  );
}
