import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <>
      <div className="hidden lg:block">
        <FooterDesktop />
      </div>
      <div className="block lg:hidden">
        <FooterMobile />
      </div>
    </>
  );
}

function FooterDesktop() {
  const t = useTranslations("Footer");
  return (
    <div className="w-full border-t border-gray/20">
      <div className="w-full flex justify-center items-center">
        <div className="px-5 py-3 md:px-8 md:py-16  max-w-screen-xl w-full">
          <div className="grid grid-cols-4 gap-6">
            <div className="col-span-1 flex flex-col justify-between">
              <Link href="/">
                <a aria-label="logo">
                  <Image
                    src="/image/logo/logo_1.png"
                    width="180"
                    height="50"
                    alt=""
                  />
                </a>
              </Link>
              <span className="text-lg text-gray/60 font-semibold">
                Copyright @ 2022 Pambu.org
              </span>
            </div>
            <div className="col-span-1">
              <h4 className="text-2xl text-gray font-bold">
                {t("section.first.title")}
              </h4>
              <ul className="mt-8 flex flex-col items-start gap-6 cursor-pointer">
                <li className="w-full">
                  <Link href="/tin-tuc">
                    <a
                      className="block w-full text-gray/80 font-semibold hover:text-primary duration-200"
                      aria-label="Tin tức"
                    >
                      {t("section.first.links.news")}
                    </a>
                  </Link>
                </li>
                <li className="w-full">
                  <div className="text-gray/80 font-semibold hover:text-primary duration-200">
                    <Link href="/san-pham/pambu-oee">
                      <a className="block w-full" aria-label="Pambu OEE">
                        Pambu OEE
                      </a>
                    </Link>
                  </div>
                  <div className="mt-6 text-gray/80 font-semibold hover:text-primary duration-200">
                    <Link href="/san-pham/pambu-pms">
                      <a className="block w-full" aria-label="Pambu PMS">
                        Pambu PMS
                      </a>
                    </Link>
                  </div>
                </li>
                <li className="w-full">
                  <div className="text-gray/80 font-semibold hover:text-primary duration-200">
                    <Link href="/pambu-oee">
                      <a
                        className="block w-full"
                        aria-label="Tài liệu Pambu OEE"
                      >
                        {t("section.first.links.oee")}
                      </a>
                    </Link>
                  </div>
                  <div className="mt-6 text-gray/80 font-semibold hover:text-primary duration-200">
                    <Link href="/pambu-pms">
                      <a
                        className="block w-full"
                        aria-label="Tài liệu Pambu PMS"
                      >
                        {t("section.first.links.pms")}
                      </a>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h4 className="text-2xl text-gray font-bold">
                {t("section.second.title")}
              </h4>
              <ul className="mt-8 flex flex-col items-start gap-6 cursor-pointer">
                <li className="flex items-center justify-center">
                  <svg
                    width="27"
                    height="23"
                    viewBox="0 0 27 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.67962 3.32038L7.29289 2.70711C7.68342 2.31658 8.31658 2.31658 8.70711 2.70711L11.2929 5.29289C11.6834 5.68342 11.6834 6.31658 11.2929 6.70711L9.50048 8.49952C9.2016 8.7984 9.1275 9.255 9.31653 9.63307C10.4093 11.8186 12.1814 13.5907 14.3669 14.6835C14.745 14.8725 15.2016 14.7984 15.5005 14.4995L17.2929 12.7071C17.6834 12.3166 18.3166 12.3166 18.7071 12.7071L21.2929 15.2929C21.6834 15.6834 21.6834 16.3166 21.2929 16.7071L20.6796 17.3204C18.5683 19.4317 15.2257 19.6693 12.837 17.8777L11.6286 16.9714C9.88504 15.6638 8.33622 14.115 7.02857 12.3714L6.12226 11.163C4.33072 8.7743 4.56827 5.43173 6.67962 3.32038Z"
                      fill="#0069FF"
                    />
                  </svg>
                  <a
                    href="tel:0974074862"
                    className="ml-2 text-gray/80 font-semibold"
                  >
                    0974 074 862
                  </a>
                </li>
                <li className="flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.87868 5.87868C3 6.75736 3 8.17157 3 11V13C3 15.8284 3 17.2426 3.87868 18.1213C4.75736 19 6.17157 19 9 19H15C17.8284 19 19.2426 19 20.1213 18.1213C21 17.2426 21 15.8284 21 13V11C21 8.17157 21 6.75736 20.1213 5.87868C19.2426 5 17.8284 5 15 5H9C6.17157 5 4.75736 5 3.87868 5.87868ZM6.5547 8.16795C6.09517 7.8616 5.4743 7.98577 5.16795 8.4453C4.8616 8.90483 4.98577 9.5257 5.4453 9.83205L10.8906 13.4622C11.5624 13.9101 12.4376 13.9101 13.1094 13.4622L18.5547 9.83205C19.0142 9.5257 19.1384 8.90483 18.8321 8.4453C18.5257 7.98577 17.9048 7.8616 17.4453 8.16795L12 11.7982L6.5547 8.16795Z"
                      fill="#0069FF"
                    />
                  </svg>
                  <a
                    href="mailto:pambu@DHG.asia"
                    className="ml-2 text-gray/80 font-semibold"
                  >
                    pambu@DHG.asia
                  </a>
                </li>
                <li className="flex items-center justify-center">
                  <div>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.398 19.804C13.881 19.0348 19 16.0163 19 11C19 7.13401 15.866 4 12 4C8.13401 4 5 7.13401 5 11C5 16.0163 10.119 19.0348 11.602 19.804C11.8548 19.9351 12.1452 19.9351 12.398 19.804ZM12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z"
                        fill="#0069FF"
                      />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray/80 font-semibold">
                    {t("section.second.address")}
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h4 className="text-2xl text-gray font-bold">
                {t("section.third.title")}
              </h4>
              <p
                className="mt-8 text-gray/80 font-semibold"
                dangerouslySetInnerHTML={{
                  __html: t.raw("section.third.time"),
                }}
              ></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterMobile() {
  return (
    <div className="w-full border-t border-gray/20">
      <div className="w-full flex justify-center items-center">
        <div className="px-5 py-10 md:px-8 md:py-6 max-w-screen-xl w-full">
          <div className="w-full">
            <div className="grid grid-cols-4 gap-6">
              <div className="col-span-4">
                <Link href="/">
                  <a aria-label="logo">
                    <Image
                      src="/image/logo/logo_1.png"
                      width="180"
                      height="50"
                      alt=""
                    />
                  </a>
                </Link>
              </div>
              <div className="col-span-4">
                <h4 className="text-2xl text-gray font-bold">
                  Đường dẫn nhanh
                </h4>
                <ul className="mt-6 cursor-pointer">
                  <li className="w-full">
                    <Link href="/tin-tuc">
                      <a
                        aria-label="tin tuc"
                        className="block w-full text-gray/80 font-semibold hover:text-primary duration-200"
                      >
                        Tin tức
                      </a>
                    </Link>
                  </li>
                  <li className="mt-6 w-full">
                    <div className="text-gray/80 font-semibold hover:text-primary duration-200">
                      <Link href="/san-pham/pambu-oee">
                        <a className="block w-full" aria-label="pambu oee">
                          Pambu OEE
                        </a>
                      </Link>
                    </div>
                    <div className="mt-6 text-gray/80 font-semibold hover:text-primary duration-200">
                      <Link href="/san-pham/pambu-pms">
                        <a className="block w-full" aria-label="pambu pms">
                          Pambu PMS
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li className="mt-6 w-full">
                    <div className="text-gray/80 font-semibold hover:text-primary duration-200">
                      <Link href="/pambu-oee">
                        <a
                          className="block w-full"
                          aria-label="Tài liệu Pambu OEE"
                        >
                          Tài liệu Pambu OEE
                        </a>
                      </Link>
                    </div>
                    <div className="mt-6 text-gray/80 font-semibold hover:text-primary duration-200">
                      <Link href="/pambu-pms">
                        <a
                          className="block w-full"
                          aria-label="Tài liệu Pambu PMS"
                        >
                          Tài liệu Pambu PMS
                        </a>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-span-4">
                <h4 className="text-2xl text-gray font-bold">
                  Thông tin liên hệ
                </h4>
                <ul className="mt-6 cursor-pointer">
                  <li className="flex items-center justify-start">
                    <svg
                      width="27"
                      height="23"
                      viewBox="0 0 27 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.67962 3.32038L7.29289 2.70711C7.68342 2.31658 8.31658 2.31658 8.70711 2.70711L11.2929 5.29289C11.6834 5.68342 11.6834 6.31658 11.2929 6.70711L9.50048 8.49952C9.2016 8.7984 9.1275 9.255 9.31653 9.63307C10.4093 11.8186 12.1814 13.5907 14.3669 14.6835C14.745 14.8725 15.2016 14.7984 15.5005 14.4995L17.2929 12.7071C17.6834 12.3166 18.3166 12.3166 18.7071 12.7071L21.2929 15.2929C21.6834 15.6834 21.6834 16.3166 21.2929 16.7071L20.6796 17.3204C18.5683 19.4317 15.2257 19.6693 12.837 17.8777L11.6286 16.9714C9.88504 15.6638 8.33622 14.115 7.02857 12.3714L6.12226 11.163C4.33072 8.7743 4.56827 5.43173 6.67962 3.32038Z"
                        fill="#0069FF"
                      />
                    </svg>
                    <a
                      href="tel:0387430957"
                      className="ml-2 text-gray/80 font-semibold"
                    >
                      0387430957
                    </a>
                  </li>
                  <li className="mt-6 flex items-center justify-start">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.87868 5.87868C3 6.75736 3 8.17157 3 11V13C3 15.8284 3 17.2426 3.87868 18.1213C4.75736 19 6.17157 19 9 19H15C17.8284 19 19.2426 19 20.1213 18.1213C21 17.2426 21 15.8284 21 13V11C21 8.17157 21 6.75736 20.1213 5.87868C19.2426 5 17.8284 5 15 5H9C6.17157 5 4.75736 5 3.87868 5.87868ZM6.5547 8.16795C6.09517 7.8616 5.4743 7.98577 5.16795 8.4453C4.8616 8.90483 4.98577 9.5257 5.4453 9.83205L10.8906 13.4622C11.5624 13.9101 12.4376 13.9101 13.1094 13.4622L18.5547 9.83205C19.0142 9.5257 19.1384 8.90483 18.8321 8.4453C18.5257 7.98577 17.9048 7.8616 17.4453 8.16795L12 11.7982L6.5547 8.16795Z"
                        fill="#0069FF"
                      />
                    </svg>
                    <a
                      href="mailto:pambu@DHG.asia"
                      className=" ml-2 text-gray/80 font-semibold"
                    >
                      pambu@DHG.asia
                    </a>
                  </li>
                  <li className="mt-6 flex items-center justify-start">
                    <div>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.398 19.804C13.881 19.0348 19 16.0163 19 11C19 7.13401 15.866 4 12 4C8.13401 4 5 7.13401 5 11C5 16.0163 10.119 19.0348 11.602 19.804C11.8548 19.9351 12.1452 19.9351 12.398 19.804ZM12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z"
                          fill="#0069FF"
                        />
                      </svg>
                    </div>
                    <span className="ml-2 text-gray/80 font-semibold">
                      Ô số 24, lô V5A – Khu nhà ở thấp tầng, khu đô thị mới Văn
                      Phú , Phường Phú La, Quận Hà Đông, Thành phố Hà Nội, Việt
                      Nam
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-span-4">
                <h4 className="text-2xl text-gray font-bold">Giờ làm việc</h4>
                <p className="mt-6 text-gray/80 font-semibold">
                  Thứ Hai - Thứ Sáu: 8:00 - 17:30 <br />
                  Thứ Bảy: 8:00 - 12:00
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-center">
              <span className="text-gray/60 font-semibold">
                Copyright @ 2022 Pambu.org
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
