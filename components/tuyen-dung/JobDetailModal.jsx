import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Briefcase, DollarSign, Clock, Building, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const JobDetailModal = ({ job, isOpen, onClose, onApply }) => {
    if (!job) return null;

    const handleApply = () => {
        onApply(job.title);
        onClose();
        document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 z-50"
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 50, scale: 0.95 }}
                            className="w-full max-w-2xl max-h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col pointer-events-auto"
                        >
                            {/* Header */}
                            <div className="p-6 border-b border-gray-100 flex items-start justify-between">
                                <div>
                                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium mb-2">
                                        {job.type}
                                    </span>
                                    <h2 className="font-display text-2xl font-bold text-gray-900">
                                        {job.title}
                                    </h2>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="flex-1 overflow-y-auto p-6 space-y-6">
                                {/* Quick Info */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                        <MapPin className="w-5 h-5 text-blue-600" />
                                        <div>
                                            <p className="text-xs text-gray-500">Địa điểm</p>
                                            <p className="text-sm font-medium">{job.location}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                        <Briefcase className="w-5 h-5 text-blue-600" />
                                        <div>
                                            <p className="text-xs text-gray-500">Kinh nghiệm</p>
                                            <p className="text-sm font-medium">{job.experience}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                        <DollarSign className="w-5 h-5 text-emerald-600" />
                                        <div>
                                            <p className="text-xs text-gray-500">Mức lương</p>
                                            <p className="text-sm font-medium text-emerald-600">{job.salary}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                        <Clock className="w-5 h-5 text-blue-600" />
                                        <div>
                                            <p className="text-xs text-gray-500">Hình thức</p>
                                            <p className="text-sm font-medium">{job.type}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                {job.description && (
                                    <div>
                                        <h3 className="font-display text-lg font-semibold mb-3 flex items-center gap-2">
                                            <Building className="w-5 h-5 text-blue-600" />
                                            Mô tả công việc
                                        </h3>
                                        <div className="text-gray-600 whitespace-pre-line">
                                            {job.description}
                                        </div>
                                    </div>
                                )}

                                {/* Requirements */}
                                {job.requirements && job.requirements.length > 0 && (
                                    <div>
                                        <h3 className="font-display text-lg font-semibold mb-3">Yêu cầu</h3>
                                        <ul className="space-y-2">
                                            {job.requirements.map((req, index) => (
                                                <li key={index} className="flex items-start gap-2 text-gray-600">
                                                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                                                    {req}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Benefits */}
                                {job.benefits && job.benefits.length > 0 && (
                                    <div>
                                        <h3 className="font-display text-lg font-semibold mb-3">Quyền lợi</h3>
                                        <ul className="space-y-2">
                                            {job.benefits.map((benefit, index) => (
                                                <li key={index} className="flex items-start gap-2 text-gray-600">
                                                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* Footer */}
                            <div className="p-6 border-t border-gray-100">
                                <Button
                                    size="lg"
                                    className="w-full gap-2 bg-emerald-600 hover:bg-emerald-700 text-white"
                                    onClick={handleApply}
                                >
                                    <Send className="w-5 h-5" />
                                    Ứng tuyển ngay
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default JobDetailModal;
