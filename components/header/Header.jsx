import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "../common/Button";
import styles from "./Header.module.css";
import LanguageButton from "../common/LanguageButton";
import { useTranslations } from "next-intl";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import MenuItem from "./MenuItem";
import {
  ROUTER_ABOUT_US,
  ROUTER_BLOG,
  ROUTER_CAREER,
  ROUTER_CASE_STUDY,
  ROUTER_CONTACT,
  ROUTER_FISHERIES,
  ROUTER_INTERGRATE,
  ROUTER_INVESTORS,
  ROUTER_MANAGERS,
  ROUTER_OPERATORS,
  ROUTER_PMS,
  ROUTER_SAAS,
  ROUTER_SOLAR,
} from "@/utils/constant";
import { useRouter } from "next/router";

function Header({ isProductPage, isPMSPage }) {
  const { locale } = useRouter();
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
      <div className="hidden w-full tabletLG:block relative z-40">
        <HeaderDesktop {...{ locale, stickyHeader }} />
      </div>
      <div className="tabletLG:hidden w-full block relative z-40">
        <HeaderMobile {...{ locale, stickyHeader }} />
      </div>
    </>
  );
}

function HeaderDesktop({ stickyHeader, locale }) {
  const t = useTranslations("Header");
  return (
    <div
      className={`${
        (stickyHeader === "is-sticky" && "fixed top-0 drop-shadow-md") ||
        "relative"
      } flex justify-center items-center w-full bg-white border-b border-gray/10 `}
    >
      <div className="w-full">
        <div className={`py-3 px-8 w-full flex items-center justify-between`}>
          <div className="flex items-center gap-5">
            <Link href="/">
              <a aria-label="logo" className="flex items-center">
                <Image
                  src="/image/logo/logo_1.png"
                  width="150"
                  height="40"
                  alt=""
                />
              </a>
            </Link>
            <div>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem className="hover:bg-neutral/5 hover:text-primary rounded-md">
                    <NavigationMenuTrigger className="text-base font-medium">
                      {t("products.title")}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="min-w-[340px] p-2 border-none list-none">
                        {/* <MenuItem title="Udata PMS" href={ROUTER_PMS}>
                          {t("products.subMenus.pms")}
                        </MenuItem> */}
                        <MenuItem
                          title="Tích hợp dữ liệu"
                          href={ROUTER_INTERGRATE}
                        >
                          Mở khóa dữ liệu của bạn với Udata
                        </MenuItem>
                        <MenuItem title="Nền tảng SaaS" href={ROUTER_SAAS}>
                          Nền tảng dịch vụ phần mềm trên SaaS
                        </MenuItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="hover:bg-neutral/5 hover:text-primary rounded-md">
                    <NavigationMenuTrigger className="text-base font-medium">
                      {t("solutions.title")}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="flex items-center">
                        <div className="p-4">
                          <h3 className="text-neutral text-base font-semibold">
                            Theo đối tượng
                          </h3>
                          <ul className="mt-2 min-w-[340px] border-none list-none">
                            <MenuItem
                              title="Chủ đầu tư - Quản lý cấp cao"
                              href={ROUTER_INVESTORS}
                            >
                              Giải pháp cho Chủ đầu tư - Quản lý cấp cao
                            </MenuItem>
                            <MenuItem
                              title="Cấp quản lý"
                              href={ROUTER_MANAGERS}
                            >
                              Giải pháp cho Cấp quản lý
                            </MenuItem>
                            <MenuItem
                              title="Cấp vận hành"
                              href={ROUTER_OPERATORS}
                            >
                              Giải pháp cho Cấp vận hành
                            </MenuItem>
                          </ul>
                        </div>
                        <div className="p-4">
                          <h3 className="text-neutral text-base font-semibold">
                            Theo lĩnh vực
                          </h3>
                          <ul className="mt-2 min-w-[340px] border-none list-none">
                            <MenuItem title="Solar Rooftop" href={ROUTER_SOLAR}>
                              {t("solutions.subMenus.solar")}
                            </MenuItem>
                            <MenuItem title="Nhà máy" href={"/"}>
                              Giải pháp cho nhà máy công nghiệp
                            </MenuItem>
                            <MenuItem title="Thủy sản" href={ROUTER_FISHERIES}>
                              Giải pháp cho nuôi trồng thủy sản
                            </MenuItem>
                          </ul>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="hover:bg-neutral/5 hover:text-primary rounded-md">
                    <NavigationMenuTrigger className="text-base font-medium">
                      {t("news.title")}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul
                        className={`${
                          locale === "vi" ? "min-w-[340px]" : "min-w-[400px]"
                        }  p-2 border-none list-none`}
                      >
                        <MenuItem title="Case study" href={ROUTER_CASE_STUDY}>
                          {t("news.subMenus.case-study")}
                        </MenuItem>
                        <MenuItem title="Blog" href={ROUTER_BLOG}>
                          {t("news.subMenus.blog")}
                        </MenuItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href={ROUTER_CONTACT} legacyBehavior passHref>
                      <NavigationMenuLink className="px-4 py-2 bg-transparent hover:bg-neutral/5 hover:text-primary text-base font-medium rounded-md">
                        {t("contact")}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href={ROUTER_ABOUT_US} legacyBehavior passHref>
                      <NavigationMenuLink className="px-4 py-2 bg-transparent hover:bg-neutral/5 hover:text-primary text-base font-medium rounded-md">
                        {t("about-us")}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  {/* <NavigationMenuItem>
                    <Link href={ROUTER_CAREER} legacyBehavior passHref>
                      <NavigationMenuLink className="px-4 py-2 bg-transparent hover:bg-neutral/5 hover:text-primary text-base font-medium rounded-md">
                        {t("career")}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem> */}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <LanguageButton />
            <div>
              <Link href={ROUTER_CONTACT}>
                <a
                  className={`py-3 px-6 w-full bg-white text-neutral border-2 border-primary font-medium rounded-md`}
                >
                  {t("bookDemo")}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderMobile({ stickyHeader, isProductPage, isPMSPage }) {
  const t = useTranslations("Header");
  const [openMenu, setOpenMenu] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState({
    product: true,
    solution: true,
    blog: true,
  });

  const listMenu = [
    {
      id: "product",
      menu: t("products.title"),
      subMenu: [
        // {
        //   title: "Udata PMS",
        //   href: ROUTER_PMS,
        // },
        {
          title: "Tích hợp dữ liệu",
          href: ROUTER_INTERGRATE,
        },
        {
          title: "Nền tảng SaaS",
          href: ROUTER_SAAS,
        },
      ],
      multiMenu: false,
    },
    {
      id: "solution",
      menu: t("solutions.title"),
      subMenu: [
        {
          title: "Theo đối tượng",
          menus: [
            {
              title: "Chủ đầu tư - Quản lý cấp cao",
              href: ROUTER_INVESTORS,
            },
            {
              title: "Cấp quản lý",
              href: ROUTER_MANAGERS,
            },
            {
              title: "Cấp vận hành",
              href: ROUTER_OPERATORS,
            },
          ],
        },
        {
          title: "Theo lĩnh vực",
          menus: [
            {
              title: "Solar rooftop",
              href: ROUTER_SOLAR,
            },
            {
              title: "Nhà máy",
              href: "/",
            },
            {
              title: "Thủy sản",
              href: ROUTER_FISHERIES,
            },
          ],
        },
      ],
      multiMenu: true,
    },
    {
      id: "blog",
      menu: t("news.title"),
      subMenu: [
        {
          title: "Case study",
          href: ROUTER_CASE_STUDY,
        },
        {
          title: "Blog",
          href: ROUTER_BLOG,
        },
      ],
      multiMenu: false,
    },
    {
      id: "contact",
      menu: t("contact"),
      href: ROUTER_CONTACT,
      subMenu: null,
      multiMenu: false,
    },
    {
      id: "about-us",
      menu: t("about-us"),
      href: ROUTER_ABOUT_US,
      subMenu: null,
      multiMenu: false,
    },
  ];

  return (
    <div
      className={`${
        (stickyHeader === "is-sticky" &&
          "fixed top-0 drop-shadow-md bg-white") ||
        "relative"
      } py-3 px-5 w-full bg-quaternary`}
    >
      <div className="flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center">
            <Image
              src="/image/logo/logo_1.png"
              width="110"
              height="30"
              alt=""
            />
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
            <div className="flex items-center justify-between">
              <LanguageButton />
              <div>
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
              </div>
            </div>
            <div className="py-8">
              <ul className="cursor-pointer">
                {listMenu.map((menu) => (
                  <li key={menu.id} className="mt-8 w-full">
                    <div
                      onClick={() => {
                        if (menu.subMenu) {
                          setOpenSubMenu((prev) => ({
                            ...prev,
                            [menu.id]: !prev[menu.id],
                          }));
                        } else {
                          setOpenMenu((prev) => !prev);
                        }
                      }}
                      className="flex items-center font-semibold"
                    >
                      {menu.subMenu ? (
                        <>
                          <span className="mr-2">{menu.menu}</span>
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
                        </>
                      ) : (
                        <Link href={menu.href}>
                          <a className="block w-full font-semibold text-gray hover:text-primary duration-200">
                            {menu.menu}
                          </a>
                        </Link>
                      )}
                    </div>
                    {menu.subMenu ? (
                      <div
                        className={`${
                          (openSubMenu[menu.id] && "translate-y-0 block") ||
                          "-translate-y-1/4 hidden"
                        } duration-200 ml-4 mt-6`}
                      >
                        {menu.subMenu.map((subMenu) => (
                          <div
                            key={subMenu.title}
                            onClick={() => setOpenMenu((prev) => !prev)}
                            className="mt-6"
                          >
                            {menu.multiMenu ? (
                              <div>
                                <h4 className="text-neutral font-bold">
                                  {subMenu.title}
                                </h4>
                                <ul className="mt-2 ml-4 flex flex-col space-y-2">
                                  {subMenu.menus.map((item) => (
                                    <li key={item.title}>
                                      <Link href={item.href}>
                                        <a className="block w-full text-gray font-semibold hover:text-primary duration-200">
                                          {item.title}
                                        </a>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ) : (
                              <Link href={subMenu.href} className=" ">
                                <a className="block w-full text-gray font-semibold hover:text-primary duration-200">
                                  {subMenu.title}
                                </a>
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </li>
                ))}
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
                  <Link href={ROUTER_CONTACT}>
                    <a
                      onClick={() => setOpenMenu(!openMenu)}
                      className={`py-3 px-6 block w-full bg-primary hover:bg-secondary text-white text-center font-bold rounded-md duration-200`}
                    >
                      {t("bookDemo")}
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
