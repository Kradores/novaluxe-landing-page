import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import { LazyVideo } from "~/components/common/lazy-video";
import { navLinks } from "~/lib/site";
import SectionTitle from "../common/section-title";

export const WhoWeAreSection = () => {
  return (
    <section className="bg-background py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-3 sm:px-6 xl:px-0 max-w-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col items-start text-left order-1">
            <SectionTitle size={"h2"} variant={"dark"} className="text-left mb-4 md:mb-6 lg:mb-7">
              Who We Are
            </SectionTitle>
            
            <p className="text-foreground text-base md:text-lg leading-normal mb-8 max-w-full lg:max-w-xl">
              We are a B2B technical partner specializing in electrical installations and photovoltaic systems. Founded in 2024, we support companies across Europe with safe, efficient, and high-quality solar solutions. Backed by a team with over 15 years of industry experience, we deliver reliable, results-driven projects that support the transition to clean, sustainable energy through advanced technology and professional execution.
            </p>
            
            <div className="flex flex-row gap-4">
              <Button asChild variant="default" className="px-11 md:px-13">
                <Link to={navLinks.contact}>Get a Quote</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to={navLinks.about} className="flex items-center gap-2">
                  Read More
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end order-2">
            <div className="relative w-full max-w-full lg:max-w-125 xl:max-w-150">
              <img 
                alt="logo Novaluxe"
                src="/images/logo-video.webp"
                loading="lazy"
                className="w-full h-auto"
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
