import PageSeoHead from "@/components/common/PageSeoHead";
import WhyChooseUs from "@/components/san-pham/WhyChooseUs";
import { useTranslations } from "next-intl";
import Image from "next/image";

const stripHtml = (value = "") => value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

const AboutUsPage = () => {
  const t = useTranslations("AboutUs");

  const metaTagData = {
    title: `${t("title")} | Udata.ai`,
    desc: stripHtml(t.raw("excerpt")),
    img: "/image/hero/home-pv.webp",
  };
  return (
    <>
      <PageSeoHead data={metaTagData} />
      <div className="w-full h-full flex items-center justify-center bg-infor/5">
        <div className="lg:px-12 md:px-6 px-4 py-8 w-full max-w-screen-xl flex flex-col gap-8">
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
              <div dangerouslySetInnerHTML={{ __html: t.raw("excerpt") }}></div>
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
          <div className="px-4 py-8 bg-white shadow-md rounded-2xl">
            <WhyChooseUs
              data={t.raw("whyChooseUs")}
              customCol="md:grid-cols-3 grid-cols-1 lg:mt-16 mt-8 lg:gap-6"
            />
          </div>
          <div className="p-4 bg-white shadow-md rounded-2xl">
            <h2
              data-aos="fade-up"
              className="text-4xl text-neutral text-start font-bold"
            >
              {t("awards.title")}
            </h2>
            <div
              data-aos="fade-left"
              data-aos-delay="100"
              className="mt-6 flex flex-col gap-2 text-justify text-neutral text-base"
              dangerouslySetInnerHTML={{ __html: t.raw("awards.content") }}
            ></div>
            <div className="mt-6 flex lg:flex-row flex-col items-center justify-center gap-8">
              <Image
                data-aos="fade-up"
                data-aos-delay="100"
                src="/image/about-us/award-cert.webp"
                alt="Award 1"
                width={400}
                height={500}
              />
              <Image
                data-aos="fade-up"
                data-aos-delay="150"
                src="/image/about-us/award-trophy.webp"
                alt="Award 1"
                width={650}
                height={500}
                objectFit={"cover"}
              />
            </div>
          </div>
          {/* <div
            data-aos="fade-right"
            className="w-full lg:h-[700px] h-[300px] bg-white relative rounded-xl shadow-md"
          >
            <Image
              src="/image/about-us/about-us-3.webp"
              layout="fill"
              alt=""
              className="object-cover rounded-xl"
            />
          </div> */}
        </div>

      </div>
    </>
  );
};

export default AboutUsPage;
