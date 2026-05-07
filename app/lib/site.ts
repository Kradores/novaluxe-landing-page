import { Facebook, Instagram, Linkedin, Whatsapp } from "~/components/icons";

export const siteName = "Novaluxe Dynamics";

export const navLinks = {
  home: "/",
  services: "/services",
  projects: "/projects",
  about: "/about",
  contact: "/contact",
  join: "/join-our-team"
}

export const navItems = [
  { to: navLinks.home, label: "home" },
  { to: navLinks.services, label: "services" },
  { to: navLinks.projects, label: "projects" },
  { to: navLinks.about, label: "about" },
  { to: navLinks.contact, label: "contact" },
];

export const CONTACT_PHONE = "+34 642 19 09 41";
export const CONTACT_EMAIL = "novaluxedynamic@hotmail.com";
export const CONTACT_ADDRESS = "Palma del Río, Spain, 14700";

export const socialLinks = [
  // { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61556946033798", label: "Facebook" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/nicolai-cojocari-ab8663373/", label: "LinkedIn" },
  { icon: Whatsapp, href: "https://wa.me/+348977876667", label: "WhatsApp" },
];

export const canonicalUrls = {
  home: `${import.meta.env.VITE_API_BASE_URL}/es${navLinks.home}`,
  services: `${import.meta.env.VITE_API_BASE_URL}/es${navLinks.services}`,
  projects: `${import.meta.env.VITE_API_BASE_URL}/es${navLinks.projects}`,
  about: `${import.meta.env.VITE_API_BASE_URL}/es${navLinks.about}`,
  contact: `${import.meta.env.VITE_API_BASE_URL}/es${navLinks.contact}`,
  join: `${import.meta.env.VITE_API_BASE_URL}/es${navLinks.join}`,
}