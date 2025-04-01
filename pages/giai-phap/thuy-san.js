import ScrollToTop from "@/components/common/ScrollToTop";
import CallToAction from "@/components/giai-phap/CallToAction";
import HeroSection from "@/components/giai-phap/HeroSection";
import SingleFeatureSection from "@/components/giai-phap/SingleFeatureSection";
import { useTranslations } from "next-intl";
import PageSeoHead from "../../components/common/PageSeoHead";
import HighLightFeature from "../../components/giai-phap/HighLightFeature";

const SolarRooftopLandingPage = () => {
  const t = useTranslations("Fisheries");

  const metaTagData = {
    title: `${t("heroSection.title")} | Udata.ai`,
    desc: t("heroSection.desc"),
    img: "/image/hero/fisheries-pv.webp",
  };
  return (
    <>
      <PageSeoHead data={metaTagData} />
      <div className="pb-14">
        {/* hero section */}
        <HeroSection
          data={t.raw("heroSection")}
          image="/image/solutions/fisheries/fisheries.webp"
          bgColor="bg-infor"
        />
        {/* main features */}
        <HighLightFeature
          data={{
            title: t("allFeatures.title"),
            lists: t.raw("allFeatures.lists"),
          }}
        />
        {/* Giám sát hiệu suất */}
        <SingleFeatureSection data={t.raw("singleFeature.first")} />
        {/* Cảnh báo tự động và phát hiện lỗi */}
        <SingleFeatureSection isReverse data={t.raw("singleFeature.second")} />
        {/* Báo cáo điểm bất thường */}
        <SingleFeatureSection data={t.raw("singleFeature.third")} />
        {/* Tích hợp với hệ thống năng lượng */}
        <SingleFeatureSection isReverse data={t.raw("singleFeature.four")} />
        {/* call to action */}
        <CallToAction data={t.raw("callToAction")} />
        {/* scroll to top button */}
        <div className="fixed bottom-24 right-7 z-10">
          <ScrollToTop />
        </div>
      </div>
    </>
  );
};

export default SolarRooftopLandingPage;
