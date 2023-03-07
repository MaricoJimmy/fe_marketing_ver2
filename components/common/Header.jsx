import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import styles from "./Header.module.css";

function Header({ isProductPage, isPMSPage }) {
  const [stickyHeader, setStickyHeader] = useState(null);

  useEffect(() => {
    const isSticky = () => {
      const scrollTop = window.scrollY;
      const stickyClass = scrollTop >= 150 ? "is-sticky" : "";
      setStickyHeader(stickyClass);
    };

    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, [stickyHeader]);

  return (
    <>
      <div className="hidden w-full lg:block relative z-40">
        <HeaderDesktop
          stickyHeader={stickyHeader}
          isProductPage={isProductPage}
          isPMSPage={isPMSPage}
        />
      </div>
      <div className="lg:hidden w-full block relative z-40">
        <HeaderMobile
          stickyHeader={stickyHeader}
          isProductPage={isProductPage}
          isPMSPage={isPMSPage}
        />
      </div>
    </>
  );
}

function HeaderDesktop({ stickyHeader, isProductPage, isPMSPage }) {
  return (
    <div
      className={`${
        (stickyHeader === "is-sticky" && "fixed top-0 drop-shadow-md") ||
        "relative"
      } flex justify-center items-center w-full bg-quaternary`}
    >
      <div className="max-w-screen-xl w-full">
        <div
          className={`${
            (stickyHeader === "is-sticky" && "py-3") || "py-6"
          } px-8 w-full flex items-center justify-between`}
        >
          <Link href="/">
            <a ariaLabel="logo">
              <Image
                src="/image/logo/logo_1.png"
                width="180"
                height="50"
                alt=""
              />
            </a>
          </Link>
          <div className="flex items-center gap-10">
            <ul className="flex items-center gap-10 cursor-pointer">
              <li>
                <Link href="/tin-tuc">
                  <a className="font-semibold text-gray hover:text-primary duration-200">
                    Tin tức
                  </a>
                </Link>
              </li>
              <li className={styles.container}>
                <div className="flex items-center font-semibold">
                  <span className="mr-2">Sản phẩm</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.01247 7.51367L10.0132 12.513L15.0125 7.51224"
                      stroke="#2e2e2e"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className={styles.subMenu}>
                  <div className="bg-white rounded drop-shadow-lg">
                    <div className="w-[160px] bg-white text-gray font-semibold rounded-t hover:bg-tertiary hover:text-primary duration-200">
                      <Link href="/san-pham/pambu-oee">
                        <a className="px-6 py-3 block w-full">Pambu OEE</a>
                      </Link>
                    </div>
                    <div className="w-[160px] bg-white text-gray font-semibold rounded-b hover:bg-tertiary hover:text-primary duration-200">
                      <Link href="/san-pham/pambu-pms">
                        <a className="px-6 py-3 block w-full">Pambu PMS</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li className={styles.container}>
                <div className="flex items-center font-semibold">
                  <span className="mr-2">Cẩm nang hướng dẫn</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.01247 7.51367L10.0132 12.513L15.0125 7.51224"
                      stroke="#2e2e2e"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className={styles.subMenu}>
                  <div className="bg-white rounded drop-shadow-lg">
                    <div className="w-[200px] bg-white text-gray font-semibold rounded-t hover:bg-tertiary hover:text-primary duration-200">
                      <Link href="/pambu-oee">
                        <a className="px-6 py-3 block w-full">
                          Tài liệu Pambu OEE
                        </a>
                      </Link>
                    </div>
                    <div className="w-[200px] bg-white text-gray font-semibold rounded-b hover:bg-tertiary hover:text-primary duration-200">
                      <Link href="/pambu-pms">
                        <a className="px-6 py-3 block w-full">
                          Tài liệu Pambu PMS
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div>
              {(isProductPage && (
                <a
                  href="tel:0387430957"
                  className={`${
                    (isPMSPage &&
                      "bg-orange-primary hover:bg-orange-secondary") ||
                    "bg-primary hover:bg-secondary"
                  } py-3 px-6 flex items-center rounded-md duration-200`}
                >
                  <svg
                    width="27"
                    height="23"
                    viewBox="0 0 27 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.67962 3.32038L7.29289 2.70711C7.68342 2.31658 8.31658 2.31658 8.70711 2.70711L11.2929 5.29289C11.6834 5.68342 11.6834 6.31658 11.2929 6.70711L9.50048 8.49952C9.2016 8.7984 9.1275 9.255 9.31653 9.63307C10.4093 11.8186 12.1814 13.5907 14.3669 14.6835C14.745 14.8725 15.2016 14.7984 15.5005 14.4995L17.2929 12.7071C17.6834 12.3166 18.3166 12.3166 18.7071 12.7071L21.2929 15.2929C21.6834 15.6834 21.6834 16.3166 21.2929 16.7071L20.6796 17.3204C18.5683 19.4317 15.2257 19.6693 12.837 17.8777L11.6286 16.9714C9.88504 15.6638 8.33622 14.115 7.02857 12.3714L6.12226 11.163C4.33072 8.7743 4.56827 5.43173 6.67962 3.32038Z"
                      fill="#fff"
                    />
                  </svg>
                  <span className="ml-2 text-lg text-white font-semibold">
                    0387 430 957
                  </span>
                </a>
              )) || (
                <Link href="/dat-lich-demo">
                  <a
                    className={`py-3 px-6 w-full bg-primary hover:bg-secondary text-white font-bold rounded-md duration-200`}
                  >
                    Đặt lịch demo
                  </a>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderMobile({ stickyHeader, isProductPage, isPMSPage }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState({
    product: true,
    document: true,
  });

  return (
    <div
      className={`${
        (stickyHeader === "is-sticky" && "fixed top-0 drop-shadow-md") ||
        "relative"
      } py-3 px-5 w-full bg-quaternary`}
    >
      <div className="flex items-center justify-between">
        <Link href="/">
          <a>
            <Image src="/image/logo/logo_3.png" width="50" height="50" alt="" />
          </a>
        </Link>
        <div>
          <Button onClick={() => setOpenMenu(!openMenu)} className="pl-2">
            <svg
              width="30"
              height="30"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.8334 12.8333H9.16671"
                stroke="#2E2E2E"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M34.8334 22H16.5"
                stroke="#2E2E2E"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M34.8334 31.1667H23.8334"
                stroke="#2E2E2E"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </Button>
        </div>
      </div>
      <>
        <div
          className={`${styles.overlay} ${!openMenu && styles.overlayHidden} ${
            openMenu && styles.overlayOpen
          }`}
          onClick={() => setOpenMenu(false)}
          aria-hidden="true"
        />
        <div
          className={`${styles.drawer} ${openMenu && styles.animate} ${
            !openMenu && styles.hidden
          }`}
        >
          <div className="w-full h-full">
            <Button
              onClick={() => setOpenMenu(!openMenu)}
              className="w-full flex items-center justify-end"
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.25 8.75L8.75 26.25"
                  stroke="#2E2E2E"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.75 8.75L26.25 26.25"
                  stroke="#2E2E2E"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
            <div className="py-8">
              <ul className="cursor-pointer">
                <li
                  onClick={() => setOpenMenu(!openMenu)}
                  className="mt-8 w-full"
                >
                  <Link href="/tin-tuc">
                    <a className="block w-full font-semibold text-gray hover:text-primary duration-200">
                      Tin tức
                    </a>
                  </Link>
                </li>
                <li className="mt-8 w-full">
                  <div
                    onClick={() =>
                      setOpenSubMenu({
                        ...openSubMenu,
                        product: !openSubMenu.product,
                      })
                    }
                    className="flex items-center font-semibold"
                  >
                    <span className="mr-2">Sản phẩm</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.01247 7.51367L10.0132 12.513L15.0125 7.51224"
                        stroke="#2e2e2e"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div
                    className={`${
                      (openSubMenu.product && "translate-y-0 block") ||
                      "-translate-y-1/4 hidden"
                    } duration-200 ml-6 mt-6`}
                  >
                    <div
                      onClick={() => setOpenMenu(!openMenu)}
                      className="text-gray font-semibold hover:text-primary duration-200"
                    >
                      <Link href="/san-pham/pambu-oee">
                        <a className="block w-full">Pambu OEE</a>
                      </Link>
                    </div>
                    <div
                      onClick={() => setOpenMenu(!openMenu)}
                      className="mt-6 text-gray font-semibold hover:text-primary duration-200"
                    >
                      <Link href="/san-pham/pambu-pms">
                        <a className="block w-full">Pambu PMS</a>
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="mt-8 w-full">
                  <div
                    onClick={() =>
                      setOpenSubMenu({
                        ...openSubMenu,
                        document: !openSubMenu.document,
                      })
                    }
                    className="w-full flex items-center font-semibold"
                  >
                    <span className="mr-2">Cẩm nang hướng dẫn</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.01247 7.51367L10.0132 12.513L15.0125 7.51224"
                        stroke="#2e2e2e"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div
                    className={`${
                      (openSubMenu.document && "translate-y-0 block") ||
                      "-translate-y-1/4 hidden"
                    } duration-200 ml-6 mt-6`}
                  >
                    <div
                      onClick={() => setOpenMenu(!openMenu)}
                      className="text-gray font-semibold hover:text-primary duration-200"
                    >
                      <Link href="/pambu-oee">
                        <a className="block w-full">Tài liệu Pambu OEE</a>
                      </Link>
                    </div>
                    <div
                      onClick={() => setOpenMenu(!openMenu)}
                      className="mt-6 text-gray font-semibold hover:text-primary duration-200"
                    >
                      <Link href="/pambu-pms">
                        <a className="block w-full">Tài liệu Pambu PMS</a>
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="mt-10">
                {(isProductPage && (
                  <a
                    onClick={() => setOpenMenu(!openMenu)}
                    href="tel:0387430957"
                    className={`${
                      (isPMSPage &&
                        "bg-orange-primary hover:bg-orange-secondary") ||
                      "bg-primary hover:bg-secondary"
                    } py-3 px-6 flex items-center justify-center rounded-md duration-200`}
                  >
                    <svg
                      width="27"
                      height="23"
                      viewBox="0 0 27 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.67962 3.32038L7.29289 2.70711C7.68342 2.31658 8.31658 2.31658 8.70711 2.70711L11.2929 5.29289C11.6834 5.68342 11.6834 6.31658 11.2929 6.70711L9.50048 8.49952C9.2016 8.7984 9.1275 9.255 9.31653 9.63307C10.4093 11.8186 12.1814 13.5907 14.3669 14.6835C14.745 14.8725 15.2016 14.7984 15.5005 14.4995L17.2929 12.7071C17.6834 12.3166 18.3166 12.3166 18.7071 12.7071L21.2929 15.2929C21.6834 15.6834 21.6834 16.3166 21.2929 16.7071L20.6796 17.3204C18.5683 19.4317 15.2257 19.6693 12.837 17.8777L11.6286 16.9714C9.88504 15.6638 8.33622 14.115 7.02857 12.3714L6.12226 11.163C4.33072 8.7743 4.56827 5.43173 6.67962 3.32038Z"
                        fill="#fff"
                      />
                    </svg>
                    <span className="ml-2 text-lg text-white font-semibold">
                      0387 430 957
                    </span>
                  </a>
                )) || (
                  <Link href="/dat-lich-demo">
                    <a
                      onClick={() => setOpenMenu(!openMenu)}
                      className={`py-3 px-6 block w-full bg-primary hover:bg-secondary text-white text-center font-bold rounded-md duration-200`}
                    >
                      Đặt lịch demo
                    </a>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Header;
