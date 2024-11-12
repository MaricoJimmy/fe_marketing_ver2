import ScrollToTop from "@/components/common/ScrollToTop";
import CallToActionV2 from "@/components/giai-phap/CallToActionV2";
import HeroSection from "@/components/giai-phap/HeroSection";
import SingleFeatureSection from "@/components/giai-phap/SingleFeatureSection";
import { useTranslations } from "next-intl";
import PageSeoHead from "../../components/common/PageSeoHead";
import HighLightFeature from "../../components/giai-phap/HighLightFeature";

const SolarRooftopLandingPage = () => {
  const t = useTranslations("Managers");

  const metaTagData = {
    title: t("heroSection.title"),
    desc: t("heroSection.desc"),
    img: "/image/hero/managers-pv.png",
  };
  return (
    <>
      <PageSeoHead data={metaTagData} />
      <div className="">
        {/* hero section */}
        <HeroSection
          data={t.raw("heroSection")}
          image="/image/solutions/investors/managers.png"
          bgColor="bg-infor"
        />
        {/* main features */}
        <HighLightFeature
          data={{
            title: t("allFeatures.title"),
            lists: t.raw("allFeatures.lists"),
            desc: t("allFeatures.desc"),
          }}
          isCustom={true}
          custom="text-base font-semibold"
        />
        {/* Lợi ích mà giải pháp mang lại */}
        <SingleFeatureSection data={t.raw("singleFeature.first")} isCustom />
        {/* Các tính năng nổi bật của giải pháp */}
        <SingleFeatureSection
          isReverse
          data={t.raw("singleFeature.second")}
          isCustom
        />
        {/* BPhương thức triển khai và hỗ trợ khách hàng */}
        <SingleFeatureSection data={t.raw("singleFeature.third")} isCustom />
        {/* call to action */}
        <CallToActionV2 data={t.raw("callToAction")} />
        {/* scroll to top button */}
        <div className="fixed bottom-5 right-5 z-10">
          <ScrollToTop />
        </div>
      </div>
    </>
  );
};

export default SolarRooftopLandingPage;
