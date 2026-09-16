import type { Metadata } from "next";
import { ClientEssay } from "@/components/partners/client-essay";
import { LeadRegistration } from "@/components/partners/lead-registration";
import { NetworkRules } from "@/components/partners/network-rules";
import { OnTheGround } from "@/components/partners/on-the-ground";
import { PartnerApplication } from "@/components/partners/partner-application";
import { PartnerToolkit } from "@/components/partners/partner-toolkit";
import { PartnersHero } from "@/components/partners/partners-hero";

export const metadata: Metadata = {
  title: "Partners | TEKCE Exclusive",
  description:
    "A partner network for agencies with international clients: selected projects, registered and protected leads, transparent commissions and local support through closing.",
};

/**
 * The agency's reading order: the offer, what they work with, how a client
 * stays theirs, the argument behind it, who supports the sale abroad, how the
 * group partner fits in, and the application.
 */
export default function PartnersPage() {
  return (
    <main>
      <PartnersHero />
      <PartnerToolkit />
      <LeadRegistration />
      <ClientEssay />
      <OnTheGround />
      <NetworkRules />
      <PartnerApplication />
    </main>
  );
}
