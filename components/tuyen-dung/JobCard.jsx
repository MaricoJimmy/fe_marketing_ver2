import { motion } from "framer-motion";
import { MapPin, Briefcase, DollarSign, ArrowRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const JobCard = ({ title, location, experience, salary, type, onViewDetail, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="bg-white rounded-2xl p-6 shadow-card hover:shadow-lg transition-all group border border-gray-100 hover:border-blue-200 cursor-pointer"
            onClick={onViewDetail}
        >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div>
                    <span className="inline-block px-3 py-1 bg-blue-50 rounded-full text-xs font-medium text-blue-700 mb-3">
                        {type}
                    </span>
                    <h3 className="font-display text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {title}
                    </h3>
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-5 h-5 text-white" />
                </div>
            </div>

            {/* Details */}
            <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                    <Briefcase className="w-4 h-4" />
                    <span className="text-sm">{experience}</span>
                </div>
                {salary && (
                    <div className="flex items-center gap-2 text-emerald-600">
                        <DollarSign className="w-4 h-4" />
                        <span className="text-sm font-medium">{salary}</span>
                    </div>
                )}
            </div>

            {/* Actions */}
            <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                <Button variant="outline" size="sm" className="flex-1 gap-2" onClick={onViewDetail}>
                    <Eye className="w-4 h-4" />
                    Xem chi tiết
                </Button>
            </div>
        </motion.div>
    );
};

export default JobCard;
