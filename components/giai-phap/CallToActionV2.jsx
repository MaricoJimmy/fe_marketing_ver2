import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/router";
import { ROUTER_CONTACT } from "@/utils/constant";
import { getLocalizedPath } from "@/utils";

function CallToActionV2({ data }) {
  const router = useRouter();
  return (
    <div className="w-full bg-infor">
      <div className="lg:px-48 lg:py-32 md:px-10 md:py-14 px-4 py-8 grid lg:grid-cols-2 gap-8">
        <div className="">
          <h3
            data-aos="fade-up"
            className="text-white lg:text-4xl text-2xl font-semibold"
          >
            {data.title}
          </h3>
          <Button
            title={data.button}
            size="lg"
            variant="secondary"
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-8 shadow-md hover:shadow-xl transition-all"
            onClick={() =>
              router.push(getLocalizedPath(ROUTER_CONTACT, router.locale))
            }
          >
            {data.button}
          </Button>
          <h5
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-4 text-white lg:text-lg font-medium"
          >
            {data.content}
          </h5>
        </div>
        <div className="flex flex-col space-y-8">
          {data.actions.map((action, idx) => (
            <div
              key={idx}
              className={`${
                idx % 2 === 0 ? "" : ""
              } p-4 w-fit flex items-start gap-4 bg-white rounded-lg shadow-lg`}
              data-aos="fade-left"
              data-aos-delay={idx * 100 + 50}
            >
              <div className="shrink-0 text-primary">
                {idx === 0 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-star"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-pencil"
                  >
                    <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                    <path d="m15 5 4 4" />
                  </svg>
                )}
              </div>
              <div className="flex-1">
                <h4 className="text-neutral text-xl font-semibold">
                  {action.title}
                </h4>
                <h6 className="mt-2 text-gray/80 font-medium text-justify">
                  {action.desc}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CallToActionV2;
