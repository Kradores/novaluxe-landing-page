import { CheckCircle2 } from "lucide-react";
import SectionTitle from "../common/section-title";
import { useTranslation } from "react-i18next";

export const JobOfferSection = () => {
  const { t } = useTranslation("translation", { keyPrefix: "join.jobOffer" });

  const jobDetails = [
    { label: t("details.location.label"), value: t("details.location.value") },
    { label: t("details.housing.label"), value: t("details.housing.value") },
    { label: t("details.target.label"), value: t("details.target.value") },
    { label: t("details.physical.label"), value: t("details.physical.value") },
    { label: t("details.relocation.label"), value: t("details.relocation.value") },
  ];

  const responsibilities = [
    { title: t("responsibilities.items.panels.title"), description: t("responsibilities.items.panels.description") },
    { title: t("responsibilities.items.excavation.title"), description: t("responsibilities.items.excavation.description") },
    { title: t("responsibilities.items.drones.title"), description: t("responsibilities.items.drones.description") },
    { title: t("responsibilities.items.machinery.title"), description: t("responsibilities.items.machinery.description") },
  ];

  const requirements = t("requirements.list", { returnObjects: true }) as string[];

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-300 px-4 md:px-6 xl:px-0">
        <div className="bg-card rounded-[32px] p-3 md:p-10 space-y-20 lg:space-y-38">
          {/* Job Details */}
          <div className="space-y-3 md:space-y-12.5">
            <SectionTitle asChild size={"h4"} variant={"primary"} className="text-left">
              <h2>{t("details.heading")}</h2>
            </SectionTitle>
            <div className="flex flex-col md:gap-4">
              {jobDetails.map((item, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-2 py-4 border-b border-fade">
                  <span className="text-foreground font-medium text-lg md:text-xl content-center">{item.label}</span>
                  <span className="text-foreground font-normal text-lg md:text-xl content-center">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Responsibilities */}
          <div className="space-y-3 md:space-y-12.5">
            <SectionTitle asChild size={"h4"} variant={"primary"} className="text-left">
              <h2>{t("responsibilities.heading")}</h2>
            </SectionTitle>
            <div className="flex flex-col gap-6 md:gap-8">
              {responsibilities.map((item, index) => (
                <div key={index} className="pb-6 md:pb-4 border-b border-fade space-y-3 md:space-y-4">
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="size-6 text-background fill-primary shrink-0 self-center" />
                    <span className="text-foreground font-medium text-lg md:text-xl content-center">{item.title}</span>
                  </div>
                  <p className="text-foreground font-normal text-lg md:text-xl content-center">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div className="space-y-3 md:space-y-12.5 mb-5">
            <SectionTitle asChild size={"h4"} variant={"primary"} className="text-left">
              <h2>{t("requirements.heading")}</h2>
            </SectionTitle>
            <div className="flex flex-col gap-3 md:gap-4">
              {requirements.map((item, index) => (
                <div key={index} className="flex items-start gap-1.5">
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
