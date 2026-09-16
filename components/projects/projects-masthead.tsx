/**
 * An index page, so the masthead is type only: a short ink band that states
 * what the list is, then hands straight over to the filter rail. Every
 * photograph on this page belongs to a project.
 */
export function ProjectsMasthead() {
  return (
    <section className="bg-ink">
      <div className="site-container grid gap-6 pt-12 pb-12 sm:pt-14 lg:grid-cols-12 lg:items-end lg:gap-x-16 lg:pt-16 lg:pb-14">
        <h1 className="max-w-[16ch] text-[2.5rem] leading-[1.04] font-bold tracking-[-0.035em] text-paper sm:text-[3.25rem] lg:col-span-7 lg:text-[4rem]">
          Everything we are selling, unit by unit.
        </h1>

        <p className="max-w-[34rem] text-lg leading-[1.6] text-paper/75 lg:col-span-5 lg:pb-2">
          Every project TEKCE Exclusive represents, with the developer&rsquo;s
          own availability and base prices. Nothing is held back: when a home
          is gone, the list says sold.
        </p>
      </div>
    </section>
  );
}
