import type { Metadata } from "next";
import { AboutExclusive } from "@/components/company/about-exclusive";
import { BusinessModel } from "@/components/company/business-model";
import { CompanyContact } from "@/components/company/company-contact";
import { CompanyHero } from "@/components/company/company-hero";
import { GlobalNetwork } from "@/components/company/global-network";
import { GroupHistory } from "@/components/company/group-history";
import { GroupValues } from "@/components/company/group-values";
import { PlatformEssay } from "@/components/company/platform-essay";
import { TekceGroup } from "@/components/company/tekce-group";

export const metadata: Metadata = {
  title: "Company | TEKCE Exclusive",
  description:
    "TEKCE Exclusive is the project sales platform of TEKCE Group: who we are, the group behind us, our business model and our international network.",
};

/**
 * Read like a company report: the index in the hero, then who we are, the
 * group, its history, the argument for the platform, the model, the
 * network, the values, and where to go next.
 */
export default function CompanyPage() {
  return (
    <main>
      <CompanyHero />
      <AboutExclusive />
      <TekceGroup />
      <GroupHistory />
      <PlatformEssay />
      <BusinessModel />
      <GlobalNetwork />
      <GroupValues />
      <CompanyContact />
    </main>
  );
}
