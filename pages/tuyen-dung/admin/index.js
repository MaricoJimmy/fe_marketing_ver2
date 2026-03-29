import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Trash2,
  Edit,
  Save,
  FileText,
  Eye,
  EyeOff,
  Loader2,
  Check,
  Users,
  Briefcase,
  MapPin,
  ArrowLeft,
  X,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { recruitmentApi } from "@/lib/recruitmentApi";
import { toast, Toaster } from "sonner";
import AdminLayout from "@/components/tuyen-dung/AdminLayout";
import Link from "next/link";

const emptyJob = {
  title: "",
  location: "Hà Nội",
  experience: "",
  salary: "",
  type: "Full-time",
  description: "",
  requirements: [""],
  benefits: [""],
  round1_questions: [],
  round2_questions: [],
  is_active: true,
  order: 0,
};

const AdminJDPage = () => {
  const [jobs, setJobs] = useState([]);
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingJob, setEditingJob] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
  const [saving, setSaving] = useState(false);
  const [generatingTestForJob, setGeneratingTestForJob] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [jobsData, testsData] = await Promise.all([
        recruitmentApi.listJobs(false),
        recruitmentApi.listQuestionnaires()
      ]);
      setJobs(jobsData || []);
      setTests(testsData || []);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Không thể tải dữ liệu.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSave = async () => {
    if (!editingJob?.title) {
      toast.error("Vui lòng nhập tiêu đề.");
      return;
    }

    setSaving(true);
    try {
      const jobData = {
        ...editingJob,
        requirements: editingJob.requirements?.filter((r) => r.trim()) || [],
        benefits: editingJob.benefits?.filter((b) => b.trim()) || [],
      };

      const payload = {
        title: jobData.title,
        location: jobData.location,
        experience: jobData.experience,
        salary: jobData.salary,
        type: jobData.type,
        description: jobData.description,
        requirements: jobData.requirements,
        benefits: jobData.benefits,
        questionnaire_id: jobData.questionnaire_id || null,
        is_active: Boolean(jobData.is_active),
        order: Number(jobData.order || 0),
      };

      if (isCreating) {
        await recruitmentApi.createJob(payload);
        toast.success("Tạo JD thành công!");
      } else {
        await recruitmentApi.updateJob(jobData.id, payload);
        toast.success("Cập nhật JD thành công!");
      }

      await fetchData();
      setEditingJob(null);
      setIsCreating(false);
    } catch (error) {
      console.error("Error saving job:", error);
      toast.error("Có lỗi xảy ra. Vui lòng thử lại.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (jobId) => {
    if (!confirm("Bạn có chắc muốn xóa JD này?")) return;
    try {
      await recruitmentApi.deleteJob(jobId);
      await fetchData();
      toast.success("Đã xóa JD.");
    } catch (error) {
      console.error("Error deleting job:", error);
      toast.error("Có lỗi xảy ra.");
    }
  };

  const toggleActive = async (job) => {
    try {
      await recruitmentApi.toggleJob(job.id);
      await fetchData();
      toast.success(job.is_active ? "Đã ẩn JD" : "Đã hiện JD");
    } catch (error) {
      console.error("Error toggling job:", error);
    }
  };

  const handleGenerateTest = async (jobId) => {
    setGeneratingTestForJob(jobId);
    try {
      const updated = await recruitmentApi.generateJobTest(jobId);
      await fetchData();
      if (editingJob?.id === jobId) {
        setEditingJob((prev) => ({
          ...prev,
          questionnaire_id: updated.questionnaire_id || null,
        }));
      }
      toast.success("Đã tạo bộ câu hỏi test theo JD.");
    } catch (error) {
      console.error("Error generating test from JD:", error);
      toast.error("Không thể tạo bộ câu hỏi test. Vui lòng thử lại.");
    } finally {
      setGeneratingTestForJob(null);
    }
  };

  const addListItem = (field) => {
    setEditingJob({
      ...editingJob,
      [field]: [...(editingJob[field] || []), ""],
    });
  };

  const updateListItem = (field, index, value) => {
    const updated = [...(editingJob[field] || [])];
    updated[index] = value;
    setEditingJob({ ...editingJob, [field]: updated });
  };

  const removeListItem = (field, index) => {
    const updated = [...(editingJob[field] || [])];
    updated.splice(index, 1);
    setEditingJob({ ...editingJob, [field]: updated });
  };

  const activeJobs = jobs.filter((j) => j.is_active).length;
  const hiddenJobs = jobs.length - activeJobs;

  // Edit Form
  if (editingJob) {
    return (
      <AdminLayout>
        <Toaster position="top-center" richColors />
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <button
                onClick={() => { setEditingJob(null); setIsCreating(false); }}
                className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-500" />
              </button>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  {isCreating ? "Tạo JD mới" : "Chỉnh sửa JD"}
                </h1>
                <p className="text-xs text-gray-500 mt-0.5">
                  {isCreating ? "Tạo vị trí mới cho trang tuyển dụng" : `Đang chỉnh sửa: ${editingJob.title}`}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200/60 overflow-hidden">
              {/* Gradient top border */}
              <div className="h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-400" />

              <div className="p-6 space-y-6">
                {/* Section: Basic Info */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-blue-600" />
                    Thông tin cơ bản
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <Label className="mb-2 block text-xs font-medium text-gray-600">Tiêu đề vị trí *</Label>
                      <Input
                        value={editingJob.title}
                        onChange={(e) => setEditingJob({ ...editingJob, title: e.target.value })}
                        placeholder="VD: Full Stack Developer"
                        className="h-11"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="mb-2 block text-xs font-medium text-gray-600">Địa điểm</Label>
                        <Select
                          value={editingJob.location}
                          onValueChange={(value) => setEditingJob({ ...editingJob, location: value })}
                        >
                          <SelectTrigger className="h-11"><SelectValue /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Hà Nội">Hà Nội</SelectItem>
                            <SelectItem value="HCM">TP. HCM</SelectItem>
                            <SelectItem value="Hà Nội / HCM">Hà Nội / HCM</SelectItem>
                            <SelectItem value="Remote">Remote</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="mb-2 block text-xs font-medium text-gray-600">Kinh nghiệm</Label>
                        <Input
                          value={editingJob.experience}
                          onChange={(e) => setEditingJob({ ...editingJob, experience: e.target.value })}
                          placeholder="VD: 2+ năm"
                          className="h-11"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="mb-2 block text-xs font-medium text-gray-600">Mức lương</Label>
                        <Input
                          value={editingJob.salary}
                          onChange={(e) => setEditingJob({ ...editingJob, salary: e.target.value })}
                          placeholder="VD: Từ 15 triệu + Thưởng"
                          className="h-11"
                        />
                      </div>
                      <div>
                        <Label className="mb-2 block text-xs font-medium text-gray-600">Hình thức</Label>
                        <Select
                          value={editingJob.type}
                          onValueChange={(value) => setEditingJob({ ...editingJob, type: value })}
                        >
                          <SelectTrigger className="h-11"><SelectValue /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Full-time">Full-time</SelectItem>
                            <SelectItem value="Part-time">Part-time</SelectItem>
                            <SelectItem value="Intern">Intern</SelectItem>
                            <SelectItem value="Contract">Contract</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="mb-2 block text-xs font-medium text-gray-600">Thứ tự hiển thị</Label>
                        <Input
                          type="number"
                          value={editingJob.order}
                          onChange={(e) => setEditingJob({ ...editingJob, order: parseInt(e.target.value) || 0 })}
                          className="h-11"
                        />
                      </div>
                      <div className="flex items-end">
                        <button
                          onClick={() => setEditingJob({ ...editingJob, is_active: !editingJob.is_active })}
                          className={`h-11 px-4 rounded-xl text-sm font-medium flex items-center gap-2 transition-all ${
                            editingJob.is_active
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                              : "bg-gray-100 text-gray-500 border border-gray-200"
                          }`}
                        >
                          {editingJob.is_active ? ( <><Eye className="w-4 h-4" /> Đang hiển thị</> ) : ( <><EyeOff className="w-4 h-4" /> Đang ẩn</> )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-100" />

                {/* Section: Description */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-blue-600" />
                      Mô tả chi tiết
                    </h3>
                    {!isCreating && editingJob?.id ? (
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="gap-2"
                        onClick={() => handleGenerateTest(editingJob.id)}
                        disabled={generatingTestForJob === editingJob.id}
                      >
                        {generatingTestForJob === editingJob.id ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <Sparkles className="w-4 h-4" />
                        )}
                        Tạo bài test từ JD
                      </Button>
                    ) : null}
                  </div>
                  <Textarea
                    value={editingJob.description}
                    onChange={(e) => setEditingJob({ ...editingJob, description: e.target.value })}
                    placeholder="Mô tả chi tiết về công việc..."
                    rows={5}
                    className="resize-none"
                  />
                </div>

                {/* Settings Section (Bài Test) */}
                <div className="rounded-xl border border-gray-200 bg-indigo-50/30 p-5 space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="w-4 h-4 text-indigo-600" />
                    <h3 className="text-sm font-semibold text-gray-900">Thiết lập Bài Test</h3>
                  </div>
                  <div>
                    <Label className="mb-2 block text-xs font-medium text-gray-600">Bài Test (Questionnaire)</Label>
                    <Select
                      value={editingJob.questionnaire_id || "none"}
                      onValueChange={(value) => setEditingJob({ ...editingJob, questionnaire_id: value === "none" ? null : value })}
                    >
                      <SelectTrigger className="h-11 bg-white">
                        <SelectValue placeholder="Chọn Bài Test cho JD này" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none" className="text-gray-500 italic">-- Không gắn Test --</SelectItem>
                        {tests.map(test => (
                          <SelectItem key={test.id} value={test.id}>
                            {test.title} ({(test.round1_questions || []).length} CR1, {(test.round2_questions || []).length} CR2)
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <p className="text-[11px] text-gray-500 mt-2">
                      Ứng viên apply vị trí này sẽ làm bài test được chọn ở đây.
                      Bạn có thể quản lý danh sách này tại trang <Link href="/tuyen-dung/admin/tests" className="text-indigo-600 hover:underline inline-flex items-center gap-0.5">Quản lý Bài Test</Link>.
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-100" />

                {/* Section: Requirements */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-4">Yêu cầu</h3>
                  <div className="space-y-2">
                    {(editingJob.requirements || []).map((req, index) => (
                      <div key={index} className="flex gap-2 items-center">
                        <span className="text-xs text-gray-400 w-6 text-center flex-shrink-0">{index + 1}</span>
                        <Input
                          value={req}
                          onChange={(e) => updateListItem("requirements", index, e.target.value)}
                          placeholder={`Yêu cầu ${index + 1}`}
                          className="h-10"
                        />
                        <button
                          onClick={() => removeListItem("requirements", index)}
                          className="p-2 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors flex-shrink-0"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                    <button
                      className="flex items-center gap-1.5 text-xs font-medium text-blue-600 hover:text-blue-700 mt-2"
                      onClick={() => addListItem("requirements")}
                    >
                      <Plus className="w-3.5 h-3.5" />
                      Thêm yêu cầu
                    </button>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-100" />

                {/* Section: Benefits */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-4">Quyền lợi</h3>
                  <div className="space-y-2">
                    {(editingJob.benefits || []).map((benefit, index) => (
                      <div key={index} className="flex gap-2 items-center">
                        <span className="text-xs text-gray-400 w-6 text-center flex-shrink-0">{index + 1}</span>
                        <Input
                          value={benefit}
                          onChange={(e) => updateListItem("benefits", index, e.target.value)}
                          placeholder={`Quyền lợi ${index + 1}`}
                          className="h-10"
                        />
                        <button
                          onClick={() => removeListItem("benefits", index)}
                          className="p-2 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors flex-shrink-0"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                    <button
                      className="flex items-center gap-1.5 text-xs font-medium text-blue-600 hover:text-blue-700 mt-2"
                      onClick={() => addListItem("benefits")}
                    >
                      <Plus className="w-3.5 h-3.5" />
                      Thêm quyền lợi
                    </button>
                  </div>
                </div>
              </div>

              {/* Save */}
              <div className="px-6 py-4 bg-gray-50/80 border-t border-gray-100">
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => { setEditingJob(null); setIsCreating(false); }}
                  >
                    Hủy
                  </Button>
                  <Button
                    className="flex-1 gap-2 bg-blue-600 hover:bg-blue-700"
                    onClick={handleSave}
                    disabled={saving}
                  >
                    {saving ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Đang lưu...</>
                    ) : (
                      <><Save className="w-4 h-4" /> {isCreating ? "Tạo JD" : "Lưu thay đổi"}</>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </AdminLayout>
    );
  }

  // List View
  return (
    <AdminLayout>
      <Toaster position="top-center" richColors />
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Quản lý Job Descriptions</h1>
            <p className="text-sm text-gray-500 mt-1">Tạo và quản lý các vị trí tuyển dụng</p>
          </div>
          <Button
            className="gap-2 bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20"
            onClick={() => {
              setEditingJob({ ...emptyJob, order: jobs.length });
              setIsCreating(true);
            }}
          >
            <Plus className="w-4 h-4" />
            Tạo JD mới
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: "Tổng vị trí", value: jobs.length, icon: Briefcase, gradient: "from-blue-500 to-blue-600" },
            { label: "Đang hiện", value: activeJobs, icon: Eye, gradient: "from-emerald-500 to-emerald-600" },
            { label: "Đang ẩn", value: hiddenJobs, icon: EyeOff, gradient: "from-gray-400 to-gray-500" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-2xl border border-gray-200/60 p-5 shadow-sm">
              <div className="flex items-center gap-4">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center shadow-md`}>
                  <s.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{s.value}</p>
                  <p className="text-xs text-gray-500">{s.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Jobs */}
        {loading ? (
          <div className="flex justify-center py-16">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          </div>
        ) : jobs.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-200/60">
            <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 mb-1">Chưa có JD nào</p>
            <p className="text-sm text-gray-400">Hãy tạo JD đầu tiên!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                className="group bg-white rounded-2xl border border-gray-200/60 p-5 shadow-sm hover:shadow-md hover:border-gray-300/60 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <h3 className="font-semibold text-gray-900 truncate">{job.title}</h3>
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold flex-shrink-0 ${
                          job.is_active
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : "bg-gray-100 text-gray-500 border border-gray-200"
                        }`}
                      >
                        {job.is_active ? (<><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Active</>) : "Hidden"}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {job.location}</span>
                      <span>·</span>
                      <span>{job.experience || "—"}</span>
                      <span>·</span>
                      <span className="text-blue-600 font-medium">{job.type}</span>
                    </div>
                  </div>
                </div>

                {/* Salary */}
                {job.salary ? (
                  <p className="text-sm font-medium text-gray-700 mb-4">{job.salary}</p>
                ) : null}

                {/* Actions */}
                <div className="flex items-center gap-1.5 pt-3 border-t border-gray-100">
                  <button
                    onClick={() => toggleActive(job)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-500 hover:bg-gray-100 transition-colors"
                    title={job.is_active ? "Ẩn" : "Hiện"}
                  >
                    {job.is_active ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    {job.is_active ? "Ẩn" : "Hiện"}
                  </button>
                  <button
                    onClick={() => {
                      setEditingJob({
                        ...job,
                        round1_questions: job.round1_questions || [],
                        round2_questions: job.round2_questions || [],
                      });
                      setIsCreating(false);
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    <Edit className="w-3.5 h-3.5" />
                    Sửa
                  </button>
                  <button
                    onClick={() => handleGenerateTest(job.id)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-indigo-600 hover:bg-indigo-50 transition-colors"
                    disabled={generatingTestForJob === job.id}
                  >
                    {generatingTestForJob === job.id ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <Sparkles className="w-3.5 h-3.5" />
                    )}
                    Tạo test
                  </button>
                  <button
                    onClick={() => handleDelete(job.id)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-red-500 hover:bg-red-50 transition-colors ml-auto"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    Xóa
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

// Don't use default layout for admin pages
AdminJDPage.getLayout = function getLayout(page) {
  return page;
};

// Force SSR to avoid Firebase init during static build
export async function getServerSideProps() {
  return { props: {} };
}

export default AdminJDPage;
