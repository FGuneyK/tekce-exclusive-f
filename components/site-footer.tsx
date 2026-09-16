import Image from "next/image";
import Link from "next/link";
import { COMPANY, GROUP_SITE } from "@/lib/company";
import { FOOTER_GROUPS, LEGAL_LINKS } from "@/lib/navigation";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper";

const footerLink = `text-[15px] tracking-tight text-paper/75 transition-colors duration-150 hover:text-paper ${focusRing}`;

function ExternalArrow() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path d="M3 1.5H8.5V7M8.5 1.5L1.5 8.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-ink text-paper">
      {/* Identity. */}
      <div className="border-b border-paper/10">
        <div className="site-container py-14 lg:py-16">
          <div>
            <Link href="/" aria-label="TEKCE Exclusive — home" className={`inline-block ${focusRing}`}>
              <Image
                src="/logo-white.svg"
                alt="TEKCE Exclusive"
                width={181}
                height={57}
                unoptimized
                className="h-9 w-auto lg:h-10"
              />
            </Link>
            <p className="mt-6 max-w-[26rem] text-lg leading-[1.5] tracking-tight text-paper/70">
              International sales and distribution for real estate projects.
            </p>
          </div>
        </div>
      </div>

      {/* Office on the left, the site map on the right. */}
      <div className="site-container grid gap-14 py-14 lg:grid-cols-12 lg:gap-10 lg:py-16">
        <div className="lg:col-span-4">
          <h2 className="text-sm font-medium tracking-tight text-paper/45">
            {COMPANY.officeLabel}
          </h2>
          <address className="mt-4 text-[15px] leading-[1.7] tracking-tight text-paper/75 not-italic">
            {COMPANY.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <div className="mt-6 flex flex-col items-start gap-1.5">
            <a
              href={COMPANY.phone.href}
              className={`text-[15px] font-medium tracking-tight text-paper transition-colors duration-150 hover:text-paper/75 ${focusRing}`}
            >
              {COMPANY.phone.display}
            </a>
            <a
              href={COMPANY.email.href}
              className={`text-[15px] font-medium tracking-tight text-paper transition-colors duration-150 hover:text-paper/75 ${focusRing}`}
            >
              {COMPANY.email.display}
            </a>
          </div>
        </div>

        <nav
          aria-label="Footer"
          className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4 lg:col-span-8"
        >
          {FOOTER_GROUPS.map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-medium tracking-tight text-paper/45">
                {group.title}
              </h2>
              <ul className="mt-4 flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={footerLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
                {group.title === "Company" && (
                  <li>
                    <a
                      href={GROUP_SITE.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 ${footerLink}`}
                    >
                      {GROUP_SITE.label}
                      <ExternalArrow />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* Legal line. */}
      <div className="border-t border-paper/10">
        <div className="site-container flex flex-col gap-4 py-6 text-[13px] tracking-tight text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`transition-colors duration-150 hover:text-paper ${focusRing}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
