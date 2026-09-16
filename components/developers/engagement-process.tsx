type Step = { title: string; text: string };

/**
 * How an engagement begins. Deliberately free of durations and commercial
 * terms (exclusivity, fees), which are not yet confirmed.
 */
const STEPS: Step[] = [
  {
    title: "Send the essentials",
    text: "Location, scale, stage and timeline. That is enough for us to understand what we are looking at.",
  },
  {
    title: "Talk positioning",
    text: "The first conversation is about who the project is for internationally, and how it should be presented to them.",
  },
  {
    title: "Agree the mandate",
    text: "The scope of our sales authority and the way we work together are set out in writing.",
  },
  {
    title: "Prepare for market",
    text: "Pricing, the sales pack and inventory are built before any partner sees the project.",
  },
  {
    title: "Launch into the network",
    text: "TEKCE and independent partners receive the project together, and reporting begins.",
  },
];

const HAVE_READY = [
  "Site location and masterplan",
  "Unit mix, floor plans and specifications",
  "Construction stage and expected completion",
  "Planning and permit status",
  "Renders, photography or film",
  "Current pricing, if already set",
  "Any existing sales or agency agreements",
  "Your timeline for launch",
];

const pad = (value: number) => String(value).padStart(2, "0");

export function EngagementProcess() {
  return (
    <section id="process" className="scroll-mt-14 bg-ink lg:scroll-mt-28">
      <div className="site-container section-y">
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-20">
          <h2 className="max-w-[18ch] text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-paper sm:text-[2.5rem] lg:text-5xl">
            From first conversation to first sale.
          </h2>
          <p className="mt-6 max-w-[28rem] shrink-0 text-[17px] leading-[1.6] text-paper/70 lg:mt-0 lg:pb-1.5">
            It starts with a few essentials and a conversation about
            positioning. Nothing reaches the market until the groundwork is
            done.
          </p>
        </div>

        {/*
          One rule carries the sequence: a vertical line on phones, a
          horizontal one from lg. Each step is a node on it; the last node is
          brand red, as the buyer node is in the distribution diagram.
        */}
        <ol className="mt-14 grid lg:mt-20 lg:grid-cols-5">
          {STEPS.map((step, index) => {
            const last = index === STEPS.length - 1;
            return (
              <li
                key={step.title}
                className="relative border-l border-paper/15 pb-10 pl-7 last:pb-0 lg:border-t lg:border-l-0 lg:pt-8 lg:pr-8 lg:pb-0 lg:pl-0"
              >
                <span
                  aria-hidden="true"
                  className={`absolute top-1.5 -left-[4.5px] block size-2 lg:-top-[4.5px] lg:left-0 ${
                    last ? "bg-accent" : "bg-paper"
                  }`}
                />
                <span className="block text-sm text-paper/40 tabular-nums">{pad(index + 1)}</span>
                <h3 className="mt-3 text-xl leading-snug font-semibold tracking-[-0.02em] text-paper">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-[26rem] text-[15px] leading-[1.6] text-paper/65">
                  {step.text}
                </p>
              </li>
            );
          })}
        </ol>

        <div className="mt-20 grid gap-8 border-t border-paper/10 pt-12 lg:mt-24 lg:grid-cols-12 lg:gap-x-16 lg:pt-16">
          <div className="lg:col-span-4">
            <h3 className="text-2xl leading-[1.2] font-semibold tracking-[-0.02em] text-paper lg:text-[1.75rem]">
              Helpful to have ready
            </h3>
            <p className="mt-4 max-w-[24rem] text-[15px] leading-[1.6] text-paper/65">
              Not all of it is needed for a first conversation, but each item
              makes that conversation more useful.
            </p>
          </div>

          <ul className="grid border-b border-paper/10 sm:grid-cols-2 sm:gap-x-8 lg:col-span-8">
            {HAVE_READY.map((item) => (
              <li
                key={item}
                className="flex gap-3 border-t border-paper/10 py-4 text-[15px] leading-snug font-medium tracking-tight text-paper"
              >
                <span aria-hidden="true" className="mt-[7px] block size-1.5 shrink-0 bg-paper/60" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
