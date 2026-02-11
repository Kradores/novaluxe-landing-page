import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import { cn } from "~/lib/utils";

const titleVariants = cva(
  "text-center font-bold uppercase tracking-wider",
  {
    variants: {
      variant: {
        default: "text-secondary-foreground",
        dark: "text-foreground-dark",
        primary: "text-primary"
      },
      size: {
        default: "text-base",
        h1: "text-4xl md:text-7xl xl:text-8xl",
        h2: "text-2xl md:text-[46px] xl:text-6xl",
        h4: "text-[26px] md:text-4xl",
        h5: "text-xl md:text-3xl",
        h6: "text-[20px] md:text-2xl",
        h8: "text-base md:text-lg",
        h9: "text-sm md:text-base",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export default function SectionTitle({
  children,
  className,
  variant = "default",
  size = "default",
  asChild = false,
}: React.ComponentProps<"h1"> &
  VariantProps<typeof titleVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "h1";
  return (
    <Comp className={cn(titleVariants({ variant, size, className }))}>
      {children}
    </Comp>
  );
}