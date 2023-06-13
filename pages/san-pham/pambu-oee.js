import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Modal from "../../components/common/Modal";
import PageSeoHead from "../../components/common/PageSeoHead";
import Title from "../../components/common/Title";
import OEELayout from "../../components/layout/OEELayout";
import FormDemo from "../../components/san-pham/FormDemo";
import HeroSection from "../../components/san-pham/HeroSection";
import HighLightFeature from "../../components/san-pham/HighLightFeature";
import InfoClientForm from "../../components/san-pham/InfoClientForm";
import NumberStatus from "../../components/san-pham/NumberStatus";
import Partner from "../../components/san-pham/Partner";
import Technologies from "../../components/san-pham/Technologies";
import VersionApp from "../../components/san-pham/VersionApp";
import { OEEDataPage } from "../../data/oee";
import { useTranslations } from "next-intl";
import Questions from "../../components/san-pham/Questions";

const OEELandingPage = () => {
  const t = useTranslations("OEE");
  const [idQuestion, setIdQuestion] = useState(1);
  const [openQuestion, setOpenQuestion] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const handleClickQuestion = (id) => {
    setIdQuestion(id);
    if (id === idQuestion) {
      setOpenQuestion(!openQuestion);
    } else {
      setOpenQuestion(true);
    }
  };

  const metaTagData = {
    title: t("heroSection.heading"),
    desc: t("heroSection.excerpt"),
    img: "/image/oee/oee-page.png",
  };
  return (
    <>
      <PageSeoHead data={metaTagData} />
      <div className="">
        <HeroSection data={t.raw("heroSection")} setShowModal={setShowModal} />
        {showModal && (
          <Modal onClose={() => setShowModal(false)} title="">
            <InfoClientForm isPMSPage={false} productType="oee" />
          </Modal>
        )}
        <div className="w-full flex justify-center items-center">
          <div className="px-5 py-3 md:px-8 md:py-6 max-w-screen-xl w-full overflow-hidden md:overflow-visible">
            <Partner />
            <HighLightFeature data={t.raw("features")} />
          </div>
        </div>
        <NumberStatus data={t.raw("status")} className="bg-[#7BDEFF]" />
        <div className="w-full flex justify-center items-center">
          <div className="px-5 py-3 md:px-8 md:py-6 max-w-screen-xl w-full">
            <Technologies />
          </div>
        </div>
        <VersionApp
          data={t.raw("versionApp.data")}
          img={t.raw("versionApp.img")}
          className="bg-tertiary"
        />
        <Questions
          data={t.raw("questions.data")}
          img={t.raw("questions.img")}
        />
        <FormDemo data={t.raw("demo")} />
      </div>
    </>
  );
};

export default OEELandingPage;

OEELandingPage.Layout = OEELayout;
