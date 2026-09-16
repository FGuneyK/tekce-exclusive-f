"use client";

import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";
import { COMPANY } from "@/lib/company";
import styles from "./developer-faq.module.css";

type Faq = {
  question: string;
  answer: string;
  link: { label: string; href: string };
};

/**
 * Every answer is built from copy already approved elsewhere on the page or
 * from verified TEKCE information. Commercial terms (exclusivity, fees,
 * timelines) are deliberately absent until they are confirmed.
 */
const FAQS: Faq[] = [
  {
    question: "What exactly does TEKCE Exclusive take on?",
    answer:
      "You bring the project and the authority to sell it. We take on everything between that and a completed sale: positioning and pricing, sales materials, distribution through the partner network, and the management of leads, transactions and reporting.",
    link: { label: "See the four stages", href: "#how-it-works" },
  },
  {
    question: "Who actually sells the units?",
    answer:
      "Two channels working in parallel. TEKCE takes part as a commissioned strategic group partner, alongside qualified independent agencies. Both follow the same commercial logic, so reach grows without the network changing shape.",
    link: { label: "How the network is built", href: "#distribution" },
  },
  {
    question: "Who supports the sale on the ground?",
    answer:
      "TEKCE’s local infrastructure in Spain, Türkiye, North Cyprus and the United Arab Emirates supports viewings, documentation and closing. Independent partners extend that reach further.",
    link: { label: "Explore the markets", href: "#markets" },
  },
  {
    question: "How are agents and brokers rewarded?",
    answer:
      "Independent partners work on commission under a transparent structure. Leads are registered and protected, so the client relationship stays with the agency that introduced it.",
    link: { label: "What partners receive", href: "#partners" },
  },
  {
    question: "Will we see how sales are progressing?",
    answer:
      "Yes. Reporting is part of the work, alongside lead routing and transaction coordination — and the strategy is refined as the market responds.",
    link: { label: "See the Manage stage", href: "#how-it-works" },
  },
  {
    question: "How do we start?",
    answer:
      "Send us the essentials of your project — location, scale, stage and timeline. The first conversation is about how it should be positioned for international buyers.",
    link: { label: "Submit Your Project", href: "/submit-your-project" },
  },
];

const pad = (value: number) => String(value).padStart(2, "0");

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper";

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      width="14"
      height="10"
      viewBox="0 0 14 10"
      fill="none"
      aria-hidden="true"
      className={className}
    >
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

function PlusMinus({ open }: { open: boolean }) {
  return (
    <span aria-hidden="true" className="relative block size-3 shrink-0 self-center">
      <span className="absolute inset-x-0 top-1/2 h-[1.5px] -translate-y-1/2 bg-paper" />
      <span
        className={`absolute inset-y-0 left-1/2 w-[1.5px] -translate-x-1/2 bg-paper transition-transform duration-200 ease-out ${
          open ? "scale-y-0" : "scale-y-100"
        }`}
      />
    </span>
  );
}

function PhoneLine({ className }: { className: string }) {
  return (
    <p className={`text-sm tracking-tight text-paper/55 ${className}`}>
      Something we haven’t answered?{" "}
      <a
        href={COMPANY.phone.href}
        className={`font-medium whitespace-nowrap text-paper transition-colors duration-150 hover:text-paper/75 ${focusRing}`}
      >
        {COMPANY.phone.display}
      </a>
    </p>
  );
}

export function DeveloperFaq() {
  const [active, setActive] = useState(0);
  const [openOnMobile, setOpenOnMobile] = useState<number | null>(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const select = (index: number, moveFocus = false) => {
    const next = (index + FAQS.length) % FAQS.length;
    setActive(next);
    if (moveFocus) tabs.current[next]?.focus();
  };

  // Vertical tablist: arrows move through questions, Home/End jump to the ends.
  const onTabKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const targets: Record<string, number> = {
      ArrowDown: active + 1,
      ArrowUp: active - 1,
      Home: 0,
      End: FAQS.length - 1,
    };
    if (!(event.key in targets)) return;
    event.preventDefault();
    select(targets[event.key], true);
  };

  const current = FAQS[active];

  return (
    <section id="faq" className="scroll-mt-14 bg-ink lg:scroll-mt-28">
      <div className="site-container section-y">
        <h2 className="max-w-[18ch] text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-paper sm:text-[2.5rem] lg:text-5xl">
          Before you send us a project.
        </h2>

        {/* Desktop: a two-pane reader. Questions on the left, one answer at a time on the right. */}
        <div className="mt-14 hidden lg:grid lg:grid-cols-12 lg:gap-x-16">
          <div className="col-span-5">
            <div
              role="tablist"
              aria-orientation="vertical"
              aria-label="Questions from developers"
              onKeyDown={onTabKeyDown}
              className="border-b border-paper/10"
            >
              {FAQS.map((faq, index) => {
                const selected = index === active;
                return (
                  <button
                    key={faq.question}
                    ref={(element) => {
                      tabs.current[index] = element;
                    }}
                    id={`faq-tab-${index}`}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls="faq-panel"
                    tabIndex={selected ? 0 : -1}
                    onClick={() => select(index)}
                    className="group flex w-full items-baseline gap-5 border-t border-paper/10 py-4 text-left focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-paper"
                  >
                    <span
                      className={`w-6 shrink-0 text-sm tabular-nums transition-colors duration-150 ${
                        selected ? "text-paper" : "text-paper/35"
                      }`}
                    >
                      {pad(index + 1)}
                    </span>
                    <span
                      className={`text-[17px] leading-snug tracking-tight transition-colors duration-150 ${
                        selected
                          ? "font-medium text-paper"
                          : "text-paper/55 group-hover:text-paper/85"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`ml-auto block size-1.5 shrink-0 self-center bg-accent transition-opacity duration-200 ${
                        selected ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
            <PhoneLine className="mt-8" />
          </div>

          <div
            id="faq-panel"
            role="tabpanel"
            aria-labelledby={`faq-tab-${active}`}
            className="col-span-7 flex min-h-[26rem] flex-col border border-paper/15 bg-ink-deep p-10"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm tracking-tight text-paper/40 tabular-nums">
                {pad(active + 1)} / {pad(FAQS.length)}
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous question"
                  onClick={() => select(active - 1)}
                  className={`flex size-10 items-center justify-center border border-paper/20 text-paper transition-colors duration-150 hover:border-paper hover:bg-paper hover:text-ink ${focusRing}`}
                >
                  <Arrow className="rotate-180" />
                </button>
                <button
                  type="button"
                  aria-label="Next question"
                  onClick={() => select(active + 1)}
                  className={`flex size-10 items-center justify-center border border-paper/20 text-paper transition-colors duration-150 hover:border-paper hover:bg-paper hover:text-ink ${focusRing}`}
                >
                  <Arrow />
                </button>
              </div>
            </div>

            <div key={active} className={`${styles.answer} mt-10 flex flex-1 flex-col`}>
              <h3 className="max-w-[26ch] text-[1.75rem] leading-[1.2] font-semibold tracking-[-0.02em] text-paper">
                {current.question}
              </h3>
              <p className="mt-5 max-w-[40rem] text-lg leading-[1.65] text-paper/75">
                {current.answer}
              </p>
              <Link
                href={current.link.href}
                className={`group mt-auto inline-flex items-center gap-2 self-start pt-10 text-sm font-medium tracking-tight text-paper ${focusRing}`}
              >
                {current.link.label}
                <Arrow className="transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Below lg: an accordion, one answer open at a time. */}
        <ul className="mt-10 border-b border-paper/10 lg:hidden">
          {FAQS.map((faq, index) => {
            const open = index === openOnMobile;
            return (
              <li key={faq.question} className="border-t border-paper/10">
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => setOpenOnMobile(open ? null : index)}
                    className="flex w-full items-baseline gap-4 py-5 text-left focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-paper"
                  >
                    <span className="w-6 shrink-0 text-sm text-paper/40 tabular-nums">
                      {pad(index + 1)}
                    </span>
                    <span className="flex-1 text-[17px] leading-snug font-medium tracking-tight text-paper">
                      {faq.question}
                    </span>
                    <PlusMinus open={open} />
                  </button>
                </h3>
                {open && (
                  <div id={`faq-answer-${index}`} className={`${styles.answer} pb-6 pl-10`}>
                    <p className="text-base leading-[1.65] text-paper/75">{faq.answer}</p>
                    <Link
                      href={faq.link.href}
                      className={`group mt-4 inline-flex items-center gap-2 text-sm font-medium tracking-tight text-paper ${focusRing}`}
                    >
                      {faq.link.label}
                      <Arrow />
                    </Link>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
        <PhoneLine className="mt-8 lg:hidden" />
      </div>
    </section>
  );
}
