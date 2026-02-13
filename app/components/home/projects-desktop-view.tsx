import { useBreakpoint } from "hooks/use-breakpoint";
import { getDesktopProjects, projectVariants } from "./projects-section.data";
import ProjectsRow from "./projects-row";
import Project from "./project";
import { useMemo } from "react";
import SectionTitle from "../common/section-title";

const DesktopView = () => {
  const { breakpoint } = useBreakpoint();

  const variants = useMemo(() => {
    if (breakpoint === "xl" || breakpoint === "2xl" || breakpoint === "3xl") {
      return {
        ...projectVariants,
      };
    }

    if (breakpoint === "lg") {
      return {
        ...projectVariants,
        open: { ...projectVariants.open, width: 400 },
        closed: { ...projectVariants.closed, width: 160 },
      };
    }

    if (breakpoint === "md" || breakpoint === "sm") {
      return {
        ...projectVariants,
        open: { ...projectVariants.open, width: 284 },
        closed: { ...projectVariants.closed, width: 140 },
      };
    }

    return projectVariants;
  }, [breakpoint]);

  return (
    <section className="flex flex-col gap-9.5 py-27.5 lg:py-41 mx-auto px-3 sm:px-6 xl:px-0 max-w-300">
      <div className="flex flex-row justify-between gap-5">
        <div className="md:space-y-2.5 lg:space-y-4 self-center max-w-86 xl:max-w-105">
          <SectionTitle asChild size={"h2"} variant={"dark"} className="text-left">
            <h2>Our Projects</h2>
          </SectionTitle>
          <p className="text-foreground font-normal">
            We have worked on a wide range of projects, from small startups to large enterprises.
          </p>
        </div>
        <ProjectsRow defaultOpen={0} className="h-50 lg:h-62 xl:h-80">
          {getDesktopProjects().row1.map(data => (
            <Project variants={variants} key={data.id} {...data} />
          ))}
        </ProjectsRow>
      </div>
      <ProjectsRow defaultOpen={1} className="h-50 lg:h-62 xl:h-80">
        {getDesktopProjects().row2.map(data => (
          <Project variants={variants} key={data.id} {...data} />
        ))}
      </ProjectsRow>
    </section>
  );
}

export default DesktopView;