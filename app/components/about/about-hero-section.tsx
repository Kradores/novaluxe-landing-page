import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import SectionTitle from "~/components/common/section-title";
import { navLinks } from "~/lib/site";
import { ResponsiveImage } from "~/components/common/responsive-img";
import { useTranslation } from "react-i18next";

export const AboutHeroSection = () => {
  const { t } = useTranslation("translation", { keyPrefix: "about.hero" });

  return (
    <section className="relative overflow-hidden flex items-center justify-center">
      <ResponsiveImage
        src="/images/about-hero-bg/about-hero-bg-375.webp"
        path="/images/about-hero-bg"
        fileName="about-hero-bg"
        fileExtension="webp"
        sizesSet={[375, 600, 800, 1024, 1280, 1440, 2560]}
        alt={t("imageAlt")}
        className="absolute inset-0 w-full h-full object-cover"
        rel="preload"
        fetchPriority="high"
      />
      <div className="relative z-10 flex flex-col items-center gap-4.5 text-center px-3 max-md:pt-35 pb-42 md:py-27 lg:pb-24 xl:pb-51 2xl:pb-66 max-w-300">
        <SectionTitle size={"h1"} className="leading-tight">
          {t("title")}
        </SectionTitle>
        <p className="max-w-md text-background text-sm md:text-base">
          {t("description")}
        </p>

        <p className="text-background text-lg md:text-xl font-medium">
          {t("ctaQuestion")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 w-fit gap-3 md:gap-4.5 mx-auto bg-background/20 backdrop-blur-md border border-background/20 p-2 rounded-[32px] md:rounded-full">
          <Button
            asChild
            className="hover:bg-orange-glow w-full"
          >
            <Link to={navLinks.contact}>{t("buttons.getQuote")}</Link>
          </Button>
          <Button
            asChild
            variant={"outline"}
            className="border-primary-foreground text-primary-foreground w-full"
          >
            <Link to={navLinks.join} className="flex items-center gap-2.5">
              {t("buttons.joinTeam")}
              <ArrowRight className="size-3.75" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
