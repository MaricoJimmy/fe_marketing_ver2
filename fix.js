const fs = require('fs');

let content = fs.readFileSync('c:/Users/PC/Downloads/fe mkt2/udata_next/components/UseCaseGrid.jsx', 'utf-8');

const newData = `export const USE_CASES_DATA = [
    {
      category: { vi: 'Sản xuất', en: 'Manufacturing' },
      icon: 'factory',
      viTitle: 'Giám sát vận hành nhà máy theo thời gian thực',
      enTitle: 'Real-time factory operations monitoring',
      viDesc: 'Kết nối thiết bị và hệ thống sản xuất để giám sát OEE, cảnh báo sớm và theo dõi hiệu suất theo thời gian thực.',
      enDesc: 'Connect equipment and production systems to monitor OEE, provide early warnings and track real-time performance.',
      tags: ['Uboard', 'Ugate'],
      viDetails: {
        ctaText: 'Trao đổi về bài toán nhà máy',
        sections: [
          { title: 'Bối cảnh', type: 'text', content: 'Phù hợp với nhà máy sản xuất có nhiều dây chuyền, thiết bị, cảm biến và điểm tiêu thụ năng lượng cần được theo dõi liên tục. Khi dữ liệu vận hành nằm ở nhiều hệ thống khác nhau, đội ngũ quản lý khó có một góc nhìn thống nhất về tình trạng nhà máy.' },
          { title: 'Bài toán', type: 'text', content: 'Nhà máy cần theo dõi trạng thái thiết bị, hiệu suất dây chuyền, năng lượng và sự cố theo thời gian thực. Nếu dữ liệu cập nhật chậm hoặc phải tổng hợp thủ công, doanh nghiệp dễ bỏ lỡ các tín hiệu bất thường trong vận hành.' },
          { title: 'Dữ liệu cần kết nối', type: 'list', items: ['Dữ liệu thiết bị và cảm biến', 'Trạng thái dây chuyền sản xuất', 'Dữ liệu năng lượng', 'Dữ liệu bảo trì và sự cố', 'Sản lượng và hiệu suất vận hành', 'Dữ liệu từ dashboard hoặc hệ thống nội bộ hiện có'] },
          { title: 'Cách Udata hỗ trợ', type: 'list', items: ['Uboard kết nối dữ liệu hiện trường và hiển thị trên dashboard realtime', 'Uboard hỗ trợ theo dõi trạng thái thiết bị, dây chuyền và các điểm vận hành quan trọng', 'Ugate hợp nhất dữ liệu nhà máy với các hệ thống nội bộ để tạo góc nhìn tổng thể', 'Uzero có thể bổ sung dữ liệu năng lượng và phát thải nếu doanh nghiệp cần quản trị bền vững'] },
          { title: 'Chỉ số nên theo dõi', type: 'list', items: ['Trạng thái thiết bị', 'Thời gian dừng máy', 'Hiệu suất dây chuyền', 'Mức tiêu thụ năng lượng', 'Tần suất cảnh báo bất thường', 'Thời gian xử lý sự cố'] },
          { title: 'Giá trị kỳ vọng', type: 'text', content: 'Doanh nghiệp có thể quan sát vận hành rõ hơn, phát hiện điểm nghẽn sớm hơn và đưa ra quyết định dựa trên dữ liệu thay vì báo cáo rời rạc.' },
          { title: 'Lộ trình triển khai gợi ý', type: 'list', items: ['Khảo sát dây chuyền, thiết bị và nguồn dữ liệu hiện có', 'Xác định các điểm dữ liệu cần theo dõi realtime', 'Kết nối dữ liệu vào dashboard vận hành', 'Thiết lập cảnh báo và chỉ số theo dõi', 'Đánh giá hiệu quả và mở rộng sang các khu vực vận hành khác'] }
        ]
      },
      enDetails: {
        ctaText: 'Discuss factory solutions',
        sections: [
          { title: 'Context', type: 'text', content: 'Suitable for manufacturing plants with multiple production lines, equipment, sensors, and energy consumption points that need continuous monitoring. When operational data is scattered across different systems, the management team struggles to have a unified view of the factory status.' },
          { title: 'The Challenge', type: 'text', content: 'Factories need to monitor equipment status, production line performance, energy, and incidents in real-time. If data updates are delayed or require manual aggregation, businesses can easily miss abnormal operational signals.' },
          { title: 'Data to Connect', type: 'list', items: ['Equipment and sensor data', 'Production line status', 'Energy data', 'Maintenance and incident data', 'Production output and operational performance', 'Data from existing dashboards or internal systems'] },
          { title: 'How Udata Helps', type: 'list', items: ['Uboard connects field data and displays it on a real-time dashboard', 'Uboard supports tracking the status of equipment, production lines, and critical operational points', 'Ugate unifies factory data with internal systems to create a holistic view', 'Uzero can supplement energy and emissions data if the business requires sustainability management'] },
          { title: 'Metrics to Track', type: 'list', items: ['Equipment status', 'Downtime duration', 'Production line efficiency (OEE)', 'Energy consumption levels', 'Frequency of abnormal alerts', 'Incident resolution time'] },
          { title: 'Expected Value', type: 'text', content: 'Businesses can observe operations more clearly, detect bottlenecks earlier, and make data-driven decisions instead of relying on fragmented reports.' },
          { title: 'Suggested Roadmap', type: 'list', items: ['Survey production lines, equipment, and existing data sources', 'Identify data points that require real-time monitoring', 'Connect data to the operational dashboard', 'Set up alerts and tracking metrics', 'Evaluate effectiveness and expand to other operational areas'] }
        ]
      }
    },
    {
      category: { vi: 'Sản xuất', en: 'Manufacturing' },
      icon: 'troubleshoot',
      viTitle: 'Phát hiện bất thường và tối ưu bảo trì thiết bị',
      enTitle: 'Anomaly detection and equipment maintenance optimization',
      viDesc: 'Ứng dụng AI để phát hiện bất thường, dự báo lỗi thiết bị và tối ưu kế hoạch bảo trì, giảm thời gian dừng máy.',
      enDesc: 'Apply AI to detect anomalies, predict equipment failures and optimize maintenance plans, reducing downtime.',
      tags: ['Uboard', 'Uzero'],
      viDetails: {
        ctaText: 'Trao đổi về bài toán bảo trì thiết bị',
        sections: [
          { title: 'Bối cảnh', type: 'text', content: 'Phù hợp với nhà máy có nhiều thiết bị quan trọng, cần theo dõi tình trạng vận hành và lịch sử bảo trì một cách có hệ thống. Đây là tình huống thường gặp ở các doanh nghiệp muốn giảm phụ thuộc vào ghi nhận thủ công và kinh nghiệm cá nhân.' },
          { title: 'Bài toán', type: 'text', content: 'Dữ liệu lỗi, cảnh báo, lịch sử bảo trì và tài liệu kỹ thuật thường phân tán ở nhiều nơi. Khi thiếu dữ liệu realtime và dữ liệu lịch sử, đội ngũ kỹ thuật khó nhận diện thiết bị có rủi ro cao và khó ưu tiên xử lý sự cố.' },
          { title: 'Dữ liệu cần kết nối', type: 'list', items: ['Trạng thái thiết bị', 'Lịch sử lỗi và cảnh báo', 'Lịch sử bảo trì', 'Thời gian vận hành và thời gian dừng máy', 'Mã thiết bị, mã serial và vị trí thiết bị', 'Tài liệu kỹ thuật và quy trình xử lý sự cố'] },
          { title: 'Cách Udata hỗ trợ', type: 'list', items: ['Uboard theo dõi trạng thái thiết bị và cảnh báo bất thường theo thời gian thực', 'Ugate tổ chức dữ liệu thiết bị, lịch sử sự cố và thông tin vận hành vào một lớp dữ liệu thống nhất', 'MiniUgate hỗ trợ đội ngũ kỹ thuật truy vấn quy trình, tài liệu hoặc hướng dẫn xử lý sự cố bằng ngôn ngữ tự nhiên', 'Dữ liệu từ các lần xử lý sự cố có thể được lưu lại để phục vụ phân tích và cải tiến bảo trì'] },
          { title: 'Chỉ số nên theo dõi', type: 'list', items: ['Thời gian phát hiện sự cố', 'Thời gian xử lý sự cố', 'Tần suất lỗi lặp lại', 'Lịch sử bảo trì theo thiết bị', 'Mức độ sẵn sàng của thiết bị', 'Tỷ lệ cảnh báo được xử lý đúng hạn'] },
          { title: 'Giá trị kỳ vọng', type: 'text', content: 'Doanh nghiệp có thể nâng cao khả năng truy xuất lịch sử thiết bị, tổ chức quy trình bảo trì theo dữ liệu và hỗ trợ đội ngũ kỹ thuật xử lý sự cố nhất quán hơn.' },
          { title: 'Lộ trình triển khai gợi ý', type: 'list', items: ['Rà soát danh mục thiết bị và dữ liệu bảo trì hiện có', 'Xác định nhóm thiết bị ưu tiên theo mức độ ảnh hưởng vận hành', 'Kết nối dữ liệu cảnh báo, sự cố và lịch sử bảo trì', 'Thiết lập dashboard và quy trình truy vấn tri thức kỹ thuật', 'Đánh giá hiệu quả xử lý sự cố và mở rộng sang nhóm thiết bị khác'] }
        ]
      },
      enDetails: {
        ctaText: 'Discuss equipment maintenance',
        sections: [
          { title: 'Context', type: 'text', content: 'Suitable for factories with many critical pieces of equipment that need systematic tracking of operational status and maintenance history. This is a common scenario for businesses wanting to reduce reliance on manual recording and personal experience.' },
          { title: 'The Challenge', type: 'text', content: 'Data on faults, alerts, maintenance history, and technical documentation are often scattered. Lacking real-time and historical data makes it difficult for technical teams to identify high-risk equipment and prioritize incident resolution.' },
          { title: 'Data to Connect', type: 'list', items: ['Equipment status', 'History of faults and alerts', 'Maintenance history', 'Operating time and downtime', 'Equipment codes, serial numbers, and locations', 'Technical documents and troubleshooting procedures'] },
          { title: 'How Udata Helps', type: 'list', items: ['Uboard tracks equipment status and real-time anomaly alerts', 'Ugate organizes equipment data, incident history, and operational information into a unified data layer', 'MiniUgate assists technical teams in querying procedures, documents, or troubleshooting guides using natural language', 'Data from incident resolutions can be saved for analysis and maintenance improvement'] },
          { title: 'Metrics to Track', type: 'list', items: ['Incident detection time', 'Incident resolution time', 'Frequency of recurring faults', 'Maintenance history by equipment', 'Equipment readiness level', 'Percentage of alerts resolved on time'] },
          { title: 'Expected Value', type: 'text', content: 'Businesses can enhance the ability to retrieve equipment history, organize maintenance processes based on data, and support technical teams in resolving incidents more consistently.' },
          { title: 'Suggested Roadmap', type: 'list', items: ['Review equipment portfolio and existing maintenance data', 'Identify priority equipment groups based on operational impact', 'Connect alert, incident, and maintenance history data', 'Set up dashboards and technical knowledge querying processes', 'Evaluate incident resolution effectiveness and expand to other equipment groups'] }
        ]
      }
    },
    {
      category: { vi: 'Logistics', en: 'Logistics' },
      icon: 'local_shipping',
      viTitle: 'Quản lý kho vận và luồng hàng thông minh',
      enTitle: 'Smart warehouse and logistics management',
      viDesc: 'Theo dõi tồn kho, vị trí và luồng hàng theo thời gian thực, tối ưu nhập xuất, giảm tồn kho và chi phí vận hành.',
      enDesc: 'Track inventory, location, and goods flow in real-time, optimize import/export, and reduce operating costs.',
      tags: ['Ugate', 'MiniUgate'],
      viDetails: {
        ctaText: 'Trao đổi về bài toán kho vận',
        sections: [
          { title: 'Bối cảnh', type: 'text', content: 'Phù hợp với doanh nghiệp có hoạt động kho vận, trung tâm logistics hoặc chuỗi cung ứng cần theo dõi tồn kho, nhập xuất, luồng hàng và hiệu suất tài sản. Tình huống này đặc biệt quan trọng khi dữ liệu kho vận đang nằm ở nhiều hệ thống riêng lẻ.' },
          { title: 'Bài toán', type: 'text', content: 'Dữ liệu tồn kho, nhập xuất, vận chuyển, tài sản và chi phí thường bị phân tán. Khi thông tin cập nhật chậm, doanh nghiệp khó đánh giá mức độ sẵn sàng của hàng hóa, khó phát hiện điểm nghẽn và khó tối ưu chi phí vận hành.' },
          { title: 'Dữ liệu cần kết nối', type: 'list', items: ['Dữ liệu tồn kho', 'Dữ liệu nhập xuất', 'Trạng thái luồng hàng', 'Dữ liệu tài sản và thiết bị kho', 'Dữ liệu vận chuyển', 'Dữ liệu chi phí và tài chính liên quan', 'Dữ liệu năng lượng tại kho hoặc trung tâm logistics'] },
          { title: 'Cách Udata hỗ trợ', type: 'list', items: ['Ugate kết nối dữ liệu từ kho, tồn kho, vận hành và tài chính để tạo bức tranh thống nhất', 'Uboard hỗ trợ theo dõi các điểm vận hành quan trọng trong khu vực kho hoặc trung tâm logistics', 'Uzero hỗ trợ theo dõi dữ liệu năng lượng và phát thải nếu doanh nghiệp cần quản trị xanh cho hoạt động kho vận', 'Dashboard giúp đội ngũ vận hành theo dõi luồng hàng và nhận diện điểm nghẽn nhanh hơn'] },
          { title: 'Chỉ số nên theo dõi', type: 'list', items: ['Tình trạng tồn kho', 'Luồng nhập xuất', 'Thời gian xử lý hàng', 'Hiệu suất tài sản kho', 'Điểm nghẽn trong luồng vận hành', 'Chi phí vận hành liên quan', 'Năng lượng tiêu thụ tại kho'] },
          { title: 'Giá trị kỳ vọng', type: 'text', content: 'Doanh nghiệp cải thiện khả năng quan sát luồng hàng, giảm phụ thuộc vào báo cáo thủ công và có cơ sở dữ liệu rõ hơn để tối ưu vận hành kho vận.' },
          { title: 'Lộ trình triển khai gợi ý', type: 'list', items: ['Khảo sát luồng dữ liệu kho, tồn kho và vận chuyển', 'Xác định các điểm nghẽn thường gặp trong vận hành', 'Kết nối dữ liệu từ hệ thống kho, tài sản, vận hành và tài chính', 'Thiết lập dashboard theo dõi luồng hàng và tồn kho', 'Đánh giá hiệu quả và mở rộng sang dữ liệu năng lượng hoặc phát thải nếu cần'] }
        ]
      },
      enDetails: {
        ctaText: 'Discuss logistics solutions',
        sections: [
          { title: 'Context', type: 'text', content: 'Suitable for businesses with warehousing operations, logistics centers, or supply chains that need to track inventory, import/export, goods flow, and asset performance. This is especially crucial when logistics data resides in isolated systems.' },
          { title: 'The Challenge', type: 'text', content: 'Data on inventory, import/export, transportation, assets, and costs are often fragmented. With delayed information updates, businesses struggle to assess goods readiness, detect bottlenecks, and optimize operational costs.' },
          { title: 'Data to Connect', type: 'list', items: ['Inventory data', 'Import and export data', 'Goods flow status', 'Warehouse asset and equipment data', 'Transportation data', 'Related cost and financial data', 'Energy data at warehouses or logistics centers'] },
          { title: 'How Udata Helps', type: 'list', items: ['Ugate connects data from warehouses, inventory, operations, and finance to create a unified picture', 'Uboard supports tracking critical operational points in warehouse areas or logistics centers', 'Uzero helps track energy and emissions data if the business needs green management for logistics', 'Dashboards help operational teams monitor goods flow and identify bottlenecks faster'] },
          { title: 'Metrics to Track', type: 'list', items: ['Inventory status', 'Import/export flow', 'Goods processing time', 'Warehouse asset performance', 'Bottlenecks in operational flow', 'Related operational costs', 'Energy consumption at the warehouse'] },
          { title: 'Expected Value', type: 'text', content: 'Businesses improve the ability to observe goods flow, reduce reliance on manual reports, and have a clearer data foundation to optimize warehouse operations.' },
          { title: 'Suggested Roadmap', type: 'list', items: ['Survey warehouse, inventory, and transportation data flows', 'Identify common bottlenecks in operations', 'Connect data from warehouse, asset, operational, and financial systems', 'Set up dashboards to track goods flow and inventory', 'Evaluate effectiveness and expand to energy or emissions data if needed'] }
        ]
      }
    },
    {
      category: { vi: 'Năng lượng', en: 'Energy' },
      icon: 'bolt',
      viTitle: 'Theo dõi năng lượng và hiệu suất sử dụng tài nguyên',
      enTitle: 'Energy tracking and resource utilization efficiency',
      viDesc: 'Giám sát tiêu thụ năng lượng, phát hiện lãng phí và tối ưu hiệu suất sử dụng tài nguyên.',
      enDesc: 'Monitor energy consumption, detect waste, and optimize resource utilization efficiency.',
      tags: ['Uboard', 'Ugate'],
      viDetails: {
        ctaText: 'Trao đổi về bài toán năng lượng',
        sections: [
          { title: 'Bối cảnh', type: 'text', content: 'Phù hợp với nhà máy, khu công nghiệp, tòa nhà hoặc cơ sở vận hành có nhiều điểm tiêu thụ điện, nước, khí nén, nhiệt hoặc nhiên liệu. Đây là tình huống quan trọng với doanh nghiệp muốn kiểm soát tài nguyên và xây dựng nền tảng dữ liệu cho phát triển bền vững.' },
          { title: 'Bài toán', type: 'text', content: 'Dữ liệu năng lượng thường đến từ nhiều đồng hồ, thiết bị hoặc báo cáo riêng lẻ. Khi chưa có hệ thống đo lường thống nhất, doanh nghiệp khó xác định khu vực tiêu thụ cao, khó phát hiện bất thường và khó đánh giá hiệu quả sử dụng tài nguyên.' },
          { title: 'Dữ liệu cần kết nối', type: 'list', items: ['Dữ liệu điện', 'Dữ liệu nước', 'Dữ liệu khí nén', 'Dữ liệu nhiệt hoặc nhiên liệu', 'Dữ liệu thiết bị hạ tầng', 'Dữ liệu sản lượng hoặc mức độ hoạt động', 'Dữ liệu chi phí năng lượng'] },
          { title: 'Cách Udata hỗ trợ', type: 'list', items: ['Uboard giám sát dữ liệu thiết bị, năng lượng và trạng thái vận hành theo thời gian thực', 'Ugate kết nối dữ liệu hạ tầng với các hệ thống quản trị khác để tạo góc nhìn vận hành đầy đủ hơn', 'Uzero liên kết dữ liệu năng lượng với dữ liệu phát thải và carbon', 'Dashboard giúp doanh nghiệp theo dõi khu vực tiêu thụ cao, bất thường hoặc chưa hiệu quả'] },
          { title: 'Chỉ số nên theo dõi', type: 'list', items: ['Mức tiêu thụ năng lượng', 'Tiêu thụ năng lượng theo khu vực', 'Tiêu thụ năng lượng theo sản lượng', 'Cảnh báo tiêu thụ bất thường', 'Chi phí năng lượng', 'Dữ liệu phát thải liên quan'] },
          { title: 'Giá trị kỳ vọng', type: 'text', content: 'Doanh nghiệp có thể theo dõi tiêu thụ tài nguyên rõ hơn, nhận diện khu vực vận hành chưa hiệu quả và xây dựng nền tảng dữ liệu cho các mục tiêu tiết kiệm năng lượng.' },
          { title: 'Lộ trình triển khai gợi ý', type: 'list', items: ['Khảo sát các điểm đo năng lượng và tài nguyên hiện có', 'Xác định nhóm dữ liệu ưu tiên theo chi phí hoặc mức độ ảnh hưởng vận hành', 'Kết nối dữ liệu vào hệ thống theo dõi tập trung', 'Thiết lập dashboard, cảnh báo và chỉ số tiêu thụ', 'Liên kết dữ liệu năng lượng với dữ liệu phát thải khi doanh nghiệp cần quản trị ESG'] }
        ]
      },
      enDetails: {
        ctaText: 'Discuss energy solutions',
        sections: [
          { title: 'Context', type: 'text', content: 'Suitable for factories, industrial parks, buildings, or operational facilities with multiple consumption points for electricity, water, compressed air, heat, or fuel. This is a vital scenario for businesses wanting to control resources and build a data foundation for sustainability.' },
          { title: 'The Challenge', type: 'text', content: 'Energy data often comes from various individual meters, devices, or reports. Without a unified measurement system, businesses struggle to pinpoint high-consumption areas, detect anomalies, and assess resource utilization efficiency.' },
          { title: 'Data to Connect', type: 'list', items: ['Electricity data', 'Water data', 'Compressed air data', 'Heat or fuel data', 'Infrastructure equipment data', 'Production output or activity level data', 'Energy cost data'] },
          { title: 'How Udata Helps', type: 'list', items: ['Uboard monitors equipment data, energy, and operational status in real-time', 'Ugate connects infrastructure data with other management systems for a more complete operational view', 'Uzero links energy data with emissions and carbon data', 'Dashboards help businesses track areas of high, abnormal, or inefficient consumption'] },
          { title: 'Metrics to Track', type: 'list', items: ['Total energy consumption', 'Energy consumption by area', 'Energy consumption relative to output', 'Abnormal consumption alerts', 'Energy costs', 'Related emissions data'] },
          { title: 'Expected Value', type: 'text', content: 'Businesses can monitor resource consumption more clearly, identify inefficient operational areas, and build a data foundation for energy-saving goals.' },
          { title: 'Suggested Roadmap', type: 'list', items: ['Survey existing energy and resource measurement points', 'Identify priority data groups based on cost or operational impact', 'Connect data into a centralized monitoring system', 'Set up dashboards, alerts, and consumption metrics', 'Link energy data with emissions data when ESG management is needed'] }
        ]
      }
    },
    {
      category: { vi: 'ESG', en: 'ESG' },
      icon: 'eco',
      viTitle: 'Quản trị carbon và dữ liệu ESG',
      enTitle: 'Carbon management and ESG data',
      viDesc: 'Thu thập, chuẩn hóa và theo dõi dữ liệu ESG, phát thải carbon theo thời gian thực, hỗ trợ báo cáo và đánh giá bền vững.',
      enDesc: 'Collect, standardize, and track ESG data and carbon emissions in real-time, supporting sustainability reporting.',
      tags: ['Uboard', 'Uzero'],
      viDetails: {
        ctaText: 'Trao đổi về bài toán ESG và carbon',
        sections: [
          { title: 'Bối cảnh', type: 'text', content: 'Phù hợp với doanh nghiệp xuất khẩu, nhà máy sản xuất, chuỗi cung ứng hoặc tổ chức đang cần chuẩn hóa dữ liệu phát thải. Tình huống này đặc biệt quan trọng khi doanh nghiệp phải chuẩn bị dữ liệu cho ESG, audit hoặc yêu cầu minh bạch từ khách hàng và đối tác.' },
          { title: 'Bài toán', type: 'text', content: 'Dữ liệu phát thải thường nằm trong hóa đơn năng lượng, báo cáo sản xuất, vận tải, nguyên vật liệu, chi nhánh và file nội bộ. Khi dữ liệu chưa được chuẩn hóa, doanh nghiệp khó tổng hợp, khó kiểm tra và khó xây dựng báo cáo bền vững một cách nhất quán.' },
          { title: 'Dữ liệu cần kết nối', type: 'list', items: ['Dữ liệu năng lượng', 'Dữ liệu nhiên liệu', 'Dữ liệu sản xuất', 'Dữ liệu vận tải', 'Dữ liệu nguyên vật liệu', 'Dữ liệu chi nhánh và nhà máy', 'File nội bộ và biểu mẫu báo cáo', 'Dữ liệu từ hệ thống vận hành liên quan'] },
          { title: 'Cách Udata hỗ trợ', type: 'list', items: ['Uzero hỗ trợ thu thập, phân loại, tính toán và theo dõi dữ liệu phát thải', 'Uzero giúp doanh nghiệp quản trị dữ liệu carbon theo đơn vị, chi nhánh, hoạt động hoặc nguồn phát sinh', 'Ugate kết nối dữ liệu vận hành liên quan để phân tích mối liên hệ giữa hiệu suất, năng lượng, chi phí và phát thải', 'Uboard bổ sung dữ liệu vận hành và năng lượng từ hiện trường nếu doanh nghiệp cần theo dõi realtime'] },
          { title: 'Chỉ số nên theo dõi', type: 'list', items: ['Tổng phát thải theo giai đoạn', 'Phát thải theo chi nhánh hoặc đơn vị', 'Phát thải theo nguồn phát sinh', 'Dữ liệu năng lượng liên quan', 'Mức độ hoàn thiện dữ liệu ESG', 'Tình trạng sẵn sàng cho báo cáo ESG', 'Dữ liệu phục vụ audit và chuỗi cung ứng'] },
          { title: 'Giá trị kỳ vọng', type: 'text', content: 'Doanh nghiệp có nền tảng dữ liệu rõ ràng hơn cho ESG, carbon, báo cáo bền vững và các yêu cầu audit trong chuỗi cung ứng.' },
          { title: 'Lộ trình triển khai gợi ý', type: 'list', items: ['Khảo sát nguồn dữ liệu phát thải và biểu mẫu báo cáo hiện có', 'Xác định phạm vi dữ liệu cần quản trị theo đơn vị, chi nhánh hoặc hoạt động', 'Chuẩn hóa dữ liệu năng lượng, nhiên liệu, sản xuất và vận tải', 'Thiết lập dashboard carbon và báo cáo dữ liệu ESG', 'Đánh giá mức độ hoàn thiện dữ liệu và mở rộng phạm vi theo lộ trình bền vững'] }
        ]
      },
      enDetails: {
        ctaText: 'Discuss ESG and carbon',
        sections: [
          { title: 'Context', type: 'text', content: 'Suitable for export businesses, manufacturing plants, supply chains, or organizations needing to standardize emissions data. This scenario is crucial when preparing data for ESG, audits, or transparency requirements from clients and partners.' },
          { title: 'The Challenge', type: 'text', content: 'Emissions data often resides in energy bills, production reports, transport logs, raw material data, branches, and internal files. Unstandardized data makes it hard to aggregate, verify, and build consistent sustainability reports.' },
          { title: 'Data to Connect', type: 'list', items: ['Energy data', 'Fuel data', 'Production data', 'Transportation data', 'Raw materials data', 'Branch and factory data', 'Internal files and report templates', 'Data from related operational systems'] },
          { title: 'How Udata Helps', type: 'list', items: ['Uzero assists in collecting, categorizing, calculating, and tracking emissions data', 'Uzero helps manage carbon data by unit, branch, activity, or emission source', 'Ugate connects related operational data to analyze the relationship between performance, energy, costs, and emissions', 'Uboard supplements field operations and energy data if real-time tracking is needed'] },
          { title: 'Metrics to Track', type: 'list', items: ['Total emissions by period', 'Emissions by branch or unit', 'Emissions by source', 'Related energy data', 'ESG data completeness level', 'Readiness status for ESG reporting', 'Data for audits and supply chain compliance'] },
          { title: 'Expected Value', type: 'text', content: 'Businesses gain a clearer data foundation for ESG, carbon tracking, sustainability reporting, and audit requirements in the supply chain.' },
          { title: 'Suggested Roadmap', type: 'list', items: ['Survey emissions data sources and existing report templates', 'Define the scope of data to manage by unit, branch, or activity', 'Standardize energy, fuel, production, and transportation data', 'Set up carbon dashboards and ESG data reports', 'Evaluate data completeness and expand scope according to the sustainability roadmap'] }
        ]
      }
    },
    {
      category: { vi: 'Quản trị', en: 'Management' },
      icon: 'manage_accounts',
      viTitle: 'Xây dựng lớp trí tuệ vận hành cho ban lãnh đạo',
      enTitle: 'Building an operational intelligence layer for leadership',
      viDesc: 'Tổng hợp dữ liệu và phân tích đa chiều, cung cấp dashboard điều hành giúp ra quyết định nhanh và chính xác.',
      enDesc: 'Aggregate data and perform multi-dimensional analysis, providing executive dashboards for fast, accurate decisions.',
      tags: ['Uboard', 'Uzero'],
      viDetails: {
        ctaText: 'Trao đổi về bài toán quản trị vận hành',
        sections: [
          { title: 'Bối cảnh', type: 'text', content: 'Phù hợp với doanh nghiệp enterprise, tập đoàn, chuỗi nhà máy hoặc tổ chức có nhiều phòng ban và nhiều hệ thống dữ liệu. Khi dữ liệu vận hành ngày càng phức tạp, ban lãnh đạo cần một lớp thông tin thống nhất để theo dõi hiệu suất, chi phí và các điểm nghẽn.' },
          { title: 'Bài toán', type: 'text', content: 'Dữ liệu thường nằm rải rác giữa ERP, sản xuất, kho vận, tài chính, năng lượng, phát thải và tài liệu nội bộ. Khi dữ liệu thiếu đồng bộ, ban lãnh đạo khó có bức tranh tổng thể và quá trình ra quyết định dễ phụ thuộc vào báo cáo chậm.' },
          { title: 'Dữ liệu cần kết nối', type: 'list', items: ['Dữ liệu ERP', 'Dữ liệu sản xuất', 'Dữ liệu kho vận', 'Dữ liệu tài chính', 'Dữ liệu năng lượng', 'Dữ liệu chi nhánh', 'Dữ liệu phát thải', 'Dữ liệu tài liệu và tri thức nội bộ'] },
          { title: 'Cách Udata hỗ trợ', type: 'list', items: ['Ugate đóng vai trò lớp AI trung tâm kết nối và phân tích dữ liệu vận hành doanh nghiệp', 'Ugate giúp chuyển dữ liệu rời rạc thành thông tin có ý nghĩa cho ban lãnh đạo', 'Uboard bổ sung dữ liệu nhà máy, thiết bị và vận hành hiện trường theo thời gian thực', 'Uzero bổ sung dữ liệu carbon, năng lượng và phát thải', 'MiniUgate hỗ trợ khai thác tri thức nội bộ và tự động hóa phản hồi thông tin'] },
          { title: 'Chỉ số nên theo dõi', type: 'list', items: ['Hiệu suất vận hành tổng thể', 'Chi phí vận hành', 'Dữ liệu dòng tiền liên quan', 'Tồn kho và năng lực đáp ứng', 'Mức tiêu thụ năng lượng', 'Dữ liệu carbon và phát thải', 'Thời gian tổng hợp báo cáo', 'Tốc độ truy xuất thông tin nội bộ'] },
          { title: 'Giá trị kỳ vọng', type: 'text', content: 'Ban lãnh đạo có thể nhìn thấy toàn bộ dòng chảy vận hành rõ hơn, phát hiện điểm nghẽn sớm hơn và ra quyết định dựa trên dữ liệu có ý nghĩa.' },
          { title: 'Lộ trình triển khai gợi ý', type: 'list', items: ['Khảo sát hệ thống dữ liệu đang vận hành trong từng phòng ban', 'Xác định các chỉ số quản trị quan trọng cho ban lãnh đạo', 'Kết nối dữ liệu từ các hệ thống ưu tiên vào lớp phân tích tập trung', 'Thiết lập dashboard điều hành và mô hình phân quyền dữ liệu', 'Đánh giá hiệu quả và mở rộng sang các chi nhánh hoặc mảng vận hành khác'] }
        ]
      },
      enDetails: {
        ctaText: 'Discuss operational management',
        sections: [
          { title: 'Context', type: 'text', content: 'Suitable for enterprise businesses, corporations, factory chains, or organizations with multiple departments and data systems. As operational data grows complex, leadership needs a unified information layer to track performance, costs, and bottlenecks.' },
          { title: 'The Challenge', type: 'text', content: 'Data is often scattered across ERP, production, logistics, finance, energy, emissions, and internal documents. Without synchronized data, leadership lacks a holistic view, and decision-making relies heavily on delayed reports.' },
          { title: 'Data to Connect', type: 'list', items: ['ERP data', 'Production data', 'Logistics data', 'Financial data', 'Energy data', 'Branch data', 'Emissions data', 'Internal documents and knowledge data'] },
          { title: 'How Udata Helps', type: 'list', items: ['Ugate acts as the central AI layer connecting and analyzing enterprise operational data', 'Ugate transforms fragmented data into meaningful insights for leadership', 'Uboard adds real-time factory, equipment, and field operations data', 'Uzero adds carbon, energy, and emissions data', 'MiniUgate supports mining internal knowledge and automating information responses'] },
          { title: 'Metrics to Track', type: 'list', items: ['Overall operational performance', 'Operational costs', 'Related cash flow data', 'Inventory and fulfillment capacity', 'Energy consumption levels', 'Carbon and emissions data', 'Report aggregation time', 'Internal information retrieval speed'] },
          { title: 'Expected Value', type: 'text', content: 'Leadership can observe the entire operational flow more clearly, detect bottlenecks earlier, and make decisions based on meaningful, synchronized data.' },
          { title: 'Suggested Roadmap', type: 'list', items: ['Survey data systems operating within each department', 'Identify critical management metrics for leadership', 'Connect data from priority systems into a centralized analytics layer', 'Set up executive dashboards and data access control models', 'Evaluate effectiveness and expand to other branches or operational areas'] }
        ]
      }
    },
    {
      category: { vi: 'AI & Tự động hóa', en: 'AI & Automation' },
      icon: 'smart_toy',
      viTitle: 'Tự động hóa tri thức nội bộ và tương tác khách hàng bằng AI',
      enTitle: 'Automate internal knowledge and customer interaction with AI',
      viDesc: 'Xây dựng trợ lý AI nội bộ, tự động trả lời câu hỏi, tra cứu tri thức và tương tác khách hàng 24/7 đa kênh.',
      enDesc: 'Build an internal AI assistant to automate Q&A, knowledge retrieval, and omnichannel 24/7 customer interaction.',
      tags: ['Ugate', 'MiniUgate'],
      viDetails: {
        ctaText: 'Trao đổi về bài toán tri thức AI',
        sections: [
          { title: 'Bối cảnh', type: 'text', content: 'Phù hợp với doanh nghiệp có nhiều tài liệu nội bộ, quy trình vận hành, thông tin sản phẩm, dữ liệu khách hàng hoặc kênh hỗ trợ cần được khai thác nhanh hơn. Đây là tình huống quan trọng với các đội ngũ sales, chăm sóc khách hàng, kỹ thuật và vận hành nội bộ.' },
          { title: 'Bài toán', type: 'text', content: 'Tài liệu kỹ thuật, quy trình xử lý sự cố, thông tin sản phẩm, lịch sử tư vấn và dữ liệu khách hàng thường nằm ở nhiều nơi. Nhân sự mất nhiều thời gian để tra cứu thông tin hoặc xử lý các câu hỏi lặp lại, dẫn đến chất lượng phản hồi chưa đồng đều.' },
          { title: 'Dữ liệu cần kết nối', type: 'list', items: ['Tài liệu kỹ thuật', 'Quy trình xử lý sự cố', 'Câu hỏi thường gặp', 'Thông tin sản phẩm', 'Dữ liệu khách hàng', 'Lịch sử tư vấn hoặc hỗ trợ', 'Tài liệu nội bộ và cơ sở tri thức'] },
          { title: 'Cách Udata hỗ trợ', type: 'list', items: ['MiniUgate hỗ trợ phản hồi tự động, truy vấn tri thức và tương tác khách hàng bằng AI', 'MiniUgate giúp đội ngũ sales, chăm sóc khách hàng hoặc vận hành nội bộ khai thác thông tin nhanh hơn', 'Ugate kết nối các nguồn dữ liệu nội bộ để thông tin được tổ chức và truy xuất hiệu quả hơn', 'Dữ liệu từ website, tài liệu, file nội bộ và hệ thống vận hành có thể được chuẩn hóa thành nguồn tri thức dùng chung'] },
          { title: 'Chỉ số nên theo dõi', type: 'list', items: ['Thời gian tìm kiếm thông tin', 'Thời gian phản hồi khách hàng', 'Tỷ lệ câu hỏi lặp lại được tự động hóa', 'Mức độ nhất quán trong phản hồi', 'Thời gian xử lý yêu cầu nội bộ', 'Khả năng tái sử dụng tri thức nội bộ'] },
          { title: 'Giá trị kỳ vọng', type: 'text', content: 'Doanh nghiệp rút ngắn thời gian tìm kiếm thông tin, giảm tải tác vụ lặp lại và nâng cao chất lượng phản hồi giữa các đội nhóm hoặc với khách hàng.' },
          { title: 'Lộ trình triển khai gợi ý', type: 'list', items: ['Khảo sát nguồn tài liệu, câu hỏi thường gặp và dữ liệu khách hàng hiện có', 'Chuẩn hóa dữ liệu đầu vào thành cơ sở tri thức có thể khai thác', 'Thiết lập trợ lý AI theo từng vai trò sử dụng như sales, chăm sóc khách hàng hoặc kỹ thuật', 'Kiểm thử chất lượng phản hồi và điều chỉnh ngữ cảnh trả lời', 'Mở rộng sang nhiều kênh giao tiếp hoặc nhóm người dùng nội bộ khác'] }
        ]
      },
      enDetails: {
        ctaText: 'Discuss AI knowledge',
        sections: [
          { title: 'Context', type: 'text', content: 'Suitable for businesses with extensive internal documents, operational procedures, product info, customer data, or support channels that need faster exploitation. Crucial for sales, customer care, technical, and internal operations teams.' },
          { title: 'The Challenge', type: 'text', content: 'Technical documents, troubleshooting procedures, product info, consultation history, and customer data are often scattered. Staff waste time searching or handling repetitive questions, leading to inconsistent response quality.' },
          { title: 'Data to Connect', type: 'list', items: ['Technical documents', 'Troubleshooting procedures', 'Frequently Asked Questions (FAQs)', 'Product information', 'Customer data', 'Consultation or support history', 'Internal documents and knowledge bases'] },
          { title: 'How Udata Helps', type: 'list', items: ['MiniUgate supports automated responses, knowledge queries, and customer interaction using AI', 'MiniUgate helps sales, customer care, or internal teams mine information faster', 'Ugate connects internal data sources to organize and retrieve information more efficiently', 'Data from websites, documents, internal files, and systems can be standardized into a shared knowledge base'] },
          { title: 'Metrics to Track', type: 'list', items: ['Information search time', 'Customer response time', 'Percentage of repetitive questions automated', 'Consistency level in responses', 'Internal request processing time', 'Internal knowledge reusability'] },
          { title: 'Expected Value', type: 'text', content: 'Businesses shorten information search times, reduce the burden of repetitive tasks, and improve response quality across teams or with customers.' },
          { title: 'Suggested Roadmap', type: 'list', items: ['Survey existing document sources, FAQs, and customer data', 'Standardize input data into an exploitable knowledge base', 'Set up AI assistants tailored to roles like sales, customer care, or technical support', 'Test response quality and adjust answering context', 'Expand to multiple communication channels or other internal user groups'] }
        ]
      }
    }
  ];`;

// We will find "export const USE_CASES_DATA = [" and replace until the matching "];" before "const caseImages"
const startIndex = content.indexOf('export const USE_CASES_DATA = [');
const endIndex = content.indexOf('const caseImages');

if (startIndex !== -1 && endIndex !== -1) {
  let before = content.substring(0, startIndex);
  let after = content.substring(endIndex);
  // There is probably a `];` right before `const caseImages`.
  // Let's just construct the final content
  const finalContent = before + newData + '\n\n' + after;
  fs.writeFileSync('c:/Users/PC/Downloads/fe mkt2/udata_next/components/UseCaseGrid.jsx', finalContent, 'utf-8');
  console.log("Successfully replaced USE_CASES_DATA!");
} else {
  console.log("Could not find start or end index.");
}
