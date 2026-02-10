import { useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Quotes } from "~/components/icons";
import { Button } from "~/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "~/components/ui/carousel";
import { cn } from "~/lib/utils";

const testimonials = [
  {
    quote: "Novaluxe Dynamic Team made things easy from day one. Great communication, fast execution, and they really listened to what we needed, adapting quickly without overcomplicating the process at all.",
    highlight: "We'd absolutely recommend them.",
    author: "Maria Gonzalez",
    title: "CEO",
    company: "GreenTech Solutions",
    location: "Seville, Spain",
  },
  {
    quote: "Working with the team was a seamless experience. They delivered high-quality work on time and were always responsive to our needs. Their expertise in solar installations is unmatched.",
    highlight: "Exceptional service from start to finish.",
    author: "Thomas Mueller",
    title: "Operations Director",
    company: "EcoEnergy GmbH",
    location: "Munich, Germany",
  },
  {
    quote: "The professionalism and technical knowledge they brought to our project exceeded our expectations. They made the complex seem simple and kept us informed every step of the way.",
    highlight: "True experts in their field.",
    author: "Sophie Laurent",
    title: "Project Manager",
    company: "SunPower France",
    location: "Lyon, France",
  },
  {
    quote: "From initial consultation to final installation, everything was handled with precision. The team's dedication to quality and safety standards is impressive.",
    highlight: "A reliable partner we trust completely.",
    author: "Alessandro Rossi",
    title: "Technical Director",
    company: "Verde Energia",
    location: "Milan, Italy",
  },
];

export const OurWorkSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  return (
    <section className="bg-blue-dark-glow py-16 pb-30 md:py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto px-3 sm:px-6 xl:px-0 max-w-300">
        <div className="mx-auto z-10">
          <div className="text-center mb-4 md:mb-7 lg:mb-12">
            <h2 className="text-2xl md:text-5xl lg:text-6xl font-medium uppercase tracking-wide">
              <span className="text-secondary-foreground">Our Work, Their</span>
              <br />
              <span className="text-foreground-light">Success</span>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-y-3 gap-x-2">
            <LeftQuote className="w-30 h-23 md:w-40 md:h-31 lg:w-50 lg:h-40" />
            <div className="w-full max-w-full md:max-w-100 lg:max-w-xl xl:max-w-2xl mx-auto z-3">
              <Carousel
                setApi={setApi}
                opts={{
                  align: "center",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index}>
                      <div>
                        <p className="text-secondary-foreground text-base md:text-lg lg:text-xl leading-relaxed mb-4">
                          "{testimonial.quote} {testimonial.highlight}"
                        </p>
                        <p className="text-foreground-light text-lg">
                          {testimonial.author}, {testimonial.title}, {testimonial.company} ({testimonial.location})
                        </p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
            <RightQuote className="w-30 h-23 md:w-40 md:h-31 lg:w-50 lg:h-40" />
          </div>

          <div className="hidden md:flex items-center justify-center gap-4 mt-4">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="h-10 w-10 rounded-full border-foreground text-foreground hover:border-foreground-light hover:text-foreground-light"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Previous testimonial</span>
            </Button>

            <div className="flex gap-2">
              {Array.from({ length: count }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => api?.scrollTo(i)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-colors",
                    current === i
                      ? "bg-foreground-light"
                      : "bg-foreground hover:bg-foreground-light"
                  )}
                >
                  <span className="sr-only">Go to slide {i + 1}</span>
                </button>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="h-10 w-10 rounded-full border-foreground text-foreground hover:border-foreground-light hover:text-foreground-light"
            >
              <ArrowRight className="h-4 w-4" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};


const LeftQuote = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative", className)}>
      <Quotes
        className="w-full h-full"
      />
      <img src="/images/ellipse-lg.png" loading="lazy" className="absolute max-w-none size-100 md:size-150 left-1/2 top-1/2 -translate-x-[10%] lg:-translate-x-[15%] -translate-y-[50%] object-cover" />
      <img src="/images/ellipse-sm.png" loading="lazy" className="absolute max-w-none size-50 md:size-75 left-1/2 top-1/2 -translate-x-[1%] lg:translate-x-[3%] -translate-y-[30%] object-cover" />
    </div>
  )
};

const RightQuote = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative", className)}>
        <Quotes
          flipped
          className="w-full h-full"
        />
      <img src="/images/ellipse-lg.png" loading="lazy" className="absolute max-w-none size-100 md:size-150 left-1/2 top-1/2 -translate-x-[90%] lg:-translate-x-[85%] -translate-y-[50%] object-cover" />
      <img src="/images/ellipse-sm.png" loading="lazy" className="absolute max-w-none size-50 md:size-75 left-1/2 top-1/2 -translate-x-[95%] lg:-translate-x-full -translate-y-[30%] object-cover" />
    </div>
  );
}