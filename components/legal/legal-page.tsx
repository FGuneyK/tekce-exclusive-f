import Link from "next/link";
import { headingId, type LegalBlock, type LegalDocument } from "@/lib/legal";
import { LEGAL_LINKS } from "@/lib/navigation";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

const ENTITY = "Tekce Exclusive Gayrimenkul Pazarlama AŞ";

function Render({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          id={headingId(block.text)}
          className="mt-14 scroll-mt-20 border-t border-ink/10 pt-8 text-[1.375rem] leading-[1.25] font-bold tracking-[-0.02em] text-ink first:mt-0 first:border-t-0 first:pt-0 lg:scroll-mt-36 lg:text-[1.625rem]"
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="mt-10 text-lg leading-[1.35] font-semibold tracking-[-0.01em] text-ink">
          {block.text}
        </h3>
      );
    case "h4":
      return (
        <h4 className="mt-7 text-[15px] font-semibold tracking-tight text-ink">{block.text}</h4>
      );
    case "strong":
      return (
        <p className="mt-6 text-[16px] leading-[1.75] font-medium text-ink">{block.text}</p>
      );
    case "p":
      return (
        <p className="mt-4 text-[16px] leading-[1.75] text-ink/80 first:mt-0">
          {block.lead && <strong className="font-semibold text-ink">{block.lead}</strong>}
          {block.lead && " "}
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul className="mt-4 flex flex-col gap-2.5">
          {block.items.map((item) => (
            <li key={item} className="flex gap-4 text-[16px] leading-[1.7] text-ink/80">
              <span aria-hidden="true" className="mt-[0.7em] size-1.5 shrink-0 bg-ink" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "address":
      return (
        <div className="mt-6 border-l-2 border-ink bg-mist px-5 py-4">
          {block.label && (
            <p className="text-[15px] font-semibold tracking-tight text-ink">{block.label}</p>
          )}
          <address
            className={`text-[15px] leading-[1.7] text-ink/75 not-italic ${block.label ? "mt-2" : ""}`}
          >
            {block.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </div>
      );
    case "links":
      return (
        <ul className="mt-6 border-b border-ink/10">
          {block.rows.map(([name, href]) => (
            <li
              key={name}
              className="grid gap-1 border-t border-ink/10 py-3.5 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-6"
            >
              <span className="text-[15px] font-medium tracking-tight text-ink">{name}</span>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-[15px] tracking-tight break-all text-ink/70 underline decoration-ink/25 underline-offset-4 transition-colors duration-150 hover:text-ink hover:decoration-ink ${focusRing}`}
              >
                {href}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      );
  }
}

function Contents({ headings }: { headings: string[] }) {
  return (
    <ol className="mt-3 border-l border-ink/12">
      {headings.map((heading) => (
        <li key={heading}>
          <a
            href={`#${headingId(heading)}`}
            className={`-ml-px block border-l border-transparent py-1.5 pl-4 text-[14px] leading-[1.4] tracking-tight text-ink/55 transition-colors duration-150 hover:border-ink hover:text-ink ${focusRing}`}
          >
            {heading}
          </a>
        </li>
      ))}
    </ol>
  );
}

/**
 * One template for the four legal documents. A legal page is read to find a
 * clause, so it is set as a reference document: the four documents one tab
 * apart, a contents rail beside the text, and the text itself kept to a
 * reading measure. The wording comes verbatim from lib/legal.ts.
 */
export function LegalPage({ document }: { document: LegalDocument }) {
  const headings = document.blocks.flatMap((block) =>
    block.type === "h2" ? [block.text] : [],
  );

  return (
    <main>
      <header className="bg-mist">
        <div className="site-container pt-10 pb-12 lg:pt-14 lg:pb-16">
          <nav aria-label="Legal documents" className="-mx-1 overflow-x-auto">
            <ul className="flex gap-1 px-1 whitespace-nowrap">
              {LEGAL_LINKS.map((link) => {
                const current = link.href === document.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={current ? "page" : undefined}
                      className={`inline-flex h-9 items-center border px-4 text-sm tracking-tight transition-colors duration-150 ${focusRing} ${
                        current
                          ? "border-ink bg-ink font-medium text-paper"
                          : "border-ink/15 text-ink/65 hover:border-ink/40 hover:text-ink"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <h1 className="mt-10 max-w-[20ch] text-[2.25rem] leading-[1.06] font-bold tracking-[-0.035em] text-ink sm:text-[3rem] lg:mt-14 lg:text-[3.5rem]">
            {document.title}
          </h1>
          <p className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-[15px] tracking-tight text-ink/60">
            <span>{ENTITY}</span>
            {document.updated && (
              <>
                <span aria-hidden="true">·</span>
                <span>Last updated {document.updated}</span>
              </>
            )}
          </p>
        </div>
      </header>

      <div className="site-container pt-12 pb-20 lg:grid lg:grid-cols-12 lg:gap-x-16 lg:pt-16 lg:pb-24">
        <aside className="lg:col-span-3">
          {/* Phones get the contents folded away above the text. */}
          <details className="mb-10 border-y border-ink/10 py-3 lg:hidden">
            <summary className="cursor-pointer text-[15px] font-medium tracking-tight text-ink">
              Contents
            </summary>
            <Contents headings={headings} />
          </details>
          <nav aria-label="Contents" className="sticky top-[134px] hidden lg:block">
            <p className="text-[13px] font-medium tracking-tight text-ink">Contents</p>
            <Contents headings={headings} />
          </nav>
        </aside>

        <article className="max-w-[44rem] lg:col-span-8 lg:col-start-5">
          {document.blocks.map((block, index) => (
            <Render key={index} block={block} />
          ))}
        </article>
      </div>
    </main>
  );
}
