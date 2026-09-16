"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { DataPanel, type PanelData } from "@/components/data-panel";

type Reason = { title: string; text: string; panel: PanelData };

/**
 * Buyer benefits drawn from the verified model: prepared projects with live
 * availability, one price list across the network, registered introductions,
 * and local support in four markets. The panels are illustrative mock data
 * for an unnamed project and carry no prices.
 */
const REASONS: Reason[] = [
  {
    title: "The full picture, before you commit.",
    text: "Projects reach buyers prepared: floor plans, specifications, visuals and live availability, gathered in one place. Most of the questions you would normally chase are answered up front.",
    panel: {
      title: "Project file",
      tag: "Complete",
      rows: [
        { label: "Floor plans", value: "Ready", marker: "check" },
        { label: "Specifications", value: "Ready", marker: "check" },
        { label: "Visuals", value: "Ready", marker: "check" },
        { label: "Availability", value: "Live", marker: "square" },
      ],
    },
  },
  {
    title: "One price, whoever you ask.",
    text: "Every adviser in the network works from the same price list. The price of an apartment does not change with the door you come through.",
    panel: {
      title: "Unit A-112",
      tag: "Price",
      rows: [
        { label: "Direct from TEKCE Exclusive", value: "List price", marker: "check" },
        { label: "Via your agency", value: "List price", marker: "check" },
        { label: "Via another agency", value: "List price", marker: "check" },
      ],
    },
  },
  {
    title: "First choice of the building.",
    text: "Buying new, early in a project, means choosing from more of it: the floor, the orientation, the view. Live availability shows what is still open.",
    panel: {
      title: "Availability",
      tag: "Block B",
      rows: [
        { label: "Floor 6 · Sea view", value: "Available", marker: "square" },
        { label: "Floor 5 · Sea view", value: "Available", marker: "square" },
        { label: "Floor 4 · Garden view", value: "Reserved" },
        { label: "Floor 3 · Garden view", value: "Available", marker: "square" },
      ],
    },
  },
  {
    title: "An adviser who stays with you.",
    text: "Buy directly from TEKCE Exclusive, or through a partner agency you already trust. An agency’s introduction is registered, so the person who advised you is the person who sees the purchase through.",
    panel: {
      title: "Your purchase",
      tag: "Registered",
      rows: [
        { label: "Adviser", value: "Your agency" },
        { label: "Introduction", value: "Protected", marker: "lock" },
        { label: "Relationship", value: "Through closing", marker: "check" },
      ],
    },
  },
  {
    title: "Support where the property is.",
    text: "TEKCE’s local infrastructure supports viewings, documentation and closing in Spain, Türkiye, North Cyprus and the United Arab Emirates, so distance does not become the problem.",
    panel: {
      title: "On the ground",
      tag: "Your purchase",
      rows: [
        { label: "Viewing", value: "Arranged", marker: "check" },
        { label: "Documentation", value: "In progress", marker: "square" },
        { label: "Closing", value: "Scheduled", marker: "square" },
      ],
    },
  },
];

// Unsplash photo-1758565811176-ccd94357a844
const IMAGE =
  "https://images.unsplash.com/photo-1758565811176-ccd94357a844?auto=format&fit=crop&w=1400&h=1600&q=80";

const pad = (value: number) => String(value).padStart(2, "0");

export function BuyerReasons() {
  const [active, setActive] = useState(0);
  const items = useRef<(HTMLLIElement | null)[]>([]);

  // The reason crossing the middle of the viewport drives the pinned frame.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(Number((entry.target as HTMLElement).dataset.index));
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    items.current.forEach((item) => item && observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why" className="scroll-mt-14 bg-mist lg:scroll-mt-28">
      <div className="site-container section-y">
        <h2 className="max-w-[18ch] text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-ink sm:text-[2.5rem] lg:text-5xl">
          Why buy new, through TEKCE Exclusive.
        </h2>

        {/*
          Desktop: the photograph is pinned while the reasons scroll past, and
          its panel changes with the reason in view. Phones get each panel
          inline above its reason instead.
        */}
        <div className="mt-12 lg:mt-16 lg:grid lg:grid-cols-12 lg:gap-x-16">
          <div className="hidden lg:col-span-6 lg:block">
            <div
              aria-hidden="true"
              className="sticky top-36 h-[min(44rem,calc(100vh-11rem))] overflow-hidden bg-ink"
            >
              <Image src={IMAGE} alt="" fill sizes="50vw" className="object-cover" />
              <div className="absolute inset-0 bg-ink/15" />
              {REASONS.map((reason, index) => (
                <DataPanel
                  key={reason.title}
                  panel={reason.panel}
                  className={`absolute bottom-8 left-8 w-[min(21rem,calc(100%-4rem))] transition duration-500 ease-out ${
                    index === active ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                  }`}
                />
              ))}
              <span className="absolute top-6 right-6 text-sm tracking-tight text-paper tabular-nums">
                {pad(active + 1)} / {pad(REASONS.length)}
              </span>
            </div>
          </div>

          <ol className="lg:col-span-5 lg:col-start-8">
            {REASONS.map((reason, index) => (
              <li
                key={reason.title}
                ref={(element) => {
                  items.current[index] = element;
                }}
                data-index={index}
                className={`border-t border-ink/10 py-10 first:border-t-0 first:pt-0 lg:flex lg:min-h-[70vh] lg:flex-col lg:justify-center lg:border-t-0 lg:py-0 lg:transition-opacity lg:duration-300 ${
                  index === active ? "lg:opacity-100" : "lg:opacity-35"
                }`}
              >
                <DataPanel panel={reason.panel} className="mb-8 w-full max-w-[22rem] lg:hidden" />
                <span className="block text-sm text-ink/40 tabular-nums">{pad(index + 1)}</span>
                <h3 className="mt-3 max-w-[18ch] text-[1.75rem] leading-[1.15] font-semibold tracking-[-0.025em] text-ink lg:text-[2.25rem]">
                  {reason.title}
                </h3>
                <p className="mt-4 max-w-[30rem] text-[17px] leading-[1.65] text-ink/70">
                  {reason.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
