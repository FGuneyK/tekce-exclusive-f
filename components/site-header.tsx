"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CTA,
  LANGUAGES,
  LOGIN,
  MARKETS,
  NAV_ITEMS,
} from "@/lib/navigation";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

const quietLink = `text-sm font-medium tracking-tight text-ink/70 transition-colors duration-150 hover:text-ink ${focusRing}`;

const navLink = `text-[15px] tracking-tight text-ink/70 transition-colors duration-150 hover:text-ink ${focusRing}`;

const ctaButton = `inline-flex items-center justify-center bg-ink font-medium tracking-tight text-paper transition-colors duration-150 hover:bg-ink-deep ${focusRing}`;

const panelBase =
  "absolute top-full z-50 border border-ink/10 bg-paper shadow-[0_16px_40px_-16px_rgba(28,34,72,0.25)] transition duration-150 ease-out";

const panelState = (open: boolean) =>
  open
    ? "translate-y-0 opacity-100"
    : "pointer-events-none -translate-y-1 opacity-0";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      aria-hidden="true"
      className={`transition-transform duration-200 ease-out ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M1 1L5 5L9 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type DesktopMenu = "markets" | "language" | null;

export function SiteHeader() {
  const headerRef = useRef<HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menu, setMenu] = useState<DesktopMenu>(null);
  const [language, setLanguage] = useState(LANGUAGES[0]);
  const [mobileSection, setMobileSection] = useState<DesktopMenu>(null);

  // Mobile panel: lock scroll, close on Escape, close when we reach desktop.
  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onBreakpointChange = () => {
      if (desktop.matches) setMobileOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpointChange);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpointChange);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Desktop dropdowns: dismiss on outside click and on Escape.
  useEffect(() => {
    if (!menu) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setMenu(null);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenu(null);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menu]);

  const toggleMobileSection = (section: Exclude<DesktopMenu, null>) =>
    setMobileSection((current) => (current === section ? null : section));

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-paper">
      {/* Brand row — identity, language, account, and the one commercial action. */}
      <div className="border-b border-ink/10">
        <div className="site-container flex h-14 items-center justify-between lg:h-15">
          <Link
            href="/"
            aria-label="TEKCE Exclusive — home"
            className={`shrink-0 ${focusRing}`}
            onClick={() => setMobileOpen(false)}
          >
            <Image
              src="/logo.svg"
              alt="TEKCE Exclusive"
              width={181}
              height={57}
              preload
              unoptimized
              className="h-[26px] w-auto lg:h-[30px]"
            />
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            <div className="relative">
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={menu === "language"}
                aria-controls="language-menu"
                onClick={() =>
                  setMenu(menu === "language" ? null : "language")
                }
                className={`inline-flex h-9 items-center gap-1.5 ${quietLink}`}
              >
                <span className="sr-only">Language — currently </span>
                {language.code}
                <Chevron open={menu === "language"} />
              </button>

              <div
                id="language-menu"
                inert={menu !== "language"}
                className={`${panelBase} ${panelState(menu === "language")} right-0 mt-3 w-[22rem] p-2`}
              >
                <ul className="grid grid-cols-2">
                  {LANGUAGES.map((item) => {
                    const active = item.code === language.code;
                    return (
                      <li key={item.code}>
                        <button
                          type="button"
                          lang={item.lang}
                          aria-current={active ? "true" : undefined}
                          onClick={() => {
                            setLanguage(item);
                            setMenu(null);
                          }}
                          className={`flex h-10 w-full items-center px-3 text-[15px] tracking-tight transition-colors duration-150 hover:bg-ink/5 ${
                            active ? "font-medium text-ink" : "text-ink/70"
                          } ${focusRing}`}
                        >
                          {item.name}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <Link href={LOGIN.href} className={quietLink}>
              {LOGIN.label}
            </Link>

            <Link href={CTA.href} className={`h-9 px-4 text-sm ${ctaButton}`}>
              {CTA.label}
            </Link>
          </div>

          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((value) => !value)}
            className={`-mr-2 inline-flex h-11 w-11 items-center justify-center lg:hidden ${focusRing}`}
          >
            <span className="sr-only">
              {mobileOpen ? "Close menu" : "Open menu"}
            </span>
            <span className="relative block h-4 w-6" aria-hidden="true">
              <span
                className={`absolute left-0 h-[1.5px] w-full bg-ink transition-all duration-200 ease-out ${
                  mobileOpen
                    ? "top-1/2 -translate-y-1/2 rotate-45"
                    : "top-[3px]"
                }`}
              />
              <span
                className={`absolute left-0 h-[1.5px] w-full bg-ink transition-all duration-200 ease-out ${
                  mobileOpen
                    ? "top-1/2 -translate-y-1/2 -rotate-45"
                    : "top-[11px]"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Navigation row — the site map, aligned to the logo's left edge. */}
      <div className="hidden border-b border-ink/10 lg:block">
        <nav
          aria-label="Primary"
          className="site-container flex h-12 items-center gap-7 xl:gap-8"
        >
          {NAV_ITEMS.map((item) =>
            item.label === "Markets" ? (
              <div
                key={item.href}
                className="relative flex h-full items-center gap-1"
                onMouseEnter={() => setMenu("markets")}
                onMouseLeave={() => setMenu(null)}
              >
                {/* The label goes to the markets index; the chevron opens the
                    list of individual markets. */}
                <Link
                  href={item.href}
                  onClick={() => setMenu(null)}
                  className={navLink}
                >
                  {item.label}
                </Link>
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={menu === "markets"}
                  aria-controls="markets-menu"
                  onClick={() =>
                    setMenu(menu === "markets" ? null : "markets")
                  }
                  className={`inline-flex h-full items-center px-1 ${navLink}`}
                >
                  <span className="sr-only">
                    {menu === "markets" ? "Hide markets" : "Show markets"}
                  </span>
                  <Chevron open={menu === "markets"} />
                </button>

                <div
                  id="markets-menu"
                  inert={menu !== "markets"}
                  className={`${panelBase} ${panelState(menu === "markets")} left-0 w-64 py-2`}
                >
                  <ul>
                    {MARKETS.map((market) => (
                      <li key={market.href}>
                        <Link
                          href={market.href}
                          onClick={() => setMenu(null)}
                          className={`flex h-10 items-center px-4 text-[15px] tracking-tight text-ink/70 transition-colors duration-150 hover:bg-ink/5 hover:text-ink ${focusRing}`}
                        >
                          {market.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href} className={navLink}>
                {item.label}
              </Link>
            ),
          )}
        </nav>
      </div>

      <div
        id="mobile-nav"
        inert={!mobileOpen}
        aria-hidden={!mobileOpen}
        className={`fixed inset-x-0 top-14 bottom-0 z-40 bg-paper transition duration-200 ease-out lg:hidden ${
          mobileOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <nav
          aria-label="Primary, mobile"
          className="site-container flex h-full flex-col overflow-y-auto pt-3 pb-10"
        >
          <ul className="flex flex-col">
            {NAV_ITEMS.map((item) =>
              item.label === "Markets" ? (
                <li key={item.href}>
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex min-h-12 flex-1 items-center text-xl tracking-tight text-ink ${focusRing}`}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      aria-expanded={mobileSection === "markets"}
                      aria-controls="mobile-markets"
                      onClick={() => toggleMobileSection("markets")}
                      className={`-mr-2 flex size-12 shrink-0 items-center justify-center text-ink ${focusRing}`}
                    >
                      <span className="sr-only">
                        {mobileSection === "markets"
                          ? "Hide markets"
                          : "Show markets"}
                      </span>
                      <Chevron open={mobileSection === "markets"} />
                    </button>
                  </div>
                  {mobileSection === "markets" && (
                    <ul
                      id="mobile-markets"
                      className="mb-2 flex flex-col border-l border-ink/10 pl-4"
                    >
                      {MARKETS.map((market) => (
                        <li key={market.href}>
                          <Link
                            href={market.href}
                            onClick={() => setMobileOpen(false)}
                            className={`flex min-h-11 items-center text-base tracking-tight text-ink/70 ${focusRing}`}
                          >
                            {market.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex min-h-12 items-center text-xl tracking-tight text-ink ${focusRing}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>

          <div className="mt-auto flex flex-col gap-4 pt-8">
            <div className="border-t border-ink/10 pt-4">
              <button
                type="button"
                aria-expanded={mobileSection === "language"}
                onClick={() => toggleMobileSection("language")}
                className={`flex min-h-11 w-full items-center justify-between text-sm font-medium tracking-tight text-ink/70 ${focusRing}`}
              >
                <span>
                  <span className="sr-only">Language — currently </span>
                  {language.name}
                </span>
                <Chevron open={mobileSection === "language"} />
              </button>
              {mobileSection === "language" && (
                <ul className="grid grid-cols-2 pb-2">
                  {LANGUAGES.map((item) => {
                    const active = item.code === language.code;
                    return (
                      <li key={item.code}>
                        <button
                          type="button"
                          lang={item.lang}
                          aria-current={active ? "true" : undefined}
                          onClick={() => setLanguage(item)}
                          className={`flex min-h-11 w-full items-center text-base tracking-tight ${
                            active ? "font-medium text-ink" : "text-ink/70"
                          } ${focusRing}`}
                        >
                          {item.name}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            <Link
              href={LOGIN.href}
              onClick={() => setMobileOpen(false)}
              className={quietLink}
            >
              {LOGIN.label}
            </Link>
            <Link
              href={CTA.href}
              onClick={() => setMobileOpen(false)}
              className={`h-13 text-base ${ctaButton}`}
            >
              {CTA.label}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
