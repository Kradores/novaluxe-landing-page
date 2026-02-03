import { cn } from "~/lib/utils";

interface PageTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageTitle({
  children,
  className,
}: PageTitleProps) {
  return (
    <h1 className={cn("text-center text-4xl md:text-6xl xl:text-7xl font-medium uppercase tracking-wider text-secondary-foreground", className)}>
      {children}
    </h1>
  );
}