type Stage = {
  number: string;
  title: string;
  summary: string;
  deliverables: string[];
};

/**
 * The same four stages as the homepage, opened up. Deliverables are taken
 * from approved homepage copy and the verified distribution model; nothing
 * here adds a service that has not been confirmed.
 */
const STAGES: Stage[] = [
  {
    number: "01",
    title: "Position",
    summary:
      "Before anything is published, we decide how the project should be understood abroad: who it is for, what it competes with and what it should cost.",
    deliverables: [
      "Market intelligence",
      "Product strategy",
      "Pricing",
      "A clear international proposition",
    ],
  },
  {
    number: "02",
    title: "Prepare",
    summary:
      "Drawings and data become material an agency in another country can sell from, without calling you to ask what a floor plan means.",
    deliverables: [
      "Sales content",
      "Project data",
      "Campaign assets",
      "Distribution-ready inventory",
    ],
  },
  {
    number: "03",
    title: "Distribute",
    summary:
      "The project goes live through two channels at once, both working within the same commercial logic.",
    deliverables: [
      "TEKCE, as strategic group partner",
      "Qualified independent sales partners",
      "Registered and protected leads",
      "Project materials and live availability for partners",
    ],
  },
  {
    number: "04",
    title: "Manage",
    summary:
      "Every enquiry is followed until it becomes a completed sale, and the strategy is refined as the market responds.",
    deliverables: [
      "Lead routing",
      "Partner support",
      "Transaction coordination",
      "Reporting and optimisation",
      "Viewings, documentation and closing support on the ground",
    ],
  },
];

const STAYS_WITH_YOU = [
  "The design and construction of the project",
  "Planning, permits and title",
  "Completion and delivery of the units",
];

export function ScopeOfWork() {
  return (
    <section id="scope" className="scroll-mt-14 lg:scroll-mt-28">
      <div className="site-container section-y grid gap-14 lg:grid-cols-12 lg:gap-x-16">
        {/* The left column holds still while the stages scroll past it. */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-40">
            <h2 className="max-w-[16ch] text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-ink sm:text-[2.5rem] lg:text-5xl">
              What we take on, and what stays with you.
            </h2>
            <p className="mt-6 max-w-[28rem] text-[17px] leading-[1.6] text-ink/70">
              You bring the project and the authority to sell it. We take on
              everything between that and a completed sale.
            </p>

            <div className="mt-10 max-w-[28rem] border border-ink/10 bg-mist px-6 pt-5 pb-2">
              <h3 className="text-base font-semibold tracking-tight text-ink">
                Stays with you
              </h3>
              <ul className="mt-3">
                {STAYS_WITH_YOU.map((item) => (
                  <li
                    key={item}
                    className="border-t border-ink/10 py-3 text-[15px] leading-snug tracking-tight text-ink/75"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <ol className="border-b border-ink/10 lg:col-span-8">
          {STAGES.map((stage) => (
            <li
              key={stage.number}
              className="grid gap-5 border-t border-ink/10 py-9 sm:grid-cols-8 sm:gap-x-8 lg:py-12"
            >
              <h3 className="flex items-baseline gap-3 text-[1.75rem] leading-none font-semibold tracking-[-0.025em] text-ink sm:col-span-3 lg:text-[2.25rem]">
                <span className="text-sm font-medium tracking-normal text-ink/40 tabular-nums">
                  {stage.number}
                </span>
                {stage.title}
              </h3>

              <div className="sm:col-span-5">
                <p className="max-w-[34rem] text-[17px] leading-[1.6] text-ink/70">
                  {stage.summary}
                </p>
                <ul className="mt-6 grid gap-y-2.5">
                  {stage.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-[15px] leading-snug font-medium tracking-tight text-ink"
                    >
                      <span aria-hidden="true" className="mt-[7px] block size-1.5 shrink-0 bg-ink" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
