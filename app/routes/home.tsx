import type { Route } from "./+types/home";
import HeroSection from "~/components/home/hero-section";
import TrustedBySection from "~/components/home/trusted-by";
import ProjectsSection from "~/components/home/projects-section";
import { OurWorkSection } from "~/components/home/our-work-section";
import { ServicesSection } from "~/components/home/services-section";
import { WhoWeAreSection } from "~/components/home/who-we-are-section";
import { StepsSection } from "~/components/home/steps-section";
import { WhatsNextSection } from "~/components/home/whats-next-section";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <div className="flex flex-col bg-foreground bg-[url(/images/hero-bg.webp)] bg-cover bg-center bg-no-repeat">
        <HeroSection className="mx-auto" />
      </div>
      <TrustedBySection />
      <WhoWeAreSection />
      <OurWorkSection />
      <ServicesSection />
      <StepsSection />
      <ProjectsSection />
      <WhatsNextSection />
    </main>
  );
}
