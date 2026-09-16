import Link from "next/link";
import { COMPANY } from "@/lib/company";
import { CTA } from "@/lib/navigation";
import type { Project } from "@/lib/projects";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

const button =
  "inline-flex h-11 min-w-[11.5rem] items-center justify-center px-5 text-sm font-medium tracking-tight transition-colors duration-150";

/**
 * Every projects page ends with the one thing a reader cannot do from it: ask
 * about a specific unit. On a project page the question is already narrowed
 * to that project. Contact details are the published ones, and the developer
 * line sits underneath as a quiet route rather than a second offer.
 */
export function ProjectEnquiry({ project }: { project?: Project }) {
  return (
    <section id="enquire" className="scroll-mt-16 bg-mist lg:scroll-mt-32">
      <div className="site-container section-y grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-x-16">
        <h2 className="max-w-[16ch] text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-ink sm:text-[2.5rem] lg:col-span-6 lg:text-[3rem]">
          {project ? `Ask about a unit in ${project.name}.` : "Ask about a specific unit."}
        </h2>

        <div className="lg:col-span-6 lg:pt-1">
          <p className="max-w-[34rem] text-lg leading-[1.6] text-ink/75">
            {project ? (
              <>
                Give us the unit number, or the floor, aspect and size you are
                after. You get what is still held, the payment plan, and what
                buying in {project.country} involves — from the team that
                represents the project.
              </>
            ) : (
              <>
                Tell us the project and the floor, aspect or size you want. You
                get the current availability, the payment plan and what the
                purchase involves in that country — from the team that
                represents the project.
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

          <p className="mt-8 border-t border-ink/10 pt-6 text-[15px] leading-[1.6] text-ink/60">
            Building something that belongs on this list?{" "}
            <Link
              href={CTA.href}
              className={`font-medium text-ink underline decoration-ink/30 underline-offset-4 transition-colors duration-150 hover:decoration-ink ${focusRing}`}
            >
              {CTA.label}
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
