import { getLocalizedPath } from "@/utils";
import {
  ROUTER_ABOUT_US,
  ROUTER_BLOG,
  ROUTER_FISHERIES,
  ROUTER_INTERGRATE,
  ROUTER_INVESTORS,
  ROUTER_MANAGERS,
  ROUTER_NOTIFICATION,
  ROUTER_OPERATORS,
  ROUTER_SAAS,
  ROUTER_SOLAR,
} from "@/utils/constant";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function Footer() {
  const { locale } = useRouter();
  const t = useTranslations("Footer");
  // const listMenu = [
  //   {
  //     title: "Udata PMS",
  //     href: ROUTER_PMS,
  //   },
  //   {
  //     title: "Solar rooftop",
  //     href: ROUTER_SOLAR,
  //   },
  //   {
  //     title: "Case study",
  //     href: ROUTER_CASE_STUDY,
  //   },
  //   {
  //     title: "Blog",
  //     href: ROUTER_BLOG,
  //   },
  //   {
  //     title: t("section.first.links.contact"),
  //     href: ROUTER_CONTACT,
  //   },
  //   {
  //     title: t("section.first.links.about-us"),
  //     href: ROUTER_ABOUT_US,
  //   },
  // ];

  const listMenu = [
    {
      section: t("section.first.links.company"),
      href: getLocalizedPath(ROUTER_ABOUT_US, locale),
    },
    {
      section: t("section.first.links.solutions.title"),
      menus: [
        {
          title: t("section.first.links.solutions.investors"),
          href: getLocalizedPath(ROUTER_INVESTORS, locale),
        },
        {
          title: t("section.first.links.solutions.managers"),
          href: getLocalizedPath(ROUTER_MANAGERS, locale),
        },
        {
          title: t("section.first.links.solutions.operators"),
          href: getLocalizedPath(ROUTER_OPERATORS, locale),
        },
        {
          title: t("section.first.links.solutions.saas"),
          href: getLocalizedPath(ROUTER_SOLAR, locale),
        },
        // "Nhà máy công nghiệp",
        {
          title: t("section.first.links.solutions.fishing"),
          href: getLocalizedPath(ROUTER_FISHERIES, locale),
        },
        // "Nông nghiệp",
        // "Viễn thông",
        // "Y tế",
        // "Bán lẻ - Ngân hàng",
        // "Xăng dầu",
      ],
    },
    {
      section: t("section.first.links.products.title"),
      menus: [
        {
          title: t("section.first.links.products.saas"),
          href: getLocalizedPath(ROUTER_SAAS, locale),
        },
        {
          title: t("section.first.links.products.integrate"),
          href: getLocalizedPath(ROUTER_INTERGRATE, locale),
        },
      ],
    },
    {
      section: t("section.first.links.blog"),
      menus: [
        {
          title: t("section.first.links.notification"),
          href: getLocalizedPath(ROUTER_NOTIFICATION, locale),
        },
        {
          title: "Blog",
          href: getLocalizedPath(ROUTER_BLOG, locale),
        },
      ],
    },
    // {
    //   section: "Tuyển dụng",
    // },
  ];
  return (
    <>
      <div className="hidden lg:block">
        <FooterDesktop sectionLinks={listMenu} />
      </div>
      <div className="block lg:hidden">
        <FooterMobile sectionLinks={listMenu} />
      </div>
    </>
  );
}

function FooterDesktop({ sectionLinks }) {
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
                Copyright @ 2024 Udata.ai
              </span>
            </div>
            <div className="col-span-1">
              <h4 className="text-2xl text-gray font-bold">
                {t("section.first.title")}
              </h4>
              <ul className="mt-8 flex flex-col items-start gap-6 cursor-pointer">
                {sectionLinks.map((sectionLink) => (
                  <li key={sectionLink.section} className="w-full">
                    {/* <Link href={menu.href}>
                        <a className="block w-full" aria-label="Udata PMS">
                          {menu.title}
                        </a>
                      </Link> */}
                    {sectionLink.menus ? (
                      <h3 className="text-neutral font-bold hover:text-primary duration-200">
                        {sectionLink.section}
                      </h3>
                    ) : (
                      <Link href={sectionLink.href}>
                        <a className="text-neutral font-bold hover:text-primary duration-200">
                          {sectionLink.section}
                        </a>
                      </Link>
                    )}
                    {sectionLink.menus ? (
                      <ul className="mt-2 flex flex-col space-y-1">
                        {sectionLink.menus.map((menu) => (
                          <Link key={menu.title} href={menu.href}>
                            <a className="text-gray/80 font-semibold">
                              {menu.title}
                            </a>
                          </Link>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-1">
              <h4 className="text-2xl text-gray font-bold">
                {t("section.second.title")}
              </h4>
              <ul className="mt-8 flex flex-col items-start gap-6 cursor-pointer">
                <li className="flex items-center gap-2">
                  <a
                    href="tel:1800255698"
                    className="p-1 w-[30px] h-[30px] flex items-center justify-center border border-gray/20 rounded-full"
                  >
                    <svg
                      width="25"
                      height="21"
                      viewBox="0 0 27 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.67962 3.32038L7.29289 2.70711C7.68342 2.31658 8.31658 2.31658 8.70711 2.70711L11.2929 5.29289C11.6834 5.68342 11.6834 6.31658 11.2929 6.70711L9.50048 8.49952C9.2016 8.7984 9.1275 9.255 9.31653 9.63307C10.4093 11.8186 12.1814 13.5907 14.3669 14.6835C14.745 14.8725 15.2016 14.7984 15.5005 14.4995L17.2929 12.7071C17.6834 12.3166 18.3166 12.3166 18.7071 12.7071L21.2929 15.2929C21.6834 15.6834 21.6834 16.3166 21.2929 16.7071L20.6796 17.3204C18.5683 19.4317 15.2257 19.6693 12.837 17.8777L11.6286 16.9714C9.88504 15.6638 8.33622 14.115 7.02857 12.3714L6.12226 11.163C4.33072 8.7743 4.56827 5.43173 6.67962 3.32038Z"
                        fill="#0069FF"
                      />
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/profile.php?id=61566884154567"
                    className="relative p-1 w-[30px] h-[30px] flex items-center justify-center border border-gray/20 rounded-full"
                  >
                    <Image
                      src="/image/social/facebook.png"
                      layout="fill"
                      objectFit="cover"
                      alt=""
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/company/udatadhg/"
                    className="relative p-1 w-[30px] h-[30px] overflow-hidden flex items-center justify-center border border-gray/20 rounded-full"
                  >
                    <Image
                      src="/image/social/linkedin.png"
                      layout="fill"
                      objectFit="cover"
                      alt=""
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/udata_jsc/"
                    className="relative p-1 w-[30px] h-[30px] overflow-hidden flex items-center justify-center border border-gray/20 rounded-full"
                  >
                    <Image
                      src="/image/social/instagram.png"
                      layout="fill"
                      objectFit="cover"
                      alt=""
                    />
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
                    href="mailto:support@udata.ai"
                    className="ml-2 text-gray/80 font-semibold"
                  >
                    support@udata.ai
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
                    href="mailto:sales@udata.ai"
                    className="ml-2 text-gray/80 font-semibold"
                  >
                    sales@udata.ai
                  </a>
                </li>
                <li className="flex items-start justify-center">
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
                  <div className="flex flex-col gap-2">
                    <span className="ml-2 text-gray/80 font-semibold">
                      {t("section.second.addressHN.title")}: <br />{" "}
                      {t("section.second.addressHN.address")}
                    </span>
                    <span className="ml-2 text-gray/80 font-semibold">
                      {t("section.second.addressHCM.title")}: <br />{" "}
                      {t("section.second.addressHCM.address")}
                    </span>
                  </div>
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

function FooterMobile({ sectionLinks }) {
  const t = useTranslations("Footer");
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
                <h4 className="text-2xl text-gray font-semibold">
                  {t("section.first.title")}
                </h4>
                <ul className="mt-6 flex flex-col items-start gap-6 cursor-pointer">
                  {sectionLinks.map((sectionLink) => (
                    <li key={sectionLink.section} className="w-full">
                      {/* <Link href={menu.href}>
                        <a className="block w-full" aria-label="Udata PMS">
                          {menu.title}
                        </a>
                      </Link> */}
                      {sectionLink.menus ? (
                        <h3 className="text-neutral font-bold hover:text-primary duration-200">
                          {sectionLink.section}
                        </h3>
                      ) : (
                        <Link href={sectionLink.href}>
                          <a className="text-neutral font-bold hover:text-primary duration-200">
                            {sectionLink.section}
                          </a>
                        </Link>
                      )}
                      {sectionLink.menus ? (
                        <ul className="mt-2 flex flex-col space-y-1">
                          {sectionLink.menus.map((menu) => (
                            <Link key={menu.title} href={menu.href}>
                              <a className="text-gray/80 font-semibold">
                                {menu.title}
                              </a>
                            </Link>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-4">
                <h4 className="text-2xl text-gray font-semibold">
                  {t("section.second.title")}
                </h4>
                <ul className="mt-6 cursor-pointer">
                  <li className="flex items-center gap-2">
                    <a
                      href="tel:1800255698"
                      className="p-1 w-[30px] h-[30px] flex items-center justify-center border border-gray/20 rounded-full"
                    >
                      <svg
                        width="25"
                        height="21"
                        viewBox="0 0 27 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.67962 3.32038L7.29289 2.70711C7.68342 2.31658 8.31658 2.31658 8.70711 2.70711L11.2929 5.29289C11.6834 5.68342 11.6834 6.31658 11.2929 6.70711L9.50048 8.49952C9.2016 8.7984 9.1275 9.255 9.31653 9.63307C10.4093 11.8186 12.1814 13.5907 14.3669 14.6835C14.745 14.8725 15.2016 14.7984 15.5005 14.4995L17.2929 12.7071C17.6834 12.3166 18.3166 12.3166 18.7071 12.7071L21.2929 15.2929C21.6834 15.6834 21.6834 16.3166 21.2929 16.7071L20.6796 17.3204C18.5683 19.4317 15.2257 19.6693 12.837 17.8777L11.6286 16.9714C9.88504 15.6638 8.33622 14.115 7.02857 12.3714L6.12226 11.163C4.33072 8.7743 4.56827 5.43173 6.67962 3.32038Z"
                          fill="#0069FF"
                        />
                      </svg>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.facebook.com/profile.php?id=61566884154567"
                      className="relative p-1 w-[30px] h-[30px] flex items-center justify-center border border-gray/20 rounded-full"
                    >
                      <Image
                        src="/image/social/facebook.png"
                        layout="fill"
                        objectFit="cover"
                        alt=""
                      />
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/company/udatadhg/"
                      className="relative p-1 w-[30px] h-[30px] overflow-hidden flex items-center justify-center border border-gray/20 rounded-full"
                    >
                      <Image
                        src="/image/social/linkedin.png"
                        layout="fill"
                        objectFit="cover"
                        alt=""
                      />
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.instagram.com/udata_jsc/"
                      className="relative p-1 w-[30px] h-[30px] overflow-hidden flex items-center justify-center border border-gray/20 rounded-full"
                    >
                      <Image
                        src="/image/social/instagram.png"
                        layout="fill"
                        objectFit="cover"
                        alt=""
                      />
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
                      href="mailto:support@udata.ai"
                      className=" ml-2 text-gray/80 font-semibold"
                    >
                      support@udata.ai
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
                      href="mailto:sales@udata.ai"
                      className=" ml-2 text-gray/80 font-semibold"
                    >
                      sales@udata.ai
                    </a>
                  </li>
                  <li className="mt-6 flex items-start justify-start">
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
                    <div className="flex flex-col gap-2">
                      <span className="ml-2 text-gray/80 font-semibold">
                        {t("section.second.addressHN.title")}: <br />{" "}
                        {t("section.second.addressHN.address")}
                      </span>
                      <span className="ml-2 text-gray/80 font-semibold">
                        {t("section.second.addressHCM.title")}: <br />{" "}
                        {t("section.second.addressHCM.address")}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-span-4">
                <h4 className="text-2xl text-gray font-semibold">
                  {t("section.third.title")}
                </h4>
                <p
                  className="mt-6 text-gray/80 font-semibold"
                  dangerouslySetInnerHTML={{
                    __html: t.raw("section.third.time"),
                  }}
                ></p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-center">
              <span className="text-gray/60 font-semibold">
                Copyright @ 2024 Udata.ai
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
