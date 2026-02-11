import { Facebook, Instagram, Linkedin, Whatsapp } from "~/components/icons";

export const navLinks = {
  home: "/",
  services: "/services",
  projects: "/projects",
  about: "/about",
  contact: "/contact",
  join: "/join-our-team"
}

export const navItems = [
  { to: navLinks.home, label: "Home" },
  { to: navLinks.services, label: "Services" },
  { to: navLinks.projects, label: "Projects" },
  { to: navLinks.about, label: "About" },
  { to: navLinks.contact, label: "Contact" },
];

export const CONTACT_PHONE = "+34 8977 876667";
export const CONTACT_EMAIL = "novaluxedynamic@hotmail.com";
export const CONTACT_ADDRESS = "Palma del Río, Spain, 14700";

export const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61556946033798", label: "Facebook" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/nicolai-cojocari-ab8663373/", label: "LinkedIn" },
  { icon: Whatsapp, href: "#", label: "WhatsApp" },
];