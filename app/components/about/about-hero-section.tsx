import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import SectionTitle from "~/components/common/section-title";
import { navLinks } from "~/lib/site";

export const AboutHeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
      <img
        src={"/images/about-hero-bg.webp"}
        alt="Solar panel installation"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-blue-dark-glow/10" />

      <div className="relative z-10 flex flex-col items-center text-center px-3 pt-24 max-w-300">
        <SectionTitle size={"h1"} className="leading-tight">
          WHO WE ARE?
        </SectionTitle>
        <p className="mt-4 max-w-md text-background text-base md:text-lg">
          Lorem ipsum tristique enim at in odio neque eget dignissim orci.
        </p>

        <p className="mt-10 text-background text-lg md:text-xl font-bold">
          Want a custom solution?
        </p>

        <div className="mt-4 flex flex-col sm:flex-row items-center gap-4">
          <div className="bg-background/20 backdrop-blur-md border border-background/20 p-2 rounded-full gap-3 md:gap-4.5 flex flex-row">
            <Button
              asChild
              className="hover:bg-orange-glow text-sm md:text-base"
            >
              <Link to={navLinks.contact}>Get a Quote</Link>
            </Button>
            <Button
              asChild
              variant={"outline"}
              className="border-primary-foreground text-primary-foreground text-sm md:text-base"
            >
              <Link to={navLinks.join} className="flex items-center gap-2.5">
                Join our Team
                <ArrowRight className="size-3.75" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
