import { ROUTER_CONTACT } from "@/utils/constant";
import { useRouter } from "next/router";
import { Button } from "../ui/button";
import { getLocalizedPath } from "@/utils";

function HeroSection({ data, page }) {
  const router = useRouter();
  const renderBg = (page) => {
    switch (page) {
      case "pms":
        return "bg-[url('/image/hero/pms-bg.webp')]";
      case "intergration":
        return "bg-[url('/image/hero/intergrate-bg.webp')]";
      case "saas":
        return "bg-[url('/image/hero/saas-bg.webp')]";
    }
  };
  return (
    <div
      className={`relative w-full min-h-[400px] flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat ${renderBg(
        page
      )}`}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-neutral/80 to-neutral/20"></div>
      <div className="relative z-10 lg:px-10 px-4 py-6">
        <h1
          data-aos="fade-up"
          className="lg:text-5xl text-3xl text-center text-white font-bold"
        >
          {data.heading}
        </h1>
        <h5
          data-aos="fade-up"
          data-aos-delay="100"
          className="mt-2 text-center lg:text-lg text-sm text-white font-medium"
        >
          {data.excerpt}
        </h5>
        <div className="mt-8 flex items-center justify-center">
          <Button
            size="lg"
            data-aos="fade-up"
            data-aos-delay="200"
            title={data.contact}
            className="shadow-md hover:shadow-lg transition-all"
            onClick={() =>
              router.push(getLocalizedPath(ROUTER_CONTACT, router.locale))
            }
          >
            {data.contact}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
