import Image from "next/image";
import Link from "next/link";
import { FEATURED_PROJECTS } from "@/lib/projects";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink";

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

/**
 * Proof for developers, kept compact: the homepage showcase's card treatment
 * (photograph, name, place) in a single even row, because here the projects
 * support the argument rather than lead it.
 */
export function ProjectsInNetwork() {
  return (
    <section id="projects" className="scroll-mt-14 bg-mist lg:scroll-mt-28">
      <div className="site-container section-y">
        <div className="flex items-end justify-between gap-8">
          <h2 className="max-w-[20ch] text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-ink sm:text-[2.5rem] lg:text-5xl">
            Already in the network.
          </h2>
          <AllProjectsLink className="hidden shrink-0 pb-1.5 sm:inline-flex" />
        </div>

        <ul className="-mx-5 mt-10 flex snap-x snap-mandatory scroll-pl-5 gap-3 overflow-x-auto px-5 [scrollbar-width:none] sm:-mx-8 sm:scroll-pl-8 sm:px-8 md:mx-0 md:grid md:grid-cols-2 md:gap-4 md:overflow-visible md:px-0 lg:mt-14 lg:grid-cols-4 lg:gap-5 [&::-webkit-scrollbar]:hidden">
          {FEATURED_PROJECTS.map((project) => (
            <li key={project.slug} className="w-[78%] shrink-0 snap-start md:w-auto">
              <Link
                href={`/projects/${project.slug}`}
                className={`group relative block aspect-[3/4] overflow-hidden bg-ink ${focusRing}`}
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 78vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div
                  aria-hidden="true"
                  className="from-ink/85 via-ink/30 absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t to-transparent"
                />

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.02em] text-paper">
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
          ))}
        </ul>

        <AllProjectsLink className="mt-8 inline-flex sm:hidden" />
      </div>
    </section>
  );
}
