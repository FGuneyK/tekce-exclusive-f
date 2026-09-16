import Image from "next/image";
import Link from "next/link";
import { DataPanel, type PanelData } from "@/components/data-panel";
import { CTA } from "@/lib/navigation";
import { darkButton } from "@/lib/ui";

// Unsplash photo-1777919393730-463e2c0b7f4c
const IMAGE =
  "https://images.unsplash.com/photo-1777919393730-463e2c0b7f4c?auto=format&fit=crop&w=1400&h=1750&q=80";

// Illustrative mock for an unnamed project, not a real mandate.
const MANDATE: PanelData = {
  title: "Sales mandate",
  tag: "Your project",
  rows: [
    { label: "Positioning", value: "Approved", marker: "check" },
    { label: "Sales pack", value: "Ready", marker: "check" },
    { label: "TEKCE", value: "Live", marker: "square" },
    { label: "Independent partners", value: "Live", marker: "square" },
    { label: "Reporting", value: "Shared", marker: "square" },
  ],
};

export function DevelopersHero() {
  return (
    <section className="bg-ink">
      {/*
        The ink ground carries on from the homepage hero; the split composition
        keeps this page's own identity. Headline, offer and actions stay one
        block with the homepage hero's spacing, centred against the photograph.
        Phones read the block first, then the photograph.
      */}
      <div className="site-container grid gap-12 py-12 sm:py-16 lg:grid-cols-12 lg:gap-x-16 lg:py-20">
        <div className="flex flex-col justify-center lg:col-span-7 lg:min-h-[36rem]">
          <h1 className="max-w-[16ch] text-[2.75rem] leading-[1.03] font-bold tracking-[-0.035em] text-paper sm:text-[3.5rem] lg:text-[4rem] xl:text-[4.75rem]">
            You build the project. We sell it internationally.
          </h1>

          <p className="mt-7 max-w-[34rem] text-lg leading-[1.6] text-paper/75">
            TEKCE Exclusive takes on the commercial side of selling abroad —
            positioning, marketing, distribution and the management of every
            sale — as one accountable partner, so your team can stay focused on
            the build.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link href={CTA.href} className={darkButton.primary}>
              {CTA.label}
            </Link>
            <Link href="#scope" className={darkButton.secondary}>
              See what we take on
            </Link>
          </div>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden bg-ink-deep sm:aspect-[4/3] lg:col-span-5 lg:aspect-auto">
          <Image
            src={IMAGE}
            alt="A concrete frame rising on a hillside, with palm trees and the sea beyond."
            fill
            preload
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
          <DataPanel
            panel={MANDATE}
            className="absolute bottom-5 left-5 w-[min(19rem,calc(100%-2.5rem))] lg:bottom-8 lg:left-8"
          />
        </div>
      </div>
    </section>
  );
}
