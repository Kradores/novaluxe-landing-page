import { Professionalism, Safety, Responsibility, Commitment } from "~/components/icons";
import { Button } from "~/components/ui/button";
import SectionTitle from "~/components/common/section-title";
import { navLinks } from "~/lib/site";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import LinkLang from "~/components/common/link-lang";

interface StepCardProps {
  icon: React.ElementType;
  title: string;
}

const ValueCard = ({ icon: Icon, title }: StepCardProps) => {
  return (
    <div className="flex flex-col items-center text-center gap-3">
      <div className="p-2 bg-secondary rounded-[24px] border border-foreground mb-2">
        <div className="w-20.5 h-20.5 rounded-[20px] bg-foreground flex items-center justify-center shadow-md/70">
          <Icon width={40} height={40} className="md:w-12 md:h-12" fill="var(--foreground-light)" />
        </div>
      </div>

      <SectionTitle size={"h9"} asChild>
        <h3>{title}</h3>
      </SectionTitle>
    </div>
  );
};

const ValuesSection = () => {
  const { t } = useTranslation("translation", { keyPrefix: "about.values" });

  const steps = [
    { icon: Professionalism, title: t("items.professionalism") },
    { icon: Safety, title: t("items.safety") },
    { icon: Responsibility, title: t("items.responsibility") },
    { icon: Commitment, title: t("items.commitment") },
  ];

  return (
    <section className="w-full bg-blue-dark-glow py-25 md:py-41">
      <div className="mx-auto px-3 sm:px-6 xl:px-0 max-w-300 flex flex-col items-center gap-10 md:gap-15">
        <div className="flex flex-col items-center gap-7.5">
          <SectionTitle size={"h2"} asChild>
            <h2>{t("title")}</h2>
          </SectionTitle>
          <p className="max-w-xl justify-center text-sm md:text-base text-center text-foreground-light">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 lg:gap-6 w-full">
          {steps.map((step, index) => (
            <ValueCard key={index} icon={step.icon} title={step.title} />
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-4.5 mx-auto bg-background/20 backdrop-blur-md border border-background/20 p-2 rounded-[32px] md:rounded-full">
          <Button asChild className="hover:bg-orange-glow w-full md:w-fit">
            <LinkLang to={navLinks.contact}>{t("buttons.getQuote")}</LinkLang>
          </Button>
          <Button
            asChild
            variant={"outline"}
            className="border-primary-foreground text-primary-foreground"
          >
            <LinkLang to={navLinks.join} className="flex items-center gap-2.5">
              {t("buttons.joinTeam")}
              <ArrowRight className="size-3.75" />
            </LinkLang>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
