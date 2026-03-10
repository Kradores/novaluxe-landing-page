import { Carousel, CarouselContent, CarouselItem } from "~/components/ui/carousel";
import MobileProject from "./project-mobile";
import { getMobileProjects } from "./projects-section.data";
import SectionTitle from "~/components/common/section-title";
import { useTranslation } from "react-i18next";

const MobileView = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full flex flex-col gap-8 px-3 mx-auto py-25">
      <div className="space-y-4">
        <SectionTitle asChild size={"h2"} variant={"dark"} className="text-left">
          <h2>{t("title")}</h2>
        </SectionTitle>
        <p className="text-sm text-foreground font-normal">
          {t("description")}
        </p>
      </div>
      <div className="w-full mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {getMobileProjects().map(data => (
              <CarouselItem key={data.id} className="aspect-video basis-[90%]">
                <MobileProject
                  className={data.className}
                  title={t(`projects.${data.id}.title`)}
                  description={`${t(`projects.${data.id}.location`)} | ${t(`projects.${data.id}.duration`, { months: data.duration })}`}
                  href={data.href}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}

export default MobileView;