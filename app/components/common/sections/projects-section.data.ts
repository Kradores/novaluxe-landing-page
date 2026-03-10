import type { Variants } from "motion/react";
import { href } from "react-router";
import { navLinks } from "~/lib/site";

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
    href: `${navLinks.projects}/villares-del-orbigo`
  },
  {
    id: "almodovar-del-campo",
    duration: 4,
    className: "bg-[url('/images/project-2.webp')]",
    href: `${navLinks.projects}/almodovar-del-campo`
  },
  {
    id: "los-canuelos",
    duration: 3,
    className: "bg-[url('/images/project-3.webp')]",
    href: `${navLinks.projects}/los-canuelos`
  },
  {
    id: "covatilla",
    duration: 3,
    className: "bg-[url('/images/project-4.webp')]",
    href: `${navLinks.projects}/covatilla`

  },
  {
    id: "elgoibar",
    duration: 2,
    className: "bg-[url('/images/project-5.webp')]",
    href: `${navLinks.projects}/elgoibar`
  },
  {
    id: "lepe-huelva",
    duration: 3,
    className: "bg-[url('/images/project-6.webp')]",
    href: `${navLinks.projects}/lepe-huelva`
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