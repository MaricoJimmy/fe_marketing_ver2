import { getLocalizedPath } from "@/utils";
import { ROUTER_CONTACT } from "@/utils/constant";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "../ui/button";

function HeroSection({ data, image = "", bgColor = "bg-infor" }) {
  const router = useRouter();
  return (
    <div className="h-screen">
      <div className="w-full h-full lg:px-32 lg:py-24 md:px-10 md:py-8 px-4 py-6 flex flex-col justify-center bg-[url('/image/hero/saas-bg.webp')] bg-center">
        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="md:text-5xl text-3xl text-white lg:text-start text-center font-bold"
        >
          {data.title}
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-6 md:mt-8 text-white md:text-lg text-justify font-medium"
        >
          {data.desc}
        </p>
        <div className="mt-10 flex lg:justify-start justify-center">
          <Button
            size="lg"
            data-aos="fade-up"
            data-aos-delay="300"
            title={data.contact}
            className="shadow-md hover:shadow-xl hover:!scale-105 transition-all"
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
