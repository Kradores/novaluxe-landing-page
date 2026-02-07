import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NavLink } from "~/components/common/nav-link";
import { Button } from "~/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { CONTACT_PHONE, navItems } from "~/lib/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6 text-secondary-foreground" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:w-100 border-0 pl-2">
        <SheetHeader>
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-6 mt-8">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className="block text-lg font-medium text-muted-foreground transition-colors hover:text-foreground py-2"
                  activeClassName="text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <a
            href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
          >
            <Phone className="h-5 w-5" />
            {CONTACT_PHONE}
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
