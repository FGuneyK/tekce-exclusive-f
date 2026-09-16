import Image from "next/image";
import Link from "next/link";
import { FEATURED_PROJECTS } from "@/lib/projects";
import { LOGIN } from "@/lib/navigation";
import { darkButton } from "@/lib/ui";

/*
  The partner platform has no agreed design yet. The features listed are
  the verified partner offer, and an agent portal exists
  (agents.tekceexclusive.com); the two panels are representative only.
*/

const FEATURES = [
  "Selected projects with materials and live availability",
  "Lead registration and client protection",
  "Commission status under a transparent structure",
  "Transaction and closing support",
];

const panelFrame = "border border-ink/10 bg-paper shadow-[0_24px_48px_-20px_rgba(0,0,0,0.6)]";

function ProjectsPanel({ className = "" }: { className?: string }) {
  return (
    <div className={`${panelFrame} ${className}`}>
      <div className="flex h-10 items-center justify-between border-b border-ink/10 px-4 sm:px-5">
        <span className="text-xs font-medium tracking-tight text-ink">Projects</span>
        <span className="text-xs tracking-tight text-ink/50">Available to your agency</span>
      </div>
      <ul>
        {FEATURED_PROJECTS.map((project) => (
          <li
            key={project.slug}
            className="flex items-center gap-3 border-b border-ink/5 px-4 py-2.5 last:border-b-0 sm:px-5"
          >
            <span className="relative block size-10 shrink-0 overflow-hidden bg-ink">
              <Image src={project.image} alt="" fill sizes="40px" className="object-cover" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[13px] font-medium tracking-tight text-ink">
                {project.name}
              </span>
              <span className="block truncate text-xs tracking-tight text-ink/50">
                {project.location}, {project.country}
              </span>
            </span>
            <span className="hidden text-xs tracking-tight text-ink/60 sm:block">Materials</span>
            <span className="flex items-center gap-1.5 text-xs font-medium tracking-tight text-ink">
              <span className="block size-1.5 bg-ink" />
              Live
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RegisterPanel({ className = "" }: { className?: string }) {
  const fields = [
    { label: "Client", value: "M. Laurent" },
    { label: "Project", value: FEATURED_PROJECTS[2]?.name ?? "" },
    { label: "Agency", value: "Your agency" },
  ];

  return (
    <div className={`${panelFrame} ${className}`}>
      <div className="flex h-10 items-center border-b border-ink/10 px-4">
        <span className="text-xs font-medium tracking-tight text-ink">Register a client</span>
      </div>
      <div className="grid gap-2.5 p-4">
        {fields.map((field) => (
          <div key={field.label}>
            <span className="block text-[11px] tracking-tight text-ink/50">{field.label}</span>
            <span className="mt-1 flex h-8 items-center border border-ink/15 px-2.5 text-[13px] tracking-tight text-ink">
              {field.value}
            </span>
          </div>
        ))}
        <span className="mt-1 flex h-9 items-center justify-center gap-2 bg-ink text-[13px] font-medium tracking-tight text-paper">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <rect x="2.25" y="5.25" width="7.5" height="5.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M4 5.25V3.75a2 2 0 0 1 4 0v1.5" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          Registered and protected
        </span>
      </div>
    </div>
  );
}

export function PartnerPlatform() {
  return (
    <section id="partner-platform" className="scroll-mt-28 bg-ink lg:scroll-mt-40">
      <div className="site-container section-y grid gap-14 lg:grid-cols-12 lg:gap-x-16">
        <div className="lg:col-span-5">
          <h2 className="max-w-[16ch] text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-paper sm:text-[2.5rem] lg:text-5xl">
            Partner platform: the network, in one login.
          </h2>
          <p className="mt-6 max-w-[28rem] text-[17px] leading-[1.6] text-paper/70">
            Partner agencies work from the same projects, prices and
            availability as everyone else in the network, and register their
            clients in the same place.
          </p>

          <ul className="mt-10 max-w-[28rem] border-b border-paper/10">
            {FEATURES.map((feature) => (
              <li
                key={feature}
                className="flex gap-3 border-t border-paper/10 py-4 text-[15px] leading-snug font-medium tracking-tight text-paper"
              >
                <span aria-hidden="true" className="mt-[7px] block size-1.5 shrink-0 bg-paper/60" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/partners" className={darkButton.primary}>
              Become a Partner
            </Link>
            <Link href={LOGIN.href} className={darkButton.secondary}>
              {LOGIN.label}
            </Link>
          </div>
        </div>

        {/*
          A stage rather than a photograph: the wide projects view with the
          narrow registration form overlapping it, as a partner would move
          between the two.
        */}
        <figure className="lg:col-span-7">
          <div
            aria-hidden="true"
            className="relative border border-paper/10 bg-ink-deep p-4 sm:p-8 lg:min-h-[36rem] lg:p-10"
          >
            <ProjectsPanel className="lg:w-[82%]" />
            <RegisterPanel className="mt-4 sm:ml-auto sm:w-[18rem] lg:absolute lg:right-10 lg:bottom-10 lg:mt-0" />
          </div>
          <figcaption className="mt-4 text-sm tracking-tight text-paper/50">
            Illustrative interface.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
