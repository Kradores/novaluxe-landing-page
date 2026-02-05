import { useEffect, useState } from "react";

const breakpoints = {
  "3xl": 1600,
  "2xl": 1536,
  xl: 1280,
  lg: 1024,
  md: 800,
  sm: 600,
  xs: 0,
}

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<keyof typeof breakpoints>("xs");

  useEffect(() => {
    const update = () => {
      const width = window.outerWidth;

      const keys = Object.keys(breakpoints) as (keyof typeof breakpoints)[];
      for (const key of keys) {
        if (width >= breakpoints[key]) {
          setBreakpoint(key);
          break;
        }
      }
    };

    update();
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  return { breakpoint, isMobile: breakpoint === "xs", isTablet: breakpoint === "md" };
}
