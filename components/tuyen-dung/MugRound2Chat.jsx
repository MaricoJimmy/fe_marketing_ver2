import { useState, useRef, useEffect } from "react";
import { Send, Bot, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ROUND2_CASES = [
    {
        id: "case1",
        title: "Case 1 – Tăng trưởng khách hàng",
        question: `Nếu công ty yêu cầu đạt **200 khách hàng/tháng** với đội **40 người**, bạn sẽ xây dựng kế hoạch thế nào?\n\nBạn cần trình bày:\n• Cách chia KPI cho từng người\n• Cách xây dựng pipeline khách hàng\n• Chiến lược đạt mục tiêu`,
    },
    {
        id: "case2",
        title: "Case 2 – Xử lý đội yếu",
        question: `Nếu **40% đội sales không đạt KPI** trong 3 tháng liên tiếp, bạn sẽ làm gì?\n\nBạn cần trình bày:\n• Kế hoạch coaching\n• Chương trình đào tạo\n• Quyết định thay đổi hoặc loại bỏ nhân sự yếu nếu cần`,
    },
    {
        id: "case3",
        title: "Case 3 – Pipeline",
        question: `Nếu **conversion rate là 10%**, cần bao nhiêu lead để đạt **200 khách hàng**?\n\nBạn cần:\n• Tính toán cụ thể\n• Giải thích logic\n\n_(Gợi ý: Hãy sử dụng công thức và đưa ra con số chính xác)_`,
    },
];

const MugRound2Chat = ({ candidateName, onComplete, questions = [] }) => {
    // Support both string arrays (legacy) and rich question objects
    const round2Cases =
        questions.length > 0
            ? questions.map((question, index) => {
                // If it's a string, convert to legacy format
                if (typeof question === "string") {
                    return {
                        id: `case${index + 1}`,
                        title: `Case ${index + 1}`,
                        question,
                        type: "essay",
                        options: null,
                    };
                }
                // If it's a rich question object, use as-is
                return {
                    id: question.id || `case${index + 1}`,
                    title: question.content?.substring(0, 50) || `Case ${index + 1}`,
                    question: question.content,
                    type: question.type || "essay",
                    options: question.options || null,
                };
            })
            : ROUND2_CASES;
    const totalCases = round2Cases.length;
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [currentCase, setCurrentCase] = useState(0);
    const [answers, setAnswers] = useState({});
    const [isTyping, setIsTyping] = useState(false);
    const [done, setDone] = useState(false);
    const [selectedMcOption, setSelectedMcOption] = useState(null);
    const bottomRef = useRef(null);
    const messagesContainerRef = useRef(null);

    useEffect(() => {
        const container = messagesContainerRef.current;
        if (container) {
            container.scrollTop = container.scrollHeight;
        }
    }, [messages, isTyping]);

    useEffect(() => {
        const t1 = setTimeout(() => {
            addMugMessage(
                `Chào mừng ${candidateName} đến Vòng 2! 🎯\n\nĐây là vòng **Practical Test** — bạn sẽ trả lời ${totalCases} câu hỏi.\n\nMUG sẽ tự động chấm điểm dựa trên các tiêu chí:\n• Tư duy chiến lược (30đ)\n• Tư duy số liệu (30đ)\n• Khả năng ra quyết định (20đ)\n• Leadership (20đ)\n\nHãy trả lời **chi tiết, có số liệu và logic rõ ràng**. Sẵn sàng chưa? 🚀`
            );
            setTimeout(() => {
                const firstCase = round2Cases[0];
                if (firstCase.type === "multiple_choice") {
                    addMugMessage(`📋 **${firstCase.title}:**\n\n${firstCase.question}\n\n_Vui lòng chọn một đáp án bên dưới._`);
                } else {
                    addMugMessage(`📋 **${firstCase.title}:**\n\n${firstCase.question}`);
                }
            }, 1500);
        }, 800);
        return () => clearTimeout(t1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function addMugMessage(content) {
        setMessages((prev) => [...prev, { role: "mug", content, timestamp: new Date().toISOString() }]);
    }

    function handleSend() {
        if (!input.trim() || done) return;
        const text = input.trim();
        setInput("");
        setMessages((prev) => [...prev, { role: "user", content: text, timestamp: new Date().toISOString() }]);
        setIsTyping(true);

        setTimeout(() => {
            setIsTyping(false);
            const key = round2Cases[currentCase].id;
            const newAnswers = { ...answers, [key]: text };
            setAnswers(newAnswers);

            const next = currentCase + 1;
            if (next < totalCases) {
                setCurrentCase(next);
                const nextCase = round2Cases[next];
                if (nextCase.type === "multiple_choice") {
                    addMugMessage(`✅ Tuyệt vời!\n\n📋 **${nextCase.title}:**\n\n${nextCase.question}\n\n_Vui lòng chọn một đáp án bên dưới._`);
                } else {
                    addMugMessage(`Tuyệt vời! ✅\n\n📋 **${nextCase.title}:**\n\n${nextCase.question}`);
                }
            } else {
                finishRound(newAnswers);
            }
        }, 800 + Math.random() * 800);
    }

    function handleMcSelect(optionId, optionText) {
        if (done) return;
        setSelectedMcOption(optionId);
        
        setMessages((prev) => [...prev, { role: "user", content: `☑️ ${optionText}`, timestamp: new Date().toISOString() }]);
        setIsTyping(true);

        setTimeout(() => {
            setIsTyping(false);
            const key = round2Cases[currentCase].id;
            const newAnswers = { ...answers, [key]: optionId };
            setAnswers(newAnswers);
            setSelectedMcOption(null);

            const next = currentCase + 1;
            if (next < totalCases) {
                setCurrentCase(next);
                const nextCase = round2Cases[next];
                if (nextCase.type === "multiple_choice") {
                    addMugMessage(`✅ Tuyệt vời!\n\n📋 **${nextCase.title}:**\n\n${nextCase.question}\n\n_Vui lòng chọn một đáp án bên dưới._`);
                } else {
                    addMugMessage(`✅ Tuyệt vời!\n\n📋 **${nextCase.title}:**\n\n${nextCase.question}`);
                }
            } else {
                finishRound(newAnswers);
            }
        }, 500 + Math.random() * 500);
    }

    function finishRound(finalAnswers) {
        setDone(true);
        addMugMessage("Cảm ơn bạn đã hoàn thành! ✨\n\nMUG đang đánh giá bài làm...");
        setTimeout(() => {
            const result = scoreRound2(finalAnswers);
            onComplete(result);
        }, 2000);
    }

    function scoreRound2(allAnswers) {
        // Separate MC and essay answers for scoring
        let mcCorrectCount = 0;
        let mcTotalCount = 0;
        let essayAnswers = {};

        // Analyze each answer
        for (const [key, ans] of Object.entries(allAnswers)) {
            const caseIndex = round2Cases.findIndex(c => c.id === key);
            const caseItem = round2Cases[caseIndex];
            
            if (caseItem?.type === "multiple_choice") {
                mcTotalCount++;
                const selectedOption = caseItem.options?.find(opt => opt.id === ans);
                if (selectedOption?.isCorrect) {
                    mcCorrectCount++;
                }
            } else {
                essayAnswers[key] = ans;
            }
        }

        const c1 = (essayAnswers.case1 || "").toLowerCase();
        const c2 = (essayAnswers.case2 || "").toLowerCase();
        const c3 = (essayAnswers.case3 || "").toLowerCase();

        // Strategy (max 30) — from case1
        let strategy = 5;
        if (/kpi/i.test(c1)) strategy += 5;
        if (/pipeline/i.test(c1)) strategy += 5;
        if (/chiến lược|kế hoạch|mục tiêu/i.test(c1)) strategy += 5;
        if (/chia|phân|mỗi người|trung bình/i.test(c1)) strategy += 5;
        if (c1.length > 200) strategy += 5;
        strategy = Math.min(30, strategy);

        // Numeric (max 30) — from case3 mainly
        let numeric = 5;
        if (/2000|2,000|2\.000/.test(c3)) numeric += 15;
        else if (/\d{3,}/.test(c3)) numeric += 5;
        if (/200.*0\.1|200.*10%|200\/0\.1/i.test(c3)) numeric += 5;
        if (/tính|công thức|logic|suy ra/i.test(c3)) numeric += 5;
        if (/\d/.test(c1)) numeric += 3;
        numeric = Math.min(30, numeric);

        // Decision-making (max 20) — from case2
        let decision = 5;
        if (/loại|sa thải|thay thế|cho nghỉ|đuổi/i.test(c2)) decision += 7;
        if (/coaching|đào tạo|huấn luyện|mentor/i.test(c2)) decision += 4;
        if (/kpi|đánh giá|theo dõi|đo lường/i.test(c2)) decision += 4;
        decision = Math.min(20, decision);

        // Leadership (max 20) — across all
        let leadership = 5;
        if (/đội|team|nhóm|quản lý/i.test(c1 + c2)) leadership += 4;
        if (/trách nhiệm|chịu trách nhiệm/i.test(c2)) leadership += 4;
        if (/hỗ trợ|giúp đỡ|đồng hành/i.test(c2)) leadership += 4;
        if (c2.length > 150) leadership += 3;
        leadership = Math.min(20, leadership);

        // MC score component
        let mcScore = 0;
        if (mcTotalCount > 0) {
            mcScore = Math.round((mcCorrectCount / mcTotalCount) * 25);
        }

        const scores = { strategy, numeric, decision, leadership, mcScore };
        const total = strategy + numeric + decision + leadership + mcScore;

        let status;
        if (total > 80) status = "Pass";
        else if (total >= 60) status = "Pending";
        else status = "Reject";

        const feedback = [];
        
        // MC feedback
        if (mcTotalCount > 0) {
            feedback.push(`Trắc nghiệm: ${mcCorrectCount}/${mcTotalCount} câu đúng.`);
        }
        
        // Essay feedback
        if (strategy >= 20) feedback.push("Tư duy chiến lược mạnh, có kế hoạch rõ ràng.");
        else if (Object.keys(essayAnswers).length > 0) feedback.push("Cần xây dựng chiến lược chi tiết hơn với các bước cụ thể.");
        if (numeric >= 20) feedback.push("Phân tích số liệu tốt, tính toán chính xác.");
        else if (Object.keys(essayAnswers).length > 0) feedback.push("Cần cải thiện khả năng tính toán và phân tích dữ liệu.");
        if (decision >= 14) feedback.push("Ra quyết định dứt khoát, không ngại xử lý nhân sự yếu.");
        else if (Object.keys(essayAnswers).length > 0) feedback.push("Cần thể hiện quyết đoán hơn trong việc xử lý nhân sự không đạt.");
        if (leadership >= 14) feedback.push("Tố chất lãnh đạo tốt, biết quản lý và hỗ trợ đội nhóm.");
        else if (Object.keys(essayAnswers).length > 0) feedback.push("Cần thể hiện rõ hơn năng lực quản lý và dẫn dắt đội nhóm.");

        return { answers: allAnswers, scores, total, status, feedback };
    }

    return (
        <div className="flex flex-col rounded-2xl border border-gray-200 bg-white overflow-hidden" style={{ height: "650px" }}>
            {/* Header */}
            <div className="px-6 py-4 flex items-center gap-3" style={{ background: "linear-gradient(135deg, #d97706, #ea580c)" }}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{ background: "rgba(255,255,255,0.2)" }}>
                    <Bot className="h-5 w-5 text-white" />
                </div>
                <div>
                    <h3 className="font-bold text-white">MUG — Vòng 2: Practical Test</h3>
                    <p className="text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>
                        Case Study {Math.min(currentCase + 1, totalCases)}/{totalCases}
                    </p>
                </div>
                <div className="ml-auto">
                    <div className="h-2 w-32 rounded-full" style={{ background: "rgba(255,255,255,0.2)" }}>
                        <div
                            className="h-2 rounded-full transition-all duration-500"
                            style={{
                                width: `${((currentCase + (done ? 1 : 0)) / totalCases) * 100}%`,
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
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full" style={{ background: "rgba(217,119,6,0.1)" }}>
                                    <Bot className="h-4 w-4" style={{ color: "#d97706" }} />
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
                                    ) : part.startsWith("_") && part.endsWith("_") ? (
                                        <em key={j}>{part.slice(1, -1)}</em>
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
                        <div className="flex h-8 w-8 items-center justify-center rounded-full" style={{ background: "rgba(217,119,6,0.1)" }}>
                            <Bot className="h-4 w-4" style={{ color: "#d97706" }} />
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
                <div ref={bottomRef} />
            </div>

            {/* Input / MC Options */}
            <div className="border-t border-gray-200 p-4">
                {!done && round2Cases[currentCase]?.type === "multiple_choice" && round2Cases[currentCase]?.options ? (
                    /* MC Question: Show radio buttons */
                    <div className="space-y-2">
                        <p className="text-xs text-gray-500 mb-2">Chọn một đáp án:</p>
                        {round2Cases[currentCase].options.map((option) => (
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
                    /* Essay Question: Show textarea */
                    <div className="flex gap-2">
                        <textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && !e.shiftKey) {
                                    e.preventDefault();
                                    handleSend();
                                }
                            }}
                            placeholder={done ? "Bài làm đã hoàn tất" : "Nhập câu trả lời chi tiết... (Shift+Enter để xuống dòng)"}
                            disabled={done}
                            rows={3}
                            className="flex-1 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 resize-none"
                        />
                        <button
                            onClick={handleSend}
                            disabled={!input.trim() || done}
                            className="flex w-12 items-center justify-center rounded-lg bg-blue-600 text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
                        >
                            <Send className="h-4 w-4" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MugRound2Chat;
