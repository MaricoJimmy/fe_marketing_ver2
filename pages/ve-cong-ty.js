import PageSeoHead from "@/components/common/PageSeoHead";
import ScrollToTop from "@/components/common/ScrollToTop";
import { useTranslations } from "next-intl";
import Image from "next/image";

const AboutUsPage = () => {
  const t = useTranslations("AboutUs");

  const metaTagData = {
    title: `${t("title")} | Udata.ai`,
    desc: t("excerpt"),
    img: "/image/hero/home-pv.webp",
  };
  return (
    <>
      <PageSeoHead data={metaTagData} />
      <div className="w-full h-full flex items-center justify-center bg-infor/5">
        <div className="lg:px-20 md:px-10 px-4 py-8 w-full max-w-screen-xl flex flex-col gap-8">
          <div
            data-aos="fade-left"
            className="p-4 h-full flex flex-col justify-between bg-white shadow-md rounded-2xl"
          >
            <div>
              <h5
                data-aos="fade-left"
                data-aos-delay="100"
                className="text-infor text-lg font-medium"
              >
                {t("title")}
              </h5>
              <h1
                data-aos="fade-left"
                data-aos-delay="150"
                className="mt-2 text-neutral lg:text-4xl text-3xl font-bold leading-snug"
              >
                UDATA: Unlock your Data
              </h1>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="mt-10 flex flex-col gap-2 text-justify text-neutral text-base"
            >
              <div
                className="flex flex-col gap-2"
                dangerouslySetInnerHTML={{ __html: t.raw("content") }}
              ></div>
              <p>{t("excerpt")}</p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="mt-6 flex flex-col gap-2 text-justify text-neutral text-base"
            >
              <p>
                <span className="font-semibold">{t("vision.title")}</span>:{" "}
                {t("vision.content")}
              </p>
              <p>
                <span className="font-semibold">{t("mission.title")}</span>:{" "}
                {t("mission.content")}
              </p>
            </div>
          </div>
          <div
            data-aos="fade-right"
            className="w-full lg:h-[700px] h-[300px] bg-white relative rounded-xl shadow-md"
          >
            <Image
              src="/image/about-us/about-us-3.webp"
              layout="fill"
              alt=""
              className="object-cover rounded-xl"
            />
          </div>
        </div>

        <div className="fixed bottom-24 right-7 z-10">
          <ScrollToTop />
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
