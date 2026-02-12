import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import SectionTitle from "~/components/common/section-title";
import { navLinks } from "~/lib/site";

const JoinPageHeader = () => {
  return (
    <section className="bg-background">
      <div className="overflow-hidden gap-7 max-w-300 mx-auto flex flex-col items-center pt-40 md:pt-33 lg:pt-43 xl:pt-50 pb-11 md:pb-15 lg:pb-20 px-3 sm:px-6 xl:px-0">
        <SectionTitle size={"h1"} variant={"dark"} className="mb-5 md:mb-6 lg:mb-7">
          JOIN OUR TEAM
        </SectionTitle>
        <p className="text-foreground text-sm md:text-base max-w-md mb-8 md:mb-10 lg:mb-12">
          Ready to be part of a proactive team? Give us a call.
        </p>

        <div className="flex flex-row items-center gap-4">
            <Button asChild>
              <Link to={navLinks.contact}>Apply Now</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to={navLinks.about} className="flex items-center gap-2">
                Read More
                <ArrowRight className="size-4" />
              </Link>
            </Button>
        </div>
      </div>
    </section>
  );
};

export default JoinPageHeader;
