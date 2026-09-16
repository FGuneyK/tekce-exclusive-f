"use client";

import { useRef, useState, type KeyboardEvent } from "react";

type Step = {
  title: string;
  text: string;
  status: string;
  marker: "square" | "lock" | "check";
  log: { date: string; event: string };
};

/**
 * One illustrative client moving through the network. The record (reference,
 * dates) is mock data; the sequence — registration, protection, local support,
 * closing and commission — is the verified partner offer.
 */
const STEPS: Step[] = [
  {
    title: "Register the client",
    text: "Record the client and the project they are interested in. Registration comes first, before anything else happens.",
    status: "Submitted",
    marker: "square",
    log: { date: "15 Sep", event: "Client registered by your agency" },
  },
  {
    title: "Protection confirmed",
    text: "The lead is recorded against your agency. From here, the client relationship stays with you, whichever channel is involved.",
    status: "Protected",
    marker: "lock",
    log: { date: "15 Sep", event: "Registration confirmed, lead protected" },
  },
  {
    title: "Viewing and documents",
    text: "When your client travels, TEKCE’s local infrastructure supports the viewing, the documentation and the steps towards closing.",
    status: "Viewing booked",
    marker: "lock",
    log: { date: "03 Oct", event: "Viewing in Altea, supported locally" },
  },
  {
    title: "Closing and commission",
    text: "Transaction and closing support runs through to completion, and your commission follows under the transparent structure agreed with you.",
    status: "Completed",
    marker: "check",
    log: { date: "21 Nov", event: "Sale completed, commission confirmed" },
  },
];

const pad = (value: number) => String(value).padStart(2, "0");

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

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

function StatusMarker({ type }: { type: Step["marker"] }) {
  if (type === "lock") {
    return (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <rect x="2.25" y="5.25" width="7.5" height="5.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 5.25V3.75a2 2 0 0 1 4 0v1.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }
  if (type === "check") {
    return (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path d="M2.5 6.25L5 8.75L9.5 3.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
      </svg>
    );
  }
  return <span className="block size-1.5 bg-ink" aria-hidden="true" />;
}

/** The registration record as it stands at the selected step, with its history. */
function RecordPanel({ active, className = "" }: { active: number; className?: string }) {
  const current = STEPS[active];
  const rows = [
    { label: "Client ref.", value: "PT-20418" },
    { label: "Project", value: "Viva Altea Beach" },
    { label: "Registered to", value: "Your agency" },
  ];

  return (
    <div
      aria-hidden="true"
      className={`self-start border border-ink/10 bg-paper shadow-[0_16px_40px_-16px_rgba(28,34,72,0.45)] ${className}`}
    >
      <div className="flex h-10 items-center justify-between border-b border-ink/10 px-4 sm:px-5">
        <span className="text-xs font-medium tracking-tight text-ink">Lead registration</span>
        <span className="text-xs tracking-tight text-ink/50">Your agency</span>
      </div>

      <ul>
        {rows.map((row) => (
          <li
            key={row.label}
            className="flex h-10 items-center justify-between gap-4 border-b border-ink/5 px-4 sm:px-5"
          >
            <span className="text-[13px] tracking-tight text-ink/60">{row.label}</span>
            <span className="text-[13px] font-medium tracking-tight text-ink">{row.value}</span>
          </li>
        ))}
        <li className="flex h-10 items-center justify-between gap-4 border-b border-ink/10 px-4 sm:px-5">
          <span className="text-[13px] tracking-tight text-ink/60">Status</span>
          <span className="flex items-center gap-2 text-[13px] font-medium tracking-tight text-ink">
            <StatusMarker type={current.marker} />
            {current.status}
          </span>
        </li>
      </ul>

      <p className="px-4 pt-4 text-xs font-medium tracking-tight text-ink/50 sm:px-5">Activity</p>
      <ol className="px-4 pt-2 pb-4 sm:px-5">
        {STEPS.map((step, index) => {
          const done = index <= active;
          return (
            <li
              key={step.title}
              className={`flex items-baseline gap-3 py-1.5 text-[13px] tracking-tight transition-colors duration-300 ${
                done ? "text-ink" : "text-ink/30"
              }`}
            >
              <span
                className={`block size-1.5 shrink-0 self-center transition-colors duration-300 ${
                  done ? "bg-ink" : "bg-ink/15"
                }`}
              />
              <span className="w-12 shrink-0 text-ink/50 tabular-nums">{done ? step.log.date : ""}</span>
              <span className={done && index === active ? "font-medium" : ""}>{step.log.event}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export function LeadRegistration() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const select = (index: number, moveFocus = false) => {
    const next = (index + STEPS.length) % STEPS.length;
    setActive(next);
    if (moveFocus) tabs.current[next]?.focus();
  };

  const onTabKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const targets: Record<string, number> = {
      ArrowRight: active + 1,
      ArrowLeft: active - 1,
      Home: 0,
      End: STEPS.length - 1,
    };
    if (!(event.key in targets)) return;
    event.preventDefault();
    select(targets[event.key], true);
  };

  const current = STEPS[active];

  return (
    <section id="registration" className="scroll-mt-14 bg-mist lg:scroll-mt-28">
      <div className="site-container section-y">
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-20">
          <h2 className="max-w-[16ch] text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-ink sm:text-[2.5rem] lg:text-5xl">
            How a client stays yours.
          </h2>
          <p className="mt-6 max-w-[28rem] shrink-0 text-[17px] leading-[1.6] text-ink/70 lg:mt-0 lg:pb-1.5">
            Follow one registration from the first form to the completed sale.
            The record changes at every step; who the client belongs to does
            not.
          </p>
        </div>

        {/*
          A horizontal progress rail doubles as the tab list: every step up to
          the selected one is drawn in ink, so the rail reads as progress.
        */}
        <div
          role="tablist"
          aria-label="A registration, step by step"
          onKeyDown={onTabKeyDown}
          className="mt-14 grid grid-cols-2 gap-x-4 lg:mt-20 lg:grid-cols-4 lg:gap-x-5"
        >
          {STEPS.map((step, index) => {
            const selected = index === active;
            return (
              <button
                key={step.title}
                ref={(element) => {
                  tabs.current[index] = element;
                }}
                id={`registration-tab-${index}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="registration-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => select(index)}
                className={`group flex flex-col items-start gap-1 border-t-2 pt-4 pb-5 text-left transition-colors duration-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ink ${
                  index <= active ? "border-ink" : "border-ink/15"
                }`}
              >
                <span
                  className={`text-sm tabular-nums transition-colors duration-150 ${
                    selected ? "text-ink" : "text-ink/40"
                  }`}
                >
                  {pad(index + 1)}
                </span>
                <span
                  className={`text-[15px] leading-snug tracking-tight transition-colors duration-150 sm:text-base ${
                    selected ? "font-medium text-ink" : "text-ink/55 group-hover:text-ink/85"
                  }`}
                >
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        <div
          id="registration-panel"
          role="tabpanel"
          aria-labelledby={`registration-tab-${active}`}
          className="mt-8 grid gap-10 lg:mt-12 lg:grid-cols-12 lg:gap-x-16"
        >
          <div className="flex flex-col lg:col-span-5">
            <h3 className="text-[1.75rem] leading-[1.15] font-semibold tracking-[-0.02em] text-ink lg:text-[2.25rem]">
              {current.title}
            </h3>
            <p className="mt-5 max-w-[30rem] text-lg leading-[1.65] text-ink/70">
              {current.text}
            </p>

            <div className="mt-8 flex gap-2 lg:mt-auto lg:pt-10">
              <button
                type="button"
                aria-label="Previous step"
                onClick={() => select(active - 1)}
                className={`flex size-10 items-center justify-center border border-ink/20 text-ink transition-colors duration-150 hover:border-ink hover:bg-ink hover:text-paper ${focusRing}`}
              >
                <Arrow className="rotate-180" />
              </button>
              <button
                type="button"
                aria-label="Next step"
                onClick={() => select(active + 1)}
                className={`flex size-10 items-center justify-center border border-ink/20 text-ink transition-colors duration-150 hover:border-ink hover:bg-ink hover:text-paper ${focusRing}`}
              >
                <Arrow />
              </button>
            </div>
          </div>

          <RecordPanel active={active} className="lg:col-span-7" />
        </div>
      </div>
    </section>
  );
}
