import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, Clock, ArrowLeft, Trophy, Brain, Target, Shield, Loader2 } from "lucide-react";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

const ResultPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [candidate, setCandidate] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id || !db) return;
        const fetchCandidate = async () => {
            try {
                const docRef = doc(db, "applications", id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setCandidate({ id: docSnap.id, ...docSnap.data() });
                }
            } catch (error) {
                console.error("Error fetching candidate:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchCandidate();
    }, [id]);

    if (loading) {
        return (
            <div className="flex min-h-[60vh] items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
            </div>
        );
    }

    if (!candidate || !candidate.round1_score_total) {
        return (
            <div className="flex min-h-[60vh] items-center justify-center">
                <div className="text-center">
                    <h2 className="mb-2 text-2xl font-bold text-gray-900">Không tìm thấy kết quả</h2>
                    <Link href="/tuyen-dung"><a className="text-blue-600 hover:underline">← Trang tuyển dụng</a></Link>
                </div>
            </div>
        );
    }

    const { round1_status: status, round1_score_total: total, round1_score_breakdown: scores, round1_feedback: feedback } = candidate;

    const statusConfig = {
        Pass: { icon: CheckCircle, color: "text-emerald-600", bg: "bg-emerald-50", label: "Đạt — Chúc mừng bạn!" },
        Pending: { icon: Clock, color: "text-amber-600", bg: "bg-amber-50", label: "Đang xem xét" },
        Reject: { icon: XCircle, color: "text-red-500", bg: "bg-red-50", label: "Chưa đạt" },
    };
    const sc = statusConfig[status] || statusConfig.Pending;
    const StatusIcon = sc.icon;

    const scoreItems = [
        { label: "Số liệu cụ thể", value: scores?.numeric || 0, icon: Target },
        { label: "Tham vọng", value: scores?.ambition || 0, icon: Trophy },
        { label: "Tư duy logic", value: scores?.reasoning || 0, icon: Brain },
        { label: "Trách nhiệm", value: scores?.accountability || 0, icon: Shield },
    ];

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
                        {/* Status */}
                        <div className={`rounded-2xl border border-gray-100 p-8 text-center ${sc.bg}`}>
                            <StatusIcon className={`mx-auto mb-4 h-16 w-16 ${sc.color}`} />
                            <h1 className="mb-2 text-2xl font-bold text-gray-900">{sc.label}</h1>
                            <p className="text-gray-500">
                                Xin chào {candidate.name}, đây là kết quả vòng 1 của bạn.
                            </p>
                        </div>

                        {/* Score */}
                        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                            <div className="mb-6 text-center">
                                <p className="text-sm text-gray-500">Tổng điểm</p>
                                <p className="text-5xl font-extrabold text-gray-900">
                                    {total}<span className="text-lg text-gray-400">/100</span>
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {scoreItems.map((item) => (
                                    <div key={item.label} className="rounded-xl bg-gray-50 p-4">
                                        <div className="mb-2 flex items-center gap-2">
                                            <item.icon className="h-4 w-4 text-blue-600" />
                                            <span className="text-xs font-medium text-gray-500">{item.label}</span>
                                        </div>
                                        <p className="text-2xl font-bold text-gray-900">
                                            {item.value}<span className="text-sm text-gray-400">/25</span>
                                        </p>
                                        <div className="mt-2 h-1.5 rounded-full bg-gray-200">
                                            <div
                                                className="h-1.5 rounded-full bg-blue-600 transition-all"
                                                style={{ width: `${(item.value / 25) * 100}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Feedback */}
                        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                            <h3 className="mb-4 font-bold text-gray-900">Nhận xét</h3>
                            <ul className="space-y-2">
                                {(feedback || []).map((f, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                        <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            {candidate.round1_hard_reject_reason && (
                                <div className="mt-4 rounded-xl bg-red-50 p-3">
                                    <p className="text-sm text-red-600">{candidate.round1_hard_reject_reason}</p>
                                </div>
                            )}
                        </div>

                        {/* Next Steps */}
                        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                            <h3 className="mb-4 font-bold text-gray-900">Bước tiếp theo</h3>
                            {status === "Pass" && (
                                <div className="space-y-4">
                                    <p className="text-sm text-gray-600">
                                        🎉 Chúc mừng! Bạn đã vượt qua Vòng 1. Tiếp theo là <strong>Vòng 2: Practical Test</strong>.
                                    </p>
                                    <div className="rounded-xl bg-gray-50 p-4">
                                        <h4 className="mb-2 font-semibold text-gray-900">📋 Vòng 2 — Case Study</h4>
                                        <p className="mb-2 text-sm text-gray-600">
                                            Bạn sẽ trả lời <strong>3 bài case study</strong> trực tiếp trong hệ thống. MUG sẽ tự động chấm điểm.
                                        </p>
                                        <ul className="mb-3 space-y-1 text-sm text-gray-500">
                                            <li>• Case 1: Tăng trưởng khách hàng</li>
                                            <li>• Case 2: Xử lý đội yếu</li>
                                            <li>• Case 3: Pipeline & tính toán</li>
                                        </ul>
                                        <p className="mb-4 text-xs text-gray-400">
                                            Chấm điểm theo: Tư duy chiến lược (30đ), Tư duy số liệu (30đ), Ra quyết định (20đ), Leadership (20đ)
                                        </p>
                                        {candidate.round2_score_total !== undefined && candidate.round2_score_total !== null ? (
                                            <Link href={`/tuyen-dung/ket-qua-2/${candidate.id}`}>
                                                <a className="inline-block rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors">
                                                    Xem kết quả Vòng 2 →
                                                </a>
                                            </Link>
                                        ) : (
                                            <Link href={`/tuyen-dung/vong-2/${candidate.id}`}>
                                                <a className="inline-block rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors">
                                                    Bắt đầu Vòng 2 🚀
                                                </a>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            )}
                            {status === "Pending" && (
                                <p className="text-sm text-gray-600">
                                    ⏳ Hồ sơ của bạn đang được xem xét. Chúng tôi sẽ phản hồi trong vòng 3–5 ngày làm việc qua email.
                                </p>
                            )}
                            {status === "Reject" && (
                                <div className="space-y-3">
                                    <p className="text-sm text-gray-600">
                                        Cảm ơn bạn đã dành thời gian ứng tuyển. Hồ sơ của bạn chưa phù hợp ở thời điểm này.
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Hãy theo dõi Udata để cập nhật các cơ hội mới trong tương lai! 💪
                                    </p>
                                    <Link href="/tuyen-dung">
                                        <a className="inline-block text-sm font-medium text-blue-600 hover:underline">
                                            Xem các vị trí khác →
                                        </a>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ResultPage;
