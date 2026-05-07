import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { NavLink as RouterNavLink, type NavLinkProps } from "react-router";
import { cn } from "~/lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className" | "lang"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    const { i18n } = useTranslation();

    return (
      <RouterNavLink
        ref={ref}
        to={`/${i18n.language}${to}`}
        lang={i18n.language}
        className={({ isActive, isPending }) =>
          cn(className, isActive && activeClassName, isPending && pendingClassName)
        }
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
