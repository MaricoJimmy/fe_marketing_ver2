import ScrollToTop from "@/components/common/ScrollToTop";
import CallToAction from "@/components/san-pham/CallToAction";
import HeroSectionV2 from "@/components/san-pham/HeroSectionV2";
import HighLightFeatureV2 from "@/components/san-pham/HighLightFeatureV2";
import ListCardItems from "@/components/san-pham/ListCardItems";
import Questions from "@/components/san-pham/Questions";
import { useTranslations } from "next-intl";
import PageSeoHead from "../../components/common/PageSeoHead";

const IntegrationLandingPage = () => {
  const t = useTranslations("Intergration");

  const metaTagData = {
    title: `${t("heroSection.heading")} | Udata.ai`,
    desc: t("heroSection.excerpt"),
    img: "/image/hero/intergration-pv.webp",
  };
  return (
    <>
      <PageSeoHead data={metaTagData} />
      <div className="pb-14">
        {/* hero section */}
        <div className="relative">
          <HeroSectionV2 data={t.raw("heroSection")} page="intergration" />
        </div>

        {/* some features */}
        <div className="w-full flex justify-center items-center bg-infor">
          <div className="px-5 py-10 md:px-8 lg:py-32 max-w-screen-xl w-full overflow-hidden md:overflow-visible">
            <HighLightFeatureV2 data={t.raw("features")} />
          </div>
        </div>

        {/* depend datas */}
        <div className="w-full flex justify-center items-center">
          <div className="px-5 py-10 md:px-8 lg:py-32 max-w-screen-xl w-full overflow-hidden md:overflow-visible">
            <ListCardItems data={t.raw("dependDatas")} />
          </div>
        </div>

        <CallToAction data={t.raw("callToAction")} />

        {/* câu hỏi thường gặp */}
        <Questions
          data={t.raw("questions.data")}
          img={t.raw("questions.img")}
          title={t.raw("questions.title")}
        />

        {/* scroll to top button */}
        <div className="fixed bottom-24 right-7 z-10">
          <ScrollToTop />
        </div>
      </div>
    </>
  );
};

export default IntegrationLandingPage;
