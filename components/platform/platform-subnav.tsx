"use client";

import { useEffect, useState } from "react";

const ITEMS = [
  { label: "How it works", id: "how-it-works" },
  { label: "Distribution ecosystem", id: "distribution" },
  { label: "TeleProperty", id: "teleproperty" },
  { label: "Sales & CRM", id: "sales-crm" },
  { label: "Developer dashboard", id: "developer-dashboard" },
  { label: "Partner platform", id: "partner-platform" },
];

/**
 * Sticky in-page navigation for the platform's modules. It sits directly
 * under the site header (57px on phones, 110px from lg) and marks the
 * module currently crossing the middle of the viewport.
 */
export function PlatformSubnav() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ITEMS.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Platform sections"
      className="sticky top-[57px] z-40 border-b border-ink/10 bg-paper lg:top-[110px]"
    >
      <div className="site-container">
        <ul className="-mx-5 flex h-12 gap-6 overflow-x-auto px-5 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:mx-0 lg:gap-8 lg:px-0 [&::-webkit-scrollbar]:hidden">
          {ITEMS.map((item) => {
            const current = item.id === active;
            return (
              <li key={item.id} className="shrink-0">
                <a
                  href={`#${item.id}`}
                  aria-current={current ? "location" : undefined}
                  className={`relative flex h-full items-center text-sm tracking-tight whitespace-nowrap transition-colors duration-150 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ink ${
                    current ? "font-medium text-ink" : "text-ink/55 hover:text-ink"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 bottom-0 h-0.5 bg-ink transition-opacity duration-200 ${
                      current ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
