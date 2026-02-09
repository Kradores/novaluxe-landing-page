import { Navigate, useParams } from "react-router";
import ProjectsSection from "~/components/home/projects-section";
import StepsSection from "~/components/home/steps-section";
import NeedHelpSection from "~/components/projects/need-help-section";
import ProjectTemplate from "~/components/projects/project-template";
import { getProjectBySlug } from "~/components/projects/projects.data";

export default function Page() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (<main className="flex flex-col w-full">
    <ProjectTemplate project={project} />
    <StepsSection />
    <ProjectsSection />
    <NeedHelpSection />
  </main>);
}