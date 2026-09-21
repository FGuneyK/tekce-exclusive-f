import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/blog/article-body";
import { ArticleHeader } from "@/components/blog/article-header";
import { ArticleMore } from "@/components/blog/article-more";
import { ArticleRail } from "@/components/blog/article-rail";
import { BlogAsk } from "@/components/blog/blog-ask";
import { ARTICLES, articleBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const article = articleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title.replace(/\.$/, "")} | TEKCE Exclusive`,
    description: article.dek,
  };
}

export default async function ArticlePage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const article = articleBySlug(slug);
  if (!article) notFound();

  return (
    <main>
      <article>
        <ArticleHeader article={article} />
        <div className="site-container pt-12 pb-20 lg:grid lg:grid-cols-12 lg:gap-x-16 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-8">
            <ArticleBody article={article} />
          </div>
          <div className="lg:col-span-3 lg:col-start-10">
            <ArticleRail article={article} />
          </div>
        </div>
      </article>
      <div className="border-t border-ink/10">
        <ArticleMore current={article} />
      </div>
      <BlogAsk />
    </main>
  );
}
