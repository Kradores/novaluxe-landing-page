import { useTranslation } from "react-i18next";
import SectionTitle from "~/components/common/section-title";

export const StatsSection = () => {
  const { t } = useTranslation("translation", { keyPrefix: "about.stats" });

  const stats = [
    { value: "+45", label: t("items.workers") },
    { value: "+10", label: t("items.projects") },
    { value: "100%", label: t("items.success") },
  ];

  return (
    <section className="bg-blue-dark-glow py-15 md:py-20 lg:py-25">
      <div className="mx-auto max-w-300 xl: px-2 md:px-6 flex flex-col xl:flex-row items-center gap-10 lg:gap-16">
        <p className="text-secondary-foreground text-base md:text-lg font-medium text-center lg:text-left lg:max-w-xl">
          {t("description")}
        </p>

        <div className="flex flex-row w-full justify-between lg:max-w-xl">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center gap-1 md:gap-2 w-fit">
              <SectionTitle asChild size={"h3"} variant={"primary"}>
                <span>
                  {stat.value}
                </span>
              </SectionTitle>
              <span className="text-secondary-foreground text-base md:text-lg font-medium text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
