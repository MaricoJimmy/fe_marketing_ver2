import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, ArrowLeft, Loader2, Mail, ArrowRight, FileText, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { db } from "@/lib/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { toast, Toaster } from "sonner";

const LamBaiTestPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!email.trim()) {
            toast.error("Vui lòng nhập email.");
            return;
        }

        setLoading(true);
        setResults(null);
        try {
            const q = query(collection(db, "applications"), where("email", "==", email.trim().toLowerCase()));
            const snapshot = await getDocs(q);

            if (snapshot.empty) {
                setResults([]);
            } else {
                const apps = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
                setResults(apps);
            }
        } catch (error) {
            console.error("Error searching:", error);
            toast.error("Có lỗi xảy ra. Vui lòng thử lại.");
        } finally {
            setLoading(false);
        }
    };

    const getStatusInfo = (app) => {
        if (app.round1_score_total !== undefined) {
            return { label: "Đã hoàn thành Vòng 1", color: "text-emerald-700 bg-emerald-50 border-emerald-200", action: "Xem kết quả", href: `/tuyen-dung/ket-qua/${app.id}` };
        }
        if (app.cv_status === "approved") {
            return { label: "CV đã duyệt — Sẵn sàng!", color: "text-blue-700 bg-blue-50 border-blue-200", action: "Bắt đầu làm bài test", href: `/tuyen-dung/vong-1/${app.id}` };
        }
        if (app.cv_status === "rejected") {
            return { label: "CV không phù hợp", color: "text-red-600 bg-red-50 border-red-200", action: null, href: null };
        }
        return { label: "Đang chờ duyệt CV", color: "text-amber-700 bg-amber-50 border-amber-200", action: "Xem trạng thái", href: `/tuyen-dung/da-nop/${app.id}` };
    };

    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <Toaster position="top-center" richColors />
            <div className="container mx-auto px-4">
                <div className="max-w-xl mx-auto">
                    <Link href="/tuyen-dung">
                        <a className="mb-8 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900">
                            <ArrowLeft className="h-4 w-4" /> Trang tuyển dụng
                        </a>
                    </Link>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="text-center mb-8">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <FileText className="w-8 h-8 text-white" />
                            </div>
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Làm bài test</h1>
                            <p className="text-gray-500">Nhập email bạn đã dùng khi nộp CV để tìm hồ sơ và bắt đầu bài test.</p>
                        </div>

                        <form onSubmit={handleSearch} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <div className="flex gap-3">
                                <div className="relative flex-1">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <Input
                                        type="email"
                                        placeholder="Email đã đăng ký"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="h-12 pl-12"
                                        required
                                    />
                                </div>
                                <Button type="submit" size="lg" className="gap-2 px-6 bg-blue-600 hover:bg-blue-700 text-white" disabled={loading}>
                                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
                                    Tìm
                                </Button>
                            </div>
                        </form>

                        {/* Results */}
                        {results !== null && (
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 space-y-3">
                                {results.length === 0 ? (
                                    <div className="text-center py-10 bg-white rounded-2xl border border-gray-100">
                                        <AlertCircle className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                                        <p className="text-gray-500 mb-1">Không tìm thấy hồ sơ với email này</p>
                                        <p className="text-sm text-gray-400 mb-4">Bạn cần nộp CV trước khi làm bài test.</p>
                                        <Link href="/tuyen-dung#apply">
                                            <a className="text-sm font-medium text-blue-600 hover:underline">Nộp CV ngay →</a>
                                        </Link>
                                    </div>
                                ) : (
                                    results.map((app) => {
                                        const status = getStatusInfo(app);
                                        return (
                                            <div key={app.id} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <h3 className="font-semibold text-gray-900">{app.name}</h3>
                                                        <p className="text-sm text-gray-500 mt-0.5">{app.position}</p>
                                                        <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold border ${status.color}`}>
                                                            {status.label}
                                                        </span>
                                                    </div>
                                                    {status.action && status.href && (
                                                        <Link href={status.href}>
                                                            <a className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors shadow-sm">
                                                                {status.action}
                                                                <ArrowRight className="w-4 h-4" />
                                                            </a>
                                                        </Link>
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })
                                )}
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default LamBaiTestPage;
