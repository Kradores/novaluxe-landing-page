import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("projects", "routes/projects.tsx"),
    route("projects/:slug", "routes/project-details.tsx"),
    route("services", "routes/services.tsx"),
    route("about", "routes/about.tsx"),
    route("contact", "routes/contact.tsx"),
    route("join-our-team", "routes/join.tsx"),
] satisfies RouteConfig;
