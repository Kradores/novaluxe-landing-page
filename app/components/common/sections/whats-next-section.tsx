import { Phone, Mail } from "lucide-react";
import SectionTitle from "~/components/common/section-title";
import { ContactForm } from "~/components/common/contact-form";
import { CONTACT_ADDRESS, CONTACT_EMAIL, CONTACT_PHONE } from "~/lib/site";
import { MapPin } from "~/components/icons";
import { useTranslation } from "react-i18next";



export const WhatsNextSection = () => {
  const { t, i18n } = useTranslation("translation", { keyPrefix: "common.sections.WhatsNextSection" });

  const contactInfo = [
    { icon: Phone, text: CONTACT_PHONE[i18n.language] },
    { icon: Mail, text: CONTACT_EMAIL },
    { icon: MapPin, text: CONTACT_ADDRESS },
  ];

  return (
    <section className="w-full bg-background pt-16 md:pt-24 lg:pt-32">
      <div className="mx-auto px-3 sm:px-6 xl:px-0 max-w-300">
        <div className="grid grid-cols-1 lg:grid-cols-[4fr_5fr] gap-12 lg:gap-8">
          <div className="flex flex-col">
            <SectionTitle asChild size={"h2"} variant={"dark"} className="text-left mb-6 md:mb-7">
              <h2>{t("heading")}</h2>
            </SectionTitle>

            <p className="text-foreground text-sm md:text-base font-normal leading-normal max-w-md mb-10 md:mb-8 lg:mb-10 xl:mb-12">
              {t("paragraph")}
            </p>

            <div className="flex flex-col gap-2">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-3 py-2">
                  <item.icon className="w-6 h-6 text-foreground" />
                  <span className="text-foreground text-sm md:text-base font-medium">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative -mb-10 md:-mb-12 lg:-mb-30">
            <ContactForm>
              <h3>{t("formTitle")}</h3>
            </ContactForm>
          </div>
        </div>
      </div>
    </section>
  );
};

