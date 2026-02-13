import { Carousel, CarouselContent, CarouselItem } from "~/components/ui/carousel";
import MobileProject from "./project-mobile";
import { getMobileProjects } from "./projects-section.data";
import SectionTitle from "../common/section-title";

const MobileView = () => {
  return (
    <section className="w-full flex flex-col gap-8 px-3 mx-auto py-25">
      <div className="space-y-4">
        <SectionTitle asChild size={"h2"} variant={"dark"} className="text-left">
          <h2>Our Projects</h2>
        </SectionTitle>
        <p className="text-sm text-foreground font-normal">
          We have worked on a wide range of projects, from small startups to large enterprises.
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
                <MobileProject {...data} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}

export default MobileView;