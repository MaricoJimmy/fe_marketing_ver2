import React from "react";
import Title from "../common/Title";

function HighLightFeature({ data, isCustom = false, custom }) {
  return (
    <div className="lg:px-20 lg:py-24 md:px-10 md:py-14 px-4 py-8 flex flex-col items-center lg:gap-8 gap-4">
      <div className="flex flex-col items-center justify-center">
        <Title label={data.title} />
        {isCustom ? (
          <h4 className="mt-4 mb-6 text-lg text-gray text-center font-medium lg:max-w-[800px]">
            {data.desc}
          </h4>
        ) : null}
      </div>
      <div className="p-6 flex justify-center bg-white border-t-2 border-primary rounded-lg shadow-lg">
        <div className="w-fit grid md:grid-cols-2 lg:gap-10 gap-4">
          {data.lists.map((content) => (
            <div
              key={content.id}
              className="p-4 lg:max-w-[500px] flex flex-col items-center rounded-lg bg-transparent hover:bg-primary/10 transition-all cursor-default"
            >
              <div
                className="text-primary"
                dangerouslySetInnerHTML={{ __html: content.icon }}
              ></div>
              <div className="mt-4">
                <h3 className="text-center text-neutral text-xl font-semibold">
                  {content.title}
                </h3>
                <h5
                  className={`${custom} mt-1 text-justify text-neutral/80 text-base`}
                >
                  {content.content}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HighLightFeature;
