import { Calendar, Settings, MapPin, ArrowDown } from "lucide-react";
import { Button } from "~/components/ui/button";
import { type Project } from "./projects.data";

interface InfoCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const InfoCard = ({ icon, label, value }: InfoCardProps) => {
  return (
    <div className="flex flex-col items-center text-center space-y-2 p-4">
      <div className="text-primary">{icon}</div>
      <span className="text-xs font-medium text-primary uppercase tracking-wider">
        {label}
      </span>
      <span className="text-sm text-foreground font-medium">{value}</span>
    </div>
  );
};

const ProjectTemplate = ({ project }: { project: Project }) => {
  return (
    <section className="mx-auto px-3 sm:px-6 xl:px-0 max-w-300 flex flex-col items-center gap-12 pt-25 pb-15 lg:pb-25">
      <div className="w-full overflow-hidden rounded-2xl lg:rounded-3xl">
        <img
          src={project.headerImage}
          alt={project.title}
          className="w-full h-64 sm:h-80 lg:h-96 object-cover"
        />
      </div>

      <div className="text-center space-y-2">
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground uppercase tracking-wide">
          {project.title}
        </h1>
        <p className="text-lg text-muted-foreground">{project.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
        <InfoCard
          icon={<Calendar className="size-6" />}
          label="Duration"
          value={project.duration}
        />
        <InfoCard
          icon={<Settings className="size-6" />}
          label="Project Type"
          value={project.projectType}
        />
        <InfoCard
          icon={<MapPin className="size-6" />}
          label="Location"
          value={project.location}
        />
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="prose prose-lg text-muted-foreground leading-relaxed whitespace-pre-line">
          {project.content}
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl aspect-4/3"
            >
              <img
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <Button variant="outline">
          Load More <ArrowDown className="size-4" />
        </Button>
      </div>
    </section>
  );
};

export default ProjectTemplate;
