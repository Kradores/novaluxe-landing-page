import { AboutHeroSection } from "~/components/about/about-hero-section";
import { StatsSection } from "~/components/about/stats-section";
import { StorySection } from "~/components/about/story-section";
import ValuesSection from "~/components/about/values-section";
import ProjectsSection from "~/components/home/projects-section";
import NeedHelpSection from "~/components/projects/need-help-section";

export default function Page() {
  return (<main className="flex flex-col w-full">
    <AboutHeroSection />
    <StatsSection />
    <StorySection />
    <ValuesSection />
    <ProjectsSection />
    <NeedHelpSection />
  </main>);
}