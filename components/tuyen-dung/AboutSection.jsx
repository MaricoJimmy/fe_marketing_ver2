import { motion } from "framer-motion";
import { Target, Lightbulb, Cpu, Shield } from "lucide-react";

const AboutSection = () => {
    const features = [
        {
            icon: Target,
            title: "Sứ mệnh",
            description: "Giúp doanh nghiệp vận hành thông minh và phát triển bền vững với AI & IoT",
            color: "text-blue-600",
            bgColor: "bg-blue-50",
        },
        {
            icon: Lightbulb,
            title: "Sáng tạo",
            description: "Luôn đổi mới và tiên phong trong các giải pháp công nghệ cho doanh nghiệp",
            color: "text-orange-600",
            bgColor: "bg-orange-50",
        },
        {
            icon: Cpu,
            title: "Công nghệ",
            description: "Phát triển nền tảng AI & IoT hàng đầu tại Việt Nam cho doanh nghiệp",
            color: "text-purple-600",
            bgColor: "bg-purple-50",
        },
        {
            icon: Shield,
            title: "Tin cậy",
            description: "Đối tác tin cậy của hàng trăm doanh nghiệp, nhà máy và khu công nghiệp",
            color: "text-emerald-600",
            bgColor: "bg-emerald-50",
        },
    ];

    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left - Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Về <span className="text-gradient-primary">Udata</span>
                            </h2>
                            <p className="text-lg text-gray-500 mb-6">
                                Udata là nền tảng phần mềm tiên phong tại Việt Nam trong lĩnh vực AI và IoT,
                                giúp doanh nghiệp vận hành thông minh và phát triển bền vững.
                            </p>
                            <p className="text-gray-500">
                                Với các sản phẩm chủ lực như <strong className="text-gray-900">Uboard</strong>,{" "}
                                <strong className="text-gray-900">Ugate</strong>,{" "}
                                <strong className="text-gray-900">Uzero</strong>, Udata đang đồng hành cùng
                                các nhà máy, tòa nhà, khu công nghiệp, doanh nghiệp sản xuất trong hành trình
                                chuyển đổi số và tối ưu hóa năng lượng.
                            </p>
                        </motion.div>

                        {/* Right - Feature Cards */}
                        <div className="grid grid-cols-2 gap-4">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                    className="bg-white rounded-2xl p-5 shadow-card border border-gray-50 hover:shadow-lg transition-shadow"
                                >
                                    <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                                        <feature.icon className={`w-6 h-6 ${feature.color}`} />
                                    </div>
                                    <h3 className="font-display font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                    <p className="text-sm text-gray-500">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
