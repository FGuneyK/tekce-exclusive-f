import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/lib/navigation";
import { darkButton } from "@/lib/ui";

const PARTNERS_CTA = { label: "Become a Partner", href: "/partners" };

// Unsplash photo-1780653503205-ac2c41b893a8
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1780653503205-ac2c41b893a8?auto=format&fit=crop&w=2400&h=1500&q=80";

export function Hero() {
  return (
    <section className="relative isolate">
      <Image
        src={HERO_IMAGE}
        alt="A contemporary residential tower at golden hour, its balconies planted and lit."
        fill
        preload
        sizes="100vw"
        className="-z-10 object-cover"
      />
      {/*
        The copy sits in a left column on desktop, so the scrim clears to the
        right and lets the facade read. On narrow screens the copy spans the
        full width, so it falls back to an even vertical wash.
      */}
      <div
        aria-hidden="true"
        className="from-ink/92 via-ink/80 to-ink/55 lg:from-ink/92 lg:via-ink/72 lg:to-ink/10 absolute inset-0 -z-10 bg-gradient-to-t lg:bg-gradient-to-r"
      />

      <div className="site-container flex min-h-[34rem] flex-col justify-center py-20 lg:min-h-[42rem] lg:py-28">
        <div className="max-w-[46rem]">
          <h1 className="max-w-[19ch] text-[2.75rem] leading-[1.03] font-bold tracking-[-0.035em] text-paper sm:text-[3.5rem] lg:text-[4.25rem] xl:text-[4.75rem]">
            We take real estate projects to international markets.
          </h1>

          <p className="mt-7 max-w-[34rem] text-lg leading-[1.6] text-paper">
            Strategy, marketing and distribution for developers who want their
            projects in front of the right buyers, wherever those buyers are.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href={CTA.href}
              className={darkButton.primary}
            >
              {CTA.label}
            </Link>
            <Link
              href={PARTNERS_CTA.href}
              className={darkButton.secondary}
            >
              {PARTNERS_CTA.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
