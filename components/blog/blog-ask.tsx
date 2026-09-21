import { COMPANY } from "@/lib/company";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

const button =
  "inline-flex h-11 min-w-[11.5rem] items-center justify-center px-5 text-sm font-medium tracking-tight transition-colors duration-150";

export function BlogAsk() {
  return (
    <section id="ask" className="scroll-mt-16 bg-mist lg:scroll-mt-32">
      <div className="site-container section-y grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-x-16">
        <div className="lg:col-span-7">
          <h2 className="max-w-[18ch] text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-ink sm:text-[2.5rem]">
            An article is the general answer.
          </h2>
          <p className="mt-5 max-w-[36rem] text-lg leading-[1.6] text-ink/75">
            Yours depends on the country, the property and your own position.
            Tell us all three and we will tell you what applies.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 lg:col-span-5 lg:justify-end lg:pb-1">
          <a
            href={COMPANY.email.href}
            className={`${button} bg-ink text-paper hover:bg-ink-deep ${focusRing}`}
          >
            {COMPANY.email.display}
          </a>
          <a
            href={COMPANY.phone.href}
            className={`${button} border border-ink/25 text-ink hover:border-ink hover:bg-ink/5 ${focusRing}`}
          >
            {COMPANY.phone.display}
          </a>
        </div>
      </div>
    </section>
  );
}
