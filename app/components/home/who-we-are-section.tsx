import { ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import { LazyVideo } from "~/components/common/lazy-video";
import { navLinks } from "~/lib/site";
import SectionTitle from "~/components/common/section-title";
import { ResponsiveImage } from "~/components/common/responsive-img";
import { useTranslation } from "react-i18next";
import LinkLang from "~/components/common/link-lang";

export const WhoWeAreSection = () => {
  const { t } = useTranslation("translation", { keyPrefix: "home.whoWeAre" });
  return (
    <section className="bg-background py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-3 sm:px-6 xl:px-0 max-w-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col items-start text-left order-1">
            <SectionTitle size={"h2"} variant={"dark"} className="text-left mb-4 md:mb-6 lg:mb-7">
              {t("title")}
            </SectionTitle>

            <p className="text-foreground font-normal text-sm md:text-base leading-normal mb-8 max-w-full lg:max-w-xl">
              {t("description")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-fit">
              <Button asChild variant="default" className="w-full">
                <LinkLang to={navLinks.contact}>{t("submit")}</LinkLang>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <LinkLang to={navLinks.about} className="flex items-center gap-2">
                  {t("readMore")}
                  <ArrowRight className="size-4" />
                </LinkLang>
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end order-2">
            <div className="relative w-full max-w-full lg:max-w-125 xl:max-w-150">
              <ResponsiveImage
                src="/images/logo-video/logo-video-350.webp"
                path="/images/logo-video"
                fileName="logo-video"
                fileExtension="webp"
                sizesSet={[350, 400, 500, 600, 768]}
                sizes="(min-width: 1024px) 600px, (min-width: 768px) 768px, (min-width: 500px) 500px, (min-width: 400px) 400px, (min-width: 300px) 350px"
                alt="logo Novaluxe"
                className="w-full h-auto"
                loading="lazy"
              />
              <div className="absolute top-[49%] left-[49.75%] -translate-x-1/2 -translate-y-1/2 w-[42%] aspect-square rounded-full overflow-hidden">
                <LazyVideo
                  src={"/videos/who-we-are.mp4"}
                  type="video/mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
