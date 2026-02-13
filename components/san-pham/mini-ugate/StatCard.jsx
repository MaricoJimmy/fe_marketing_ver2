import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export const StatCard = ({
  value,
  label,
  icon,
  delay = 0,
  variant = "problem",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={`relative p-6 rounded-2xl border transition-all duration-300 hover-lift ${
        variant === "problem"
          ? "bg-card border-border"
          : "bg-primary/5 border-primary/20"
      }`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      {icon && <div className="mb-3 text-primary">{icon}</div>}
      <motion.div
        className={`text-3xl md:text-4xl font-bold mb-2 ${
          variant === "problem" ? "text-foreground" : "text-primary"
        }`}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
      >
        {value}
      </motion.div>
      <p className="text-muted-foreground text-sm">{label}</p>
    </motion.div>
  );
};

export const AnimatedCounter = ({
  end,
  suffix = "",
  prefix = "",
  duration = 2,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

export default StatCard;
