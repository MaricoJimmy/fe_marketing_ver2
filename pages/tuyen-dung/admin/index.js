import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import { toast, Toaster } from "sonner";
import AdminLayout from "@/components/tuyen-dung/AdminLayout";
import Link from "next/link";

const AdminJDPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingJob, setEditingJob] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
  const [saving, setSaving] = useState(false);

  const emptyJob = {
    title: "",
    location: "Hà Nội",
    experience: "",
    salary: "",
    type: "Full-time",
    description: "",
    requirements: [""],
    benefits: [""],
    isActive: true,
    order: 0,
  };

  useEffect(() => {
    const jobsRef = collection(db, "jobs");
    const q = query(jobsRef, orderBy("order", "asc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const jobsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setJobs(jobsData);
      setLoading(false);
    });

    return () => unsubscribe();
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

      if (isCreating) {
        delete jobData.id;
        await addDoc(collection(db, "jobs"), jobData);
        toast.success("Tạo JD thành công!");
      } else {
        const { id, ...updateData } = jobData;
        await updateDoc(doc(db, "jobs", id), updateData);
        toast.success("Cập nhật JD thành công!");
      }

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
      await deleteDoc(doc(db, "jobs", jobId));
      toast.success("Đã xóa JD.");
    } catch (error) {
      console.error("Error deleting job:", error);
      toast.error("Có lỗi xảy ra.");
    }
  };

  const toggleActive = async (job) => {
    try {
      await updateDoc(doc(db, "jobs", job.id), { isActive: !job.isActive });
      toast.success(job.isActive ? "Đã ẩn JD" : "Đã hiện JD");
    } catch (error) {
      console.error("Error toggling job:", error);
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

  // Edit Form
  if (editingJob) {
    return (
      <AdminLayout>
        <Toaster position="top-center" richColors />
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-2xl font-bold text-gray-900">
                {isCreating ? "Tạo JD mới" : "Chỉnh sửa JD"}
              </h1>
              <Button
                variant="ghost"
                onClick={() => {
                  setEditingJob(null);
                  setIsCreating(false);
                }}
              >
                Hủy
              </Button>
            </div>

            <div className="space-y-6 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              {/* Title */}
              <div>
                <Label className="mb-2 block">Tiêu đề vị trí *</Label>
                <Input
                  value={editingJob.title}
                  onChange={(e) =>
                    setEditingJob({ ...editingJob, title: e.target.value })
                  }
                  placeholder="VD: Full Stack Developer"
                />
              </div>

              {/* Location & Experience */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="mb-2 block">Địa điểm</Label>
                  <Select
                    value={editingJob.location}
                    onValueChange={(value) =>
                      setEditingJob({ ...editingJob, location: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Hà Nội">Hà Nội</SelectItem>
                      <SelectItem value="HCM">TP. HCM</SelectItem>
                      <SelectItem value="Hà Nội / HCM">Hà Nội / HCM</SelectItem>
                      <SelectItem value="Remote">Remote</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="mb-2 block">Kinh nghiệm</Label>
                  <Input
                    value={editingJob.experience}
                    onChange={(e) =>
                      setEditingJob({ ...editingJob, experience: e.target.value })
                    }
                    placeholder="VD: 2+ năm"
                  />
                </div>
              </div>

              {/* Salary & Type */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="mb-2 block">Mức lương</Label>
                  <Input
                    value={editingJob.salary}
                    onChange={(e) =>
                      setEditingJob({ ...editingJob, salary: e.target.value })
                    }
                    placeholder="VD: Từ 15 triệu + Thưởng"
                  />
                </div>
                <div>
                  <Label className="mb-2 block">Hình thức</Label>
                  <Select
                    value={editingJob.type}
                    onValueChange={(value) =>
                      setEditingJob({ ...editingJob, type: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Full-time">Full-time</SelectItem>
                      <SelectItem value="Part-time">Part-time</SelectItem>
                      <SelectItem value="Intern">Intern</SelectItem>
                      <SelectItem value="Contract">Contract</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Order & Active */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="mb-2 block">Thứ tự hiển thị</Label>
                  <Input
                    type="number"
                    value={editingJob.order}
                    onChange={(e) =>
                      setEditingJob({ ...editingJob, order: parseInt(e.target.value) || 0 })
                    }
                  />
                </div>
                <div className="flex items-end">
                  <Button
                    variant={editingJob.isActive ? "default" : "outline"}
                    className="gap-2"
                    onClick={() =>
                      setEditingJob({ ...editingJob, isActive: !editingJob.isActive })
                    }
                  >
                    {editingJob.isActive ? (
                      <>
                        <Eye className="w-4 h-4" />
                        Đang hiển thị
                      </>
                    ) : (
                      <>
                        <EyeOff className="w-4 h-4" />
                        Đang ẩn
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {/* Description */}
              <div>
                <Label className="mb-2 block">Mô tả công việc</Label>
                <Textarea
                  value={editingJob.description}
                  onChange={(e) =>
                    setEditingJob({ ...editingJob, description: e.target.value })
                  }
                  placeholder="Mô tả chi tiết về công việc..."
                  rows={5}
                />
              </div>

              {/* Requirements */}
              <div>
                <Label className="mb-2 block">Yêu cầu</Label>
                <div className="space-y-2">
                  {(editingJob.requirements || []).map((req, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        value={req}
                        onChange={(e) =>
                          updateListItem("requirements", index, e.target.value)
                        }
                        placeholder={`Yêu cầu ${index + 1}`}
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeListItem("requirements", index)}
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </Button>
                    </div>
                  ))}
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-1"
                    onClick={() => addListItem("requirements")}
                  >
                    <Plus className="w-4 h-4" />
                    Thêm yêu cầu
                  </Button>
                </div>
              </div>

              {/* Benefits */}
              <div>
                <Label className="mb-2 block">Quyền lợi</Label>
                <div className="space-y-2">
                  {(editingJob.benefits || []).map((benefit, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        value={benefit}
                        onChange={(e) =>
                          updateListItem("benefits", index, e.target.value)
                        }
                        placeholder={`Quyền lợi ${index + 1}`}
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeListItem("benefits", index)}
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </Button>
                    </div>
                  ))}
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-1"
                    onClick={() => addListItem("benefits")}
                  >
                    <Plus className="w-4 h-4" />
                    Thêm quyền lợi
                  </Button>
                </div>
              </div>

              {/* Save Button */}
              <Button
                className="w-full gap-2 bg-blue-600 hover:bg-blue-700"
                onClick={handleSave}
                disabled={saving}
              >
                {saving ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Đang lưu...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    {isCreating ? "Tạo JD" : "Lưu thay đổi"}
                  </>
                )}
              </Button>
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
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Quản lý Job Descriptions</h1>
            <p className="text-gray-500 mt-1">{jobs.length} vị trí</p>
          </div>
          <div className="flex gap-3">
            <Link href="/tuyen-dung/admin/cv">
              <Button variant="outline" className="gap-2">
                <Users className="w-4 h-4" />
                Xem CV
              </Button>
            </Link>
            <Button
              className="gap-2 bg-blue-600 hover:bg-blue-700"
              onClick={() => {
                setEditingJob({ ...emptyJob, order: jobs.length });
                setIsCreating(true);
              }}
            >
              <Plus className="w-4 h-4" />
              Tạo JD mới
            </Button>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          </div>
        ) : jobs.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
            <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">Chưa có JD nào. Hãy tạo JD đầu tiên!</p>
          </div>
        ) : (
          <div className="space-y-3">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-5 border border-gray-100 hover:border-gray-200 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-gray-900">{job.title}</h3>
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${
                          job.isActive
                            ? "bg-green-50 text-green-700"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {job.isActive ? (
                          <>
                            <Check className="w-3 h-3" /> Active
                          </>
                        ) : (
                          "Hidden"
                        )}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      {job.location} · {job.experience} · {job.type}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => toggleActive(job)}
                      title={job.isActive ? "Ẩn" : "Hiện"}
                    >
                      {job.isActive ? (
                        <Eye className="w-4 h-4 text-gray-500" />
                      ) : (
                        <EyeOff className="w-4 h-4 text-gray-400" />
                      )}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        setEditingJob({ ...job });
                        setIsCreating(false);
                      }}
                    >
                      <Edit className="w-4 h-4 text-blue-600" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(job.id)}
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
                  </div>
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

export default AdminJDPage;
