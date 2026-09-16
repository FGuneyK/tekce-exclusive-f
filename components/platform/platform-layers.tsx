import Link from "next/link";

type Surface = {
  audience: string;
  surface: string;
  href: string;
  text: string;
};

/**
 * The platform as a stack: three audiences, the surface each one works in,
 * then the sales record and the project data every surface shares.
 */
const SURFACES: Surface[] = [
  {
    audience: "Developers",
    surface: "Developer dashboard",
    href: "#developer-dashboard",
    text: "Availability, pipeline, channels and documents for their project.",
  },
  {
    audience: "Partner agencies",
    surface: "Partner platform",
    href: "#partner-platform",
    text: "Selected projects, materials, lead registration and commission status.",
  },
  {
    audience: "Buyers",
    surface: "TeleProperty",
    href: "#teleproperty",
    text: "One-on-one meetings, detailed viewings and offers before travelling.",
  },
];

const rowLabel = "text-[11px] font-medium tracking-[0.08em] text-ink/45 uppercase";

function Arrow() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
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

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

export function PlatformLayers() {
  return (
    <section id="how-it-works" className="scroll-mt-28 lg:scroll-mt-40">
      <div className="site-container section-y">
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-20">
          <h2 className="max-w-[16ch] text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-ink sm:text-[2.5rem] lg:text-5xl">
            Three audiences. One set of information.
          </h2>
          <p className="mt-6 max-w-[28rem] shrink-0 text-[17px] leading-[1.6] text-ink/70 lg:mt-0 lg:pb-1.5">
            Every surface of the platform draws on the same project data and
            the same sales record, so a price, a unit or a lead reads the same
            whoever is looking.
          </p>
        </div>

        {/*
          Read top to bottom like an architecture diagram. From lg the row
          names sit in a left column and each audience keeps its own column;
          the shared layers span all three. Phones read audience by audience,
          then the shared layers.
        */}
        <div className="mt-14 lg:mt-20">
          <div className="grid gap-y-3 lg:grid-flow-col lg:grid-cols-12 lg:grid-rows-[auto_auto] lg:gap-x-5 lg:gap-y-4">
            <p className={`${rowLabel} hidden lg:col-span-3 lg:flex lg:items-end lg:pb-1`}>
              Who uses it
            </p>
            <p className={`${rowLabel} hidden lg:col-span-3 lg:block lg:pt-6`}>Where they work</p>

            {SURFACES.map((item, index) => (
              <div key={item.surface} className="contents">
                <h3
                  className={`text-2xl font-semibold tracking-[-0.02em] text-ink lg:col-span-3 ${
                    index > 0 ? "mt-6 lg:mt-0" : ""
                  }`}
                >
                  {item.audience}
                </h3>
                <Link
                  href={item.href}
                  className={`group flex h-full flex-col justify-between gap-8 border border-ink/10 bg-mist p-5 transition-colors duration-150 hover:border-ink/30 lg:col-span-3 lg:p-6 ${focusRing}`}
                >
                  <span className="flex items-center justify-between gap-4 text-lg font-semibold tracking-[-0.01em] text-ink">
                    {item.surface}
                    <span className="transition-transform duration-200 ease-out group-hover:translate-x-0.5">
                      <Arrow />
                    </span>
                  </span>
                  <span className="text-[15px] leading-[1.55] text-ink/65">{item.text}</span>
                </Link>
              </div>
            ))}
          </div>

          <div aria-hidden="true" className="hidden h-10 lg:grid lg:grid-cols-12 lg:gap-x-5">
            {SURFACES.map((item, index) => (
              <span
                key={item.surface}
                className={`col-span-3 flex justify-center ${index === 0 ? "col-start-4" : ""}`}
              >
                <span className="block h-full w-px bg-ink/25" />
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-3 lg:mt-0 lg:grid-cols-12 lg:gap-x-5">
            <p className={`${rowLabel} lg:col-span-3 lg:flex lg:items-center`}>What runs underneath</p>
            <Link
              href="#sales-crm"
              className="group flex flex-col gap-3 bg-ink p-6 transition-colors duration-150 hover:bg-ink-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink lg:col-span-9 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:p-8"
            >
              <span className="flex items-center gap-3 text-xl font-semibold tracking-[-0.01em] text-paper">
                Sales &amp; CRM
                <span className="transition-transform duration-200 ease-out group-hover:translate-x-0.5">
                  <Arrow />
                </span>
              </span>
              <span className="text-[15px] leading-[1.55] text-paper/65">
                Lead registration · routing · pipeline · transaction coordination · reporting
              </span>
            </Link>
          </div>

          <div aria-hidden="true" className="hidden h-10 lg:grid lg:grid-cols-12 lg:gap-x-5">
            <span className="col-span-9 col-start-4 flex justify-center">
              <span className="block h-full w-px bg-ink/25" />
            </span>
          </div>

          <div className="mt-10 grid gap-3 lg:mt-0 lg:grid-cols-12 lg:gap-x-5">
            <p className={`${rowLabel} lg:col-span-3 lg:flex lg:items-center`}>What it all draws on</p>
            <div className="flex flex-col gap-3 border border-ink/15 p-6 lg:col-span-9 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:p-8">
              <h3 className="text-xl font-semibold tracking-[-0.01em] text-ink">Project data</h3>
              <p className="text-[15px] leading-[1.55] text-ink/65">
                Plans · pricing · sales materials · live availability
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
