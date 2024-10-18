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
          <div className="flex-1 flex flex-col justify-center items-center">
            <div>
              <Image
                src="/image/logo/logo.svg"
                width="500"
                height="120"
                alt=""
              />
            </div>
            <h1 className="mt-2 md:text-2xl text-lg text-center text-gray font-semibold">
              See you in November.
            </h1>
          </div>
        </div>
      </>
    );
  }

  return <>{children}</>;
}

export default MaintenanceLayout;
