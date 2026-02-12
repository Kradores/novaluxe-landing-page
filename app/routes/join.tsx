import { JobOfferSection } from "~/components/join/job-offer-section";
import JoinPageHeader from "~/components/join/join-page-header";

export default function Page() {
  return (<main className="flex flex-col w-full">
    <JoinPageHeader />
    <JobOfferSection />
  </main>);
}