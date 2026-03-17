import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    CheckCircle, Clock, XCircle, ArrowLeft, FileText, Loader2, ArrowRight, Mail, Phone, Briefcase
} from "lucide-react";
import { recruitmentApi } from "@/lib/recruitmentApi";
import { Button } from "@/components/ui/button";

const cvStatusConfig = {
    pending: {
        icon: Clock,
        color: "text-amber-600",
        bg: "bg-amber-50",
        border: "border-amber-200",
        label: "Đang chờ duyệt CV",
        description: "HR đang xem xét hồ sơ của bạn. Chúng tôi sẽ phản hồi trong 1-3 ngày làm việc.",
    },
    approved: {
        icon: CheckCircle,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "border-emerald-200",
        label: "CV đã được duyệt!",
        description: "Chúc mừng! Hồ sơ của bạn đã được chấp nhận. Bạn có thể bắt đầu bài test ngay bây giờ.",
    },
    rejected: {
        icon: XCircle,
        color: "text-red-500",
        bg: "bg-red-50",
        border: "border-red-200",
        label: "Hồ sơ chưa phù hợp",
        description: "Cảm ơn bạn đã quan tâm. Hồ sơ của bạn chưa phù hợp ở thời điểm này.",
    },
};

const CVConfirmationPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [application, setApplication] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        let isMounted = true;
        const fetchApplication = async () => {
            try {
                const app = await recruitmentApi.getApplication(id);
                if (isMounted) {
                    setApplication(app);
                }
            } catch (error) {
                console.error("Error fetching application:", error);
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchApplication();
        const intervalId = setInterval(fetchApplication, 8000);

        return () => {
            isMounted = false;
            clearInterval(intervalId);
        };
    }, [id]);

    if (loading) {
        return (
            <div className="flex min-h-[60vh] items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
            </div>
        );
    }

    if (!application) {
        return (
            <div className="flex min-h-[60vh] items-center justify-center">
                <div className="text-center">
                    <h2 className="mb-2 text-2xl font-bold text-gray-900">Không tìm thấy hồ sơ</h2>
                    <Link href="/tuyen-dung">
                        <a className="text-blue-600 hover:underline">← Trang tuyển dụng</a>
                    </Link>
                </div>
            </div>
        );
    }

    // If already has round1 scores, redirect to result page
    if (application.round1_score_total !== undefined) {
        return (
            <div className="flex min-h-[60vh] items-center justify-center">
                <div className="text-center space-y-4">
                    <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto" />
                    <h2 className="text-xl font-bold text-gray-900">Bạn đã hoàn thành bài test!</h2>
                    <Link href={`/tuyen-dung/ket-qua/${application.id}`}>
                        <a className="inline-block rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors">
                            Xem kết quả →
                        </a>
                    </Link>
                </div>
            </div>
        );
    }

    const cvStatus = application.cv_status || "pending";
    const config = cvStatusConfig[cvStatus] || cvStatusConfig.pending;
    const StatusIcon = config.icon;

    return (
        <div className="min-h-screen py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-2xl">
                    <Link href="/tuyen-dung">
                        <a className="mb-6 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900">
                            <ArrowLeft className="h-4 w-4" /> Trang tuyển dụng
                        </a>
                    </Link>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                        {/* Status Banner */}
                        <div className={`rounded-2xl border ${config.border} p-8 text-center ${config.bg}`}>
                            <StatusIcon className={`mx-auto mb-4 h-16 w-16 ${config.color}`} />
                            <h1 className="mb-2 text-2xl font-bold text-gray-900">{config.label}</h1>
                            <p className="text-gray-600">{config.description}</p>
                            {cvStatus === "pending" && (
                                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-amber-600">
                                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                                    Trang này sẽ tự cập nhật khi có kết quả
                                </div>
                            )}
                        </div>

                        {/* Application Info */}
                        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                            <h3 className="mb-4 font-bold text-gray-900 flex items-center gap-2">
                                <FileText className="w-5 h-5 text-blue-600" />
                                Thông tin hồ sơ
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { icon: Mail, label: "Email", value: application.email },
                                    { icon: Phone, label: "Số điện thoại", value: application.phone },
                                    { icon: Briefcase, label: "Vị trí ứng tuyển", value: application.position },
                                    { icon: Clock, label: "Ngày nộp", value: (application.submittedAt || application.submitted_at) ? new Date(application.submittedAt || application.submitted_at).toLocaleDateString("vi-VN") : "—" },
                                ].map((item) => (
                                    <div key={item.label} className="bg-gray-50 rounded-xl p-3">
                                        <div className="flex items-center gap-1.5 mb-1">
                                            <item.icon className="w-3 h-3 text-gray-400" />
                                            <p className="text-[10px] text-gray-500 uppercase tracking-wider">{item.label}</p>
                                        </div>
                                        <p className="text-sm font-medium text-gray-900 truncate">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                            {(application.cvUrl || application.cv_url) && (
                                <a
                                    href={application.cvUrl || application.cv_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-3 flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-medium"
                                >
                                    <FileText className="w-4 h-4" />
                                    Xem lại CV đã nộp →
                                </a>
                            )}
                        </div>

                        {/* CTA based on status */}
                        {cvStatus === "approved" && (
                            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm">
                                <h3 className="mb-3 font-bold text-gray-900">🎉 Bước tiếp theo: Bài test Vòng 1</h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    Bạn sẽ trả lời <strong>5 câu hỏi phỏng vấn</strong> với MUG — trợ lý AI tuyển dụng.
                                    Thời gian khoảng 10-15 phút, kết quả ngay lập tức.
                                </p>
                                <Button asChild size="lg" className="w-full gap-2 bg-blue-600 hover:bg-blue-700 text-white">
                                    <Link href={`/tuyen-dung/vong-1/${application.id}`}>
                                        <a className="flex items-center justify-center gap-2">
                                            Bắt đầu bài test Vòng 1
                                            <ArrowRight className="w-5 h-5" />
                                        </a>
                                    </Link>
                                </Button>
                            </div>
                        )}

                        {cvStatus === "rejected" && (
                            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm text-center">
                                <p className="text-sm text-gray-600 mb-4">
                                    Hãy theo dõi Udata để cập nhật các cơ hội mới trong tương lai! 💪
                                </p>
                                <Link href="/tuyen-dung">
                                    <a className="text-sm font-medium text-blue-600 hover:underline">
                                        Xem các vị trí khác →
                                    </a>
                                </Link>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default CVConfirmationPage;
