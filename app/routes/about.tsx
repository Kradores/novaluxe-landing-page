import { AboutHeroSection } from "~/components/about/about-hero-section";
import { StatsSection } from "~/components/about/stats-section";

export default function Page() {
    return (<main  className="flex flex-col w-full">
        <AboutHeroSection />
        <StatsSection />
    </main>);
}