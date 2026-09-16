type Milestone = { mark: string; title: string; text: string; exclusive?: boolean };

/**
 * Dated milestones from tekce.com/corporate and tekceexclusive.com (checked
 * 2026-09-15). The site gives no year for the unified TEKCE name or the
 * later countries, so that step is marked "Then" rather than dated.
 */
const MILESTONES: Milestone[] = [
  {
    mark: "2004",
    title: "Antalya Homes",
    text: "TEKCE begins in Antalya as Antalya Homes, selling property to international buyers.",
  },
  {
    mark: "2015",
    title: "Istanbul",
    text: "The business opens in Istanbul as Istanbul Homes, followed by offices in Trabzon and Bursa.",
  },
  {
    mark: "2017",
    title: "Spain",
    text: "Expansion into Spain, as Spain Homes.",
  },
  {
    mark: "2018",
    title: "TEKCE Exclusive",
    text: "TEKCE Exclusive is established to market and sell real estate projects.",
    exclusive: true,
  },
  {
    mark: "Then",
    title: "One name",
    text: "The brands come together as TEKCE, and the group opens in North Cyprus, Sweden and the United Arab Emirates.",
  },
  {
    mark: "Today",
    title: "A group and a platform",
    text: "TEKCE Group brings together TEKCE, TEKCE Exclusive, TEKCE Visa and TEKCE Academy.",
  },
];

export function GroupHistory() {
  return (
    <section id="history" className="scroll-mt-14 bg-mist lg:scroll-mt-28">
      <div className="section-y">
        <div className="site-container">
          <h2 className="max-w-[16ch] text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-ink sm:text-[2.5rem] lg:text-5xl">
            How we got here.
          </h2>
        </div>

        {/*
          The years are the headline of each column. Only 2018 is set in full
          ink, so the platform's own start stands out from the group's story.
          Phones scroll the columns sideways.
        */}
        <div className="site-container mt-12 lg:mt-16">
          <ol className="-mx-5 flex snap-x snap-mandatory scroll-pl-5 gap-6 overflow-x-auto px-5 [scrollbar-width:none] sm:-mx-8 sm:scroll-pl-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-6 lg:gap-8 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden">
            {MILESTONES.map((milestone) => (
              <li
                key={milestone.mark}
                className="w-[72%] shrink-0 snap-start sm:w-[42%] lg:w-auto"
              >
                <p
                  className={`text-[3.5rem] leading-none font-bold tracking-[-0.045em] tabular-nums lg:text-[3.25rem] xl:text-[4rem] ${
                    milestone.exclusive ? "text-ink" : "text-ink/25"
                  }`}
                >
                  {milestone.mark}
                </p>
                <div
                  className={`relative mt-6 border-t pt-5 ${
                    milestone.exclusive ? "border-ink" : "border-ink/15"
                  }`}
                >
                  {milestone.exclusive && (
                    <span aria-hidden="true" className="absolute -top-[4px] left-0 block size-2 bg-accent" />
                  )}
                  <h3 className="text-lg font-semibold tracking-[-0.01em] text-ink">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.6] text-ink/65">{milestone.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
