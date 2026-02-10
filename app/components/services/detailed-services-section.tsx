import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import SectionTitle from "../common/section-title";

interface ServiceItemProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  reversed?: boolean;
}

const ServiceCard = ({
  title,
  description,
  features,
  image,
  imageAlt,
  reversed = false,
}: ServiceItemProps) => {
  return (
    <div
      className={`bg-card rounded-2xl flex flex-col shadow-sm/4 ${reversed ? "md:flex-row-reverse" : "md:flex-row"
        } gap-1 md:gap-2 lg:gap-8 items-stretch`}
    >
      <div className="order-2 lg:order-0">
        <div
          className="h-full rounded-2xl overflow-hidden"
        >
          <img
            src={image}
            alt={imageAlt}
            className="object-cover h-full"
          />
        </div>
      </div>

      <div className="w-full order-1 lg:order-0 p-3 md:p-6 lg:p-8 md:min-w-118 space-y-8">
        <SectionTitle asChild size={"h5"} variant={"dark"} className="text-left">
          <h2>
            {title}
          </h2>
        </SectionTitle>
        <p className="text-foreground">{description}</p>

        <ul className="space-y-3.5">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle2 className="size-5 text-background fill-primary shrink-0 mt-0.5" />
              <span className="text-foreground font-medium">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          asChild
          className="group-hover:bg-orange-glow"
        >
          <Link to="/contact">Get a Quote</Link>
        </Button>
      </div>
    </div>
  );
};

const services = [
  {
    title: "Photovoltaic Systems Building",
    description:
      "We design and build photovoltaic systems worldwide, managing the entire process from planning to final installation.",
    features: [
      "Initial client consultation & site visit",
      "Project feasibility analysis",
      "Project & budget planning",
      "Technical design and training of the technical team",
      "Full execution and supervision of the project on site",
    ],
    image: "images/service-1.webp",
    imageAlt: "Photovoltaic solar panels installation",
    reversed: false,
  },
  {
    title: "House Renovations & Electric Work",
    description:
      "We carry out house renovations and electrical work from start to finish. We plan, coordinate, and execute every detail.",
    features: [
      "Consultation & site assessment",
      "Scope & technical review",
      "Project & budget planning",
      "Work coordination",
      "Execution on site & quality control",
    ],
    image: "images/service-2.webp",
    imageAlt: "Worker performing house renovation",
    reversed: true,
  },
];

const DetailedServicesSection = () => {
  return (
    <section className="py-20 md:py-25 lg:py-30">
      <div className="mx-auto max-w-300 px-4 sm:px-6">
        <div className="space-y-20 lg:space-y-32">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
              reversed={service.reversed}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedServicesSection;
