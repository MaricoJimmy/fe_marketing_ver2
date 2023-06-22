import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import Modal from "../../components/common/Modal";
import PageSeoHead from "../../components/common/PageSeoHead";
import PMSLayout from "../../components/layout/PMSLayout";
import FormDemo from "../../components/san-pham/FormDemo";
import HeroSection from "../../components/san-pham/HeroSection";
import HighLightFeature from "../../components/san-pham/HighLightFeature";
import InfoClientForm from "../../components/san-pham/InfoClientForm";
import NumberStatus from "../../components/san-pham/NumberStatus";
import Partner from "../../components/san-pham/Partner";
import Questions from "../../components/san-pham/Questions";
import Technologies from "../../components/san-pham/Technologies";
import VersionApp from "../../components/san-pham/VersionApp";
import { useRouter } from "next/router";

const PMSLandingPage = () => {
  const t = useTranslations("PMS");
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (router.locale === "vi") {
      router.push("/san-pham/pambu-pms");
    } else {
      router.push("/product/pambu-pms");
    }
  }, [router.locale]);

  const metaTagData = {
    title: t("heroSection.heading"),
    desc: t("heroSection.excerpt"),
    img: "/image/pms/pms-page.png",
  };
  return (
    <>
      <PageSeoHead data={metaTagData} />
      <div className="">
        <HeroSection data={t.raw("heroSection")} setShowModal={setShowModal} />
        {showModal && (
          <Modal onClose={() => setShowModal(false)} title="">
            <InfoClientForm isPMSPage={true} productType="pms" />
          </Modal>
        )}
        <div className="w-full flex justify-center items-center">
          <div className="px-5 py-3 md:px-8 md:py-6 max-w-screen-xl w-full overflow-hidden md:overflow-visible">
            <Partner />
            <HighLightFeature data={t.raw("features")} />
          </div>
        </div>
        <NumberStatus data={t.raw("status")} className="bg-[#EC905D]" />
        <div className="w-full flex justify-center items-center">
          <div className="px-5 py-3 md:px-8 md:py-6 max-w-screen-xl w-full">
            <Technologies />
          </div>
        </div>
        <VersionApp
          data={t.raw("versionApp.data")}
          img={t.raw("versionApp.img")}
          className="bg-[#F6E0D6]"
        />
        <Questions
          data={t.raw("questions.data")}
          img={t.raw("questions.img")}
          isPMSPage
        />
        <FormDemo isPMSPage data={t.raw("demo")} />
      </div>
    </>
  );
};

export default PMSLandingPage;

PMSLandingPage.Layout = PMSLayout;
