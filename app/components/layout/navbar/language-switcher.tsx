import { ArrowDown, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Button } from "~/components/ui/button";
import { useState } from "react";
import { useLocation } from "react-router";
import { cn, isLightBgPage } from "~/lib/utils";

const languages = ["EN", "ES", "RO"];

export function LanguageSwitcher() {
  const [language, setLanguage] = useState("EN");
  const location = useLocation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={cn("group text-secondary-foreground transition-all hover:[text-shadow:0_0_1px_currentColor] rounded-full", isLightBgPage(location.pathname) && "text-foreground")}>
        <Button
          variant="ghost"
          className="flex items-center gap-1 px-2 text-base font-medium"
          aria-label="Select language"
        >
          {language}
          <ArrowDown className="h-4 w-4 stroke-3 transition-all duration-500 ease-in-out group-hover:stroke-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-20">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => setLanguage(lang)}
            className="transition-all text-base hover:[text-shadow:0_0_1px_currentColor]"
          >
            {lang}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
