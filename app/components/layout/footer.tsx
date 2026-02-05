import { NavLink } from "~/components/nav-link";
import { Facebook, Instagram, Linkedin, Whatsapp, FooterLogo } from "~/components/icons";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61556946033798", label: "Facebook" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/nicolai-cojocari-ab8663373/", label: "LinkedIn" },
  { icon: Whatsapp, href: "#", label: "WhatsApp" },
];

export const Footer = () => {
  return (
    <footer className="w-full bg-secondary pt-20 md:pt-22.5 lg:pt-35 pb-8 md:pb-10 lg:pb-12">
      <div className="mx-auto max-w-300 px-4 sm:px-6">
        {/* Top Section - Logo, Tagline, Social */}
        <div className="flex flex-col gap-6 mb-8">
          {/* Logo */}
          <FooterLogo width={180} height={38} className="w-35 md:w-40 lg:w-45 h-auto" />

          {/* Tagline */}
          <p className="text-secondary-foreground/70 text-sm md:text-base italic max-w-md">
            Your trusted partner in Electrical & Construction Solutions
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-primary flex items-center justify-center text-primary transition-colors hover:bg-primary/10"
                aria-label={social.label}
              >
                <social.icon className="w-8 h-8" />
              </a>
            ))}
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-secondary-foreground/20 my-6" />

        {/* Bottom Section - Nav Links & Copyright */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Navigation Links */}
          <nav>
            <ul className="flex flex-wrap items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className="text-sm font-medium text-secondary-foreground transition-colors hover:text-primary-hover"
                    activeClassName="text-primary-hover"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-secondary-foreground/60">
            © 2025 Novaluxe Dynamics S.L. All rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
