import type { Route } from "./+types/home";
import HeroSection from "~/components/home/hero-section";
import TrustedBySection from "~/components/home/trusted-by";
import ProjectsSection from "~/components/common/sections/projects-section";
import { OurWorkSection } from "~/components/common/sections/our-work-section";
import { ServicesSection } from "~/components/home/services-section";
import { WhoWeAreSection } from "~/components/home/who-we-are-section";
import StepsSection from "~/components/common/sections/steps-section";
import { WhatsNextSection } from "~/components/common/sections/whats-next-section";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Novaluxe Dynamics SRL | We do the hard work" },
    { name: "description", content: "Some cool and inspiring description about our company and services, use your imagination!" },
  ];
}

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <HeroSection />
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
