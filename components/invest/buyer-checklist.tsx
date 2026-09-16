"use client";

import { useState } from "react";

/**
 * General due-diligence questions for any new-build purchase abroad. They are
 * guidance, not claims about particular projects, and not legal advice.
 * Ticks live in component state only.
 */
const QUESTIONS = [
  {
    question: "Who is the developer, and what have they delivered before?",
    hint: "Completed buildings say more than renderings.",
  },
  {
    question: "Where does construction stand today?",
    hint: "Ask what has been built, not only what is planned.",
  },
  {
    question: "Which permits and approvals are in place?",
    hint: "And which are still to come.",
  },
  {
    question: "How do the payments relate to construction?",
    hint: "Know what you pay, and when, before you reserve.",
  },
  {
    question: "What will I receive at each step, and in which language?",
    hint: "Contracts, receipts and title documents.",
  },
  {
    question: "Is the price the same whoever I buy through?",
    hint: "In a well-run project, it should be.",
  },
  {
    question: "Who supports the viewing, documentation and closing?",
    hint: "Especially if you live in another country.",
  },
  {
    question: "Who is my point of contact once I have bought?",
    hint: "The answer should be a person, not a department.",
  },
];

export function BuyerChecklist() {
  const [asked, setAsked] = useState<Set<number>>(() => new Set());

  const toggle = (index: number) =>
    setAsked((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });

  return (
    <section id="questions" className="scroll-mt-14 bg-mist lg:scroll-mt-28">
      <div className="site-container section-y grid gap-12 lg:grid-cols-12 lg:gap-x-16">
        <div className="lg:col-span-5">
          <h2 className="max-w-[16ch] text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-ink sm:text-[2.5rem] lg:text-5xl">
            Questions worth asking about any project.
          </h2>
          <p className="mt-6 max-w-[28rem] text-[17px] leading-[1.6] text-ink/70">
            Ask them of us, of your adviser, and of anyone else you are
            considering. A well-run project answers them readily.
          </p>

          <div className="mt-10 max-w-[28rem]">
            <div aria-hidden="true" className="flex gap-1">
              {QUESTIONS.map((item, index) => (
                <span
                  key={item.question}
                  className={`block h-1.5 flex-1 transition-colors duration-300 ${
                    index < asked.size ? "bg-ink" : "bg-ink/15"
                  }`}
                />
              ))}
            </div>
            <p aria-live="polite" className="mt-3 text-sm tracking-tight text-ink/60">
              <span className="font-medium text-ink tabular-nums">{asked.size}</span> of{" "}
              {QUESTIONS.length} asked
            </p>
          </div>

          <p className="mt-10 max-w-[28rem] text-sm leading-[1.6] text-ink/50">
            A starting point, not legal or financial advice. Take independent
            advice before you buy.
          </p>
        </div>

        <div className="border border-ink/10 bg-paper lg:col-span-7">
          <div className="flex h-12 items-center justify-between border-b border-ink/10 px-5 sm:px-6">
            <span className="text-sm font-medium tracking-tight text-ink">Before you reserve</span>
            <button
              type="button"
              onClick={() => setAsked(new Set())}
              disabled={asked.size === 0}
              className="text-sm tracking-tight text-ink/60 transition-colors duration-150 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:opacity-0"
            >
              Clear
            </button>
          </div>

          <ul>
            {QUESTIONS.map((item, index) => {
              const checked = asked.has(index);
              return (
                <li key={item.question} className="border-t border-ink/10 first:border-t-0">
                  <label className="group flex cursor-pointer gap-4 px-5 py-5 transition-colors duration-150 hover:bg-mist/60 sm:px-6">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggle(index)}
                      className="peer sr-only"
                    />
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex size-5 shrink-0 items-center justify-center border border-ink/30 text-paper transition-colors duration-150 group-hover:border-ink peer-checked:border-ink peer-checked:bg-ink peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ink"
                    >
                      {checked && (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M2.5 6.25L5 8.75L9.5 3.25"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="square"
                          />
                        </svg>
                      )}
                    </span>
                    <span>
                      <span
                        className={`block text-[17px] leading-snug font-medium tracking-tight transition-colors duration-150 ${
                          checked ? "text-ink/45" : "text-ink"
                        }`}
                      >
                        {item.question}
                      </span>
                      <span className="mt-1 block text-[15px] leading-snug text-ink/55">
                        {item.hint}
                      </span>
                    </span>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
