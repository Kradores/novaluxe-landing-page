import { Consultation, Proposal, Tech, Execution, Professionalism, Safety, Responsibility, Commitment } from "~/components/icons";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";
import SectionTitle from "../common/section-title";
import { navLinks } from "~/lib/site";
import { ArrowRight } from "lucide-react";

const steps = [
    {
        icon: Professionalism,
        title: "Professionalism",
    },
    {
        icon: Safety,
        title: "Safety",
    },
    {
        icon: Responsibility,
        title: "responsibility",
    },
    {
        icon: Commitment,
        title: "commitment",
    },
];

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
    return (
        <section className="w-full bg-blue-dark-glow py-25 md:py-41">
            <div className="mx-auto px-3 sm:px-6 xl:px-0 max-w-300 flex flex-col items-center gap-10 md:gap-15">
                <div className="flex flex-col items-center gap-7.5">
                    <SectionTitle size={"h2"} asChild>
                        <h2>Our values</h2>
                    </SectionTitle>
                    <p className="max-w-xl justify-center text-center text-foreground-light">In the medium and long term, our goal is to continue growing, strengthen our presence in the sector, and consistently offer advanced technology at a fair price.</p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 lg:gap-6 w-full">
                    {steps.map((step, index) => (
                        <ValueCard key={index} icon={step.icon} title={step.title} />
                    ))}
                </div>

                <div className="bg-foreground/10 backdrop-blur-md border border-foreground/20 p-2 rounded-full gap-3 md:gap-4.5 flex flex-row">
                    <Button
                        asChild
                        className="hover:bg-orange-glow text-sm md:text-base"
                    >
                        <Link to={navLinks.contact}>Get a Quote</Link>
                    </Button>
                    <Button
                        asChild
                        variant={"outline"}
                        className="border-primary-foreground text-primary-foreground text-sm md:text-base"
                    >
                        <Link to={navLinks.join} className="flex items-center gap-2.5">
                            Join our Team
                            <ArrowRight className="size-3.75" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ValuesSection;
