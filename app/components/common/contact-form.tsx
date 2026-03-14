import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslation } from "react-i18next";
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
import SectionTitle from "./section-title";
import type { ReactNode } from "react";

interface ContactFormProps {
  children?: ReactNode;
}

export const ContactForm = ({ children }: ContactFormProps) => {
  const { t } = useTranslation("translation", { keyPrefix: "common.contact.form" });

  const formSchema = z.object({
    fullName: z.string().min(2, t("errors.fullNameMin")).max(100),
    businessName: z.string().min(1, t("errors.businessNameRequired")).max(100),
    email: z.email(t("errors.invalidEmail")).max(255),
    phone: z.string().min(6, t("errors.phoneRequired")).max(20),
    message: z.string().min(10, t("errors.messageMin")).max(1000),
  });

  type FormData = z.infer<typeof formSchema>;
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

  const onSubmit = async (data: FormData) => {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        subject: "Request from Contact Form",
        content: data,
        from: data.email
      }),
    });

    if (response.ok) {
      console.log("Email sent!");
    } else {
      console.error("Failed to send email");
    }
  };

  return (
    <div className="relative bg-orange-glow rounded-3xl p-6 md:p-8 lg:p-10 overflow-hidden">
      <div className="absolute bottom-0 right-0 translate-[45%] pointer-events-none">
        <img alt="novaluxe logo" loading="lazy" src="/images/logo-corner.webp" width={456} height={505} />
      </div>

      <SectionTitle asChild size={"h6"} className="text-left mb-6 md:mb-8 tracking-wide">
        {children}
      </SectionTitle>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 md:gap-8 relative z-10">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder={t("fullName")}
                    {...field}
                    className="rounded-full bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/70 h-12 text-sm md:text-base font-normal"
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
                    placeholder={t("businessName")}
                    {...field}
                    className="rounded-full bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/70 h-12 text-sm md:text-base font-normal"
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
                      placeholder={t("email")}
                      {...field}
                      className="rounded-full bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/70 h-12 text-sm md:text-base font-normal"
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
                      placeholder={t("phone")}
                      {...field}
                      className="rounded-full bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/70 h-12 text-sm md:text-base font-normal"
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
                    placeholder={t("message")}
                    {...field}
                    className="rounded-2xl bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/70 min-h-30 resize-none text-sm md:text-base font-normal"
                  />
                </FormControl>
                <FormMessage className="text-primary-foreground/90" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full rounded-full bg-background text-primary hover:bg-background/90 h-12 mt-2 mb-3 md:mb-4 text-sm md:text-base font-medium"
          >
            {t("sendMessage")}
          </Button>
        </form>
      </Form>
    </div>
  );
};
