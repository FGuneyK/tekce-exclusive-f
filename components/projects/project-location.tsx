import type { Project } from "@/lib/projects";

/** 0 km means the project is in it; under a kilometre reads better in metres. */
const distance = (km: number) => {
  if (km === 0) return "On the doorstep";
  if (km < 1) return `${Math.round(km * 1000)} m`;
  return `${km} km`;
};

export function ProjectLocation({ project }: { project: Project }) {
  return (
    <section className="bg-ink">
      <div className="site-container section-y grid gap-10 lg:grid-cols-12 lg:gap-x-16">
        <div className="lg:col-span-6">
          <h2 className="max-w-[16ch] text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-paper sm:text-[2.5rem]">
            Where it is.
          </h2>

          <div className="mt-8 flex flex-col gap-5">
            {project.locationNote.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-[54ch] text-[17px] leading-[1.7] text-paper/75"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/*
          The developer's own distance list. It is the part of a location
          description a buyer actually checks, so it is set as data rather
          than buried in the prose.
        */}
        <dl className="grid gap-x-10 sm:grid-cols-2 lg:col-span-6 lg:pt-3">
          {project.nearby.map((place) => (
            <div
              key={place.label}
              className="flex items-baseline justify-between gap-6 border-b border-paper/15 py-3"
            >
              <dt className="text-[15px] tracking-tight text-paper/60">
                {place.label}
              </dt>
              <dd className="text-right text-[15px] font-medium tracking-tight text-paper tabular-nums">
                {distance(place.km)}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
