export const BLOG_CATEGORIES = [
  { VI: 'Tất cả', EN: 'All' },
  { VI: 'AIoT và dữ liệu vận hành', EN: 'AIoT & Operational Data' },
  { VI: 'Nhà máy thông minh', EN: 'Smart Factory' },
  { VI: 'ESG và carbon', EN: 'ESG & Carbon' },
  { VI: 'Logistics và chuỗi vận hành', EN: 'Logistics & Supply Chain' },
  { VI: 'Tri thức AI', EN: 'AI Knowledge' },
  { VI: 'Góc nhìn chiến lược', EN: 'Strategic Insights' },
  { VI: 'Tin Udata', EN: 'Udata News' }
];

export const getCategoryColor = (categoryVI) => {
  switch (categoryVI) {
    case 'AIoT và dữ liệu vận hành': return 'bg-[#22D3EE]/10 text-[#22D3EE] border-[#22D3EE]/20';
    case 'Nhà máy thông minh': return 'bg-[#10F0CB]/10 text-[#10F0CB] border-[#10F0CB]/20';
    case 'ESG và carbon': return 'bg-[#34D399]/10 text-[#34D399] border-[#34D399]/20';
    case 'Logistics và chuỗi vận hành': return 'bg-[#FBBF24]/10 text-[#FBBF24] border-[#FBBF24]/20';
    case 'Tri thức AI': return 'bg-[#A78BFA]/10 text-[#A78BFA] border-[#A78BFA]/20';
    case 'Góc nhìn chiến lược': return 'bg-[#F472B6]/10 text-[#F472B6] border-[#F472B6]/20';
    case 'Tin Udata': return 'bg-[#60A5FA]/10 text-[#60A5FA] border-[#60A5FA]/20';
    default: return 'bg-white/5 text-[#6B7280] border-white/10';
  }
};

export const FEATURED_ARTICLES = [
  {
    id: 'f1',
    category: { VI: 'AIoT và dữ liệu vận hành', EN: 'AIoT & Operational Data' },
    title: { 
      VI: 'Vì sao dữ liệu vận hành là nền tảng của chuyển đổi số xanh?', 
      EN: 'Why Operational Data is the Foundation of Green Digital Transformation?' 
    },
    excerpt: { 
      VI: 'Dữ liệu vận hành chính xác và liên tục giúp doanh nghiệp hiểu đúng hiện trạng, tối ưu tài nguyên, giảm phát thải và tạo lợi thế cạnh tranh bền vững.', 
      EN: 'Accurate and continuous operational data helps businesses understand their current state, optimize resources, reduce emissions, and create a sustainable competitive advantage.' 
    },
    readingTime: { VI: '7 phút đọc', EN: '7 min read' },
    date: '15/05/2024',
    icon: 'hub',
    thumbnail: '/images/blog/f1_leaf.png'
  },
  {
    id: 'f2',
    category: { VI: 'Nhà máy thông minh', EN: 'Smart Factory' },
    title: { 
      VI: 'Từ giám sát thiết bị đến tối ưu hiệu suất nhà máy bằng AIoT', 
      EN: 'From Equipment Monitoring to Factory Performance Optimization with AIoT' 
    },
    excerpt: { 
      VI: 'Khi dữ liệu từ thiết bị, dây chuyền, cảm biến và năng lượng được kết nối, nhà máy có thể nhìn thấy điểm nghẽn và cải thiện hiệu suất vận hành tốt hơn.', 
      EN: 'When data from equipment, production lines, sensors, and energy are connected, factories can identify bottlenecks and improve overall operational performance.' 
    },
    readingTime: { VI: '6 phút đọc', EN: '6 min read' },
    date: '08/05/2024',
    icon: 'precision_manufacturing',
    thumbnail: '/images/blog/f2_robot.png'
  },
  {
    id: 'f3',
    category: { VI: 'ESG và carbon', EN: 'ESG & Carbon' },
    title: { 
      VI: 'Doanh nghiệp cần chuẩn bị dữ liệu gì cho ESG và quản trị carbon?', 
      EN: 'What Data Do Businesses Need for ESG and Carbon Management?' 
    },
    excerpt: { 
      VI: 'Dữ liệu phát thải thường nằm rải rác ở nhiều nguồn. Việc chuẩn hóa dữ liệu là bước quan trọng để doanh nghiệp sẵn sàng hơn cho ESG, audit và yêu cầu minh bạch.', 
      EN: 'Emission data is often scattered across multiple sources. Standardizing data is a crucial step for businesses to be ready for ESG reporting, audits, and transparency requirements.' 
    },
    readingTime: { VI: '6 phút đọc', EN: '6 min read' },
    date: '02/05/2024',
    icon: 'eco',
    thumbnail: '/images/blog/f3_co2.png'
  }
];

export const ALL_ARTICLES = [
  {
    id: 'a1',
    category: { VI: 'AIoT và dữ liệu vận hành', EN: 'AIoT & Operational Data' },
    title: { 
      VI: '5 bước xây dựng nền tảng dữ liệu vận hành hiệu quả cho doanh nghiệp', 
      EN: '5 Steps to Build an Effective Operational Data Platform for Your Business' 
    },
    excerpt: { 
      VI: 'Hướng dẫn lộ trình 5 bước giúp doanh nghiệp thu thập, chuẩn hóa và khai thác dữ liệu vận hành một cách hệ thống.', 
      EN: 'A 5-step roadmap guiding businesses to systematically collect, standardize, and exploit operational data.' 
    },
    readingTime: { VI: '7 phút đọc', EN: '7 min read' },
    date: '13/05/2024',
    icon: 'data_object',
    thumbnail: '/images/blog/a1_data.png'
  },
  {
    id: 'a2',
    category: { VI: 'Nhà máy thông minh', EN: 'Smart Factory' },
    title: { 
      VI: 'Checklist 10 yếu tố đánh giá mức độ trưởng thành nhà máy thông minh', 
      EN: 'Checklist: 10 Factors to Assess Smart Factory Maturity' 
    },
    excerpt: { 
      VI: 'Bộ checklist giúp doanh nghiệp tự đánh giá hiện trạng dữ liệu, thiết bị và quy trình trước khi triển khai nhà máy thông minh.', 
      EN: 'A checklist to help businesses self-assess their data, equipment, and processes before deploying a smart factory.' 
    },
    readingTime: { VI: '6 phút đọc', EN: '6 min read' },
    date: '07/05/2024',
    icon: 'checklist',
    thumbnail: '/images/blog/a2_factory.png'
  },
  {
    id: 'a3',
    category: { VI: 'ESG và carbon', EN: 'ESG & Carbon' },
    title: { 
      VI: 'Đo lường phát thải Scope 2: Phương pháp và dữ liệu cần thiết', 
      EN: 'Measuring Scope 2 Emissions: Methods and Required Data' 
    },
    excerpt: { 
      VI: 'Hướng dẫn các loại dữ liệu cần thu thập để theo dõi phát thải Scope 2 và chuẩn bị tốt hơn cho báo cáo bền vững.', 
      EN: 'A guide on the types of data needed to track Scope 2 emissions and better prepare for sustainability reporting.' 
    },
    readingTime: { VI: '6 phút đọc', EN: '6 min read' },
    date: '30/04/2024',
    icon: 'air',
    thumbnail: '/images/blog/a3_scope2.png'
  },
  {
    id: 'a4',
    category: { VI: 'Nhà máy thông minh', EN: 'Smart Factory' },
    title: { 
      VI: 'Bảo trì dự đoán với AIoT: Giám sự cố, tăng OEE', 
      EN: 'Predictive Maintenance with AIoT: Reduce Downtime, Increase OEE' 
    },
    excerpt: { 
      VI: 'Kết hợp cảm biến và mô hình dữ liệu giúp doanh nghiệp nhận diện rủi ro thiết bị sớm hơn, từ đó chủ động hơn trong bảo trì.', 
      EN: 'Combining sensors and data models helps businesses identify equipment risks earlier, enabling proactive maintenance.' 
    },
    readingTime: { VI: '6 phút đọc', EN: '6 min read' },
    date: '25/04/2024',
    icon: 'build_circle',
    thumbnail: '/images/blog/a4_maintenance.png'
  },
  {
    id: 'a5',
    category: { VI: 'AIoT và dữ liệu vận hành', EN: 'AIoT & Operational Data' },
    title: { 
      VI: 'Data pipeline cho nhà máy: Từ thiết bị đến quyết định', 
      EN: 'Data Pipeline for Factories: From Equipment to Decisions' 
    },
    excerpt: { 
      VI: 'Thiết kế kiến trúc dữ liệu thời gian thực, đảm bảo độ tin cậy và khả năng mở rộng khi số lượng thiết bị tăng trưởng.', 
      EN: 'Designing a real-time data architecture ensuring reliability and scalability as the number of connected devices grows.' 
    },
    readingTime: { VI: '7 phút đọc', EN: '7 min read' },
    date: '18/04/2024',
    icon: 'account_tree',
    thumbnail: '/images/blog/a5_pipeline.png'
  },
  {
    id: 'a6',
    category: { VI: 'ESG và carbon', EN: 'ESG & Carbon' },
    title: { 
      VI: 'Đo lường và báo cáo phát thải chuẩn ISO 14064', 
      EN: 'Measuring and Reporting Emissions according to ISO 14064' 
    },
    excerpt: { 
      VI: 'Hướng dẫn doanh nghiệp xây dựng hệ thống dữ liệu đo lường phát thải minh bạch và sẵn sàng hơn cho hoạt động kiểm toán.', 
      EN: 'A guide for businesses to build a transparent emission measurement data system ready for auditing activities.' 
    },
    readingTime: { VI: '6 phút đọc', EN: '6 min read' },
    date: '12/04/2024',
    icon: 'assignment_turned_in',
    thumbnail: '/images/blog/a6_iso.png'
  },
  {
    id: 'a7',
    category: { VI: 'Logistics và chuỗi vận hành', EN: 'Logistics & Supply Chain' },
    title: { 
      VI: 'Tối ưu hành trình và tải trọng bằng dữ liệu AIoT', 
      EN: 'Optimizing Routes and Payloads with AIoT Data' 
    },
    excerpt: { 
      VI: 'Ứng dụng dữ liệu vị trí, điều kiện hàng và trạng thái tài sản để giảm chi phí vận chuyển và tăng tính ổn định trong giao nhận.', 
      EN: 'Applying location data, cargo conditions, and asset status to reduce transportation costs and increase delivery stability.' 
    },
    readingTime: { VI: '6 phút đọc', EN: '6 min read' },
    date: '05/04/2024',
    icon: 'local_shipping',
    thumbnail: '/images/blog/a7_logistics.png'
  },
  {
    id: 'a8',
    category: { VI: 'Tri thức AI', EN: 'AI Knowledge' },
    title: { 
      VI: 'Sử dụng AI tạo sinh trong xử lý tài liệu nội bộ doanh nghiệp', 
      EN: 'Using Generative AI in Processing Enterprise Internal Documents' 
    },
    excerpt: { 
      VI: 'MiniUgate giúp doanh nghiệp tự động hóa quá trình tìm kiếm, tóm tắt và hỏi đáp trên kho tài liệu khổng lồ.', 
      EN: 'MiniUgate helps businesses automate the process of searching, summarizing, and Q&A on massive document repositories.' 
    },
    readingTime: { VI: '5 phút đọc', EN: '5 min read' },
    date: '28/03/2024',
    icon: 'psychology',
    thumbnail: '/images/blog/a8_ai.png'
  },
  {
    id: 'a9',
    category: { VI: 'Tin Udata', EN: 'Udata News' },
    title: { 
      VI: 'Udata hợp tác chiến lược triển khai nhà máy thông minh tại VSIP', 
      EN: 'Udata Forms Strategic Partnership for Smart Factory Deployment at VSIP' 
    },
    excerpt: { 
      VI: 'Cột mốc quan trọng trong việc đưa nền tảng Uboard vào ứng dụng tại một trong những khu công nghiệp lớn nhất.', 
      EN: 'An important milestone in bringing the Uboard platform into application at one of the largest industrial parks.' 
    },
    readingTime: { VI: '4 phút đọc', EN: '4 min read' },
    date: '20/03/2024',
    icon: 'handshake',
    thumbnail: '/images/blog/a9_news.png'
  },
  {
    id: 'a10',
    category: { VI: 'Góc nhìn chiến lược', EN: 'Strategic Insights' },
    title: { 
      VI: 'Chiến lược dữ liệu 2025: Từ trung tâm chi phí đến trung tâm lợi nhuận', 
      EN: 'Data Strategy 2025: From Cost Center to Profit Center' 
    },
    excerpt: { 
      VI: 'Làm thế nào để các CIO và COO biến dữ liệu vận hành thành lợi thế cạnh tranh cốt lõi.', 
      EN: 'How CIOs and COOs can turn operational data into a core competitive advantage.' 
    },
    readingTime: { VI: '8 phút đọc', EN: '8 min read' },
    date: '15/03/2024',
    icon: 'insights',
    thumbnail: '/images/blog/a10_strategy.png'
  },
  {
    id: 'a11',
    category: { VI: 'Logistics và chuỗi vận hành', EN: 'Logistics & Supply Chain' },
    title: { 
      VI: 'Quản trị rủi ro chuỗi cung ứng với dữ liệu thời gian thực', 
      EN: 'Supply Chain Risk Management with Real-time Data' 
    },
    excerpt: { 
      VI: 'Giảm thiểu tác động của các đứt gãy chuỗi cung ứng toàn cầu thông qua khả năng quan sát xuyên suốt.', 
      EN: 'Minimize the impact of global supply chain disruptions through end-to-end visibility.' 
    },
    readingTime: { VI: '7 phút đọc', EN: '7 min read' },
    date: '05/03/2024',
    icon: 'route',
    thumbnail: '/images/blog/a11_logistics.png'
  },
  {
    id: 'a12',
    category: { VI: 'Tri thức AI', EN: 'AI Knowledge' },
    title: { 
      VI: 'Tương lai của trợ lý ảo trong vận hành nhà máy', 
      EN: 'The Future of Virtual Assistants in Factory Operations' 
    },
    excerpt: { 
      VI: 'Sự kết hợp giữa LLM và dữ liệu IoT tạo ra các trợ lý AI có khả năng hướng dẫn xử lý sự cố tại chỗ.', 
      EN: 'The combination of LLMs and IoT data creates AI assistants capable of guiding on-site troubleshooting.' 
    },
    readingTime: { VI: '6 phút đọc', EN: '6 min read' },
    date: '28/02/2024',
    icon: 'smart_toy',
    thumbnail: '/images/blog/a12_bot.png'
  }
];
