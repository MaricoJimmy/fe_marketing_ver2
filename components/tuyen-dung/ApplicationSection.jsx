import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Link as LinkIcon, CheckCircle, Loader2 } from "lucide-react";
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
import { collection, addDoc, query, where, orderBy, onSnapshot } from "firebase/firestore";
import { toast } from "sonner";

const ApplicationSection = ({ selectedPosition }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        position: "",
        cvUrl: "",
    });
    const [positions, setPositions] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Fetch active job titles for the dropdown
    useEffect(() => {
        const jobsRef = collection(db, "jobs");
        const q = query(jobsRef, where("isActive", "==", true), orderBy("order", "asc"));

        const unsubscribe = onSnapshot(
            q,
            (snapshot) => {
                const titles = snapshot.docs.map((doc) => doc.data().title);
                if (titles.length > 0) {
                    setPositions(titles);
                } else {
                    setPositions([
                        "Business Development Manager",
                        "Business Development Staff",
                        "Head of Marketing",
                        "Junior/Mid AI Engineer",
                        "Junior/Middle Full Stack Developer",
                        "Thực tập sinh Marketing",
                    ]);
                }
            },
            () => {
                setPositions([
                    "Business Development Manager",
                    "Business Development Staff",
                ]);
            }
        );

        return () => unsubscribe();
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await addDoc(collection(db, "applications"), {
                name: formData.name,
                email: formData.email,
                position: formData.position,
                cvUrl: formData.cvUrl || null,
                submittedAt: getUTC7Timestamp(),
                status: "new",
            });

            setIsSubmitted(true);
            toast.success("Đơn ứng tuyển đã được gửi thành công!");
        } catch (error) {
            console.error("Error submitting application:", error);
            toast.error("Có lỗi xảy ra. Vui lòng thử lại sau.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <section id="apply" className="py-20 md:py-32 bg-gray-50/50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-lg mx-auto text-center"
                    >
                        <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="w-10 h-10 text-emerald-600" />
                        </div>
                        <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
                            Cảm ơn bạn đã ứng tuyển!
                        </h2>
                        <p className="text-gray-500 mb-6">
                            Chúng tôi sẽ xem xét hồ sơ và liên hệ với bạn trong thời gian sớm nhất.
                        </p>
                    </motion.div>
                </div>
            </section>
        );
    }

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
                                <span className="text-blue-600">ứng tuyển?</span>
                            </h2>
                            <p className="text-lg text-gray-500 mb-8">
                                Điền form bên cạnh để ứng tuyển vị trí phù hợp với bạn.
                            </p>

                            <div className="space-y-4 mb-8">
                                {[
                                    "Phản hồi nhanh trong 48 giờ",
                                    "Quy trình tuyển dụng 2-3 vòng",
                                    "Đội ngũ HR thân thiện và hỗ trợ",
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-emerald-50 rounded-full flex items-center justify-center">
                                            <CheckCircle className="w-4 h-4 text-emerald-600" />
                                        </div>
                                        <span className="text-gray-900">{item}</span>
                                    </div>
                                ))}
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
                                onSubmit={handleSubmit}
                                className="bg-white rounded-3xl p-8 shadow-card"
                            >
                                <h3 className="font-display text-xl font-bold text-gray-900 mb-6">
                                    Ứng tuyển ngay
                                </h3>

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
                                            <SelectContent>
                                                {positions.map((position) => (
                                                    <SelectItem key={position} value={position}>
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
                                        className="w-full gap-2 bg-emerald-600 hover:bg-emerald-700 text-white"
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
                                                Gửi đơn ứng tuyển
                                            </>
                                        )}
                                    </Button>
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
