import { useState } from "react";
import { NavLink } from "~/components/common/nav-link";
import { Button } from "~/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { CONTACT_PHONE, navItems } from "~/lib/site";
import { useLocation } from "react-router";
import { cn, isLightBgPage } from "~/lib/utils";
import { useTranslation } from "react-i18next";

export function MobileNav() {
  const { t } = useTranslation("translation", { keyPrefix: "nav" });
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label="Open menu"
        >
          <svg width="39" height="39" viewBox="0 0 39 39" className="size-16">
            <path
              id="open"
              d="M12 14H26.8571M12 19.5714H26.8571M12 25.1429H26.8571"
              stroke={isLightBgPage(location.pathname) ? "var(--foreground)" : "var(--secondary-foreground)"}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:w-100 border-0 pl-2 bg-foreground/50 backdrop-blur-xl" showCloseButton={false}>
        <SheetHeader className="mt-5.5">
          <SheetTitle className="sr-only">{t("title")}</SheetTitle>
          <SheetClose asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden ml-auto"
              aria-label="Close menu"
            >
              <svg width="39" height="39" viewBox="0 0 39 39" className="size-16">
                <path
                  id="close"
                  d="M13.865 14 25 25.146M25 14 13.866 25.146"
                  stroke={isLightBgPage(location.pathname) ? "var(--foreground)" : "var(--secondary-foreground)"}
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </Button>
          </SheetClose>
        </SheetHeader>
        <nav className="flex flex-col gap-6 mt-8 items-center">
          <ul className="flex flex-col gap-4 items-center">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className="block text-lg font-medium text-white transition-colors py-2"
                  activeClassName="text-shadow:0_0_1px_currentColor"
                  onClick={() => setOpen(false)}
                >
                  {t(item.label)}
                </NavLink>
              </li>
            ))}
          </ul>
          <a
            href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-lg font-medium text-white transition-colors py-2"
          >
            {CONTACT_PHONE}
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
