import Image from "next/image";

// Unsplash photo-1675325152993-b3a5fa7f0356
const IMAGE =
  "https://images.unsplash.com/photo-1675325152993-b3a5fa7f0356?auto=format&fit=crop&w=2400&h=1030&q=80";

/** Viewing formats as listed on tekceexclusive.com/services/tele-property. */
const MEDIA = ["360° tour", "Video", "Photos", "Bird’s-eye"];

/**
 * Steps 01–04 follow the TeleProperty description on tekceexclusive.com;
 * step 05 follows TEKCE Group's published remote buying process.
 */
const STEPS = [
  {
    title: "Get informed",
    text: "Plans, pricing and availability are shared before anyone meets.",
  },
  {
    title: "Meet one-on-one",
    text: "Buyers and partners meet the people behind the project, before visiting it.",
  },
  {
    title: "See every angle",
    text: "360° tours, video, photographs and bird’s-eye footage of the project.",
  },
  {
    title: "Make an offer",
    text: "An offer can be made from wherever the buyer is.",
  },
  {
    title: "Complete at a distance",
    text: "Contracts shared remotely, and the title deed transferred by power of attorney where needed.",
  },
];

const pad = (value: number) => String(value).padStart(2, "0");

/** Representative live-session panel. Mock data only. */
function SessionPanel({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`border border-ink/10 bg-paper shadow-[0_16px_40px_-16px_rgba(28,34,72,0.45)] ${className}`}
    >
      <div className="flex h-10 items-center justify-between border-b border-ink/10 px-4">
        <span className="text-xs font-medium tracking-tight text-ink">TeleProperty</span>
        <span className="flex items-center gap-1.5 text-xs tracking-tight text-ink/60">
          <span className="block size-1.5 bg-accent" />
          Live session
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 p-4">
        {[
          { initials: "ML", role: "Buyer" },
          { initials: "SS", role: "Sales specialist" },
        ].map((person) => (
          <div key={person.role} className="flex h-20 flex-col justify-between bg-mist p-2.5">
            <span className="flex size-7 items-center justify-center bg-ink text-[11px] font-medium text-paper">
              {person.initials}
            </span>
            <span className="text-xs tracking-tight text-ink/70">{person.role}</span>
          </div>
        ))}
      </div>

      <div className="flex gap-4 border-y border-ink/10 px-4">
        {MEDIA.map((item, index) => (
          <span
            key={item}
            className={`-mb-px border-b-[1.5px] py-2.5 text-[12px] tracking-tight whitespace-nowrap ${
              index === 0 ? "border-ink font-medium text-ink" : "border-transparent text-ink/45"
            }`}
          >
            {item}
          </span>
        ))}
      </div>

      <ul>
        {["Floor plan", "Price list"].map((item) => (
          <li
            key={item}
            className="flex h-9 items-center justify-between border-b border-ink/5 px-4 text-[13px] tracking-tight"
          >
            <span className="text-ink/60">{item}</span>
            <span className="flex items-center gap-2 font-medium text-ink">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 6.25L5 8.75L9.5 3.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
              </svg>
              Shared
            </span>
          </li>
        ))}
      </ul>

      <div className="p-4">
        <span className="flex h-9 items-center justify-center bg-ink text-[13px] font-medium tracking-tight text-paper">
          Make an offer
        </span>
      </div>
    </div>
  );
}

export function TeleProperty() {
  return (
    <section id="teleproperty" className="scroll-mt-28 bg-mist lg:scroll-mt-40">
      <div className="site-container section-y">
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-20">
          <h2 className="max-w-[18ch] text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-ink sm:text-[2.5rem] lg:text-5xl">
            TeleProperty: meet the project before you travel.
          </h2>
          <p className="mt-6 max-w-[28rem] shrink-0 text-[17px] leading-[1.6] text-ink/70 lg:mt-0 lg:pb-1.5">
            Where buyers and partners meet one-on-one before visiting a
            project, get to know it from every angle, and make an offer.
          </p>
        </div>

        {/*
          A wide interior with the live session docked to its right edge, the
          way a viewing looks from the buyer's side. On smaller screens the
          panel hangs below the image.
        */}
        <div className="relative mt-14 lg:mt-20">
          <div className="relative h-72 overflow-hidden bg-ink sm:h-[28rem] lg:aspect-[21/9] lg:h-auto">
            <Image
              src={IMAGE}
              alt="A rendered interior: a timber-lined living space with floor-to-ceiling windows onto the sea."
              fill
              sizes="(min-width: 1440px) 1360px, 100vw"
              className="object-cover"
            />
          </div>
          <SessionPanel className="relative mx-4 -mt-24 sm:mr-8 sm:ml-auto sm:w-[22rem] lg:absolute lg:top-10 lg:right-10 lg:mx-0 lg:mt-0" />
        </div>

        <ol className="mt-14 grid gap-y-8 sm:grid-cols-2 sm:gap-x-8 lg:mt-16 lg:grid-cols-5">
          {STEPS.map((step, index) => (
            <li key={step.title} className="border-t border-ink/15 pt-5">
              <span className="block text-sm text-ink/40 tabular-nums">{pad(index + 1)}</span>
              <h3 className="mt-3 text-lg font-semibold tracking-[-0.01em] text-ink">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-[1.55] text-ink/65">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
