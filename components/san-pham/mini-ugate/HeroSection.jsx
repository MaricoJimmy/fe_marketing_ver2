import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FloatingAvatar } from "./FloatingAvatar";
import { ChatBubble, TypingIndicator } from "./ChatBubble";
import { Play, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4" />
              Thuộc hệ sinh thái Ugate – Udata
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-display-sm md:text-display text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              MiniUgate –{" "}
              <span className="text-gradient">AI Chatbot</span>
              <br />
              cho Website
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Tạo chatbot AI thông minh cho website chỉ trong vài phút.
              <br />
              <span className="font-medium text-foreground">Không cần code. Không cần IT.</span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button size="lg" className="bg-primary-gradient text-primary-foreground shadow-glow hover:opacity-90 transition-opacity px-8 animate-pulse-glow" asChild>
                <a href="https://mini.ugate.ai/" target="_blank" rel="noopener noreferrer">
                  Dùng thử miễn phí
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-primary/30 text-primary hover:bg-primary/5">
                <Play className="w-4 h-4" />
                Xem MiniUgate hoạt động
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - Animated Visual */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[550px]">
            {/* Central Chat Interface Mock */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[320px] bg-card rounded-2xl shadow-xl border border-border overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Chat Header */}
              <div className="bg-primary px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <span className="text-sm">🤖</span>
                </div>
                <div>
                  <p className="text-primary-foreground text-sm font-medium">MiniUgate</p>
                  <p className="text-primary-foreground/70 text-xs">Online</p>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="p-4 space-y-3 bg-background/50">
                <ChatBubble
                  message="Xin chào! Tôi có thể giúp gì cho bạn?"
                  isBot
                  delay={0.8}
                />
                <ChatBubble
                  message="Sản phẩm này có bảo hành không?"
                  delay={1.3}
                />
                <ChatBubble
                  message="Dạ có ạ! Sản phẩm được bảo hành 12 tháng chính hãng. Bạn cần thêm thông tin gì không ạ? 😊"
                  isBot
                  delay={1.8}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                >
                  <TypingIndicator delay={2.5} />
                </motion.div>
              </div>
            </motion.div>

            {/* Floating Avatars */}
            <FloatingAvatar
              emoji="👩‍💼"
              size="md"
              delay={0}
              className="absolute top-8 left-4 md:left-8"
            />
            <FloatingAvatar
              emoji="👨‍💻"
              size="sm"
              delay={0.5}
              className="absolute top-20 right-4 md:right-8"
            />
            <FloatingAvatar
              emoji="👩"
              size="md"
              delay={1}
              className="absolute bottom-24 left-0 md:left-4"
            />
            <FloatingAvatar
              emoji="🧑‍🦱"
              size="sm"
              delay={1.5}
              className="absolute bottom-8 right-8 md:right-16"
            />
            <FloatingAvatar
              emoji="👴"
              size="sm"
              delay={2}
              className="absolute top-1/3 left-0"
            />

            {/* Floating Chat Bubbles */}
            <motion.div
              className="absolute top-4 right-12 md:right-20 px-3 py-2 bg-card rounded-xl shadow-card border border-border text-xs"
              animate={{ y: [0, -10, 0], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            >
              💬 Đang chat...
            </motion.div>
            <motion.div
              className="absolute bottom-32 left-8 md:left-16 px-3 py-2 bg-primary text-primary-foreground rounded-xl shadow-card text-xs"
              animate={{ y: [0, -8, 0], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
            >
              ✨ AI trả lời ngay
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

