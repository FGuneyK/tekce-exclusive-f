import type { Metadata } from "next";
import { ProjectEnquiry } from "@/components/projects/project-enquiry";
import { ProjectIndex } from "@/components/projects/project-index";
import { ProjectsMasthead } from "@/components/projects/projects-masthead";

export const metadata: Metadata = {
  title: "Projects | TEKCE Exclusive",
  description:
    "Every new-build project TEKCE Exclusive represents in Spain and Türkiye, with the developer's own availability, bedroom counts, sizes and base prices.",
};

/**
 * An index rather than an argument: a short masthead, then the whole list
 * with the filters a buyer actually uses, and one way to ask about a unit.
 */
export default function ProjectsPage() {
  return (
    <main>
      <ProjectsMasthead />
      <ProjectIndex />
      <ProjectEnquiry />
    </main>
  );
}
