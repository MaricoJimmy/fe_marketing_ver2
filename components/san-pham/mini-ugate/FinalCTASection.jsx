import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const FinalCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4" />
            Bắt đầu ngay hôm nay
          </motion.div>

          <motion.h2
            className="text-heading md:text-display-sm text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Biến website thành
            <br />
            <span className="text-gradient">kênh tư vấn AI 24/7</span>
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Tạo chatbot AI cho website chỉ trong vài phút.
            Không cần code. Không cần IT.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button
              size="lg"
              className="bg-primary-gradient text-primary-foreground shadow-glow hover:opacity-90 transition-opacity px-8 gap-2 animate-pulse-glow"
              asChild
            >
              <a href="https://mini.ugate.ai/" target="_blank" rel="noopener noreferrer">
                Dùng thử MiniUgate miễn phí
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              No-code
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              Triển khai nhanh
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              Thuộc hệ sinh thái Ugate
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;

