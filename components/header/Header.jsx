import { getLocalizedPath, normalizePath } from "@/utils";
import {
  ROUTER_ABOUT_US,
  ROUTER_AI_ASSISTANT,
  ROUTER_AI_BUSINESS,
  ROUTER_BLOG,
  ROUTER_CAREER,
  ROUTER_CONTACT,
  ROUTER_ELEVATOR,
  ROUTER_EMS,
  ROUTER_GHG,
  ROUTER_NOTIFICATION,
  ROUTER_OEE,
  ROUTER_SOLAR,
  ROUTER_UBOARD,
  ROUTER_UGATE,
  ROUTER_UZERO,
} from "@/utils/constant";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from "../common/Button";
import LanguageButton from "../common/LanguageButton";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import styles from "./Header.module.css";
import MenuItem from "./MenuItem";

function Header() {
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

  const { asPath } = useRouter();

  const currentPath = normalizePath(asPath);

  const isActiveLink = (href) => {
    const target = normalizePath(getLocalizedPath(href, locale));
    return currentPath === target;
  };

  // active cho nhóm (Products / Solutions / News) nếu path hiện tại bắt đầu bằng bất kỳ item con
  const isGroupActive = (items) => {
    return items.some(({ href }) => {
      const target = normalizePath(getLocalizedPath(href, locale));
      return currentPath === target || currentPath.startsWith(target + "/");
    });
  };

  const triggerBase =
    "text-base font-medium rounded-md px-4 py-2 transition-colors";
  const triggerActive = "text-primary bg-neutral/5 ring-1 ring-primary/20";
  const linkBase =
    "px-4 py-2 bg-transparent hover:bg-neutral/5 hover:text-primary text-base font-medium rounded-md transition-colors";
  const linkActive = "text-primary bg-neutral/5 ring-1 ring-primary/20";

  const listMenus = {
    products: [
      { title: "Uboard", href: ROUTER_UBOARD },
      { title: "Ugate", href: ROUTER_UGATE },
      { title: "Uzero", href: ROUTER_UZERO },
    ],
    solutions: [
      { title: t("solutions.solar"), href: ROUTER_SOLAR },
      { title: t("solutions.elevator"), href: ROUTER_ELEVATOR },
      { title: t("solutions.oee"), href: ROUTER_OEE },
      { title: t("solutions.ems"), href: ROUTER_EMS },
      { title: t("solutions.ghg"), href: ROUTER_GHG },
      { title: t("solutions.aiForBusiness"), href: ROUTER_AI_BUSINESS },
      { title: t("solutions.aiForAssistant"), href: ROUTER_AI_ASSISTANT },
    ],
    news: [
      { title: t("news.notification"), href: ROUTER_NOTIFICATION },
      { title: t("news.blog"), href: ROUTER_BLOG },
    ],
  };
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
              <a aria-label="logo" title="Logo" className="flex items-center">
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
                    <NavigationMenuTrigger
                      className={`${triggerBase} ${
                        isGroupActive(listMenus.products) ? triggerActive : ""
                      }`}
                      aria-current={
                        isGroupActive(listMenus.products) ? "page" : undefined
                      }
                    >
                      {t("products.title")}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="min-w-[340px] p-2 border-none list-none">
                        {listMenus.products.map((menu) => (
                          <MenuItem
                            key={menu.title}
                            title={menu.title}
                            href={getLocalizedPath(menu.href, locale)}
                            isActive={isActiveLink(menu.href)}
                          />
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="hover:bg-neutral/5 hover:text-primary rounded-md">
                    <NavigationMenuTrigger
                      className={`${triggerBase} ${
                        isGroupActive(listMenus.solutions) ? triggerActive : ""
                      }`}
                      aria-current={
                        isGroupActive(listMenus.solutions) ? "page" : undefined
                      }
                    >
                      {t("solutions.title")}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="min-w-[340px] p-2 border-none list-none">
                        {listMenus.solutions.map((menu) => (
                          <MenuItem
                            key={menu.title}
                            title={menu.title}
                            href={getLocalizedPath(menu.href, locale)}
                            isActive={isActiveLink(menu.href)}
                          />
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="hover:bg-neutral/5 hover:text-primary rounded-md">
                    <NavigationMenuTrigger
                      className={`${triggerBase} ${
                        isGroupActive(listMenus.news) ? triggerActive : ""
                      }`}
                      aria-current={
                        isGroupActive(listMenus.news) ? "page" : undefined
                      }
                    >
                      {t("news.title")}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul
                        className={`${
                          locale === "vi" ? "min-w-[340px]" : "min-w-[400px]"
                        }  p-2 border-none list-none`}
                      >
                        {listMenus.news.map((menu) => (
                          <MenuItem
                            key={menu.title}
                            title={menu.title}
                            href={getLocalizedPath(menu.href, locale)}
                            isActive={isActiveLink(menu.href)}
                          />
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link
                      href={getLocalizedPath(ROUTER_ABOUT_US, locale)}
                      legacyBehavior
                      passHref
                    >
                      <NavigationMenuLink
                        className={`${linkBase} ${
                          isActiveLink(ROUTER_ABOUT_US) ? linkActive : ""
                        }`}
                        aria-current={
                          isActiveLink(ROUTER_ABOUT_US) ? "page" : undefined
                        }
                      >
                        {t("about-us")}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link
                      href={getLocalizedPath(ROUTER_CONTACT, locale)}
                      legacyBehavior
                      passHref
                    >
                      <NavigationMenuLink
                        className={`${linkBase} ${
                          isActiveLink(ROUTER_CONTACT) ? linkActive : ""
                        }`}
                        aria-current={
                          isActiveLink(ROUTER_CONTACT) ? "page" : undefined
                        }
                      >
                        {t("contact")}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link
                      href={getLocalizedPath(ROUTER_CAREER, locale)}
                      legacyBehavior
                      passHref
                    >
                      <NavigationMenuLink
                        className={`${linkBase} ${
                          isActiveLink(ROUTER_CAREER) ? linkActive : ""
                        }`}
                        aria-current={
                          isActiveLink(ROUTER_CAREER) ? "page" : undefined
                        }
                      >
                        {t("career")}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <LanguageButton />
            <div>
              <Link href={ROUTER_CONTACT}>
                <a
                  title="Free trial"
                  className={`py-2 px-6 w-full overflow-hidden block relative group bg-white border-2 border-primary font-medium rounded-md`}
                >
                  <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-primary top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                  <span className="relative transition duration-300 text-neutral group-hover:text-white ease">
                    {t("bookDemo")}
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderMobile({ stickyHeader, locale }) {
  const t = useTranslations("Header");
  const { asPath } = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState({
    product: true,
    solution: true,
    blog: true,
  });

  const currentPath = normalizePath(asPath);

  const isActiveLink = (href) => {
    const target = normalizePath(getLocalizedPath(href, locale));
    return currentPath === target || currentPath.startsWith(target + "/");
  };

  const listMenu = [
    {
      id: "product",
      menu: t("products.title"),
      subMenu: [
        {
          title: "Uboard",
          href: ROUTER_UBOARD,
        },
        {
          title: "Ugate",
          href: ROUTER_UGATE,
        },
        {
          title: "Uzero",
          href: ROUTER_UZERO,
        },
      ],
      multiMenu: false,
    },
    {
      id: "solution",
      menu: t("solutions.title"),
      subMenu: [
        {
          title: t("solutions.solar"),
          href: ROUTER_SOLAR,
        },
        {
          title: t("solutions.elevator"),
          href: ROUTER_ELEVATOR,
        },
        {
          title: t("solutions.oee"),
          href: ROUTER_OEE,
        },
        {
          title: t("solutions.ems"),
          href: ROUTER_EMS,
        },
        {
          title: t("solutions.ghg"),
          href: ROUTER_GHG,
        },
        {
          title: t("solutions.aiForBusiness"),
          href: ROUTER_AI_BUSINESS,
        },
        {
          title: t("solutions.aiForAssistant"),
          href: ROUTER_AI_ASSISTANT,
        },
      ],
      multiMenu: false,
    },
    {
      id: "blog",
      menu: t("news.title"),
      subMenu: [
        {
          title: t("news.notification"),
          href: ROUTER_NOTIFICATION,
        },
        {
          title: t("news.blog"),
          href: ROUTER_BLOG,
        },
      ],
      multiMenu: false,
    },
    {
      id: "about-us",
      menu: t("about-us"),
      href: ROUTER_ABOUT_US,
      subMenu: null,
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
      id: "career",
      menu: t("career"),
      href: ROUTER_CAREER,
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
      } py-3 px-5 w-full bg-quaternary border-b border-gray/10 `}
    >
      <div className="flex items-center justify-between">
        <Link href="/">
          <a title="Logo" className="flex items-center">
            <Image
              src="/image/logo/logo_1.png"
              width="110"
              height="30"
              alt=""
            />
          </a>
        </Link>
        <div>
          <Button
            title="Open menu"
            onClick={() => setOpenMenu(!openMenu)}
            className="pl-2"
          >
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
                  title="Close menu"
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
                          <span
                            className={`mr-2 ${
                              // active nếu có bất kỳ submenu nào khớp
                              menu.subMenu.some((sm) => isActiveLink(sm.href))
                                ? "text-primary"
                                : "text-gray"
                            }`}
                          >
                            {menu.menu}
                          </span>
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
                          <a
                            title={menu.menu}
                            className={`block w-full font-semibold duration-200 ${
                              isActiveLink(menu.href)
                                ? "text-primary"
                                : "text-gray hover:text-primary"
                            }`}
                            aria-current={
                              isActiveLink(menu.href) ? "page" : undefined
                            }
                          >
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
                                      <Link
                                        href={getLocalizedPath(
                                          subMenu.href,
                                          locale
                                        )}
                                      >
                                        <a
                                          title={subMenu.title}
                                          className={`block w-full font-semibold duration-200 ${
                                            isActiveLink(subMenu.href)
                                              ? "text-primary"
                                              : "text-gray hover:text-primary"
                                          }`}
                                          aria-current={
                                            isActiveLink(subMenu.href)
                                              ? "page"
                                              : undefined
                                          }
                                        >
                                          {item.title}
                                        </a>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ) : (
                              <Link
                                href={getLocalizedPath(subMenu.href, locale)}
                              >
                                <a
                                  title={subMenu.title}
                                  className={`block w-full font-semibold duration-200 ${
                                    isActiveLink(subMenu.href)
                                      ? "text-primary"
                                      : "text-gray hover:text-primary"
                                  }`}
                                  aria-current={
                                    isActiveLink(subMenu.href)
                                      ? "page"
                                      : undefined
                                  }
                                >
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
                <Link href={ROUTER_CONTACT}>
                  <a
                    title="Free trial"
                    onClick={() => setOpenMenu(!openMenu)}
                    className={`py-3 px-6 block w-full bg-primary hover:bg-secondary text-white text-center font-bold rounded-md duration-200`}
                  >
                    {t("bookDemo")}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Header;
