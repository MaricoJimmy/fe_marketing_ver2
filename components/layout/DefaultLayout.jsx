import DialogflowChatbot from "../chatbot/DialogflowChatbot";
import Footer from "../common/Footer";
import Header from "../header/Header";

function DefaultLayout({ children }) {
  return (
    <div className="w-full min-h-screen scroll-wrapper">
      {/* <Hotline /> */}
      <Header />
      <div className="scroll-content">{children}</div>
      {/* chatbot */}
      <DialogflowChatbot />
      <Footer />
    </div>
  );
}

export default DefaultLayout;
