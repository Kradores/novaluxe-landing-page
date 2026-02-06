import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MapPin } from "lucide-react";
import { Logo, LogoCorner } from "~/components/icons";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "~/components/ui/form";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100),
  businessName: z.string().min(1, "Business name is required").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().min(6, "Valid phone number required").max(20),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});

type FormData = z.infer<typeof formSchema>;

const contactInfo = [
  { icon: Phone, text: "+34 8977 876667" },
  { icon: Mail, text: "novaluxedynamic@hotmail.com" },
  { icon: MapPin, text: "Palma del Río, Spain, 14700" },
];

export const WhatsNextSection = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      businessName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    // TODO: Add email sending logic here
  };

  return (
    <section className="w-full bg-background pt-16 md:pt-24 lg:pt-32">
      <div className="mx-auto px-3 sm:px-6 xl:px-0 max-w-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium uppercase tracking-wider text-secondary">
              What's Next ?
            </h2>
            
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
            <div className="relative bg-orange-glow rounded-3xl p-6 md:p-8 lg:p-10 overflow-hidden">
              <div className="absolute bottom-0 right-0 opacity-60 pointer-events-none">
                <LogoCorner width={268} height={286} />
              </div>

              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-primary-foreground mb-6 md:mb-8">
                Get a Quotation
              </h3>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 md:gap-8 relative z-10">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Full Name"
                            {...field}
                            className="rounded-full bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/70 h-12"
                          />
                        </FormControl>
                        <FormMessage className="text-primary-foreground/90" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="businessName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Business Name"
                            {...field}
                            className="rounded-full bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/70 h-12"
                          />
                        </FormControl>
                        <FormMessage className="text-primary-foreground/90" />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Email"
                              {...field}
                              className="rounded-full bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/70 h-12"
                            />
                          </FormControl>
                          <FormMessage className="text-primary-foreground/90" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="Phone no."
                              {...field}
                              className="rounded-full bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/70 h-12"
                            />
                          </FormControl>
                          <FormMessage className="text-primary-foreground/90" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder="Describe your project"
                            {...field}
                            className="rounded-2xl bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/70 min-h-30 resize-none"
                          />
                        </FormControl>
                        <FormMessage className="text-primary-foreground/90" />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full rounded-full bg-background text-primary hover:bg-background/90 h-12 mt-2"
                  >
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

