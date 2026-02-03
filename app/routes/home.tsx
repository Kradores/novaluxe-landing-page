import type { Route } from "./+types/home";
import { HeroSection } from "~/components/home/hero-section";
import { Navbar } from "~/components/navbar/navbar";
import { TrustedBySection } from "~/components/home/trusted-by";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <div className="flex flex-col bg-foreground bg-[url(../../static/images/hero-bg.jpg)] bg-cover bg-center bg-no-repeat">
        <Navbar className="w-full" />
        <HeroSection className="mx-auto" />
      </div>
      <TrustedBySection />
    </main>
  );
}
