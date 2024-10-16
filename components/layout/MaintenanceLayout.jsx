import Image from "next/image";
import React from "react";
import PageSeoHead from "../common/PageSeoHead";

function MaintenanceLayout({ children }) {
  const isMaintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";

  const metaData = {
    title: "Coming soon | Udata",
    desc: "Coming soon",
    img: "/image/logo/logo_1.png",
  };

  if (isMaintenanceMode) {
    return (
      <>
        <PageSeoHead data={metaData} />
        <div className="p-6 w-screen h-screen flex flex-col items-center justify-center">
          <div>
            <Image
              src="/image/logo/logo_1.png"
              width="150"
              height="40"
              alt=""
            />
          </div>
          <div className="flex-1 flex flex-col justify-center items-center">
            <div>
              <Image
                src="/image/coming-soon.svg"
                width="500"
                height="300"
                alt=""
              />
            </div>
            <h1 className="lg:text-6xl text-5xl text-center bg-gradient-to-br from-[#02D2DA] to-[#0B32EF] text-transparent bg-clip-text !leading-snug font-bold">
              Coming soon
            </h1>
            <p className="mt-2 lg:max-w-[450px] text-base text-gray font-medium text-center">
              Website hiện đang trong giai đoạn phát triển. Chúng tôi sẽ trở lại
              vào tháng 11!
            </p>
          </div>
        </div>
      </>
    );
  }

  return <>{children}</>;
}

export default MaintenanceLayout;
