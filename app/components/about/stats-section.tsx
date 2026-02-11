import SectionTitle from "~/components/common/section-title";

const stats = [
  { value: "+45", label: "reliable workers" },
  { value: "+10", label: "projects done" },
  { value: "100%", label: "success rate" },
];

export const StatsSection = () => {
  return (
    <section className="bg-blue-dark-glow py-15 md:py-20 lg:py-25">
      <div className="mx-auto max-w-300 xl: px-2 md:px-6 flex flex-col xl:flex-row items-center gap-10 lg:gap-16">
        <p className="text-secondary-foreground text-base md:text-xl text-center lg:text-left lg:max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>

        <div className="flex flex-row w-full justify-between lg:max-w-xl">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 md:gap-2 w-fit">
              <SectionTitle asChild size={"h4"} variant={"primary"}>
                <span>
                  {stat.value}
                </span>
              </SectionTitle>
              <span className="text-secondary-foreground text-base md:text-lg text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
