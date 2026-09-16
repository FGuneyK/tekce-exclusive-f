import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MoreProjects } from "@/components/projects/more-projects";
import { ProjectBrief } from "@/components/projects/project-brief";
import { ProjectEnquiry } from "@/components/projects/project-enquiry";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectHomes } from "@/components/projects/project-homes";
import { ProjectLocation } from "@/components/projects/project-location";
import { PROJECTS, projectBySlug, summaryOf } from "@/lib/projects";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = projectBySlug(slug);
  if (!project) return {};

  const { available, total } = summaryOf(project);
  return {
    title: `${project.name}, ${project.location} | TEKCE Exclusive`,
    description: `${project.summary} ${available} of ${total} homes available, with every unit, size and price listed.`,
  };
}

/**
 * A listing page: pictures and the enquiry panel together in the first
 * screen, then the written account and specification, what is left of the
 * building, the place, and the way out.
 */
export default async function ProjectPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = projectBySlug(slug);
  if (!project) notFound();

  return (
    <main>
      <ProjectHero project={project} />
      <ProjectBrief project={project} />
      <ProjectHomes project={project} />
      <ProjectLocation project={project} />
      <MoreProjects current={project} />
      <ProjectEnquiry project={project} />
    </main>
  );
}
