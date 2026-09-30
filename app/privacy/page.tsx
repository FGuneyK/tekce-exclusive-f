import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { PRIVACY } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy | TEKCE Exclusive",
  description:
    "How TEKCE Exclusive collects, processes, stores and protects personal data under Türkiye's Personal Data Protection Law (KVKK).",
};

export default function PrivacyPage() {
  return <LegalPage document={PRIVACY} />;
}
