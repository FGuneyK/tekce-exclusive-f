import type { Market } from "@/lib/markets";

/**
 * The questions the guides are actually asked, with the answers they give.
 * Native disclosure elements: open by keyboard, findable by browser search,
 * and no JavaScript needed to read a page of plain answers.
 */
export function MarketFaq({ market }: { market: Market }) {
  return (
    <section className="site-container section-y grid gap-10 lg:grid-cols-12 lg:gap-x-16">
      <h2 className="max-w-[12ch] text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-ink sm:text-[2.5rem] lg:col-span-4">
        Questions buyers ask.
      </h2>

      <div className="lg:col-span-8">
        {market.faqs.map((faq) => (
          <details
            key={faq.q}
            className="group border-b border-ink/15 first:border-t first:border-ink/15"
          >
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 py-5 text-[17px] leading-[1.45] font-medium tracking-tight text-ink marker:content-none focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ink [&::-webkit-details-marker]:hidden">
              {faq.q}
              <span
                aria-hidden="true"
                className="relative mt-2 block size-3 shrink-0"
              >
                <span className="absolute top-1/2 left-0 h-px w-3 -translate-y-1/2 bg-ink" />
                <span className="absolute top-1/2 left-0 h-px w-3 -translate-y-1/2 rotate-90 bg-ink transition-transform duration-200 group-open:rotate-0" />
              </span>
            </summary>
            <p className="max-w-[66ch] pb-6 text-[16px] leading-[1.7] text-ink/75">
              {faq.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
