import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { COOKIES } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Cookie Policy | TEKCE Exclusive",
  description:
    "The cookies tekceexclusive.com uses, what each is for, how long it lasts and how to manage them.",
};

export default function CookiesPage() {
  return <LegalPage document={COOKIES} />;
}
