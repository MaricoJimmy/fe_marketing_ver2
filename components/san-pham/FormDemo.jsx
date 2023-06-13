import React from "react";
import Title from "../common/Title";
import InfoClientForm from "./InfoClientForm";
import { useTranslations } from "next-intl";

function FormDemo({ data, isPMSPage }) {
  const t = useTranslations("Product");
  return (
    <div className="mt-16 md:mt-32">
      <div
        className={`w-full flex justify-center items-center ${
          (isPMSPage && "bg-orange-primary/20") || "bg-tertiary"
        }`}
      >
        <div className="px-8 py-16 max-w-screen-xl w-full">
          <div className="grid grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-12 lg:col-span-6 flex items-center justify-center">
              <div className="w-full">
                <Title label={t("demo")} className="bg-blue-primary" />
                <p
                  className="mt-6 text-xl text-gray/80 text-justify font-medium"
                  dangerouslySetInnerHTML={{ __html: data }}
                ></p>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <InfoClientForm
                isPMSPage={isPMSPage}
                productType={(isPMSPage && "pms") || "oee"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormDemo;
