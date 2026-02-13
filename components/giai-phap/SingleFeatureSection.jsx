import Image from "next/image";
import React from "react";

function SingleFeatureSection({
  isReverse = false,
  data = {},
  isCustom = false,
}) {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="lg:px-20 lg:py-24 md:px-10 md:py-14 px-4 py-8 w-full grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-8 max-w-screen-xl">
        <div
          data-aos="fade-right"
          className={`${isReverse ? "order-2" : "lg:order-1 order-2"
            } lg:h-[400px] h-[300px] relative`}
        >
          <Image
            src={data.img}
            layout="fill"
            alt=""
            className="object-cover object-left rounded-sm"
          />
        </div>
        <div
          data-aos="fade-left"
          className={`${isReverse ? "order-1" : "lg:order-2 order-1"
            } flex flex-col gap-12`}
        >
          <div className="h-1 w-32 bg-primary"></div>
          <div>
            <h2 className="text-4xl text-neutral font-semibold">
              {data.title}
            </h2>
            {isCustom ? (
              <ol className="mt-8 ml-6 list-disc text-justify">
                {data.listsContent.map((content) => (
                  <li key={content.title}>
                    <span className="text-neutral text-base font-semibold">
                      {content.title}
                    </span>
                    : {content.content}
                  </li>
                ))}
              </ol>
            ) : (
              <>
                <h6 className="mt-2 text-base text-neutral/80 text-justify">
                  {data.subTitle}
                </h6>
                <div
                  className="mt-8 text-lg text-neutral text-justify"
                  dangerouslySetInnerHTML={{ __html: data.desc }}
                ></div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleFeatureSection;
