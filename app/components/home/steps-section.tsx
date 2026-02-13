import { Consultation, Proposal, Tech, Execution } from "~/components/icons";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";
import SectionTitle from "../common/section-title";
import { navLinks } from "~/lib/site";

const steps = [
    {
        icon: Consultation,
        title: "Consultation & Project Assessment",
        description:
            "We have the initial consultation, visit the site, and assess feasibility to define project requirements.",
    },
    {
        icon: Proposal,
        title: "Proposal & Planning",
        description: "We prepare, adjust, and plan a customized budget for each project.",
    },
    {
        icon: Tech,
        title: "Technical Preparation",
        description: "We calculate, coordinate teams, and train specialists for each installation.",
    },
    {
        icon: Execution,
        title: "Project Execution",
        description: "We execute the complete installation with quality, safety, and efficiency.",
    },
];

interface StepCardProps {
    icon: React.ElementType;
    title: string;
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

            <SectionTitle size={"h9"} asChild>
                <h3>{title}</h3>
            </SectionTitle>
            <p className="text-sm md:text-base text-foreground-light max-w-70">{description}</p>
        </div>
    );
};

const StepsSection = () => {
    return (
        <section className="w-full bg-blue-dark-glow py-16 md:py-24">
            <div className="mx-auto px-3 sm:px-6 xl:px-0 max-w-300 flex flex-col items-center gap-10 md:gap-16">
                <div className="px-6 py-2 border border-primary/40 bg-primary/8 rounded-full">
                    <span className="text-sm md:text-base font-medium uppercase tracking-wider text-primary">Ready to go in 4</span>
                </div>

                <SectionTitle size={"h2"} asChild>
                    <h2>Our Working Steps</h2>
                </SectionTitle>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 lg:gap-6 w-full">
                    {steps.map((step, index) => (
                        <StepCard key={index} icon={step.icon} title={step.title} description={step.description} />
                    ))}
                </div>

                <div className="group bg-foreground/20 backdrop-blur-md border border-foreground/25 p-2 rounded-full">
                    <Button
                        asChild
                        className="group-hover:bg-orange-glow"
                    >
                        <Link to={navLinks.contact}>Get a Quote</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default StepsSection;
