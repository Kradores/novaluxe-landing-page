import { Button } from "~/components/ui/button";
import { Link } from "react-router";
import SectionTitle from "~/components/common/section-title";
import { navLinks } from "~/lib/site";
import { ResponsiveImage } from "~/components/common/responsive-img";
import { useTranslation } from "react-i18next";

const ServicesPageHeader = () => {
  const { t } = useTranslation("translation", { keyPrefix: "services.hero" });

  return (
    <section className="relative bg-foreground overflow-hidden flex items-center justify-center md:rounded-b-[32px]">
      <ResponsiveImage
        src="/images/services-hero-bg/services-hero-bg-375.webp"
        path="/images/services-hero-bg"
        fileName="services-hero-bg"
        fileExtension="webp"
        sizesSet={[375, 600, 800, 1024, 1280, 1440, 2560]}
        alt={t("imageAlt")}
        className="absolute inset-0 w-full h-full object-cover max-sm:object-[20%]"
        rel="preload"
        fetchPriority="high"
      />
      <div className="relative z-10 overflow-hidden gap-7 max-w-300 mx-auto flex flex-col pt-40 md:pt-33 lg:pt-43 xl:pt-50 pb-43 md:pb-25 lg:pb-27 px-3 sm:px-6 xl:px-0">
        <SectionTitle size={"h1"}>
          {t("title")}
        </SectionTitle>
        <div className="space-y-5 mx-auto">
          <p className="leading-normal text-secondary-foreground text-lg md:text-xl font-medium text-center">
            {t("ctaQuestion")}
          </p>
          <div className="group w-fit bg-background/20 backdrop-blur-md border border-background/20 p-2 rounded-full mx-auto">
            <Button
              asChild
              className="group-hover:bg-orange-glow"
            >
              <Link to={navLinks.contact}>{t("button")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesPageHeader;
