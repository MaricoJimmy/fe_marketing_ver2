import Image from "next/image";
import React from "react";
import Title from "../common/Title";
import { useTranslations } from "next-intl";

function Partner() {
  const t = useTranslations("Product");
  return (
    <div className="mt-8 md:mt-16">
      <div className="flex items-center justify-center">
        <Title label={t("partner")} className="mx-auto bg-primary" />
      </div>
      <div className="hidden md:block mt-16 px-10 py-16 bg-[#EFF2FB] rounded-3xl">
        <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-24">
          <div className="w-fit h-fit hover:-translate-y-2 duration-300">
            <Image
              src="/image/partner/partner-1.png"
              width="220"
              height="50"
              alt=""
            />
          </div>
          <div className="w-fit h-fit hover:-translate-y-2 duration-300">
            <Image
              src="/image/partner/partner-2.png"
              width="100"
              height="65"
              alt=""
            />
          </div>
          <div className="w-fit h-fit hover:-translate-y-2 duration-300">
            <Image
              src="/image/partner/partner-3.png"
              width="220"
              height="50"
              alt=""
            />
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-10 md:gap-24">
          <div className="w-fit h-fit hover:-translate-y-2 duration-300">
            <Image
              src="/image/partner/partner-4.png"
              width="160"
              height="50"
              alt=""
            />
          </div>
          <div className="w-fit h-fit hover:-translate-y-2 duration-300">
            <Image
              src="/image/partner/partner-5.png"
              width="220"
              height="50"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="mt-10 px-4 py-16 bg-[#EFF2FB] grid md:hidden grid-cols-12 gap-6 md:gap-10 rounded-3xl">
        <div className="col-span-6 md:col-span-4">
          <div className="flex justify-center w-full h-fit hover:-translate-y-2 duration-300">
            <Image
              src="/image/partner/partner-1.png"
              width="220"
              height="50"
              alt=""
            />
          </div>
        </div>
        <div className="col-span-6 md:col-span-4">
          <div className="flex justify-center w-full h-fit hover:-translate-y-2 duration-300">
            <Image
              src="/image/partner/partner-2.png"
              width="100"
              height="65"
              alt=""
            />
          </div>
        </div>
        <div className="col-span-6 md:col-span-4">
          <div className="flex justify-center w-full h-fit hover:-translate-y-2 duration-300">
            <Image
              src="/image/partner/partner-3.png"
              width="220"
              height="50"
              alt=""
            />
          </div>
        </div>
        <div className="col-span-6 md:col-span-4">
          <div className="flex justify-center w-full h-fit hover:-translate-y-2 duration-300">
            <Image
              src="/image/partner/partner-4.png"
              width="160"
              height="50"
              alt=""
            />
          </div>
        </div>
        <div className="col-span-6 md:col-span-4">
          <div className="flex justify-center w-full h-fit hover:-translate-y-2 duration-300">
            <Image
              src="/image/partner/partner-5.png"
              width="220"
              height="50"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partner;
