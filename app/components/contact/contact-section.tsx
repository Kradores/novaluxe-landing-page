import { Phone, Mail, MapPin } from "lucide-react";
import SectionTitle from "~/components/common/section-title";
import { ContactForm } from "~/components/common/contact-form";
import { CONTACT_ADDRESS, CONTACT_EMAIL, CONTACT_PHONE } from "~/lib/site";

const contactInfo = [
  { icon: Phone, text: CONTACT_PHONE },
  { icon: Mail, text: CONTACT_EMAIL },
  { icon: MapPin, text: CONTACT_ADDRESS },
];

const ContactSection = () => {

  return (
    <section className="w-full bg-background pt-35 md:pt-32 lg:pt-41">
      <div className="mx-auto px-3 sm:px-6 xl:px-0 max-w-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 max-lg:gap-12">
          <div className="flex flex-col">
            <SectionTitle asChild size={"h2"} variant={"dark"} className="text-left mb-6 md:mb-7">
              <h1>let's Get in contact</h1>
            </SectionTitle>

            <p className="text-foreground text-base md:text-lg leading-normal max-w-md mb-10 md:mb-8 lg:mb-10 xl:mb-12">
              We will get back to you in 24 hours during the week days.
            </p>

            <div className="flex flex-col gap-2">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-3 py-2">
                  <item.icon className="w-6 h-6 text-foreground" />
                  <span className="text-foreground text-sm md:text-base">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative -mb-10 md:-mb-12.5 lg:-mb-25">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

