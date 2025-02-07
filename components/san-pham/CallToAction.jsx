import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/router";
import { ROUTER_CONTACT } from "@/utils/constant";
import { getLocalizedPath } from "@/utils";

function CallToAction({ data }) {
  const router = useRouter();
  return (
    <div className="w-full flex items-center justify-center bg-infor/5">
      <div className="lg:px-20 lg:py-24 md:px-10 md:py-14 px-4 py-8 w-full max-w-screen-xl">
        <div className="lg:px-14 lg:py-16 px-4 py-10 w-full h-fit rounded-lg">
          <div>
            <h5 data-aos="fade-up" className="text-infor text-lg font-semibold">
              {data.subTitle}
            </h5>
            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="mt-2 text-neutral lg:text-4xl text-3xl font-bold"
            >
              {data.title}
            </h2>
            <h4
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-6 text-justify text-gray text-base font-medium"
            >
              {data.content}
            </h4>
          </div>
          <div className="mt-10">
            <Button
              onClick={() =>
                router.push(getLocalizedPath(ROUTER_CONTACT, router.locale))
              }
              data-aos="fade-up"
              data-aos-delay="300"
              className="lg:px-4 lg:py-3 lg:text-base shadow-md hover:shadow-lg transition-all"
            >
              {data.button}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
