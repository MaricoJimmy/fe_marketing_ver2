import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const UseCaseCard = ({ icon: Icon, title, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 cursor-default"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <span className="font-medium text-foreground">{title}</span>
    </motion.div>
  );
};

export default UseCaseCard;
