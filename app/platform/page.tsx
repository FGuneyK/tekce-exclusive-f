import type { Metadata } from "next";
import { DistributionEcosystem } from "@/components/distribution-ecosystem";
import { DeveloperDashboard } from "@/components/platform/developer-dashboard";
import { DistanceEssay } from "@/components/platform/distance-essay";
import { PartnerPlatform } from "@/components/platform/partner-platform";
import { PlatformHero } from "@/components/platform/platform-hero";
import { PlatformLayers } from "@/components/platform/platform-layers";
import { PlatformSubnav } from "@/components/platform/platform-subnav";
import { SalesCrm } from "@/components/platform/sales-crm";
import { TeleProperty } from "@/components/platform/teleproperty";
import { SubmitProjectCta } from "@/components/submit-project-cta";

export const metadata: Metadata = {
  title: "Platform | TEKCE Exclusive",
  description:
    "The TEKCE Exclusive platform: distribution ecosystem, TeleProperty remote viewing, sales and CRM, the developer dashboard and the partner platform.",
};

export default function PlatformPage() {
  return (
    <main>
      <PlatformHero />
      <PlatformSubnav />
      <PlatformLayers />
      <DistributionEcosystem />
      <TeleProperty />
      <DistanceEssay />
      <SalesCrm />
      <DeveloperDashboard />
      <PartnerPlatform />
      <SubmitProjectCta />
    </main>
  );
}
