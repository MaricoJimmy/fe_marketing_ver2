import Image from "next/image";
import React from "react";
import { v4 } from "uuid";
import Title from "../common/Title";

function VersionApp({ data, img, className }) {
  return (
    <div className="mt-16 md:mt-32">
      <div id="wave-container-top" className={`${className} w-full h-[50px]`} />
      <div className={`w-full flex items-center justify-center ${className}`}>
        <div className="px-5 md:px-8 py-8 max-w-screen-xl w-full">
          <div className="w-full flex items-center justify-end">
            <Title
              label="Phiên bản phần mềm"
              className="ml-auto bg-orange-primary"
            />
          </div>
          <div className="mt-8 grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-7 order-last lg:order-first">
              <table className="w-full table-auto ">
                <thead>
                  <tr className="border-b border-gray/20">
                    <th className="px-2 py-1 text-xl text-left text-gray/80 font-semibold">
                      Tính năng
                    </th>
                    <th className="px-2 md:px-3 py-1 text-xl text-center text-gray/80 font-semibold">
                      Basic
                    </th>
                    <th className="px-2 md:px-3 py-1 text-xl text-center text-gray/80 font-semibold">
                      Pro
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((featureInVersion) => (
                    <tr
                      key={v4()}
                      className="border-b border-gray/20 last:border-none"
                    >
                      <td className="px-2 py-3 md:text-lg font-medium">
                        {featureInVersion.title}
                      </td>
                      <td className="px-2 md:px-3 py-3">
                        {featureInVersion.isBasic && (
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_191_274)">
                              <path
                                d="M9 16.1701L5.53 12.7001C5.14 12.3101 4.51 12.3101 4.12 12.7001C3.73 13.0901 3.73 13.7201 4.12 14.1101L8.3 18.2901C8.69 18.6801 9.32 18.6801 9.71 18.2901L20.29 7.71007C20.68 7.32007 20.68 6.69007 20.29 6.30007C19.9 5.91007 19.27 5.91007 18.88 6.30007L9 16.1701Z"
                                fill="#0069FF"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_191_274">
                                <rect width="24" height="24" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        )}
                      </td>
                      <td className="px-2 md:px-3 py-3">
                        {featureInVersion.isPro && (
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_191_274)">
                              <path
                                d="M9 16.1701L5.53 12.7001C5.14 12.3101 4.51 12.3101 4.12 12.7001C3.73 13.0901 3.73 13.7201 4.12 14.1101L8.3 18.2901C8.69 18.6801 9.32 18.6801 9.71 18.2901L20.29 7.71007C20.68 7.32007 20.68 6.69007 20.29 6.30007C19.9 5.91007 19.27 5.91007 18.88 6.30007L9 16.1701Z"
                                fill="#0069FF"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_191_274">
                                <rect width="24" height="24" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-span-12 lg:col-span-5 w-full flex items-end justify-center">
              <Image src={img} width="500" height="420" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div id="wave-container-bot" className={`${className} w-full h-[30px]`} />
    </div>
  );
}

export default VersionApp;
