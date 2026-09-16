type Note = { term: string; text: string };

type Block =
  | { kind: "lead" | "paragraph" | "closing"; text: string; note?: Note }
  | { kind: "subhead" | "quote"; text: string };

/**
 * The page's long read, set with margin notes: the argument runs in the
 * text column, and the facts it rests on sit beside it. Every note restates
 * the verified partner offer; the body is argument, not new claims.
 *
 * Likely a CMS "article" block in production: title, standfirst, blocks,
 * optional margin note per paragraph.
 */
const BLOCKS: Block[] = [
  {
    kind: "lead",
    text: "Ask an agency what it owns, and the honest answer is not its listings. Listings come and go. What an agency builds over the years is a list of people who trust its judgement: buyers who come back, and who send their friends.",
  },
  {
    kind: "paragraph",
    text: "That is why so many agencies are cautious about international projects. To sell one, you usually have to introduce your client to someone else — a developer’s sales office, another broker, a local agent — and hope the introduction is remembered when the sale closes. Too often it is not. The client buys, and the agency that found them hears about it later, if at all.",
  },
  { kind: "subhead", text: "Protection comes before the introduction" },
  {
    kind: "paragraph",
    text: "A partner network only works if that concern is answered first. In ours, leads are registered and protected, so the client relationship stays with the agency that introduced it. The point is not paperwork. It is being able to recommend a project abroad with the same confidence you would recommend an apartment around the corner.",
    note: {
      term: "Registration",
      text: "Each lead is recorded against the agency that introduced it.",
    },
  },
  {
    kind: "paragraph",
    text: "The same is true of commission. A transparent structure means you know how a sale rewards you before you spend a week on a client, not after. Good agencies put their effort where the reward is clear. A network should make that easy.",
    note: {
      term: "Commission",
      text: "A transparent structure across the partner network.",
    },
  },
  {
    kind: "quote",
    text: "You should never have to choose between serving your client and keeping them.",
  },
  { kind: "subhead", text: "The sale happens far from your office" },
  {
    kind: "paragraph",
    text: "An international purchase has a long tail. Viewings in another country, documents in another language, a closing process your client has never been through. An agency can own the relationship without having to own every step of it.",
  },
  {
    kind: "paragraph",
    text: "TEKCE’s local infrastructure supports what buyers need on the ground: viewings, documentation and closing. You remain the person your client calls. When they arrive, the support is already in place.",
    note: {
      term: "On the ground",
      text: "Spain, Türkiye, North Cyprus and the United Arab Emirates.",
    },
  },
  { kind: "subhead", text: "Fewer, better projects" },
  {
    kind: "paragraph",
    text: "Access to more projects is not the same as access to better ones. Every project you put in front of a client spends a little of their trust. Projects reach the network selected and prepared, with complete materials and live availability, so what you present is what your client can actually buy.",
    note: {
      term: "Materials",
      text: "Project materials and live availability, shared with partners.",
    },
  },
  {
    kind: "closing",
    text: "Your clients are the business you have built. A partner network should make that business larger, and never put it at risk.",
  },
];

const textColumn = "lg:col-span-6 lg:col-start-4";

function MarginNote({ note }: { note: Note }) {
  return (
    <aside className="mt-4 border-l-2 border-ink/15 pl-4 text-sm leading-[1.55] text-ink/60 lg:col-span-3 lg:col-start-1 lg:row-start-1 lg:mt-1.5 lg:border-t lg:border-l-0 lg:pt-3 lg:pl-0">
      <span className="font-medium text-ink">{note.term}.</span> {note.text}
    </aside>
  );
}

/** Every block is its own row on the page grid, so notes can sit beside it. */
const row = "lg:grid lg:grid-cols-12 lg:gap-x-16";

function renderBlock(block: Block, index: number) {
  switch (block.kind) {
    case "subhead":
      return (
        <div key={block.text} className={`mt-14 ${row}`}>
          <h3 className={`${textColumn} text-2xl leading-[1.2] font-semibold tracking-[-0.02em] text-ink lg:text-[1.75rem]`}>
            {block.text}
          </h3>
        </div>
      );
    case "quote":
      // Breaks out of the text column to the right, the one wide moment in the read.
      return (
        <div key={block.text} className={`my-14 lg:my-20 ${row}`}>
          <blockquote className="text-[1.75rem] leading-[1.2] font-bold tracking-[-0.03em] text-ink sm:text-[2.25rem] lg:col-span-8 lg:col-start-4 lg:text-[2.75rem]">
            <span aria-hidden="true" className="mb-6 block h-0.5 w-12 bg-accent" />
            {block.text}
          </blockquote>
        </div>
      );
    default: {
      const style =
        block.kind === "lead"
          ? "text-[1.375rem] leading-[1.6] text-ink"
          : block.kind === "closing"
            ? "font-medium text-ink"
            : "";
      return (
        <div key={block.text} className={`${index === 0 ? "" : "mt-6"} ${row}`}>
          <p className={`${textColumn} ${style}`}>{block.text}</p>
          {block.note && <MarginNote note={block.note} />}
        </div>
      );
    }
  }
}

export function ClientEssay() {
  return (
    <section id="perspective" className="scroll-mt-14 lg:scroll-mt-28">
      <div className="site-container section-y">
        <header className="lg:grid lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-8 lg:col-start-4">
            <h2 className="max-w-[18ch] text-[2.25rem] leading-[1.04] font-bold tracking-[-0.035em] text-ink sm:text-[3rem] lg:text-[3.5rem]">
              An agency’s real inventory is its clients.
            </h2>
            <p className="mt-6 max-w-[34rem] text-[17px] leading-[1.6] text-ink/60">
              Why agencies are right to be careful with international projects,
              and what a partner network has to get right before it asks for
              their trust.
            </p>
          </div>
        </header>

        <article className="mt-14 text-lg leading-[1.75] text-ink/80 lg:mt-20">
          {BLOCKS.map(renderBlock)}
        </article>
      </div>
    </section>
  );
}
