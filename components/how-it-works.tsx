import Image from "next/image";
import { DataPanel, type PanelData } from "@/components/data-panel";

type Step = {
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  span: "wide" | "narrow";
  panel: PanelData;
};

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&h=1000&q=80`;

/**
 * The floating panels illustrate what each stage produces. Their contents are
 * prototype mock data for an unnamed project, not TEKCE figures.
 */
const STEPS: Step[] = [
  {
    number: "01",
    title: "Position",
    description:
      "Market intelligence, product strategy, pricing and a clear international proposition.",
    image: unsplash("1777138388622-8f0411f9b71f"),
    alt: "Tower cranes over a residential district under construction at dusk.",
    span: "wide",
    panel: {
      title: "Price positioning",
      tag: "Draft",
      rows: [
        { label: "1 bedroom", value: "from €245,000" },
        { label: "2 bedroom", value: "from €385,000" },
        { label: "Penthouse", value: "from €920,000" },
      ],
    },
  },
  {
    number: "02",
    title: "Prepare",
    description:
      "Sales content, project data, campaign assets and a distribution-ready inventory.",
    image: unsplash("1724582586529-62622e50c0b3"),
    alt: "A calm, minimal living room with floor-to-ceiling windows.",
    span: "narrow",
    panel: {
      title: "Sales pack",
      rows: [
        { label: "Floor plans", value: "Ready", marker: "check" },
        { label: "Photography & CGI", value: "Ready", marker: "check" },
        { label: "Price list", value: "Ready", marker: "check" },
        { label: "Translations", value: "12 languages", marker: "check" },
      ],
    },
  },
  {
    number: "03",
    title: "Distribute",
    description:
      "Immediate reach through TEKCE and qualified independent sales partners.",
    image: unsplash("1505522606057-9738978fd326"),
    alt: "Aerial view of a waterfront residential development and marina.",
    span: "narrow",
    panel: {
      title: "Distribution",
      rows: [
        { label: "TEKCE", value: "Live", marker: "square" },
        { label: "Sales partners", value: "Live", marker: "square" },
        { label: "Availability", value: "Synced", marker: "square" },
      ],
    },
  },
  {
    number: "04",
    title: "Manage",
    description:
      "Lead routing, partner support, transaction coordination, reporting and optimisation.",
    image: unsplash("1614595737476-42487331b8a1"),
    alt: "A completed concrete residential building with bronze shutters in late sun.",
    span: "wide",
    panel: {
      title: "Pipeline",
      tag: "This week",
      rows: [
        { label: "Unit B-204", value: "Enquiry routed", marker: "square" },
        { label: "Unit A-112", value: "Viewing booked", marker: "square" },
        { label: "Unit C-307", value: "Reserved", marker: "square" },
      ],
    },
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-14 lg:scroll-mt-28 bg-mist">
      <div className="site-container section-y">
        <h2 className="max-w-[22ch] text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-ink sm:text-[2.5rem] lg:text-5xl">
          One accountable partner from positioning to completed sales.
        </h2>

        <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-12 lg:gap-5">
          {STEPS.map((step) => (
            <li
              key={step.number}
              className={`flex flex-col border border-ink/10 bg-paper ${
                step.span === "wide" ? "lg:col-span-7" : "lg:col-span-5"
              }`}
            >
              <div className="relative h-72 overflow-hidden lg:h-[26rem]">
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  sizes={
                    step.span === "wide"
                      ? "(min-width: 1024px) 58vw, (min-width: 768px) 50vw, 100vw"
                      : "(min-width: 1024px) 42vw, (min-width: 768px) 50vw, 100vw"
                  }
                  className="object-cover"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-ink/10" />
                <DataPanel
                  panel={step.panel}
                  className="absolute bottom-5 left-5 w-[min(19rem,calc(100%-2.5rem))] lg:bottom-6 lg:left-6"
                />
              </div>

              {/*
                Kept deliberately shallow so the photograph dominates the card:
                from sm up, title and description share one band.
              */}
              <div className="flex flex-1 flex-col gap-1.5 border-t border-ink/10 px-5 py-4 sm:flex-row sm:items-baseline sm:gap-6 lg:px-6 lg:py-5">
                <h3 className="flex shrink-0 items-baseline gap-2.5 text-xl font-semibold tracking-[-0.02em] text-ink sm:w-36">
                  <span className="text-sm font-medium text-ink/40 tabular-nums">
                    {step.number}
                  </span>
                  {step.title}
                </h3>
                <p className="text-[15px] leading-[1.55] text-ink/70">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
