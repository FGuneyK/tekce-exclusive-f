import { DeveloperFaq } from "@/components/developer-faq";
import { DistributionEcosystem } from "@/components/distribution-ecosystem";
import { FeaturedProjects } from "@/components/featured-projects";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Markets } from "@/components/markets";
import { Partners } from "@/components/partners";
import { SubmitProjectCta } from "@/components/submit-project-cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <DistributionEcosystem />
      <Markets />
      <FeaturedProjects />
      <Partners />
      <DeveloperFaq />
      <SubmitProjectCta />
    </main>
  );
}
