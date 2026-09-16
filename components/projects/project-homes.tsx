"use client";

import { useState } from "react";
import { AvailabilityStrip } from "@/components/projects/availability-strip";
import { summaryOf, type Project, type Unit } from "@/lib/projects";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

const euro = (value: number) =>
  `€${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

const sizeRange = (units: Unit[]) => {
  const areas = units
    .map((unit) => unit.total)
    .filter((area): area is number => area !== null);
  if (areas.length === 0) return "—";
  const low = Math.min(...areas);
  const high = Math.max(...areas);
  return low === high ? `${low} m²` : `${low}–${high} m²`;
};

/** One line per bedroom count — the summary a buyer scans before the detail. */
const groupByBeds = (units: Unit[]) => {
  const beds = [
    ...new Set(units.map((unit) => unit.beds).filter((n): n is number => n !== null)),
  ].sort((a, b) => a - b);

  return beds.map((count) => {
    const all = units.filter((unit) => unit.beds === count);
    const free = all.filter((unit) => !unit.sold);
    const prices = free
      .map((unit) => unit.price)
      .filter((price): price is number => price !== null);
    return {
      label: count === 1 ? "1 bedroom" : `${count} bedrooms`,
      size: sizeRange(free.length > 0 ? free : all),
      available: free.length,
      total: all.length,
      from: prices.length > 0 ? euro(Math.min(...prices)) : "—",
    };
  });
};

type Column = {
  key: string;
  label: string;
  numeric?: boolean;
  secondary?: boolean;
  value: (unit: Unit) => string;
  has: (unit: Unit) => boolean;
};

const COLUMNS: Column[] = [
  { key: "unit", label: "Unit", value: (u) => u.id, has: () => true },
  {
    key: "floor",
    label: "Floor",
    numeric: true,
    secondary: true,
    value: (u) => (u.floor === "" ? "—" : u.floor === "0" ? "Ground" : u.floor),
    has: (u) => u.floor !== "",
  },
  {
    key: "beds",
    label: "Beds",
    numeric: true,
    value: (u) => (u.beds === null ? "—" : String(u.beds)),
    has: (u) => u.beds !== null,
  },
  {
    key: "baths",
    label: "Baths",
    numeric: true,
    secondary: true,
    value: (u) => (u.baths === null ? "—" : String(u.baths)),
    has: (u) => u.baths !== null,
  },
  {
    key: "internal",
    label: "Internal",
    numeric: true,
    secondary: true,
    value: (u) => (u.internal === null ? "—" : `${u.internal} m²`),
    has: (u) => u.internal !== null,
  },
  {
    key: "total",
    label: "Total",
    numeric: true,
    value: (u) => (u.total === null ? "—" : `${u.total} m²`),
    has: (u) => u.total !== null,
  },
  {
    key: "price",
    label: "Price",
    numeric: true,
    value: (u) => (u.price === null ? "—" : euro(u.price)),
    has: (u) => u.price !== null,
  },
];

/**
 * The summary first — one row per bedroom count — with the developer's full
 * unit list folded away behind it. The detail is the reason to trust the
 * summary, but it should not be what a reader has to scroll through.
 */
export function ProjectHomes({ project }: { project: Project }) {
  const [showAll, setShowAll] = useState(false);
  const [hideSold, setHideSold] = useState(false);
  const { available, total } = summaryOf(project);

  const single = total === 1;
  const groups = groupByBeds(project.units);
  const columns = COLUMNS.filter(
    (column) =>
      project.units.some(column.has) &&
      !(single && column.key === "floor"),
  );
  const rows = hideSold
    ? project.units.filter((unit) => !unit.sold)
    : project.units;

  const head =
    "border-b border-ink/20 px-3 py-2.5 text-[13px] font-medium whitespace-nowrap text-ink/55 first:pl-0 last:pr-0";

  return (
    <section id="homes" className="scroll-mt-16 lg:scroll-mt-32">
      <div className="site-container section-y">
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
          <div>
            <h2 className="text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-ink sm:text-[2.5rem]">
              {single ? `The ${project.types[0].toLowerCase()}.` : "What is left."}
            </h2>
            <p className="mt-3 max-w-[54ch] text-[17px] leading-[1.6] text-ink/70">
              {single
                ? "One unit, one price, and it is still available."
                : `${available} of ${total} homes are still for sale. Sold homes stay on the list, so you can see how the building has filled up.`}
            </p>
          </div>

          {!single && (
            <button
              type="button"
              aria-expanded={showAll}
              aria-controls="unit-list"
              onClick={() => setShowAll((open) => !open)}
              className={`inline-flex h-11 items-center gap-2 border border-ink/25 px-5 text-sm font-medium tracking-tight text-ink transition-colors duration-150 hover:border-ink hover:bg-ink/5 ${focusRing}`}
            >
              {showAll ? "Hide the unit list" : `Show all ${total} units`}
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                aria-hidden="true"
                className={`transition-transform duration-200 ease-out ${showAll ? "rotate-180" : ""}`}
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          )}
        </div>

        {!single && (
          <>
            <table className="mt-8 w-full border-collapse text-[15px] tracking-tight">
              <thead>
                <tr>
                  <th scope="col" className={`${head} text-left`}>
                    Home
                  </th>
                  <th scope="col" className={`${head} text-right`}>
                    Size
                  </th>
                  <th scope="col" className={`${head} text-right`}>
                    Available
                  </th>
                  <th scope="col" className={`${head} text-right`}>
                    From
                  </th>
                </tr>
              </thead>
              <tbody>
                {groups.map((group) => (
                  <tr key={group.label} className="border-b border-ink/10">
                    <td className="px-3 py-3.5 pl-0 font-medium text-ink">
                      {group.label}
                    </td>
                    <td className="px-3 py-3.5 text-right text-ink/75 tabular-nums">
                      {group.size}
                    </td>
                    <td className="px-3 py-3.5 text-right text-ink/75 tabular-nums">
                      {group.available} of {group.total}
                    </td>
                    <td className="px-3 py-3.5 pr-0 text-right font-medium text-ink tabular-nums">
                      {group.from}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-6">
              <AvailabilityStrip units={project.units} className="h-3" />
              <p className="mt-2.5 text-[13px] tracking-tight text-ink/45">
                One mark per home, in unit order. Filled marks are still for
                sale.
              </p>
            </div>
          </>
        )}

        {(showAll || single) && (
          <div id="unit-list" className={single ? "" : "mt-10 border-t border-ink/15 pt-8"}>
            {!single && (
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-ink">
                  Every unit
                </h3>
                <label className="group flex min-h-11 cursor-pointer items-center gap-3">
                  <input
                    type="checkbox"
                    checked={hideSold}
                    onChange={() => setHideSold((value) => !value)}
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
                  <span className="text-[15px] tracking-tight text-ink/75 transition-colors duration-150 group-hover:text-ink">
                    Hide sold homes
                  </span>
                </label>
              </div>
            )}

            <table className="mt-5 w-full border-collapse text-[15px] tracking-tight">
              <thead>
                <tr>
                  {columns.map((column) => (
                    <th
                      key={column.key}
                      scope="col"
                      className={`${head} ${column.numeric ? "text-right" : "text-left"} ${
                        column.secondary ? "hidden sm:table-cell" : ""
                      }`}
                    >
                      {column.label}
                    </th>
                  ))}
                  <th scope="col" className={`${head} text-right`}>
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((unit) => (
                  <tr key={unit.id} className="border-b border-ink/10">
                    {columns.map((column) => (
                      <td
                        key={column.key}
                        className={`px-3 py-2.5 whitespace-nowrap first:pl-0 last:pr-0 ${
                          column.numeric ? "text-right tabular-nums" : "text-left"
                        } ${column.secondary ? "hidden sm:table-cell" : ""} ${
                          unit.sold ? "text-ink/40" : "text-ink"
                        }`}
                      >
                        {column.key === "unit" ? (
                          <span className="font-medium">{column.value(unit)}</span>
                        ) : (
                          column.value(unit)
                        )}
                      </td>
                    ))}
                    <td
                      className={`px-3 py-2.5 text-right whitespace-nowrap ${
                        unit.sold ? "text-ink/40" : "text-ink"
                      }`}
                    >
                      <span className="inline-flex items-center gap-2">
                        <span
                          aria-hidden="true"
                          className={`size-1.5 ${unit.sold ? "bg-ink/25" : "bg-ink"}`}
                        />
                        {unit.sold ? "Sold" : "Available"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="mt-5 max-w-[64ch] text-[13px] leading-[1.6] text-ink/45">
              Prices are the developer&rsquo;s base prices in euros, before
              purchase costs and taxes.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
