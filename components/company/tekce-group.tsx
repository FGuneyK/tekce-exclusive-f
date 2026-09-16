import Image from "next/image";

type Company = { sector: string; name: string; text: string; exclusive?: boolean };

/**
 * TEKCE Group's brands as confirmed by the user (2026-09-15). TEKCE and
 * TEKCE Exclusive are sister companies. The group has no separate brands for
 * construction, investment or finance, so none are shown.
 */
const COMPANIES: Company[] = [
  {
    sector: "Real estate services",
    name: "TEKCE",
    text: "Real estate services for international clients.",
  },
  {
    sector: "Project sales",
    name: "TEKCE Exclusive",
    text: "Sells new developments to international buyers.",
    exclusive: true,
  },
  {
    sector: "Legal consultancy",
    name: "TEKCE Visa",
    text: "Property contracts and visa services.",
  },
  {
    sector: "Academy",
    name: "TEKCE Academy",
    text: "Training for real estate professionals.",
  },
];

export function TekceGroup() {
  return (
    <section id="group" className="scroll-mt-14 bg-ink lg:scroll-mt-28">
      <div className="site-container section-y">
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-20">
          <h2 className="max-w-[18ch] text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-paper sm:text-[2.5rem] lg:text-5xl">
            Sister companies within one group.
          </h2>
          <p className="mt-6 max-w-[28rem] shrink-0 text-[17px] leading-[1.6] text-paper/70 lg:mt-0 lg:pb-1.5">
            TEKCE Group began in Antalya in 2004 and today operates in Spain,
            Türkiye, North Cyprus, Sweden and the United Arab Emirates. TEKCE
            and TEKCE Exclusive are sister companies within it.
          </p>
        </div>

        {/*
          An organisation chart drawn as a rake: the group on top, one bus
          line, a drop to each company. Below lg the lines go and the
          companies form a simple grid under the group.
        */}
        <div className="mt-14 lg:mt-20">
          <div className="flex lg:justify-center">
            <div className="border border-paper px-6 py-4 lg:min-w-[16rem] lg:text-center">
              <p className="text-[11px] font-medium tracking-[0.08em] text-paper/50 uppercase">
                Group
              </p>
              <p className="mt-1 text-2xl font-semibold tracking-tight text-paper">TEKCE Group</p>
            </div>
          </div>
          <div aria-hidden="true" className="hidden h-10 justify-center lg:flex">
            <span className="block h-full w-px bg-paper/25" />
          </div>

          <div className="relative mt-4 lg:mt-0">
            <span
              aria-hidden="true"
              className="absolute top-0 right-[calc(100%/8)] left-[calc(100%/8)] hidden h-px bg-paper/25 lg:block"
            />
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
              {COMPANIES.map((company) => (
                <li key={company.name} className="relative lg:px-2.5 lg:pt-8">
                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-1/2 hidden h-8 w-px bg-paper/25 lg:block"
                  />
                  <div
                    className={`flex h-full min-h-44 flex-col justify-between gap-8 border p-5 lg:min-h-52 lg:p-6 ${
                      company.exclusive ? "border-paper bg-paper" : "border-paper/15 bg-ink-deep"
                    }`}
                  >
                    <p
                      className={`text-[11px] font-medium tracking-[0.08em] uppercase ${
                        company.exclusive ? "text-ink/50" : "text-paper/45"
                      }`}
                    >
                      {company.sector}
                    </p>
                    <div>
                      {company.exclusive ? (
                        <Image
                          src="/logo.svg"
                          alt={company.name}
                          width={181}
                          height={57}
                          unoptimized
                          className="h-7 w-auto"
                        />
                      ) : (
                        <p className="text-xl font-semibold tracking-tight text-paper">
                          {company.name}
                        </p>
                      )}
                      <p
                        className={`mt-2 text-sm leading-snug ${
                          company.exclusive ? "text-ink/65" : "text-paper/60"
                        }`}
                      >
                        {company.text}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-10 max-w-[44rem] text-[15px] leading-[1.6] text-paper/60 lg:mt-14">
            TEKCE provides real estate services; TEKCE Exclusive sells projects.
            In the TEKCE Exclusive partner network, TEKCE takes part as a
            commissioned strategic group partner, within the same commercial
            logic as independent agencies.
          </p>
        </div>
      </div>
    </section>
  );
}
