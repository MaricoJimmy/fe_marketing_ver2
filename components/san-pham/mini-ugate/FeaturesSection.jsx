import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FeatureCard } from "./FeatureCard";
import {
  Wand2,
  FileText,
  MessageSquare,
  TicketCheck,
  Palette,
} from "lucide-react";

const features = [
  {
    icon: Wand2,
    title: "No-code AI Chatbot",
    description: "Ai cũng tạo được chatbot. Không cần kiến thức kỹ thuật, không cần developer.",
  },
  {
    icon: FileText,
    title: "Train từ Website, Documents & FAQs",
    description: "Chatbot hiểu đúng nội dung doanh nghiệp. Tự động học từ dữ liệu của bạn.",
  },
  {
    icon: MessageSquare,
    title: "Chat Sessions",
    description: "Xem & phân tích hội thoại khách hàng. Hiểu insight và tối ưu liên tục.",
  },
  {
    icon: TicketCheck,
    title: "Support Tickets",
    description: "AI + con người xử lý yêu cầu quan trọng. Không bỏ sót khách hàng tiềm năng.",
  },
  {
    icon: Palette,
    title: "Tuỳ chỉnh giao diện chatbot",
    description: "Màu sắc, giọng điệu, thương hiệu. Chatbot mang đậm dấu ấn doanh nghiệp.",
  },
];

export const FeaturesSection = () => {
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
          <motion.span
            className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Tính năng nổi bật
          </motion.span>
          <h2 className="text-heading md:text-display-sm text-foreground mb-4">
            Mọi thứ bạn cần để tạo chatbot AI
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Từ thiết lập đến vận hành, MiniUgate có đầy đủ công cụ cho bạn
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

