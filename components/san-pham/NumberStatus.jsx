import React from "react";
import { v4 } from "uuid";

function NumberStatus({ data, className = "" }) {
  return (
    <div className="">
      <div
        id="wave-container-top"
        className={`${className} bg-gradient-to-r -mb-[0.3px] w-full h-[50px]`}
      />
      <div className={`w-full h-full bg-gradient-to-r ${className}`}>
        <div className="w-full h-fit flex justify-center items-center">
          <div className="px-8 py-16 max-w-screen-xl w-full">
            <ul className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-32">
              {data.map((stat) => (
                <li key={v4()}>
                  <div
                    className="flex items-center justify-center"
                    dangerouslySetInnerHTML={{ __html: stat.icon }}
                  ></div>
                  <div className="mt-6 text-center">
                    <h3 className="text-5xl text-white font-bold">
                      {stat.title}
                    </h3>
                    <h5 className="mt-4 text-lg text-white/80 font-medium">
                      {stat.desc}
                    </h5>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        id="wave-container-bot"
        className={`${className} bg-gradient-to-r w-full h-[30px]`}
      />
    </div>
  );
}

export default NumberStatus;
