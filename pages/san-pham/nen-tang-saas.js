import ScrollToTop from "@/components/common/ScrollToTop";
import SingleFeatureSection from "@/components/giai-phap/SingleFeatureSection";
import WhyChooseUs from "@/components/san-pham/WhyChooseUs";
import { useTranslations } from "next-intl";
import Image from "next/image";
import PageSeoHead from "../../components/common/PageSeoHead";
import HeroSection from "../../components/san-pham/HeroSection";
import HighLightFeature from "../../components/san-pham/HighLightFeature";

const SaasLandingPage = () => {
  const t = useTranslations("SaaS");

  const metaTagData = {
    title: `${t("heroSection.heading")} | Udata.ai`,
    desc: t("heroSection.excerpt"),
    img: "/image/hero/saas-pv.webp",
  };
  return (
    <>
      <PageSeoHead data={metaTagData} />
      <div className="pb-14">
        {/* hero section */}
        <div className="relative">
          <HeroSection data={t.raw("heroSection")} page="saas" />

          <div className="lg:-mt-20 -mt-10 lg:w-[1000px] lg:h-[500px] md:w-[600px] md:h-[300px] w-[350px] h-[180px] bg-white relative left-1/2 -translate-x-1/2 z-20 shadow-2xl rounded-md">
            <Image
              src={"/image/hero/saas.gif"}
              layout="fill"
              alt=""
              className="rounded-md overflow-hidden object-cover"
              unoptimized={true}
            />
          </div>
        </div>

        {/* các tính năng chính */}
        <div className="relative mt-10 w-full flex justify-center items-center">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/image/bg/bg-feature.webp')] bg-center bg-no-repeat bg-cover opacity-25"></div>
          <div className="relative z-10 px-5 py-3 md:px-8 md:py-10 max-w-screen-xl w-full overflow-hidden md:overflow-visible">
            <HighLightFeature
              data={t.raw("features")}
              label={t("features.title")}
            />
          </div>
        </div>

        {/* tại sao chọn chúng tui */}
        <div className="w-full flex justify-center items-center bg-infor/5">
          <div className="px-5 py-20 md:px-8 md:py-44 max-w-screen-xl w-full overflow-hidden md:overflow-visible">
            <WhyChooseUs
              data={t.raw("whyChooseUs")}
              customCol="md:grid-cols-3 grid-cols-3 grid-cols-1"
            />
          </div>
        </div>

        {/* Giám sát hiệu suất */}
        <SingleFeatureSection data={t.raw("singleFeature.first")} />
        {/* Cảnh báo tự động và phát hiện lỗi */}
        <SingleFeatureSection isReverse data={t.raw("singleFeature.second")} />
        {/* Báo cáo điểm bất thường */}
        <SingleFeatureSection data={t.raw("singleFeature.third")} />

        {/* scroll to top button */}
        <div className="fixed bottom-24 right-7 z-10">
          <ScrollToTop />
        </div>
      </div>
    </>
  );
};

export default SaasLandingPage;
