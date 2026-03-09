import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, Sparkles, Users, Building, Zap, ClipboardCheck, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
    { value: "30+", label: "Thành viên" },
    { value: "50+", label: "Dự án triển khai" },
    { value: "2", label: "Năm hoạt động" },
];

const RecruitmentHero = () => {
    const scrollToPositions = () => {
        document.getElementById("positions")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative min-h-[85vh] flex items-center overflow-hidden animated-gradient-bg">
            {/* Decorative Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-cyan-200/20 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-100/15 rounded-full blur-3xl" />
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, 0],
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[15%] right-[8%] w-20 h-20 glass-card rounded-2xl shadow-lg flex items-center justify-center"
                >
                    <Sparkles className="w-8 h-8 text-blue-500" />
                </motion.div>

                <motion.div
                    animate={{
                        y: [0, 15, 0],
                        rotate: [0, -3, 0],
                    }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[20%] left-[5%] w-16 h-16 glass-card rounded-2xl shadow-lg flex items-center justify-center"
                >
                    <Users className="w-7 h-7 text-emerald-500" />
                </motion.div>

                <motion.div
                    animate={{
                        y: [0, -15, 0],
                        rotate: [0, 5, 0],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-[40%] left-[15%] w-14 h-14 glass-card rounded-2xl shadow-lg flex items-center justify-center"
                >
                    <Building className="w-6 h-6 text-orange-500" />
                </motion.div>

                <motion.div
                    animate={{
                        y: [0, 12, 0],
                        x: [0, -8, 0],
                    }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                    className="absolute top-[25%] right-[25%] w-12 h-12 glass-card rounded-2xl shadow-lg flex items-center justify-center"
                >
                    <Zap className="w-5 h-5 text-purple-500" />
                </motion.div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm text-blue-700 font-medium mb-6">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                            </span>
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
                        <div className="flex items-center gap-3 flex-wrap justify-center">
                            <Link href="/tuyen-dung#apply">
                                <a className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-lg bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white hover:border-blue-300 shadow-sm transition-all">
                                    <ClipboardCheck className="w-4 h-4 text-blue-600" />
                                    Làm bài test
                                </a>
                            </Link>
                            <Button
                                size="lg"
                                className="gap-2 glow-button text-white border-0 px-8 text-base"
                                onClick={scrollToPositions}
                            >
                                Xem vị trí tuyển dụng
                                <ArrowDown className="w-4 h-4" />
                            </Button>
                            <Link href="/san-pham/mini-ugate/affiliate">
                                <a className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-lg bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white hover:border-emerald-300 shadow-sm transition-all">
                                    <Handshake className="w-4 h-4 text-emerald-600" />
                                    Đăng ký Affiliate
                                </a>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Stats - Glassmorphism */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mt-16"
                    >
                        <div className="inline-flex items-center gap-8 md:gap-12 px-10 py-6 glass-card rounded-2xl shadow-lg">
                            {stats.map((stat, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-2xl md:text-3xl font-bold text-gradient-primary font-display">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default RecruitmentHero;
