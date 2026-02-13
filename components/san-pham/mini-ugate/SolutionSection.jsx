import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, TrendingUp, DollarSign, MessageSquare, BarChart3, Ticket } from "lucide-react";

// Mini Chat Widget Preview Component
const ChatWidgetPreview = () => (
  <div className="bg-muted/30 rounded-lg p-3 mt-4">
    <div className="space-y-2">
      <div className="flex items-start gap-2">
        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs">🤖</div>
        <div className="bg-primary/10 rounded-lg px-3 py-1.5 text-xs text-foreground max-w-[80%]">
          Xin chào! Tôi có thể giúp gì?
        </div>
      </div>
      <div className="flex items-start gap-2 justify-end">
        <div className="bg-card border border-border rounded-lg px-3 py-1.5 text-xs text-muted-foreground max-w-[70%]">
          Giá sản phẩm bao nhiêu?
        </div>
      </div>
      <div className="flex items-center gap-1 pl-8">
        <motion.span 
          className="w-1.5 h-1.5 bg-primary rounded-full"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
        />
        <motion.span 
          className="w-1.5 h-1.5 bg-primary rounded-full"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: 0.15 }}
        />
        <motion.span 
          className="w-1.5 h-1.5 bg-primary rounded-full"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: 0.3 }}
        />
      </div>
    </div>
  </div>
);

// Mini Analytics Preview Component
const AnalyticsPreview = () => (
  <div className="bg-muted/30 rounded-lg p-3 mt-4">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-2">
        <BarChart3 className="w-4 h-4 text-primary" />
        <span className="text-xs font-medium text-foreground">Thống kê</span>
      </div>
    </div>
    <div className="flex items-end gap-1 h-12 mb-2">
      {[40, 65, 45, 80, 55, 70, 60].map((height, i) => (
        <motion.div
          key={i}
          className="flex-1 bg-primary/60 rounded-t"
          initial={{ height: 0 }}
          animate={{ height: `${height}%` }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        />
      ))}
    </div>
    <div className="grid grid-cols-2 gap-2">
      <div className="bg-card rounded px-2 py-1.5 border border-border">
        <p className="text-[10px] text-muted-foreground">Lượt chat</p>
        <p className="text-sm font-semibold text-foreground">1,247</p>
      </div>
      <div className="bg-card rounded px-2 py-1.5 border border-border">
        <p className="text-[10px] text-muted-foreground">Conversion</p>
        <p className="text-sm font-semibold text-primary">+28%</p>
      </div>
    </div>
  </div>
);

// Mini Ticket Preview Component
const TicketPreview = () => (
  <div className="bg-muted/30 rounded-lg p-3 mt-4">
    <div className="flex items-center gap-2 mb-3">
      <Ticket className="w-4 h-4 text-primary" />
      <span className="text-xs font-medium text-foreground">Support Tickets</span>
    </div>
    <div className="space-y-2">
      {[
        { status: "resolved", label: "Hỏi về đơn hàng #1234" },
        { status: "resolved", label: "Yêu cầu đổi trả" },
        { status: "pending", label: "Câu hỏi kỹ thuật" },
      ].map((ticket, i) => (
        <motion.div
          key={i}
          className="flex items-center gap-2 bg-card rounded px-2 py-1.5 border border-border"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: i * 0.15 }}
        >
          <span className={`w-2 h-2 rounded-full ${ticket.status === 'resolved' ? 'bg-green-500' : 'bg-yellow-500'}`} />
          <span className="text-xs text-muted-foreground truncate flex-1">{ticket.label}</span>
          <span className={`text-[10px] ${ticket.status === 'resolved' ? 'text-green-600' : 'text-yellow-600'}`}>
            {ticket.status === 'resolved' ? 'Đã xử lý' : 'Đang chờ'}
          </span>
        </motion.div>
      ))}
    </div>
  </div>
);

const solutions = [
  {
    icon: Bot,
    title: "Hiệu quả AI Chatbot",
    metrics: [
      "45–65% câu hỏi được AI xử lý tự động",
      "< 5 giây thời gian phản hồi",
      "24/7 – 100% hoạt động liên tục",
    ],
    preview: ChatWidgetPreview,
  },
  {
    icon: TrendingUp,
    title: "Tương tác & chuyển đổi",
    metrics: [
      "50–70% khách bắt đầu chat",
      "+20–30% time-on-site",
      "+15–30% conversion rate",
    ],
    preview: AnalyticsPreview,
  },
  {
    icon: DollarSign,
    title: "Tối ưu nguồn lực",
    metrics: [
      "40–60% giảm workload CSKH",
      "30–50% giảm chi phí vận hành",
    ],
    preview: TicketPreview,
  },
];

export const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-muted/30">
      <div className="container">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-heading md:text-display-sm text-foreground mb-4">
            MiniUgate giúp thay đổi điều đó
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Kết quả thực tế khi triển khai AI Chatbot cho website của bạn
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((solution, index) => {
            const PreviewComponent = solution.preview;
            return (
              <motion.div
                key={solution.title}
                className="group relative bg-card rounded-2xl border border-border p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <solution.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {solution.title}
                </h3>

                {/* Metrics */}
                <ul className="space-y-2 mb-2">
                  {solution.metrics.map((metric, mIndex) => (
                    <motion.li
                      key={mIndex}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.15 + mIndex * 0.1 + 0.3 }}
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                      <span>{metric}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Preview Mockup */}
                <PreviewComponent />
              </motion.div>
            );
          })}
        </div>

        <motion.p
          className="text-center text-sm text-muted-foreground mt-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          * Kết quả ước tính, phụ thuộc traffic & nội dung website
        </motion.p>
      </div>
    </section>
  );
};

export default SolutionSection;

