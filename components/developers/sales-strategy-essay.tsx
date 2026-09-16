/**
 * The page's long read: a point of view rather than a feature list. Every
 * factual statement in it (channels, registered leads, transparent
 * commissions, local support in four markets) is taken from the verified
 * distribution model; the rest is argument, not claims.
 *
 * Likely a CMS "article" block in production: title, standfirst, body.
 */
export function SalesStrategyEssay() {
  const subhead =
    "mt-14 text-2xl leading-[1.2] font-semibold tracking-[-0.02em] text-ink lg:text-[1.75rem]";

  return (
    <section id="perspective" className="scroll-mt-14 lg:scroll-mt-28">
      <div className="site-container section-y grid gap-10 lg:grid-cols-12 lg:gap-x-16">
        <header className="lg:col-span-4">
          <div className="lg:sticky lg:top-40">
            <h2 className="max-w-[14ch] text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-ink sm:text-[2.5rem] lg:text-5xl">
              A listing is not a sales strategy.
            </h2>
            <p className="mt-6 max-w-[24rem] text-[17px] leading-[1.6] text-ink/60">
              Why international sales need structure rather than more
              exposure, and what that structure has to protect.
            </p>
          </div>
        </header>

        {/* One comfortable measure, roughly 70 characters, for the whole read. */}
        <article className="max-w-[40rem] text-lg leading-[1.75] text-ink/80 lg:col-span-7 lg:col-start-6 [&_p+p]:mt-6">
          <p className="text-[1.375rem] leading-[1.6] text-ink">
            Most projects that struggle abroad do not struggle for lack of
            visibility. They are on portals, in newsletters and in the inboxes
            of brokers who have never visited the site. The problem is rarely
            that too few people have seen the project. It is that too many
            people are describing it differently.
          </p>
          <p>
            An international buyer is being asked to commit to a home they may
            not see until it is finished, in a country whose process they do
            not know, through someone they met a week ago. What they are really
            buying, before the apartment, is confidence. Every inconsistency
            wears it down: two prices for the same unit, a floor plan that
            changed between brochures, an agent who cannot say who handles the
            paperwork.
          </p>

          <h3 className={subhead}>Exposure without structure</h3>
          <p className="mt-5">
            The instinctive answer to slow sales is more distribution. Sign
            another agency, open another market, lower the entry price. Each
            step makes sense on its own. Together they produce a project that is
            everywhere and owned by no one. Agencies compete with each other
            instead of with other developments. Discounts appear that nobody
            approved. The same buyer is introduced twice, and the dispute that
            follows costs more goodwill than the commission was worth.
          </p>
          <p>
            None of this shows up in a single report, because there is no
            single report. It shows up later, as a price that has quietly
            softened and a sales team that spends its week reconciling
            spreadsheets instead of closing.
          </p>

          <blockquote className="my-14 border-l-2 border-accent pl-6 text-[1.625rem] leading-[1.3] font-semibold tracking-[-0.02em] text-ink sm:pl-8 lg:text-[2rem]">
            The question is not how many people can sell your project. It is
            whether they are all selling the same one.
          </blockquote>

          <h3 className={subhead}>What a structure protects</h3>
          <p className="mt-5">
            We start from the other end. Before a project reaches any partner,
            it is positioned: who it is for, what it competes with, what it
            should cost and why. That thinking becomes one sales pack and one
            price list, and everything that follows is built on it.
          </p>
          <p>
            Distribution then runs through a network that shares the same
            commercial logic. TEKCE takes part as a commissioned
            strategic group partner, and qualified independent agencies work
            alongside it. Leads are registered, so an introduction belongs to
            whoever made it. Commissions are transparent, so partners put their
            effort where it is rewarded rather than where it feels safest.
          </p>
          <p>
            That is what lets reach grow without the project losing its shape.
            A new partner in a new city adds buyers, not confusion.
          </p>

          <h3 className={subhead}>Where the developer fits</h3>
          <p className="mt-5">
            Handing over sales is not the same as handing over the project. What
            moves to us is the part of the work that sits furthest from the
            site: the daily management of partners, leads and paperwork across
            several countries. What comes back is visibility — which channel an
            enquiry came from, where each transaction stands, and how the market
            is responding.
          </p>
          <p>
            On the ground, where the sale is finally decided, TEKCE’s local
            infrastructure in Spain, Türkiye, North Cyprus and the United Arab
            Emirates supports the viewings, the documentation and the closing.
            The buyer who arrived with questions leaves with a completed
            purchase, and a reason to trust the next project.
          </p>
          <p className="font-medium text-ink">
            A listing tells the market that a project exists. A strategy decides
            how it will be sold. We would rather be responsible for the second.
          </p>
        </article>
      </div>
    </section>
  );
}
