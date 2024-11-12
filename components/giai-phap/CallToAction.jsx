import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/router";
import { ROUTER_CONTACT } from "@/utils/constant";

function CallToAction({ data }) {
  const router = useRouter();
  return (
    <div className="w-full flex items-center justify-center">
      <div className="lg:px-20 lg:py-24 md:px-10 md:py-14 px-4 py-8 w-full max-w-screen-xl">
        <div className="lg:px-14 lg:py-16 px-4 py-10 w-full h-fit flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-infor/80 to-primary/80 rounded-lg shadow-xl">
          <h2 className="text-center text-white text-3xl font-semibold">
            {data.title}
          </h2>
          <h5 className="text-center text-white text-base font-medium">
            {data.content}
          </h5>
          <Button
            variant="secondary"
            size="lg"
            className="shadow-md hover:shadow-lg transition-all"
            onClick={() => router.push(ROUTER_CONTACT)}
          >
            {data.button}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
