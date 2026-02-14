import { CheckCircle2 } from "lucide-react";
import SectionTitle from "../common/section-title";

const jobDetails = [
  { label: "Location", value: "Spain (EU projects possible)" },
  { label: "Food and Housing", value: "Provided / Paid" },
  { label: "Target Workers", value: "Men, 24-45 years old" },
  { label: "Physical Requirements", value: "Relatively strong, without health problems" },
  { label: "Relocation", value: "Workers must relocate based on project requirements" },
];

const responsibilities = [
  { title: "Photovoltaic Panel Installation", description: "Installation and montage of solar panels for renewable energy projects" },
  { title: "Excavation Work", description: "Site preparation and excavation for construction projects" },
  { title: "Drone Site Inspection", description: "Use of drones for site inspection and project monitoring" },
  { title: "Construction Machinery Operation", description: "Operation of various construction machinery and equipment" },
];

const requirements = [
  "Valid driving license required",
  "Language: Romanian or Spanish",
  "Experience in construction or technical work (preferred but not mandatory)",
];

export const JobOfferSection = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-300 px-4 md:px-6 xl:px-0">
        <div className="bg-card rounded-[32px] p-3 md:p-10 space-y-20 lg:space-y-38">
          <div className="space-y-3 md:space-y-12.5">
            <SectionTitle asChild size={"h4"} variant={"primary"} className="text-left">
              <h2>
                JOB DETAILS
              </h2>
            </SectionTitle>
            <div className="flex flex-col md:gap-4">
              {jobDetails.map((item) => (
                <div key={item.label} className="grid grid-cols-1 md:grid-cols-2 py-4 border-b border-fade">
                  <span className="text-foreground font-medium text-lg md:text-xl content-center">{item.label}</span>
                  <span className="text-foreground font-normal text-lg md:text-xl content-center">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3 md:space-y-12.5">
            <SectionTitle asChild size={"h4"} variant={"primary"} className="text-left">
              <h2>
                RESPONSIBILITIES
              </h2>
            </SectionTitle>
            <div className="flex flex-col gap-6 md:gap-8">
              {responsibilities.map((item) => (
                <div key={item.title} className="pb-6 md:pb-4 border-b border-fade space-y-3 md:space-y-4">
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="size-6 text-background fill-primary shrink-0 self-center" />
                    <span className="text-foreground font-medium text-lg md:text-xl content-center">{item.title}</span>
                  </div>
                  <p className="text-foreground font-normal text-lg md:text-xl content-center">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3 md:space-y-12.5 mb-5">
            <SectionTitle asChild size={"h4"} variant={"primary"} className="text-left">
              <h2>
                REQUIREMENTS
              </h2>
            </SectionTitle>
            <div className="flex flex-col gap-3 md:gap-4">
              {requirements.map((item) => (
                <div key={item} className="flex items-start gap-1.5">
                  <CheckCircle2 className="size-6 text-background fill-primary shrink-0 self-center" />
                  <span className="text-foreground font-medium text-lg md:text-xl content-center">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
