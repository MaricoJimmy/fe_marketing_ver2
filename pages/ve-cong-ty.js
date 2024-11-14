import PageSeoHead from "@/components/common/PageSeoHead";
import ScrollToTop from "@/components/common/ScrollToTop";
import { useTranslations } from "next-intl";
import Image from "next/image";

const AboutUsPage = () => {
  const t = useTranslations("AboutUs");

  const metaTagData = {
    title: t("title"),
    desc: t("excerpt"),
    img: "/image/hero/home-pv.png",
  };
  return (
    <>
      <PageSeoHead data={metaTagData} />
      <div className="w-full h-full flex items-center justify-center bg-infor/5">
        <div className="lg:px-20 md:px-10 px-4 py-8 w-full max-w-screen-xl flex flex-col gap-8">
          <div className="p-4 h-full flex flex-col justify-between gap-10 bg-white shadow-md rounded-2xl">
            <div>
              <h5 className="text-infor text-lg font-medium">{t("title")}</h5>
              <h1 className="mt-2 text-neutral lg:text-4xl text-3xl font-bold leading-snug">
                UDATA: Unlock your Data
              </h1>
            </div>
            <div
              className="flex flex-col gap-2 text-justify text-neutral text-base"
              dangerouslySetInnerHTML={{ __html: t.raw("content") }}
            ></div>
          </div>
          <div className="w-full h-[400px] relative rounded-xl shadow-md">
            <Image
              src="/image/about-us/about-us.jpg"
              layout="fill"
              alt=""
              className="object-cover rounded-xl"
            />
          </div>
        </div>

        <div className="fixed bottom-5 right-5 z-10">
          <ScrollToTop />
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
