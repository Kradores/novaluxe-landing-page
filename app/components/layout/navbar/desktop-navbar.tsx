import { NavLink } from "~/components/common/nav-link";
import { navItems } from "~/lib/site";

export function DesktopNav() {
  return (
    <nav className="hidden lg:flex items-center justify-center py-3.5 px-5 bg-background/20 rounded-full">
      <ul className="flex items-center gap-8">
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className="font-medium text-secondary-foreground transition-colors hover:text-primary-hover"
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
