import { headingId, type Article, type Block } from "@/lib/blog";

function Render({ block }: { block: Block }) {
  switch (block.type) {
    case "p":
      return (
        <p className="mt-6 text-[18px] leading-[1.75] text-ink/85 first:mt-0">
          {block.text}
        </p>
      );
    case "h2":
      return (
        <h2
          id={headingId(block.text)}
          className="mt-14 scroll-mt-20 text-[1.5rem] leading-[1.2] font-bold tracking-[-0.025em] text-ink lg:scroll-mt-36 lg:text-[1.75rem]"
        >
          {block.text}
        </h2>
      );
    case "quote":
      return (
        <blockquote className="my-12 border-y border-ink/15 py-8 text-[1.5rem] leading-[1.3] font-semibold tracking-[-0.025em] text-ink lg:text-[1.875rem]">
          {block.text}
        </blockquote>
      );
    case "list":
      return (
        <ul className="mt-6 flex flex-col gap-3">
          {block.items.map((item) => (
            <li
              key={item}
              className="flex gap-4 text-[17px] leading-[1.65] text-ink/85"
            >
              <span aria-hidden="true" className="mt-[0.7em] size-1.5 shrink-0 bg-ink" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[34rem] border-collapse text-left text-[15px] tracking-tight">
            <thead>
              <tr>
                {block.head.map((cell) => (
                  <th
                    key={cell}
                    scope="col"
                    className="border-b border-ink/25 py-3 pr-4 text-[13px] font-medium text-ink/55 last:pr-0"
                  >
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, index) => (
                    <td
                      key={index}
                      className={`border-b border-ink/10 py-3.5 pr-4 align-top last:pr-0 ${
                        index === 0 ? "font-medium text-ink" : "text-ink/75"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "note":
      return (
        <p className="mt-12 bg-mist px-5 py-4 text-[14px] leading-[1.6] text-ink/65">
          {block.text}
        </p>
      );
  }
}

export function ArticleBody({ article }: { article: Article }) {
  return (
    <div className="max-w-[42rem]">
      {article.blocks.map((block, index) => (
        <Render key={index} block={block} />
      ))}

      <section aria-labelledby="sources" className="mt-14 border-t border-ink/15 pt-6">
        <h2 id="sources" className="text-[13px] font-medium tracking-tight text-ink">
          Sources
        </h2>
        <ul className="mt-3 flex flex-col gap-2">
          {article.sources.map((source) => (
            <li key={source.href} className="text-[14px] leading-[1.5]">
              <a
                href={source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink/65 underline decoration-ink/25 underline-offset-4 transition-colors duration-150 hover:text-ink hover:decoration-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              >
                {source.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
