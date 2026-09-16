"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FEATURED_PROJECTS } from "@/lib/projects";

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

/*
  The track starts on the content grid and runs out past the right edge of
  the viewport, so the next frame is always visible. Above 90rem the inset
  follows the centred container.
*/
const trackInset =
  "px-5 scroll-pl-5 sm:px-8 sm:scroll-pl-8 lg:px-10 lg:scroll-pl-10 min-[90rem]:px-[calc((100vw-90rem)/2+2.5rem)] min-[90rem]:scroll-pl-[calc((100vw-90rem)/2+2.5rem)]";

export function CurrentProjects() {
  const track = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const updateEdges = () => {
    const element = track.current;
    if (!element) return;
    setEdges({
      start: element.scrollLeft <= 4,
      end: element.scrollLeft + element.clientWidth >= element.scrollWidth - 4,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, []);

  const step = (direction: 1 | -1) => {
    const element = track.current;
    const card = element?.querySelector("li");
    if (!element || !card) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    element.scrollBy({
      left: direction * (card.getBoundingClientRect().width + 20),
      behavior: reduce ? "auto" : "smooth",
    });
  };

  const control = `flex size-10 items-center justify-center border border-paper/20 text-paper transition-colors duration-150 hover:border-paper hover:bg-paper hover:text-ink disabled:pointer-events-none disabled:opacity-30 ${focusRing}`;

  return (
    <section id="projects" className="scroll-mt-14 bg-ink lg:scroll-mt-28">
      <div className="section-y">
        <div className="site-container flex items-end justify-between gap-8">
          <h2 className="max-w-[20ch] text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-paper sm:text-[2.5rem] lg:text-5xl">
            Current projects.
          </h2>
          <div className="flex shrink-0 items-center gap-6 pb-1.5">
            <Link
              href="/projects"
              className={`group hidden items-center gap-2 text-sm font-medium tracking-tight text-paper sm:inline-flex ${focusRing}`}
            >
              All projects
              <Arrow className="transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
            </Link>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous project"
                aria-controls="current-projects-track"
                disabled={edges.start}
                onClick={() => step(-1)}
                className={control}
              >
                <Arrow className="rotate-180" />
              </button>
              <button
                type="button"
                aria-label="Next project"
                aria-controls="current-projects-track"
                disabled={edges.end}
                onClick={() => step(1)}
                className={control}
              >
                <Arrow />
              </button>
            </div>
          </div>
        </div>

        <ul
          id="current-projects-track"
          ref={track}
          onScroll={updateEdges}
          className={`mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto [scrollbar-width:none] lg:mt-14 lg:gap-5 [&::-webkit-scrollbar]:hidden ${trackInset}`}
        >
          {FEATURED_PROJECTS.map((project) => (
            <li key={project.slug} className="w-[85%] shrink-0 snap-start sm:w-[62%] lg:w-[46rem]">
              <Link
                href={`/projects/${project.slug}`}
                className={`group relative block aspect-[4/5] overflow-hidden bg-ink-deep sm:aspect-[16/10] ${focusRing}`}
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(min-width: 1024px) 736px, (min-width: 640px) 62vw, 85vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden="true"
                  className="from-ink/85 via-ink/30 absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-5 lg:p-7">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.02em] text-paper lg:text-[1.75rem]">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-sm tracking-tight text-paper/75">
                      {project.location}, {project.country}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="flex size-10 shrink-0 items-center justify-center border border-paper/40 text-paper transition-colors duration-200 group-hover:border-paper group-hover:bg-paper group-hover:text-ink"
                  >
                    <Arrow />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="site-container">
          <Link
            href="/projects"
            className={`group mt-8 inline-flex items-center gap-2 text-sm font-medium tracking-tight text-paper sm:hidden ${focusRing}`}
          >
            All projects
            <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
