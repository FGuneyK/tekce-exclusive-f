type Lane = {
  role: string;
  party: string;
  note?: string;
  platform?: boolean;
  blocks: { label: string; items: string[] }[];
};

/**
 * The distribution model supplied by the user (2026-09-14), read as an
 * exchange: what each party brings and what it receives. No revenue or fee
 * terms, which are not confirmed.
 */
const LANES: Lane[] = [
  {
    role: "Supply",
    party: "Developers",
    blocks: [
      { label: "Bring", items: ["The project", "The authority to sell it"] },
      {
        label: "Receive",
        items: [
          "Positioning and pricing",
          "Sales materials",
          "Distribution through the network",
          "Managed sales and shared reporting",
        ],
      },
    ],
  },
  {
    role: "Platform",
    party: "TEKCE Exclusive",
    platform: true,
    blocks: [
      { label: "Brings", items: ["Strategy", "Marketing", "Distribution management"] },
      {
        label: "Keeps in place",
        items: [
          "Registered, protected leads",
          "A transparent commission structure",
          "Reporting shared with everyone it concerns",
        ],
      },
    ],
  },
  {
    role: "Sales",
    party: "Partner agencies",
    note: "TEKCE and independent agencies",
    blocks: [
      { label: "Bring", items: ["International buyers", "The relationship with them"] },
      {
        label: "Receive",
        items: [
          "Selected projects",
          "Registered, protected leads",
          "Commission on a transparent basis",
          "Transaction and closing support",
        ],
      },
    ],
  },
  {
    role: "Demand",
    party: "Buyers",
    blocks: [
      { label: "Bring", items: ["The decision to buy"] },
      {
        label: "Receive",
        items: [
          "Complete project information",
          "One price, whoever they buy through",
          "Local support through closing",
        ],
      },
    ],
  },
];

const pad = (value: number) => String(value).padStart(2, "0");

function Arrow() {
  return (
    <svg width="12" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
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

export function BusinessModel() {
  return (
    <section id="business-model" className="scroll-mt-14 bg-mist lg:scroll-mt-28">
      <div className="site-container section-y">
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-20">
          <h2 className="max-w-[16ch] text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-ink sm:text-[2.5rem] lg:text-5xl">
            Four parties. One arrangement.
          </h2>
          <p className="mt-6 max-w-[28rem] shrink-0 text-[17px] leading-[1.6] text-ink/70 lg:mt-0 lg:pb-1.5">
            Everyone in the model brings something and receives something. The
            platform’s job is to keep that exchange clear, in the order a
            project moves: from supply to demand.
          </p>
        </div>

        {/*
          Four lanes read left to right, joined by arrows at their headers.
          The platform lane is the only filled one: it is where the model is
          held together. Phones stack the lanes in the same order.
        */}
        <ol className="mt-14 grid gap-3 lg:mt-20 lg:grid-cols-4 lg:gap-0 lg:border lg:border-ink/10">
          {LANES.map((lane, index) => {
            const dark = lane.platform;
            const last = index === LANES.length - 1;
            return (
              <li
                key={lane.party}
                className={`relative flex flex-col border lg:border-0 lg:border-l lg:first:border-l-0 ${
                  dark ? "border-ink bg-ink" : "border-ink/10 bg-paper"
                } lg:border-ink/10`}
              >
                <div
                  className={`flex min-h-32 flex-col justify-between gap-6 border-b p-6 lg:min-h-40 lg:p-8 ${
                    dark ? "border-paper/15" : "border-ink/10"
                  }`}
                >
                  <p
                    className={`text-[11px] font-medium tracking-[0.08em] uppercase ${
                      dark ? "text-paper/50" : "text-ink/45"
                    }`}
                  >
                    {pad(index + 1)} · {lane.role}
                  </p>
                  <div>
                    <h3
                      className={`text-xl leading-snug font-semibold tracking-[-0.02em] lg:text-2xl ${
                        dark ? "text-paper" : "text-ink"
                      }`}
                    >
                      {lane.party}
                    </h3>
                    {lane.note && (
                      <p className="mt-1 text-sm tracking-tight text-ink/55">{lane.note}</p>
                    )}
                  </div>
                </div>

                {!last && (
                  <span
                    aria-hidden="true"
                    className="absolute top-[4.5rem] -right-3 z-10 hidden size-6 items-center justify-center bg-accent text-paper lg:flex"
                  >
                    <Arrow />
                  </span>
                )}

                {lane.blocks.map((block) => (
                  <div key={block.label} className="px-6 py-6 lg:px-8">
                    <p
                      className={`text-sm font-medium tracking-tight ${
                        dark ? "text-paper/50" : "text-ink/50"
                      }`}
                    >
                      {block.label}
                    </p>
                    <ul className="mt-3 grid gap-y-2">
                      {block.items.map((item) => (
                        <li
                          key={item}
                          className={`flex gap-3 text-[15px] leading-snug tracking-tight ${
                            dark ? "text-paper" : "text-ink"
                          }`}
                        >
                          <span
                            aria-hidden="true"
                            className={`mt-[7px] block size-1.5 shrink-0 ${dark ? "bg-paper" : "bg-ink"}`}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
