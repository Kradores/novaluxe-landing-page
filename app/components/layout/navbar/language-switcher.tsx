import { ArrowDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Button } from "~/components/ui/button";
import { useLocation, useNavigate } from "react-router";
import { cn, isLightBgPage } from "~/lib/utils";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";

const languages = [
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "ro", name: "Română", flag: "🇷🇴" }
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = useMemo(() => languages.find(lang => lang.code === i18n.language) || languages[0], [i18n.language]);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLanguageChange = (newLang: string) => {
    const pathSegments = location.pathname.split("/").filter(Boolean);
    pathSegments[0] = newLang;
    navigate(`/${pathSegments.join("/")}${location.search}${location.hash}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={cn("group text-secondary-foreground transition-all hover:[text-shadow:0_0_1px_currentColor] rounded-full", isLightBgPage(location.pathname) && "text-foreground")}>
        <Button
          variant="ghost"
          className="flex items-center gap-1 uppercase text-base has-[>svg]:px-2"
          aria-label="Select language"
        >
          {currentLang.code}
          <ArrowDown className="h-4 w-4 stroke-3 transition-all duration-500 ease-in-out group-hover:stroke-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-20">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className="transition-all text-sm md:text-base hover:[text-shadow:0_0_1px_currentColor] uppercase"
          >
            {lang.code}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
