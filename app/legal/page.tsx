import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { LEGAL_NOTICES } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Legal Notices | TEKCE Exclusive",
  description:
    "Legal notices and disclaimers for tekceexclusive.com: website content, warnings, external links and copyright.",
};

export default function LegalNoticesPage() {
  return <LegalPage document={LEGAL_NOTICES} />;
}
