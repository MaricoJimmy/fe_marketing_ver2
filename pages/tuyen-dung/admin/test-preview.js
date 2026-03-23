import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Send,
  Eye,
  EyeOff,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const DIFFICULTY_LABELS = {
  easy: "Dễ",
  medium: "Trung bình",
  hard: "Khó",
};

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
};

const TestPreview = () => {
  const [test, setTest] = useState(null);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState(null);
  const [showExplanations, setShowExplanations] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes default
  const timerRef = useRef(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("previewTest");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setTest(parsed);
      } catch (e) {
        console.error("Failed to parse preview test:", e);
      }
    }
  }, []);

  // Timer
  useEffect(() => {
    if (!test || submitted) return;

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timerRef.current);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [test, submitted, handleSubmit]);

  const handleMCAnswer = (questionId, optionId) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: [optionId],
    }));
  };

  const handleEssayAnswer = (questionId, text) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: text,
    }));
  };

  const calculateScore = () => {
    if (!test?.questions) return { total: 0, maxScore: 0, breakdown: [] };

    let totalScore = 0;
    let maxScore = 0;
    const breakdown = [];

    test.questions.forEach((q) => {
      maxScore += q.max_score;
      const answer = answers[q.id] || (q.type === "multiple_choice" ? [] : "");
      let score = 0;

      if (q.type === "multiple_choice") {
        // MC scoring
        const correctOptions = (q.options || []).filter((opt) => opt.is_correct);
        const selectedOptions = answer || [];

        if (q.scoring_mode === "full_match") {
          // Full match: all correct selected, no incorrect selected
          const allCorrectSelected = correctOptions.every((opt) =>
            selectedOptions.includes(opt.id)
          );
          const noIncorrectSelected = selectedOptions.every((sel) =>
            correctOptions.some((opt) => opt.id === sel)
          );
          score = allCorrectSelected && noIncorrectSelected ? q.max_score : 0;
        } else {
          // Partial scoring
          const correctSelected = selectedOptions.filter((sel) =>
            correctOptions.some((opt) => opt.id === sel)
          ).length;
          const incorrectSelected = selectedOptions.filter(
            (sel) => !correctOptions.some((opt) => opt.id === sel)
          ).length;
          score = Math.max(
            0,
            (correctSelected / correctOptions.length) * q.max_score -
              incorrectSelected * 2
          );
        }
      } else {
        // Essay scoring (simplified)
        const text = answer || "";
        const baseScore = Math.min(q.max_score * 0.5, text.length / 10);

        // Keyword matching
        let keywordScore = 0;
        const keywords = q.required_keywords || [];
        if (keywords.length > 0) {
          const matched = keywords.filter((kw) =>
            text.toLowerCase().includes(kw.toLowerCase())
          ).length;
          keywordScore = (matched / keywords.length) * q.max_score * 0.3;
        }

        // Length bonus
        const minLength = q.min_length || 0;
        const lengthScore =
          minLength > 0 && text.length >= minLength
            ? q.max_score * 0.2
            : 0;

        score = Math.min(q.max_score, baseScore + keywordScore + lengthScore);
      }

      score = Math.round(score * 10) / 10;
      totalScore += score;

      breakdown.push({
        questionId: q.id,
        content: q.content,
        type: q.type,
        maxScore: q.max_score,
        score,
        answer,
      });
    });

    return {
      total: Math.round(totalScore * 10) / 10,
      maxScore,
      percentage: Math.round((totalScore / maxScore) * 100),
      breakdown,
    };
  };

  const handleSubmit = useCallback(() => {
    clearInterval(timerRef.current);
    const result = calculateScore();
    setResults(result);
    setSubmitted(true);
  }, [calculateScore]);

  if (!test) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">Không tìm thấy bài test để xem trước.</p>
          <p className="text-sm text-gray-400 mt-2">
            Vui lòng tạo câu hỏi trước từ trang quản lý bài test.
          </p>
        </div>
      </div>
    );
  }

  const questions = test.questions || [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-indigo-600" />
                <h1 className="text-lg font-bold text-gray-900">Chế độ xem trước</h1>
              </div>
              <p className="text-sm text-gray-500 mt-1">{test.title}</p>
            </div>
            {!submitted && (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-orange-500" />
                  <span className="font-mono font-bold">{formatTime(timeLeft)}</span>
                </div>
                <Button onClick={handleSubmit} className="gap-2">
                  <Send className="w-4 h-4" /> Nộp bài
                </Button>
              </div>
            )}
          </div>

          {/* Progress */}
          {!submitted && (
            <div className="mt-4">
              <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                <span>
                  Đã trả lời{" "}
                  {Object.keys(answers).filter((k) => {
                    const a = answers[k];
                    return Array.isArray(a) ? a.length > 0 : !!a;
                  }).length}{" "}
                  / {questions.length} câu
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${(Object.keys(answers).filter((k) => {
                      const a = answers[k];
                      return Array.isArray(a) ? a.length > 0 : !!a;
                    }).length /
                      questions.length) *
                      100}%`,
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Results */}
        {submitted && results && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl border border-gray-200 p-6 mb-8 shadow-sm"
          >
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Kết quả xem trước</h2>
              <p className="text-sm text-gray-500">
                Đây là kết quả ước tính. Chấm điểm chính xác sẽ được thực hiện bởi hệ thống AI.
              </p>
            </div>

            <div className="flex items-center justify-center gap-8 mb-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900">{results.total}</div>
                <div className="text-sm text-gray-500">
                  / {results.maxScore} điểm
                </div>
              </div>
              <div className="text-center">
                <div
                  className={`text-4xl font-bold ${
                    results.percentage >= 75
                      ? "text-green-600"
                      : results.percentage >= 55
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  {results.percentage}%
                </div>
                <div className="text-sm text-gray-500">
                  {results.percentage >= 75
                    ? "Đạt"
                    : results.percentage >= 55
                    ? "Chờ xét"
                    : "Không đạt"}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              <Button
                variant="outline"
                onClick={() => setShowExplanations(!showExplanations)}
                className="gap-2"
              >
                {showExplanations ? (
                  <>
                    <EyeOff className="w-4 h-4" /> Ẩn giải thích
                  </>
                ) : (
                  <>
                    <Eye className="w-4 h-4" /> Xem giải thích
                  </>
                )}
              </Button>
            </div>
          </motion.div>
        )}

        {/* Questions */}
        <div className="space-y-6">
          {questions.map((q, index) => {
            const answer = answers[q.id];
            const result = results?.breakdown?.find((r) => r.questionId === q.id);

            return (
              <motion.div
                key={q.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-semibold text-indigo-600">
                        Câu {index + 1}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                        {q.type === "multiple_choice" ? "Trắc nghiệm" : "Tự luận"}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                        {DIFFICULTY_LABELS[q.difficulty] || q.difficulty}
                      </span>
                    </div>
                    <p className="text-gray-900">{q.content}</p>
                  </div>
                  <div className="text-sm font-semibold text-gray-500 ml-4">
                    {result ? (
                      <span
                        className={
                          result.score === q.max_score
                            ? "text-green-600"
                            : result.score > 0
                            ? "text-yellow-600"
                            : "text-red-600"
                        }
                      >
                        {result.score}/{q.max_score}
                      </span>
                    ) : (
                      `${q.max_score} điểm`
                    )}
                  </div>
                </div>

                {/* MC Options */}
                {q.type === "multiple_choice" && (
                  <div className="space-y-2 ml-4">
                    {(q.options || []).map((opt) => {
                      const isSelected = (answer || []).includes(opt.id);
                      const isCorrect = opt.is_correct;
                      const showResult = submitted && showExplanations;

                      return (
                        <label
                          key={opt.id}
                          className={`flex items-center gap-3 p-3 rounded-lg border transition-colors ${
                            showResult
                              ? isCorrect
                                ? "border-green-200 bg-green-50"
                                : isSelected && !isCorrect
                                ? "border-red-200 bg-red-50"
                                : "border-gray-200"
                              : isSelected
                              ? "border-indigo-300 bg-indigo-50"
                              : "border-gray-200 hover:bg-gray-50"
                          } ${submitted ? "cursor-default" : "cursor-pointer"}`}
                          onClick={() => !submitted && handleMCAnswer(q.id, opt.id)}
                        >
                          <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              isSelected
                                ? "border-indigo-600 bg-indigo-600"
                                : "border-gray-300"
                            }`}
                          >
                            {isSelected && (
                              <div className="w-2 h-2 rounded-full bg-white" />
                            )}
                          </div>
                          <span className="flex-1 text-sm">{opt.text}</span>
                          {showResult && isCorrect && (
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          )}
                          {showResult && isSelected && !isCorrect && (
                            <XCircle className="w-4 h-4 text-red-600" />
                          )}
                        </label>
                      );
                    })}
                  </div>
                )}

                {/* Essay Input */}
                {q.type === "essay" && (
                  <div className="ml-4">
                    <Textarea
                      value={answer || ""}
                      onChange={(e) => handleEssayAnswer(q.id, e.target.value)}
                      placeholder="Nhập câu trả lời của bạn..."
                      rows={6}
                      disabled={submitted}
                      className="resize-none"
                    />
                    <div className="flex items-center justify-between mt-2 text-xs text-gray-400">
                      <span>
                        {(answer || "").length} ký tự
                        {q.min_length ? ` (tối thiểu: ${q.min_length})` : ""}
                      </span>
                    </div>
                  </div>
                )}

                {/* Explanation */}
                {submitted && showExplanations && q.explanation && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <p className="text-sm font-semibold text-blue-800 mb-1">
                      Giải thích đáp án:
                    </p>
                    <p className="text-sm text-blue-700">{q.explanation}</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Submit button (bottom) */}
        {!submitted && (
          <div className="sticky bottom-4 mt-8">
            <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-lg">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  Xem trước bài test - Kết quả chỉ mang tính tham khảo
                </p>
                <Button onClick={handleSubmit} size="lg" className="gap-2">
                  <Send className="w-4 h-4" /> Nộp bài
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

TestPreview.getLayout = function getLayout(page) {
  return page;
};

export default TestPreview;
