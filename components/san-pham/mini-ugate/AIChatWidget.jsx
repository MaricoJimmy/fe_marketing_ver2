import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Knowledge base for FAQ matching
const knowledgeBase = [
  {
    keywords: ["miniugate là gì", "là gì", "what is", "giới thiệu"],
    answer:
      "MiniUgate là nền tảng AI Chatbot no-code cho website, giúp bạn tạo chatbot thông minh chỉ trong vài phút. Không cần code, không cần IT – ai cũng có thể sử dụng!",
  },
  {
    keywords: ["mất bao lâu", "bao lâu", "thời gian", "tạo chatbot"],
    answer:
      "Bạn có thể tạo chatbot AI cho website chỉ trong vài phút với 3 bước đơn giản: (1) Dán link website, (2) Setup prompt/giọng điệu, (3) Copy embed code và nhúng vào website.",
  },
  {
    keywords: ["học từ đâu", "dữ liệu", "training", "train", "huấn luyện"],
    answer:
      "Chatbot MiniUgate học từ nhiều nguồn: Website của bạn, Documents (tài liệu), và FAQs mà bạn cung cấp. Chatbot sẽ hiểu đúng nội dung và ngữ cảnh của doanh nghiệp bạn.",
  },
  {
    keywords: ["code", "lập trình", "developer", "kỹ thuật"],
    answer:
      "Không cần lập trình! MiniUgate là nền tảng no-code, nghĩa là bất kỳ ai cũng có thể tạo và quản lý chatbot mà không cần kiến thức kỹ thuật hay IT.",
  },
  {
    keywords: ["nhúng", "embed", "cài đặt", "website", "tích hợp"],
    answer:
      "Rất đơn giản! Sau khi setup chatbot, bạn chỉ cần copy đoạn embed code và dán vào website của mình. Chatbot sẽ hoạt động ngay lập tức.",
  },
  {
    keywords: ["ticket", "hỗ trợ", "support", "con người"],
    answer:
      "Có! MiniUgate có tính năng Support Tickets giúp AI + con người phối hợp xử lý các yêu cầu quan trọng. Khi chatbot không thể trả lời, yêu cầu sẽ được chuyển thành ticket.",
  },
  {
    keywords: ["dashboard", "quản lý", "theo dõi", "thống kê"],
    answer:
      "MiniUgate cung cấp Dashboard đầy đủ với: Quản lý Documents & FAQs, xem Chat Sessions, theo dõi Support Tickets, Trial Chat Widget, Settings, và quản lý nhiều website.",
  },
  {
    keywords: ["lợi ích", "benefit", "tại sao", "hiệu quả"],
    answer:
      "MiniUgate giúp: Giảm tải CSKH & Sales, tăng time-on-site 20-30%, tăng conversion rate 15-30%, tiết kiệm chi phí vận hành 30-50%, và hoạt động 24/7.",
  },
  {
    keywords: ["giá", "pricing", "chi phí", "free", "miễn phí"],
    answer:
      "Bạn có thể dùng thử MiniUgate miễn phí! Truy cập mini.ugate.ai để đăng ký và bắt đầu tạo chatbot AI cho website ngay hôm nay.",
  },
];

const suggestedQuestions = [
  "MiniUgate là gì?",
  "Tạo chatbot mất bao lâu?",
  "MiniUgate học dữ liệu từ đâu?",
  "Có cần lập trình không?",
  "Cách nhúng vào website?",
  "MiniUgate có ticket hỗ trợ không?",
];

function findAnswer(question) {
  const lowerQuestion = question.toLowerCase();

  for (const item of knowledgeBase) {
    if (item.keywords.some((keyword) => lowerQuestion.includes(keyword))) {
      return item.answer;
    }
  }

  return "Cảm ơn bạn đã hỏi! Để được tư vấn chi tiết hơn, bạn có thể truy cập mini.ugate.ai và dùng thử MiniUgate miễn phí. Đội ngũ hỗ trợ sẽ sẵn sàng giúp đỡ bạn!";
}

export const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      role: "assistant",
      content: "Xin chào! 👋 Tôi là trợ lý AI của MiniUgate. Bạn muốn biết gì về MiniUgate?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (text) => {
    const messageText = text || input.trim();
    if (!messageText) return;

    const userMessage = {
      id: Date.now().toString(),
      role: "user",
      content: messageText,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate typing delay
    await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 700));

    const answer = findAnswer(messageText);
    const assistantMessage = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: answer,
    };

    setIsTyping(false);
    setMessages((prev) => [...prev, assistantMessage]);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
            onClick={() => setIsOpen(true)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageSquare className="w-5 h-5" />
            <span className="font-medium text-sm">Hỏi đáp MiniUgate</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] bg-card rounded-2xl shadow-2xl border border-border overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="bg-primary px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-primary-foreground font-medium text-sm">Trợ lý MiniUgate</p>
                  <p className="text-primary-foreground/70 text-xs">(Demo) Hỏi đáp về MiniUgate</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-primary-foreground/10 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-primary-foreground" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-[320px] overflow-y-auto p-4 space-y-3 bg-background">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex items-start gap-2 ${message.role === "user" ? "justify-end" : ""}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {message.role === "assistant" && (
                    <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-primary" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm ${
                      message.role === "assistant"
                        ? "bg-muted text-foreground rounded-bl-sm"
                        : "bg-primary text-primary-foreground rounded-br-sm"
                    }`}
                  >
                    {message.content}
                  </div>
                  {message.role === "user" && (
                    <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div className="flex items-start gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-primary" />
                  </div>
                  <div className="bg-muted px-4 py-3 rounded-2xl rounded-bl-sm flex items-center gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="w-2 h-2 bg-muted-foreground/50 rounded-full"
                        animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2 bg-background">
                <p className="text-xs text-muted-foreground mb-2">Câu hỏi gợi ý:</p>
                <div className="flex flex-wrap gap-1.5">
                  {suggestedQuestions.slice(0, 4).map((question) => (
                    <button
                      key={question}
                      onClick={() => handleSend(question)}
                      className="px-3 py-1.5 bg-muted hover:bg-muted/80 rounded-full text-xs text-foreground transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-3 bg-background border-t border-border">
              <div className="flex items-center gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Nhập câu hỏi..."
                  className="flex-1 text-sm"
                />
                <Button
                  size="icon"
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isTyping}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-[10px] text-muted-foreground text-center mt-2">
                (Demo) Trả lời dựa trên nội dung MiniUgate
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatWidget;
