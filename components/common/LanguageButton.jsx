import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";

function LanguageButton() {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const router = useRouter();
  const wrapperRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpenDropdown(false);
      }
    }
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [wrapperRef]);
  return (
    <div ref={wrapperRef} className="relative w-fit">
      <Button
        onClick={() => setIsOpenDropdown((prev) => !prev)}
        className="py-1 px-2 text-black bg-quaternary font-medium rounded-lg border border-gray/30 text-sm text-center flex items-center justify-between"
      >
        {(router.locale === "vi" && (
          <Image src="/image/vietnam-flag.png" width="24" height="24" alt="" />
        )) || (
          <Image src="/image/england-flag.png" width="24" height="24" alt="" />
        )}
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </Button>

      {isOpenDropdown && (
        <div className="absolute top-full left-0 bg-quaternary divide-y divide-gray-100 rounded-lg shadow w-full">
          <ul className="text-sm text-gray-700">
            <li
              onClick={() => {
                setIsOpenDropdown(false);
                router.push(
                  {
                    pathname: router.pathname,
                    query: router.query,
                  },
                  null,
                  { locale: "vi" }
                );
              }}
              className="cursor-pointer"
            >
              <div className="flex justify-center p-2 hover:bg-gray-100 ">
                <Image
                  src="/image/vietnam-flag.png"
                  width="24"
                  height="24"
                  alt=""
                />
              </div>
            </li>
            <li
              onClick={() => {
                setIsOpenDropdown(false);
                router.push(
                  {
                    pathname: router.pathname,
                    query: router.query,
                  },
                  null,
                  { locale: "en" }
                );
              }}
              className="cursor-pointer"
            >
              <div className="flex justify-center p-2 hover:bg-gray-100">
                <Image
                  src="/image/england-flag.png"
                  width="24"
                  height="24"
                  alt=""
                />
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default LanguageButton;
