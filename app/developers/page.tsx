import type { Metadata } from "next";
import { AgencyComparison } from "@/components/developers/agency-comparison";
import { DevelopersHero } from "@/components/developers/developers-hero";
import { EngagementProcess } from "@/components/developers/engagement-process";
import { ProjectsInNetwork } from "@/components/developers/projects-in-network";
import { SalesReporting } from "@/components/developers/sales-reporting";
import { SalesStrategyEssay } from "@/components/developers/sales-strategy-essay";
import { ScopeOfWork } from "@/components/developers/scope-of-work";
import { DistributionEcosystem } from "@/components/distribution-ecosystem";
import { SubmitProjectCta } from "@/components/submit-project-cta";

export const metadata: Metadata = {
  title: "Developers | TEKCE Exclusive",
  description:
    "International sales for real estate developers: positioning, marketing, distribution and the management of every sale, through one accountable partner.",
};

/**
 * The developer's reading order: the offer, why one structure beats many
 * agencies, the exact scope, how distribution works, the argument behind it,
 * what they will see, how to start, proof, and the ask. The distribution
 * diagram and the closing CTA are the approved homepage components.
 */
export default function DevelopersPage() {
  return (
    <main>
      <DevelopersHero />
      <AgencyComparison />
      <ScopeOfWork />
      <DistributionEcosystem />
      <SalesStrategyEssay />
      <SalesReporting />
      <EngagementProcess />
      <ProjectsInNetwork />
      <SubmitProjectCta />
    </main>
  );
}
