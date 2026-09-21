import Image from "next/image";
import Link from "next/link";
import { ArticleMeta } from "@/components/blog/article-meta";
import type { Article } from "@/lib/blog";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

export function ArticleHeader({ article }: { article: Article }) {
  return (
    <header className="site-container pt-6 lg:pt-8">
      <nav aria-label="Breadcrumb">
        <Link
          href="/blog"
          className={`inline-flex items-center gap-2 text-sm tracking-tight text-ink/55 transition-colors duration-150 hover:text-ink ${focusRing}`}
        >
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
            <path
              d="M5 1L1 5L5 9M1 5H13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          All articles
        </Link>
      </nav>

      <div className="mt-10 max-w-[56rem] lg:mt-14">
        <ArticleMeta article={article} />
        <h1 className="mt-5 text-[2.25rem] leading-[1.06] font-bold tracking-[-0.035em] text-ink sm:text-[3rem] lg:text-[3.75rem]">
          {article.title}
        </h1>
        <p className="mt-6 max-w-[44rem] text-[19px] leading-[1.6] text-ink/70 lg:text-[21px]">
          {article.dek}
        </p>
        <p className="mt-6 text-[13px] tracking-tight text-ink/50">
          By TEKCE Exclusive
        </p>
      </div>

      <figure className="mt-10 lg:mt-14">
        <div className="relative aspect-[16/10] bg-mist sm:aspect-[16/8]">
          <Image
            src={article.image}
            alt={article.alt}
            fill
            preload
            sizes="(min-width: 1440px) 1360px, 100vw"
            className="object-cover"
          />
        </div>
        <figcaption className="mt-3 text-[13px] tracking-tight text-ink/45">
          {article.credit}
        </figcaption>
      </figure>
    </header>
  );
}
