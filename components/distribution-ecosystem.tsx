import Image from "next/image";
import styles from "./distribution-ecosystem.module.css";

type NodeVariant = "default" | "platform" | "demand";

const STAGE_DELAY = 1.2; // seconds per connector, matches 24% of the 5s cycle

const PATHS = {
  straight: { horizontal: ["M0 50 L100 50"], vertical: ["M50 0 L50 100"] },
  fork: {
    horizontal: ["M0 50 C50 50 50 25 100 25", "M0 50 C50 50 50 75 100 75"],
    vertical: ["M50 0 C50 50 25 50 25 100", "M50 0 C50 50 75 50 75 100"],
  },
  merge: {
    horizontal: ["M0 25 C50 25 50 50 100 50", "M0 75 C50 75 50 50 100 50"],
    vertical: ["M25 0 C25 50 50 50 50 100", "M75 0 C75 50 50 50 50 100"],
  },
};

function Lines({ paths, stage }: { paths: string[]; stage: number }) {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="block h-full w-full overflow-visible"
    >
      {paths.map((d) => (
        <g key={d}>
          <path
            d={d}
            fill="none"
            strokeWidth={1}
            vectorEffect="non-scaling-stroke"
            className="stroke-paper/20"
          />
          <path
            d={d}
            fill="none"
            strokeWidth={2}
            pathLength={100}
            vectorEffect="non-scaling-stroke"
            className={`${styles.pulse} stroke-accent`}
            style={{ animationDelay: `${stage * STAGE_DELAY}s` }}
          />
        </g>
      ))}
    </svg>
  );
}

function Connector({
  area,
  shape,
  stage,
  mobileHeight,
}: {
  area: string;
  shape: keyof typeof PATHS;
  stage: number;
  mobileHeight: string;
}) {
  return (
    <div className={`${area} ${mobileHeight} lg:h-auto`}>
      <div className="h-full lg:hidden">
        <Lines paths={PATHS[shape].vertical} stage={stage} />
      </div>
      <div className="hidden h-full lg:block">
        <Lines paths={PATHS[shape].horizontal} stage={stage} />
      </div>
    </div>
  );
}

function Node({
  area,
  role,
  name,
  detail,
  variant = "default",
  branch = false,
}: {
  area: string;
  role: string;
  name: string;
  detail?: string;
  variant?: NodeVariant;
  branch?: boolean;
}) {
  const platform = variant === "platform";

  return (
    <div className={`${area} ${branch ? "lg:py-2" : "lg:self-center"}`}>
      <div
        className={`flex h-full min-h-[8.5rem] flex-col justify-between gap-6 border p-4 sm:p-5 lg:h-auto lg:min-h-[9rem] ${
          platform ? "border-paper bg-paper" : "border-paper/15 bg-ink-deep"
        }`}
      >
        <p
          className={`flex items-center gap-2 text-[11px] font-medium tracking-[0.08em] uppercase ${
            platform ? "text-ink/50" : "text-paper/45"
          }`}
        >
          {variant === "demand" && (
            <span className="block size-1.5 bg-accent" aria-hidden="true" />
          )}
          {role}
        </p>

        <div>
          {platform ? (
            <Image
              src="/logo.svg"
              alt={name}
              width={181}
              height={57}
              unoptimized
              className="h-8 w-auto"
            />
          ) : (
            <p className="text-base font-semibold tracking-tight text-paper sm:text-lg">
              {name}
            </p>
          )}
          {detail && (
            <p
              className={`mt-1 text-[13px] leading-snug sm:text-sm ${
                platform ? "mt-3 text-ink/65" : "text-paper/60"
              }`}
            >
              {detail}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export function DistributionEcosystem() {
  return (
    <section id="distribution" className="scroll-mt-14 lg:scroll-mt-28 bg-ink">
      <div className="site-container section-y">
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-20">
          <div>
            <h2 className="max-w-[20ch] text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-paper sm:text-[2.5rem] lg:text-5xl">
              Your project enters a working international ecosystem.
            </h2>
          </div>
          <p className="mt-6 max-w-[28rem] shrink-0 text-[17px] leading-[1.6] text-paper/70 lg:mt-0 lg:pb-1.5">
            TEKCE participates as a commissioned strategic group partner
            alongside independent agencies—extending reach without changing the
            commercial logic of the network.
          </p>
        </div>

        <ol className="sr-only">
          <li>Developer: supplies the project and its sales authority.</li>
          <li>
            TEKCE Exclusive: strategy, marketing and distribution management.
          </li>
          <li>
            Distributed in parallel to TEKCE, a commissioned strategic
            group partner, and to independent partners, commissioned sales
            partners.
          </li>
          <li>Both channels reach international buyers.</li>
        </ol>

        <div
          aria-hidden="true"
          className={`${styles.diagram} mt-14 lg:mt-20`}
        >
          <Node
            area={styles.supply}
            role="Supply"
            name="Developer"
            detail="Project + sales authority"
          />
          <Connector area={styles.c1} shape="straight" stage={0} mobileHeight="h-10" />
          <Node
            area={styles.platform}
            role="Platform"
            name="TEKCE Exclusive"
            detail="Strategy · Marketing · Distribution management"
            variant="platform"
          />
          <Connector area={styles.c2} shape="fork" stage={1} mobileHeight="h-14" />
          <Node
            area={styles.group}
            role="Strategic group partner"
            name="TEKCE"
            detail="Commissioned sales partner"
            branch
          />
          <Node
            area={styles.external}
            role="External network"
            name="Independent Partners"
            detail="Commissioned sales partners"
            branch
          />
          <Connector area={styles.c3} shape="merge" stage={2} mobileHeight="h-14" />
          <Node
            area={styles.demand}
            role="Demand"
            name="International Buyers"
            variant="demand"
          />
        </div>
      </div>
    </section>
  );
}
