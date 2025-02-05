import { getLocalizedPath } from "@/utils";
import { ROUTER_CONTACT } from "@/utils/constant";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "../ui/button";

function HeroSection({ data, image = "", bgColor = "bg-infor" }) {
  const router = useRouter();
  return (
    <div className="grid lg:grid-cols-5 grid-cols-1 h-fit lg:min-h-[600px]">
      <div className="lg:col-span-3 w-full h-full lg:px-20 lg:py-24 md:px-10 md:py-8 px-4 py-6 bg-gray/5">
        <h4 className="uppercase text-infor lg:text-lg text-sm lg:text-start text-center font-semibold">
          {data.subTitle}
        </h4>
        <h2 className="lg:mt-2 mt-4 text-5xl text-neutral lg:text-start text-center font-bold">
          {data.title}
        </h2>
        <p className="lg:mt-10 mt-6 text-neutral/80 text-lg text-justify font-medium">
          {data.desc}
        </p>
        <div className="mt-6 flex lg:justify-start justify-center">
          <Button
            size="lg"
            onClick={() =>
              router.push(getLocalizedPath(ROUTER_CONTACT, router.locale))
            }
            className="shadow-md hover:shadow-lg transition-all"
          >
            {data.contact}
          </Button>
        </div>
      </div>
      <div
        className={`${bgColor} lg:col-span-2 md:p-6 p-3 flex items-center w-full h-full`}
      >
        <div className="lg:-ml-20 w-full flex items-center justify-center">
          <Image
            src={image}
            width={750}
            height={500}
            alt=""
            className="md:rounded-md object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
