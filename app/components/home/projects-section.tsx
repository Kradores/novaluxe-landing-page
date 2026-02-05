import { useBreakpoint } from "hooks/use-breakpoint";
import DesktopView from "./projects-desktop-view";
import MobileView from "./projects-mobile-view";


const ProjectsSection = () => {
  const { breakpoint } = useBreakpoint();

  if (breakpoint === "sm" || breakpoint === "xs") {
    return (<MobileView />);
  }

  return (<DesktopView />);
}

export default ProjectsSection;