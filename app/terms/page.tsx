import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { TERMS } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms of Use | TEKCE Exclusive",
  description:
    "The terms and conditions of using tekceexclusive.com.",
};

export default function TermsPage() {
  return <LegalPage document={TERMS} />;
}
