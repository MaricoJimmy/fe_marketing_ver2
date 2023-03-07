import Image from "next/image";
import React, { useState } from "react";
import Button from "../common/Button";
import Modal from "../common/Modal";
import InfoClientForm from "./InfoClientForm";

function HeroSection({ data, isPMSPage }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className={`relative w-full flex items-center justify-center overflow-hidden ${
        data.color === "blue" ? "bg-primary" : "bg-orange-primary"
      }`}
    >
      <div className="relative z-30 grid grid-cols-12 gap-6 px-8 py-20 max-w-screen-xl w-full">
        <div className="col-span-12 lg:col-span-7 order-last lg:order-first flex items-center justify-center">
          <div className="w-full">
            <h1 className="text-2xl md:text-5xl text-white md:!leading-tight font-bold">
              {data.heading}
            </h1>
            <p className="mt-6 text-lg text-white text-justify font-medium leading-8">
              {data.excerpt}
            </p>
            <div className="flex items-center justify-center lg:justify-start">
              <Button
                onClick={() => setShowModal(true)}
                className={`mt-10 px-6 py-3 bg-white text-gray hover:text-white font-semibold duration-200 ${
                  data.color === "blue"
                    ? "hover:bg-secondary"
                    : "hover:bg-orange-secondary"
                }`}
              >
                Đặt lịch demo
              </Button>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5 h-[250px] md:h-[450px]">
          <div className="relative w-full h-full">
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
      {(data.color === "blue" && (
        <>
          <div className="absolute z-10 -right-20 -bottom-16 lg:-bottom-3 -rotate-45 opacity-80">
            <Image
              src="/image/hero/hero-2.png"
              width="280"
              height="280"
              alt=""
            />
          </div>
          <div className="absolute z-10 -left-16 -top-3 rotate-90 opacity-70">
            <Image
              src="/image/hero/hero-1.png"
              width="300"
              height="300"
              alt=""
            />
          </div>
        </>
      )) || (
        <>
          <div className="absolute z-10 -right-20 -bottom-16 lg:-bottom-10 opacity-80">
            <Image
              src="/image/hero/hero-3.png"
              width="300"
              height="300"
              alt=""
            />
          </div>
          <div className="absolute z-10 -left-16 -top-3 opacity-70">
            <Image
              src="/image/hero/hero-4.png"
              width="250"
              height="250"
              alt=""
            />
          </div>
        </>
      )}
    </div>
  );
}

export default HeroSection;
