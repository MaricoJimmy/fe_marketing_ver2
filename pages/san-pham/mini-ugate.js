import Footer from "@/components/common/Footer";
import Header from "@/components/header/Header";
import { FeaturesSection } from "@/components/san-pham/mini-ugate/FeaturesSection";
import { FinalCTASection } from "@/components/san-pham/mini-ugate/FinalCTASection";
import { HeroSection } from "@/components/san-pham/mini-ugate/HeroSection";
import { HowItWorksSection } from "@/components/san-pham/mini-ugate/HowItWorksSection";
import { ProblemSection } from "@/components/san-pham/mini-ugate/ProblemSection";
import { SolutionSection } from "@/components/san-pham/mini-ugate/SolutionSection";
import { UseCasesSection } from "@/components/san-pham/mini-ugate/UseCasesSection";
import PageSeoHead from "../../components/common/PageSeoHead";

const MiniUgateLandingPage = () => {
  const metaTagData = {
    title: "MiniUgate – AI Chatbot cho Website | Udata.ai",
    desc: "Tạo chatbot AI thông minh cho website chỉ trong vài phút. Không cần code. Không cần IT.",
    img: "/image/products/mini-ugate/chatbot-widget.webp",
  };

  return (
    <>
      <PageSeoHead data={metaTagData} />
      <div className="w-full min-h-screen">
        <Header />
        <div className="mini-ugate-page min-h-screen bg-background text-foreground">
          <main>
            <HeroSection />
            <ProblemSection />
            <SolutionSection />
            <section id="features">
              <FeaturesSection />
            </section>
            <section id="how-it-works">
              <HowItWorksSection />
            </section>
            <section id="use-cases">
              <UseCasesSection />
            </section>
            <FinalCTASection />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

MiniUgateLandingPage.getLayout = function getLayout(page) {
  return page;
};

export default MiniUgateLandingPage;
