import ScrollToTop from "@/components/common/ScrollToTop";
import WhyChooseUs from "@/components/san-pham/WhyChooseUs";
import { useTranslations } from "next-intl";
import Image from "next/image";
import PageSeoHead from "../../components/common/PageSeoHead";
import HeroSection from "../../components/san-pham/HeroSection";
import HighLightFeature from "../../components/san-pham/HighLightFeature";
import NumberStatus from "../../components/san-pham/NumberStatus";
import Questions from "../../components/san-pham/Questions";

const PMSLandingPage = () => {
  const t = useTranslations("PMS");

  const metaTagData = {
    title: `${t("heroSection.heading")} | Udata.ai`,
    desc: t("heroSection.excerpt"),
    img: "/image/pms/pms-page.png",
  };
  return (
    <>
      <PageSeoHead data={metaTagData} />
      <div className="pb-14">
        {/* hero section */}
        <div className="relative">
          <HeroSection data={t.raw("heroSection")} page="pms" />

          <div className="lg:-mt-20 -mt-10 lg:w-[1000px] lg:h-[500px] md:w-[600px] md:h-[300px] w-[350px] h-[180px] bg-white relative left-1/2 -translate-x-1/2 z-20 shadow-2xl rounded-md">
            <Image
              src={t.raw("heroSection").img}
              layout="fill"
              alt=""
              className="rounded-md overflow-hidden object-cover"
            />
          </div>
        </div>

        {/* các tính năng chính */}
        <div className="relative mt-10 w-full flex justify-center items-center">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/image/bg/bg-feature.jpg')] bg-center bg-no-repeat bg-cover opacity-25"></div>
          <div className="relative z-10 px-5 py-3 md:px-8 md:py-10 max-w-screen-xl w-full overflow-hidden md:overflow-visible">
            <HighLightFeature
              data={t.raw("features")}
              label={t("features.title")}
            />
          </div>
        </div>

        {/* tại sao chọn chúng tui */}
        <div className="w-full flex justify-center items-center border-t border-gray/10">
          <div className="px-5 py-20 md:px-8 md:py-44 max-w-screen-xl w-full overflow-hidden md:overflow-visible">
            <WhyChooseUs data={t.raw("whyChooseUs")} />
          </div>
        </div>

        {/* các con số (lô đề) */}
        <NumberStatus
          data={t.raw("status")}
          className="from-infor/80 to-primary/80"
          // className="from-[#02D2DA]/80 to-[#0B32EF]/80"
        />

        {/* câu hỏi thường gặp */}
        <Questions
          data={t.raw("questions.data")}
          img={t.raw("questions.img")}
          isPMSPage
        />

        {/* scroll to top button */}
        <div className="fixed bottom-24 right-7 z-10">
          <ScrollToTop />
        </div>
      </div>
    </>
  );
};

export default PMSLandingPage;
