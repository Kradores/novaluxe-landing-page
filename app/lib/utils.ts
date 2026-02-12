import { clsx, type ClassValue } from "clsx"
import { matchPath } from "react-router";
import { twMerge } from "tailwind-merge"
import { navLinks } from "./site";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isLightBgPage(path: string): boolean {
  const isProjectTemplate = matchPath({ path: "projects/:slug" }, path);
  const isContact = matchPath({ path: navLinks.contact }, path);
  const isJoin = matchPath({ path: navLinks.join }, path);
  return Boolean(isProjectTemplate) || Boolean(isContact) || Boolean(isJoin);
};
