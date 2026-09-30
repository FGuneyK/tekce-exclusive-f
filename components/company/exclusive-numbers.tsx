/**
 * TEKCE Exclusive in figures, as supplied by the user on 2026-09-29. The
 * no-statistics rule is lifted for this section only, at the user's request.
 */
const FIGURES = [
  { value: "300,000+", label: "Customers in our live network" },
  { value: "Millions", label: "Site visitors every day" },
  { value: "160,000+", label: "Clients" },
  { value: "400+", label: "Completed transactions" },
  { value: "30+", label: "Languages spoken by our team" },
];

export function ExclusiveNumbers() {
  return (
    <section id="numbers" className="scroll-mt-14 bg-mist lg:scroll-mt-28">
      <div className="site-container section-y">
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-20">
          <h2 className="max-w-[16ch] text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-ink sm:text-[2.5rem] lg:text-5xl">
            TEKCE Exclusive in numbers.
          </h2>
          <p className="mt-6 max-w-[28rem] shrink-0 text-[17px] leading-[1.6] text-ink/70 lg:mt-0 lg:pb-1.5">
            The audience, the clients and the languages a project reaches
            the day it joins TEKCE Exclusive.
          </p>
        </div>

        {/*
          One even row from lg. Below it the lead figure takes the full width
          and the other four pair up, so no cell is left empty.
        */}
        <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-8 lg:mt-20 lg:grid-cols-5 lg:gap-x-6">
          {FIGURES.map((figure) => (
            <div
              key={figure.label}
              className="flex flex-col-reverse justify-end border-t border-ink pt-5 first:col-span-2 lg:first:col-span-1"
            >
              <dt className="mt-2 text-[15px] leading-snug tracking-tight text-ink/60">
                {figure.label}
              </dt>
              <dd className="text-[2.5rem] leading-none font-bold tracking-[-0.035em] text-ink tabular-nums sm:text-5xl lg:text-[2rem] xl:text-[2.5rem]">
                {figure.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
