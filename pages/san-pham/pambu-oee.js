import Head from "next/head";
import React from "react";
import HeroSection from "../../components/san-pham/HeroSection";
import HighLightFeature from "../../components/san-pham/HighLightFeature";
import NumberStatus from "../../components/san-pham/NumberStatus";
import Technology from "../../components/san-pham/Technology";
import VersionApp from "../../components/san-pham/VersionApp";
import { OEEDataPage } from "../../data/oee";

const OEELandingPage = () => {
  return (
    <>
      <Head>
        <title>Pambu OEE | Pambu</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="">
        <div className="w-full flex justify-center items-center">
          <div className="px-8 py-6 max-w-screen-xl w-full">
            <HeroSection data={OEEDataPage.heroSection} />
            <HighLightFeature data={OEEDataPage.features} />
          </div>
        </div>
        <NumberStatus
          data={OEEDataPage.status}
          className='from-green-primary/20 to-blue-primary/20' />
        <div className="w-full flex justify-center items-center">
          <div className="px-8 py-6 max-w-screen-xl w-full">
            <Technology />
            <VersionApp data={OEEDataPage.versions} />
          </div>
        </div>
      </div>
    </>);
};

export default OEELandingPage;
