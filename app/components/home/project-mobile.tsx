import { cn } from "~/lib/utils";
import { NavLink } from "../common/nav-link";
import { navLinks } from "~/lib/site";
import { ArrowUpRight } from "lucide-react";

interface MobileProjectProps {
  title: string;
  description: string;
  className?: string;
}

const MobileProject = ({
  title,
  description,
  className,
}: MobileProjectProps) => {
  return (
    <div
      className={cn(
        "rounded-lg overflow-hidden bg-cover bg-no-repeat aspect-video",
        className
      )}
    >
      <div
        className="w-full h-full flex flex-col p-6 justify-between"
      >
        <NavLink
          to={navLinks.contact}
          className="bg-background rounded-full w-6 h-6 flex items-center justify-center self-end"
        >
          <ArrowUpRight className="size-3 text-foreground" />
        </NavLink>

        <div className="flex flex-col gap-2.5 text-shadow-lg">
          <h3 className="text-sm font-medium text-background uppercase text-nowrap">{title}</h3>
          <p className="text-sm font-medium text-background text-nowrap">{description}</p>
        </div>
      </div>
    </div>
  );
}

export type { MobileProjectProps };
export default MobileProject;