import Image from "next/image";

type Row = { topic: string; fragmented: string; structured: string };

const FRAGMENTED_LABEL = "Selling agency by agency";
const STRUCTURED_LABEL = "With TEKCE Exclusive";

/**
 * The right-hand column restates the verified distribution model (registered
 * leads, transparent commissions, shared reporting, local support in the four
 * markets). The left-hand column describes the common alternative in general
 * terms, not any named competitor.
 */
const ROWS: Row[] = [
  {
    topic: "Sales authority",
    fragmented: "Split across separate agreements, each negotiated on its own.",
    structured: "Held by one partner, accountable for the whole result.",
  },
  {
    topic: "Pricing",
    fragmented: "Drifts from listing to listing as agencies compete for the same buyer.",
    structured: "One price list, with live availability shared across the network.",
  },
  {
    topic: "Presentation",
    fragmented: "Every agency builds its own brochure, in its own words.",
    structured: "One sales pack, prepared once for international buyers.",
  },
  {
    topic: "Leads",
    fragmented: "The same buyer arrives through three doors, and three agencies claim them.",
    structured: "Leads are registered and protected, so every introduction has one owner.",
  },
  {
    topic: "Commissions",
    fragmented: "Terms differ by agency and are hard to compare.",
    structured: "A transparent commission structure across the whole network.",
  },
  {
    topic: "On the ground",
    fragmented: "Viewings and paperwork depend on whoever happened to make the sale.",
    structured: "TEKCE’s local infrastructure supports viewings, documentation and closing.",
  },
  {
    topic: "Visibility",
    fragmented: "Progress lives in inboxes, phone calls and spreadsheets.",
    structured: "Shared reporting on every lead and every transaction.",
  },
];

export function AgencyComparison() {
  return (
    <section id="comparison" className="scroll-mt-14 bg-mist lg:scroll-mt-28">
      <div className="site-container section-y">
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-20">
          <h2 className="max-w-[18ch] text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-ink sm:text-[2.5rem] lg:text-5xl">
            One counterpart instead of a dozen agencies.
          </h2>
          <p className="mt-6 max-w-[28rem] shrink-0 text-[17px] leading-[1.6] text-ink/70 lg:mt-0 lg:pb-1.5">
            Selling abroad often means signing agency after agency, each with
            its own price, its own materials and its own claim on the buyer.
            We replace that with a single structure.
          </p>
        </div>

        {/*
          Desktop reads as a table: the white column runs unbroken from its
          heading to the last row. Below lg each row stacks, and the column
          headings reappear as labels inside the row.
        */}
        <div className="mt-14 lg:mt-20">
          <div aria-hidden="true" className="hidden lg:grid lg:grid-cols-12 lg:gap-x-10">
            <p className="col-span-4 col-start-4 self-end pb-5 text-sm tracking-tight text-ink/50">
              {FRAGMENTED_LABEL}
            </p>
            <div className="col-span-5 bg-paper px-8 pt-8 pb-5">
              <Image
                src="/logo.svg"
                alt=""
                width={181}
                height={57}
                unoptimized
                className="h-7 w-auto"
              />
            </div>
          </div>

          <ul className="border-b border-ink/10">
            {ROWS.map((row) => (
              <li
                key={row.topic}
                className="grid gap-4 border-t border-ink/10 py-6 lg:grid-cols-12 lg:gap-x-10 lg:py-0"
              >
                <h3 className="text-lg font-semibold tracking-[-0.01em] text-ink lg:col-span-3 lg:py-6">
                  {row.topic}
                </h3>

                <div className="lg:col-span-4 lg:py-6">
                  <p className="text-[13px] tracking-tight text-ink/45 lg:sr-only">
                    {FRAGMENTED_LABEL}
                  </p>
                  <p className="mt-1 text-[15px] leading-[1.55] text-ink/60 lg:mt-0">
                    {row.fragmented}
                  </p>
                </div>

                <div className="bg-paper p-5 lg:col-span-5 lg:px-8 lg:py-6">
                  <p className="text-[13px] tracking-tight text-ink/45 lg:sr-only">
                    {STRUCTURED_LABEL}
                  </p>
                  <p className="mt-1 flex gap-3 text-[15px] leading-[1.55] font-medium tracking-tight text-ink lg:mt-0">
                    <span aria-hidden="true" className="mt-[8px] block size-1.5 shrink-0 bg-ink" />
                    {row.structured}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
