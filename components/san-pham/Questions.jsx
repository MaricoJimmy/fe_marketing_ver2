import Image from "next/image";
import React, { useState } from "react";
import { v4 } from "uuid";
import Title from "../common/Title";
import { useTranslations } from "next-intl";

function Questions({ data, img }) {
  const t = useTranslations("Product");
  const [idQuestion, setIdQuestion] = useState(1);
  const [openQuestion, setOpenQuestion] = useState(false);

  const handleClickQuestion = (id) => {
    setIdQuestion(id);
    if (id === idQuestion) {
      setOpenQuestion(!openQuestion);
    } else {
      setOpenQuestion(true);
    }
  };
  return (
    <div className="w-full flex justify-center items-center">
      <div className="px-5 py-3 md:px-8 md:py-6 max-w-screen-xl w-full">
        <div className="mt-16 md:mt-32">
          <Title label={t("ask")} className="mr-auto bg-yellow-primary" />
          <div className="mt-8 grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-5 w-full flex items-start justify-center">
              <Image src={img} width="600" height="400" alt="" />
            </div>
            <div className="col-span-12 lg:col-span-7">
              {data.map((item, idx) => (
                <div
                  key={v4()}
                  onClick={() => handleClickQuestion(idx)}
                  className="first:mt-0 mt-4 pb-4 border-b border-gray/20 cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <h4
                      className={`${
                        (idQuestion === idx &&
                          openQuestion &&
                          "text-orange-secondary") ||
                        "text-gray"
                      } mr-2 text-xl text-gray font-semibold`}
                    >
                      {item.ask}
                    </h4>
                    <div>
                      <svg
                        className={`${
                          (idQuestion === idx &&
                            openQuestion &&
                            "rotate-180") ||
                          "rotate-0"
                        }`}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.01247 7.51367L10.0132 12.513L15.0125 7.51224"
                          stroke="#2e2e2e"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div
                    className={`${
                      (idQuestion === idx &&
                        openQuestion &&
                        "translate-x-0 block") ||
                      "-translate-x-1/4 hidden"
                    } mt-4 text-gray/60 font-medium leading-8`}
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions;
