import Image from "next/image";
import React from "react";
import Title from "../common/Title";

function Problems({ title = "", leftData = [], rightData = [] }) {
  return (
    <div className="lg:px-20 lg:py-24 md:px-10 md:py-14 px-4 py-8 flex items-center justify-center w-full">
      <div className="flex flex-col items-center w-full max-w-screen-xl lg:gap-8 gap-4">
        <Title label={title} data-aos="fade-up" />
        <div className="flex md:flex-row flex-col items-center md:gap-6 gap-4">
          <ul className="flex-1 flex flex-col justify-between lg:gap-10 gap-4">
            {leftData.map((item, index) => (
              <li
                key={index}
                data-aos="fade-right"
                data-aos-delay={index * 100}
                className="px-8 py-4 md:min-h-[100px] flex items-start gap-3 border-r-4
                 border-r-primary border-y border-y-gray/20 bg-gradient-to-r from-white to-primary/10"
              >
                <p className="md:text-lg text-sm text-justify font-medium text-neutral">
                  {item}
                </p>
              </li>
            ))}
          </ul>
          <div className="flex-1 md:block hidden">
            <Image
              src="/image/solutions/problems.webp"
              width={500}
              height={500}
              alt="Problems"
              className="object-contain"
              data-aos="fade-up"
            />
          </div>
          <ul className="flex-1 flex flex-col justify-between lg:gap-10 gap-4">
            {rightData.map((item, index) => (
              <li
                key={index}
                data-aos="fade-left"
                data-aos-delay={index * 100}
                className="px-8 py-4 md:min-h-[100px] flex items-start gap-3
                 border-l-4 border-l-primary border-y border-y-gray/20 bg-gradient-to-l from-white to-primary/10"
              >
                <p className="md:text-lg text-sm text-justify font-medium text-neutral">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Problems;
