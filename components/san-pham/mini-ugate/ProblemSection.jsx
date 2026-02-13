import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { StatCard } from "./StatCard";
import { UserX, Clock, RefreshCw, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: <UserX className="w-6 h-6" />,
    value: "65–75%",
    label: "khách rời website khi không được hỗ trợ ngay",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    value: "15–60 phút",
    label: "là thời gian phản hồi CSKH phổ biến",
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    value: "40–50%",
    label: "câu hỏi CSKH bị lặp lại mỗi ngày",
  },
  {
    icon: <TrendingDown className="w-6 h-6" />,
    value: "2–3%",
    label: "conversion rate website trung bình",
  },
];

export const ProblemSection = () => {
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
            Website có traffic, nhưng…
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Đây là những thách thức mà hầu hết doanh nghiệp đang gặp phải
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <StatCard
              key={problem.value}
              icon={problem.icon}
              value={problem.value}
              label={problem.label}
              delay={index * 0.1}
              variant="problem"
            />
          ))}
        </div>

        <motion.p
          className="text-center text-sm text-muted-foreground mt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          * Số liệu ước tính theo industry benchmark SMB
        </motion.p>
      </div>
    </section>
  );
};

export default ProblemSection;

