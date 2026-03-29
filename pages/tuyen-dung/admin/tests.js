import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Trash2,
  Edit,
  Save,
  FileText,
  Loader2,
  ArrowLeft,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { recruitmentApi } from "@/lib/recruitmentApi";
import { toast, Toaster } from "sonner";
import AdminLayout from "@/components/tuyen-dung/AdminLayout";
import { QuestionEditor } from "@/components/tuyen-dung/QuestionEditor";

// Default question structure
const createEmptyQuestion = (type = "essay") => ({
  id: `q-new-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
  isNew: true,
  content: "",
  type,
  difficulty: "medium",
  max_score: 10,
  order_index: 0,
  // MC fields
  options: type === "multiple_choice" ? [
    { id: "a", text: "", is_correct: false },
    { id: "b", text: "", is_correct: false },
  ] : undefined,
  scoring_mode: type === "multiple_choice" ? "full_match" : undefined,
  explanation: undefined,
  // Essay fields
  sample_answer: type === "essay" ? "" : undefined,
  required_keywords: type === "essay" ? [] : undefined,
  bonus_keywords: type === "essay" ? [] : undefined,
  penalty_keywords: type === "essay" ? [] : undefined,
  min_length: type === "essay" ? 100 : undefined,
  require_main_ideas: type === "essay" ? true : undefined,
  accept_equivalent: type === "essay" ? true : undefined,
  use_ai_semantic: type === "essay" ? true : undefined,
  show_scoring_explanation: type === "essay" ? true : undefined,
  // Skills & Rubric
  skills: [],
  criteria: type === "essay" ? [] : undefined,
});

const normalizeQuestionnaireQuestions = (test) => {
  const richQuestions = Array.isArray(test?.questions) ? test.questions : [];
  if (richQuestions.length > 0) {
    return { ...test, questions: richQuestions };
  }

  const round1 = Array.isArray(test?.round1_questions) ? test.round1_questions : [];
  const round2 = Array.isArray(test?.round2_questions) ? test.round2_questions : [];

  const legacyQuestions = [
    ...round1.map((content, index) => ({
      id: `legacy-r1-${test.id}-${index}`,
      content,
      type: "essay",
      difficulty: "medium",
      max_score: 10,
      order_index: index,
    })),
    ...round2.map((content, index) => ({
      id: `legacy-r2-${test.id}-${index}`,
      content,
      type: "essay",
      difficulty: "medium",
      max_score: 10,
      order_index: round1.length + index,
    })),
  ];

  return {
    ...test,
    questions: legacyQuestions,
  };
};

const AdminTestPage = () => {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingTest, setEditingTest] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
  const [saving, setSaving] = useState(false);

  const fetchTests = async () => {
    try {
      const data = await recruitmentApi.listQuestionnaires();
      setTests((data || []).map(normalizeQuestionnaireQuestions));
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

    const questions = editingTest.questions || [];
    const hasEmptyQuestion = questions.some((q) => !q.content?.trim());
    if (hasEmptyQuestion) {
      toast.error("Vui lòng nhập nội dung cho tất cả câu hỏi.");
      return;
    }

    setSaving(true);
    try {
      // First create/update questionnaire
      const payload = {
        title: editingTest.title,
        round1_questions: questions.filter((q) => q.type === "essay").map((q) => q.content),
        round2_questions: questions.filter((q) => q.type === "multiple_choice").map((q) => q.content),
      };

      let questionnaireId;
      if (isCreating) {
        const result = await recruitmentApi.createQuestionnaire(payload);
        questionnaireId = result.id;
        toast.success("Tạo Bài Test thành công!");
      } else {
        await recruitmentApi.updateQuestionnaire(editingTest.id, payload);
        questionnaireId = editingTest.id;
        toast.success("Cập nhật Bài Test thành công!");
      }

      // Then sync questions via batch API
      try {
        if (isCreating && questions.length > 0) {
          // Create all questions in batch for new questionnaire
          const questionPayloads = questions.map((q, idx) => ({
            content: q.content,
            type: q.type,
            difficulty: q.difficulty,
            max_score: q.max_score,
            order_index: idx,
            options: q.options,
            scoring_mode: q.scoring_mode,
            explanation: q.explanation,
            sample_answer: q.sample_answer,
            required_keywords: q.required_keywords,
            bonus_keywords: q.bonus_keywords,
            penalty_keywords: q.penalty_keywords,
            min_length: q.min_length,
            require_main_ideas: q.require_main_ideas,
            accept_equivalent: q.accept_equivalent,
            use_ai_semantic: q.use_ai_semantic,
            show_scoring_explanation: q.show_scoring_explanation,
            skills: q.skills,
            criteria: q.criteria,
          }));
          await recruitmentApi.createQuestionsBatch(questionnaireId, questionPayloads);
        } else if (!isCreating) {
          // For updates: delete old questions and recreate
          const existingQuestions = await recruitmentApi.listQuestions(questionnaireId);
          for (const q of existingQuestions) {
            await recruitmentApi.deleteQuestion(q.id);
          }
          // Create new questions
          for (const [idx, question] of questions.entries()) {
            const { id, isNew, isModified, ...questionPayload } = question;
            await recruitmentApi.createQuestion({
              ...questionPayload,
              questionnaire_id: questionnaireId,
              order_index: idx,
            });
          }
        }
      } catch (e) {
        console.warn("Question sync error:", e);
        // Continue - basic questionnaire was saved
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

  const addQuestion = () => {
    const newQuestion = createEmptyQuestion("essay");
    newQuestion.order_index = (editingTest.questions || []).length;
    setEditingTest({
      ...editingTest,
      questions: [...(editingTest.questions || []), newQuestion],
    });
  };

  const updateQuestion = (index, updated) => {
    const copy = [...(editingTest.questions || [])];
    copy[index] = { ...updated, isModified: true };
    setEditingTest({ ...editingTest, questions: copy });
  };

  const removeQuestion = (index) => {
    const question = editingTest.questions[index];
    const newQuestions = editingTest.questions.filter((_, i) => i !== index);
    // Re-order
    newQuestions.forEach((q, i) => (q.order_index = i));
    setEditingTest({ ...editingTest, questions: newQuestions });
  };

  const handlePreview = () => {
    if (!editingTest?.questions?.length) {
      toast.error("Cần có ít nhất 1 câu hỏi để xem trước");
      return;
    }
    sessionStorage.setItem("previewTest", JSON.stringify(editingTest));
    window.open("/tuyen-dung/admin/test-preview", "_blank");
  };

  // Edit Form
  if (editingTest) {
    return (
      <AdminLayout>
        <Toaster position="top-center" richColors />
        <div className="max-w-4xl mx-auto py-6">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    setEditingTest(null);
                    setIsCreating(false);
                  }}
                  className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-500" />
                </button>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">
                    {isCreating ? "Tạo Bài Test mới" : "Chỉnh sửa Bài Test"}
                  </h1>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {isCreating
                      ? "Tạo bài test với câu hỏi trắc nghiệm và tự luận"
                      : `Đang chỉnh sửa: ${editingTest.title}`}
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                className="gap-2"
                onClick={handlePreview}
                disabled={!editingTest.questions?.length}
              >
                <Play className="w-4 h-4" /> Xem trước
              </Button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200/60 overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

              <div className="p-6 space-y-6">
                {/* Title */}
                <div>
                  <Label className="mb-2 block text-sm font-semibold text-gray-900">
                    Tên bài Test *
                  </Label>
                  <Input
                    value={editingTest.title}
                    onChange={(e) =>
                      setEditingTest({ ...editingTest, title: e.target.value })
                    }
                    placeholder="VD: Bài test cho Senior Frontend Developer"
                    className="h-11"
                  />
                </div>

                <div className="border-t border-gray-100" />

                {/* Questions Section */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-gray-900">
                      Câu hỏi ({(editingTest.questions || []).length})
                    </h3>
                    <Button onClick={addQuestion} variant="outline" size="sm">
                      <Plus className="h-4 w-4 mr-1" />
                      Thêm câu hỏi
                    </Button>
                  </div>

                  {(!editingTest.questions || editingTest.questions.length === 0) && (
                    <div className="bg-gray-50 rounded-xl border border-gray-200 p-12 text-center">
                      <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500 text-sm">
                        Chưa có câu hỏi nào. Nhấn &quot;Thêm câu hỏi&quot; để bắt đầu.
                      </p>
                    </div>
                  )}

                  <AnimatePresence>
                    {(editingTest.questions || []).map((q, i) => (
                      <motion.div
                        key={q.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <QuestionEditor
                          question={q}
                          index={i}
                          onChange={(updated) => updateQuestion(i, updated)}
                          onRemove={() => removeQuestion(i)}
                        />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>

              {/* Save */}
              <div className="px-6 py-4 bg-gray-50/80 border-t border-gray-100">
                <div className="flex justify-end gap-3">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setEditingTest(null);
                      setIsCreating(false);
                    }}
                  >
                    Hủy
                  </Button>
                  <Button
                    className="gap-2 bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-600/20 px-8"
                    onClick={handleSave}
                    disabled={saving}
                  >
                    {saving ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" /> Đang lưu...
                      </>
                    ) : (
                      <>
                        <Save className="w-4 h-4" />{" "}
                        {isCreating ? "Tạo Bài Test" : "Lưu thay đổi"}
                      </>
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
            <h1 className="text-xl font-bold text-gray-900">
              Quản lý Bài Test (Questionnaires)
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Tạo và chỉnh sửa nội dung bài test với câu hỏi trắc nghiệm và tự luận.
            </p>
          </div>
          <Button
            className="gap-2 bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-600/20"
            onClick={() => {
              setEditingTest({
                title: "",
                questions: [],
              });
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
            <p className="text-sm text-gray-500">
              Tạo bài test để gán cho các vị trí tuyển dụng (JD).
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {tests.map((test, index) => {
              const questionCount = (test.questions || []).length;
              const mcCount = (test.questions || []).filter(
                (q) => q.type === "multiple_choice"
              ).length;
              const essayCount = (test.questions || []).filter(
                (q) => q.type === "essay"
              ).length;

              return (
                <motion.div
                  key={test.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-white rounded-2xl border border-gray-200/60 p-5 shadow-sm hover:shadow-md transition-all flex flex-col h-full"
                >
                  <div className="flex-1">
                    <h3
                      className="font-bold text-gray-900 mb-4 truncate text-base"
                      title={test.title}
                    >
                      {test.title}
                    </h3>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg">
                        <span className="text-xs font-medium text-gray-600">
                          Tổng câu hỏi
                        </span>
                        <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                          {questionCount} câu
                        </span>
                      </div>
                      {mcCount > 0 && (
                        <div className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg">
                          <span className="text-xs font-medium text-gray-600">
                            Trắc nghiệm
                          </span>
                          <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                            {mcCount}
                          </span>
                        </div>
                      )}
                      {essayCount > 0 && (
                        <div className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg">
                          <span className="text-xs font-medium text-gray-600">
                            Tự luận
                          </span>
                          <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-md">
                            {essayCount}
                          </span>
                        </div>
                      )}
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
              );
            })}
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
