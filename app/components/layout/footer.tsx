import { NavLink } from "~/components/common/nav-link";
import { LogoFooter } from "~/components/icons";
import { navItems, socialLinks } from "~/lib/site";

export const Footer = () => {
  return (
    <footer className="w-full bg-background-dark pt-20 md:pt-22.5 lg:pt-35 pb-8 md:pb-10 lg:pb-12">
      <div className="mx-auto px-3 sm:px-6 xl:px-0 max-w-300">
        <div className="flex flex-col gap-6 mb-8">
          <LogoFooter className="w-35 md:w-40 lg:w-45 h-auto" />
          <p className="text-secondary-foreground/70 text-sm md:text-base max-w-md">
            Your trusted partner in Electrical & Construction Solutions
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-primary transition-colors hover:text-primary/10"
                aria-label={social.label}
              >
                <social.icon className="w-8 h-8 hover:opacity-75" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 my-6" />

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <nav>
            <ul className="flex flex-wrap items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className="text-sm font-medium text-secondary-foreground transition-colors hover:text-primary-hover"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <p className="text-sm md:text-base text-secondary-foreground/70">
            © 2025 Novaluxe Dynamics S.L. All rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
