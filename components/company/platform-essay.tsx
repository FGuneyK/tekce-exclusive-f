type Chapter = { title: string; paragraphs: string[]; closing?: string };

/**
 * The page's long read, set in chapters: a large opening statement, then
 * each chapter's title holds in the left column while its text runs on the
 * right. Dated facts come from tekce.com/corporate and tekceexclusive.com;
 * the model is the verified distribution model; the rest is argument.
 *
 * Likely a CMS "article" block in production: title, lead, chapters.
 */
const CHAPTERS: Chapter[] = [
  {
    title: "Where it comes from",
    paragraphs: [
      "TEKCE started in Antalya in 2004, selling homes to buyers from abroad. It grew the way good agencies grow: one city, then another, then another country. Istanbul, then Spain, then North Cyprus, Sweden and the United Arab Emirates.",
      "That kind of growth teaches you what international buyers need: a clear picture, a fair price, and someone on the ground when they arrive. It also shows how differently a whole project behaves once it is offered abroad.",
    ],
  },
  {
    title: "A project is not a listing",
    paragraphs: [
      "A development is sold over months or years, in phases, to buyers who compare it with every alternative they can find. Its price has to hold across every agency that offers it. Its materials have to answer questions in many languages. Its availability has to be right on the day a buyer asks.",
      "Most agencies are not built for that, and they should not have to be. Their strength is the client in front of them. What a project needs is someone accountable for the whole of it: positioning before launch, preparation before distribution, and management until the sales are complete.",
    ],
  },
  {
    title: "Why a platform, not another agency",
    paragraphs: [
      "A larger sales team would not solve this. A platform between the people who build projects and the people who sell them can.",
      "Developers supply the project and the authority to sell it. We take on strategy, marketing and distribution management. Partner agencies sell in parallel: TEKCE, as a commissioned strategic group partner, and independent agencies, also commissioned. Leads are registered. Commissions are transparent. Reporting is shared.",
      "The group taking part does not change the logic of the network. That is the point: an agency in another country should be able to trust the arrangement as much as the developer does.",
    ],
  },
  {
    title: "What we are building towards",
    paragraphs: [
      "TEKCE Group’s stated vision is to be a leading global real estate platform. For TEKCE Exclusive, that ambition is narrower and more specific: to be the most accountable way to take a real estate project to international markets.",
      "Accountable means three things. The developer can see what is happening. The partner knows the client is theirs. The buyer gets the same price and the same information, whoever they speak to.",
    ],
    closing:
      "Everything else on this page — the group, the model, the network — exists to make those three things true.",
  },
];

const pad = (value: number) => String(value).padStart(2, "0");

export function PlatformEssay() {
  return (
    <section id="perspective" className="scroll-mt-14 lg:scroll-mt-28">
      <div className="site-container section-y">
        <h2 className="max-w-[16ch] text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-ink sm:text-[2.5rem] lg:text-5xl">
          Why TEKCE Exclusive exists.
        </h2>

        <p className="mt-10 max-w-[58rem] text-[1.5rem] leading-[1.4] font-medium tracking-[-0.015em] text-ink sm:text-[1.75rem] lg:mt-14 lg:text-[2.125rem]">
          Selling one home to an international buyer is a relationship. Selling
          an entire development to buyers in several countries, through many
          agencies at once, is a system. TEKCE Exclusive exists because the
          second asks for something the first does not.
        </p>

        <div className="mt-16 lg:mt-24">
          {CHAPTERS.map((chapter, index) => (
            <div
              key={chapter.title}
              className="grid gap-5 border-t border-ink/10 pt-8 pb-12 last:pb-0 lg:grid-cols-12 lg:gap-x-16 lg:pt-10 lg:pb-16"
            >
              <div className="lg:col-span-4">
                <h3 className="flex items-baseline gap-3 text-xl leading-snug font-semibold tracking-[-0.02em] text-ink lg:sticky lg:top-40 lg:text-2xl">
                  <span className="text-sm font-medium tracking-normal text-ink/40 tabular-nums">
                    {pad(index + 1)}
                  </span>
                  {chapter.title}
                </h3>
              </div>

              <div className="max-w-[40rem] text-lg leading-[1.75] text-ink/80 lg:col-span-7 lg:col-start-6 [&>p+p]:mt-6">
                {chapter.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {chapter.closing && <p className="font-medium text-ink">{chapter.closing}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
