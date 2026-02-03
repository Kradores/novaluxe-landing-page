import { Button } from "~/components/ui/button";
import worker1 from "../../../static/images/worker-1.jpg";
import worker2 from "../../../static/images/worker-2.jpg";
import worker3 from "../../../static/images/worker-3.jpg";
import { Link } from "react-router";
import ImageFrame from "~/components/common/image-frame";
import PageTitle from "~/components/common/page-title";
import { cn } from "~/lib/utils";

const HeroSection = ({ className }: { className?: string }) => {
  return (
    <section className={cn("overflow-hidden gap-7 pt-6 lg:pt-22 pb-90 md:pb-90 lg:pb-80 px-3 sm:px-6 xl:px-0 w-full max-w-full md:max-w-6xl flex flex-col", className)}>
      <PageTitle className="text-shadow-md">WE DO THE HARD WORK</PageTitle>
      <div className="grid justify-stretch gap-4 md:grid-cols-2 lg:grid-cols-3 text-shadow-md">
        <div className="flex pt-10 h-fit">
          <p className="leading-relaxed text-secondary-foreground font-medium text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>

        <div className="flex flex-col items-center gap-5 md:col-start-1 lg:col-start-2 md:row-start-2 lg:row-start-1">
          <p className="text-center text-lg font-medium text-secondary-foreground md:text-xl">Want a custom solution?</p>
          <div className="group bg-background/20 backdrop-blur-md border border-background/20 p-2 rounded-full hover:shadow-lg hover:scale-102 transition-all duration-500 ease-in-out">
            <Button
              asChild
              className="group-hover:scale-102 group-hover:bg-orange-glow"
            >
              <Link to="/contact">Get a Quote</Link>
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
            <span className="text-2xl font-medium text-secondary-foreground">+45</span>
            <span className="text-secondary-foreground">reliable workers</span>
          </div>
          <div className="flex flex-col gap-1 md:col-start-2 md:row-start-2 justify-self-end md:justify-self-start">
            <span className="text-2xl font-medium text-secondary-foreground">+10</span>
            <span className="text-secondary-foreground">projects done</span>
          </div>
          <div className="flex flex-col gap-1 md:col-start-2 md:row-start-3">
            <span className="text-2xl font-medium text-secondary-foreground">100%</span>
            <span className="text-secondary-foreground">success rate</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
