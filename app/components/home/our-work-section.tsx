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
    <section className="bg-secondary py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="relative mx-auto px-3 sm:px-6 xl:px-0 max-w-300">
        {/* Blurred circle decorations */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full bg-primary/20 blur-3xl -translate-x-1/4" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full bg-primary/20 blur-3xl translate-x-1/4" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide">
              <span className="text-secondary-foreground">Our Work, Their</span>
              <br />
              <span className="text-primary">Success</span>
            </h2>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 lg:translate-x-0 z-0">
              <Quotes
                width={150}
                height={120}
                className="lg:w-50 lg:h-40 opacity-80"
              />
            </div>

            <div className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full z-0">
              <Quotes
                width={100}
                height={80}
                className="opacity-80"
              />
            </div>

            <div className="w-full max-w-3xl mx-auto px-4 md:px-16 lg:px-24">
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
                      <div className="text-center py-8 md:py-12">
                        <p className="text-secondary-foreground text-base md:text-lg lg:text-xl leading-relaxed mb-4">
                          "{testimonial.quote}"
                        </p>
                        <p className="text-secondary-foreground font-bold text-lg md:text-xl mb-6">
                          "{testimonial.highlight}"
                        </p>
                        <p className="text-secondary-foreground/70 italic text-sm md:text-base">
                          — {testimonial.author}, {testimonial.title}, {testimonial.company} ({testimonial.location})
                        </p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>

            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 lg:translate-x-0 z-0">
              <Quotes
                width={150}
                height={120}
                flipped
                className="lg:w-50 lg:h-40 opacity-80"
              />
            </div>

            <div className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full z-0">
              <Quotes
                width={100}
                height={80}
                flipped
                className="opacity-80"
              />
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-16 md:mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="h-10 w-10 rounded-full border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 hover:border-secondary-foreground/50"
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
                      ? "bg-secondary-foreground"
                      : "border border-secondary-foreground/50 hover:border-secondary-foreground"
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
              className="h-10 w-10 rounded-full border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 hover:border-secondary-foreground/50"
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
