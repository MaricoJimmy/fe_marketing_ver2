import ScrollToTop from "@/components/common/ScrollToTop";
import HeroSectionV2 from "@/components/san-pham/HeroSectionV2";
import Questions from "@/components/san-pham/Questions";
import WhyChooseUs from "@/components/san-pham/WhyChooseUs";
import { useTranslations } from "next-intl";
import Image from "next/image";
import PageSeoHead from "../../components/common/PageSeoHead";
import HighLightFeatureV2 from "@/components/san-pham/HighLightFeatureV2";
import ListCardItems from "@/components/san-pham/ListCardItems";
import CallToAction from "@/components/san-pham/CallToAction";

const PMSLandingPage = () => {
  const t = useTranslations("Intergration");

  const metaTagData = {
    title: t("heroSection.heading"),
    desc: t("heroSection.excerpt"),
    img: "/image/pms/pms-page.png",
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
        <div className="fixed bottom-5 right-5">
          <ScrollToTop />
        </div>
      </div>
    </>
  );
};

export default PMSLandingPage;
