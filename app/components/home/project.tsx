import { ArrowUpRight } from "lucide-react";
import { NavLink } from "../common/nav-link";
import { navLinks } from "~/lib/site";
import { overlayVariants } from "./projects-section.data";
import { m, type Variants } from "motion/react";
import { cn } from "~/lib/utils";
import SectionTitle from "../common/section-title";

interface ProjectProps {
  title: string;
  description: string;
  className?: string;
  isOpen?: boolean;
  setActive?: () => void;
  variants: Variants;
}

const Project = ({
  title,
  description,
  className,
  isOpen = false,
  setActive,
  variants,
}: ProjectProps) => {
  return (
    <m.div
      variants={variants}
      animate={isOpen ? "open" : "closed"}
      initial={false}
      onHoverStart={setActive}
      onTap={setActive}
      className={cn(
        "relative rounded-lg overflow-hidden cursor-pointer bg-cover bg-no-repeat",
        className
      )}
    >
      <m.div
        variants={overlayVariants}
        animate={isOpen ? "open" : "closed"}
        className="w-full h-full flex flex-col p-6 justify-between"
      >
        <NavLink
          to={navLinks.contact}
          className="bg-background rounded-full w-6 lg:w-11 h-6 lg:h-11 flex items-center justify-center self-end"
        >
          <ArrowUpRight className="size-3 lg:size-4 text-foreground" />
        </NavLink>

        <div className="flex flex-col gap-2.5">
          <SectionTitle asChild size={"h9"} className="text-left text-nowrap">
            <h3>{title}</h3>
          </SectionTitle>
          <p className="text-base font-normal text-background text-nowrap">{description}</p>
        </div>
      </m.div>
    </m.div>
  );
};

export type { ProjectProps };
export default Project;