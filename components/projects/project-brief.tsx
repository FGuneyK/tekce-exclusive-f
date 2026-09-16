import type { Project } from "@/lib/projects";

/**
 * The written account and the specification on the left, the checkable
 * numbers on the right. Both lists only carry what the developer publishes,
 * so they differ from project to project rather than forcing a fixed set.
 */
export function ProjectBrief({ project }: { project: Project }) {
  return (
    <section className="bg-mist">
      <div className="site-container section-y grid gap-10 lg:grid-cols-12 lg:gap-x-16">
        <div className="lg:col-span-7">
          <h2 className="max-w-[18ch] text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-ink sm:text-[2.5rem]">
            The project.
          </h2>

          <div className="mt-6 flex flex-col gap-4">
            {project.description.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-[62ch] text-[17px] leading-[1.7] text-ink/80"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {project.features.length > 0 && (
            <div className="mt-10 grid gap-8 border-t border-ink/12 pt-8 sm:grid-cols-2">
              {project.features.map((group) => (
                <div key={group.group}>
                  <h3 className="text-[13px] font-medium tracking-tight text-ink">
                    {group.group}
                  </h3>
                  <ul className="mt-3 flex flex-col gap-1.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-baseline gap-2.5 text-[15px] leading-[1.5] tracking-tight text-ink/75"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.45em] size-1 shrink-0 bg-ink/40"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        <dl className="lg:col-span-5 lg:pt-4">
          {project.facts.map((fact) => (
            <div
              key={fact.label}
              className="flex items-baseline justify-between gap-6 border-b border-ink/12 py-3 first:border-t first:border-ink/12"
            >
              <dt className="text-[15px] tracking-tight text-ink/60">
                {fact.label}
              </dt>
              <dd className="text-right text-[15px] font-medium tracking-tight text-ink tabular-nums">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
