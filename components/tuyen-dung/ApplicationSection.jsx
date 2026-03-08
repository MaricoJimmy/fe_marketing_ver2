import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { Send, Link as LinkIcon, CheckCircle, Loader2, Bot, Phone } from "lucide-react";
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
import { db } from "@/lib/firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { toast } from "sonner";
import MugChat from "./MugChat";

const processSteps = [
    { step: "Vòng 1", title: "MUG Interview", desc: "Phỏng vấn AI — đánh giá tư duy, tham vọng", tag: "AI tự động" },
    { step: "Vòng 2", title: "Case Study", desc: "Bài tập thực hành — năng lực chuyên môn", tag: "Online" },
    { step: "Vòng 3", title: "Final Interview", desc: "Phỏng vấn trực tiếp với quản lý", tag: "Trực tiếp" },
];

const benefits = [
    { text: "Phỏng vấn AI 10-15 phút, kết quả ngay" },
    { text: "Quy trình tuyển dụng 3 vòng minh bạch" },
    { text: "Đội ngũ HR thân thiện và hỗ trợ" },
];

const ApplicationSection = ({ selectedPosition }) => {
    const router = useRouter();
    const [step, setStep] = useState("info"); // "info" | "interview" | "submitted"
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
                const jobsRef = collection(db, "jobs");
                const q = query(jobsRef, where("isActive", "==", true));
                const snapshot = await getDocs(q);
                const titles = snapshot.docs.map((doc) => doc.data().title).filter(Boolean);
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

    const getUTC7Timestamp = () => {
        const now = new Date();
        const utc7Offset = 7 * 60 * 60 * 1000;
        const utc7Time = new Date(now.getTime() + utc7Offset);
        return utc7Time.toISOString().replace("Z", "+07:00");
    };

    const handleStartInterview = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.phone || !formData.position || !formData.cvUrl) {
            toast.error("Vui lòng điền đầy đủ thông tin bắt buộc, bao gồm link CV.");
            return;
        }
        setStep("interview");
    };

    const handleInterviewComplete = async (result) => {
        setIsSubmitting(true);
        try {
            const docRef = await addDoc(collection(db, "applications"), {
                name: result.full_name,
                email: formData.email,
                phone: formData.phone,
                position: result.role_applied,
                cvUrl: formData.cvUrl || null,
                submittedAt: getUTC7Timestamp(),
                status: "new",
                // Round 1 data
                round1_answers: result.answers,
                round1_score_total: result.total,
                round1_score_breakdown: result.scores,
                round1_status: result.status,
                round1_feedback: result.feedback,
                round1_hard_reject_reason: result.hard_reject_reason || null,
            });

            // Redirect to result page
            router.push(`/tuyen-dung/ket-qua/${docRef.id}`);
        } catch (error) {
            console.error("Error submitting application:", error);
            toast.error("Có lỗi xảy ra. Vui lòng thử lại sau.");
            setIsSubmitting(false);
        }
    };

    // Step: Interview (MUG Chat)
    if (step === "interview") {
        return (
            <section id="apply" className="py-20 md:py-32 bg-gray-50/50">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <div className="text-center mb-8">
                                <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                    Phỏng vấn với{" "}
                                    <span className="text-gradient-primary">MUG</span>
                                </h2>
                                <p className="text-gray-500">
                                    Trả lời 5 câu hỏi để MUG đánh giá tư duy và tiềm năng của bạn
                                </p>
                            </div>
                            <MugChat
                                candidateInfo={{
                                    full_name: formData.name,
                                    email: formData.email,
                                    phone: formData.phone,
                                    role_applied: formData.position,
                                    cv_link: formData.cvUrl,
                                }}
                                onComplete={handleInterviewComplete}
                            />
                            {isSubmitting ? (
                                <div className="flex items-center justify-center gap-2 mt-4 text-blue-600">
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    <span className="text-sm">Đang lưu kết quả...</span>
                                </div>
                            ) : null}
                        </motion.div>
                    </div>
                </div>
            </section>
        );
    }

    // Step: Info Form
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
                                Điền thông tin để bắt đầu phỏng vấn với MUG — trợ lý AI tuyển dụng của Udata.
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
                                <h3 className="font-semibold text-gray-900 mb-4">Quy trình 3 vòng:</h3>
                                <div className="space-y-4">
                                    {processSteps.map((item, index) => (
                                        <div key={index} className="flex items-start gap-3 step-connector">
                                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
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
                                onSubmit={handleStartInterview}
                                className="bg-white rounded-3xl p-8 shadow-card gradient-top-border overflow-hidden"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-sm">
                                        <Bot className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-display text-xl font-bold text-gray-900">
                                            Ứng tuyển ngay
                                        </h3>
                                        <p className="text-xs text-gray-500">Điền thông tin để bắt đầu phỏng vấn với MUG</p>
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
                                    >
                                        <Bot className="w-5 h-5" />
                                        Bắt đầu phỏng vấn với MUG 🤖
                                    </Button>
                                    <p className="text-center text-xs text-gray-400">
                                        Phỏng vấn vòng 1 mất khoảng 10-15 phút. Kết quả ngay lập tức.
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
