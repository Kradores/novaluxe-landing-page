import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import SectionTitle from "~/components/common/section-title";
import { navLinks } from "~/lib/site";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation("translation", { keyPrefix: "services.detailed" });
  
  return (
    <div
      className={`bg-card rounded-2xl flex flex-col shadow-sm/4 items-stretch gap-y-4 ${
        reversed ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="order-2 md:order-0">
        <div className="h-full rounded-2xl overflow-hidden">
          <img src={image} alt={imageAlt} className="object-cover h-full" />
        </div>
      </div>

      <div className="w-full order-1 md:order-0 p-3 md:p-6 lg:p-8 md:min-w-118 lg:max-w-[53%] space-y-8">
        <SectionTitle asChild size={"h5"} variant={"dark"} className="text-left">
          <h2>{title}</h2>
        </SectionTitle>
        <p className="text-foreground text-sm md:text-base font-normal">{description}</p>

        <ul className="space-y-3.5">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle2 className="size-6 text-background fill-primary shrink-0 self-center" />
              <span className="text-foreground text-sm md:text-base font-medium">{feature}</span>
            </li>
          ))}
        </ul>

        <Button asChild className="group-hover:bg-orange-glow">
          <Link to={navLinks.contact}>{t("button")}</Link>
        </Button>
      </div>
    </div>
  );
};

const DetailedServicesSection = () => {
  const { t } = useTranslation("translation", { keyPrefix: "services.detailed" });

  const services = [
    {
      id: "photovoltaic",
      image: "images/service-1.webp",
      reversed: false,
    },
    {
      id: "renovations",
      image: "images/service-2.webp",
      reversed: true,
    },
  ];

  return (
    <section className="py-20 md:py-25 lg:py-30">
      <div className="mx-auto max-w-300 px-4 sm:px-6">
        <div className="space-y-20 lg:space-y-32">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={t(`items.${service.id}.title`)}
              description={t(`items.${service.id}.description`)}
              imageAlt={t(`items.${service.id}.imageAlt`)}
              features={t(`items.${service.id}.features`, { returnObjects: true }) as string[]}
              image={service.image}
              reversed={service.reversed}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedServicesSection;
