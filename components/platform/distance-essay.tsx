type Part = { title?: string; paragraphs: string[] };

/**
 * The page's long read, set on ink: headings hang in the left column beside
 * their text, and one wide quote breaks the page. TeleProperty statements
 * come from tekceexclusive.com/services/tele-property and TEKCE Group's
 * published remote-buying process; the rest is argument.
 *
 * Likely a CMS "article" block in production.
 */
const PARTS: Part[] = [
  {
    paragraphs: [
      "Real estate has been promised a technology revolution many times: portals, virtual tours, an app for every step. Most of them made property easier to look at. Far fewer made it easier to buy.",
      "A property sale, especially across borders, is a chain of decisions made by different people. A developer sets a price. An agency advises a client. A buyer decides whether to trust both. Technology that serves only one of them tends to make the others’ work harder.",
    ],
  },
  {
    title: "Built around the sale, not the listing",
    paragraphs: [
      "Our platform starts from the sale itself. Project information — plans, pricing, materials, availability — is prepared once and shared with everyone who needs it. Leads are registered as they arrive, so the question of who introduced a client is settled before it can become a dispute. What happens next is recorded, so a developer can follow progress without having to ask for it.",
      "None of this is visible to a buyer, and it should not be. What a buyer notices is that the answers are consistent.",
    ],
  },
  {
    title: "Distance is the real problem",
    paragraphs: [
      "International buyers rarely live near the project they are considering. TeleProperty exists for that gap. Buyers and partners can meet one-on-one before visiting a project, explore it through 360° tours, video, photographs and bird’s-eye footage, and make an offer.",
      "When a buyer does travel, it is often to confirm a decision rather than to begin one. And where they cannot be present, TEKCE Group’s remote buying process allows contracts to be shared at a distance and the title deed transfer to be completed through a power of attorney.",
    ],
  },
  {
    title: "People stay in the conversation",
    paragraphs: [
      "A platform can route a lead. It cannot reassure a family buying a home in another country. That remains the work of a sales specialist, a partner agency, and TEKCE Group’s local infrastructure on the ground.",
    ],
  },
];

const QUOTE_AFTER = 1;

export function DistanceEssay() {
  return (
    <section id="perspective" className="scroll-mt-28 bg-ink lg:scroll-mt-40">
      <div className="site-container section-y">
        <header className="max-w-[52rem]">
          <h2 className="max-w-[20ch] text-[2.25rem] leading-[1.04] font-bold tracking-[-0.035em] text-paper sm:text-[3rem] lg:text-[3.5rem]">
            Software doesn’t sell property. It helps people sell it better.
          </h2>
          <p className="mt-6 max-w-[34rem] text-[17px] leading-[1.6] text-paper/60">
            Why the platform is built around the sale rather than the listing,
            and where people still matter most.
          </p>
        </header>

        <article className="mt-14 text-lg leading-[1.75] text-paper/75 lg:mt-20">
          {PARTS.map((part, index) => (
            <div key={part.paragraphs[0]}>
              <div className={`lg:grid lg:grid-cols-12 lg:gap-x-16 ${index > 0 ? "mt-14" : ""}`}>
                {part.title && (
                  <h3 className="mb-5 text-xl leading-snug font-semibold tracking-[-0.02em] text-paper lg:col-span-4 lg:mb-0 lg:pt-1 lg:text-2xl">
                    {part.title}
                  </h3>
                )}
                <div className="max-w-[40rem] lg:col-span-7 lg:col-start-6 [&>p+p]:mt-6">
                  {part.paragraphs.map((paragraph, paragraphIndex) => (
                    <p
                      key={paragraph}
                      className={
                        index === 0 && paragraphIndex === 0
                          ? "text-[1.375rem] leading-[1.6] text-paper"
                          : undefined
                      }
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {index === QUOTE_AFTER && (
                <blockquote className="my-16 border-t border-paper/15 pt-10 lg:my-24 lg:grid lg:grid-cols-12 lg:gap-x-16 lg:pt-14">
                  <span aria-hidden="true" className="mb-6 block size-2.5 bg-accent lg:col-span-1 lg:mt-5 lg:mb-0" />
                  <p className="text-[1.75rem] leading-[1.15] font-bold tracking-[-0.03em] text-paper sm:text-[2.5rem] lg:col-span-10 lg:col-start-2 lg:text-[3.25rem]">
                    The best technology in a sale is the kind nobody has to think about.
                  </p>
                </blockquote>
              )}
            </div>
          ))}

          <div className="mt-14 lg:grid lg:grid-cols-12 lg:gap-x-16">
            <p className="max-w-[40rem] font-medium text-paper lg:col-span-7 lg:col-start-6">
              So we hold the platform to one test: does it give the people in
              a sale better information, sooner? Everything on this page is
              built to pass it.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
