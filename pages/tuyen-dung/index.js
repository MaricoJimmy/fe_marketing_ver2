import { useState } from "react";
import { Toaster } from "sonner";
import PageSeoHead from "@/components/common/PageSeoHead";
import RecruitmentHero from "@/components/tuyen-dung/RecruitmentHero";
import AboutSection from "@/components/tuyen-dung/AboutSection";
import OpenPositions from "@/components/tuyen-dung/OpenPositions";
import WhyJoinSection from "@/components/tuyen-dung/WhyJoinSection";
import ApplicationSection from "@/components/tuyen-dung/ApplicationSection";

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../locales/${locale}.json`)).default,
    },
  };
}

const RecruitmentPage = () => {
  const [selectedPosition, setSelectedPosition] = useState("");

  const metaTagData = {
    title: "Tuyển dụng | Udata.ai",
    desc: "Khám phá cơ hội nghề nghiệp tại Udata - Nền tảng AI & IoT tiên phong tại Việt Nam",
    img: "/image/hero/home-pv.webp",
  };

  return (
    <div className="recruitment-page">
      <PageSeoHead metaTagData={metaTagData} />
      <Toaster position="top-center" richColors />
      <RecruitmentHero />
      <AboutSection />
      <OpenPositions onSelectPosition={setSelectedPosition} />
      <WhyJoinSection />
      <ApplicationSection selectedPosition={selectedPosition} />
    </div>
  );
};

export default RecruitmentPage;
