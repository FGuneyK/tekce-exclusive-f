import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/company";
import { CTA } from "@/lib/navigation";
import { darkButton } from "@/lib/ui";

// Unsplash photo-1741163269578-c51176eddb3c
const IMAGE =
  "https://images.unsplash.com/photo-1741163269578-c51176eddb3c?auto=format&fit=crop&w=1800&h=1300&q=80";

export function SubmitProjectCta() {
  return (
    <section id="submit" className="scroll-mt-14 lg:scroll-mt-28">
      <div className="site-container section-y">
        {/*
          A two-panel poster: the brand-red panel carries the ask, the photograph
          meets it edge to edge. On phones the ask comes first.
        */}
        <div className="grid lg:min-h-[34rem] lg:grid-cols-12">
          <div className="flex flex-col justify-between gap-14 bg-accent p-8 sm:p-10 lg:col-span-5 lg:p-12">
            <h2 className="max-w-[14ch] text-[2.25rem] leading-[1.04] font-bold tracking-[-0.035em] text-paper sm:text-[3rem] lg:text-[3.5rem]">
              Show us what you’re building.
            </h2>

            <div>
              <p className="max-w-[26rem] text-[17px] leading-[1.6] text-paper">
                Send us the essentials — location, scale, stage and timeline.
                The conversation starts with how your project should be
                positioned for international buyers.
              </p>

              <Link href={CTA.href} className={`mt-8 ${darkButton.primary}`}>
                {CTA.label}
              </Link>

              <p className="mt-6 text-sm tracking-tight text-paper">
                Prefer to talk first?{" "}
                <a
                  href={COMPANY.phone.href}
                  className="font-medium whitespace-nowrap text-paper underline decoration-paper/50 underline-offset-4 transition-colors duration-150 hover:decoration-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
                >
                  {COMPANY.phone.display}
                </a>
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden bg-mist lg:col-span-7 lg:aspect-auto">
            <Image
              src={IMAGE}
              alt="A white architectural model of a residential masterplan, with rows of spherical trees between the blocks."
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
