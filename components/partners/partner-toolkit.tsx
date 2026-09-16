import Image from "next/image";
import type { ReactNode } from "react";
import { DataPanel, type PanelData } from "@/components/data-panel";
import { FEATURED_PROJECTS } from "@/lib/projects";

/*
  Each benefit is shown as the thing a partner would actually handle, rather
  than an icon. The four benefits are the verified partner offer; the small
  interfaces are illustrative mock data (no amounts, no real client records).
*/

const LEAD: PanelData = {
  title: "Lead registration",
  tag: "Confirmed",
  rows: [
    { label: "Client ref.", value: "PT-20418" },
    { label: "Registered to", value: "Your agency" },
    { label: "Status", value: "Protected", marker: "lock" },
  ],
};

const COMMISSION: PanelData = {
  title: "Commission",
  tag: "Your agency",
  rows: [
    { label: "Unit C-307", value: "Confirmed", marker: "check" },
    { label: "Unit A-112", value: "Confirmed", marker: "check" },
    { label: "Unit B-204", value: "In progress", marker: "square" },
  ],
};

// A = available, R = reserved, S = sold.
const UNITS = "AARSAAARSAAARSAAAARAASAA".split("");

const unitStyle: Record<string, string> = {
  A: "border border-ink/25",
  R: "bg-ink/35",
  S: "bg-ink",
};

function Frame({ children }: { children: ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className="flex h-64 flex-col justify-center border border-ink/10 bg-mist px-5"
    >
      {children}
    </div>
  );
}

function ProjectsArtifact() {
  return (
    <div className="border border-ink/10 bg-paper shadow-[0_16px_40px_-16px_rgba(28,34,72,0.45)]">
      <div className="flex h-10 items-center border-b border-ink/10 px-4">
        <span className="text-xs font-medium tracking-tight text-ink">Available to you</span>
      </div>
      <ul>
        {FEATURED_PROJECTS.slice(0, 3).map((project) => (
          <li
            key={project.slug}
            className="flex items-center gap-3 border-b border-ink/5 px-4 py-2 last:border-b-0"
          >
            <span className="relative block size-9 shrink-0 overflow-hidden bg-ink">
              <Image src={project.image} alt="" fill sizes="36px" className="object-cover" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-[13px] font-medium tracking-tight text-ink">
                {project.name}
              </span>
              <span className="block truncate text-xs tracking-tight text-ink/50">
                {project.location}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AvailabilityArtifact() {
  return (
    <div className="border border-ink/10 bg-paper shadow-[0_16px_40px_-16px_rgba(28,34,72,0.45)]">
      <div className="flex h-10 items-center justify-between border-b border-ink/10 px-4">
        <span className="text-xs font-medium tracking-tight text-ink">Availability</span>
        <span className="text-xs tracking-tight text-ink/50">Block A</span>
      </div>
      <div className="grid grid-cols-8 gap-1 p-4">
        {UNITS.map((state, index) => (
          <span key={index} className={`block aspect-square ${unitStyle[state]}`} />
        ))}
      </div>
      <div className="flex gap-4 border-t border-ink/5 px-4 py-2.5 text-xs tracking-tight text-ink/60">
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
    </div>
  );
}

const ITEMS: { title: string; text: string; artifact: ReactNode }[] = [
  {
    title: "Selected projects",
    text: "Projects chosen for the network and prepared before they reach you, so you only present what is ready to sell.",
    artifact: <ProjectsArtifact />,
  },
  {
    title: "Registered, protected leads",
    text: "Every client you register is recorded against your agency. The relationship stays with you.",
    artifact: <DataPanel panel={LEAD} />,
  },
  {
    title: "Transparent commission",
    text: "A transparent commission structure, so you know how a sale rewards you before you put the work in.",
    artifact: <DataPanel panel={COMMISSION} />,
  },
  {
    title: "Materials and live availability",
    text: "Project materials ready to share, and availability that is current when your client asks.",
    artifact: <AvailabilityArtifact />,
  },
];

export function PartnerToolkit() {
  return (
    <section id="toolkit" className="scroll-mt-14 lg:scroll-mt-28">
      <div className="site-container section-y">
        <h2 className="max-w-[20ch] text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-ink sm:text-[2.5rem] lg:text-5xl">
          Everything you need to sell a project you didn’t build.
        </h2>

        <ul className="mt-14 grid gap-12 sm:grid-cols-2 sm:gap-x-5 lg:mt-20 lg:grid-cols-4">
          {ITEMS.map((item) => (
            <li key={item.title}>
              <Frame>{item.artifact}</Frame>
              <h3 className="mt-6 text-xl font-semibold tracking-[-0.02em] text-ink">
                {item.title}
              </h3>
              <p className="mt-2 max-w-[24rem] text-[15px] leading-[1.6] text-ink/70">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
