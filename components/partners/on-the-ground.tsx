import Image from "next/image";

// Unsplash photo-1767045572136-868c9407818b
const IMAGE =
  "https://images.unsplash.com/photo-1767045572136-868c9407818b?auto=format&fit=crop&w=2400&h=1400&q=80";

/** What TEKCE's local infrastructure supports, per the verified offer. */
const SUPPORT = [
  {
    title: "Viewings",
    text: "Supported locally, so your client sees the project with people who know the area.",
  },
  {
    title: "Documentation",
    text: "Local support with the paperwork, in the process of the country your client is buying in.",
  },
  {
    title: "Closing",
    text: "Transaction and closing support through to completion, while you stay your client’s first call.",
  },
];

export function OnTheGround() {
  return (
    <section id="on-the-ground" className="relative isolate scroll-mt-14 bg-ink lg:scroll-mt-28">
      <Image
        src={IMAGE}
        alt="A hillside town above a harbour and beach on the Spanish coast."
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />
      {/* The copy sits at the foot of the frame, so the scrim builds from there. */}
      <div
        aria-hidden="true"
        className="from-ink/95 via-ink/65 to-ink/5 absolute inset-0 -z-10 bg-gradient-to-t"
      />

      <div className="site-container flex min-h-[42rem] flex-col justify-end pt-40 pb-16 lg:min-h-[48rem] lg:pb-20">
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-20">
          <h2 className="max-w-[16ch] text-[2.25rem] leading-[1.04] font-bold tracking-[-0.035em] text-paper sm:text-[3rem] lg:text-[3.5rem]">
            Your client flies in. The support is already there.
          </h2>
          <p className="mt-6 max-w-[28rem] shrink-0 text-[17px] leading-[1.6] text-paper/80 lg:mt-0 lg:pb-1.5">
            In Spain, Türkiye, North Cyprus and the United Arab Emirates,
            TEKCE’s local infrastructure supports the part of the sale that
            happens on the ground.
          </p>
        </div>

        <ul className="mt-12 grid border-t border-paper/25 sm:grid-cols-3 lg:mt-16">
          {SUPPORT.map((item) => (
            <li
              key={item.title}
              className="border-b border-paper/15 py-5 last:border-b-0 sm:border-b-0 sm:pt-6 sm:pr-10 sm:pb-0"
            >
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-paper">{item.title}</h3>
              <p className="mt-2 max-w-[22rem] text-[15px] leading-[1.6] text-paper/75">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
