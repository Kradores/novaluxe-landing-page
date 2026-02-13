import { Marquee, MarqueeContent, MarqueeItem } from "components/ui/marquee";

const brands: { name: string; src: string }[] = [
  { name: "Brand 1", src: "/svg/brand-1.svg" },
  { name: "Brand 2", src: "/svg/brand-2.svg" },
  { name: "Brand 3", src: "/svg/brand-3.svg" },
  { name: "Brand 4", src: "/svg/brand-4.svg" },
  { name: "Brand 5", src: "/svg/brand-5.svg" },
];

const TrustedBySection = () => {
  return (
    <section className="bg-blue-dark-glow py-12 6xl:mt-0">
      <p className="text-center text-foreground-light text-sm md:text-lg lg:text-xl font-normal tracking-wider mb-8 lg:mb-12">
        Trusted by industry leaders
      </p>

      <Marquee className="h-11 md:h-13 lg:min-h-22.5">
        <MarqueeContent className="space-x-10">
          {brands.map((brand) => (
            <MarqueeItem key={brand.name}>
              <img
                src={brand.src}
                alt={brand.name}
                className="h-11 md:h-13 lg:h-22.5 w-auto mx-11"
              />
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>
    </section>
  );
};

export default TrustedBySection;