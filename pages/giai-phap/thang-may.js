import ScrollToTop from "@/components/common/ScrollToTop";
import HeroSection from "@/components/giai-phap/HeroSection";
import { useTranslations } from "next-intl";
import PageSeoHead from "../../components/common/PageSeoHead";
import HighLightFeature from "../../components/giai-phap/HighLightFeature";
import Problems from "@/components/giai-phap/Problems";
import Benefits from "@/components/giai-phap/Benefits";

const ElevatorLandingPage = () => {
  const t = useTranslations("Elevator");

  const metaTagData = {
    title: `${t("heroSection.title")} | Udata.ai`,
    desc: t("heroSection.desc"),
    img: "/image/hero/elevator-pv.webp",
  };
  return (
    <>
      <PageSeoHead data={metaTagData} />
      <div className="pb-14">
        {/* hero section */}
        <HeroSection
          data={t.raw("heroSection")}
          image="/image/solutions/solar/solar.webp"
          bgColor="bg-infor"
        />

        {/* problems of solar rooftop */}
        <Problems
          title={t("problems.title")}
          leftData={t.raw("problems.list").slice(0, 2)}
          rightData={t.raw("problems.list").slice(2)}
        />

        {/* main features */}
        <HighLightFeature
          data={{
            title: t("allFeatures.title"),
            lists: t.raw("allFeatures.lists"),
          }}
        />

        {/* benefits */}
        <Benefits title={t("benefits.title")} data={t.raw("benefits.list")} />
        {/* scroll to top button */}
        <div className="fixed bottom-24 right-7 z-10">
          <ScrollToTop />
        </div>
      </div>
    </>
  );
};

export default ElevatorLandingPage;
