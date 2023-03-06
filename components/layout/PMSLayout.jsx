import React from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";

function PMSLayout({ children }) {
  return (
    <div className="bg-quaternary w-full min-h-screen">
      <Header isProductPage isPMSPage />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default PMSLayout;
