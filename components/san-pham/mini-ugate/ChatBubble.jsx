import { motion } from "framer-motion";

export const ChatBubble = ({
  message,
  isBot = false,
  delay = 0,
  className = "",
}) => {
  return (
    <motion.div
      className={`max-w-xs px-4 py-2.5 rounded-2xl shadow-card ${
        isBot
          ? "bg-primary text-primary-foreground rounded-bl-sm"
          : "bg-card border border-border text-foreground rounded-br-sm"
      } ${className}`}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
    >
      <p className="text-sm font-medium">{message}</p>
    </motion.div>
  );
};

export const TypingIndicator = ({ delay = 0 }) => {
  return (
    <motion.div
      className="flex items-center gap-1.5 px-4 py-3 bg-primary text-primary-foreground rounded-2xl rounded-bl-sm shadow-card"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay }}
    >
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-2 h-2 bg-primary-foreground/80 rounded-full"
          animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.15,
          }}
        />
      ))}
    </motion.div>
  );
};

export default ChatBubble;
