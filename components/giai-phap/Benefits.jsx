import React from "react";
import Title from "../common/Title";

function Benefits({ data = [], title = "" }) {
  return (
    <div className="lg:px-20 lg:py-24 md:px-10 md:py-14 px-4 py-8 flex items-center justify-center w-full">
      <div className="flex flex-col items-center w-full max-w-screen-xl lg:gap-8 gap-4">
        <Title label={title} data-aos="fade-up" />
        <ul className="flex md:flex-row flex-col md:items-start items-center lg:gap-8 gap-6">
          {data.map((item, index) => (
            <li
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="flex-1 flex flex-col items-center gap-4"
            >
              <div
                className="p-4 md:w-32 md:h-32 w-24 h-24 bg-white flex items-center justify-center rounded-full
               border border-gray/50 border-dashed hover:border-none hover:scale-110 hover:shadow-lg transition-all"
              >
                <div
                  dangerouslySetInnerHTML={{ __html: item.icon }}
                  className="text-primary"
                ></div>
              </div>
              <h4 className="text-neutral text-center font-medium">
                {item.content}
              </h4>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Benefits;
