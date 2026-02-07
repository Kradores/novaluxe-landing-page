import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Button } from "~/components/ui/button";
import { useState } from "react";

const languages = ["EN", "ES", "RO"];

export function LanguageSwitcher() {
  const [language, setLanguage] = useState("EN");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="text-secondary-foreground transition-colors hover:text-primary-hover rounded-full">
        <Button
          variant="ghost"
          className="flex items-center gap-1 px-2 text-sm font-medium"
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
            className="transition-colors hover:text-primary-hover"
          >
            {lang}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
