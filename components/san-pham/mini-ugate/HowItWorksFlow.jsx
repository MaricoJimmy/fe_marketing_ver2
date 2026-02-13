import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Brain, MessageCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Globe,
    title: "Website của bạn",
    description: "Nội dung được quét & huấn luyện",
    color: "bg-blue-100",
    iconColor: "text-primary",
  },
  {
    icon: Brain,
    title: "MiniUgate AI",
    description: "Xử lý & hiểu ngữ cảnh",
    color: "bg-primary",
    iconColor: "text-primary-foreground",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Trả lời khách hàng tức thì",
    color: "bg-blue-100",
    iconColor: "text-primary",
  },
];

export const HowItWorksFlow = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative">
      {/* Desktop Flow */}
      <div className="hidden md:flex items-center justify-center gap-4">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            className="flex items-center"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex flex-col items-center text-center">
              <motion.div
                className={`w-20 h-20 rounded-2xl ${step.color} flex items-center justify-center mb-4 shadow-card`}
                whileHover={{ scale: 1.05 }}
                animate={
                  isInView && index === 1
                    ? {
                        boxShadow: [
                          "0 4px 6px -1px rgba(22, 119, 255, 0.1)",
                          "0 4px 20px -1px rgba(22, 119, 255, 0.3)",
                          "0 4px 6px -1px rgba(22, 119, 255, 0.1)",
                        ],
                      }
                    : {}
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.5,
                }}
              >
                <step.icon className={`w-10 h-10 ${step.iconColor}`} />
              </motion.div>
              <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
              <p className="text-sm text-muted-foreground max-w-[140px]">
                {step.description}
              </p>
            </div>

            {index < steps.length - 1 && (
              <motion.div
                className="mx-6 flex items-center"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
              >
                <motion.div
                  className="flex items-center gap-1"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <div className="w-8 h-0.5 bg-primary/30 rounded" />
                  <ArrowRight className="w-5 h-5 text-primary" />
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Mobile Flow (Vertical) */}
      <div className="md:hidden flex flex-col items-center gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex flex-col items-center text-center">
              <motion.div
                className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-3 shadow-card`}
                animate={
                  isInView && index === 1
                    ? {
                        boxShadow: [
                          "0 4px 6px -1px rgba(22, 119, 255, 0.1)",
                          "0 4px 20px -1px rgba(22, 119, 255, 0.3)",
                          "0 4px 6px -1px rgba(22, 119, 255, 0.1)",
                        ],
                      }
                    : {}
                }
                transition={{ duration: 2, repeat: Infinity }}
              >
                <step.icon className={`w-8 h-8 ${step.iconColor}`} />
              </motion.div>
              <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>

            {index < steps.length - 1 && (
              <motion.div
                className="my-3 flex flex-col items-center"
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <div className="w-0.5 h-6 bg-primary/30 rounded" />
                <ArrowRight className="w-4 h-4 text-primary rotate-90" />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Completion Badge */}
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
          ⚡ Hoàn thành trong vài phút
        </span>
      </motion.div>
    </div>
  );
};

export default HowItWorksFlow;

