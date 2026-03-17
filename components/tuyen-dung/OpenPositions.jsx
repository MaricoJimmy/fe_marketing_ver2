import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import JobCard from "./JobCard";
import JobDetailModal from "./JobDetailModal";
import { recruitmentApi } from "@/lib/recruitmentApi";

const fallbackJobs = [
    {
        id: "1",
        title: "Business Development Manager",
        location: "Hà Nội / HCM",
        experience: "5+ năm kinh nghiệm",
        salary: "Từ 25 triệu + Hoa hồng",
        type: "Full-time",
        description: `Udata là nền tảng phần mềm tiên phong tại Việt Nam trong lĩnh vực AI và IoT, giúp doanh nghiệp vận hành thông minh và phát triển bền vững.

Với các sản phẩm chủ lực như Uboard, Ugate, Uzero, Udata đang đồng hành cùng các nhà máy, tòa nhà, khu công nghiệp, doanh nghiệp sản xuất trong hành trình chuyển đổi số và tối ưu hóa năng lượng.`,
        requirements: [
            "Tốt nghiệp Cao Đẳng/Đại học",
            "Tối thiểu 5 năm kinh nghiệm trong Business Development / Sales B2B ở vị trí quản lý",
            "Am hiểu quy trình bán hàng B2B, solution selling",
            "Kỹ năng đàm phán, thuyết trình, quản lý đội nhóm",
            "Có network khách hàng doanh nghiệp, nhà máy",
            "Tư duy chiến lược, chủ động, định hướng kết quả",
        ],
        benefits: [
            "Thu nhập cạnh tranh: Lương cơ bản từ 25 triệu + hoa hồng hấp dẫn",
            "Chế độ BHXH, BHYT, nghỉ phép theo quy định",
            "Cơ hội thăng tiến rõ ràng theo năng lực",
            "Đào tạo chuyên sâu về sản phẩm, thị trường",
            "Môi trường startup công nghệ trẻ trung, năng động",
        ],
    },
    {
        id: "2",
        title: "Business Development Staff",
        location: "Hà Nội / HCM",
        experience: "2+ năm kinh nghiệm",
        salary: "Từ 12 triệu + Hoa hồng",
        type: "Full-time",
        description: `Udata là nền tảng phần mềm tiên phong tại Việt Nam trong lĩnh vực AI và IoT.

Chúng tôi đang tìm kiếm Business Development Staff để mở rộng thị trường và phát triển khách hàng mới.`,
        requirements: [
            "Tốt nghiệp Cao Đẳng/Đại học",
            "Tối thiểu 2 năm kinh nghiệm ở vị trí Business Development / Sales B2B",
            "Có kinh nghiệm hoặc hiểu biết về giải pháp doanh nghiệp",
            "Kỹ năng giao tiếp, đàm phán và thuyết trình tốt",
            "Chủ động, nhiệt huyết và định hướng kết quả",
        ],
        benefits: [
            "Thu nhập cạnh tranh: Lương cơ bản từ 12 triệu + hoa hồng",
            "Chế độ BHXH, BHYT, nghỉ phép theo quy định",
            "Cơ hội thăng tiến rõ ràng theo năng lực",
            "Đào tạo chuyên sâu về sản phẩm và kỹ năng tư vấn B2B",
            "Môi trường startup công nghệ trẻ trung, sáng tạo",
        ],
    },
];

const OpenPositions = ({ onSelectPosition }) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedJob, setSelectedJob] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const jobsData = await recruitmentApi.getPublicJobs();
                if (!jobsData || jobsData.length === 0) {
                    setJobs(fallbackJobs);
                } else {
                    setJobs(jobsData);
                }
            } catch (error) {
                console.error("Error fetching jobs:", error);
                setJobs(fallbackJobs);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    const handleViewDetail = (job) => {
        setSelectedJob(job);
        setIsModalOpen(true);
    };

    const handleApply = (jobTitle) => {
        onSelectPosition(jobTitle);
    };

    return (
        <>
            <section id="positions" className="py-20 md:py-32 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        {/* Section Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-16"
                        >
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Vị trí{" "}
                                <span className="text-gradient-accent">đang tuyển</span>
                            </h2>
                            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                                Khám phá các cơ hội nghề nghiệp tại Udata. Chúng tôi đang tìm kiếm những người tài năng để cùng xây dựng tương lai.
                            </p>
                        </motion.div>

                        {/* Jobs Grid */}
                        {loading ? (
                            <div className="flex justify-center items-center py-12">
                                <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-2 gap-6">
                                {jobs.map((job, index) => (
                                    <JobCard
                                        key={job.id}
                                        title={job.title}
                                        location={job.location}
                                        experience={job.experience}
                                        salary={job.salary}
                                        type={job.type}
                                        onViewDetail={() => handleViewDetail(job)}
                                        index={index}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <JobDetailModal
                job={selectedJob}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onApply={handleApply}
            />
        </>
    );
};

export default OpenPositions;
