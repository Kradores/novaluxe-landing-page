import { matchPath, useLocation } from "react-router";
import { NavLink } from "~/components/common/nav-link";
import { navItems } from "~/lib/site";
import { cn, isProjectPage } from "~/lib/utils";

export function DesktopNav() {
  const location = useLocation();
  return (
    <nav className={cn("hidden lg:flex items-center justify-center py-3.5 px-5 bg-background/20 rounded-full", isProjectPage(location.pathname) && "bg-foreground-light/10")}>
      <ul className="flex items-center gap-8">
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={cn("font-medium text-secondary-foreground transition-colors hover:text-primary-hover", isProjectPage(location.pathname) && "text-foreground")}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
