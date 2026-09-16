import Image from "next/image";

// Unsplash photo-1653164579768-ea97833b3b03
const IMAGE =
  "https://images.unsplash.com/photo-1653164579768-ea97833b3b03?auto=format&fit=crop&w=2400&h=1030&q=80";

/**
 * The page's long read, set as a centred column with a drop cap and one
 * full-width image break. General buyer guidance only: no returns, yields,
 * tax, residency or legal claims. The TEKCE-specific statements (prepared
 * projects, one price, local support in four markets) are verified.
 *
 * Likely a CMS "article" block in production.
 */
export function PromiseEssay() {
  const measure = "mx-auto max-w-[40rem]";
  const subhead = `${measure} mt-14 text-2xl leading-[1.2] font-semibold tracking-[-0.02em] text-ink lg:text-[1.75rem]`;

  return (
    <section id="perspective" className="scroll-mt-14 lg:scroll-mt-28">
      <div className="site-container section-y">
        <header className="mx-auto max-w-[48rem] text-center">
          <h2 className="mx-auto max-w-[20ch] text-[2.25rem] leading-[1.04] font-bold tracking-[-0.035em] text-ink sm:text-[3rem] lg:text-[3.5rem]">
            When you buy new abroad, you are buying a promise.
          </h2>
          <p className="mx-auto mt-6 max-w-[34rem] text-[17px] leading-[1.6] text-ink/60">
            What makes that promise worth trusting, and how to tell before you
            sign anything.
          </p>
        </header>

        <article className="mt-14 text-lg leading-[1.75] text-ink/80 lg:mt-20 [&_p+p]:mt-6">
          <div className={measure}>
            <p className="text-[1.375rem] leading-[1.6] text-ink first-letter:float-left first-letter:mt-2 first-letter:mr-3 first-letter:text-[5rem] first-letter:leading-[0.8] first-letter:font-bold first-letter:tracking-[-0.04em]">
              A new apartment abroad is rarely a finished thing when you agree
              to buy it. It may be a set of drawings, a showroom, a concrete
              frame on a hillside. What you are really buying at that moment is
              a promise: that the building will be finished, that it will match
              what you were shown, and that the purchase will be completed
              properly in a country whose process you may not know.
            </p>
            <p>
              That is not a reason to avoid buying new. Buying early in a
              project can mean more choice — of floor, of orientation, of view —
              and a home built to current standards rather than those of twenty
              years ago. It is a reason to be precise about what makes a promise
              worth trusting.
            </p>
          </div>

          <h3 className={subhead}>Start with the people making it</h3>
          <div className={`${measure} mt-5`}>
            <p>
              Before the apartment, look at the developer: what they have built
              before, whether those buildings were delivered, how they respond
              when you ask for detail. A developer who is confident in a project
              is usually generous with information. Plans, specifications and a
              clear price list should be where a conversation starts, not
              something you have to chase.
            </p>
            <p>
              That is one reason we work the way we do. Projects reach buyers
              prepared, with complete materials and live availability, so much
              of what you would have had to ask is already in front of you.
            </p>
          </div>

          {/* The one moment the read leaves its column. */}
          <figure className="my-16 lg:my-20">
            <div className="relative aspect-[4/3] overflow-hidden bg-mist sm:aspect-[21/9]">
              <Image
                src={IMAGE}
                alt="A white architectural model of a building, lit from one side, with small scale figures."
                fill
                sizes="(min-width: 1440px) 1360px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className={`${measure} mt-4 text-sm leading-[1.55] text-ink/50`}>
              The model comes before the building. The questions should too.
            </figcaption>
          </figure>

          <h3 className={subhead}>Read the timeline, not just the brochure</h3>
          <div className={`${measure} mt-5`}>
            <p>
              Every new development follows a sequence: permits, construction,
              completion, the transfer of title. Ask where the project stands in
              it today, and how your payments relate to it. Ask which documents
              you will receive at each step, and in which language. None of
              these are awkward questions. They are the ones a serious seller
              expects.
            </p>
            <p>
              It is also worth asking the same question twice, through two
              different people. In a well-run project the answer, and the
              price, will be the same. In the network we work with, the price
              list is the same whoever you ask.
            </p>
          </div>

          <blockquote className="mx-auto my-16 max-w-[52rem] text-center text-[1.75rem] leading-[1.2] font-bold tracking-[-0.03em] text-ink sm:text-[2.25rem] lg:my-20 lg:text-[2.75rem]">
            A promise worth trusting is a specific one.
          </blockquote>

          <h3 className={subhead}>Make sure someone is there when it matters</h3>
          <div className={`${measure} mt-5`}>
            <p>
              The hardest part of buying abroad is rarely choosing the property.
              It is everything afterwards: a viewing on a tight schedule,
              documents in another language, a closing in an office you have
              never visited. This is where distance turns small problems into
              large ones.
            </p>
            <p>
              TEKCE’s local infrastructure in Spain, Türkiye, North Cyprus and
              the United Arab Emirates supports buyers through viewings,
              documentation and closing. Whether you buy directly from TEKCE
              Exclusive or through an agency you already trust, that support
              on the ground is part of the purchase.
            </p>
            <p className="font-medium text-ink">
              Buying new abroad asks for trust. The right answer is neither
              blind confidence nor endless caution, but a clear picture, and
              people on the ground who stand behind it.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
