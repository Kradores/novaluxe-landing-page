import { clsx, type ClassValue } from "clsx"
import { matchPath } from "react-router";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isProjectPage(path: string): boolean {
  const match = matchPath({ path: "projects/:slug" }, path);
  return Boolean(match);
};
