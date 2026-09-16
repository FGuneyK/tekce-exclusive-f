import Image from "next/image";
import Link from "next/link";
import { FEATURED_PROJECTS } from "@/lib/projects";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink";

/** Wide, narrow / narrow, wide — so the two rows read as one composition. */
const WIDE_SLOTS = new Set([0, 3]);

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      width="14"
      height="10"
      viewBox="0 0 14 10"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M9 1L13 5L9 9M13 5H1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AllProjectsLink({ className }: { className: string }) {
  return (
    <Link
      href="/projects"
      className={`group items-center gap-2 text-sm font-medium tracking-tight text-ink ${focusRing} ${className}`}
    >
      All projects
      <Arrow className="transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
    </Link>
  );
}

export function FeaturedProjects() {
  return (
    <section id="projects" className="scroll-mt-14 lg:scroll-mt-28">
      <div className="site-container section-y">
        <div className="flex items-end justify-between gap-8">
          <h2 className="max-w-[20ch] text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-ink sm:text-[2.5rem] lg:text-5xl">
            Projects we currently represent.
          </h2>
          <AllProjectsLink className="hidden shrink-0 pb-1.5 sm:inline-flex" />
        </div>

        {/*
          Showcase: the photograph carries the card, with only the project's
          name and place on it. Phones get a sideways, snapping row; tablets a
          2×2 grid; desktop alternates wide and narrow frames across two rows.
        */}
        <ul className="-mx-5 mt-10 flex snap-x snap-mandatory scroll-pl-5 gap-3 overflow-x-auto px-5 [scrollbar-width:none] sm:-mx-8 sm:scroll-pl-8 sm:px-8 md:mx-0 md:grid md:grid-cols-2 md:gap-4 md:overflow-visible md:px-0 lg:mt-14 lg:grid-cols-12 lg:gap-5 [&::-webkit-scrollbar]:hidden">
          {FEATURED_PROJECTS.map((project, index) => {
            const wide = WIDE_SLOTS.has(index);
            return (
              <li
                key={project.slug}
                className={`w-[85%] shrink-0 snap-start md:w-auto ${
                  wide ? "lg:col-span-8" : "lg:col-span-4"
                }`}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className={`group relative block aspect-[4/5] overflow-hidden bg-ink lg:aspect-auto lg:h-[32rem] ${focusRing}`}
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes={
                      wide
                        ? "(min-width: 1024px) 66vw, (min-width: 768px) 50vw, 85vw"
                        : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 85vw"
                    }
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  {/* Caption scrim only where the caption sits. */}
                  <div
                    aria-hidden="true"
                    className="from-ink/85 via-ink/30 absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t to-transparent"
                  />

                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-5 lg:p-7">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-[-0.02em] text-paper lg:text-[1.75rem]">
                        {project.name}
                      </h3>
                      <p className="mt-1 text-sm tracking-tight text-paper/75">
                        {project.location}, {project.country}
                      </p>
                    </div>
                    <span
                      aria-hidden="true"
                      className="flex size-10 shrink-0 items-center justify-center border border-paper/40 text-paper transition-colors duration-200 group-hover:border-paper group-hover:bg-paper group-hover:text-ink"
                    >
                      <Arrow />
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>

        <AllProjectsLink className="mt-8 inline-flex sm:hidden" />
      </div>
    </section>
  );
}
