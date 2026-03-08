import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Loader2 } from "lucide-react";
import { db } from "@/lib/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import MugRound2Chat from "@/components/tuyen-dung/MugRound2Chat";

const Round2Page = () => {
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

    if (candidate.round1_status !== "Pass") {
        return (
            <div className="flex min-h-[60vh] items-center justify-center">
                <div className="text-center">
                    <h2 className="mb-2 text-2xl font-bold text-gray-900">Bạn chưa đủ điều kiện</h2>
                    <p className="text-gray-500 mb-4">Vòng 2 chỉ dành cho ứng viên đã vượt qua Vòng 1.</p>
                    <Link href={`/tuyen-dung/ket-qua/${candidate.id}`}>
                        <a className="text-blue-600 hover:underline">← Xem kết quả Vòng 1</a>
                    </Link>
                </div>
            </div>
        );
    }

    // Already completed round 2
    if (candidate.round2_score_total !== undefined && candidate.round2_score_total !== null) {
        router.push(`/tuyen-dung/ket-qua-2/${candidate.id}`);
        return (
            <div className="flex min-h-[60vh] items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
            </div>
        );
    }

    const handleComplete = async (result) => {
        try {
            const docRef = doc(db, "applications", candidate.id);
            await updateDoc(docRef, {
                round2_answers: result.answers,
                round2_score_total: result.total,
                round2_score_breakdown: result.scores,
                round2_status: result.status,
                round2_feedback: result.feedback,
            });
            router.push(`/tuyen-dung/ket-qua-2/${candidate.id}`);
        } catch (error) {
            console.error("Error saving round 2:", error);
            alert("Có lỗi xảy ra khi lưu kết quả. Vui lòng thử lại.");
        }
    };

    return (
        <div className="min-h-screen py-8 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-2xl">
                    <Link href={`/tuyen-dung/ket-qua/${candidate.id}`}>
                        <a className="mb-6 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900">
                            <ArrowLeft className="h-4 w-4" /> Kết quả Vòng 1
                        </a>
                    </Link>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <MugRound2Chat
                            candidateName={candidate.name}
                            onComplete={handleComplete}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Round2Page;
