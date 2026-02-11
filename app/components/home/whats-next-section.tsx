import { Phone, Mail, MapPin } from "lucide-react";
import SectionTitle from "~/components/common/section-title";
import { ContactForm } from "~/components/common/contact-form";
import { CONTACT_ADDRESS, CONTACT_EMAIL, CONTACT_PHONE } from "~/lib/site";

const contactInfo = [
  { icon: Phone, text: CONTACT_PHONE },
  { icon: Mail, text: CONTACT_EMAIL },
  { icon: MapPin, text: CONTACT_ADDRESS },
];

export const WhatsNextSection = () => {

  return (
    <section className="w-full bg-background pt-16 md:pt-24 lg:pt-32">
      <div className="mx-auto px-3 sm:px-6 xl:px-0 max-w-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="flex flex-col gap-8">
            <SectionTitle asChild size={"h2"} variant={"dark"} className="text-left">
              <h2>What's Next ?</h2>
            </SectionTitle>

            <p className="text-foreground text-base md:text-lg leading-relaxed max-w-md">
              We will get back to you in 24 hours during weekdays. For urgent matters, feel free to call us directly.
            </p>

            <div className="flex flex-col gap-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <span className="text-foreground text-sm md:text-base">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative -mb-10 md:-mb-12.5 lg:-mb-25">
            <ContactForm>
              <h3>Get a Quotation</h3>
            </ContactForm>
          </div>
        </div>
      </div>
    </section>
  );
};

