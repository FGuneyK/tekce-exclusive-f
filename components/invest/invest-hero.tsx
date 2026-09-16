import Image from "next/image";
import Link from "next/link";
import { darkButton } from "@/lib/ui";

// Unsplash photo-1613977257363-707ba9348227
const IMAGE =
  "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=2400&h=1100&q=80";

export function InvestHero() {
  return (
    <section className="relative isolate bg-mist">
      {/*
        Centred type on ink, then one framed photograph that straddles the ink
        and the mist below it. The ink ground stops short of the frame's lower
        edge, so the picture sits across both sections.
      */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 bottom-24 -z-10 bg-ink sm:bottom-40 lg:bottom-56"
      />

      <div className="site-container pt-14 text-center sm:pt-16 lg:pt-20">
        <h1 className="mx-auto max-w-[19ch] text-[2.75rem] leading-[1.03] font-bold tracking-[-0.035em] text-paper sm:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem]">
          Invest in new property abroad, with the full picture.
        </h1>

        <p className="mx-auto mt-7 max-w-[38rem] text-lg leading-[1.6] text-paper/75">
          Selected new developments, complete project information and one
          price whoever advises you — with TEKCE’s local support in Spain,
          Türkiye, North Cyprus and the United Arab Emirates, from the first
          viewing through to closing.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link href="/projects" className={darkButton.primary}>
            Browse projects
          </Link>
          <Link href="#adviser" className={darkButton.secondary}>
            Speak to our sales team
          </Link>
        </div>
      </div>

      <div className="site-container mt-12 sm:mt-16">
        <div className="relative aspect-[4/3] overflow-hidden bg-ink-deep sm:aspect-[16/9] lg:aspect-[21/9]">
          <Image
            src={IMAGE}
            alt="A white contemporary villa with a pool and a shaded terrace."
            fill
            preload
            sizes="(min-width: 1440px) 1360px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
