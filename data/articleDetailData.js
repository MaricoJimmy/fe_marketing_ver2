export const ARTICLE_DETAIL_DATA = {
  breadcrumb: {
    home: { VI: 'Trang chủ', EN: 'Home' },
    blog: { VI: 'Góc nhìn Udata', EN: 'Udata Insights' }
  },
  authorLabel: { VI: 'Tác giả:', EN: 'Author:' },
  
  sidebar: {
    tocTitle: { VI: 'Mục lục bài viết', EN: 'Table of Contents' },
    expertTitle: { VI: 'Trao đổi với chuyên gia', EN: 'Talk to an Expert' },
    expertSubtitle: { VI: 'Đội ngũ Udata', EN: 'Udata Team' },
    expertDesc: { VI: 'Làm rõ bài toán dữ liệu vận hành và lộ trình chuyển đổi số xanh cho doanh nghiệp của bạn.', EN: 'Clarify operational data challenges and the green digital transformation roadmap for your business.' },
    expertBtn: { VI: 'Đặt lịch tư vấn', EN: 'Book a Consultation' },
    productsTitle: { VI: 'Sản phẩm nổi bật', EN: 'Featured Products' },
    productDescUgate: { VI: 'Thiết bị AIoT công nghiệp', EN: 'Industrial AIoT Device' },
    productDescUboard: { VI: 'Nền tảng giám sát & phân tích', EN: 'Monitoring & Analytics Platform' },
    productDescUzero: { VI: 'Giải pháp quản trị carbon', EN: 'Carbon Management Solution' }
  },

  content: {
    summaryTitle: { VI: 'Tóm tắt nội dung', EN: 'Quick Summary' },
    summaryBullets: [
      { VI: 'Chuyển đổi số xanh cần bắt đầu từ dữ liệu vận hành có thể đo lường.', EN: 'Green digital transformation must start with measurable operational data.' },
      { VI: 'Dữ liệu phân mảnh khiến doanh nghiệp khó nhìn thấy hiệu suất, chi phí và phát thải.', EN: 'Fragmented data makes it difficult for businesses to see performance, costs, and emissions.' },
      { VI: 'Lớp dữ liệu realtime giúp ban lãnh đạo và đội vận hành ra quyết định nhanh hơn.', EN: 'A real-time data layer helps leadership and operations teams make faster decisions.' },
      { VI: 'ESG và carbon cần nền tảng dữ liệu đáng tin cậy, không chỉ là hoạt động báo cáo cuối kỳ.', EN: 'ESG and carbon need a reliable data foundation, not just end-of-period reporting activities.' },
      { VI: 'AIoT giúp doanh nghiệp kết nối dữ liệu từ thiết bị, hệ thống và quy trình vận hành.', EN: 'AIoT helps businesses connect data from equipment, systems, and operational processes.' }
    ],
    
    inThisArticle: { VI: 'Trong bài viết này', EN: 'In this article' },
    
    intro: [
      { VI: 'Chuyển đổi số xanh thường được nhìn nhận qua các mục tiêu lớn như tối ưu năng lượng, quản trị carbon, báo cáo ESG hoặc phát triển bền vững. Tuy nhiên, trước khi doanh nghiệp có thể báo cáo, tối ưu hoặc cải thiện, một câu hỏi cơ bản cần được trả lời: <strong>dữ liệu vận hành hiện đang nằm ở đâu, có đủ tin cậy không và có thể sử dụng để ra quyết định hay chưa?</strong>', EN: 'Green digital transformation is often viewed through major goals like energy optimization, carbon management, ESG reporting, or sustainability. However, before a business can report, optimize, or improve, a fundamental question must be answered: <strong>where is operational data currently located, is it reliable, and can it be used to make decisions?</strong>' },
      { VI: 'Với nhiều doanh nghiệp sản xuất, logistics, khu công nghiệp hoặc enterprise, dữ liệu không thiếu. Dữ liệu có mặt trong máy móc, dây chuyền, ERP, kho vận, tài chính, hóa đơn năng lượng, báo cáo sản xuất và nhiều file nội bộ. Vấn đề nằm ở chỗ các nguồn dữ liệu này thường bị phân tán, cập nhật chậm hoặc chưa được kết nối thành một bức tranh vận hành thống nhất.', EN: 'For many manufacturing, logistics, industrial park, or enterprise businesses, data is not lacking. Data is present in machinery, production lines, ERP, logistics, finance, energy bills, production reports, and many internal files. The problem lies in the fact that these data sources are often scattered, updated slowly, or not connected into a unified operational picture.' },
      { VI: 'Khi dữ liệu chưa được tổ chức đúng cách, chuyển đổi số xanh rất dễ trở thành một chuỗi hoạt động rời rạc. Doanh nghiệp có thể có báo cáo, nhưng chưa chắc có năng lực theo dõi và cải thiện liên tục. Doanh nghiệp có thể có mục tiêu ESG, nhưng chưa chắc có nền tảng dữ liệu đủ rõ để biết nên bắt đầu tối ưu từ đâu.', EN: 'When data is not organized properly, green digital transformation can easily become a series of disjointed activities. A business may have reports, but not necessarily the capacity to track and improve continuously. A business may have ESG goals, but not necessarily a clear enough data foundation to know where to start optimizing.' }
    ],

    section1: {
      title: { VI: 'Dữ liệu vận hành là gì?', EN: 'What is operational data?' },
      p1: { VI: 'Dữ liệu vận hành là toàn bộ dữ liệu phát sinh trong quá trình doanh nghiệp vận hành hằng ngày. Đây là dữ liệu phản ánh cách nhà máy, kho vận, hệ thống tài chính, năng lượng, tài sản, con người và quy trình đang hoạt động.', EN: 'Operational data is all the data generated during the daily operations of a business. It reflects how factories, logistics, financial systems, energy, assets, people, and processes are functioning.' },
      p2: { VI: 'Một số nhóm dữ liệu vận hành phổ biến gồm:', EN: 'Some common groups of operational data include:' },
      bullets: [
        { VI: 'Dữ liệu thiết bị, cảm biến và dây chuyền sản xuất', EN: 'Equipment, sensor, and production line data' },
        { VI: 'Dữ liệu sản lượng, chất lượng và hiệu suất', EN: 'Output, quality, and performance data' },
        { VI: 'Dữ liệu kho, tồn kho, nhập xuất và luồng hàng', EN: 'Warehouse, inventory, import/export, and cargo flow data' },
        { VI: 'Dữ liệu năng lượng như điện, nước, khí nén, nhiên liệu', EN: 'Energy data such as electricity, water, compressed air, fuel' },
        { VI: 'Dữ liệu tài chính, chi phí và dòng tiền liên quan đến vận hành', EN: 'Financial, cost, and cash flow data related to operations' },
        { VI: 'Dữ liệu bảo trì, sự cố và lịch sử thiết bị', EN: 'Maintenance, breakdown, and equipment history data' },
        { VI: 'Dữ liệu phát thải, carbon và các nguồn phát sinh liên quan', EN: 'Emissions, carbon, and related generation source data' },
        { VI: 'Dữ liệu tài liệu, quy trình và tri thức nội bộ', EN: 'Document, process, and internal knowledge data' }
      ],
      p3: { VI: 'Điểm quan trọng là dữ liệu vận hành không chỉ phục vụ một phòng ban. Khi được kết nối đúng cách, dữ liệu này trở thành nền tảng để ban lãnh đạo, đội sản xuất, vận hành, tài chính, năng lượng và phát triển bền vững cùng nhìn vào một bức tranh chung.', EN: 'The important point is that operational data does not just serve one department. When properly connected, this data becomes the foundation for leadership, production, operations, finance, energy, and sustainability teams to look at a shared picture.' }
    },

    section2: {
      title: { VI: 'Vì sao dữ liệu là điểm bắt đầu của chuyển đổi số xanh?', EN: 'Why is data the starting point for green digital transformation?' },
      p1: { VI: 'Chuyển đổi số xanh không chỉ là việc áp dụng công nghệ mới. Đây là quá trình giúp doanh nghiệp vận hành thông minh hơn, sử dụng tài nguyên hiệu quả hơn và xây dựng nền tảng tăng trưởng dài hạn dựa trên dữ liệu. Để làm được điều đó, doanh nghiệp cần nhìn thấy ba lớp thông tin quan trọng.', EN: 'Green digital transformation is not just about applying new technology. It is a process that helps businesses operate smarter, use resources more efficiently, and build a foundation for long-term growth based on data. To do that, businesses need to see three critical layers of information.' },
      h1: { VI: 'Hiệu suất vận hành', EN: 'Operational Performance' },
      p2: { VI: 'Doanh nghiệp cần biết thiết bị, dây chuyền, kho vận và tài sản đang hoạt động như thế nào. Nếu không có dữ liệu hiệu suất, việc tối ưu thường dựa nhiều vào kinh nghiệm hoặc báo cáo sau khi sự cố đã xảy ra.', EN: 'Businesses need to know how equipment, production lines, logistics, and assets are performing. Without performance data, optimization is often heavily based on experience or reports after an incident has occurred.' },
      h2: { VI: 'Tài nguyên và chi phí', EN: 'Resources and Costs' },
      p3: { VI: 'Năng lượng, nguyên vật liệu, nhân công, thời gian xử lý và chi phí vận hành đều ảnh hưởng trực tiếp đến hiệu quả kinh doanh. Khi dữ liệu này được theo dõi thường xuyên, doanh nghiệp có thể phát hiện điểm lãng phí sớm hơn.', EN: 'Energy, raw materials, labor, processing time, and operating costs all directly affect business efficiency. When this data is tracked regularly, businesses can detect points of waste much earlier.' },
      h3: { VI: 'Phát thải và tác động bền vững', EN: 'Emissions and Sustainability Impact' },
      p4: { VI: 'Dữ liệu carbon và phát thải không thể tách rời khỏi dữ liệu vận hành. Phát thải thường phát sinh từ năng lượng, sản xuất, vận tải, nguyên vật liệu và hoạt động của từng đơn vị. Vì vậy, muốn quản trị carbon tốt hơn, doanh nghiệp cần bắt đầu từ việc kết nối dữ liệu vận hành.', EN: 'Carbon and emissions data cannot be separated from operational data. Emissions typically arise from energy, production, transportation, raw materials, and unit activities. Therefore, to manage carbon better, businesses must start by connecting operational data.' }
    },

    section3: {
      title: { VI: 'Khi dữ liệu phân mảnh, doanh nghiệp mất gì?', EN: 'When data is fragmented, what does a business lose?' },
      p1: { VI: 'Dữ liệu phân mảnh là một trong những rào cản lớn nhất của chuyển đổi số. Khi mỗi phòng ban dùng một hệ thống riêng, mỗi nhà máy có một file riêng và mỗi báo cáo được tổng hợp theo một cách khác nhau, doanh nghiệp sẽ gặp nhiều hạn chế.', EN: 'Fragmented data is one of the biggest barriers to digital transformation. When every department uses a separate system, every factory has its own file, and every report is aggregated differently, the business faces many limitations.' },
      items: [
        { title: { VI: 'Mất khả năng nhìn thấy toàn cảnh', EN: 'Loss of holistic visibility' }, desc: { VI: 'Ban lãnh đạo khó biết vấn đề nằm ở đâu, chi phí phát sinh từ đâu hoặc điểm nghẽn nào đang ảnh hưởng đến hiệu suất tổng thể.', EN: 'Leadership struggles to know where problems lie, where costs arise, or which bottlenecks are affecting overall performance.' } },
        { title: { VI: 'Ra quyết định chậm hơn', EN: 'Slower decision making' }, desc: { VI: 'Khi dữ liệu cần nhiều thời gian để tổng hợp, doanh nghiệp có thể bỏ lỡ thời điểm xử lý vấn đề. Những quyết định quan trọng vẫn phải dựa trên báo cáo đã trễ so với thực tế.', EN: 'When data takes a long time to aggregate, businesses can miss the window to address issues. Critical decisions still rely on reports that are delayed compared to reality.' } },
        { title: { VI: 'Khó đo lường hiệu quả cải thiện', EN: 'Hard to measure improvement efficiency' }, desc: { VI: 'Nếu không có dữ liệu nền đủ rõ, doanh nghiệp khó đánh giá một thay đổi trong vận hành có thật sự tạo ra hiệu quả hay không.', EN: 'Without clear baseline data, it is difficult for a business to assess whether an operational change actually produced results.' } },
        { title: { VI: 'Khó chuẩn bị dữ liệu cho ESG và audit', EN: 'Difficult to prepare data for ESG and audits' }, desc: { VI: 'ESG, carbon và audit đòi hỏi dữ liệu có cấu trúc, nhất quán và có thể truy xuất. Khi dữ liệu nằm rải rác trong nhiều file hoặc nhiều hệ thống, quá trình chuẩn bị báo cáo sẽ mất nhiều thời gian hơn.', EN: 'ESG, carbon, and audits require structured, consistent, and traceable data. When data is scattered across multiple files or systems, report preparation takes significantly more time.' } }
      ],
      quote: { VI: '"Không đo lường được thì không thể quản lý. Không quản lý được thì không thể cải thiện."', EN: '"If you can\'t measure it, you can\'t manage it. If you can\'t manage it, you can\'t improve it."' }
    },

    section4: {
      title: { VI: 'Dữ liệu realtime thay đổi cách doanh nghiệp vận hành như thế nào?', EN: 'How does real-time data change the way businesses operate?' },
      p1: { VI: 'Dữ liệu realtime giúp doanh nghiệp chuyển từ trạng thái phản ứng chậm sang trạng thái quan sát và xử lý chủ động hơn.', EN: 'Real-time data helps businesses shift from a slow reactive state to a more proactive observing and processing state.' },
      cards: [
        { title: { VI: 'Giám sát 24/7', EN: '24/7 Monitoring' }, desc: { VI: 'Theo dõi liên tục, phát hiện sớm bất thường.', EN: 'Continuous tracking, early anomaly detection.' }, icon: 'speed' },
        { title: { VI: 'Cảnh báo thông minh', EN: 'Smart Alerts' }, desc: { VI: 'Tự động cảnh báo giúp giảm rủi ro.', EN: 'Automated alerts help reduce risks.' }, icon: 'notifications_active' },
        { title: { VI: 'Tối ưu tự động', EN: 'Auto Optimization' }, desc: { VI: 'Gợi ý điều chỉnh để giảm tiêu thụ.', EN: 'Suggested adjustments to reduce consumption.' }, icon: 'settings_suggest' },
        { title: { VI: 'Ra quyết định nhanh', EN: 'Fast Decisions' }, desc: { VI: 'Dựa trên dữ liệu thực, chính xác, kịp thời.', EN: 'Based on real, accurate, timely data.' }, icon: 'bolt' }
      ],
      p2: { VI: 'Trong nhà máy, dữ liệu realtime giúp đội vận hành theo dõi trạng thái thiết bị, dây chuyền, năng lượng và cảnh báo bất thường. Trong kho vận, dữ liệu realtime giúp theo dõi luồng hàng, tồn kho, tài sản và điểm nghẽn. Ở cấp quản trị, dữ liệu realtime giúp ban lãnh đạo nhìn thấy hiệu suất, chi phí và dòng chảy vận hành rõ hơn.', EN: 'In factories, real-time data helps operations teams track equipment status, production lines, energy, and abnormal alerts. In logistics, real-time data tracks cargo flows, inventory, assets, and bottlenecks. At the management level, real-time data gives leadership clearer visibility into performance, costs, and operational flow.' },
      p3: { VI: 'Điểm quan trọng không nằm ở việc có nhiều dữ liệu hơn. Giá trị nằm ở việc dữ liệu được kết nối, chuẩn hóa và chuyển hóa thành insight có thể hành động. Một dashboard tốt không chỉ hiển thị số liệu. Dashboard cần giúp người dùng trả lời các câu hỏi như:', EN: 'The key point is not having more data. The value lies in data being connected, standardized, and transformed into actionable insights. A good dashboard doesn\'t just show numbers. It should help users answer questions like:' },
      bullets: [
        { VI: 'Điểm nghẽn vận hành đang nằm ở đâu?', EN: 'Where are the operational bottlenecks?' },
        { VI: 'Khu vực nào đang tiêu thụ năng lượng cao bất thường?', EN: 'Which areas are consuming unusually high energy?' },
        { VI: 'Thiết bị nào cần được ưu tiên kiểm tra?', EN: 'Which equipment needs priority inspection?' },
        { VI: 'Dữ liệu nào đang ảnh hưởng đến chi phí hoặc hiệu suất?', EN: 'What data is affecting costs or performance?' },
        { VI: 'Nguồn phát thải nào cần được theo dõi kỹ hơn?', EN: 'Which emission sources need closer monitoring?' }
      ]
    },

    section5: {
      title: { VI: 'Mối liên hệ giữa dữ liệu vận hành, ESG và carbon', EN: 'The relationship between operational data, ESG, and carbon' },
      p1: { VI: 'Nhiều doanh nghiệp tiếp cận ESG từ góc độ báo cáo. Tuy nhiên, báo cáo chỉ là phần cuối của quá trình. Phần quan trọng hơn nằm ở khả năng thu thập, chuẩn hóa, theo dõi và cải thiện dữ liệu theo thời gian.', EN: 'Many businesses approach ESG from a reporting perspective. However, reporting is only the end of the process. The more important part lies in the ability to collect, standardize, track, and improve data over time.' },
      p2: { VI: 'Dữ liệu carbon thường đến từ nhiều nguồn như:', EN: 'Carbon data typically comes from multiple sources such as:' },
      tags: [
        { VI: 'Hóa đơn điện, nước', EN: 'Electricity & Water bills' },
        { VI: 'Dữ liệu sản xuất', EN: 'Production data' },
        { VI: 'Dữ liệu vận tải', EN: 'Transport data' },
        { VI: 'Nguyên vật liệu', EN: 'Raw materials' },
        { VI: 'Dữ liệu tài chính', EN: 'Financial data' }
      ],
      p3: { VI: 'Nếu những dữ liệu này không được kết nối với hoạt động vận hành, doanh nghiệp chỉ có thể tổng hợp phát thải ở mức báo cáo. Ngược lại, khi dữ liệu carbon được liên kết với dữ liệu năng lượng, sản xuất, chi phí và hiệu suất, doanh nghiệp có thể hiểu rõ hơn yếu tố nào đang ảnh hưởng đến phát thải và nên ưu tiên cải thiện ở đâu.', EN: 'If this data is not connected to operations, businesses can only aggregate emissions at a reporting level. Conversely, when carbon data is linked to energy, production, cost, and performance data, businesses can better understand what factors are driving emissions and where to prioritize improvements.' },
      p4: { VI: 'Đây là lý do dữ liệu vận hành trở thành nền tảng của chuyển đổi số xanh. Doanh nghiệp không thể tối ưu điều mình chưa đo lường được, và cũng khó cải thiện điều mình chưa nhìn thấy rõ.', EN: 'This is why operational data becomes the foundation of green digital transformation. Businesses cannot optimize what they cannot measure, and it is difficult to improve what they cannot clearly see.' }
    },

    section6: {
      title: { VI: 'Doanh nghiệp nên bắt đầu từ đâu?', EN: 'Where should a business start?' },
      p1: { VI: 'Không phải doanh nghiệp nào cũng cần bắt đầu bằng một dự án lớn. Cách tiếp cận thực tế hơn là chọn một bài toán có tác động rõ ràng, sau đó mở rộng dần theo mức độ sẵn sàng dữ liệu.', EN: 'Not every business needs to start with a massive project. A more practical approach is to choose a problem with clear impact, then gradually expand based on data readiness.' },
      steps: [
        { title: { VI: 'Đánh giá hiện trạng', EN: 'Assess Status' }, desc: { VI: 'Rà soát dữ liệu đang nằm ở đâu, ai quản lý.', EN: 'Review where data lives and who manages it.' } },
        { title: { VI: 'Chọn bài toán', EN: 'Select Problem' }, desc: { VI: 'Chọn mục tiêu ưu tiên như giám sát năng lượng.', EN: 'Choose a priority target like energy monitoring.' } },
        { title: { VI: 'Kết nối dữ liệu', EN: 'Connect Data' }, desc: { VI: 'Kết nối các nguồn có tác động lớn nhất.', EN: 'Connect sources with the highest impact.' } },
        { title: { VI: 'Thiết lập Dashboard', EN: 'Setup Dashboard' }, desc: { VI: 'Định nghĩa chỉ số theo dõi phù hợp.', EN: 'Define appropriate tracking metrics.' } },
        { title: { VI: 'Mở rộng', EN: 'Expand' }, desc: { VI: 'Chuẩn hóa quy trình và mở rộng chi nhánh.', EN: 'Standardize processes and expand to branches.' } }
      ]
    },

    section7: {
      title: { VI: 'Vai trò của hệ sinh thái Udata', EN: 'The role of the Udata ecosystem' },
      p1: { VI: 'Udata được xây dựng để hỗ trợ doanh nghiệp kết nối dữ liệu vận hành, phân tích dữ liệu realtime và xây dựng nền tảng cho chuyển đổi số xanh. Trong hệ sinh thái Udata, mỗi sản phẩm đóng một vai trò riêng:', EN: 'Udata is built to help businesses connect operational data, analyze data in real-time, and build a foundation for green digital transformation. In the Udata ecosystem, each product plays a distinct role:' },
      products: [
        { title: 'Uboard', desc: { VI: 'Hỗ trợ giám sát và tối ưu vận hành nhà máy bằng AIoT, kết nối dữ liệu từ thiết bị, dây chuyền, cảm biến và năng lượng.', EN: 'Supports monitoring and optimizing factory operations via AIoT, connecting data from equipment, lines, sensors, and energy.' }, icon: 'dashboard' },
        { title: 'Ugate', desc: { VI: 'Đóng vai trò lớp AI trung tâm, hợp nhất dữ liệu từ ERP, sản xuất, kho vận, tài chính, năng lượng và hệ thống nội bộ.', EN: 'Acts as the central AI layer, consolidating data from ERP, production, logistics, finance, energy, and internal systems.' }, icon: 'router' },
        { title: 'Uzero', desc: { VI: 'Hỗ trợ quản trị carbon và dữ liệu phát thải, giúp doanh nghiệp thu thập, chuẩn hóa, tính toán và theo dõi dữ liệu bền vững.', EN: 'Supports carbon management and emission data, helping businesses collect, standardize, calculate, and track sustainability data.' }, icon: 'co2' },
        { title: 'MiniUgate', desc: { VI: 'Hỗ trợ khai thác tri thức nội bộ và tự động hóa phản hồi, giúp doanh nghiệp sử dụng dữ liệu và tài liệu hiệu quả hơn.', EN: 'Supports mining internal knowledge and automating responses, helping businesses use data and documents more effectively.' }, icon: 'memory' }
      ],
      p2: { VI: 'Thay vì xem từng bài toán dữ liệu là một dự án riêng lẻ, doanh nghiệp có thể xây dựng một nền tảng thống nhất để từng bước kết nối, đo lường, phân tích và cải thiện vận hành.', EN: 'Instead of viewing every data problem as a standalone project, businesses can build a unified platform to step-by-step connect, measure, analyze, and improve operations.' }
    },

    section8: {
      title: { VI: 'Kết luận', EN: 'Conclusion' },
      p1: { VI: 'Chuyển đổi số xanh không bắt đầu từ một báo cáo hoàn chỉnh hay một mục tiêu dài hạn trên giấy. Nó bắt đầu từ khả năng nhìn thấy dữ liệu vận hành một cách rõ ràng, liên tục và có thể hành động.', EN: 'Green digital transformation does not start with a complete report or a long-term goal on paper. It starts with the ability to see operational data clearly, continuously, and actionably.' },
      p2: { VI: 'Khi dữ liệu sản xuất, năng lượng, kho vận, tài chính và phát thải được kết nối, doanh nghiệp có thể hiểu rõ hơn cách mình đang vận hành. Từ đó, doanh nghiệp có cơ sở để tối ưu hiệu suất, kiểm soát tài nguyên, chuẩn bị tốt hơn cho ESG và xây dựng lộ trình phát triển bền vững.', EN: 'When production, energy, logistics, finance, and emissions data are connected, a business can better understand how it operates. From there, it has a basis to optimize performance, control resources, prepare better for ESG, and build a sustainable development roadmap.' },
      p3: { VI: 'Dữ liệu vận hành không chỉ là tài sản công nghệ. Đó là nền tảng để doanh nghiệp đưa ra quyết định chính xác hơn, vận hành hiệu quả hơn và tăng trưởng bền vững hơn trong dài hạn.', EN: 'Operational data is not just a technological asset. It is the foundation for businesses to make more accurate decisions, operate more efficiently, and achieve long-term sustainable growth.' }
    },

    inlineCta: {
      title: { VI: 'Doanh nghiệp của bạn đã sẵn sàng kết nối dữ liệu vận hành?', EN: 'Is your business ready to connect operational data?' },
      desc: { VI: 'Udata có thể cùng doanh nghiệp đánh giá hiện trạng dữ liệu, xác định bài toán ưu tiên và xây dựng lộ trình AIoT phù hợp với mục tiêu vận hành, ROI và phát triển bền vững.', EN: 'Udata can work with your business to assess data status, identify priority problems, and build an AIoT roadmap tailored to operational goals, ROI, and sustainability.' },
      btnPrimary: { VI: 'Đặt lịch tư vấn', EN: 'Book a Consultation' },
      btnSecondary: { VI: 'Khám phá giải pháp', EN: 'Explore Solutions' }
    }
  },

  bottom: {
    productsTitle: { VI: 'Sản phẩm liên quan', EN: 'Related Products' },
    relatedTitle: { VI: 'Bài viết liên quan', EN: 'Related Articles' },
    readBtn: { VI: 'Đọc bài', EN: 'Read' },
    learnMoreBtn: { VI: 'Tìm hiểu thêm', EN: 'Learn more' }
  },

  products: {
    title: { VI: 'Sản phẩm liên quan', EN: 'Related Products' },
    btnLearnMore: { VI: 'Tìm hiểu thêm', EN: 'Learn more' },
    ugateDesc: { VI: 'Thiết bị AIoT công nghiệp kết nối đa giao thức, thu thập dữ liệu ổn định.', EN: 'Industrial AIoT device connecting multiple protocols, stable data collection.' },
    uboardDesc: { VI: 'Nền tảng giám sát & phân tích dữ liệu vận hành theo thời gian thực.', EN: 'Real-time operational data monitoring & analytics platform.' },
    uzeroDesc: { VI: 'Giải pháp đo lường, báo cáo phát thải và quản trị carbon toàn diện.', EN: 'Comprehensive solution for measuring, reporting emissions and carbon management.' }
  }
};
