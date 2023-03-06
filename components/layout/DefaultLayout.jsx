import React from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Hotline from "../common/Hotline";

function DefaultLayout({ children }) {
  return (
    <div className="bg-quaternary w-full min-h-screen">
      <Hotline />
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
