"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { COMPANY } from "@/lib/company";
import { LOGIN, MARKETS } from "@/lib/navigation";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

const control =
  "mt-2 block w-full border border-ink/20 bg-paper px-3 text-[15px] tracking-tight text-ink transition-colors duration-150 outline-none hover:border-ink/40 focus:border-ink focus:ring-1 focus:ring-ink";

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium tracking-tight text-ink">
        {label}
        {!required && <span className="font-normal text-ink/45"> (optional)</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className={`${control} h-11`}
      />
    </label>
  );
}

/**
 * Prototype form: submitting shows the confirmation state in place and sends
 * nothing. Fields are what a first conversation with an agency needs, not a
 * defined qualification checklist.
 */
export function PartnerApplication() {
  const [sent, setSent] = useState<{ agency: string; email: string } | null>(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setSent({ agency: String(data.get("agency")), email: String(data.get("email")) });
  };

  return (
    <section id="apply" className="scroll-mt-14 bg-mist lg:scroll-mt-28">
      <div className="site-container section-y grid gap-12 lg:grid-cols-12 lg:gap-x-16">
        <div className="lg:col-span-4">
          <h2 className="max-w-[14ch] text-[2.25rem] leading-[1.04] font-bold tracking-[-0.035em] text-ink sm:text-[3rem] lg:text-[3.5rem]">
            Apply to the partner network.
          </h2>
          <p className="mt-6 max-w-[26rem] text-[17px] leading-[1.6] text-ink/70">
            Tell us about your agency and the clients you work with. The first
            conversation is about which projects in the network fit them.
          </p>

          <div className="mt-10 flex flex-col gap-1.5 border-t border-ink/10 pt-6 text-sm tracking-tight text-ink/60">
            <p>
              Prefer to talk first?{" "}
              <a
                href={COMPANY.phone.href}
                className={`font-medium whitespace-nowrap text-ink transition-colors duration-150 hover:text-ink/70 ${focusRing}`}
              >
                {COMPANY.phone.display}
              </a>
            </p>
            <p>
              Already a partner?{" "}
              <Link
                href={LOGIN.href}
                className={`font-medium text-ink transition-colors duration-150 hover:text-ink/70 ${focusRing}`}
              >
                {LOGIN.label}
              </Link>
            </p>
          </div>
        </div>

        <div className="border border-ink/10 bg-paper p-6 sm:p-8 lg:col-span-8 lg:p-10">
          {sent ? (
            <div role="status" className="flex min-h-[24rem] flex-col justify-center">
              <span aria-hidden="true" className="block size-2 bg-accent" />
              <h3 className="mt-6 text-[1.75rem] leading-[1.15] font-semibold tracking-[-0.02em] text-ink">
                Application received.
              </h3>
              <p className="mt-4 max-w-[32rem] text-lg leading-[1.6] text-ink/70">
                Thank you{sent.agency ? `, ${sent.agency}` : ""}. We’ll reply to{" "}
                <span className="font-medium text-ink">{sent.email}</span> to arrange
                a first conversation.
              </p>
              <button
                type="button"
                onClick={() => setSent(null)}
                className={`mt-8 self-start text-sm font-medium tracking-tight text-ink underline decoration-ink/30 underline-offset-4 transition-colors duration-150 hover:decoration-ink ${focusRing}`}
              >
                Back to the form
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2 sm:gap-x-6">
              <Field label="Agency name" name="agency" required autoComplete="organization" />
              <Field label="Your name" name="name" required autoComplete="name" />
              <Field label="Work email" name="email" type="email" required autoComplete="email" />
              <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
              <Field label="Country" name="country" required autoComplete="country-name" />
              <Field label="Website" name="website" autoComplete="url" />

              <fieldset className="sm:col-span-2">
                <legend className="text-sm font-medium tracking-tight text-ink">
                  Where are your clients looking to buy?
                  <span className="font-normal text-ink/45"> (optional)</span>
                </legend>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  {MARKETS.map((market) => (
                    <label
                      key={market.href}
                      className="relative flex h-11 cursor-pointer items-center gap-3 border border-ink/15 px-3 text-[15px] tracking-tight text-ink transition-colors duration-150 hover:border-ink/40 has-[:checked]:border-ink"
                    >
                      <input
                        type="checkbox"
                        name="markets"
                        value={market.label}
                        className="peer size-4 shrink-0 cursor-pointer appearance-none border border-ink/30 checked:border-ink checked:bg-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                      />
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        aria-hidden="true"
                        className="pointer-events-none absolute top-1/2 left-[14px] hidden -translate-y-1/2 text-paper peer-checked:block"
                      >
                        <path
                          d="M2.5 6.25L5 8.75L9.5 3.25"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="square"
                        />
                      </svg>
                      {market.label}
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className="block sm:col-span-2">
                <span className="text-sm font-medium tracking-tight text-ink">
                  About your agency and clients
                  <span className="font-normal text-ink/45"> (optional)</span>
                </span>
                <textarea name="about" rows={4} className={`${control} resize-y py-2.5`} />
              </label>

              <div className="pt-2 sm:col-span-2">
                <button
                  type="submit"
                  className={`inline-flex h-11 min-w-[11.5rem] items-center justify-center bg-ink px-5 text-sm font-medium tracking-tight text-paper transition-colors duration-150 hover:bg-ink-deep ${focusRing}`}
                >
                  Send application
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
