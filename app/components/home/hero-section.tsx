import { Button } from "~/components/ui/button";
import worker1 from "/images/worker-1.webp";
import worker2 from "/images/worker-2.webp";
import worker3 from "/images/worker-3.webp";
import { Link } from "react-router";
import ImageFrame from "~/components/common/image-frame";
import SectionTitle from "~/components/common/section-title";
import { navLinks } from "~/lib/site";

const HeroSection = () => {
  return (
    <section className="relative bg-foreground overflow-hidden flex items-center justify-center">
      <img
        src={"/images/hero-bg.webp"}
        alt="Solar panel installation"
        className="absolute inset-0 w-full h-full object-cover"
        rel="preload"
        fetchPriority="high"
      />
      <div className="overflow-hidden relative z-10 gap-7 pt-40 md:pt-33 lg:pt-43 xl:pt-50 pb-14 md:pb-57 lg:pb-20 px-3 sm:px-6 xl:px-0 max-w-300 flex flex-col mx-auto">
        <SectionTitle size={"h1"} className="text-shadow-md">WE DO THE HARD WORK</SectionTitle>
        <div className="grid justify-stretch gap-4 md:grid-cols-2 lg:grid-cols-3 text-shadow-md">
          <div className="flex pt-10 h-fit">
            <p className="leading-relaxed text-secondary-foreground font-medium text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>

          <div className="flex flex-col items-center gap-5 md:col-start-1 lg:col-start-2 md:row-start-2 lg:row-start-1">
            <p className="text-center text-lg font-medium text-secondary-foreground md:text-xl">Want a custom solution?</p>
            <div className="group bg-background/20 backdrop-blur-md border border-background/20 p-2 rounded-full hover:shadow-lg">
              <Button
                asChild
                className="group-hover:bg-orange-glow"
              >
                <Link to={navLinks.contact}>Get a Quote</Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 grid-rows-3 gap-4 md:gap-7 pt-11 md:col-start-2 lg:col-start-3 md:row-start-1 md:row-span-2 lg:row-span-1">
            <div className="flex flex-row justify-end">
              <ImageFrame src={worker3} alt="Team member in blue helmet" className="z-10 rounded-full h-12 w-12 border-background border" />
              <ImageFrame src={worker2} alt="Team member in yellow helmet" className="-ml-6 z-20 rounded-full h-12 w-12 border-background border" />
              <ImageFrame src={worker1} alt="Team member in white helmet" className="-ml-6 z-30 rounded-full h-12 w-12 border-background border" classNames={{ image: "object-[10%]" }} />
            </div>

            <div className="flex flex-col gap-1">
              <SectionTitle size={"h6"} className="text-left text-shadow-md text-2xl"><span>+45</span></SectionTitle>
              <span className="text-secondary-foreground">reliable workers</span>
            </div>
            <div className="flex flex-col gap-1 md:col-start-2 md:row-start-2 justify-self-end md:justify-self-start">
              <SectionTitle size={"h6"} className="text-left text-shadow-md text-2xl"><span>+10</span></SectionTitle>
              <span className="text-secondary-foreground">projects done</span>
            </div>
            <div className="flex flex-col gap-1 md:col-start-2 md:row-start-3">
              <SectionTitle size={"h6"} className="text-left text-shadow-md text-2xl"><span>100%</span></SectionTitle>
              <span className="text-secondary-foreground">success rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;