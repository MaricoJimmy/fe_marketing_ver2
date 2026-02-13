import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HowItWorksFlow } from "./HowItWorksFlow";

export const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background">
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Quy trình đơn giản
          </motion.span>
          <h2 className="text-heading md:text-display-sm text-foreground mb-4">
            Cách MiniUgate hoạt động
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Chỉ 3 bước để biến website thành kênh AI tương tác
          </p>
        </motion.div>

        <HowItWorksFlow />
      </div>
    </section>
  );
};

export default HowItWorksSection;

