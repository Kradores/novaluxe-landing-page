import { Logo } from "~/components/icons";
import { DesktopNav } from "./desktop-navbar";
import { MobileNav } from "./mobile-navbar";
import { LanguageSwitcher } from "./language-switcher";
import { NavLink } from "~/components/nav-link";
import { CONTACT_PHONE, navLinks } from "~/lib/site";
import { cn } from "~/lib/utils";

export function Navbar({ className }: { className?: string }) {
  return (
    <header className={cn("w-full h-fit absolute top-0", className)}>
      <div className="mx-auto max-w-300 px-4 sm:px-6">
        <div className="flex items-center justify-between py-6">
          <NavLink to={navLinks.home} className="shrink-0" aria-label="Home">
            <Logo className="h-16 w-16 fill-background mr-20" />
          </NavLink>

          <DesktopNav />

          <div className="flex items-center gap-4">
            <span className="hidden lg:block text-sm font-medium text-primary-foreground hover:text-primary-hover">
              {CONTACT_PHONE}
            </span>
            <LanguageSwitcher />
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
