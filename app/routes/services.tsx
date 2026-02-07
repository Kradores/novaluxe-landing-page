import { OurWorkSection } from "~/components/home/our-work-section";
import { WhatsNextSection } from "~/components/home/whats-next-section";
import DetailedServicesSection from "~/components/services/detailed-services-section";
import ServicesPageHeader from "~/components/services/services-page-header";

export default function Page() {
    return (<main  className="flex flex-col w-full">
        <ServicesPageHeader />
        <DetailedServicesSection />
        <OurWorkSection />
        <WhatsNextSection />
    </main>);
}