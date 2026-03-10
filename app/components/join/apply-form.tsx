import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
import type { ReactNode } from "react";
import SectionTitle from "~/components/common/section-title";
import { Label } from "../ui/label";
import { Upload } from "lucide-react";
import { Spinner } from "../ui/spinner";
import { useTranslation } from "react-i18next";

const fileSizeLimit = 5 * 1024 * 1024;

const ApplyForm = ({ children }: { children?: ReactNode }) => {
  const { t } = useTranslation("translation", { keyPrefix: "join.apply.form" });

  const formSchema = z.object({
    fullName: z.string().min(2, t("validation.nameMin")).max(100),
    email: z.email(t("validation.emailInvalid")).max(255),
    language: z.string().min(1, t("validation.langRequired")).max(100),
    age: z.coerce
      .number<number>({ error: t("validation.ageRequired") })
      .min(18, t("validation.ageMin"))
      .max(99),
    message: z.string().max(5000).optional(),
    file: z
      .instanceof(File, { message: t("validation.cvRequired") })
      .refine((file) => (file?.size ?? 0) <= fileSizeLimit, {
        message: t("validation.fileSize"),
      }),
  });

  type FormData = z.infer<typeof formSchema>;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      language: "",
      age: undefined,
      message: "",
      file: undefined,
    },
    mode: "onSubmit",
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="relative bg-orange-glow rounded-3xl p-6 md:p-8 lg:p-10 overflow-hidden">
      <div className="absolute bottom-0 right-0 translate-[45%] pointer-events-none">
        <img alt="logo" loading="lazy" src="/images/logo-corner.webp" width={456} height={505} />
      </div>

      <SectionTitle asChild size={"h6"} className="text-left mb-6 md:mb-8">
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
                  <Input placeholder={t("placeholders.fullName")} {...field} className="rounded-full bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/70 h-12 text-sm md:text-base font-normal" />
                </FormControl>
                <FormMessage className="text-primary-foreground/90" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="email" placeholder={t("placeholders.email")} {...field} className="rounded-full bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/70 h-12 text-sm md:text-base font-normal" />
                </FormControl>
                <FormMessage className="text-primary-foreground/90" />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="language"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder={t("placeholders.language")} {...field} className="rounded-full bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/70 h-12 text-sm md:text-base font-normal" />
                  </FormControl>
                  <FormMessage className="text-primary-foreground/90" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder={t("placeholders.age")} {...field} className="rounded-full bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/70 h-12 text-sm md:text-base font-normal" />
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
                  <Textarea placeholder={t("placeholders.message")} {...field} className="rounded-2xl bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/70 min-h-30 resize-none text-sm md:text-base font-normal" />
                </FormControl>
                <FormMessage className="text-primary-foreground/90" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="file"
            render={({ field, fieldState }) => {
              const { value, onChange, ...rest } = field;
              return (
                <FormItem>
                  <FormControl>
                    <Label className="relative">
                      <Input type="file" className="rounded-full bg-background/10 backdrop-blur-sm border-primary-foreground/30 file:text-transparent h-12 text-transparent" aria-invalid={!!fieldState.error} {...rest} onChange={(e) => onChange(e.target.files?.[0])} />
                      <div className="absolute flex flex-row gap-2.5 bottom-1/2 left-0 translate-y-1/2 text-secondary-foreground w-full justify-center px-7 text-sm md:text-base font-medium">
                        {value ? <span className="text-ellipsis text-nowrap overflow-hidden">{value.name}</span> : (
                          <><span>{t("placeholders.upload")}</span><Upload className="size-4" /></>
                        )}
                      </div>
                    </Label>
                  </FormControl>
                  <FormMessage className="text-primary-foreground/90" />
                </FormItem>
              );
            }}
          />

          <Button type="submit" className="w-full rounded-full bg-background text-primary hover:bg-background/90 h-12 mt-2 mb-3 md:mb-4" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting && <Spinner className="mr-2 size-4" />}
            {form.formState.isSubmitting ? t("buttons.submitting") : t("buttons.submit")}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ApplyForm;
