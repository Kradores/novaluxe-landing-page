import PageTitle from "~/components/common/page-title";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";
import { cn } from "~/lib/utils";
import { useAnimate } from "motion/react";
import { useEffect, useState } from "react";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

const ServiceCard = ({ image, title, description }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [scope, animate] = useAnimate()

  useEffect(() => {
    if (isHovered) {
      const enterAnimation = () => {
        animate(scope.current, { backgroundColor: "var(--secondary)" }, { duration: 0.5 });
        animate("div#btn-overlay", { opacity: 1 }, { duration: 0.5 });
        animate("h3", { color: "var(--primary)" }, { duration: 0.5 });
        animate("p", { color: "var(--secondary-foreground)" }, { duration: 0.5 });
      }
      enterAnimation()

    } else {
      const exitAnimation = () => {
        animate(scope.current, { backgroundColor: "var(--card)" }, { duration: 0.5 });
        animate("div#btn-overlay", { opacity: 0 }, { duration: 0.5 });
        animate("h3", { color: "var(--foreground-dark)" }, { duration: 0.5 });
        animate("p", { color: "var(--foreground)" }, { duration: 0.5 });
      }

      exitAnimation()
    }
  }, [isHovered]);

  return (
    <div ref={scope} className={cn("group flex flex-col gap-4 md:gap-6 bg-card rounded-3xl p-4 md:p-6")}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchMove={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          className="w-full h-62.5 sm:h-75 md:h-87.5 object-cover transition-all duration-500"
        />
        <div id="btn-overlay" className={"absolute inset-0 bg-secondary/50 flex flex-col justify-center items-center p-4 md:p-6 opacity-0"}>
          <img src="/images/ellipse-btn.png" loading="lazy" className="absolute max-w-122 w-full h-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-cover" />
          <div className="group bg-background/20 backdrop-blur-md border border-background/20 p-2 rounded-full hover:shadow-lg">
            <Button
              asChild
              className="group-hover:bg-orange-glow"
            >
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </div>

      <h3 className="text-xl sm:text-2xl md:text-3xl font-medium uppercase tracking-wider text-foreground-dark">
        {title}
      </h3>

      <p className="text-sm md:text-base text-foreground">
        {description}
      </p>
    </div>
  );
};

const services = [
  {
    image: "/images/service-1.webp",
    title: "Photovoltaic Systems Building",
    description:
      "We design and install efficient solar systems that reduce energy costs, improve sustainability, and ensure long term performance.",
  },
  {
    image: "/images/service-2.webp",
    title: "House Renovations & Electric Work",
    description:
      "We handle renovations and electrical work safely and professionally, delivering functional spaces that meet modern standards.",
  },
];

export const ServicesSection = () => {
  return (
    <section className="w-full bg-background py-16 md:py-24">
      <div className="mx-auto px-3 sm:px-6 xl:px-0 max-w-300 flex flex-col gap-8 md:gap-12">
        <PageTitle className="text-secondary">Our Reliable Services</PageTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} image={service.image} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  );
};
