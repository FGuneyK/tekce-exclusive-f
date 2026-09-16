import type { ReactNode } from "react";

/**
 * What the sales record does, limited to the verified model: registration,
 * protection, routing, stage tracking, transaction coordination and shared
 * reporting. The record itself is illustrative mock data.
 */
const ANNOTATIONS = [
  {
    title: "Registered at source",
    text: "The channel and the agency that introduced the client are recorded first.",
  },
  {
    title: "Protected",
    text: "The client relationship stays with the introducing agency through to closing.",
  },
  {
    title: "Routed",
    text: "Each enquiry reaches the right sales specialist, with partner support alongside.",
  },
  {
    title: "Tracked",
    text: "Every stage, from enquiry to completion, stays on the same record.",
  },
  {
    title: "Coordinated",
    text: "Offers, contracts and documents move through transaction coordination.",
  },
  {
    title: "Reported",
    text: "Developers follow progress through shared reporting.",
  },
];

const STAGES = ["Enquiry", "Viewing", "Offer", "Contract", "Completed"];
const CURRENT_STAGE = 2;

function Marker({ value }: { value: number }) {
  return (
    <span className="flex size-5 shrink-0 items-center justify-center bg-ink text-[11px] font-medium text-paper tabular-nums">
      {value}
    </span>
  );
}

function Check() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2.5 6.25L5 8.75L9.5 3.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

function Lock() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <rect x="2.25" y="5.25" width="7.5" height="5.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 5.25V3.75a2 2 0 0 1 4 0v1.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

const ROWS: { label: string; value: ReactNode }[] = [
  { label: "Source", value: "Independent partner" },
  {
    label: "Registered to",
    value: (
      <span className="flex items-center gap-2">
        <Lock />
        Partner agency · Protected
      </span>
    ),
  },
  { label: "Assigned to", value: "Sales specialist" },
  {
    label: "Stage",
    value: (
      <span className="flex items-center gap-3">
        <span className="flex w-24 gap-0.5">
          {STAGES.map((stage, index) => (
            <span
              key={stage}
              className={`block h-1 flex-1 ${index <= CURRENT_STAGE ? "bg-ink" : "bg-ink/10"}`}
            />
          ))}
        </span>
        {STAGES[CURRENT_STAGE]}
      </span>
    ),
  },
  {
    label: "Documents",
    value: (
      <span className="flex items-center gap-2">
        <Check />
        Reservation form ready
      </span>
    ),
  },
  {
    label: "Reporting",
    value: (
      <span className="flex items-center gap-2">
        <Check />
        Shared with developer
      </span>
    ),
  },
];

const ACTIVITY = ["Lead registered by partner agency", "Online viewing held", "Offer received"];

export function SalesCrm() {
  return (
    <section id="sales-crm" className="scroll-mt-28 lg:scroll-mt-40">
      <div className="site-container section-y">
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-20">
          <h2 className="max-w-[16ch] text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-ink sm:text-[2.5rem] lg:text-5xl">
            Sales &amp; CRM: one record for every sale.
          </h2>
          <p className="mt-6 max-w-[28rem] shrink-0 text-[17px] leading-[1.6] text-ink/70 lg:mt-0 lg:pb-1.5">
            Every enquiry becomes a record the moment it arrives: where it came
            from, who it belongs to and where it stands. Sales, partners and
            developers read from the same one.
          </p>
        </div>

        {/*
          An annotated record: numbered squares on the record's fields match
          the numbered notes beside it, so the interface explains itself.
        */}
        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-x-16">
          <div className="bg-mist p-4 sm:p-8 lg:col-span-7 lg:self-start lg:p-12">
            <div
              aria-hidden="true"
              className="border border-ink/10 bg-paper shadow-[0_16px_40px_-16px_rgba(28,34,72,0.45)]"
            >
              <div className="flex h-11 items-center justify-between border-b border-ink/10 px-4 sm:px-5">
                <span className="text-xs font-medium tracking-tight text-ink tabular-nums">
                  Lead LD-30771
                </span>
                <span className="text-xs tracking-tight text-ink/50">Your project · B-204</span>
              </div>

              <ul>
                {ROWS.map((row, index) => (
                  <li
                    key={row.label}
                    className="grid min-h-12 grid-cols-[1.25rem_5.5rem_minmax(0,1fr)] items-center gap-3 border-b border-ink/5 px-4 py-2.5 sm:grid-cols-[1.25rem_7rem_minmax(0,1fr)] sm:px-5"
                  >
                    <Marker value={index + 1} />
                    <span className="text-[13px] tracking-tight text-ink/60">{row.label}</span>
                    <span className="text-[13px] font-medium tracking-tight text-ink">{row.value}</span>
                  </li>
                ))}
              </ul>

              <p className="px-4 pt-4 text-xs font-medium tracking-tight text-ink/50 sm:px-5">Activity</p>
              <ol className="px-4 pt-2 pb-4 sm:px-5">
                {ACTIVITY.map((event, index) => (
                  <li
                    key={event}
                    className="flex items-center gap-3 py-1.5 text-[13px] tracking-tight text-ink"
                  >
                    <span className="block size-1.5 shrink-0 bg-ink" />
                    <span className={index === ACTIVITY.length - 1 ? "font-medium" : ""}>{event}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <ol className="border-b border-ink/10 lg:col-span-5">
            {ANNOTATIONS.map((note, index) => (
              <li key={note.title} className="flex gap-4 border-t border-ink/10 py-5">
                <span className="pt-1">
                  <Marker value={index + 1} />
                </span>
                <span>
                  <span className="block text-lg font-semibold tracking-[-0.01em] text-ink">
                    {note.title}
                  </span>
                  <span className="mt-1 block text-[15px] leading-[1.55] text-ink/65">{note.text}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
