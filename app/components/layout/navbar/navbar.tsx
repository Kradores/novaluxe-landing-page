import { Logo } from "~/components/icons";
import { DesktopNav } from "./desktop-navbar";
import { MobileNav } from "./mobile-navbar";
import { LanguageSwitcher } from "./language-switcher";
import { NavLink } from "~/components/common/nav-link";
import { CONTACT_PHONE, navLinks } from "~/lib/site";
import { cn, isProjectPage } from "~/lib/utils";
import { useLocation } from "react-router";

export function Navbar({ className }: { className?: string }) {
  const location = useLocation();
  return (
    <header className={cn("w-full h-fit absolute top-0 z-10", className)}>
      <div className="mx-auto max-w-300 px-4 sm:px-6">
        <div className="flex items-center justify-between py-6">
          <NavLink to={navLinks.home} className="shrink-0 lg:mr-43" aria-label="Home">
            <Logo className={cn("h-16 w-16 fill-background", isProjectPage(location.pathname) && "fill-foreground")} />
          </NavLink>

          <DesktopNav />

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <span className={cn("text-sm font-medium text-secondary-foreground transition-colors", isProjectPage(location.pathname) && "text-foreground")}>
              {CONTACT_PHONE}
            </span>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
