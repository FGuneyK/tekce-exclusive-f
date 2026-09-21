import Image from "next/image";
import Link from "next/link";
import { ArticleMeta } from "@/components/blog/article-meta";
import { ARTICLES, type Article } from "@/lib/blog";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink";

function Arrow() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
      <path
        d="M9 1L13 5L9 9M13 5H1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Lead({ article }: { article: Article }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className={`group grid gap-6 lg:grid-cols-12 lg:items-center lg:gap-x-12 ${focusRing}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-mist lg:col-span-7">
        <Image
          src={article.image}
          alt={article.alt}
          fill
          preload
          sizes="(min-width: 1024px) 56vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div className="lg:col-span-5">
        <ArticleMeta article={article} />
        <h2 className="mt-4 text-[1.875rem] leading-[1.1] font-bold tracking-[-0.03em] text-ink sm:text-[2.25rem] lg:text-[2.5rem]">
          {article.title}
        </h2>
        <p className="mt-4 max-w-[46ch] text-[17px] leading-[1.65] text-ink/70">
          {article.dek}
        </p>
        <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium tracking-tight text-ink">
          Read the article
          <span className="transition-transform duration-200 ease-out group-hover:translate-x-0.5">
            <Arrow />
          </span>
        </span>
      </div>
    </Link>
  );
}

function Entry({ article }: { article: Article }) {
  return (
    <li>
      <Link href={`/blog/${article.slug}`} className={`group block ${focusRing}`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-mist">
          <Image
            src={article.image}
            alt={article.alt}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>
        <div className="mt-5">
          <ArticleMeta article={article} />
          <h3 className="mt-3 text-[1.3125rem] leading-[1.25] font-semibold tracking-[-0.02em] text-ink decoration-ink/30 underline-offset-4 group-hover:underline">
            {article.title}
          </h3>
          <p className="mt-2.5 text-[15px] leading-[1.6] text-ink/65">
            {article.dek}
          </p>
        </div>
      </Link>
    </li>
  );
}

export function BlogIndex() {
  const [lead, ...rest] = ARTICLES;

  return (
    <>
      <section className="site-container pt-12 pb-10 sm:pt-14 lg:pt-16 lg:pb-14">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-x-16">
          <h1 className="max-w-[14ch] text-[2.5rem] leading-[1.04] font-bold tracking-[-0.035em] text-ink sm:text-[3.25rem] lg:col-span-7 lg:text-[4rem]">
            What we know, written down.
          </h1>
          <p className="max-w-[34rem] text-lg leading-[1.6] text-ink/70 lg:col-span-5 lg:pb-2">
            Guides and arguments from the people who sell new homes in Spain,
            Türkiye, North Cyprus and the UAE. Every figure is sourced at the
            foot of the piece, and none of it is investment advice.
          </p>
        </div>
      </section>

      <section className="site-container border-t border-ink/10 pt-10 lg:pt-14">
        <Lead article={lead} />
      </section>

      <section className="site-container section-y">
        <ul className="grid gap-x-8 gap-y-14 border-t border-ink/10 pt-10 sm:grid-cols-2 lg:grid-cols-3 lg:pt-14">
          {rest.map((article) => (
            <Entry key={article.slug} article={article} />
          ))}
        </ul>
      </section>
    </>
  );
}
