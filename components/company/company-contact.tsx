import Link from "next/link";
import { COMPANY, GROUP_SITE } from "@/lib/company";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  COMPANY.address.join(", "),
)}`;

const ROUTES = [
  { title: "Developers", text: "Take your project to international markets.", href: "/developers" },
  { title: "Partners", text: "Sell selected projects and keep your clients.", href: "/partners" },
  { title: "Buyers", text: "Invest in new property abroad.", href: "/invest" },
];

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

function ExternalArrow() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path d="M3 1.5H8.5V7M8.5 1.5L1.5 8.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

const rowClass = `group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 border-t border-ink/10 py-6 transition-colors duration-150 ${focusRing}`;

const arrowBox =
  "flex size-10 items-center justify-center border border-ink/20 text-ink transition-colors duration-200 group-hover:border-ink group-hover:bg-ink group-hover:text-paper";

export function CompanyContact() {
  return (
    <section id="contact" className="scroll-mt-14 bg-mist lg:scroll-mt-28">
      <div className="site-container section-y grid gap-14 lg:grid-cols-12 lg:gap-x-16">
        <div className="lg:col-span-5">
          <h2 className="max-w-[14ch] text-[2.25rem] leading-[1.04] font-bold tracking-[-0.035em] text-ink sm:text-[3rem] lg:text-[3.5rem]">
            Find us in Istanbul.
          </h2>

          <address className="mt-8 text-lg leading-[1.6] tracking-tight text-ink/75 not-italic">
            {COMPANY.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>

          <div className="mt-6 flex flex-col items-start gap-1.5">
            <a
              href={COMPANY.phone.href}
              className={`text-lg font-medium tracking-tight text-ink transition-colors duration-150 hover:text-ink/70 ${focusRing}`}
            >
              {COMPANY.phone.display}
            </a>
            <a
              href={COMPANY.email.href}
              className={`text-lg font-medium tracking-tight text-ink transition-colors duration-150 hover:text-ink/70 ${focusRing}`}
            >
              {COMPANY.email.display}
            </a>
          </div>

          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-8 inline-flex items-center gap-2 text-sm font-medium tracking-tight text-ink underline decoration-ink/30 underline-offset-4 transition-colors duration-150 hover:decoration-ink ${focusRing}`}
          >
            Open in Maps
            <ExternalArrow />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>

        {/* Every visitor leaves toward the page written for them. */}
        <nav aria-label="Where to start" className="lg:col-span-7">
          <p className="text-sm tracking-tight text-ink/50">Where to start</p>
          <ul className="mt-4 border-b border-ink/10">
            {ROUTES.map((route) => (
              <li key={route.href}>
                <Link href={route.href} className={rowClass}>
                  <span>
                    <span className="block text-2xl font-semibold tracking-[-0.02em] text-ink lg:text-[2rem]">
                      {route.title}
                    </span>
                    <span className="mt-1 block text-[15px] tracking-tight text-ink/60">
                      {route.text}
                    </span>
                  </span>
                  <span aria-hidden="true" className={arrowBox}>
                    <Arrow />
                  </span>
                </Link>
              </li>
            ))}
            <li>
              <a href={GROUP_SITE.href} target="_blank" rel="noopener noreferrer" className={rowClass}>
                <span>
                  <span className="block text-2xl font-semibold tracking-[-0.02em] text-ink lg:text-[2rem]">
                    TEKCE
                  </span>
                  <span className="mt-1 block text-[15px] tracking-tight text-ink/60">
                    Real estate services from our sister company.
                    <span className="sr-only"> (opens in a new tab)</span>
                  </span>
                </span>
                <span aria-hidden="true" className={arrowBox}>
                  <ExternalArrow />
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
