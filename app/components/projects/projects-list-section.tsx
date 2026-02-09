import { ArrowRight } from "lucide-react";
import { format } from "date-fns";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";
import { projects } from "./projects.data";

interface DateDisplayProps {
  date: Date;
}

const DateDisplay = ({
  date
}: DateDisplayProps) => {
  const day = format(date, "dd");
  const month = format(date, "MMM").toUpperCase();
  const year = format(date, "yyyy");
  return <div className="flex-row gap-2 flex items-center justify-center">
    <span className="font-bold text-primary leading-none text-4xl md:text-[56px]">
      {day}
    </span>
    <div className="flex flex-col self-end">
      <span className="text-[18px] font-medium text-foreground-dark uppercase tracking-wide leading-tight">
        {month}
      </span>
      <span className="text-[18px] font-medium text-foreground-dark uppercase tracking-wide leading-tight">
        {year}
      </span>
    </div>
  </div>;
};

interface ProjectCardProps {
  slug: string;
  date: Date;
  title: string;
  description: string;
}

const ProjectCard = ({
  slug,
  date,
  title,
  description
}: ProjectCardProps) => {
  return <article className="flex flex-col md:flex-row gap-6 md:gap-12">
    <div className="self-start shrink-0">
      <DateDisplay date={date} />
    </div>

    <div className="flex-1 space-y-4">
      <h2 className="text-lg md:text-2xl font-medium text-foreground-dark uppercase tracking-wide">
        {title}
      </h2>
      <p className="text-sm md:text-base text-foreground leading-relaxed max-w-2xl">
        {description}
      </p>
      <Button variant="outline" asChild className="mt-4">
        <Link to={`/projects/${slug}`}>
          Read More <ArrowRight className="size-4" />
        </Link>
      </Button>
    </div>
  </article>;
};

const ProjectsListSection = () => {
  return <section className="py-20 md:py-25 lg:py-30 bg-background">
    <div className="mx-auto max-w-200 px-4 sm:px-6 space-y-20">
      {projects.map(project => <ProjectCard key={project.slug} slug={project.slug} date={project.date} title={project.title} description={project.description} />)}
    </div>
  </section>;
};

export default ProjectsListSection;