import { ArrowRight } from "lucide-react";
import { format } from "date-fns";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";
import { projects } from "./projects.data";
import SectionTitle from "../common/section-title";
import { useTranslation } from "react-i18next";

interface DateDisplayProps {
  date: Date;
}

const DateDisplay = ({
  date
}: DateDisplayProps) => {
  const day = format(date, "dd");
  const month = format(date, "MMM").toUpperCase();
  const year = format(date, "yyyy");
  return <div className="flex-row lg:gap-1 flex items-center justify-center">
    <SectionTitle asChild size={"h2"} variant={"primary"} className="leading-none">
      <span className="font-sans max-md:text-5xl">
        {day}
      </span>
    </SectionTitle>
    <div className="flex flex-col self-end">
      <SectionTitle asChild size={"h8"} variant={"dark"} className="leading-tight text-left">
        <span className="font-sans max-md:text-lg">
          {month}
        </span>
      </SectionTitle>
      <SectionTitle asChild size={"h8"} variant={"dark"} className="leading-tight text-left">
        <span className="font-sans max-md:text-lg">
          {year}
        </span>
      </SectionTitle>
    </div>
  </div>;
};

interface ProjectCardProps {
  slug: string;
  date: Date;
}

const ProjectCard = ({
  slug,
  date,
}: ProjectCardProps) => {
  const { t } = useTranslation("translation", { keyPrefix: `projects`});
  return <article className="flex flex-col md:flex-row gap-6 md:gap-12">
    <div className="self-start shrink-0">
      <DateDisplay date={date} />
    </div>

    <div className="flex-1 space-y-4">
      <SectionTitle asChild size={"h6"} variant={"dark"} className="text-left">
        <h2>
          {t(`${slug}.title`)}
        </h2>
      </SectionTitle>
      <p className="text-sm md:text-base text-foreground leading-normal max-w-2xl">
        {t(`${slug}.description`)}
      </p>
      <Button variant="outline" asChild className="mt-4">
        <Link to={`/projects/${slug}`}>
          {t(`generic.readMore`)} <ArrowRight className="size-4" />
        </Link>
      </Button>
    </div>
  </article>;
};

const ProjectsListSection = () => {
  return <section className="py-20 md:py-25 lg:py-30 bg-background">
    <div className="mx-auto max-w-200 px-4 sm:px-6 space-y-20">
      {projects.map(project => <ProjectCard key={project.slug} slug={project.slug} date={project.date} />)}
    </div>
  </section>;
};

export default ProjectsListSection;