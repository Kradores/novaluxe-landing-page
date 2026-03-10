import { cn } from "~/lib/utils";
import SectionTitle from "~/components/common/section-title";
import { useTranslation } from "react-i18next";

export const StorySection = () => {
  const { t } = useTranslation("translation", { keyPrefix: "about.story" });

  const blocks = [
    {
      id: "aboutUs",
      image: "/images/about-story-1.webp",
      reverse: false,
    },
    {
      id: "mission",
      image: "/images/about-story-2.webp",
      reverse: true,
    },
    {
      id: "global",
      image: "/images/about-story-3.webp",
      reverse: false,
    },
  ];

  return (
    <section className="bg-background py-20 md:py-25 lg:py-30">
      <div className="mx-auto max-w-300 px-4 md:px-6 flex flex-col gap-10 md:gap-15">
        {blocks.map((block) => (
          <div key={block.id} className="bg-card grid grid-cols-1 md:grid-cols-2 items-center rounded-[24px] lg:rounded-[32px] shadow-sm/4">
            <div
              className={cn("h-full overflow-hidden rounded-[24px] lg:rounded-[32px]", block.reverse && "md:order-2")}
            >
              <img
                src={block.image}
                alt={t(`blocks.${block.id}.title`)}
                className="bg-card h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className={cn("flex flex-col gap-4 md:gap-8 p-5 md:p-7 lg:p-9", block.reverse && "md:order-1")}>
              <SectionTitle asChild size={"h2"} variant={"dark"} className="text-start">
                <h2>
                  {t(`blocks.${block.id}.title`)}
                </h2>
              </SectionTitle>
              <p className="text-foreground text-sm md:text-base leading-normal">
                {t(`blocks.${block.id}.description`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
