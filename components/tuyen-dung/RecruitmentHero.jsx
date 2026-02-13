import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Users, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

const RecruitmentHero = () => {
    const scrollToPositions = () => {
        document.getElementById("positions")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[url('/image/hero/bg-product.webp')] bg-center bg-cover bg-no-repeat">
            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, 0],
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[15%] right-[8%] w-24 h-24 bg-blue-50 rounded-2xl shadow-lg flex items-center justify-center"
                >
                    <Sparkles className="w-10 h-10 text-blue-500" />
                </motion.div>

                <motion.div
                    animate={{
                        y: [0, 15, 0],
                        rotate: [0, -3, 0],
                    }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[20%] left-[5%] w-20 h-20 bg-emerald-50 rounded-2xl shadow-lg flex items-center justify-center"
                >
                    <Users className="w-8 h-8 text-emerald-500" />
                </motion.div>

                <motion.div
                    animate={{
                        y: [0, -15, 0],
                        rotate: [0, 5, 0],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-[40%] left-[15%] w-16 h-16 bg-orange-50 rounded-2xl shadow-lg flex items-center justify-center"
                >
                    <Building className="w-7 h-7 text-orange-500" />
                </motion.div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm text-blue-700 font-medium mb-6">
                            <Sparkles className="w-4 h-4" />
                            We&apos;re hiring!
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                    >
                        <span className="text-gray-900">Xây dựng tương lai</span>
                        <br />
                        <span className="text-gradient-primary">cùng Udata</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10"
                    >
                        Gia nhập đội ngũ tiên phong trong lĩnh vực AI & IoT. Cùng chúng tôi
                        kiến tạo giải pháp công nghệ thông minh cho doanh nghiệp Việt Nam.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button
                            size="lg"
                            className="gap-2 bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all px-8"
                            onClick={scrollToPositions}
                        >
                            Xem vị trí tuyển dụng
                            <ArrowDown className="w-4 h-4" />
                        </Button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex items-center justify-center gap-8 md:gap-16 mt-16"
                    >
                        {[
                            { value: "30+", label: "Thành viên" },
                            { value: "50+", label: "Dự án triển khai" },
                            { value: "2", label: "Năm hoạt động" },
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-blue-600 font-display">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default RecruitmentHero;
