import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Mail,
  User,
  Briefcase,
  Calendar,
  ExternalLink,
  X,
  Loader2,
  Download,
  Inbox,
  CheckCircle,
  Clock,
  XCircle,
  ThumbsUp,
  ThumbsDown,
  Phone,
  UserPlus,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { db } from "@/lib/firebase";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  doc,
  updateDoc,
  addDoc,
} from "firebase/firestore";
import { Toaster, toast } from "sonner";
import AdminLayout from "@/components/tuyen-dung/AdminLayout";

const formatDate = (dateStr) => {
  if (!dateStr) return "N/A";
  try {
    return new Date(dateStr).toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return dateStr;
  }
};

const cvStatusConfig = {
  pending: { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200", label: "Chờ duyệt", dot: "bg-amber-500" },
  approved: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200", label: "Đã duyệt", dot: "bg-emerald-500" },
  rejected: { bg: "bg-red-50", text: "text-red-600", border: "border-red-200", label: "Từ chối", dot: "bg-red-500" },
};

const testStatusConfig = {
  Pass: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200", label: "Đạt", dot: "bg-emerald-500" },
  Pending: { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200", label: "Chờ", dot: "bg-amber-500" },
  Reject: { bg: "bg-red-50", text: "text-red-600", border: "border-red-200", label: "Loại", dot: "bg-red-500" },
};

const getCVStatusBadge = (status) => {
  const c = cvStatusConfig[status] || cvStatusConfig.pending;
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold ${c.bg} ${c.text} border ${c.border}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
      CV: {c.label}
    </span>
  );
};

const getTestStatusBadge = (status) => {
  const c = testStatusConfig[status] || testStatusConfig.Pending;
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold ${c.bg} ${c.text} border ${c.border}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
      {c.label}
    </span>
  );
};

const getUTC7Timestamp = () => {
  const now = new Date();
  const utc7Offset = 7 * 60 * 60 * 1000;
  const utc7Time = new Date(now.getTime() + utc7Offset);
  return utc7Time.toISOString().replace("Z", "+07:00");
};

const AdminCVPage = () => {
  const router = useRouter();
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedApp, setSelectedApp] = useState(null);
  const [filterPosition, setFilterPosition] = useState("all");
  const [filterCVStatus, setFilterCVStatus] = useState("all");
  const [positions, setPositions] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [addFormData, setAddFormData] = useState({ name: "", email: "", phone: "", position: "" });
  const [addingEmail, setAddingEmail] = useState(false);

  useEffect(() => {
    const appsRef = collection(db, "applications");
    const q = query(appsRef, orderBy("submittedAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const appsData = snapshot.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      }));
      setApplications(appsData);
      const uniquePositions = [...new Set(appsData.map((app) => app.position).filter(Boolean))];
      setPositions(uniquePositions);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (router.query.position) {
      setFilterPosition(router.query.position);
    }
  }, [router.query]);

  const handleApproveCV = async (appId, e) => {
    if (e) e.stopPropagation();
    try {
      await updateDoc(doc(db, "applications", appId), {
        cv_status: "approved",
        cv_reviewed_at: getUTC7Timestamp(),
      });
      toast.success("Đã duyệt CV thành công!");
      // Update selected app if viewing detail
      if (selectedApp?.id === appId) {
        setSelectedApp((prev) => ({ ...prev, cv_status: "approved", cv_reviewed_at: getUTC7Timestamp() }));
      }
    } catch (error) {
      console.error("Error approving CV:", error);
      toast.error("Có lỗi xảy ra khi duyệt CV.");
    }
  };

  const handleRejectCV = async (appId, e) => {
    if (e) e.stopPropagation();
    try {
      await updateDoc(doc(db, "applications", appId), {
        cv_status: "rejected",
        cv_reviewed_at: getUTC7Timestamp(),
      });
      toast.success("Đã từ chối CV.");
      if (selectedApp?.id === appId) {
        setSelectedApp((prev) => ({ ...prev, cv_status: "rejected", cv_reviewed_at: getUTC7Timestamp() }));
      }
    } catch (error) {
      console.error("Error rejecting CV:", error);
      toast.error("Có lỗi xảy ra.");
    }
  };

  const handleAddForTest = async (e) => {
    e.preventDefault();
    if (!addFormData.name || !addFormData.email || !addFormData.position) {
      toast.error("Vui lòng điền tên, email và vị trí.");
      return;
    }
    setAddingEmail(true);
    try {
      await addDoc(collection(db, "applications"), {
        name: addFormData.name,
        email: addFormData.email.trim().toLowerCase(),
        phone: addFormData.phone || "",
        position: addFormData.position,
        cvUrl: "",
        submittedAt: getUTC7Timestamp(),
        status: "new",
        cv_status: "approved",
        cv_reviewed_at: getUTC7Timestamp(),
        source: "admin_added",
      });
      toast.success(`Đã thêm ${addFormData.email} — ứng viên có thể làm test ngay!`);
      setAddFormData({ name: "", email: "", phone: "", position: "" });
      setShowAddForm(false);
    } catch (error) {
      console.error("Error adding email for test:", error);
      toast.error("Có lỗi xảy ra.");
    } finally {
      setAddingEmail(false);
    }
  };

  const filteredApps = applications.filter((app) => {
    const posMatch = filterPosition === "all" || app.position === filterPosition;
    const cvMatch = filterCVStatus === "all" || (app.cv_status || "pending") === filterCVStatus;
    return posMatch && cvMatch;
  });

  // Stats
  const pendingCount = applications.filter((a) => (a.cv_status || "pending") === "pending").length;
  const approvedCount = applications.filter((a) => a.cv_status === "approved").length;
  const rejectedCount = applications.filter((a) => a.cv_status === "rejected").length;

  return (
    <AdminLayout>
      <Toaster position="top-center" richColors />
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Quản lý hồ sơ ứng tuyển</h1>
            <p className="text-sm text-gray-500 mt-1">
              {filteredApps.length} hồ sơ
              {filterPosition !== "all" ? ` cho ${filterPosition}` : ""}
              {filterCVStatus !== "all" ? ` — ${cvStatusConfig[filterCVStatus]?.label}` : ""}
            </p>
          </div>
          <div className="flex items-center gap-3">
            {/* Stat badges */}
            <div className="flex items-center gap-2 bg-amber-50 rounded-xl border border-amber-200 px-3 py-2">
              <Clock className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-bold text-amber-700">{pendingCount}</span>
              <span className="text-xs text-amber-600">chờ duyệt</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-xl border border-gray-200/60 px-3 py-2 shadow-sm">
              <Inbox className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-bold text-gray-900">{applications.length}</span>
              <span className="text-xs text-gray-500">tổng</span>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowAddForm(!showAddForm)}
            className="gap-1.5 text-xs shadow-sm"
          >
            <UserPlus className="w-3.5 h-3.5" />
            Thêm email test
          </Button>
        </div>

        {/* Add Email For Test */}
        <AnimatePresence>
          {showAddForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <form onSubmit={handleAddForTest} className="mb-6 bg-blue-50 rounded-2xl p-5 border border-blue-200">
                <div className="flex items-center gap-2 mb-3">
                  <UserPlus className="w-4 h-4 text-blue-600" />
                  <h3 className="text-sm font-semibold text-gray-900">Thêm ứng viên vào test</h3>
                  <span className="text-xs text-gray-500">— Dành cho ứng viên nộp CV từ nền tảng khác</span>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  <Input
                    placeholder="Họ tên *"
                    value={addFormData.name}
                    onChange={(e) => setAddFormData({ ...addFormData, name: e.target.value })}
                    required
                    className="bg-white h-10 text-sm"
                  />
                  <Input
                    type="email"
                    placeholder="Email *"
                    value={addFormData.email}
                    onChange={(e) => setAddFormData({ ...addFormData, email: e.target.value })}
                    required
                    className="bg-white h-10 text-sm"
                  />
                  <Input
                    placeholder="Vị trí *"
                    value={addFormData.position}
                    onChange={(e) => setAddFormData({ ...addFormData, position: e.target.value })}
                    required
                    className="bg-white h-10 text-sm"
                  />
                  <Button type="submit" size="sm" className="gap-1.5 bg-blue-600 hover:bg-blue-700 text-white h-10" disabled={addingEmail}>
                    {addingEmail ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Plus className="w-3.5 h-3.5" />}
                    Thêm & duyệt
                  </Button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CV Status Filter */}
        <div className="flex gap-2 mb-4 flex-wrap">
          {[
            { value: "all", label: `Tất cả (${applications.length})` },
            { value: "pending", label: `Chờ duyệt (${pendingCount})` },
            { value: "approved", label: `Đã duyệt (${approvedCount})` },
            { value: "rejected", label: `Từ chối (${rejectedCount})` },
          ].map((f) => (
            <button
              key={f.value}
              onClick={() => setFilterCVStatus(f.value)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                filterCVStatus === f.value
                  ? "bg-slate-900 text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Position Filter */}
        <div className="flex gap-2 mb-6 flex-wrap">
          <button
            onClick={() => setFilterPosition("all")}
            className={`px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all ${
              filterPosition === "all"
                ? "bg-blue-100 text-blue-700 border border-blue-200"
                : "bg-gray-50 text-gray-500 border border-gray-100 hover:bg-gray-100"
            }`}
          >
            Tất cả vị trí
          </button>
          {positions.map((pos) => {
            const count = applications.filter((a) => a.position === pos).length;
            return (
              <button
                key={pos}
                onClick={() => setFilterPosition(pos)}
                className={`px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all ${
                  filterPosition === pos
                    ? "bg-blue-100 text-blue-700 border border-blue-200"
                    : "bg-gray-50 text-gray-500 border border-gray-100 hover:bg-gray-100"
                }`}
              >
                {pos} ({count})
              </button>
            );
          })}
        </div>

        {/* Applications List */}
        {loading ? (
          <div className="flex justify-center py-16">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          </div>
        ) : filteredApps.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-200/60">
            <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 mb-1">Chưa có hồ sơ nào</p>
            <p className="text-sm text-gray-400">Hồ sơ ứng tuyển sẽ hiển thị ở đây</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredApps.map((app, index) => {
              const appCVStatus = app.cv_status || (app.round1_score_total !== undefined ? "approved" : "pending");
              return (
                <motion.div
                  key={app.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                  className="group bg-white rounded-2xl p-5 border border-gray-200/60 hover:border-gray-300/60 hover:shadow-md transition-all duration-300 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    {/* Clickable info area — opens modal */}
                    <div
                      className="flex items-center gap-4 flex-1 min-w-0 cursor-pointer"
                      onClick={() => setSelectedApp(app)}
                    >
                      {/* Avatar */}
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-md">
                        <span className="text-white text-sm font-bold">{(app.name || "?").charAt(0).toUpperCase()}</span>
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-gray-900 text-sm truncate">{app.name}</h3>
                          {getCVStatusBadge(appCVStatus)}
                        </div>
                        <div className="flex items-center gap-3 text-xs text-gray-500 mt-1 flex-wrap">
                          <span className="flex items-center gap-1.5">
                            <Mail className="w-3 h-3" />
                            {app.email}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Briefcase className="w-3 h-3" />
                            <span className="text-blue-600 font-medium">{app.position}</span>
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3 h-3" />
                            {formatDate(app.submittedAt)}
                          </span>
                        </div>

                        {/* Test Status Badges */}
                        {app.round1_score_total !== undefined ? (
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-[10px] text-gray-400">V1:</span>
                            <span className="text-xs font-bold text-gray-700">{app.round1_score_total}</span>
                            {getTestStatusBadge(app.round1_status)}
                            {app.round2_score_total !== undefined && app.round2_score_total !== null ? (
                              <>
                                <span className="text-gray-300">|</span>
                                <span className="text-[10px] text-gray-400">V2:</span>
                                <span className="text-xs font-bold text-gray-700">{app.round2_score_total}</span>
                                {getTestStatusBadge(app.round2_status)}
                              </>
                            ) : null}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    {/* Action buttons — NOT inside the clickable area */}
                    <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                      {appCVStatus === "pending" && (
                        <>
                          <button
                            type="button"
                            onClick={() => handleApproveCV(app.id)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md border border-emerald-200 text-emerald-700 bg-white hover:bg-emerald-50 shadow-sm transition-colors cursor-pointer"
                          >
                            <ThumbsUp className="w-3.5 h-3.5" />
                            Duyệt
                          </button>
                          <button
                            type="button"
                            onClick={() => handleRejectCV(app.id)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md border border-red-200 text-red-600 bg-white hover:bg-red-50 shadow-sm transition-colors cursor-pointer"
                          >
                            <ThumbsDown className="w-3.5 h-3.5" />
                            Từ chối
                          </button>
                        </>
                      )}
                      {app.cvUrl ? (
                        <a
                          href={app.cvUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md border border-gray-200 text-gray-600 bg-white hover:bg-gray-50 shadow-sm transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          CV
                        </a>
                      ) : null}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedApp ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
              onClick={() => setSelectedApp(null)}
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl pointer-events-auto overflow-hidden max-h-[90vh] flex flex-col"
              >
                {/* Header */}
                <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold">{(selectedApp.name || "?").charAt(0).toUpperCase()}</span>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-gray-900">{selectedApp.name}</h2>
                      <div className="flex items-center gap-2">
                        <p className="text-sm text-gray-500">{selectedApp.position}</p>
                        {getCVStatusBadge(selectedApp.cv_status || "pending")}
                      </div>
                    </div>
                  </div>
                  <button onClick={() => setSelectedApp(null)} className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                    <X className="w-5 h-5 text-gray-400" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-5 overflow-y-auto flex-1">
                  {/* Contact Info */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: User, label: "Họ tên", value: selectedApp.name },
                      { icon: Mail, label: "Email", value: selectedApp.email },
                      { icon: Phone, label: "SĐT", value: selectedApp.phone || "—" },
                      { icon: Briefcase, label: "Vị trí", value: selectedApp.position },
                      { icon: Calendar, label: "Ngày gửi", value: formatDate(selectedApp.submittedAt) },
                      { icon: Calendar, label: "Ngày duyệt", value: selectedApp.cv_reviewed_at ? formatDate(selectedApp.cv_reviewed_at) : "Chưa duyệt" },
                    ].map((item) => (
                      <div key={item.label} className="bg-gray-50 rounded-xl p-3">
                        <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">{item.label}</p>
                        <p className="text-sm font-medium text-gray-900 truncate">{item.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* CV Link */}
                  {selectedApp.cvUrl ? (
                    <a
                      href={selectedApp.cvUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3.5 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors group"
                    >
                      <Download className="w-5 h-5 text-blue-600" />
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] text-blue-500 uppercase tracking-wider">Link CV</p>
                        <p className="font-medium text-sm text-blue-700 truncate">{selectedApp.cvUrl}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    </a>
                  ) : null}

                  {/* CV Review Actions */}
                  {(selectedApp.cv_status || "pending") === "pending" && (
                    <div className="flex gap-3 p-4 bg-amber-50 rounded-xl border border-amber-200">
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-900 mb-1">⏳ CV đang chờ duyệt</p>
                        <p className="text-xs text-gray-500">Xem CV và quyết định cho ứng viên này</p>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={() => handleApproveCV(selectedApp.id)}
                          className="gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white"
                        >
                          <ThumbsUp className="w-3.5 h-3.5" />
                          Duyệt CV
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleRejectCV(selectedApp.id)}
                          className="gap-1.5 text-red-600 border-red-200 hover:bg-red-50"
                        >
                          <ThumbsDown className="w-3.5 h-3.5" />
                          Từ chối
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Round 1 */}
                  {selectedApp.round1_score_total !== undefined ? (
                    <div className="border border-gray-200 rounded-2xl overflow-hidden">
                      <div className="px-5 py-4 bg-gradient-to-r from-blue-50 to-white flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900 text-sm">Vòng 1 — MUG Interview</h3>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-gray-900">{selectedApp.round1_score_total}</span>
                          {getTestStatusBadge(selectedApp.round1_status)}
                        </div>
                      </div>
                      <div className="p-5">
                        {selectedApp.round1_score_breakdown ? (
                          <div className="grid grid-cols-4 gap-3 mb-4">
                            {[
                              { label: "Số liệu", value: selectedApp.round1_score_breakdown.numeric },
                              { label: "Tham vọng", value: selectedApp.round1_score_breakdown.ambition },
                              { label: "Logic", value: selectedApp.round1_score_breakdown.reasoning },
                              { label: "Trách nhiệm", value: selectedApp.round1_score_breakdown.accountability },
                            ].map((s) => (
                              <div key={s.label} className="text-center bg-gray-50 rounded-xl p-3">
                                <p className="text-[10px] text-gray-500 uppercase tracking-wider">{s.label}</p>
                                <p className="text-lg font-bold text-gray-900 mt-1">{s.value}<span className="text-xs text-gray-400 font-normal">/25</span></p>
                              </div>
                            ))}
                          </div>
                        ) : null}
                        {selectedApp.round1_feedback ? (
                          <ul className="space-y-1.5">
                            {selectedApp.round1_feedback.map((f, i) => (
                              <li key={i} className="text-xs text-gray-600 flex items-start gap-2">
                                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-blue-500" />
                                {f}
                              </li>
                            ))}
                          </ul>
                        ) : null}
                        {selectedApp.round1_hard_reject_reason ? (
                          <p className="mt-3 text-xs text-red-600 bg-red-50 rounded-xl px-4 py-2.5 font-medium">
                            ⚠️ {selectedApp.round1_hard_reject_reason}
                          </p>
                        ) : null}
                        {selectedApp.round1_answers ? (
                          <details className="mt-4">
                            <summary className="text-xs text-blue-600 cursor-pointer hover:text-blue-800 font-medium">Xem câu trả lời gốc</summary>
                            <div className="mt-3 space-y-2">
                              {Object.entries(selectedApp.round1_answers).map(([key, val]) => (
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

                  {/* Round 2 */}
                  {selectedApp.round2_score_total !== undefined && selectedApp.round2_score_total !== null ? (
                    <div className="border border-gray-200 rounded-2xl overflow-hidden">
                      <div className="px-5 py-4 bg-gradient-to-r from-amber-50 to-white flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900 text-sm">Vòng 2 — Case Study</h3>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-gray-900">{selectedApp.round2_score_total}</span>
                          {getTestStatusBadge(selectedApp.round2_status)}
                        </div>
                      </div>
                      <div className="p-5">
                        {selectedApp.round2_score_breakdown ? (
                          <div className="grid grid-cols-4 gap-3 mb-4">
                            {[
                              { label: "Chiến lược", value: selectedApp.round2_score_breakdown.strategy, max: 30 },
                              { label: "Số liệu", value: selectedApp.round2_score_breakdown.numeric, max: 30 },
                              { label: "Quyết định", value: selectedApp.round2_score_breakdown.decision, max: 20 },
                              { label: "Leadership", value: selectedApp.round2_score_breakdown.leadership, max: 20 },
                            ].map((s) => (
                              <div key={s.label} className="text-center bg-gray-50 rounded-xl p-3">
                                <p className="text-[10px] text-gray-500 uppercase tracking-wider">{s.label}</p>
                                <p className="text-lg font-bold text-gray-900 mt-1">{s.value}<span className="text-xs text-gray-400 font-normal">/{s.max}</span></p>
                              </div>
                            ))}
                          </div>
                        ) : null}
                        {selectedApp.round2_feedback ? (
                          <ul className="space-y-1.5">
                            {selectedApp.round2_feedback.map((f, i) => (
                              <li key={i} className="text-xs text-gray-600 flex items-start gap-2">
                                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-500" />
                                {f}
                              </li>
                            ))}
                          </ul>
                        ) : null}
                        {selectedApp.round2_answers ? (
                          <details className="mt-4">
                            <summary className="text-xs text-blue-600 cursor-pointer hover:text-blue-800 font-medium">Xem câu trả lời gốc</summary>
                            <div className="mt-3 space-y-2">
                              {Object.entries(selectedApp.round2_answers).map(([key, val]) => (
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
                </div>
              </motion.div>
            </div>
          </>
        ) : null}
      </AnimatePresence>
    </AdminLayout>
  );
};

// Don't use default layout for admin pages
AdminCVPage.getLayout = function getLayout(page) {
  return page;
};

// Force SSR to avoid Firebase init during static build
export async function getServerSideProps() {
  return { props: {} };
}

export default AdminCVPage;
