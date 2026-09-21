import type { Metadata } from "next";
import { AdviserChoice } from "@/components/invest/adviser-choice";
import { BuyerChecklist } from "@/components/invest/buyer-checklist";
import { BuyerReasons } from "@/components/invest/buyer-reasons";
import { CurrentProjects } from "@/components/invest/current-projects";
import { InvestHero } from "@/components/invest/invest-hero";
import { PromiseEssay } from "@/components/invest/promise-essay";

export const metadata: Metadata = {
  title: "Invest | TEKCE Exclusive",
  description:
    "Invest in new property in Spain, Türkiye, North Cyprus and the United Arab Emirates, with complete project information, one price and local support through closing.",
};

export default function InvestPage() {
  return (
    <main>
      <InvestHero />
      <BuyerReasons />
      <CurrentProjects />
      <PromiseEssay />
      <BuyerChecklist />
      <AdviserChoice />
    </main>
  );
}
