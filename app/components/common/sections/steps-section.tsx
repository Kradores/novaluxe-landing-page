import { Consultation, Proposal, Tech, Execution } from "~/components/icons";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";
import SectionTitle from "~/components/common/section-title";
import { navLinks } from "~/lib/site";
import { useTranslation } from "react-i18next";

const iconMap: Record<number, React.ElementType> = {
  "0": Consultation,
  "1": Proposal,
  "2": Tech,
  "3": Execution,
};

interface StepCardProps {
    icon: React.ElementType;
    title: string[];
    description: string;
}

const StepCard = ({ icon: Icon, title, description }: StepCardProps) => {
    return (
        <div className="flex flex-col items-center text-center gap-3">
            <div className="p-2 bg-secondary rounded-[24px] border border-foreground mb-2">
                <div className="w-20.5 h-20.5 rounded-[20px] bg-foreground flex items-center justify-center shadow-md/70">
                    <Icon width={40} height={40} className="md:w-12 md:h-12" fill="var(--foreground-light)" />
                </div>
            </div>

            <SectionTitle asChild size={"h9"} className="flex flex-col">
                <h3>{title.map((t) => <span key={t}>{t}</span>)}</h3>
            </SectionTitle>
            <p className="text-sm md:text-base font-normal text-foreground-light max-w-70">{description}</p>
        </div>
    );
};

const StepsSection = () => {
    const { t } = useTranslation("translation", { keyPrefix: "common.sections.StepsSection" });
    const steps = t("steps", { returnObjects: true }) as Array<{
        title: string[];
        description: string;
    }>;
    
    return (
        <section className="w-full bg-blue-dark-glow py-16 md:py-24">
            <div className="mx-auto px-3 sm:px-6 xl:px-0 max-w-300 flex flex-col items-center gap-10 md:gap-16">
                <div className="px-6 py-2 border border-primary/40 bg-primary/8 rounded-full">
                    <span className="text-sm md:text-base font-normal uppercase tracking-wider text-primary">{t("ready")}</span>
                </div>

                <SectionTitle size={"h2"} asChild>
                    <h2>{t("heading")}</h2>
                </SectionTitle>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 lg:gap-6 w-full">
                    {steps.map((step, index) => (
                        <StepCard key={index} icon={iconMap[index as keyof typeof iconMap]} title={step.title} description={step.description} />
                    ))}
                </div>

                <div className="group bg-foreground/20 backdrop-blur-md border border-foreground/25 p-2 rounded-full">
                    <Button
                        asChild
                        className="group-hover:bg-orange-glow"
                    >
                        <Link to={navLinks.contact}>{t("button")}</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default StepsSection;
