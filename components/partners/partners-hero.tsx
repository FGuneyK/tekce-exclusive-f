import Image from "next/image";
import Link from "next/link";
import { LOGIN } from "@/lib/navigation";
import { darkButton } from "@/lib/ui";

// Unsplash photo-1761535315385-219131cb53e6
const IMAGE =
  "https://images.unsplash.com/photo-1761535315385-219131cb53e6?auto=format&fit=crop&w=2400&h=900&q=80";

export function PartnersHero() {
  return (
    <section className="bg-ink">
      {/*
        Type first, photograph second: headline and offer share one row on the
        ink ground, then a full-bleed band of facade closes the hero. Different
        from the homepage (photo behind copy) and Developers (split).
      */}
      <div className="site-container grid gap-8 pt-12 pb-12 sm:pt-16 lg:grid-cols-12 lg:items-end lg:gap-x-16 lg:pt-20 lg:pb-16">
        <h1 className="max-w-[15ch] text-[2.75rem] leading-[1.03] font-bold tracking-[-0.035em] text-paper sm:text-[3.5rem] lg:col-span-7 lg:text-[4rem] xl:text-[4.75rem]">
          Sell selected projects. Keep every client you bring.
        </h1>

        <div className="lg:col-span-5 lg:pb-2">
          <p className="max-w-[30rem] text-lg leading-[1.6] text-paper/75">
            A partner network for agencies with international clients: access
            to selected projects, registered and protected leads, a transparent
            commission structure, and local support through viewings,
            documentation and closing.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="#apply" className={darkButton.primary}>
              Become a Partner
            </Link>
            <Link href={LOGIN.href} className={darkButton.secondary}>
              {LOGIN.label}
            </Link>
          </div>
        </div>
      </div>

      <div className="relative h-56 bg-ink-deep sm:h-80 lg:h-[26rem]">
        <Image
          src={IMAGE}
          alt="Rows of balconies across a terracotta facade in late sun."
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
