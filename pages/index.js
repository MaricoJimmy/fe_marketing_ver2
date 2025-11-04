import { Button } from "@/components/ui/button";
import { getLocalizedPath } from "@/utils";
import { ROUTER_CONTACT } from "@/utils/constant";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import PageSeoHead from "../components/common/PageSeoHead";

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 60,
  };
}

const HomePage = () => {
  const router = useRouter();
  const t = useTranslations("Index");
  const metaTagData = {
    title: `${t("titleSocial")} | Udata.ai`,
    desc: t("desc"),
    img: "/image/hero/home-pv.png",
  };

  const listCustomers = [
    "/image/customers/mekong.webp",
    "/image/customers/tana.webp",
    "/image/customers/donghwa.webp",
    "/image/customers/zeroboard.webp",
    "/image/customers/sametel.webp",
    "/image/customers/rhythm.webp",
    "/image/customers/sntek.webp",
    "/image/customers/long-hau.webp",
  ];

  return (
    <>
      <PageSeoHead data={metaTagData} />
      <div>
        {/* hero section */}
        <section className="w-full h-screen flex items-center bg-[url('/image/bg/bg-home.webp')] bg-center bg-cover bg-no-repeat">
          <div className="lg:p-14 p-8 lg:w-full md:w-[70%]">
            <h1
              data-aos="fade-up"
              className="lg:text-7xl text-4xl text-white font-semibold"
            >
              Udata
            </h1>
            <h3
              data-aos="fade-up"
              data-aos-delay="100"
              className="mt-2 text-white lg:text-2xl text-xl font-medium"
            >
              AI & IoT Platform
            </h3>
            <h3
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-10 text-white lg:text-3xl text-2xl font-semibold transition duration-300 ease-out group"
            >
              {t("titleSocial")}
            </h3>
            <div className="mt-4">
              <Button
                size="lg"
                data-aos="fade-up"
                data-aos-delay="300"
                title={t("button.start")}
                className="relative rounded-md group overflow-hidden font-medium bg-white text-primary shadow-md"
                onClick={() =>
                  router.push(getLocalizedPath(ROUTER_CONTACT, router.locale))
                }
              >
                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-primary group-hover:h-full opacity-90"></span>
                <span className="relative group-hover:text-white">
                  {t("button.start")}
                </span>
              </Button>
            </div>
          </div>
        </section>
        {/* list products */}
        <section className="w-full flex justify-center items-center">
          <div className="px-5 py-20 md:px-8 lg:py-36 max-w-screen-xl w-full">
            <h2
              data-aos="fade-up"
              className="text-neutral text-center lg:text-4xl text-2xl font-bold"
            >
              {t("solutions.title")}
            </h2>
            <ul className="mt-6 flex md:flex-row flex-col items-center gap-6">
              {Object.entries(t.raw("solutions.list"))
                .map(([key, value]) => ({
                  key: key,
                  title: value,
                  image: `/image/products/${key}/${key}-logo.webp`,
                }))
                .map((solution, index) => (
                  <Link key={index} href={`/san-pham/${solution.key}`}>
                    <a
                      data-aos="flip-left"
                      data-aos-delay={`${index * 100}`}
                      className="flex-1 flex flex-col items-center"
                    >
                      <Image
                        src={solution.image}
                        width={200}
                        height={120}
                        alt={solution.title}
                      />
                      <span className="text-neutral text-lg font-medium">
                        {solution.title}
                      </span>
                    </a>
                  </Link>
                ))}
            </ul>
          </div>
        </section>
        {/* lĩnh vực áp dụng */}
        <section className="w-full flex justify-center items-center bg-infor">
          <div className="px-5 py-20 md:px-8 lg:py-32 max-w-screen-xl w-full">
            <h2
              data-aos="fade-up"
              className="text-white text-start lg:text-4xl text-2xl font-bold"
            >
              {t("fieldsOfApplication.title")}
            </h2>
            <ul className="mt-6 grid lg:grid-cols-3 gap-6">
              {Object.entries(t.raw("fieldsOfApplication.list"))
                .map(([key, value]) => ({
                  key: key,
                  title: value.title,
                  desc: value.desc,
                }))
                .map((field, index) => (
                  <li
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={`${index * 100}`}
                    className="p-4 border border-white rounded-lg"
                  >
                    <h3 className="text-xl text-white font-semibold">
                      {field.title}
                    </h3>
                    <p className="mt-1 text-base text-white/90 font-semibold">
                      {field.desc}
                    </p>
                  </li>
                ))}
            </ul>
          </div>
        </section>

        {/* customers */}
        <section className="w-full flex justify-center items-center">
          <div className="px-5 py-20 md:px-8 lg:py-32 max-w-screen-xl w-full">
            <h2
              data-aos="fade-up"
              className="text-primary text-center lg:text-4xl text-2xl font-bold"
            >
              {t("customers.title")}
            </h2>
            <ul className="mt-6 grid lg:grid-cols-4 md:grid-cols-2 gap-6">
              {listCustomers.map((customer, index) => (
                <li
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`}
                  className="p-4 flex items-center justify-center"
                >
                  <Image
                    src={customer}
                    width={200}
                    height={100}
                    alt="customer logo"
                    className="object-contain"
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
