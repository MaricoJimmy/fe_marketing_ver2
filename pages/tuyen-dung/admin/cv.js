import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import {
  FileText,
  Mail,
  User,
  Briefcase,
  Calendar,
  ExternalLink,
  Eye,
  X,
  Loader2,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/firebase";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  where,
} from "firebase/firestore";
import { Toaster } from "sonner";
import AdminLayout from "@/components/tuyen-dung/AdminLayout";

const AdminCVPage = () => {
  const router = useRouter();
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedApp, setSelectedApp] = useState(null);
  const [filterPosition, setFilterPosition] = useState("all");
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const appsRef = collection(db, "applications");
    const q = query(appsRef, orderBy("submittedAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const appsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setApplications(appsData);

      // Extract unique positions
      const uniquePositions = [...new Set(appsData.map((app) => app.position).filter(Boolean))];
      setPositions(uniquePositions);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Filter by position from query string
  useEffect(() => {
    if (router.query.position) {
      setFilterPosition(router.query.position);
    }
  }, [router.query]);

  const filteredApps =
    filterPosition === "all"
      ? applications
      : applications.filter((app) => app.position === filterPosition);

  const formatDate = (dateStr) => {
    if (!dateStr) return "N/A";
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString("vi-VN", {
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

  return (
    <AdminLayout>
      <Toaster position="top-center" richColors />
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Quản lý CV ứng tuyển</h1>
            <p className="text-gray-500 mt-1">
              {filteredApps.length} đơn ứng tuyển
              {filterPosition !== "all" && ` cho ${filterPosition}`}
            </p>
          </div>
        </div>

        {/* Filter */}
        <div className="flex gap-2 mb-6 flex-wrap">
          <button
            onClick={() => setFilterPosition("all")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filterPosition === "all"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            Tất cả ({applications.length})
          </button>
          {positions.map((pos) => {
            const count = applications.filter((a) => a.position === pos).length;
            return (
              <button
                key={pos}
                onClick={() => setFilterPosition(pos)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filterPosition === pos
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                {pos} ({count})
              </button>
            );
          })}
        </div>

        {/* Applications List */}
        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          </div>
        ) : filteredApps.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
            <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">Chưa có đơn ứng tuyển nào.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredApps.map((app, index) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
                className="bg-white rounded-xl p-5 border border-gray-100 hover:border-gray-200 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <User className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <h3 className="font-semibold text-gray-900 truncate">{app.name}</h3>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500 flex-wrap">
                      <span className="flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5" />
                        {app.email}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5" />
                        {app.position}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {formatDate(app.submittedAt)}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                    {app.cvUrl && (
                      <a href={app.cvUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="gap-1.5">
                          <ExternalLink className="w-3.5 h-3.5" />
                          CV
                        </Button>
                      </a>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-1.5"
                      onClick={() => setSelectedApp(app)}
                    >
                      <Eye className="w-3.5 h-3.5" />
                      Chi tiết
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedApp && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => setSelectedApp(null)}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 pointer-events-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Chi tiết ứng viên</h2>
                <button
                  onClick={() => setSelectedApp(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <User className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-xs text-gray-500">Họ tên</p>
                    <p className="font-medium">{selectedApp.name}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-xs text-gray-500">Email</p>
                    <p className="font-medium">{selectedApp.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Briefcase className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-xs text-gray-500">Vị trí ứng tuyển</p>
                    <p className="font-medium">{selectedApp.position}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-xs text-gray-500">Ngày gửi</p>
                    <p className="font-medium">{formatDate(selectedApp.submittedAt)}</p>
                  </div>
                </div>

                {selectedApp.cvUrl && (
                  <a
                    href={selectedApp.cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <Download className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-xs text-blue-500">Link CV</p>
                      <p className="font-medium text-blue-700 truncate max-w-xs">
                        {selectedApp.cvUrl}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-blue-500 ml-auto" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
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
