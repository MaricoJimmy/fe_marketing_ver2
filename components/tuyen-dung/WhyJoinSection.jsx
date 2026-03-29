import { motion } from "framer-motion";
import { TrendingUp, HeartHandshake, GraduationCap, Palette, Coffee, Users } from "lucide-react";

const reasons = [
    {
        icon: TrendingUp,
        title: "Phát triển nhanh",
        description: "Cơ hội thăng tiến rõ ràng trong môi trường startup đang tăng trưởng mạnh",
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        hoverBg: "group-hover:bg-blue-100",
    },
    {
        icon: HeartHandshake,
        title: "Văn hóa mở",
        description: "Đề cao sự minh bạch, tôn trọng và hỗ trợ lẫn nhau trong công việc",
        color: "text-rose-600",
        bgColor: "bg-rose-50",
        hoverBg: "group-hover:bg-rose-100",
    },
    {
        icon: GraduationCap,
        title: "Học hỏi liên tục",
        description: "Luôn khuyến khích nhân viên tiếp cận công nghệ mới và phát triển bản thân",
        color: "text-purple-600",
        bgColor: "bg-purple-50",
        hoverBg: "group-hover:bg-purple-100",
    },
    {
        icon: Palette,
        title: "Sáng tạo không giới hạn",
        description: "Không gian để bạn thể hiện ý tưởng và đóng góp vào sản phẩm thực tế",
        color: "text-orange-600",
        bgColor: "bg-orange-50",
        hoverBg: "group-hover:bg-orange-100",
    },
    {
        icon: Coffee,
        title: "Work-Life Balance",
        description: "Linh hoạt giờ làm, team building thường xuyên, sức khỏe được ưu tiên",
        color: "text-emerald-600",
        bgColor: "bg-emerald-50",
        hoverBg: "group-hover:bg-emerald-100",
    },
    {
        icon: Users,
        title: "Đội ngũ trẻ trung",
        description: "Cùng làm việc với những đồng đội tài năng, nhiệt huyết và đam mê",
        color: "text-cyan-600",
        bgColor: "bg-cyan-50",
        hoverBg: "group-hover:bg-cyan-100",
    },
];

const WhyJoinSection = () => {
    return (
        <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-indigo-50/30">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Tại sao nên gia nhập{" "}
                            <span className="text-gradient-primary">Udata?</span>
                        </h2>
                        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                            Chúng tôi tin rằng con người là yếu tố quan trọng nhất tạo nên thành công.
                        </p>
                    </motion.div>

                    {/* Reasons Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {reasons.map((reason, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                className="group bg-white rounded-2xl p-6 shadow-card border border-gray-50 card-hover-lift relative overflow-hidden"
                            >
                                {/* Numbered badge */}
                                <span className="absolute top-4 right-4 text-4xl font-bold text-gray-100 font-display select-none">
                                    0{index + 1}
                                </span>
                                <div className={`w-14 h-14 ${reason.bgColor} ${reason.hoverBg} rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 relative z-10`}>
                                    <reason.icon className={`w-7 h-7 ${reason.color}`} />
                                </div>
                                <h3 className="font-display text-lg font-semibold text-gray-900 mb-2 relative z-10">
                                    {reason.title}
                                </h3>
                                <p className="text-gray-500 relative z-10">{reason.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyJoinSection;
