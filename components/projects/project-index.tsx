"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { MARKETS } from "@/lib/navigation";
import { AvailabilityStrip } from "@/components/projects/availability-strip";
import {
  PROJECTS,
  summaryOf,
  type HomeType,
  type Project,
} from "@/lib/projects";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

/** Deterministic, so the server and client render the same string. */
const euro = (value: number) =>
  `€${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

const range = ([low, high]: [number, number], unit = "") =>
  low === high ? `${low}${unit}` : `${low}–${high}${unit}`;

const bedRange = (beds: number[]) =>
  beds.length === 1 ? `${beds[0]}` : `${beds[0]}–${beds[beds.length - 1]}`;

type FacetKey = "market" | "beds" | "price" | "type";
type Filters = Record<FacetKey, string[]>;

const NO_FILTERS: Filters = { market: [], beds: [], price: [], type: [] };

const PRICE_BANDS = [
  { id: "to-200", label: "Up to €200,000", low: 0, high: 200_000 },
  { id: "200-500", label: "€200,000 – €500,000", low: 200_000, high: 500_000 },
  { id: "from-500", label: "€500,000 and above", low: 500_000, high: Infinity },
];

/** Does one project satisfy one value of one facet? */
const MATCHES: Record<FacetKey, (project: Project, value: string) => boolean> = {
  market: (project, value) => project.market === value,
  beds: (project, value) => summaryOf(project).beds.includes(Number(value)),
  price: (project, value) => {
    const band = PRICE_BANDS.find((entry) => entry.id === value);
    if (!band) return false;
    const [low, high] = summaryOf(project).price;
    return low <= band.high && high >= band.low;
  },
  type: (project, value) => project.types.includes(value as HomeType),
};

/*
  Facet options come out of the project list itself, so the rail can never
  offer a market, a bedroom count or a home type that nothing in the list has.
*/
const unique = <T,>(values: T[]) => [...new Set(values)];

const FACETS: { key: FacetKey; legend: string; options: { value: string; label: string }[] }[] = [
  {
    key: "market",
    legend: "Market",
    options: unique(PROJECTS.map((project) => project.market)).map((href) => ({
      value: href,
      label: MARKETS.find((market) => market.href === href)?.label ?? href,
    })),
  },
  {
    key: "beds",
    legend: "Bedrooms",
    options: unique(PROJECTS.flatMap((project) => summaryOf(project).beds))
      .sort((a, b) => a - b)
      .map((beds) => ({
        value: String(beds),
        label: beds === 1 ? "1 bedroom" : `${beds} bedrooms`,
      })),
  },
  {
    key: "price",
    legend: "Price",
    options: PRICE_BANDS.map((band) => ({ value: band.id, label: band.label })),
  },
  {
    key: "type",
    legend: "Home",
    options: unique(PROJECTS.flatMap((project) => project.types)).map((type) => ({
      value: type,
      label: `${type}s`,
    })),
  },
];

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price, low to high" },
  { id: "price-desc", label: "Price, high to low" },
  { id: "available", label: "Most homes available" },
];

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

function Figure({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[13px] tracking-tight text-ink/50">{label}</dt>
      <dd className="mt-0.5 text-[15px] font-medium tracking-tight text-ink tabular-nums">
        {value}
      </dd>
    </div>
  );
}

function ProjectRow({ project }: { project: Project }) {
  const { available, total, price, area, beds } = summaryOf(project);

  return (
    <li className="border-b border-ink/10">
      <Link
        href={`/projects/${project.slug}`}
        className={`group grid gap-5 py-6 sm:grid-cols-12 sm:gap-8 lg:py-8 ${focusRing}`}
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-mist sm:col-span-5 sm:aspect-[16/11]">
          <Image
            src={project.image}
            alt={project.alt}
            fill
            sizes="(min-width: 1024px) 34vw, (min-width: 640px) 40vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>

        <div className="sm:col-span-7">
          <p className="flex flex-wrap items-center gap-x-2 text-[13px] tracking-tight text-ink/50">
            <span className="tabular-nums">#{project.reference}</span>
            <span aria-hidden="true">·</span>
            <span>{project.types.join(" & ")}s</span>
            {project.stage && (
              <>
                <span aria-hidden="true">·</span>
                <span>{project.stage}</span>
              </>
            )}
          </p>

          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.025em] text-ink lg:text-[1.75rem]">
            {project.name}
          </h3>
          <p className="mt-1 text-[15px] tracking-tight text-ink/60">
            {project.location}, {project.country}
          </p>

          <p className="mt-3 max-w-[46ch] text-[15px] leading-[1.6] text-ink/75">
            {project.summary}
          </p>

          <div className="mt-6">
            <AvailabilityStrip units={project.units} />
            <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
              <Figure label="From" value={euro(price[0])} />
              <Figure label="Bedrooms" value={bedRange(beds)} />
              <Figure label="Size" value={range(area, " m²")} />
              <Figure
                label="Homes available"
                value={`${available} of ${total}`}
              />
            </dl>
          </div>

          <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium tracking-tight text-ink">
            View project
            <Arrow className="transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </li>
  );
}

export function ProjectIndex() {
  const [filters, setFilters] = useState<Filters>(NO_FILTERS);
  const [sort, setSort] = useState("featured");
  const [railOpen, setRailOpen] = useState(false);

  const active = Object.values(filters).reduce(
    (count, values) => count + values.length,
    0,
  );

  const toggle = (key: FacetKey, value: string) =>
    setFilters((current) => ({
      ...current,
      [key]: current[key].includes(value)
        ? current[key].filter((entry) => entry !== value)
        : [...current[key], value],
    }));

  /** A facet with nothing ticked means "all", not "none". */
  const passes = (project: Project, key: FacetKey, values: string[]) =>
    values.length === 0 || values.some((value) => MATCHES[key](project, value));

  const results = useMemo(() => {
    const matched = PROJECTS.filter((project) =>
      (Object.keys(filters) as FacetKey[]).every((key) =>
        passes(project, key, filters[key]),
      ),
    );

    const ordered = [...matched];
    if (sort === "price-asc")
      ordered.sort((a, b) => summaryOf(a).price[0] - summaryOf(b).price[0]);
    if (sort === "price-desc")
      ordered.sort((a, b) => summaryOf(b).price[1] - summaryOf(a).price[1]);
    if (sort === "available")
      ordered.sort((a, b) => summaryOf(b).available - summaryOf(a).available);
    return ordered;
  }, [filters, sort]);

  /*
    Counts beside each option ignore that option's own facet, so ticking
    "Spain" never makes the other markets read zero.
  */
  const countFor = (key: FacetKey, value: string) =>
    PROJECTS.filter(
      (project) =>
        MATCHES[key](project, value) &&
        (Object.keys(filters) as FacetKey[])
          .filter((other) => other !== key)
          .every((other) => passes(project, other, filters[other])),
    ).length;

  const homes = results.reduce(
    (sum, project) => sum + summaryOf(project).available,
    0,
  );

  return (
    <section className="site-container section-y lg:grid lg:grid-cols-12 lg:gap-x-12">
      {/* Filter rail — a sidebar on desktop, a disclosure on phones. */}
      <div className="lg:col-span-3">
        <div className="flex items-center justify-between border-b border-ink/10 pb-4 lg:border-none lg:pb-0">
          {/* Phones open the rail; from lg it is always open, so the same
              line becomes a plain heading. */}
          <button
            type="button"
            aria-expanded={railOpen}
            aria-controls="project-filters"
            onClick={() => setRailOpen((open) => !open)}
            className={`inline-flex min-h-11 items-center gap-2 text-sm font-medium tracking-tight text-ink lg:hidden ${focusRing}`}
          >
            Filters
            {active > 0 && (
              <span className="inline-flex size-5 items-center justify-center bg-ink text-[11px] font-medium text-paper tabular-nums">
                {active}
              </span>
            )}
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              aria-hidden="true"
              className={`transition-transform duration-200 ease-out ${
                railOpen ? "rotate-180" : ""
              }`}
            >
              <path
                d="M1 1L5 5L9 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <h2 className="hidden items-center gap-2 text-sm font-medium tracking-tight text-ink lg:flex">
            Filters
            {active > 0 && (
              <span className="inline-flex size-5 items-center justify-center bg-ink text-[11px] font-medium text-paper tabular-nums">
                {active}
              </span>
            )}
          </h2>

          {active > 0 && (
            <button
              type="button"
              onClick={() => setFilters(NO_FILTERS)}
              className={`text-sm tracking-tight text-ink/55 underline-offset-4 transition-colors duration-150 hover:text-ink hover:underline ${focusRing}`}
            >
              Clear all
            </button>
          )}
        </div>

        <div
          id="project-filters"
          className={`lg:sticky lg:top-[126px] lg:block ${railOpen ? "block" : "hidden"}`}
        >
          {FACETS.map((facet) => (
            <fieldset key={facet.key} className="border-b border-ink/10 py-5 lg:py-6">
              <legend className="text-[13px] font-medium tracking-tight text-ink">
                {facet.legend}
              </legend>
              <div className="mt-3 flex flex-col gap-1">
                {facet.options.map((option) => {
                  const checked = filters[facet.key].includes(option.value);
                  const count = countFor(facet.key, option.value);
                  return (
                    <label
                      key={option.value}
                      className="group flex min-h-9 cursor-pointer items-center gap-3"
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggle(facet.key, option.value)}
                        className="peer sr-only"
                      />
                      <span
                        aria-hidden="true"
                        className="flex size-[18px] shrink-0 items-center justify-center border border-ink/25 text-paper transition-colors duration-150 peer-checked:border-ink peer-checked:bg-ink peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ink group-hover:border-ink"
                      >
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M2.5 6.25L5 8.75L9.5 3.25"
                            stroke="currentColor"
                            strokeWidth="1.75"
                            strokeLinecap="square"
                          />
                        </svg>
                      </span>
                      <span className="flex-1 text-[15px] tracking-tight text-ink/75 transition-colors duration-150 peer-checked:text-ink group-hover:text-ink">
                        {option.label}
                      </span>
                      <span className="text-[13px] text-ink/40 tabular-nums">
                        {count}
                      </span>
                    </label>
                  );
                })}
              </div>
            </fieldset>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="mt-8 lg:col-span-9 lg:mt-0">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink/10 pb-4">
          <p aria-live="polite" className="text-sm tracking-tight text-ink/60">
            <span className="font-medium text-ink tabular-nums">
              {results.length}
            </span>{" "}
            {results.length === 1 ? "project" : "projects"}
            <span aria-hidden="true"> · </span>
            <span className="tabular-nums">{homes}</span>{" "}
            {homes === 1 ? "home" : "homes"} available
          </p>

          <div className="flex items-center gap-3">
            <label
              htmlFor="project-sort"
              className="text-sm tracking-tight text-ink/60"
            >
              Sort
            </label>
            <div className="relative">
              <select
                id="project-sort"
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className={`h-9 appearance-none border border-ink/20 bg-paper pr-9 pl-3 text-sm tracking-tight text-ink ${focusRing}`}
              >
                {SORTS.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-ink/50"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {results.length > 0 ? (
          <ul>
            {results.map((project) => (
              <ProjectRow key={project.slug} project={project} />
            ))}
          </ul>
        ) : (
          <div className="border-b border-ink/10 py-20 text-center">
            <p className="text-lg tracking-tight text-ink">
              Nothing in the list matches that combination.
            </p>
            <p className="mx-auto mt-2 max-w-[38ch] text-[15px] leading-[1.6] text-ink/60">
              We only represent projects we have taken on, so the list is short
              and honest. Widen the filters, or tell us what you are looking
              for.
            </p>
            <button
              type="button"
              onClick={() => setFilters(NO_FILTERS)}
              className={`mt-6 inline-flex h-11 min-w-[11.5rem] items-center justify-center border border-ink/25 px-5 text-sm font-medium tracking-tight text-ink transition-colors duration-150 hover:border-ink hover:bg-ink/5 ${focusRing}`}
            >
              Clear the filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
