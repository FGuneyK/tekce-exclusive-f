/** TEKCE Group's core values and mottos, verbatim from tekce.com/corporate (checked 2026-09-15). */
const VALUES = [
  { name: "Goodness", motto: "Above all, be good." },
  { name: "Integrity", motto: "Honesty is the best policy." },
  { name: "Excellence", motto: "Quality is not a coincidence." },
  { name: "Sustainability", motto: "Consistency is the key." },
  { name: "Innovation", motto: "Always one step ahead." },
];

const pad = (value: number) => String(value).padStart(2, "0");

export function GroupValues() {
  return (
    <section id="values" className="scroll-mt-14 lg:scroll-mt-28">
      <div className="site-container section-y">
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-20">
          <h2 className="max-w-[18ch] text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-ink sm:text-[2.5rem] lg:text-5xl">
            Values shared across TEKCE Group.
          </h2>
          <p className="mt-6 max-w-[28rem] shrink-0 text-[17px] leading-[1.6] text-ink/70 lg:mt-0 lg:pb-1.5">
            The group’s five values, each with its own motto. TEKCE Exclusive
            works to the same ones.
          </p>
        </div>

        {/* One even row under a single ink rule: number, value, motto. */}
        <ol className="mt-14 grid border-t border-ink sm:grid-cols-2 lg:mt-20 lg:grid-cols-5">
          {VALUES.map((value, index) => (
            <li
              key={value.name}
              className="border-b border-ink/10 py-6 sm:pr-8 lg:border-b-0 lg:border-l lg:px-6 lg:pt-8 lg:pb-2 lg:first:border-l-0 lg:first:pl-0"
            >
              <span className="block text-sm text-ink/40 tabular-nums">{pad(index + 1)}</span>
              <h3 className="mt-6 text-2xl font-semibold tracking-[-0.02em] text-ink lg:mt-12 lg:text-[1.75rem]">
                {value.name}
              </h3>
              <p className="mt-2 text-[15px] leading-snug text-ink/60">“{value.motto}”</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
