import { formatDate, readingTime, type Article } from "@/lib/blog";
export function ArticleMeta({
  article,
  tone = "ink",
}: {
  article: Article;
  tone?: "ink" | "paper";
}) {
  const muted = tone === "ink" ? "text-ink/50" : "text-paper/60";
  const strong = tone === "ink" ? "text-ink" : "text-paper";

  return (
    <p className={`flex flex-wrap items-center gap-x-2 text-[13px] tracking-tight ${muted}`}>
      <span className={`font-medium ${strong}`}>{article.topic}</span>
      <span aria-hidden="true">·</span>
      <time dateTime={article.date}>{formatDate(article.date)}</time>
      <span aria-hidden="true">·</span>
      <span>{readingTime(article)} min read</span>
    </p>
  );
}
