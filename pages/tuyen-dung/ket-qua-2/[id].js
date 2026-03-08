import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, Clock, ArrowLeft, Lightbulb, BarChart3, Gavel, Crown, Loader2 } from "lucide-react";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

const Result2Page = () => {
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

    if (!candidate || candidate.round2_score_total === undefined || candidate.round2_score_total === null) {
        return (
            <div className="flex min-h-[60vh] items-center justify-center">
                <div className="text-center">
                    <h2 className="mb-2 text-2xl font-bold text-gray-900">Không tìm thấy kết quả Vòng 2</h2>
                    <Link href="/tuyen-dung"><a className="text-blue-600 hover:underline">← Trang tuyển dụng</a></Link>
                </div>
            </div>
        );
    }

    const { round2_status: status, round2_score_total: total, round2_score_breakdown: scores, round2_feedback: feedback } = candidate;

    const statusConfig = {
        Pass: { icon: CheckCircle, color: "text-emerald-600", bg: "bg-emerald-50", label: "Xuất sắc — Vào Vòng 3!" },
        Pending: { icon: Clock, color: "text-amber-600", bg: "bg-amber-50", label: "Đang xem xét" },
        Reject: { icon: XCircle, color: "text-red-500", bg: "bg-red-50", label: "Chưa đạt" },
    };
    const sc = statusConfig[status] || statusConfig.Pending;
    const StatusIcon = sc.icon;

    const scoreItems = [
        { label: "Tư duy chiến lược", value: scores?.strategy || 0, max: 30, icon: Lightbulb },
        { label: "Tư duy số liệu", value: scores?.numeric || 0, max: 30, icon: BarChart3 },
        { label: "Khả năng ra quyết định", value: scores?.decision || 0, max: 20, icon: Gavel },
        { label: "Leadership", value: scores?.leadership || 0, max: 20, icon: Crown },
    ];

    return (
        <div className="min-h-screen py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-2xl">
                    <Link href={`/tuyen-dung/ket-qua/${candidate.id}`}>
                        <a className="mb-6 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900">
                            <ArrowLeft className="h-4 w-4" /> Kết quả Vòng 1
                        </a>
                    </Link>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                        {/* Status */}
                        <div className={`rounded-2xl border border-gray-100 p-8 text-center ${sc.bg}`}>
                            <StatusIcon className={`mx-auto mb-4 h-16 w-16 ${sc.color}`} />
                            <h1 className="mb-2 text-2xl font-bold text-gray-900">{sc.label}</h1>
                            <p className="text-gray-500">
                                Kết quả Vòng 2 — Practical Test của {candidate.name}
                            </p>
                        </div>

                        {/* Score */}
                        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                            <div className="mb-6 text-center">
                                <p className="text-sm text-gray-500">Tổng điểm Vòng 2</p>
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
                                            {item.value}<span className="text-sm text-gray-400">/{item.max}</span>
                                        </p>
                                        <div className="mt-2 h-1.5 rounded-full bg-gray-200">
                                            <div
                                                className="h-1.5 rounded-full bg-blue-600 transition-all"
                                                style={{ width: `${(item.value / item.max) * 100}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Feedback */}
                        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                            <h3 className="mb-4 font-bold text-gray-900">Nhận xét Vòng 2</h3>
                            <ul className="space-y-2">
                                {(feedback || []).map((f, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                        <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Next Steps */}
                        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                            <h3 className="mb-4 font-bold text-gray-900">Bước tiếp theo</h3>
                            {status === "Pass" && (
                                <div className="space-y-3">
                                    <p className="text-sm text-gray-600">
                                        🎉 Xuất sắc! Bạn đã vượt qua Vòng 2. Tiếp theo là <strong>Vòng 3: Phỏng vấn Pressure & Strategy</strong>.
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Đội ngũ HR sẽ liên hệ bạn qua email <strong>{candidate.email}</strong> để sắp xếp lịch phỏng vấn trực tiếp với quản lý.
                                    </p>
                                    <div className="rounded-xl bg-gray-50 p-4">
                                        <h4 className="font-semibold text-gray-900 mb-2">📋 Vòng 3 bao gồm:</h4>
                                        <ul className="space-y-1 text-sm text-gray-500">
                                            <li>• Phỏng vấn trực tiếp với Manager/HR</li>
                                            <li>• Đánh giá khả năng chịu áp lực</li>
                                            <li>• Tư duy chiến lược thực tế</li>
                                            <li>• Culture fit với Udata</li>
                                        </ul>
                                    </div>
                                    <Link href="/">
                                        <a className="inline-block rounded-lg border border-gray-200 px-6 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors">
                                            ← Về trang chủ
                                        </a>
                                    </Link>
                                </div>
                            )}
                            {status === "Pending" && (
                                <div className="space-y-3">
                                    <p className="text-sm text-gray-600">
                                        ⏳ Bài làm của bạn đang được xem xét thêm. Chúng tôi sẽ phản hồi trong vòng 3–5 ngày qua email.
                                    </p>
                                    <Link href="/">
                                        <a className="inline-block rounded-lg border border-gray-200 px-6 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors">
                                            ← Về trang chủ
                                        </a>
                                    </Link>
                                </div>
                            )}
                            {status === "Reject" && (
                                <div className="space-y-3">
                                    <p className="text-sm text-gray-600">
                                        Cảm ơn bạn đã nỗ lực. Bài case study chưa đạt yêu cầu ở thời điểm này.
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Hãy tiếp tục phát triển kỹ năng và theo dõi Udata cho các cơ hội tương lai! 💪
                                    </p>
                                    <div className="flex gap-3">
                                        <Link href="/tuyen-dung">
                                            <a className="inline-block text-sm font-medium text-blue-600 hover:underline">
                                                Xem các vị trí khác →
                                            </a>
                                        </Link>
                                    </div>
                                    <Link href="/">
                                        <a className="inline-block rounded-lg border border-gray-200 px-6 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors">
                                            ← Về trang chủ
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

export default Result2Page;
