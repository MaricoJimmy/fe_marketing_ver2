import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Trash2,
  Edit,
  Save,
  FileText,
  Loader2,
  ArrowLeft,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { recruitmentApi } from "@/lib/recruitmentApi";
import { toast, Toaster } from "sonner";
import AdminLayout from "@/components/tuyen-dung/AdminLayout";

const AdminTestPage = () => {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingTest, setEditingTest] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
  const [saving, setSaving] = useState(false);

  const fetchTests = async () => {
    try {
      const data = await recruitmentApi.listQuestionnaires();
      setTests(data || []);
    } catch (error) {
      console.error("Error fetching tests:", error);
      toast.error("Không tải được danh sách bài Test.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTests();
  }, []);

  const handleSave = async () => {
    if (!editingTest?.title) {
      toast.error("Vui lòng nhập tiêu đề cho bài test.");
      return;
    }

    setSaving(true);
    try {
      const payload = {
        title: editingTest.title,
        round1_questions: editingTest.round1_questions?.filter((q) => q.trim()) || [],
        round2_questions: editingTest.round2_questions?.filter((q) => q.trim()) || [],
      };

      if (isCreating) {
        await recruitmentApi.createQuestionnaire(payload);
        toast.success("Tạo Bài Test thành công!");
      } else {
        await recruitmentApi.updateQuestionnaire(editingTest.id, payload);
        toast.success("Cập nhật Bài Test thành công!");
      }

      await fetchTests();
      setEditingTest(null);
      setIsCreating(false);
    } catch (error) {
      console.error("Error saving test:", error);
      toast.error("Có lỗi xảy ra. Vui lòng thử lại.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Bạn có chắc muốn xóa Bài Test này?")) return;
    try {
      await recruitmentApi.deleteQuestionnaire(id);
      await fetchTests();
      toast.success("Đã xóa Bài Test.");
    } catch (error) {
      console.error("Error deleting test:", error);
      toast.error("Có lỗi xảy ra.");
    }
  };

  const addQuestion = (field) => {
    setEditingTest({
      ...editingTest,
      [field]: [...(editingTest[field] || []), ""],
    });
  };

  const updateQuestion = (field, index, value) => {
    const updated = [...(editingTest[field] || [])];
    updated[index] = value;
    setEditingTest({ ...editingTest, [field]: updated });
  };

  const removeQuestion = (field, index) => {
    const updated = [...(editingTest[field] || [])];
    updated.splice(index, 1);
    setEditingTest({ ...editingTest, [field]: updated });
  };

  // Edit Form
  if (editingTest) {
    return (
      <AdminLayout>
        <Toaster position="top-center" richColors />
        <div className="max-w-3xl mx-auto py-6">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <button
                onClick={() => { setEditingTest(null); setIsCreating(false); }}
                className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-500" />
              </button>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  {isCreating ? "Tạo Bài Test mới" : "Chỉnh sửa Bài Test"}
                </h1>
                <p className="text-xs text-gray-500 mt-0.5">
                  {isCreating ? "Cấu hình câu hỏi phỏng vấn và case study cho bài test độc lập" : `Đang chỉnh sửa: ${editingTest.title}`}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200/60 overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

              <div className="p-6 space-y-8">
                {/* Title */}
                <div>
                  <Label className="mb-2 block text-sm font-semibold text-gray-900">Tên bài Test *</Label>
                  <Input
                    value={editingTest.title}
                    onChange={(e) => setEditingTest({ ...editingTest, title: e.target.value })}
                    placeholder="VD: Bài test dành cho Senior Frontend"
                    className="h-11"
                  />
                  <p className="text-xs text-gray-500 mt-1.5">Tên này sẽ hiển thị để bạn chọn khi tạo JD.</p>
                </div>

                <div className="border-t border-gray-100" />

                {/* Round 1 */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center justify-between">
                    <span>Vòng 1 - Câu hỏi phỏng vấn (MUG)</span>
                    <span className="text-xs font-normal text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
                      {(editingTest.round1_questions || []).length} câu
                    </span>
                  </h3>
                  <div className="space-y-3">
                    {(editingTest.round1_questions || []).map((q, index) => (
                      <div key={`r1-${index}`} className="flex gap-3 items-start group">
                        <span className="text-xs font-medium text-gray-400 w-6 text-center shrink-0 mt-3">{index + 1}</span>
                        <Input
                          value={q}
                          onChange={(e) => updateQuestion("round1_questions", index, e.target.value)}
                          placeholder="Nhập câu hỏi mở..."
                          className="h-11 bg-gray-50/50 hover:bg-white transition-colors"
                        />
                        <button
                          onClick={() => removeQuestion("round1_questions", index)}
                          className="p-2.5 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors shrink-0 mt-0.5 opacity-0 group-hover:opacity-100"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 text-indigo-600 border-indigo-200 bg-indigo-50/50 hover:bg-indigo-50 hover:text-indigo-700 ml-9 mt-2"
                      onClick={() => addQuestion("round1_questions")}
                    >
                      <Plus className="w-4 h-4" /> Thêm câu hỏi
                    </Button>
                  </div>
                </div>

                <div className="border-t border-gray-100" />

                {/* Round 2 */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center justify-between">
                    <span>Vòng 2 - Case Study & Chuyên Môn</span>
                    <span className="text-xs font-normal text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
                      {(editingTest.round2_questions || []).length} câu
                    </span>
                  </h3>
                  <div className="space-y-3">
                    {(editingTest.round2_questions || []).map((q, index) => (
                      <div key={`r2-${index}`} className="flex gap-3 items-start group">
                        <span className="text-xs font-medium text-gray-400 w-6 text-center shrink-0 mt-3">{index + 1}</span>
                        <Input
                          value={q}
                          onChange={(e) => updateQuestion("round2_questions", index, e.target.value)}
                          placeholder="Nhập case study / bài tập chuyên môn..."
                          className="h-11 bg-gray-50/50 hover:bg-white transition-colors"
                        />
                        <button
                          onClick={() => removeQuestion("round2_questions", index)}
                          className="p-2.5 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors shrink-0 mt-0.5 opacity-0 group-hover:opacity-100"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 text-purple-600 border-purple-200 bg-purple-50/50 hover:bg-purple-50 hover:text-purple-700 ml-9 mt-2"
                      onClick={() => addQuestion("round2_questions")}
                    >
                      <Plus className="w-4 h-4" /> Thêm Case Study
                    </Button>
                  </div>
                </div>
              </div>

              {/* Save */}
              <div className="px-6 py-4 bg-gray-50/80 border-t border-gray-100">
                <div className="flex justify-end gap-3">
                  <Button variant="outline" onClick={() => { setEditingTest(null); setIsCreating(false); }}>
                    Hủy
                  </Button>
                  <Button
                    className="gap-2 bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-600/20 px-8"
                    onClick={handleSave}
                    disabled={saving}
                  >
                    {saving ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Đang lưu...</>
                    ) : (
                      <><Save className="w-4 h-4" /> {isCreating ? "Tạo Bài Test" : "Lưu thay đổi"}</>
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
      <div className="max-w-5xl mx-auto py-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Quản lý Bài Test (Questionnaires)</h1>
            <p className="text-sm text-gray-500 mt-1">Tạo và chỉnh sửa nội dung bài test (Câu hỏi phỏng vấn V1, Case Study V2) cho ứng viên lập trình.</p>
          </div>
          <Button
            className="gap-2 bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-600/20"
            onClick={() => {
              setEditingTest({ title: "", round1_questions: [""], round2_questions: [""] });
              setIsCreating(true);
            }}
          >
            <Plus className="w-4 h-4" />
            Tạo Bài Test
          </Button>
        </div>

        {loading ? (
          <div className="flex justify-center py-16">
            <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
          </div>
        ) : tests.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-200/60 shadow-sm">
            <FileText className="w-12 h-12 text-indigo-300 mx-auto mb-4" />
            <p className="text-gray-900 font-medium mb-1">Chưa có Bài Test nào</p>
            <p className="text-sm text-gray-500">Tạo bài test để gán cho các vị trí tuyển dụng (JD).</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {tests.map((test, index) => (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white rounded-2xl border border-gray-200/60 p-5 shadow-sm hover:shadow-md transition-all flex flex-col h-full"
              >
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-4 truncate text-base" title={test.title}>{test.title}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg">
                      <span className="text-xs font-medium text-gray-600">Vòng 1 (Interview)</span>
                      <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">{(test.round1_questions || []).length} câu</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg">
                      <span className="text-xs font-medium text-gray-600">Vòng 2 (Case Study)</span>
                      <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-md">{(test.round2_questions || []).length} câu</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center pt-4 border-t border-gray-100 gap-2 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 gap-1.5 text-xs text-indigo-600 border-indigo-200 hover:bg-indigo-50"
                    onClick={() => {
                      setEditingTest(test);
                      setIsCreating(false);
                    }}
                  >
                    <Edit className="w-3.5 h-3.5" /> Sửa
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-1.5 text-xs text-red-500 border-red-200 hover:bg-red-50 flex-shrink-0"
                    onClick={() => handleDelete(test.id)}
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

AdminTestPage.getLayout = function getLayout(page) {
  return page;
};

export async function getServerSideProps() {
  return { props: {} };
}

export default AdminTestPage;
