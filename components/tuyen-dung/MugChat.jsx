import { useState, useRef, useEffect } from "react";
import { Send, Bot, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ROUND1_QUESTIONS = [
    "Thu nhập cao nhất từng đạt là bao nhiêu? Trong bao lâu bạn duy trì mức thu nhập đó?",
    "KPI cao nhất từng đạt là gì? Hãy cho biết con số cụ thể.",
    "Tháng tệ nhất bạn từng trải qua là gì? Vì sao lại tệ như vậy?",
    "Nếu yêu cầu đạt 200 khách hàng/tháng với đội 40 người, bạn nghĩ có khả thi không? Vì sao? (Hãy đưa ra tính toán/logic cụ thể)",
    "Mục tiêu thu nhập của bạn trong 12 tháng tới là bao nhiêu?",
];

const HARD_REJECT_KEYWORDS = [
    "ít áp lực", "cân bằng", "ổn định", "không áp lực", "nhẹ nhàng",
    "thoải mái", "không cần cao", "vừa phải", "bình thường",
];

const MugChat = ({ candidateInfo, onComplete, questions = [] }) => {
    // Support both string arrays (legacy) and rich question objects
    const roundQuestions = questions.length > 0 
        ? questions.map((q, i) => {
            // If it's a string, convert to legacy format
            if (typeof q === "string") {
                return { content: q, type: "essay", options: null, id: `legacy-${i}` };
            }
            // If it's a rich question object, use as-is
            return q;
        })
        : ROUND1_QUESTIONS.map((q, i) => ({ content: q, type: "essay", options: null, id: `fallback-${i}` }));
    
    const totalQuestions = roundQuestions.length;
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [currentQ, setCurrentQ] = useState(0);
    const [answers, setAnswers] = useState({});
    const [followUpCount, setFollowUpCount] = useState(0);
    const [isTyping, setIsTyping] = useState(false);
    const [done, setDone] = useState(false);
    const [selectedMcOption, setSelectedMcOption] = useState(null); // Track MC selection
    const messagesContainerRef = useRef(null);

    useEffect(() => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    // Start conversation
    useEffect(() => {
        const timer = setTimeout(() => {
            addMugMessage(
                `Xin chào ${candidateInfo.full_name}! 👋\n\nTôi là MUG — trợ lý tuyển dụng AI của Udata. Bạn đang ứng tuyển vị trí **${candidateInfo.role_applied}**.\n\nTôi sẽ hỏi bạn ${totalQuestions} câu hỏi để tìm hiểu về kinh nghiệm và mục tiêu của bạn.\n\nSẵn sàng chưa? Hãy bắt đầu nhé! 🚀`
            );
            setTimeout(() => {
                const firstQ = roundQuestions[0];
                if (firstQ.type === "multiple_choice") {
                    addMugMessage(`📋 **Câu 1/${totalQuestions}:**\n\n${firstQ.content}\n\n_Vui lòng chọn một đáp án bên dưới._`);
                } else {
                    addMugMessage(`📋 **Câu 1/${totalQuestions}:**\n\n${firstQ.content}`);
                }
            }, 1500);
        }, 800);
        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function addMugMessage(content) {
        setMessages((prev) => [
            ...prev,
            { role: "mug", content, timestamp: new Date().toISOString() },
        ]);
    }

    function hasNumbers(text) {
        return /\d/.test(text);
    }

    function checkHardReject(text) {
        const lower = text.toLowerCase();
        for (const kw of HARD_REJECT_KEYWORDS) {
            if (lower.includes(kw)) return kw;
        }
        return null;
    }

    function handleSend() {
        if (!input.trim() || done) return;
        const text = input.trim();
        setInput("");

        const userMsg = { role: "user", content: text, timestamp: new Date().toISOString() };
        setMessages((prev) => [...prev, userMsg]);
        setIsTyping(true);

        setTimeout(() => {
            setIsTyping(false);
            processAnswer(text);
        }, 800 + Math.random() * 800);
    }

    function handleMcSelect(optionId, optionText) {
        if (done) return;
        setSelectedMcOption(optionId);
        
        // Show user's selection in chat
        const userMsg = { role: "user", content: `☑️ ${optionText}`, timestamp: new Date().toISOString() };
        setMessages((prev) => [...prev, userMsg]);
        setIsTyping(true);

        setTimeout(() => {
            setIsTyping(false);
            processMcAnswer(optionId, optionText);
        }, 500 + Math.random() * 500);
    }

    function processMcAnswer(optionId, optionText) {
        const answerKey = `q${currentQ + 1}`;
        setAnswers((prev) => ({ ...prev, [answerKey]: optionId }));
        setSelectedMcOption(null);

        const nextQ = currentQ + 1;
        if (nextQ < totalQuestions) {
            setCurrentQ(nextQ);
            const nextQuestion = roundQuestions[nextQ];
            if (nextQuestion.type === "multiple_choice") {
                addMugMessage(
                    `✅ Cảm ơn bạn!\n\n📋 **Câu ${nextQ + 1}/${totalQuestions}:**\n\n${nextQuestion.content}\n\n_Vui lòng chọn một đáp án bên dưới._`
                );
            } else {
                addMugMessage(
                    `✅ Cảm ơn bạn!\n\n📋 **Câu ${nextQ + 1}/${totalQuestions}:**\n\n${nextQuestion.content}`
                );
            }
        } else {
            // All questions answered
            finishInterview({ ...answers, [answerKey]: optionId });
        }
    }

    function processAnswer(text) {
        // Essay question processing
        const needsNumbers = [0, 1, totalQuestions - 1].includes(currentQ);

        // Check if answer is too vague (needs numbers but has none)
        if (needsNumbers && !hasNumbers(text) && followUpCount < 2) {
            setFollowUpCount((c) => c + 1);
            addMugMessage(
                `Cảm ơn bạn, nhưng tôi cần một con số cụ thể hơn. Ví dụ: "25 triệu/tháng trong 6 tháng" hoặc "đạt 150% KPI".\n\nBạn có thể chia sẻ lại với số liệu cụ thể không?`
            );
            return;
        }

        const answerKey = `q${currentQ + 1}`;
        setAnswers((prev) => ({ ...prev, [answerKey]: text }));
        setFollowUpCount(0);

        const nextQ = currentQ + 1;
        if (nextQ < totalQuestions) {
            setCurrentQ(nextQ);
            const nextQuestion = roundQuestions[nextQ];
            if (nextQuestion.type === "multiple_choice") {
                addMugMessage(
                    `✅ Cảm ơn bạn!\n\n📋 **Câu ${nextQ + 1}/${totalQuestions}:**\n\n${nextQuestion.content}\n\n_Vui lòng chọn một đáp án bên dưới._`
                );
            } else {
                addMugMessage(
                    `✅ Cảm ơn bạn!\n\n📋 **Câu ${nextQ + 1}/${totalQuestions}:**\n\n${nextQuestion.content}`
                );
            }
        } else {
            // All questions answered
            finishInterview({ ...answers, [answerKey]: text });
        }
    }

    function finishInterview(finalAnswers) {
        setDone(true);
        addMugMessage("Cảm ơn bạn đã hoàn thành phỏng vấn! ✨\n\nTôi đang đánh giá câu trả lời của bạn...");

        setTimeout(() => {
            const result = scoreCandidate(finalAnswers);
            onComplete(result);
        }, 2000);
    }

    function scoreCandidate(finalAnswers) {
        let hardRejectReason = null;
        
        // Separate MC and essay answers for scoring
        let mcCorrectCount = 0;
        let mcTotalCount = 0;
        let essayAnswers = {};
        
        // Analyze each answer
        for (const [key, ans] of Object.entries(finalAnswers)) {
            const qIndex = parseInt(key.replace("q", "")) - 1;
            const question = roundQuestions[qIndex];
            
            if (question?.type === "multiple_choice") {
                // MC question: check if selected option is correct
                mcTotalCount++;
                const selectedOption = question.options?.find(opt => opt.id === ans);
                if (selectedOption?.isCorrect) {
                    mcCorrectCount++;
                }
            } else {
                // Essay question
                essayAnswers[key] = ans;
            }
        }

        // Check hard reject for essay answers only
        for (const ans of Object.values(essayAnswers)) {
            const rejected = checkHardReject(ans);
            if (rejected) {
                hardRejectReason = `Ứng viên thể hiện xu hướng ưu tiên "${rejected}" — không phù hợp với môi trường áp lực cao.`;
                break;
            }
        }

        // Check if no numbers at all after follow-ups (essay only)
        const numbersCount = Object.values(essayAnswers).filter((a) => hasNumbers(a)).length;
        if (Object.keys(essayAnswers).length > 0 && numbersCount === 0) {
            hardRejectReason = "Ứng viên không cung cấp bất kỳ con số cụ thể nào sau nhiều lần yêu cầu.";
        }

        // Score: numeric specificity (essay only)
        let numeric = 0;
        const numericQs = [essayAnswers.q1, essayAnswers.q2, essayAnswers.q5];
        numericQs.forEach((a) => {
            if (a && hasNumbers(a)) numeric += 6;
            if (a && /triệu|tỷ|%|VND|usd/i.test(a)) numeric += 2;
        });
        numeric = Math.min(25, Math.max(0, numeric + (numbersCount >= 3 ? 5 : 0)));

        // Score: ambition (essay only)
        let ambition = 10;
        const q5 = essayAnswers.q5 || "";
        if (hasNumbers(q5)) {
            const nums = q5.match(/\d+/g)?.map(Number) || [];
            const maxNum = Math.max(...nums);
            if (maxNum >= 30) ambition += 10;
            else if (maxNum >= 15) ambition += 5;
            ambition = Math.min(25, ambition + 5);
        }

        // Score: reasoning (essay only)
        let reasoning = 8;
        const q4 = essayAnswers.q4 || "";
        if (q4.length > 100) reasoning += 5;
        if (hasNumbers(q4)) reasoning += 5;
        if (/tính|chia|mỗi|trung bình|200|40|5|ngày/i.test(q4)) reasoning += 7;
        reasoning = Math.min(25, reasoning);

        // Score: accountability (essay only)
        let accountability = 10;
        const q3 = essayAnswers.q3 || "";
        if (/học|rút kinh nghiệm|bài học|cải thiện|thay đổi/i.test(q3)) accountability += 8;
        if (!/đổ lỗi|tại|do người khác|công ty tệ/i.test(q3)) accountability += 4;
        if (q3.length > 80) accountability += 3;
        accountability = Math.min(25, accountability);

        // Add MC score component
        let mcScore = 0;
        if (mcTotalCount > 0) {
            mcScore = Math.round((mcCorrectCount / mcTotalCount) * 25);
        }

        const scores = { numeric, ambition, reasoning, accountability, mcScore };
        const total = numeric + ambition + reasoning + accountability + mcScore;

        let status;
        if (hardRejectReason) {
            status = "Reject";
        } else if (total >= 70) {
            status = "Pass";
        } else if (total >= 55) {
            status = "Pending";
        } else {
            status = "Reject";
        }

        const feedback = [];
        
        // MC feedback
        if (mcTotalCount > 0) {
            feedback.push(`Trắc nghiệm: ${mcCorrectCount}/${mcTotalCount} câu đúng.`);
        }
        
        // Essay feedback
        if (numeric >= 18) feedback.push("Cung cấp số liệu cụ thể và rõ ràng.");
        else if (Object.keys(essayAnswers).length > 0) feedback.push("Cần bổ sung thêm số liệu cụ thể trong câu trả lời.");
        if (ambition >= 18) feedback.push("Thể hiện mục tiêu tham vọng và rõ ràng.");
        else if (Object.keys(essayAnswers).length > 0) feedback.push("Mục tiêu cá nhân cần tham vọng và cụ thể hơn.");
        if (reasoning >= 18) feedback.push("Tư duy logic và phân tích tốt.");
        else if (Object.keys(essayAnswers).length > 0) feedback.push("Cần cải thiện khả năng phân tích và lập luận logic.");
        if (accountability >= 18) feedback.push("Tinh thần trách nhiệm và học hỏi cao.");
        else if (Object.keys(essayAnswers).length > 0) feedback.push("Nên thể hiện rõ hơn tinh thần tự chịu trách nhiệm.");

        return {
            full_name: candidateInfo.full_name,
            email: candidateInfo.email,
            role_applied: candidateInfo.role_applied,
            answers: finalAnswers,
            scores,
            total,
            status,
            hard_reject_reason: hardRejectReason,
            feedback,
        };
    }

    return (
        <div className="flex flex-col rounded-2xl border border-gray-200 bg-white overflow-hidden" style={{ height: "600px" }}>
            {/* Header */}
            <div className="px-6 py-4 flex items-center gap-3" style={{ background: "linear-gradient(135deg, #2563eb, #1d4ed8)" }}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{ background: "rgba(255,255,255,0.2)" }}>
                    <Bot className="h-5 w-5 text-white" />
                </div>
                <div>
                    <h3 className="font-bold text-white">MUG — AI Interviewer</h3>
                    <p className="text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>
                        Vòng 1: Mindset & Ambition • Câu {Math.min(currentQ + 1, totalQuestions)}/{totalQuestions}
                    </p>
                </div>
                <div className="ml-auto">
                    <div className="h-2 w-32 rounded-full" style={{ background: "rgba(255,255,255,0.2)" }}>
                        <div
                            className="h-2 rounded-full transition-all duration-500"
                            style={{
                                width: `${((currentQ + (done ? 1 : 0)) / totalQuestions) * 100}%`,
                                background: "rgba(255,255,255,0.8)",
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Messages */}
            <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-4 space-y-3">
                <AnimatePresence>
                    {messages.map((msg, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                        >
                            {msg.role === "mug" && (
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50">
                                    <Bot className="h-4 w-4 text-blue-600" />
                                </div>
                            )}
                            <div
                                className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${msg.role === "user"
                                    ? "bg-blue-600 text-white rounded-br-md"
                                    : "bg-gray-100 text-gray-900 rounded-bl-md"
                                    }`}
                            >
                                {msg.content.split(/(\*\*.*?\*\*)/g).map((part, j) =>
                                    part.startsWith("**") && part.endsWith("**") ? (
                                        <strong key={j}>{part.slice(2, -2)}</strong>
                                    ) : (
                                        <span key={j}>{part}</span>
                                    )
                                )}
                            </div>
                            {msg.role === "user" && (
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50">
                                    <User className="h-4 w-4 text-emerald-600" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </AnimatePresence>

                {isTyping && (
                    <div className="flex gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50">
                            <Bot className="h-4 w-4 text-blue-600" />
                        </div>
                        <div className="rounded-2xl bg-gray-100 px-4 py-3 rounded-bl-md">
                            <div className="flex gap-1">
                                <span className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0s" }} />
                                <span className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0.2s" }} />
                                <span className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0.4s" }} />
                            </div>
                        </div>
                    </div>
                )}

            </div>

            {/* Input / MC Options */}
            <div className="border-t border-gray-200 p-4">
                {!done && roundQuestions[currentQ]?.type === "multiple_choice" && roundQuestions[currentQ]?.options ? (
                    /* MC Question: Show radio buttons */
                    <div className="space-y-2">
                        <p className="text-xs text-gray-500 mb-2">Chọn một đáp án:</p>
                        {roundQuestions[currentQ].options.map((option) => (
                            <button
                                key={option.id}
                                onClick={() => handleMcSelect(option.id, option.text)}
                                disabled={done || isTyping}
                                className={`w-full text-left rounded-lg border px-4 py-3 text-sm transition-all ${
                                    selectedMcOption === option.id
                                        ? "border-blue-500 bg-blue-50 text-blue-700"
                                        : "border-gray-200 bg-white hover:border-blue-300 hover:bg-gray-50 disabled:opacity-50"
                                }`}
                            >
                                <span className="inline-flex items-center gap-2">
                                    <span className={`flex h-5 w-5 items-center justify-center rounded-full border text-xs ${
                                        selectedMcOption === option.id ? "border-blue-500 bg-blue-500 text-white" : "border-gray-300"
                                    }`}>
                                        {selectedMcOption === option.id ? "✓" : ""}
                                    </span>
                                    {option.text}
                                </span>
                            </button>
                        ))}
                    </div>
                ) : (
                    /* Essay Question: Show text input */
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSend()}
                            placeholder={done ? "Phỏng vấn đã kết thúc" : "Nhập câu trả lời..."}
                            disabled={done}
                            className="flex-1 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                        />
                        <button
                            onClick={handleSend}
                            disabled={!input.trim() || done}
                            className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
                        >
                            <Send className="h-4 w-4" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MugChat;
