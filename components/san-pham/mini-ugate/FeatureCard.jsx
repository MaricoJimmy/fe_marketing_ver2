import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const FeatureCard = ({
  icon: Icon,
  title,
  description,
  delay = 0,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="group relative p-6 bg-card rounded-2xl border border-border hover-lift cursor-default"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6" />
        </div>

        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
