import { useTranslation } from "react-i18next";
import { OurWorkSection } from "~/components/common/sections/our-work-section";
import { WhatsNextSection } from "~/components/common/sections/whats-next-section";
import DetailedServicesSection from "~/components/services/detailed-services-section";
import ServicesPageHeader from "~/components/services/services-page-header";
import { canonicalUrls, siteName } from "~/lib/site";

export default function Page() {
    const { t } = useTranslation("translation", { keyPrefix: "meta.services" });
    return (<>
        <title>{t("title")}</title>
        <meta name="description" content={t("description")} />
        <meta name="keywords" content={t("keywords")} />
        <link rel="canonical" href={canonicalUrls.services} />
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
            <ServicesPageHeader />
            <DetailedServicesSection />
            <OurWorkSection />
            <WhatsNextSection />
        </main>
    </>);
}