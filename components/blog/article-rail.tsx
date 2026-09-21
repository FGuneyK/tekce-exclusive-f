import Link from "next/link";
import { headingId, type Article } from "@/lib/blog";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

export function ArticleRail({ article }: { article: Article }) {
  const headings = article.blocks.flatMap((block) =>
    block.type === "h2" ? [block.text] : [],
  );

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-[134px]">
        {headings.length > 0 && (
          <nav aria-label="In this article">
            <p className="text-[13px] font-medium tracking-tight text-ink">
              In this article
            </p>
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
          </nav>
        )}

        <div className="mt-10 border-t border-ink/15 pt-5">
          <p className="text-[15px] leading-[1.5] font-medium tracking-tight text-ink">
            Questions this did not answer?
          </p>
          <a
            href="#ask"
            className={`mt-4 inline-flex h-11 w-full items-center justify-center bg-ink px-5 text-sm font-medium tracking-tight text-paper transition-colors duration-150 hover:bg-ink-deep ${focusRing}`}
          >
            Inquire Now
          </a>
          <Link
            href={article.cta.href}
            className={`mt-4 inline-flex items-center gap-2 text-sm font-medium tracking-tight text-ink underline decoration-ink/30 underline-offset-4 transition-colors duration-150 hover:decoration-ink ${focusRing}`}
          >
            {article.cta.title}
          </Link>
        </div>
      </div>
    </aside>
  );
}
