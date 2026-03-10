import { cloneElement, useState, type ReactElement } from "react";
import { cn } from "~/lib/utils";
import type { ProjectProps } from "./project";

const ProjectsRow = ({
  children,
  defaultOpen = 0,
  className,
}: {
  children: ReactElement<ProjectProps>[];
  defaultOpen?: number;
  className?: string;
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultOpen);

  return (
    <div
      className={cn("flex flex-row justify-end gap-5 lg:gap-6 xl:gap-8 overflow-hidden", className)}
      onMouseLeave={() => setActiveIndex(defaultOpen)}
    >
      {children.map((child, index) =>
        cloneElement(child, {
          isOpen: activeIndex === index,
          setActive: () => setActiveIndex(index),
        })
      )}
    </div>
  );
};

export default ProjectsRow;