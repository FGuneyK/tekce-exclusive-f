import Image from "next/image";
import { EXCLUSIVE_OFFICE, OFFICE_COUNTRIES } from "@/lib/offices";

/*
  Land is a pre-rendered dot matrix (public/maps/network-land.svg), generated
  from Natural Earth 1:50m land with exactly this projection and these
  bounds: equirectangular, longitude scaled by cos 42°, lon −12…62, lat
  20…64. Change the bounds and the SVG has to be regenerated.

  Offices are HTML squares placed by real coordinates, so they stay crisp
  at every width; only the arcs are SVG.
*/
const LON_MIN = -12;
const LON_MAX = 62;
const LAT_MIN = 20;
const LAT_MAX = 64;
const X_SCALE = Math.cos((42 * Math.PI) / 180);
const WIDTH = (LON_MAX - LON_MIN) * X_SCALE;
const HEIGHT = LAT_MAX - LAT_MIN;

const project = (lat: number, lon: number) => ({
  x: (((lon - LON_MIN) * X_SCALE) / WIDTH) * 100,
  y: ((LAT_MAX - lat) / HEIGHT) * 100,
});

type Align = "above" | "below" | "left";

const LABELS: { text: string; lat: number; lon: number; align: Align }[] = [
  { text: "Spain", lat: 38.9, lon: -3.5, align: "above" },
  { text: "Türkiye", lat: 43.3, lon: 35, align: "above" },
  { text: "North Cyprus", lat: 35.34, lon: 33.32, align: "below" },
  { text: "United Arab Emirates", lat: 25.2, lon: 55.27, align: "left" },
  { text: "Sweden", lat: 59.34, lon: 17.94, align: "left" },
];

const alignClass: Record<Align, string> = {
  above: "-translate-x-1/2 -translate-y-full pb-2.5",
  below: "-translate-x-1/2 pt-3",
  left: "-translate-x-full -translate-y-1/2 pr-3",
};

const CITIES = OFFICE_COUNTRIES.flatMap((country) => country.cities);

/** One arc per country outside Türkiye, so the lines show reach without crowding the cluster. */
const ARC_TARGETS = ["Alicante", "Girne", "Dubai", "Stockholm"];

const HUB = project(EXCLUSIVE_OFFICE.lat, EXCLUSIVE_OFFICE.lon);

function NetworkMap() {
  return (
    <div
      aria-hidden="true"
      className="relative w-full"
      style={{ aspectRatio: `${WIDTH} / ${HEIGHT}` }}
    >
      <Image src="/maps/network-land.svg" alt="" fill unoptimized className="object-fill" />

      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full overflow-visible"
      >
        {CITIES.filter((city) => ARC_TARGETS.includes(city.city)).map((city) => {
          const point = project(city.lat, city.lon);
          const lift = Math.min(HUB.y, point.y) - 10;
          return (
            <path
              key={city.city}
              d={`M${HUB.x} ${HUB.y} Q${(HUB.x + point.x) / 2} ${lift} ${point.x} ${point.y}`}
              fill="none"
              strokeWidth={1}
              vectorEffect="non-scaling-stroke"
              className="stroke-paper/35"
            />
          );
        })}
      </svg>

      {CITIES.map((city) => {
        const point = project(city.lat, city.lon);
        return (
          <span
            key={city.city}
            className="absolute block size-1.5 -translate-x-1/2 -translate-y-1/2 bg-paper sm:size-2"
            style={{ left: `${point.x}%`, top: `${point.y}%` }}
          />
        );
      })}

      <span
        className="absolute block size-2.5 -translate-x-1/2 -translate-y-1/2 bg-accent ring-4 ring-ink-deep sm:size-3"
        style={{ left: `${HUB.x}%`, top: `${HUB.y}%` }}
      />
      <span
        className="absolute hidden -translate-x-full -translate-y-1/2 pr-4 text-sm font-medium tracking-tight whitespace-nowrap text-paper sm:block"
        style={{ left: `${HUB.x}%`, top: `${HUB.y}%` }}
      >
        {EXCLUSIVE_OFFICE.label}
      </span>

      {LABELS.map((label) => {
        const point = project(label.lat, label.lon);
        return (
          <span
            key={label.text}
            className={`absolute text-[10px] font-medium tracking-[0.08em] whitespace-nowrap text-paper/60 uppercase sm:text-[11px] ${alignClass[label.align]}`}
            style={{ left: `${point.x}%`, top: `${point.y}%` }}
          >
            {label.text}
          </span>
        );
      })}
    </div>
  );
}

export function GlobalNetwork() {
  return (
    <section id="network" className="scroll-mt-14 bg-ink lg:scroll-mt-28">
      <div className="site-container section-y">
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-20">
          <h2 className="max-w-[16ch] text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-paper sm:text-[2.5rem] lg:text-5xl">
            Local offices. An international network.
          </h2>
          <p className="mt-6 max-w-[28rem] shrink-0 text-[17px] leading-[1.6] text-paper/70 lg:mt-0 lg:pb-1.5">
            TEKCE Group’s offices support the part of a sale that happens on
            the ground. Independent partner agencies extend the network’s reach
            beyond them.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-x-16">
          <figure className="border border-paper/10 bg-ink-deep p-5 sm:p-8 lg:col-span-7 lg:self-start">
            <NetworkMap />
            <figcaption className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-paper/10 pt-5 text-xs tracking-tight text-paper/60 sm:text-[13px]">
              <span className="flex items-center gap-2">
                <span aria-hidden="true" className="block size-2 bg-paper" />
                TEKCE Group office
              </span>
              <span className="flex items-center gap-2">
                <span aria-hidden="true" className="block size-2 bg-accent" />
                {EXCLUSIVE_OFFICE.label}
              </span>
            </figcaption>
          </figure>

          <div className="lg:col-span-5">
            <ul className="border-b border-paper/10">
              {OFFICE_COUNTRIES.map((country) => (
                <li key={country.country} className="border-t border-paper/10 py-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-lg font-semibold tracking-[-0.01em] text-paper">
                      {country.country}
                    </h3>
                    <span className="text-[13px] tracking-tight text-paper/45">
                      {country.market ? "Property market" : "Office only"}
                    </span>
                  </div>
                  <p className="mt-2 text-[15px] leading-[1.65] text-paper/80">
                    {country.cities.map((city, index) => (
                      <span key={city.city}>
                        {index > 0 && <span className="text-paper/30"> · </span>}
                        {city.city}
                        {city.areas && (
                          <span className="text-paper/45"> ({city.areas.join(", ")})</span>
                        )}
                      </span>
                    ))}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
