import { Button } from "~/components/ui/button";
import type { Route } from "./+types/home";
import { Upload } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <main className="flex flex-col gap-2 w-fit pl-[45%]">
    <h1 className="text-xl font-bold text-foreground-dark">Title</h1>
    <Button variant={"ghost"}>Submit</Button>
    <Button>Submit<Upload /></Button>
    <Button>Submit<Upload /></Button>
  </main>;
}
