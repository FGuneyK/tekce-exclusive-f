import Image from "next/image";
import type { ReactNode } from "react";

/*
  The developer dashboard has no agreed design yet, so this is a
  representative interface over a photograph, in the same language as the
  panels elsewhere on the site. Mock data only; no counts or prices.
*/

// Unsplash photo-1761778371592-c39fe1148a94
const IMAGE =
  "https://images.unsplash.com/photo-1761778371592-c39fe1148a94?auto=format&fit=crop&w=2400&h=1500&q=80";

// A = available, R = reserved, S = sold.
const UNITS = "AARSAAARSSAARAASAAARSAAASAARAAAS".split("");
const unitStyle: Record<string, string> = {
  A: "border border-ink/25",
  R: "bg-ink/35",
  S: "bg-ink",
};

const STAGES = ["Enquiry", "Viewing", "Offer", "Contract", "Completed"];
const PIPELINE = [
  { unit: "B-204", stage: 0 },
  { unit: "A-112", stage: 1 },
  { unit: "C-307", stage: 2 },
  { unit: "A-301", stage: 3 },
];

const CHANNELS = [
  { name: "TEKCE", share: "w-[58%]" },
  { name: "Independent partners", share: "w-[42%]" },
];

const DOCUMENTS = ["Sales pack", "Price list", "Sales report"];

const CAPABILITIES = [
  { title: "Availability", text: "Every unit’s status, as it changes." },
  { title: "Pipeline", text: "Where each enquiry and transaction stands." },
  { title: "Channels", text: "Which partners are bringing buyers." },
  { title: "Documents", text: "Sales materials, price lists and reports in one place." },
];

function Module({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="border-b border-ink/10 p-4 sm:p-5 lg:odd:border-r">
      <p className="text-xs font-medium tracking-tight text-ink">{title}</p>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function DashboardPanel({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`border border-ink/10 bg-paper shadow-[0_16px_40px_-16px_rgba(28,34,72,0.45)] ${className}`}
    >
      <div className="flex h-10 items-center justify-between border-b border-ink/10 px-4 sm:px-5">
        <span className="text-xs font-medium tracking-tight text-ink">Developer dashboard</span>
        <span className="text-xs tracking-tight text-ink/50">Your project</span>
      </div>
      <div className="flex gap-6 border-b border-ink/10 px-4 sm:px-5">
        {["Overview", "Availability", "Pipeline", "Documents"].map((tab, index) => (
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

      <div className="grid lg:grid-cols-2 [&>*:last-child]:border-b-0 lg:[&>*:nth-last-child(-n+2)]:border-b-0">
        <Module title="Availability">
          <div className="grid grid-cols-8 gap-1">
            {UNITS.map((state, index) => (
              <span key={index} className={`block aspect-square ${unitStyle[state]}`} />
            ))}
          </div>
          <div className="mt-3 flex gap-4 text-xs tracking-tight text-ink/60">
            {[
              ["A", "Available"],
              ["R", "Reserved"],
              ["S", "Sold"],
            ].map(([state, label]) => (
              <span key={state} className="flex items-center gap-1.5">
                <span className={`block size-2 ${unitStyle[state]}`} />
                {label}
              </span>
            ))}
          </div>
        </Module>

        <Module title="Pipeline">
          <ul className="grid gap-2.5">
            {PIPELINE.map((entry) => (
              <li key={entry.unit} className="flex items-center justify-between gap-4">
                <span className="text-[13px] font-medium tracking-tight text-ink tabular-nums">
                  {entry.unit}
                </span>
                <span className="w-32">
                  <span className="flex gap-0.5">
                    {STAGES.map((stage, index) => (
                      <span
                        key={stage}
                        className={`block h-1 flex-1 ${index <= entry.stage ? "bg-ink" : "bg-ink/10"}`}
                      />
                    ))}
                  </span>
                  <span className="mt-1 block text-xs tracking-tight text-ink/60">
                    {STAGES[entry.stage]}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </Module>

        <Module title="Channels">
          <ul className="grid gap-3">
            {CHANNELS.map((channel) => (
              <li key={channel.name}>
                <span className="text-[13px] tracking-tight text-ink/70">{channel.name}</span>
                <span className="mt-1.5 block h-1.5 bg-ink/10">
                  <span className={`block h-full bg-ink ${channel.share}`} />
                </span>
              </li>
            ))}
          </ul>
        </Module>

        <Module title="Documents">
          <ul className="grid gap-2">
            {DOCUMENTS.map((document) => (
              <li
                key={document}
                className="flex items-center justify-between gap-4 text-[13px] tracking-tight"
              >
                <span className="text-ink/70">{document}</span>
                <span className="flex items-center gap-2 font-medium text-ink">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2.5 6.25L5 8.75L9.5 3.25"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="square"
                    />
                  </svg>
                  Current
                </span>
              </li>
            ))}
          </ul>
        </Module>
      </div>
    </div>
  );
}

export function DeveloperDashboard() {
  return (
    <section id="developer-dashboard" className="scroll-mt-28 bg-mist lg:scroll-mt-40">
      <div className="site-container section-y">
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-20">
          <h2 className="max-w-[18ch] text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-ink sm:text-[2.5rem] lg:text-5xl">
            Developer dashboard: your project, as it sells.
          </h2>
          <p className="mt-6 max-w-[28rem] shrink-0 text-[17px] leading-[1.6] text-ink/70 lg:mt-0 lg:pb-1.5">
            One view of availability, pipeline, channels and documents, so
            progress is visible without having to ask for it.
          </p>
        </div>

        <figure className="mt-14 lg:mt-20">
          <div className="relative">
            <div className="relative h-64 overflow-hidden bg-ink sm:h-96 lg:h-[44rem]">
              <Image
                src={IMAGE}
                alt=""
                fill
                sizes="(min-width: 1440px) 1360px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-ink/20" />
            </div>
            <DashboardPanel className="relative mx-4 -mt-20 sm:mx-8 lg:absolute lg:top-10 lg:bottom-10 lg:left-10 lg:mx-0 lg:mt-0 lg:w-[62%] lg:overflow-hidden" />
          </div>
          <figcaption className="mt-4 text-sm tracking-tight text-ink/50">
            Illustrative interface.
          </figcaption>
        </figure>

        <ul className="mt-12 grid gap-y-6 border-t border-ink/10 pt-8 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4">
          {CAPABILITIES.map((item) => (
            <li key={item.title}>
              <h3 className="text-lg font-semibold tracking-[-0.01em] text-ink">{item.title}</h3>
              <p className="mt-1 text-[15px] leading-[1.55] text-ink/65">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
