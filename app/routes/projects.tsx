import NeedHelpSection from "~/components/projects/need-help-section";
import ProjectsListSection from "~/components/projects/projects-list-section";
import ProjectsPageHeader from "~/components/projects/projects-page-header";

export default function Page() {
    return (<main  className="flex flex-col w-full">
        <ProjectsPageHeader />
        <ProjectsListSection />
        <NeedHelpSection />
    </main>);
}