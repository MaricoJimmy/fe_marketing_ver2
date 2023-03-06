import Image from "next/image";
import React, { useState } from "react";
import Button from "../common/Button";
import Modal from "../common/Modal";
import InfoClientForm from "./InfoClientForm";

function HeroSection({ data, isPMSPage }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 lg:col-span-7 order-last lg:order-first flex items-center justify-center">
        <div className="w-full">
          <h1 className="text-2xl md:text-4xl text-gray font-bold">
            {data.heading}
          </h1>
          <p className="mt-6 text-gray/80 text-justify font-medium leading-8">
            {data.excerpt}
          </p>
          <div className="flex items-center justify-center lg:justify-start">
            <Button
              onClick={() => setShowModal(true)}
              className={`mt-10 px-6 py-3 text-white font-semibold duration-200 ${
                data.color === "green"
                  ? "bg-primary hover:bg-secondary"
                  : "bg-orange-primary hover:bg-orange-secondary"
              }`}
            >
              Đặt lịch demo
            </Button>
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-5 h-[250px] md:h-[450px]">
        <div className="relative w-full h-full">
          <div className="hidden md:block relative w-full h-full blur-3xl">
            <div
              className={`absolute top-16 left-1/2 md:left-2/3 lg:left-1/2 w-[200px] h-[200px] rounded-full ${
                data.color === "green" ? "bg-primary/60" : "bg-orange-primary"
              }`}
            ></div>
            <div
              className={`absolute top-36 left-24 md:left-36 lg:left-24 w-[250px] h-[250px] rounded-full ${
                data.color === "green" ? "bg-primary/60" : "bg-orange-primary"
              }`}
            ></div>
          </div>
          <div className="hidden md:block absolute top-0 left-0 w-fit">
            <Image src="/image/line.png" width="500" height="500" alt="" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center">
            <Image src={data.img} width="1240" height="650" alt="" />
          </div>
        </div>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)} title="">
          <InfoClientForm
            isPMSPage={isPMSPage}
            productType={(isPMSPage && "pms") || "oee"}
          />
        </Modal>
      )}
    </div>
  );
}

export default HeroSection;
