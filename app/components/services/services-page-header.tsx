import PageTitle from "~/components/common/page-title";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";

const ServicesPageHeader = () => {
  return (<section className="flex flex-col bg-foreground bg-[url(/images/hero-bg.webp)] bg-cover bg-center bg-no-repeat md:rounded-b-[32px]">
    <div className="overflow-hidden gap-7 max-w-300 mx-auto flex flex-col pt-40 md:pt-33 lg:pt-43 xl:pt-50 pb-43 md:pb-25 lg:pb-27 px-3 sm:px-6 xl:px-0">
      <PageTitle className="text-shadow-md">
        our services
      </PageTitle>
      <div className="space-y-5 mx-auto">
        <p className="leading-relaxed text-secondary-foreground font-medium text-center">Want a custom solution?</p>
        <div className="group w-fit bg-background/20 backdrop-blur-md border border-background/20 p-2 rounded-full hover:shadow-lg">
          <Button
            asChild
            className="group-hover:bg-orange-glow"
          >
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>);
}

export default ServicesPageHeader;