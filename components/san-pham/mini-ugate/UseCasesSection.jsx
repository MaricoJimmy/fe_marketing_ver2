import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { UseCaseCard } from "./UseCaseCard";
import {
  ShoppingCart,
  Briefcase,
  GraduationCap,
  Building2,
  Users,
} from "lucide-react";

const useCases = [
  { icon: ShoppingCart, title: "Website bán hàng" },
  { icon: Briefcase, title: "Doanh nghiệp dịch vụ" },
  { icon: GraduationCap, title: "Giáo dục – đào tạo" },
  { icon: Building2, title: "Bất động sản" },
  { icon: Users, title: "Doanh nghiệp B2B" },
];

export const UseCasesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-muted/30">
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-heading md:text-display-sm text-foreground mb-4">
            Phù hợp với nhiều ngành nghề
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            MiniUgate hỗ trợ đa dạng lĩnh vực kinh doanh
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {useCases.map((useCase, index) => (
            <UseCaseCard
              key={useCase.title}
              icon={useCase.icon}
              title={useCase.title}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;

