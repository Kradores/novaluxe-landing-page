import { matchPath, useLocation } from "react-router";
import { NavLink } from "~/components/common/nav-link";
import { navItems } from "~/lib/site";
import { cn, isLightBgPage } from "~/lib/utils";

export function DesktopNav() {
  const location = useLocation();
  return (
    <nav className={cn("hidden lg:flex items-center justify-center py-3.5 px-5 bg-background/20 rounded-full", isLightBgPage(location.pathname) && "bg-foreground-light/10")}>
      <ul className="flex items-center gap-8">
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={cn("text-base font-normal text-secondary-foreground transition-all hover:[text-shadow:0_0_1px_currentColor]", isLightBgPage(location.pathname) && "text-foreground")}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
