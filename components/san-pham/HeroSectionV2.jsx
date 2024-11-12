import { ROUTER_CONTACT } from "@/utils/constant";
import { useRouter } from "next/router";
import { Button } from "../ui/button";

function HeroSectionV2({ data, page }) {
  const router = useRouter();

  const renderBg = (page) => {
    switch (page) {
      case "pms":
        return "bg-[url('/image/hero/pms-bg.jpg')]";
      case "intergration":
        return "bg-[url('/image/hero/intergrate-bg.jpg')]";
      case "saas":
        return "bg-[url('/image/hero/saas-bg.jpg')]";
    }
  };
  return (
    <div
      className={`relative w-full lg:min-h-[600px] min-h-[400px] flex items-center justify-start overflow-hidden bg-cover bg-center bg-no-repeat ${renderBg(
        page
      )}`}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-neutral/80 to-neutral/40"></div>
      <div className="relative z-10 lg:px-24 px-4 py-6 lg:w-3/4">
        <h1 className="lg:text-5xl text-3xl text-white font-bold">
          {data.heading}
        </h1>
        <h5 className="mt-4 lg:text-lg text-sm text-white font-medium">
          {data.excerpt}
        </h5>
        <div className="mt-10 flex items-center">
          <Button
            onClick={() => router.push(ROUTER_CONTACT)}
            className="shadow-md hover:shadow-lg transition-all"
            size="lg"
          >
            {data.contact}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSectionV2;
