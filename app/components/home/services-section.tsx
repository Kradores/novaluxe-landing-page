import PageTitle from "~/components/common/page-title";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

const ServiceCard = ({ image, title, description }: ServiceCardProps) => {
  return (
    <div className="group flex flex-col gap-4 md:gap-6 bg-card rounded-3xl p-4 md:p-6 transition-all duration-500 hover:bg-secondary">
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          className="w-full h-62.5 sm:h-75 md:h-87.5 object-cover transition-all duration-500"
        />
        <div className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="group-btn bg-background/20 backdrop-blur-md border border-background/20 p-2 rounded-full hover:shadow-lg hover:scale-102 transition-all duration-500 ease-in-out">
            <Button
              asChild
              className="group-btn-hover:scale-102 group-btn-hover:bg-orange-glow"
            >
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </div>

      <h3 className="text-xl sm:text-2xl md:text-3xl font-medium uppercase tracking-wider text-foreground group-hover:text-primary transition-colors duration-500">
        {title}
      </h3>

      <p className="text-sm md:text-base text-muted-foreground group-hover:text-secondary-foreground transition-colors duration-500">
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
      <div className="mx-auto max-w-300 px-4 sm:px-6 flex flex-col gap-8 md:gap-12">
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
