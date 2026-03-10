import type { Variants } from "motion/react";

const springTransition = {
  ease: "easeOut" as const,
  duration: 0.5,
};

export const projectVariants: Variants = {
  open: {
    width: 512,
    transition: springTransition,
  },
  closed: {
    width: 200,
    transition: springTransition,
  },
};


export const overlayVariants: Variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

const projects = [
  {
    id: "villares-del-orbigo",
    duration: 3,
    className: "bg-[url('/images/project-1.webp')]",
  },
  {
    id: "almodovar-del-campo",
    duration: 4,
    className: "bg-[url('/images/project-2.webp')]",
  },
  {
    id: "los-canuelos",
    duration: 3,
    className: "bg-[url('/images/project-3.webp')]",
  },
  {
    id: "covatilla",
    duration: 3,
    className: "bg-[url('/images/project-4.webp')]",
  },
  {
    id: "elgoibar",
    duration: 2,
    className: "bg-[url('/images/project-5.webp')]",
  },
  {
    id: "lepe-huelva",
    duration: 3,
    className: "bg-[url('/images/project-6.webp')]",
  }
]

export const getDesktopProjects = () => {
  return {
    row1: projects.slice(undefined, 2),
    row2: projects.slice(2, undefined)
  }
}

export const getMobileProjects = () => {
  return projects;
}