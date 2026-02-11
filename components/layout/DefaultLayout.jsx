import Footer from "../common/Footer";
import ScrollToTop from "../common/ScrollToTop";
import Header from "../header/Header";
import Social from "../social/Social";

function DefaultLayout({ children }) {
  return (
    <div className="w-full min-h-screen scroll-wrapper">
      {/* <Hotline /> */}
      <Header />
      <div className="scroll-content">{children}</div>
      {/* chatbot */}
      {/* <DialogflowChatbot /> */}
      <Social />
      <Footer />
      {/* scroll to top button */}
      <div className="fixed bottom-56 left-6 z-[1300]">
        <ScrollToTop />
      </div>
    </div>
  );
}

export default DefaultLayout;
