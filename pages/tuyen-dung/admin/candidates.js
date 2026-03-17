import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AdminLayout from "@/components/tuyen-dung/AdminLayout";
import { recruitmentApi } from "@/lib/recruitmentApi";
import { Search, Download, X, Users, CheckCircle, Clock, XCircle, MessageSquare, ExternalLink, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast, Toaster } from "sonner";

const statusConfig = {
    Pass: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200", label: "Đạt", dot: "bg-emerald-500" },
    Pending: { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200", label: "Chờ", dot: "bg-amber-500" },
    Reject: { bg: "bg-red-50", text: "text-red-600", border: "border-red-200", label: "Loại", dot: "bg-red-500" },
};

const statItems = [
    { key: "total", label: "Tổng ứng viên", icon: Users, gradient: "from-blue-500 to-blue-600" },
    { key: "pass", label: "Đạt", icon: CheckCircle, gradient: "from-emerald-500 to-emerald-600" },
    { key: "pending", label: "Chờ xét", icon: Clock, gradient: "from-amber-500 to-amber-600" },
    { key: "reject", label: "Loại", icon: XCircle, gradient: "from-red-400 to-red-500" },
];

const getStatusBadge = (status) => {
    const c = statusConfig[status] || statusConfig.Pending;
    return (
        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold ${c.bg} ${c.text} border ${c.border}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
            {c.label}
        </span>
    );
};

const ScoreBar = ({ value, max = 100, color = "blue" }) => {
    const pct = Math.min((value / max) * 100, 100);
    const colors = {
        blue: "bg-blue-500",
        emerald: "bg-emerald-500",
        amber: "bg-amber-500",
        red: "bg-red-500",
    };
    const scoreColor = pct >= 70 ? "emerald" : pct >= 50 ? "amber" : "red";
    return (
        <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-gray-900 w-8 text-right">{value}</span>
            <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${colors[scoreColor]} transition-all duration-500`} style={{ width: `${pct}%` }} />
            </div>
        </div>
    );
};

const CandidatesAdmin = () => {
    const [candidates, setCandidates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("all");
    const [selectedCandidate, setSelectedCandidate] = useState(null);
    const [notes, setNotes] = useState("");

    const fetchCandidates = async () => {
        try {
            const apps = await recruitmentApi.listApplications();
            const data = (apps || []).filter((c) => c.round1_score_total !== undefined && c.round1_score_total !== null);
            setCandidates(data);
        } catch (error) {
            console.error("Error fetching candidates:", error);
            toast.error("Khong tai duoc danh sach ung vien.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCandidates();
    }, []);

    const filtered = candidates.filter((c) => {
        const searchMatch =
            (c.name || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
            (c.email || "").toLowerCase().includes(searchTerm.toLowerCase());
        const statusMatch = filterStatus === "all" || c.round1_status === filterStatus;
        return searchMatch && statusMatch;
    });

    const stats = {
        total: candidates.length,
        pass: candidates.filter((c) => c.round1_status === "Pass").length,
        pending: candidates.filter((c) => c.round1_status === "Pending").length,
        reject: candidates.filter((c) => c.round1_status === "Reject").length,
    };

    const handleSaveNotes = async () => {
        if (!selectedCandidate) return;
        try {
            await recruitmentApi.updateNotes(selectedCandidate.id, notes);
            await fetchCandidates();
            toast.success("Đã lưu ghi chú");
            setSelectedCandidate((prev) => ({ ...prev, notes }));
        } catch (error) {
            toast.error("Lỗi khi lưu ghi chú");
        }
    };

    const exportCSV = () => {
        const headers = ["Họ tên", "Email", "SĐT", "Vị trí", "Điểm V1", "TT V1", "Điểm V2", "TT V2", "Ngày"];
        const rows = filtered.map((c) => [
            c.name, c.email, c.phone || "", c.position,
            c.round1_score_total, c.round1_status,
            c.round2_score_total ?? "", c.round2_status ?? "",
            (c.submittedAt || c.submitted_at) ? new Date(c.submittedAt || c.submitted_at).toLocaleDateString("vi-VN") : "",
        ]);
        const csv = [headers.join(","), ...rows.map((r) => r.map((v) => `"${v}"`).join(","))].join("\n");
        const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `udata-ung-vien-${new Date().toISOString().slice(0, 10)}.csv`;
        a.click();
        URL.revokeObjectURL(url);
        toast.success(`Đã xuất ${filtered.length} ứng viên`);
    };

    const openDetail = (c) => {
        setSelectedCandidate(c);
        setNotes(c.notes || "");
    };

    const statusFilters = [
        { value: "all", label: "Tất cả" },
        { value: "Pass", label: "Đạt" },
        { value: "Pending", label: "Chờ xét" },
        { value: "Reject", label: "Loại" },
    ];

    return (
        <AdminLayout>
            <Toaster position="top-center" richColors />
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-xl font-bold text-gray-900">Ứng viên Test AI</h1>
                        <p className="text-sm text-gray-500 mt-1">Quản lý ứng viên đã làm phỏng vấn MUG</p>
                    </div>
                    <Button variant="outline" size="sm" onClick={exportCSV} className="gap-2 shadow-sm">
                        <Download className="w-4 h-4" />
                        Xuất CSV
                    </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {statItems.map((s) => (
                        <div key={s.key} className="bg-white rounded-2xl border border-gray-200/60 p-5 shadow-sm">
                            <div className="flex items-center gap-4">
                                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center shadow-md`}>
                                    <s.icon className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-gray-900">{stats[s.key]}</p>
                                    <p className="text-xs text-gray-500">{s.label}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Filters */}
                <div className="bg-white rounded-2xl border border-gray-200/60 p-4 mb-4 shadow-sm">
                    <div className="flex flex-wrap gap-3 items-center">
                        <div className="relative flex-1 min-w-[240px]">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                                placeholder="Tìm theo tên hoặc email..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 h-10"
                            />
                        </div>
                        <div className="flex gap-1.5">
                            {statusFilters.map((sf) => (
                                <button
                                    key={sf.value}
                                    onClick={() => setFilterStatus(sf.value)}
                                    className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                                        filterStatus === sf.value
                                            ? "bg-slate-900 text-white shadow-md"
                                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    }`}
                                >
                                    {sf.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-2xl border border-gray-200/60 overflow-hidden shadow-sm">
                    {loading ? (
                        <div className="p-16 text-center text-gray-500">Đang tải...</div>
                    ) : filtered.length === 0 ? (
                        <div className="p-16 text-center">
                            <Users className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                            <p className="text-gray-500">Chưa có ứng viên nào</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-gray-100">
                                        <th className="text-left px-5 py-4 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Ứng viên</th>
                                        <th className="text-left px-5 py-4 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Vị trí</th>
                                        <th className="text-left px-5 py-4 text-[10px] font-semibold text-gray-500 uppercase tracking-wider w-36">Vòng 1</th>
                                        <th className="text-left px-5 py-4 text-[10px] font-semibold text-gray-500 uppercase tracking-wider w-36">Vòng 2</th>
                                        <th className="text-left px-5 py-4 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Ngày</th>
                                        <th className="w-10"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filtered.map((c) => (
                                        <tr
                                            key={c.id}
                                            className="border-b border-gray-50 hover:bg-slate-50/50 cursor-pointer transition-colors group"
                                            onClick={() => openDetail(c)}
                                        >
                                            <td className="px-5 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center flex-shrink-0">
                                                        <span className="text-white text-xs font-bold">{(c.name || "?").charAt(0).toUpperCase()}</span>
                                                    </div>
                                                    <div className="min-w-0">
                                                        <p className="font-medium text-gray-900 text-sm truncate">{c.name}</p>
                                                        <p className="text-xs text-gray-500 truncate">{c.email}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-4">
                                                <span className="text-sm text-gray-700">{c.position}</span>
                                            </td>
                                            <td className="px-5 py-4">
                                                <div className="space-y-1.5">
                                                    <ScoreBar value={c.round1_score_total} />
                                                    {getStatusBadge(c.round1_status)}
                                                </div>
                                            </td>
                                            <td className="px-5 py-4">
                                                {c.round2_score_total !== undefined && c.round2_score_total !== null ? (
                                                    <div className="space-y-1.5">
                                                        <ScoreBar value={c.round2_score_total} />
                                                        {getStatusBadge(c.round2_status)}
                                                    </div>
                                                ) : (
                                                    <span className="text-xs text-gray-400">—</span>
                                                )}
                                            </td>
                                            <td className="px-5 py-4 text-sm text-gray-500">
                                                {(c.submittedAt || c.submitted_at) ? new Date(c.submittedAt || c.submitted_at).toLocaleDateString("vi-VN") : "—"}
                                            </td>
                                            <td className="px-3 py-4">
                                                <ChevronRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>

            {/* Detail Modal */}
            <AnimatePresence>
                {selectedCandidate ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-start justify-center pt-8 overflow-y-auto pb-8"
                        onClick={() => setSelectedCandidate(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg">
                                        <span className="text-white font-bold">{(selectedCandidate.name || "?").charAt(0).toUpperCase()}</span>
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-bold text-gray-900">{selectedCandidate.name}</h2>
                                        <p className="text-sm text-gray-500">{selectedCandidate.position}</p>
                                    </div>
                                </div>
                                <button onClick={() => setSelectedCandidate(null)} className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                                    <X className="w-5 h-5 text-gray-400" />
                                </button>
                            </div>

                            <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
                                {/* Contact Info */}
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        { label: "Email", value: selectedCandidate.email },
                                        { label: "SĐT", value: selectedCandidate.phone || "—" },
                                        { label: "Ngày ứng tuyển", value: (selectedCandidate.submittedAt || selectedCandidate.submitted_at) ? new Date(selectedCandidate.submittedAt || selectedCandidate.submitted_at).toLocaleString("vi-VN") : "—" },
                                        { label: "Link CV", value: selectedCandidate.cvUrl || selectedCandidate.cv_url, isLink: true },
                                    ].map((item) => (
                                        <div key={item.label} className="bg-gray-50 rounded-xl p-3">
                                            <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">{item.label}</p>
                                            {item.isLink && item.value ? (
                                                <a href={item.value} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-blue-600 hover:underline flex items-center gap-1">
                                                    Xem CV <ExternalLink className="w-3 h-3" />
                                                </a>
                                            ) : (
                                                <p className="text-sm font-medium text-gray-900 truncate">{item.value}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Round 1 */}
                                <div className="border border-gray-200 rounded-2xl overflow-hidden">
                                    <div className="px-5 py-4 bg-gradient-to-r from-blue-50 to-white flex items-center justify-between">
                                        <h3 className="font-semibold text-gray-900 text-sm">Vòng 1 — MUG Interview</h3>
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg font-bold text-gray-900">{selectedCandidate.round1_score_total}</span>
                                            {getStatusBadge(selectedCandidate.round1_status)}
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        {selectedCandidate.round1_score_breakdown ? (
                                            <div className="grid grid-cols-4 gap-3 mb-4">
                                                {[
                                                    { label: "Số liệu", value: selectedCandidate.round1_score_breakdown.numeric },
                                                    { label: "Tham vọng", value: selectedCandidate.round1_score_breakdown.ambition },
                                                    { label: "Logic", value: selectedCandidate.round1_score_breakdown.reasoning },
                                                    { label: "Trách nhiệm", value: selectedCandidate.round1_score_breakdown.accountability },
                                                ].map((s) => (
                                                    <div key={s.label} className="text-center bg-gray-50 rounded-xl p-3">
                                                        <p className="text-[10px] text-gray-500 uppercase tracking-wider">{s.label}</p>
                                                        <p className="text-lg font-bold text-gray-900 mt-1">{s.value}<span className="text-xs text-gray-400 font-normal">/25</span></p>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : null}
                                        {selectedCandidate.round1_feedback ? (
                                            <ul className="space-y-1.5">
                                                {selectedCandidate.round1_feedback.map((f, i) => (
                                                    <li key={i} className="text-xs text-gray-600 flex items-start gap-2">
                                                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-blue-500" />
                                                        {f}
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : null}
                                        {selectedCandidate.round1_hard_reject_reason ? (
                                            <p className="mt-3 text-xs text-red-600 bg-red-50 rounded-xl px-4 py-2.5 font-medium">
                                                ⚠️ {selectedCandidate.round1_hard_reject_reason}
                                            </p>
                                        ) : null}
                                        {selectedCandidate.round1_answers ? (
                                            <details className="mt-4">
                                                <summary className="text-xs text-blue-600 cursor-pointer hover:text-blue-800 font-medium">
                                                    Xem câu trả lời gốc
                                                </summary>
                                                <div className="mt-3 space-y-2">
                                                    {Object.entries(selectedCandidate.round1_answers).map(([key, val]) => (
                                                        <div key={key} className="bg-gray-50 rounded-xl p-3">
                                                            <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-1">{key}</p>
                                                            <p className="text-xs text-gray-700 whitespace-pre-wrap">{val}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </details>
                                        ) : null}
                                    </div>
                                </div>

                                {/* Round 2 */}
                                {selectedCandidate.round2_score_total !== undefined && selectedCandidate.round2_score_total !== null ? (
                                    <div className="border border-gray-200 rounded-2xl overflow-hidden">
                                        <div className="px-5 py-4 bg-gradient-to-r from-amber-50 to-white flex items-center justify-between">
                                            <h3 className="font-semibold text-gray-900 text-sm">Vòng 2 — Case Study</h3>
                                            <div className="flex items-center gap-2">
                                                <span className="text-lg font-bold text-gray-900">{selectedCandidate.round2_score_total}</span>
                                                {getStatusBadge(selectedCandidate.round2_status)}
                                            </div>
                                        </div>
                                        <div className="p-5">
                                            {selectedCandidate.round2_score_breakdown ? (
                                                <div className="grid grid-cols-4 gap-3 mb-4">
                                                    {[
                                                        { label: "Chiến lược", value: selectedCandidate.round2_score_breakdown.strategy, max: 30 },
                                                        { label: "Số liệu", value: selectedCandidate.round2_score_breakdown.numeric, max: 30 },
                                                        { label: "Quyết định", value: selectedCandidate.round2_score_breakdown.decision, max: 20 },
                                                        { label: "Leadership", value: selectedCandidate.round2_score_breakdown.leadership, max: 20 },
                                                    ].map((s) => (
                                                        <div key={s.label} className="text-center bg-gray-50 rounded-xl p-3">
                                                            <p className="text-[10px] text-gray-500 uppercase tracking-wider">{s.label}</p>
                                                            <p className="text-lg font-bold text-gray-900 mt-1">{s.value}<span className="text-xs text-gray-400 font-normal">/{s.max}</span></p>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : null}
                                            {selectedCandidate.round2_feedback ? (
                                                <ul className="space-y-1.5">
                                                    {selectedCandidate.round2_feedback.map((f, i) => (
                                                        <li key={i} className="text-xs text-gray-600 flex items-start gap-2">
                                                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-blue-500" />
                                                            {f}
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : null}
                                            {selectedCandidate.round2_answers ? (
                                                <details className="mt-4">
                                                    <summary className="text-xs text-blue-600 cursor-pointer hover:text-blue-800 font-medium">
                                                        Xem câu trả lời gốc
                                                    </summary>
                                                    <div className="mt-3 space-y-2">
                                                        {Object.entries(selectedCandidate.round2_answers).map(([key, val]) => (
                                                            <div key={key} className="bg-gray-50 rounded-xl p-3">
                                                                <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-1">{key}</p>
                                                                <p className="text-xs text-gray-700 whitespace-pre-wrap">{val}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </details>
                                            ) : null}
                                        </div>
                                    </div>
                                ) : null}

                                {/* Notes */}
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <MessageSquare className="w-4 h-4 text-gray-400" />
                                        <h3 className="font-semibold text-gray-900 text-sm">Ghi chú Admin</h3>
                                    </div>
                                    <textarea
                                        value={notes}
                                        onChange={(e) => setNotes(e.target.value)}
                                        placeholder="Thêm ghi chú về ứng viên..."
                                        rows={3}
                                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all"
                                    />
                                    <Button size="sm" onClick={handleSaveNotes} className="mt-2 bg-blue-600 hover:bg-blue-700 text-white shadow-sm">
                                        Lưu ghi chú
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </AdminLayout>
    );
};

// Don't use default layout for admin pages
CandidatesAdmin.getLayout = function getLayout(page) {
    return page;
};

// Force SSR to avoid Firebase init during static build
export async function getServerSideProps() {
    return { props: {} };
}

export default CandidatesAdmin;
