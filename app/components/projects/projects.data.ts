export interface Project {
  slug: string;
  date: Date;
  title: string;
  subtitle: string;
  description: string;
  content: string;
  duration: string;
  projectType: string;
  location: string;
  headerImage: string;
  images: string[];
}

export const projects: Project[] = [
  {
    slug: "fv-lea-artibai",
    date: new Date(2024, 10, 15), // November 15, 2024
    title: "FV Lea Artibai",
    subtitle: "Industrial Photovoltaic Installation",
    description: "Large-scale photovoltaic system installation for industrial complex in the Lea Artibai region, delivering sustainable energy solutions.",
    content: `This project involved the complete design and installation of a photovoltaic system for an industrial facility in the Lea Artibai region. Our team managed every aspect from initial consultation through final commissioning.

The installation includes high-efficiency solar panels optimized for the local climate conditions, along with advanced monitoring systems to ensure peak performance year-round.`,
    duration: "3 months",
    projectType: "Photovoltaic System",
    location: "Spain, Artibai",
    headerImage: "/svg/placeholder.svg",
    images: [
      "/svg/placeholder.svg",
      "/svg/placeholder.svg",
      "/svg/placeholder.svg",
      "/svg/placeholder.svg",
      "/svg/placeholder.svg",
      "/svg/placeholder.svg",
    ],
  },
  {
    slug: "fv-elgoibar-eta-mendado",
    date: new Date(2024, 9, 22), // October 22, 2024
    title: "FV Elgoibar Eta Mendado",
    subtitle: "Commercial Solar Energy Project",
    description: "Comprehensive solar installation serving multiple commercial buildings in Elgoibar and Mendado areas.",
    content: `A multi-site photovoltaic installation project spanning commercial facilities across Elgoibar and Mendado. This project demonstrates our capability to coordinate complex installations across multiple locations.

The system was designed to maximize energy production while minimizing visual impact on the surrounding architecture.`,
    duration: "4 months",
    projectType: "Photovoltaic System",
    location: "Spain, Elgoibar",
    headerImage: "/svg/placeholder.svg",
    images: [
      "/svg/placeholder.svg",
      "/svg/placeholder.svg",
      "/svg/placeholder.svg",
      "/svg/placeholder.svg",
      "/svg/placeholder.svg",
      "/svg/placeholder.svg",
    ],
  },
  {
    slug: "maestros-proveedores",
    date: new Date(2024, 8, 10), // September 10, 2024
    title: "Maestros Proveedores",
    subtitle: "Warehouse Energy Optimization",
    description: "Energy efficiency upgrade and solar installation for a major distribution center.",
    content: `Complete energy optimization project for Maestros Proveedores distribution center. The project included roof-mounted solar panels and energy storage systems.

Our solution reduced the facility's energy costs by 40% while providing reliable backup power during peak demand periods.`,
    duration: "2 months",
    projectType: "Energy Optimization",
    location: "Spain, Barcelona",
    headerImage: "/svg/placeholder.svg",
    images: [
      "/svg/placeholder.svg",
      "/svg/placeholder.svg",
      "/svg/placeholder.svg",
      "/svg/placeholder.svg",
      "/svg/placeholder.svg",
      "/svg/placeholder.svg",
    ],
  },
  {
    slug: "fv-epc-ford",
    date: new Date(2024, 7, 5), // August 5, 2024
    title: "FV EPC Ford",
    subtitle: "Automotive Industry Solar Project",
    description: "Large-scale EPC project for Ford manufacturing facility, featuring advanced solar technology.",
    content: `Engineering, Procurement, and Construction (EPC) project for Ford's manufacturing facility. This flagship installation showcases our ability to deliver industrial-scale renewable energy solutions.

The project includes over 2,000 solar panels with smart grid integration and real-time performance monitoring.`,
    duration: "6 months",
    projectType: "EPC Solar Project",
    location: "Spain, Valencia",
    headerImage: "/svg/placeholder.svg",
    images: [
      "/svg/placeholder.svg",
      "/svg/placeholder.svg",
      "/svg/placeholder.svg",
      "/svg/placeholder.svg",
      "/svg/placeholder.svg",
      "/svg/placeholder.svg",
    ],
  },
  {
    slug: "fv-omya-clariana-larboc",
    date: new Date(2024, 5, 18), // June 18, 2024
    title: "FV Omya Clariana L'Arboc",
    subtitle: "Industrial Mining Facility Installation",
    description: "Photovoltaic installation for Omya mining operations in Clariana L'Arboc region.",
    content: `Specialized solar installation for Omya's industrial mining facility in Clariana L'Arboc. The project required custom engineering solutions to accommodate the unique site requirements.

Despite challenging terrain conditions, our team successfully installed a high-capacity system that now powers significant portions of the facility's operations.`,
    duration: "5 months",
    projectType: "Industrial PV System",
    location: "Spain, Tarragona",
    headerImage: "/svg/placeholder.svg",
    images: [
      "/svg/placeholder.svg",
      "/svg/placeholder.svg",
      "/svg/placeholder.svg",
      "/svg/placeholder.svg",
      "/svg/placeholder.svg",
      "/svg/placeholder.svg",
    ],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};
