import Image from "next/image";
import Link from "next/link";
import { PROJECTS, summaryOf, type Project } from "@/lib/projects";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink";

const euro = (value: number) =>
  `€${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

/**
 * The rest of the list, with the same market first — the most likely next
 * click from a project page.
 */
export function MoreProjects({ current }: { current: Project }) {
  const others = PROJECTS.filter(
    (project) => project.slug !== current.slug,
  ).sort((a, b) => Number(b.market === current.market) - Number(a.market === current.market));

  return (
    <section>
      <div className="site-container section-y">
        <div className="flex items-end justify-between gap-8">
          <h2 className="text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-ink sm:text-[2.5rem]">
            The rest of the list.
          </h2>
          <Link
            href="/projects"
            className={`hidden shrink-0 pb-1.5 text-sm font-medium tracking-tight text-ink sm:inline-flex ${focusRing}`}
          >
            All projects
          </Link>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-3">
          {others.map((project) => {
            const { available, price } = summaryOf(project);
            return (
              <li key={project.slug}>
                <Link
                  href={`/projects/${project.slug}`}
                  className={`group block ${focusRing}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      sizes="(min-width: 640px) 30vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="border-b border-ink/10 pt-4 pb-4">
                    <h3 className="text-lg font-semibold tracking-[-0.02em] text-ink">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-[15px] tracking-tight text-ink/60">
                      {project.location}, {project.country}
                    </p>
                    <p className="mt-3 text-[15px] tracking-tight text-ink tabular-nums">
                      From {euro(price[0])}
                      <span className="text-ink/50">
                        {" · "}
                        {available} available
                      </span>
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/projects"
          className={`mt-8 inline-flex text-sm font-medium tracking-tight text-ink sm:hidden ${focusRing}`}
        >
          All projects
        </Link>
      </div>
    </section>
  );
}
