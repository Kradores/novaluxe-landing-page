import { Button } from "~/components/ui/button";
import { LogoProjects } from "~/components/icons";
import { Link } from "react-router";

const NeedHelpSection = () => {
  return (
    <section className="relative overflow-hidden bg-primary pt-22 pb-33 lg:pb-28">
      <div className="absolute bottom-0 left-1/2 -translate-x-[50.8%] translate-y-1/3 pointer-events-none">
        <LogoProjects width={1550} height={777} />
      </div>

      <div className="relative z-10 mx-auto max-w-300 px-4 sm:px-6 text-center space-y-4">
        <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider text-primary-foreground">
          Do You Need Help
          <br />
          With A Project?
        </h2>

        <p className="text-primary-foreground/90 text-base md:text-lg">
          We will get back to you in 24 hours during the week days.
        </p>

        <div className="mx-auto w-fit bg-background/20 backdrop-blur-lg border border-background/20 p-2 rounded-full hover:shadow-lg transition-all duration-500 ease-in-out">
          <Button asChild variant="secondary">
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NeedHelpSection;
