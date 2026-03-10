import { Calendar, Settings, MapPin, ArrowDown } from "lucide-react";
import { Button } from "~/components/ui/button";
import { type Project } from "./projects.data";
import SectionTitle from "../common/section-title";
import { Execution, Proposal, Tech } from "../icons";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface InfoCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const InfoCard = ({ icon, label, value }: InfoCardProps) => {
  return (
    <div className="flex flex-col items-center text-center space-y-2 p-4">
      {icon}
      <SectionTitle asChild size={"h9"} variant={"primary"}>
        <span>
          {label}
        </span>
      </SectionTitle>
      <span className="text-base md:text-lg text-foreground font-medium">{value}</span>
    </div>
  );
};

const ProjectTemplate = ({ project }: { project: Project }) => {
  const { t } = useTranslation("translation", { keyPrefix: `projects`});
  const [images, setImages] = useState<string[]>(project.images.slice(0, 6));
  const title = t(`${project.slug}.title`, "Project Title");
  const content = t(`${project.slug}.content`, { returnObjects: true }) as string[];

  const loadMoreImages = () => {
    setImages(project.images);
  };
  return (
    <section className="mx-auto px-3 sm:px-6 xl:px-0 max-w-300 flex flex-col items-center gap-12 pt-25 pb-15 lg:pb-25">
      <div className="w-full overflow-hidden rounded-2xl lg:rounded-3xl shadow-sm/8">
        <img
          src={project.headerImage}
          alt={title}
          className="w-full h-64 sm:h-80 lg:h-96 object-cover"
        />
      </div>

      <div className="text-center">
        <SectionTitle asChild size={"h2"} variant={"dark"}>
          <h1>
            {title}
          </h1>
        </SectionTitle>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
        <InfoCard
          icon={<Proposal className="size-10.5" fill="var(--primary)" />}
          label={t("generic.duration")}
          value={t(`${project.slug}.duration`, { months: project.duration })}
        />
        <InfoCard
          icon={<Execution className="size-10.5" fill="var(--primary)" />}
          label={t("generic.projectType")}
          value={t(`${project.slug}.projectType`)}
        />
        <InfoCard
          icon={<Tech className="size-10.5" fill="var(--primary)" />}
          label={t("generic.location")}
          value={t(`${project.slug}.location`)}
        />
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="text-sm md:text-base text-center text-foreground leading-normal whitespace-pre-line">
          {content.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl aspect-4/3 shadow-sm/8"
            >
              <img
                src={image}
                alt={`${title} - Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <Button variant="outline" onClick={loadMoreImages} disabled={images.length >= project.images.length}>
          Load More <ArrowDown className="size-4" />
        </Button>
      </div>
    </section>
  );
};

export default ProjectTemplate;
