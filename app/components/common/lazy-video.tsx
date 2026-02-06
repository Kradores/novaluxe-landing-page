import { useState, useEffect, useRef } from "react";
import { cn } from "~/lib/utils";

interface LazyVideoProps {
  src: string;
  type?: string;
  className?: string;
  rootMargin?: string;
  threshold?: number;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
}

export const LazyVideo = ({
  src,
  type = "video/mp4",
  className,
  rootMargin = "100px",
  threshold = 0.1,
  ...videoProps
}: LazyVideoProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted/50 animate-pulse rounded-[inherit]" />
      )}

      {isVisible && (
        <video
          onLoadedData={() => setIsLoaded(true)}
          className={cn(
            "transition-opacity duration-500",
            isLoaded ? "opacity-100" : "opacity-0",
            className
          )}
          {...videoProps}
        >
          <source src={src} type={type} />
        </video>
      )}
    </div>
  );
};
