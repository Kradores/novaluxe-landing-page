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
    id: "project-1",
    title: "Project 1",
    description: "Palma del Rio | Spain | 3 months",
    className: "bg-[url('/images/project-1.webp')]",
  },
  {
    id: "project-2",
    title: "Project 2",
    description: "Palma del Rio | Spain | 3 months",
    className: "bg-[url('/images/project-2.webp')]",
  },
  {
    id: "project-3",
    title: "Project 3",
    description: "Palma del Rio | Spain | 3 months",
    className: "bg-[url('/images/project-3.webp')]",
  },
  {
    id: "project-4",
    title: "Project 4",
    description: "Palma del Rio | Spain | 3 months",
    className: "bg-[url('/images/project-4.webp')]",
  },
  {
    id: "project-5",
    title: "Project 5",
    description: "Palma del Rio | Spain | 3 months",
    className: "bg-[url('/images/project-5.webp')]",
  },
  {
    id: "project-6",
    title: "Project 6",
    description: "Palma del Rio | Spain | 3 months",
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