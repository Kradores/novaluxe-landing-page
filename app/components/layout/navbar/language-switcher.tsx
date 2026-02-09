import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Button } from "~/components/ui/button";
import { useState } from "react";
import { useLocation } from "react-router";
import { cn, isProjectPage } from "~/lib/utils";

const languages = ["EN", "ES", "RO"];

export function LanguageSwitcher() {
  const [language, setLanguage] = useState("EN");
  const location = useLocation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={cn("text-secondary-foreground transition-colors hover:text-primary-hover rounded-full", isProjectPage(location.pathname) && "text-foreground")}>
        <Button
          variant="ghost"
          className="flex items-center gap-1 px-2 text-base font-medium"
          aria-label="Select language"
        >
          {language}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-20">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => setLanguage(lang)}
            className="transition-colors text-base hover:text-primary-hover"
          >
            {lang}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
