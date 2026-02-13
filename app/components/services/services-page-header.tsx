
import { Button } from "~/components/ui/button";
import { Link } from "react-router";
import SectionTitle from "~/components/common/section-title";
import { navLinks } from "~/lib/site";

const ServicesPageHeader = () => {
  return (<section className="flex flex-col bg-foreground bg-[url(/images/services-header.webp)] bg-cover bg-center bg-no-repeat md:rounded-b-[32px]">
    <div className="overflow-hidden gap-7 max-w-300 mx-auto flex flex-col pt-40 md:pt-33 lg:pt-43 xl:pt-50 pb-43 md:pb-25 lg:pb-27 px-3 sm:px-6 xl:px-0">
      <SectionTitle size={"h1"} className="text-shadow-md/30">
        our services
      </SectionTitle>
      <div className="space-y-5 mx-auto">
        <p className="leading-normal text-secondary-foreground font-medium text-center text-shadow-md/30">Want a custom solution?</p>
        <div className="group w-fit bg-background/20 backdrop-blur-md border border-background/20 p-2 rounded-full">
          <Button
            asChild
            className="group-hover:bg-orange-glow"
          >
            <Link to={navLinks.contact}>Get a Quote</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>);
}

export default ServicesPageHeader;