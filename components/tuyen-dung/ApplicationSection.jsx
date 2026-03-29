import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { Send, Link as LinkIcon, CheckCircle, Loader2, FileText, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { recruitmentApi } from "@/lib/recruitmentApi";
import { toast } from "sonner";

const processSteps = [
    { step: "Bước 1", title: "Nộp hồ sơ", desc: "Gửi CV & thông tin cá nhân", tag: "Online" },
    { step: "Bước 2", title: "Duyệt CV", desc: "HR xem xét hồ sơ (1-3 ngày)", tag: "Admin" },
    { step: "Bước 3", title: "MUG Interview", desc: "Phỏng vấn AI — đánh giá tư duy, tham vọng", tag: "AI tự động" },
    { step: "Bước 4", title: "Case Study", desc: "Bài tập thực hành — năng lực chuyên môn", tag: "Online" },
    { step: "Bước 5", title: "Final Interview", desc: "Phỏng vấn trực tiếp với quản lý", tag: "Trực tiếp" },
];

const benefits = [
    { text: "Nộp CV nhanh, HR phản hồi trong 1-3 ngày" },
    { text: "Phỏng vấn AI 10-15 phút, kết quả ngay" },
    { text: "Quy trình tuyển dụng minh bạch, chuyên nghiệp" },
];

const ApplicationSection = ({ selectedPosition }) => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        position: "",
        cvUrl: "",
    });
    const [positions, setPositions] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Fetch active job titles for the dropdown
    useEffect(() => {
        const fetchPositions = async () => {
            try {
                const jobs = await recruitmentApi.getPublicJobs();
                const titles = (jobs || []).map((job) => job.title).filter(Boolean);
                setPositions(titles);
            } catch (error) {
                console.error("Error fetching positions:", error);
                setPositions([]);
            }
        };
        fetchPositions();
    }, []);

    // Update position when selected from job detail modal
    useEffect(() => {
        if (selectedPosition) {
            setFormData((prev) => ({ ...prev, position: selectedPosition }));
        }
    }, [selectedPosition]);

    const handleSubmitCV = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.phone || !formData.position || !formData.cvUrl) {
            toast.error("Vui lòng điền đầy đủ thông tin bắt buộc, bao gồm link CV.");
            return;
        }

        setIsSubmitting(true);
        try {
            const existingApps = await recruitmentApi.getApplicationsByEmail(formData.email.trim().toLowerCase());
            const existingApp = (existingApps || []).find((app) => app.position === formData.position);
            if (existingApp) {
                toast.info("Bạn đã nộp hồ sơ cho vị trí này rồi. Đang chuyển đến trang theo dõi...");
                router.push(`/tuyen-dung/da-nop/${existingApp.id}`);
                return;
            }

            const payload = new FormData();
            payload.append("name", formData.name);
            payload.append("email", formData.email.trim().toLowerCase());
            payload.append("phone", formData.phone);
            payload.append("position", formData.position);
            payload.append("source", "website");
            payload.append("cv_url", formData.cvUrl);

            const created = await recruitmentApi.submitApplication(payload);
            router.push(`/tuyen-dung/da-nop/${created.id}`);
        } catch (error) {
            console.error("Error submitting CV:", error);
            toast.error("Có lỗi xảy ra. Vui lòng thử lại sau.");
            setIsSubmitting(false);
        }
    };

    return (
        <section id="apply" className="py-20 md:py-32 bg-gray-50/50">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left - Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Sẵn sàng{" "}
                                <span className="text-gradient-primary">ứng tuyển?</span>
                            </h2>
                            <p className="text-lg text-gray-500 mb-8">
                                Gửi CV để bắt đầu hành trình cùng Udata. HR sẽ xem xét và phản hồi trong 1-3 ngày làm việc.
                            </p>

                            <div className="space-y-4 mb-8">
                                {benefits.map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="w-4 h-4 text-emerald-600" />
                                        </div>
                                        <span className="text-gray-900">{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Process steps */}
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card">
                                <h3 className="font-semibold text-gray-900 mb-4">Quy trình tuyển dụng:</h3>
                                <div className="space-y-4">
                                    {processSteps.map((item, index) => (
                                        <div key={index} className="flex items-start gap-3 step-connector">
                                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm ${index === 0
                                                    ? "bg-gradient-to-br from-blue-500 to-blue-600"
                                                    : "bg-gradient-to-br from-gray-400 to-gray-500"
                                                }`}>
                                                <span className="text-xs font-bold text-white">{index + 1}</span>
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <span className="font-medium text-gray-900 text-sm">{item.step}: {item.title}</span>
                                                    <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{item.tag}</span>
                                                </div>
                                                <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Right - Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <form
                                onSubmit={handleSubmitCV}
                                className="bg-white rounded-3xl p-8 shadow-card gradient-top-border overflow-hidden"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-sm">
                                        <FileText className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-display text-xl font-bold text-gray-900">
                                            Nộp hồ sơ ứng tuyển
                                        </h3>
                                        <p className="text-xs text-gray-500">Điền thông tin và gửi CV để bắt đầu</p>
                                    </div>
                                </div>

                                <div className="space-y-5">
                                    <div>
                                        <Label htmlFor="name" className="text-gray-900 mb-2 block">
                                            Họ và tên <span className="text-red-500">*</span>
                                        </Label>
                                        <Input
                                            id="name"
                                            placeholder="Nguyễn Văn A"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required
                                            className="h-12"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="email" className="text-gray-900 mb-2 block">
                                            Email <span className="text-red-500">*</span>
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="email@example.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            required
                                            className="h-12"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="phone" className="text-gray-900 mb-2 block">
                                            Số điện thoại <span className="text-red-500">*</span>
                                        </Label>
                                        <div className="relative">
                                            <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                                <Phone className="w-4 h-4 text-gray-400" />
                                            </div>
                                            <Input
                                                id="phone"
                                                type="tel"
                                                placeholder="0901234567"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                required
                                                className="h-12 pl-12"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <Label htmlFor="position" className="text-gray-900 mb-2 block">
                                            Vị trí quan tâm <span className="text-red-500">*</span>
                                        </Label>
                                        <Select
                                            value={formData.position}
                                            onValueChange={(value) => setFormData({ ...formData, position: value })}
                                            required
                                        >
                                            <SelectTrigger className="h-12">
                                                <SelectValue placeholder="Chọn vị trí" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-white border border-gray-200 shadow-lg z-[9999]">
                                                {positions.map((position) => (
                                                    <SelectItem key={position} value={position} className="text-gray-900 cursor-pointer hover:bg-blue-50">
                                                        {position}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div>
                                        <Label htmlFor="cvUrl" className="text-gray-900 mb-2 block">
                                            Link CV <span className="text-red-500">*</span>
                                        </Label>
                                        <div className="relative">
                                            <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                                <LinkIcon className="w-5 h-5 text-gray-400" />
                                            </div>
                                            <Input
                                                id="cvUrl"
                                                type="url"
                                                placeholder="Link Google Drive, Dropbox..."
                                                value={formData.cvUrl}
                                                onChange={(e) => setFormData({ ...formData, cvUrl: e.target.value })}
                                                required
                                                className="h-12 pl-12"
                                            />
                                        </div>
                                        <p className="text-xs text-gray-400 mt-1">
                                            Paste link CV từ Google Drive, Dropbox, hoặc OneDrive
                                        </p>
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full gap-2 glow-button text-white border-0"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                Đang gửi...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                Nộp hồ sơ ứng tuyển
                                            </>
                                        )}
                                    </Button>
                                    <p className="text-center text-xs text-gray-400">
                                        HR sẽ xem xét CV và phản hồi trong 1-3 ngày làm việc qua email.
                                    </p>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ApplicationSection;
