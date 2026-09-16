const CHANNELS = [
  {
    role: "Strategic group partner",
    name: "TEKCE",
    detail: "Commissioned sales partner",
    yours: false,
  },
  {
    role: "Independent partner",
    name: "Your agency",
    detail: "Commissioned sales partner",
    yours: true,
  },
];

/** The shared logic both channels work within, per the verified model. */
const RULES = [
  {
    title: "Registered leads",
    text: "A client belongs to the agency that introduced them, whichever channel they meet next.",
  },
  {
    title: "Transparent commissions",
    text: "Both channels are commissioned partners, working under a transparent structure.",
  },
  {
    title: "Shared reporting",
    text: "Leads and transactions are reported openly, so nobody has to guess where a sale stands.",
  },
];

export function NetworkRules() {
  return (
    <section id="network" className="scroll-mt-14 lg:scroll-mt-28">
      <div className="site-container section-y">
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-20">
          <h2 className="max-w-[16ch] text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-ink sm:text-[2.5rem] lg:text-5xl">
            Two channels. One set of rules.
          </h2>
          <p className="mt-6 max-w-[28rem] shrink-0 text-[17px] leading-[1.6] text-ink/70 lg:mt-0 lg:pb-1.5">
            TEKCE takes part as a commissioned strategic group partner,
            alongside independent agencies like yours. It extends the network’s
            reach without changing its commercial logic.
          </p>
        </div>

        {/*
          Read top to bottom: the two channels side by side, each dropping a
          line into the same foundation. Your agency is the filled node.
        */}
        <div className="mt-14 lg:mt-20">
          <div aria-hidden="true">
            <div className="grid grid-cols-2 gap-3 sm:gap-5">
              {CHANNELS.map((channel) => (
                <div
                  key={channel.name}
                  className={`flex min-h-36 flex-col justify-between gap-6 border p-4 sm:p-6 lg:min-h-44 lg:p-8 ${
                    channel.yours ? "border-ink bg-ink" : "border-ink/15 bg-paper"
                  }`}
                >
                  <p
                    className={`text-[11px] font-medium tracking-[0.08em] uppercase ${
                      channel.yours ? "text-paper/50" : "text-ink/45"
                    }`}
                  >
                    {channel.role}
                  </p>
                  <div>
                    <p
                      className={`text-lg font-semibold tracking-tight sm:text-2xl ${
                        channel.yours ? "text-paper" : "text-ink"
                      }`}
                    >
                      {channel.name}
                    </p>
                    <p
                      className={`mt-1 text-[13px] leading-snug sm:text-sm ${
                        channel.yours ? "text-paper/65" : "text-ink/60"
                      }`}
                    >
                      {channel.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid h-10 grid-cols-2 gap-3 sm:h-14 sm:gap-5">
              {CHANNELS.map((channel) => (
                <span key={channel.name} className="mx-auto block h-full w-px bg-ink/25" />
              ))}
            </div>
          </div>

          <div className="border border-ink/15 bg-mist">
            <p className="flex h-11 items-center border-b border-ink/10 px-4 text-[11px] font-medium tracking-[0.08em] text-ink/45 uppercase sm:px-6 lg:px-8">
              Same commercial logic
            </p>
            <ul className="grid sm:grid-cols-3">
              {RULES.map((rule) => (
                <li
                  key={rule.title}
                  className="border-t border-ink/10 p-4 first:border-t-0 sm:border-t-0 sm:border-l sm:p-6 sm:first:border-l-0 lg:p-8"
                >
                  <h3 className="text-lg font-semibold tracking-[-0.01em] text-ink">{rule.title}</h3>
                  <p className="mt-2 text-[15px] leading-[1.6] text-ink/65">{rule.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
