import { Phone, Mail, MapPin } from "lucide-react";
import SectionTitle from "~/components/common/section-title";
import { CONTACT_ADDRESS, CONTACT_EMAIL, CONTACT_PHONE } from "~/lib/site";
import ApplyForm from "./apply-form";

const contactInfo = [
  { icon: Phone, text: CONTACT_PHONE },
  { icon: Mail, text: CONTACT_EMAIL },
  { icon: MapPin, text: CONTACT_ADDRESS },
];

const ApplySection = () => {
  return (
    <section className="w-full bg-background pt-35 md:pt-32 lg:pt-41">
      <div className="mx-auto px-3 sm:px-6 xl:px-0 max-w-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 max-lg:gap-12">
          <div className="flex flex-col gap-8">
            <SectionTitle asChild size={"h2"} variant={"dark"} className="text-left">
              <h2>Apply today</h2>
            </SectionTitle>

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
            <ApplyForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplySection;

