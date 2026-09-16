import Link from "next/link";
import { ProjectGallery } from "@/components/projects/project-gallery";
import { COMPANY } from "@/lib/company";
import { summaryOf, type Project } from "@/lib/projects";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

const euro = (value: number) =>
  `€${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

const span = ([low, high]: [number, number], unit = "") =>
  low === high ? `${low}${unit}` : `${low}–${high}${unit}`;

const button =
  "inline-flex h-11 w-full items-center justify-center px-5 text-sm font-medium tracking-tight transition-colors duration-150";

/**
 * A listing layout: pictures on the left, and the panel a buyer actually acts
 * from on the right — price, what is left, and the way to ask, all in the
 * first screen. The panel follows the reader down the gallery on desktop.
 */
export function ProjectHero({ project }: { project: Project }) {
  const { available, total, price, area, beds } = summaryOf(project);

  const rows = [
    { label: "Homes available", value: `${available} of ${total}` },
    {
      label: "Bedrooms",
      value:
        beds.length === 1 ? `${beds[0]}` : `${beds[0]}–${beds[beds.length - 1]}`,
    },
    { label: "Size", value: span(area, " m²") },
    ...(project.stage ? [{ label: "Stage", value: project.stage }] : []),
    { label: "Reference", value: `#${project.reference}` },
  ];

  return (
    <section className="site-container pt-6 pb-12 lg:pt-8 lg:pb-16">
      <nav aria-label="Breadcrumb">
        <Link
          href="/projects"
          className={`inline-flex items-center gap-2 text-sm tracking-tight text-ink/55 transition-colors duration-150 hover:text-ink ${focusRing}`}
        >
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
            <path
              d="M5 1L1 5L5 9M1 5H13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          All projects
        </Link>
      </nav>

      <div className="mt-5 flex flex-wrap items-end justify-between gap-x-8 gap-y-2 border-b border-ink/10 pb-6">
        <div>
          <h1 className="text-[2.25rem] leading-[1.05] font-bold tracking-[-0.035em] text-ink sm:text-[2.75rem] lg:text-[3.25rem]">
            {project.name}
          </h1>
          <p className="mt-1.5 text-[17px] tracking-tight text-ink/60">
            {project.location}, {project.country}
          </p>
        </div>
        <p className="flex flex-wrap items-center gap-x-2 pb-1 text-[13px] tracking-tight text-ink/50">
          <span>{project.types.join(" & ")}s</span>
          {project.stage && (
            <>
              <span aria-hidden="true">·</span>
              <span>{project.stage}</span>
            </>
          )}
        </p>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-12 lg:gap-x-10">
        <div className="lg:col-span-8">
          <ProjectGallery project={project} />
        </div>

        <div className="lg:col-span-4">
          <div className="border border-ink/15 lg:sticky lg:top-[126px]">
            <div className="border-b border-ink/10 px-5 py-5">
              <p className="text-[13px] tracking-tight text-ink/50">
                Homes from
              </p>
              <p className="mt-1 text-[2rem] leading-none font-semibold tracking-[-0.03em] text-ink tabular-nums">
                {euro(price[0])}
              </p>
              <p className="mt-2 text-[13px] leading-[1.5] tracking-tight text-ink/50">
                The developer&rsquo;s base price, before purchase costs and
                taxes.
              </p>
            </div>

            <dl className="px-5">
              {rows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-baseline justify-between gap-4 border-b border-ink/10 py-3 last:border-b-0"
                >
                  <dt className="text-[14px] tracking-tight text-ink/55">
                    {row.label}
                  </dt>
                  <dd className="text-right text-[14px] font-medium tracking-tight text-ink tabular-nums">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-col gap-2.5 border-t border-ink/10 px-5 py-5">
              <a
                href="#enquire"
                className={`${button} bg-ink text-paper hover:bg-ink-deep ${focusRing}`}
              >
                Inquire Now
              </a>
              <a
                href={COMPANY.phone.href}
                className={`${button} border border-ink/25 text-ink hover:border-ink hover:bg-ink/5 ${focusRing}`}
              >
                {COMPANY.phone.display}
              </a>
              <p className="mt-1 text-[13px] leading-[1.5] tracking-tight text-ink/50">
                Ask about any unit in the list below, sold or available.
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-6 max-w-[62ch] text-[17px] leading-[1.6] text-ink/75">
        {project.summary}
      </p>
    </section>
  );
}
