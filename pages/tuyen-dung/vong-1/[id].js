import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Loader2, ShieldAlert } from "lucide-react";
import { db } from "@/lib/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import MugChat from "@/components/tuyen-dung/MugChat";

const Round1Page = () => {
    const router = useRouter();
    const { id } = router.query;
    const [candidate, setCandidate] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

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

    if (!candidate) {
        return (
            <div className="flex min-h-[60vh] items-center justify-center">
                <div className="text-center">
                    <h2 className="mb-2 text-2xl font-bold text-gray-900">Không tìm thấy ứng viên</h2>
                    <Link href="/tuyen-dung"><a className="text-blue-600 hover:underline">← Trang tuyển dụng</a></Link>
                </div>
            </div>
        );
    }

    // Guard: Only allow if CV is approved
    if (candidate.cv_status !== "approved") {
        return (
            <div className="flex min-h-[60vh] items-center justify-center">
                <div className="text-center max-w-md">
                    <ShieldAlert className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                    <h2 className="mb-2 text-xl font-bold text-gray-900">Chưa đủ điều kiện</h2>
                    <p className="text-gray-500 mb-4">
                        CV của bạn cần được duyệt trước khi làm bài test. Vui lòng quay lại trang theo dõi để kiểm tra trạng thái.
                    </p>
                    <Link href={`/tuyen-dung/da-nop/${candidate.id}`}>
                        <a className="text-blue-600 hover:underline font-medium">← Xem trạng thái hồ sơ</a>
                    </Link>
                </div>
            </div>
        );
    }

    // Guard: Already completed round 1
    if (candidate.round1_score_total !== undefined) {
        router.push(`/tuyen-dung/ket-qua/${candidate.id}`);
        return (
            <div className="flex min-h-[60vh] items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
            </div>
        );
    }

    const getUTC7Timestamp = () => {
        const now = new Date();
        const utc7Offset = 7 * 60 * 60 * 1000;
        const utc7Time = new Date(now.getTime() + utc7Offset);
        return utc7Time.toISOString().replace("Z", "+07:00");
    };

    const handleComplete = async (result) => {
        setSaving(true);
        try {
            const docRef = doc(db, "applications", candidate.id);
            await updateDoc(docRef, {
                round1_answers: result.answers,
                round1_score_total: result.total,
                round1_score_breakdown: result.scores,
                round1_status: result.status,
                round1_feedback: result.feedback,
                round1_hard_reject_reason: result.hard_reject_reason || null,
                round1_completed_at: getUTC7Timestamp(),
            });
            router.push(`/tuyen-dung/ket-qua/${candidate.id}`);
        } catch (error) {
            console.error("Error saving round 1:", error);
            alert("Có lỗi xảy ra khi lưu kết quả. Vui lòng thử lại.");
            setSaving(false);
        }
    };

    return (
        <div className="min-h-screen py-8 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-2xl">
                    <Link href={`/tuyen-dung/da-nop/${candidate.id}`}>
                        <a className="mb-6 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900">
                            <ArrowLeft className="h-4 w-4" /> Trang hồ sơ
                        </a>
                    </Link>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="text-center mb-8">
                            <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                Phỏng vấn với{" "}
                                <span className="text-gradient-primary">MUG</span>
                            </h2>
                            <p className="text-gray-500">
                                Xin chào {candidate.name}! Trả lời 5 câu hỏi để MUG đánh giá tư duy và tiềm năng của bạn.
                            </p>
                        </div>
                        <MugChat
                            candidateInfo={{
                                full_name: candidate.name,
                                email: candidate.email,
                                phone: candidate.phone,
                                role_applied: candidate.position,
                                cv_link: candidate.cvUrl,
                            }}
                            onComplete={handleComplete}
                        />
                        {saving && (
                            <div className="flex items-center justify-center gap-2 mt-4 text-blue-600">
                                <Loader2 className="w-5 h-5 animate-spin" />
                                <span className="text-sm">Đang lưu kết quả...</span>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Round1Page;
