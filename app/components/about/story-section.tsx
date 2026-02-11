import { cn } from "~/lib/utils";
import SectionTitle from "~/components/common/section-title";

const blocks = [
  {
    title: "ABOUT US",
    description:
      "Novaluxe was founded in 2024 with a clear mission: to make solar energy accessible and efficient for businesses across Europe. We believe that reducing CO2 emissions starts with smarter energy solutions, and we're committed to leading that change through innovation and dedication.",
    image: "/images/about-story-1.webp",
    reverse: false,
  },
  {
    title: "OUR MISSION",
    description:
      "We specialize in designing and installing B2B solar panel systems tailored to each client's needs. Our team of experienced professionals ensures every project is completed to the highest standards, delivering reliable and sustainable energy solutions that drive real results.",
    image: "/images/about-story-2.webp",
    reverse: true,
  },
  {
    title: "AROUND THE WORLD",
    description:
      "Based in Spain, Novaluxe operates across Europe with over 15 years of combined experience in the renewable energy sector. Our international presence allows us to bring best practices and cutting-edge technology to every project, no matter where it is.",
    image: "/images/about-story-3.webp",
    reverse: false,
  },
];

export const StorySection = () => {
  return (
    <section className="bg-background py-20 md:py-25 lg:py-30">
      <div className="mx-auto max-w-300 px-4 md:px-6 flex flex-col gap-10 md:gap-15">
        {blocks.map((block) => (
          <div key={block.title} className="bg-card grid grid-cols-1 md:grid-cols-2 items-center rounded-[24px] lg:rounded-[32px] shadow-sm/4">
            <div
              className={cn("h-full overflow-hidden rounded-[24px] lg:rounded-[32px]", block.reverse && "md:order-2")}
            >
              <img
                src={block.image}
                alt={block.title}
                className="bg-card h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className={cn("flex flex-col gap-4 md:gap-8 p-5 md:p-7 lg:p-9", block.reverse && "md:order-1")}>
              <SectionTitle asChild size={"h2"} variant={"dark"} className="text-start">
                <h2>
                  {block.title}
                </h2>
              </SectionTitle>
              <p className="text-foreground text-sm md:text-base leading-relaxed">{block.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
