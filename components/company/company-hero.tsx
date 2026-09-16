const SECTIONS = [
  { label: "About TEKCE Exclusive", href: "#about" },
  { label: "TEKCE Group", href: "#group" },
  { label: "How we got here", href: "#history" },
  { label: "Why we exist", href: "#perspective" },
  { label: "Business model", href: "#business-model" },
  { label: "Global network", href: "#network" },
  { label: "Values", href: "#values" },
  { label: "Contact", href: "#contact" },
];

const pad = (value: number) => String(value).padStart(2, "0");

function DownArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      width="10"
      height="14"
      viewBox="0 0 10 14"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M1 9L5 13L9 9M5 13V1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CompanyHero() {
  return (
    <section className="bg-ink">
      {/*
        A company page is read like a report, so the hero carries its contents:
        the statement on the left, an index of the page on the right. No
        photograph; the first image arrives with the story.
      */}
      <div className="site-container grid gap-14 pt-14 pb-16 sm:pt-16 lg:grid-cols-12 lg:items-end lg:gap-x-16 lg:pt-20 lg:pb-24">
        <div className="lg:col-span-7">
          <h1 className="max-w-[17ch] text-[2.75rem] leading-[1.03] font-bold tracking-[-0.035em] text-paper sm:text-[3.5rem] lg:text-[4rem] xl:text-[4.75rem]">
            We are the project sales platform of TEKCE Group.
          </h1>
          <p className="mt-7 max-w-[36rem] text-lg leading-[1.6] text-paper/75">
            TEKCE Exclusive takes real estate projects to international
            markets. We work with the developers who build them, the partner
            agencies who sell alongside us and the international buyers who
            invest in them, as part of a group that has sold property to
            international buyers since 2004.
          </p>
        </div>

        <nav aria-label="On this page" className="lg:col-span-4 lg:col-start-9">
          <p className="text-sm tracking-tight text-paper/45">On this page</p>
          <ol className="mt-4 border-b border-paper/15">
            {SECTIONS.map((section, index) => (
              <li key={section.href} className="border-t border-paper/15">
                <a
                  href={section.href}
                  className="group flex h-12 items-center gap-4 text-[15px] tracking-tight text-paper/75 transition-colors duration-150 hover:text-paper focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-paper"
                >
                  <span className="w-6 shrink-0 text-sm text-paper/35 tabular-nums">
                    {pad(index + 1)}
                  </span>
                  {section.label}
                  <DownArrow className="ml-auto opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100" />
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
}
