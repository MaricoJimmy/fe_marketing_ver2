import Image from "next/image";
import React from "react";
import { v4 } from "uuid";
import Title from "../common/Title";
import { useTranslations } from "next-intl";

function HighLightFeature({ data }) {
  const t = useTranslations("Product");
  return (
    <div className="">
      <div className="w-full flex items-center justify-center">
        <Title label={t("feature")} />
      </div>
      <div className="mt-8 grid grid-cols-12 gap-6 md:gap-10">
        {data.map((feature) => (
          <div key={v4()} className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="hover:scale-105 duration-200">
              <Image src={feature.img} width="500" height="400" alt="" />
            </div>
            <h4 className="text-lg text-center text-neutral whitespace-normal font-bold">
              {feature.title}
            </h4>
            <h6 className="mt-2 text-center text-neutral/80 whitespace-normal">
              {feature.desc}
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HighLightFeature;
