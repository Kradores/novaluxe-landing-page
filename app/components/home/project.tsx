import { ArrowUpRight } from "lucide-react";
import { NavLink } from "../nav-link";
import { navLinks } from "~/lib/site";
import { overlayVariants } from "./projects-section.data";
import { m, type Variants } from "motion/react";
import { cn } from "~/lib/utils";

interface ProjectProps {
  title: string;
  description: string;
  className?: string;
  isOpen?: boolean;
  onHover?: () => void;
  variants: Variants;
}

const Project = ({
  title,
  description,
  className,
  isOpen = false,
  onHover,
  variants,
}: ProjectProps) => {
  return (
    <m.div
      variants={variants}
      animate={isOpen ? "open" : "closed"}
      initial={false}
      onHoverStart={onHover}
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

        <div className="flex flex-col gap-2.5 text-shadow-lg">
          <h3 className="text-sm lg:text-base font-medium text-background uppercase text-nowrap">{title}</h3>
          <p className="text-sm lg:text-base font-medium text-background text-nowrap">{description}</p>
        </div>
      </m.div>
    </m.div>
  );
};

export type { ProjectProps };
export default Project;