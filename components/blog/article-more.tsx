import Image from "next/image";
import Link from "next/link";
import { ArticleMeta } from "@/components/blog/article-meta";
import { ARTICLES, type Article } from "@/lib/blog";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink";

export function ArticleMore({ current }: { current: Article }) {
  const others = ARTICLES.filter((article) => article.slug !== current.slug);

  return (
    <section className="site-container section-y">
      <h2 className="text-[1.75rem] leading-[1.1] font-bold tracking-[-0.03em] text-ink sm:text-[2rem]">
        Keep reading.
      </h2>

      <ul className="mt-8 border-t border-ink/15">
        {others.map((article) => (
          <li key={article.slug} className="border-b border-ink/10">
            <Link
              href={`/blog/${article.slug}`}
              className={`group grid grid-cols-[6rem_minmax(0,1fr)] items-center gap-5 py-5 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-8 ${focusRing}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                <Image
                  src={article.image}
                  alt=""
                  fill
                  sizes="144px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div>
                <ArticleMeta article={article} />
                <h3 className="mt-2 text-[1.125rem] leading-[1.3] font-semibold tracking-[-0.02em] text-ink decoration-ink/30 underline-offset-4 group-hover:underline sm:text-[1.25rem]">
                  {article.title}
                </h3>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
