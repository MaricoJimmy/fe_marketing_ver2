import { motion } from "framer-motion";

const sizeClasses = {
  sm: "w-10 h-10 text-lg",
  md: "w-14 h-14 text-2xl",
  lg: "w-[4.5rem] h-[4.5rem] text-3xl",
};

export const FloatingAvatar = ({
  emoji,
  size = "md",
  delay = 0,
  className = "",
}) => {
  return (
    <motion.div
      className={`flex items-center justify-center rounded-full bg-card shadow-card border border-border ${sizeClasses[size]} ${className}`}
      animate={{
        y: [0, -15, 0],
        rotate: [0, 3, -2, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    >
      <span role="img" aria-label="avatar">
        {emoji}
      </span>
    </motion.div>
  );
};

export default FloatingAvatar;
