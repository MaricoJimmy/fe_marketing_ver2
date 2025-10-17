import ScrollToTop from "@/components/common/ScrollToTop";
import SingleFeatureSection from "@/components/giai-phap/SingleFeatureSection";
import WhyChooseUs from "@/components/san-pham/WhyChooseUs";
import { useTranslations } from "next-intl";
import PageSeoHead from "../../components/common/PageSeoHead";
import HighLightFeature from "../../components/san-pham/HighLightFeature";
import HeroSection from "@/components/san-pham/HeroSection";
import { Button } from "@/components/ui/button";

const UzeroLandingPage = () => {
  const t = useTranslations("Uzero");

  const metaTagData = {
    title: `${t("heroSection.heading")} | Udata.ai`,
    desc: t("heroSection.excerpt"),
    img: "/image/products/uzero/header-uzero.webp",
  };
  return (
    <>
      <PageSeoHead data={metaTagData} />
      <div className="pb-14">
        {/* hero section */}
        <HeroSection
          video="/videos/uzero.mp4"
          labelBtn={t("heroSection.contact")}
        />

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
              customCol="md:grid-cols-3 grid-cols-1"
            />
          </div>
        </div>

        {/* first feature */}
        <SingleFeatureSection data={t.raw("singleFeature.first")} />

        {/* scroll to top button */}
        <div className="fixed bottom-24 right-7 z-10">
          <ScrollToTop />
        </div>
      </div>
    </>
  );
};

export default UzeroLandingPage;
