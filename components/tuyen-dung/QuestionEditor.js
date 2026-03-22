import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Plus,
  Trash2,
  GripVertical,
} from "lucide-react";

const SKILL_LABELS = {
  domain_knowledge: "Kiến thức chuyên môn",
  analytical_thinking: "Tư duy phân tích",
  communication: "Giao tiếp",
  problem_solving: "Giải quyết vấn đề",
  technical_skills: "Kỹ năng kỹ thuật",
  position_fit: "Phù hợp vị trí",
};

const DIFFICULTY_LABELS = {
  easy: "Dễ",
  medium: "Trung bình",
  hard: "Khó",
};

const allSkills = Object.keys(SKILL_LABELS);

const QuestionEditor = ({ question, index, onChange, onRemove, errors = {} }) => {
  const update = (partial) => onChange({ ...question, ...partial });

  const updateOption = (optIdx, partial) => {
    const opts = [...(question.options || [])];
    opts[optIdx] = { ...opts[optIdx], ...partial };
    update({ options: opts });
  };

  const addOption = () => {
    const id = String.fromCharCode(97 + (question.options?.length || 0));
    update({ options: [...(question.options || []), { id, text: "", is_correct: false }] });
  };

  const removeOption = (optIdx) => {
    update({ options: (question.options || []).filter((_, i) => i !== optIdx) });
  };

  const toggleSkill = (skill) => {
    const skills = question.skills?.includes(skill)
      ? question.skills.filter((s) => s !== skill)
      : [...(question.skills || []), skill];
    update({ skills });
  };

  const switchType = (type) => {
    if (type === "multiple_choice") {
      update({
        type,
        options: [
          { id: "a", text: "", is_correct: false },
          { id: "b", text: "", is_correct: false },
        ],
        scoring_mode: "full_match",
        sample_answer: undefined,
        required_keywords: undefined,
        criteria: undefined,
      });
    } else {
      update({
        type,
        options: undefined,
        scoring_mode: undefined,
        sample_answer: "",
        required_keywords: [],
        bonus_keywords: [],
        penalty_keywords: [],
        min_length: 100,
        criteria: [],
        require_main_ideas: true,
        accept_equivalent: true,
        use_ai_semantic: true,
        show_scoring_explanation: true,
      });
    }
  };

  const addCriterion = () => {
    const criteria = [
      ...(question.criteria || []),
      {
        id: `crit-${Date.now()}`,
        name: "",
        description: "",
        max_score: 10,
        full_score_condition: "",
        partial_score_condition: "",
        example_answer: "",
      },
    ];
    update({ criteria });
  };

  const hasErr = (field) => errors[`q-${index}-${field}`];

  return (
    <div className="bg-white rounded-xl border border-gray-200/60 p-5 space-y-4 shadow-sm">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <GripVertical className="h-4 w-4 text-gray-400 cursor-grab" />
          <span className="text-sm font-semibold text-gray-500">Câu {index + 1}</span>
        </div>
        <button
          onClick={onRemove}
          className="p-1.5 rounded-lg hover:bg-red-50 transition-colors"
          title="Xóa câu hỏi"
        >
          <Trash2 className="h-4 w-4 text-red-500" />
        </button>
      </div>

      {/* Question content */}
      <div>
        <Label className="mb-2 block text-sm font-medium text-gray-700">
          Nội dung câu hỏi <span className="text-red-500">*</span>
        </Label>
        <Textarea
          value={question.content}
          onChange={(e) => update({ content: e.target.value })}
          rows={2}
          placeholder="Nhập nội dung câu hỏi..."
          className={hasErr("content") ? "border-red-500" : ""}
        />
        {hasErr("content") && (
          <p className="text-xs text-red-500 mt-1">Vui lòng nhập nội dung câu hỏi</p>
        )}
      </div>

      {/* Type, Difficulty, Max Score */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <Label className="mb-2 block text-sm font-medium text-gray-700">
            Loại câu hỏi <span className="text-red-500">*</span>
          </Label>
          <Select value={question.type} onValueChange={switchType}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="multiple_choice">Trắc nghiệm</SelectItem>
              <SelectItem value="essay">Tự luận</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="mb-2 block text-sm font-medium text-gray-700">Độ khó</Label>
          <Select
            value={question.difficulty}
            onValueChange={(v) => update({ difficulty: v })}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(DIFFICULTY_LABELS).map(([key, label]) => (
                <SelectItem key={key} value={key}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="mb-2 block text-sm font-medium text-gray-700">
            Điểm tối đa <span className="text-red-500">*</span>
          </Label>
          <Input
            type="number"
            value={question.max_score}
            onChange={(e) => update({ max_score: Number(e.target.value) })}
            className={hasErr("max_score") ? "border-red-500" : ""}
          />
          {hasErr("max_score") && (
            <p className="text-xs text-red-500 mt-1">Vui lòng nhập điểm tối đa</p>
          )}
        </div>
      </div>

      {/* Skills */}
      <div>
        <Label className="mb-2 block text-sm font-medium text-gray-700">
          Kỹ năng đánh giá{" "}
          <span className="text-xs italic text-gray-400">(không bắt buộc)</span>
        </Label>
        <div className="flex flex-wrap gap-2">
          {allSkills.map((skill) => (
            <label key={skill} className="flex items-center gap-1.5 text-xs cursor-pointer">
              <Checkbox
                checked={question.skills?.includes(skill) || false}
                onCheckedChange={() => toggleSkill(skill)}
              />
              {SKILL_LABELS[skill]}
            </label>
          ))}
        </div>
      </div>

      {/* Multiple Choice Section */}
      {question.type === "multiple_choice" && (
        <div className="space-y-3 border-t border-gray-100 pt-4">
          <div className="flex items-center justify-between">
            <Label className="text-sm font-semibold text-gray-700">Danh sách đáp án</Label>
            <Button variant="outline" size="sm" onClick={addOption}>
              <Plus className="h-3 w-3 mr-1" /> Thêm đáp án
            </Button>
          </div>
          {(question.options || []).map((opt, optIdx) => (
            <div key={opt.id} className="flex items-center gap-3">
              <Checkbox
                checked={opt.is_correct}
                onCheckedChange={(checked) => updateOption(optIdx, { is_correct: !!checked })}
              />
              <Input
                value={opt.text}
                onChange={(e) => updateOption(optIdx, { text: e.target.value })}
                placeholder={`Đáp án ${opt.id.toUpperCase()}`}
                className="flex-1"
              />
              <button
                onClick={() => removeOption(optIdx)}
                className="p-1 rounded hover:bg-red-50 transition-colors"
              >
                <Trash2 className="h-3.5 w-3.5 text-red-500" />
              </button>
            </div>
          ))}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="mb-2 block text-sm font-medium text-gray-700">Chế độ chấm điểm</Label>
              <Select
                value={question.scoring_mode}
                onValueChange={(v) => update({ scoring_mode: v })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full_match">Chấm đúng hoàn toàn</SelectItem>
                  <SelectItem value="partial">Chấm điểm từng phần</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <Label className="mb-2 block text-sm font-medium text-gray-700">
              Giải thích đáp án{" "}
              <span className="text-xs italic text-gray-400">(không bắt buộc)</span>
            </Label>
            <Textarea
              value={question.explanation || ""}
              onChange={(e) => update({ explanation: e.target.value })}
              rows={2}
              placeholder="Giải thích vì sao đáp án đúng..."
            />
          </div>
        </div>
      )}

      {/* Essay Section */}
      {question.type === "essay" && (
        <div className="space-y-4 border-t border-gray-100 pt-4">
          <div>
            <Label className="mb-2 block text-sm font-medium text-gray-700">
              Đáp án mẫu{" "}
              <span className="text-xs italic text-gray-400">(không bắt buộc)</span>
            </Label>
            <Textarea
              value={question.sample_answer || ""}
              onChange={(e) => update({ sample_answer: e.target.value })}
              rows={3}
              placeholder="Nhập đáp án mẫu cho câu hỏi..."
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="mb-2 block text-sm font-medium text-gray-700">
                Từ khóa bắt buộc{" "}
                <span className="text-xs italic text-gray-400">(phân cách bởi phẩy)</span>
              </Label>
              <Input
                value={(question.required_keywords || []).join(", ")}
                onChange={(e) =>
                  update({
                    required_keywords: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                  })
                }
                placeholder="keyword1, keyword2"
              />
            </div>
            <div>
              <Label className="mb-2 block text-sm font-medium text-gray-700">
                Từ khóa cộng điểm{" "}
                <span className="text-xs italic text-gray-400">(phân cách bởi phẩy)</span>
              </Label>
              <Input
                value={(question.bonus_keywords || []).join(", ")}
                onChange={(e) =>
                  update({
                    bonus_keywords: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                  })
                }
                placeholder="bonus1, bonus2"
              />
            </div>
            <div>
              <Label className="mb-2 block text-sm font-medium text-gray-700">
                Từ khóa trừ điểm{" "}
                <span className="text-xs italic text-gray-400">(phân cách bởi phẩy)</span>
              </Label>
              <Input
                value={(question.penalty_keywords || []).join(", ")}
                onChange={(e) =>
                  update({
                    penalty_keywords: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                  })
                }
                placeholder="penalty1, penalty2"
              />
            </div>
            <div>
              <Label className="mb-2 block text-sm font-medium text-gray-700">
                Độ dài tối thiểu (ký tự){" "}
                <span className="text-xs italic text-gray-400">(không bắt buộc)</span>
              </Label>
              <Input
                type="number"
                value={question.min_length || 0}
                onChange={(e) => update({ min_length: Number(e.target.value) })}
              />
            </div>
          </div>

          {/* Essay toggles */}
          <div className="flex flex-wrap gap-6">
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <Checkbox
                checked={question.require_main_ideas ?? false}
                onCheckedChange={(v) => update({ require_main_ideas: !!v })}
              />
              Bắt buộc ý chính
            </label>
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <Checkbox
                checked={question.accept_equivalent ?? false}
                onCheckedChange={(v) => update({ accept_equivalent: !!v })}
              />
              Chấp nhận diễn đạt tương đương
            </label>
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <Checkbox
                checked={question.use_ai_semantic ?? false}
                onCheckedChange={(v) => update({ use_ai_semantic: !!v })}
              />
              Chấm điểm bằng AI semantic
            </label>
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <Checkbox
                checked={question.show_scoring_explanation ?? false}
                onCheckedChange={(v) => update({ show_scoring_explanation: !!v })}
              />
              Hiển thị giải thích chấm điểm
            </label>
          </div>

          {/* Rubric Criteria */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className="text-sm font-semibold text-gray-700">
                Tiêu chí rubric{" "}
                <span className="text-xs italic text-gray-400 font-normal">(không bắt buộc)</span>
              </Label>
              <Button variant="outline" size="sm" onClick={addCriterion}>
                <Plus className="h-3 w-3 mr-1" /> Thêm tiêu chí
              </Button>
            </div>
            {(question.criteria || []).map((crit, ci) => (
              <div key={crit.id} className="p-4 rounded-lg bg-gray-50 border border-gray-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-500">Tiêu chí {ci + 1}</span>
                  <button
                    onClick={() =>
                      update({ criteria: (question.criteria || []).filter((_, i) => i !== ci) })
                    }
                    className="p-1 rounded hover:bg-red-50 transition-colors"
                  >
                    <Trash2 className="h-3.5 w-3.5 text-red-500" />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label className="mb-1 block text-xs text-gray-600">Tên tiêu chí</Label>
                    <Input
                      value={crit.name}
                      onChange={(e) => {
                        const criteria = [...(question.criteria || [])];
                        criteria[ci] = { ...criteria[ci], name: e.target.value };
                        update({ criteria });
                      }}
                      placeholder="VD: Nội dung chính"
                    />
                  </div>
                  <div>
                    <Label className="mb-1 block text-xs text-gray-600">Điểm tối đa</Label>
                    <Input
                      type="number"
                      value={crit.max_score}
                      onChange={(e) => {
                        const criteria = [...(question.criteria || [])];
                        criteria[ci] = { ...criteria[ci], max_score: Number(e.target.value) };
                        update({ criteria });
                      }}
                    />
                  </div>
                </div>
                <div>
                  <Label className="mb-1 block text-xs text-gray-600">Mô tả</Label>
                  <Input
                    value={crit.description}
                    onChange={(e) => {
                      const criteria = [...(question.criteria || [])];
                      criteria[ci] = { ...criteria[ci], description: e.target.value };
                      update({ criteria });
                    }}
                    placeholder="Mô tả tiêu chí đánh giá"
                  />
                </div>
                <div>
                  <Label className="mb-1 block text-xs text-gray-600">Điều kiện đạt điểm tối đa</Label>
                  <Input
                    value={crit.full_score_condition}
                    onChange={(e) => {
                      const criteria = [...(question.criteria || [])];
                      criteria[ci] = { ...criteria[ci], full_score_condition: e.target.value };
                      update({ criteria });
                    }}
                    placeholder="VD: Đề cập đủ 3 ý chính với ví dụ cụ thể"
                  />
                </div>
                <div>
                  <Label className="mb-1 block text-xs text-gray-600">Điều kiện đạt điểm một phần</Label>
                  <Input
                    value={crit.partial_score_condition}
                    onChange={(e) => {
                      const criteria = [...(question.criteria || [])];
                      criteria[ci] = { ...criteria[ci], partial_score_condition: e.target.value };
                      update({ criteria });
                    }}
                    placeholder="VD: Đề cập 1-2 ý chính"
                  />
                </div>
                <div>
                  <Label className="mb-1 block text-xs text-gray-600">Ví dụ câu trả lời tốt</Label>
                  <Textarea
                    value={crit.example_answer}
                    onChange={(e) => {
                      const criteria = [...(question.criteria || [])];
                      criteria[ci] = { ...criteria[ci], example_answer: e.target.value };
                      update({ criteria });
                    }}
                    rows={2}
                    placeholder="Một ví dụ trả lời tốt cho tiêu chí này..."
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export { QuestionEditor };
