import DialogflowChatbot from "../social/DialogflowChatbot";
import Footer from "../common/Footer";
import Header from "../header/Header";
import Social from "../social/Social";
import ScrollToTop from "../common/ScrollToTop";

function DefaultLayout({ children }) {
  return (
    <div className="w-full min-h-screen scroll-wrapper">
      {/* <Hotline /> */}
      <Header />
      <div className="scroll-content">{children}</div>
      {/* chatbot */}
      <DialogflowChatbot />
      <Social />
      <Footer />
      {/* scroll to top button */}
      <div className="fixed bottom-72 right-6 z-[900]">
        <ScrollToTop />
      </div>
    </div>
  );
}

export default DefaultLayout;
