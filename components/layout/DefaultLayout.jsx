import Footer from "../common/Footer";
import Header from "../header/Header";

function DefaultLayout({ children }) {
  return (
    <div className="w-full min-h-screen">
      {/* <Hotline /> */}
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
