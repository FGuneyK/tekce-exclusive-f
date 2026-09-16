"use client";

import Image from "next/image";
import Link from "next/link";
import { useSyncExternalStore } from "react";
import { MARKET_DETAILS, type Market } from "@/lib/markets";

/*
  Live local time, minute precision. The server renders a placeholder, so the
  prerendered HTML never carries a stale build-time clock and hydration stays
  clean; the browser fills in the real time immediately.
*/
const subscribe = (onChange: () => void) => {
  const id = window.setInterval(onChange, 5000);
  return () => window.clearInterval(id);
};
const getMinute = () => Math.floor(Date.now() / 60_000) * 60_000;
const getServerMinute = () => null;

function useMinute() {
  return useSyncExternalStore(subscribe, getMinute, getServerMinute);
}

function localTime(minute: number, timeZone: string) {
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
    timeZone,
  }).format(minute);
}

function utcOffset(minute: number, timeZone: string) {
  return new Intl.DateTimeFormat("en-US", { timeZone, timeZoneName: "shortOffset" })
    .formatToParts(minute)
    .find((part) => part.type === "timeZoneName")?.value;
}

function Arrow() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
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

function MarketRow({
  market,
  index,
  minute,
}: {
  market: Market;
  index: number;
  minute: number | null;
}) {
  const time = minute === null ? null : localTime(minute, market.timeZone);
  const offset = minute === null ? null : utcOffset(minute, market.timeZone);

  return (
    <li className="border-t border-ink/10">
      <Link
        href={market.href}
        className="group relative isolate block overflow-hidden focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-paper"
      >
        {/*
          Below lg the photograph sits behind every row, static. From lg it
          is hidden until hover or keyboard focus, then wipes in from the left
          and the type turns white.
        */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 lg:[clip-path:inset(0_100%_0_0)] lg:transition-[clip-path] lg:duration-700 lg:ease-[cubic-bezier(0.7,0,0.2,1)] lg:group-hover:[clip-path:inset(0_0_0_0)] lg:group-focus-visible:[clip-path:inset(0_0_0_0)]"
        >
          <Image src={market.image} alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-ink/55" />
        </div>

        <div className="site-container grid grid-cols-[2rem_minmax(0,1fr)_auto] items-center gap-4 py-9 sm:py-10 lg:h-40 lg:grid-cols-[4rem_minmax(0,1fr)_auto_2.5rem] lg:gap-8 lg:py-0">
          <span className="self-start pt-2 text-sm text-paper/60 tabular-nums lg:text-ink/40 transition-colors duration-500 lg:self-center lg:pt-0 lg:group-hover:text-paper/60 lg:group-focus-visible:text-paper/60">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="text-[2rem] leading-[1.02] font-bold tracking-[-0.035em] text-paper transition-colors lg:text-ink duration-500 sm:text-5xl xl:text-7xl lg:group-hover:text-paper lg:group-focus-visible:text-paper">
            {market.label}
          </span>

          <span className="text-right">
            <span className="block text-lg font-medium tracking-tight text-paper tabular-nums transition-colors lg:text-ink duration-500 lg:text-2xl lg:group-hover:text-paper lg:group-focus-visible:text-paper">
              {time ?? "––:––"}
            </span>
            <span className="mt-0.5 block text-xs tracking-tight whitespace-nowrap text-paper/75 transition-colors lg:text-ink/50 duration-500 sm:text-sm lg:group-hover:text-paper/70 lg:group-focus-visible:text-paper/70">
              Local time{offset ? ` · ${offset}` : ""}
            </span>
          </span>

          <span
            aria-hidden="true"
            className="hidden size-10 items-center justify-center border border-ink/20 text-ink transition-colors duration-500 lg:flex lg:group-hover:border-paper lg:group-hover:text-paper lg:group-focus-visible:border-paper lg:group-focus-visible:text-paper"
          >
            <Arrow />
          </span>
        </div>
      </Link>
    </li>
  );
}

export function Markets() {
  const minute = useMinute();

  return (
    <section id="markets" className="scroll-mt-14 bg-mist lg:scroll-mt-28">
      <div className="section-y">
        <div className="site-container lg:flex lg:items-end lg:justify-between lg:gap-20">
          <h2 className="max-w-[16ch] text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-ink sm:text-[2.5rem] lg:text-5xl">
            Four markets. One working day.
          </h2>
          <p className="mt-6 max-w-[28rem] shrink-0 text-[17px] leading-[1.6] text-ink/70 lg:mt-0 lg:pb-1.5">
            In each of them, TEKCE’s local infrastructure supports what
            international buyers need on the ground: viewings, documentation
            and closing.
          </p>
        </div>

        {/* Rows run edge to edge so the photographs can too; their content stays on the grid. */}
        <ul className="mt-14 border-b border-ink/10 lg:mt-20">
          {MARKET_DETAILS.map((market, index) => (
            <MarketRow key={market.href} market={market} index={index} minute={minute} />
          ))}
        </ul>
      </div>
    </section>
  );
}
