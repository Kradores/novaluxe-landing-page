import { useTranslation } from "react-i18next";
import { AboutHeroSection } from "~/components/about/about-hero-section";
import { StatsSection } from "~/components/about/stats-section";
import { StorySection } from "~/components/about/story-section";
import ValuesSection from "~/components/about/values-section";
import ProjectsSection from "~/components/common/sections/projects-section";
import NeedHelpSection from "~/components/projects/need-help-section";
import { canonicalUrls, siteName } from "~/lib/site";

export default function Page() {
  const { t } = useTranslation("translation", { keyPrefix: "meta.about" });
  return (<>
    <title>{t("title")}</title>
    <meta name="description" content={t("description")} />
    <meta name="keywords" content={t("keywords")} />
    <link rel="canonical" href={canonicalUrls.home} />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-title" content={t("title")}></meta>
    <meta name="apple-mobile-web-app-status-bar-style" content="default"></meta>
    <meta property="og:title" content={t("title")}></meta>
    <meta property="og:description" content={t("description")}></meta>
    <meta property="og:site_name" content={siteName}></meta>
    <meta property="og:image" content={`${import.meta.env.VITE_API_BASE_URL}/images/og/og_main.png`}></meta>
    <meta property="og:type" content="website"></meta>
    <meta name="twitter:card" content="summary_large_image"></meta>
    <meta name="twitter:title" content={t("title")}></meta>
    <meta name="twitter:description" content={t("description")}></meta>
    <meta name="twitter:image" content={`${import.meta.env.VITE_API_BASE_URL}/images/og/og_main.png`}></meta>
    <main className="flex flex-col w-full">
      <AboutHeroSection />
      <StatsSection />
      <StorySection />
      <ValuesSection />
      <ProjectsSection />
      <NeedHelpSection />
    </main>
  </>);
}