import Image from "next/image";

const STAGES = ["Enquiry", "Viewing", "Reserved", "Contract", "Completed"];

type Entry = { unit: string; channel: string; registered: string; stage: number };

/**
 * Illustrative mock report for an unnamed project. Unit references continue
 * the homepage "Pipeline" panel; dates and stages are invented for the
 * prototype and carry no prices.
 */
const PIPELINE: Entry[] = [
  { unit: "B-204", channel: "Independent partner", registered: "14 Sep", stage: 0 },
  { unit: "A-112", channel: "TEKCE", registered: "11 Sep", stage: 1 },
  { unit: "C-307", channel: "Independent partner", registered: "06 Sep", stage: 2 },
  { unit: "A-301", channel: "TEKCE", registered: "29 Aug", stage: 3 },
  { unit: "C-402", channel: "Independent partner", registered: "18 Aug", stage: 4 },
];

const TABS = ["Pipeline", "Channels", "Documents"];

const COVERS = [
  "Enquiries by channel and partner",
  "Viewings, reservations and contracts",
  "Transaction coordination through closing",
  "Market response, and how the strategy is adjusted",
];

// Unsplash photo-1751978515498-7e2c37973888
const IMAGE =
  "https://images.unsplash.com/photo-1751978515498-7e2c37973888?auto=format&fit=crop&w=1800&h=1300&q=80";

const desktopColumns = "sm:grid sm:grid-cols-[4.5rem_minmax(0,1fr)_5.5rem_11rem] sm:gap-6";

/** A larger sibling of DataPanel: same frame, header and row rhythm. */
function SalesReportPanel({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`border border-ink/10 bg-paper shadow-[0_16px_40px_-16px_rgba(28,34,72,0.45)] ${className}`}
    >
      <div className="flex h-10 items-center justify-between border-b border-ink/10 px-4 sm:px-5">
        <span className="text-xs font-medium tracking-tight text-ink">Sales report</span>
        <span className="text-xs tracking-tight text-ink/50">Updated 15 Sep, 09:40</span>
      </div>

      <div className="flex gap-6 border-b border-ink/10 px-4 sm:px-5">
        {TABS.map((tab, index) => (
          <span
            key={tab}
            className={`-mb-px border-b-[1.5px] py-2.5 text-[13px] tracking-tight ${
              index === 0 ? "border-ink font-medium text-ink" : "border-transparent text-ink/45"
            }`}
          >
            {tab}
          </span>
        ))}
      </div>

      <div
        className={`hidden h-9 items-center border-b border-ink/5 px-5 text-xs tracking-tight text-ink/45 ${desktopColumns}`}
      >
        <span>Unit</span>
        <span>Channel</span>
        <span>Registered</span>
        <span>Stage</span>
      </div>

      <ul>
        {PIPELINE.map((entry) => (
          <li
            key={entry.unit}
            className={`flex items-center justify-between gap-4 border-b border-ink/5 px-4 py-3 last:border-b-0 sm:h-[3.25rem] sm:items-center sm:px-5 sm:py-0 ${desktopColumns}`}
          >
            <span>
              <span className="block text-[13px] font-medium tracking-tight text-ink tabular-nums">
                {entry.unit}
              </span>
              <span className="mt-0.5 block text-xs tracking-tight text-ink/55 sm:hidden">
                {entry.channel}
              </span>
            </span>
            <span className="hidden truncate text-[13px] tracking-tight text-ink/70 sm:block">
              {entry.channel}
            </span>
            <span className="hidden text-[13px] tracking-tight text-ink/70 tabular-nums sm:block">
              {entry.registered}
            </span>
            <span className="block w-32 shrink-0 sm:w-auto">
              <span className="flex gap-0.5">
                {STAGES.map((stage, index) => (
                  <span
                    key={stage}
                    className={`block h-1 flex-1 ${index <= entry.stage ? "bg-ink" : "bg-ink/10"}`}
                  />
                ))}
              </span>
              <span className="mt-1.5 block text-xs tracking-tight text-ink/70">
                {STAGES[entry.stage]}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SalesReporting() {
  return (
    <section id="reporting" className="scroll-mt-14 bg-mist lg:scroll-mt-28">
      <div className="site-container section-y grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-x-16">
        <div className="lg:col-span-4">
          <h2 className="max-w-[14ch] text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-ink sm:text-[2.5rem] lg:text-5xl">
            You see every sale as it moves.
          </h2>
          <p className="mt-6 max-w-[28rem] text-[17px] leading-[1.6] text-ink/70">
            Reporting is part of the work, not a summary at the end of the
            month. Every enquiry is registered to the channel that brought it,
            and every transaction is followed through to closing.
          </p>

          <ul className="mt-10 max-w-[28rem]">
            {COVERS.map((item) => (
              <li
                key={item}
                className="flex gap-3 border-t border-ink/10 py-4 text-[15px] leading-snug font-medium tracking-tight text-ink"
              >
                <span aria-hidden="true" className="mt-[7px] block size-1.5 shrink-0 bg-ink" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/*
          The report sits over the photograph on desktop, as the homepage
          panels do. On smaller screens it hangs off the photograph's lower
          edge so the table keeps a usable width.
        */}
        <div className="relative lg:col-span-8">
          <div className="relative h-72 overflow-hidden bg-ink sm:h-96 lg:h-[40rem]">
            <Image
              src={IMAGE}
              alt="A concrete residential frame under construction beside a tower crane."
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-ink/10" />
          </div>
          <SalesReportPanel className="relative mx-4 -mt-24 sm:mx-8 lg:absolute lg:inset-x-10 lg:bottom-10 lg:mx-0 lg:mt-0" />
        </div>
      </div>
    </section>
  );
}
