"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import UseCaseModal from './UseCaseModal';

export const USE_CASES_DATA = [
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
          {
            title: 'Bối cảnh',
            type: 'text',
            content: 'Phù hợp với nhà máy sản xuất có nhiều dây chuyền, thiết bị, cảm biến và điểm tiêu thụ năng lượng cần được theo dõi liên tục. Khi dữ liệu vận hành nằm ở nhiều hệ thống khác nhau, đội ngũ quản lý khó có một góc nhìn thống nhất về tình trạng nhà máy.'
          },
          {
            title: 'Bài toán',
            type: 'text',
            content: 'Nhà máy cần theo dõi trạng thái thiết bị, hiệu suất dây chuyền, năng lượng và sự cố theo thời gian thực. Nếu dữ liệu cập nhật chậm hoặc phải tổng hợp thủ công, doanh nghiệp dễ bỏ lỡ các tín hiệu bất thường trong vận hành.'
          },
          {
            title: 'Dữ liệu cần kết nối',
            type: 'list',
            items: [
              'Dữ liệu thiết bị và cảm biến',
              'Trạng thái dây chuyền sản xuất',
              'Dữ liệu năng lượng',
              'Dữ liệu bảo trì và sự cố',
              'Sản lượng và hiệu suất vận hành',
              'Dữ liệu từ dashboard hoặc hệ thống nội bộ hiện có'
            ]
          },
          {
            title: 'Cách Udata hỗ trợ',
            type: 'list',
            items: [
              'Uboard kết nối dữ liệu hiện trường và hiển thị trên dashboard realtime',
              'Uboard hỗ trợ theo dõi trạng thái thiết bị, dây chuyền và các điểm vận hành quan trọng',
              'Ugate hợp nhất dữ liệu nhà máy với các hệ thống nội bộ để tạo góc nhìn tổng thể',
              'Uzero có thể bổ sung dữ liệu năng lượng và phát thải nếu doanh nghiệp cần quản trị bền vững'
            ]
          },
          {
            title: 'Chỉ số nên theo dõi',
            type: 'list',
            items: [
              'Trạng thái thiết bị',
              'Thời gian dừng máy',
              'Hiệu suất dây chuyền',
              'Mức tiêu thụ năng lượng',
              'Tần suất cảnh báo bất thường',
              'Thời gian xử lý sự cố'
            ]
          },
          {
            title: 'Giá trị kỳ vọng',
            type: 'text',
            content: 'Doanh nghiệp có thể quan sát vận hành rõ hơn, phát hiện điểm nghẽn sớm hơn và đưa ra quyết định dựa trên dữ liệu thay vì báo cáo rời rạc.'
          },
          {
            title: 'Lộ trình triển khai gợi ý',
            type: 'list',
            items: [
              'Khảo sát dây chuyền, thiết bị và nguồn dữ liệu hiện có',
              'Xác định các điểm dữ liệu cần theo dõi realtime',
              'Kết nối dữ liệu vào dashboard vận hành',
              'Thiết lập cảnh báo và chỉ số theo dõi',
              'Đánh giá hiệu quả và mở rộng sang các khu vực vận hành khác'
            ]
          }
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
          {
            title: 'Bối cảnh',
            type: 'text',
            content: 'Phù hợp với nhà máy có nhiều thiết bị quan trọng, cần theo dõi tình trạng vận hành và lịch sử bảo trì một cách có hệ thống. Đây là tình huống thường gặp ở các doanh nghiệp muốn giảm phụ thuộc vào ghi nhận thủ công và kinh nghiệm cá nhân.'
          },
          {
            title: 'Bài toán',
            type: 'text',
            content: 'Dữ liệu lỗi, cảnh báo, lịch sử bảo trì và tài liệu kỹ thuật thường phân tán ở nhiều nơi. Khi thiếu dữ liệu realtime và dữ liệu lịch sử, đội ngũ kỹ thuật khó nhận diện thiết bị có rủi ro cao và khó ưu tiên xử lý sự cố.'
          },
          {
            title: 'Dữ liệu cần kết nối',
            type: 'list',
            items: [
              'Trạng thái thiết bị',
              'Lịch sử lỗi và cảnh báo',
              'Lịch sử bảo trì',
              'Thời gian vận hành và thời gian dừng máy',
              'Mã thiết bị, mã serial và vị trí thiết bị',
              'Tài liệu kỹ thuật và quy trình xử lý sự cố'
            ]
          },
          {
            title: 'Cách Udata hỗ trợ',
            type: 'list',
            items: [
              'Uboard theo dõi trạng thái thiết bị và cảnh báo bất thường theo thời gian thực',
              'Ugate tổ chức dữ liệu thiết bị, lịch sử sự cố và thông tin vận hành vào một lớp dữ liệu thống nhất',
              'MiniUgate hỗ trợ đội ngũ kỹ thuật truy vấn quy trình, tài liệu hoặc hướng dẫn xử lý sự cố bằng ngôn ngữ tự nhiên',
              'Dữ liệu từ các lần xử lý sự cố có thể được lưu lại để phục vụ phân tích và cải tiến bảo trì'
            ]
          },
          {
            title: 'Chỉ số nên theo dõi',
            type: 'list',
            items: [
              'Thời gian phát hiện sự cố',
              'Thời gian xử lý sự cố',
              'Tần suất lỗi lặp lại',
              'Lịch sử bảo trì theo thiết bị',
              'Mức độ sẵn sàng của thiết bị',
              'Tỷ lệ cảnh báo được xử lý đúng hạn'
            ]
          },
          {
            title: 'Giá trị kỳ vọng',
            type: 'text',
            content: 'Doanh nghiệp có thể nâng cao khả năng truy xuất lịch sử thiết bị, tổ chức quy trình bảo trì theo dữ liệu và hỗ trợ đội ngũ kỹ thuật xử lý sự cố nhất quán hơn.'
          },
          {
            title: 'Lộ trình triển khai gợi ý',
            type: 'list',
            items: [
              'Rà soát danh mục thiết bị và dữ liệu bảo trì hiện có',
              'Xác định nhóm thiết bị ưu tiên theo mức độ ảnh hưởng vận hành',
              'Kết nối dữ liệu cảnh báo, sự cố và lịch sử bảo trì',
              'Thiết lập dashboard và quy trình truy vấn tri thức kỹ thuật',
              'Đánh giá hiệu quả xử lý sự cố và mở rộng sang nhóm thiết bị khác'
            ]
          }
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
          {
            title: 'Bối cảnh',
            type: 'text',
            content: 'Phù hợp với doanh nghiệp có hoạt động kho vận, trung tâm logistics hoặc chuỗi cung ứng cần theo dõi tồn kho, nhập xuất, luồng hàng và hiệu suất tài sản. Tình huống này đặc biệt quan trọng khi dữ liệu kho vận đang nằm ở nhiều hệ thống riêng lẻ.'
          },
          {
            title: 'Bài toán',
            type: 'text',
            content: 'Dữ liệu tồn kho, nhập xuất, vận chuyển, tài sản và chi phí thường bị phân tán. Khi thông tin cập nhật chậm, doanh nghiệp khó đánh giá mức độ sẵn sàng của hàng hóa, khó phát hiện điểm nghẽn và khó tối ưu chi phí vận hành.'
          },
          {
            title: 'Dữ liệu cần kết nối',
            type: 'list',
            items: [
              'Dữ liệu tồn kho',
              'Dữ liệu nhập xuất',
              'Trạng thái luồng hàng',
              'Dữ liệu tài sản và thiết bị kho',
              'Dữ liệu vận chuyển',
              'Dữ liệu chi phí và tài chính liên quan',
              'Dữ liệu năng lượng tại kho hoặc trung tâm logistics'
            ]
          },
          {
            title: 'Cách Udata hỗ trợ',
            type: 'list',
            items: [
              'Ugate kết nối dữ liệu từ kho, tồn kho, vận hành và tài chính để tạo bức tranh thống nhất',
              'Uboard hỗ trợ theo dõi các điểm vận hành quan trọng trong khu vực kho hoặc trung tâm logistics',
              'Uzero hỗ trợ theo dõi dữ liệu năng lượng và phát thải nếu doanh nghiệp cần quản trị xanh cho hoạt động kho vận',
              'Dashboard giúp đội ngũ vận hành theo dõi luồng hàng và nhận diện điểm nghẽn nhanh hơn'
            ]
          },
          {
            title: 'Chỉ số nên theo dõi',
            type: 'list',
            items: [
              'Tình trạng tồn kho',
              'Luồng nhập xuất',
              'Thời gian xử lý hàng',
              'Hiệu suất tài sản kho',
              'Điểm nghẽn trong luồng vận hành',
              'Chi phí vận hành liên quan',
              'Năng lượng tiêu thụ tại kho'
            ]
          },
          {
            title: 'Giá trị kỳ vọng',
            type: 'text',
            content: 'Doanh nghiệp cải thiện khả năng quan sát luồng hàng, giảm phụ thuộc vào báo cáo thủ công và có cơ sở dữ liệu rõ hơn để tối ưu vận hành kho vận.'
          },
          {
            title: 'Lộ trình triển khai gợi ý',
            type: 'list',
            items: [
              'Khảo sát luồng dữ liệu kho, tồn kho và vận chuyển',
              'Xác định các điểm nghẽn thường gặp trong vận hành',
              'Kết nối dữ liệu từ hệ thống kho, tài sản, vận hành và tài chính',
              'Thiết lập dashboard theo dõi luồng hàng và tồn kho',
              'Đánh giá hiệu quả và mở rộng sang dữ liệu năng lượng hoặc phát thải nếu cần'
            ]
          }
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
          {
            title: 'Bối cảnh',
            type: 'text',
            content: 'Phù hợp với nhà máy, khu công nghiệp, tòa nhà hoặc cơ sở vận hành có nhiều điểm tiêu thụ điện, nước, khí nén, nhiệt hoặc nhiên liệu. Đây là tình huống quan trọng với doanh nghiệp muốn kiểm soát tài nguyên và xây dựng nền tảng dữ liệu cho phát triển bền vững.'
          },
          {
            title: 'Bài toán',
            type: 'text',
            content: 'Dữ liệu năng lượng thường đến từ nhiều đồng hồ, thiết bị hoặc báo cáo riêng lẻ. Khi chưa có hệ thống đo lường thống nhất, doanh nghiệp khó xác định khu vực tiêu thụ cao, khó phát hiện bất thường và khó đánh giá hiệu quả sử dụng tài nguyên.'
          },
          {
            title: 'Dữ liệu cần kết nối',
            type: 'list',
            items: [
              'Dữ liệu điện',
              'Dữ liệu nước',
              'Dữ liệu khí nén',
              'Dữ liệu nhiệt hoặc nhiên liệu',
              'Dữ liệu thiết bị hạ tầng',
              'Dữ liệu sản lượng hoặc mức độ hoạt động',
              'Dữ liệu chi phí năng lượng'
            ]
          },
          {
            title: 'Cách Udata hỗ trợ',
            type: 'list',
            items: [
              'Uboard giám sát dữ liệu thiết bị, năng lượng và trạng thái vận hành theo thời gian thực',
              'Ugate kết nối dữ liệu hạ tầng với các hệ thống quản trị khác để tạo góc nhìn vận hành đầy đủ hơn',
              'Uzero liên kết dữ liệu năng lượng với dữ liệu phát thải và carbon',
              'Dashboard giúp doanh nghiệp theo dõi khu vực tiêu thụ cao, bất thường hoặc chưa hiệu quả'
            ]
          },
          {
            title: 'Chỉ số nên theo dõi',
            type: 'list',
            items: [
              'Mức tiêu thụ năng lượng',
              'Tiêu thụ năng lượng theo khu vực',
              'Tiêu thụ năng lượng theo sản lượng',
              'Cảnh báo tiêu thụ bất thường',
              'Chi phí năng lượng',
              'Dữ liệu phát thải liên quan'
            ]
          },
          {
            title: 'Giá trị kỳ vọng',
            type: 'text',
            content: 'Doanh nghiệp có thể theo dõi tiêu thụ tài nguyên rõ hơn, nhận diện khu vực vận hành chưa hiệu quả và xây dựng nền tảng dữ liệu cho các mục tiêu tiết kiệm năng lượng.'
          },
          {
            title: 'Lộ trình triển khai gợi ý',
            type: 'list',
            items: [
              'Khảo sát các điểm đo năng lượng và tài nguyên hiện có',
              'Xác định nhóm dữ liệu ưu tiên theo chi phí hoặc mức độ ảnh hưởng vận hành',
              'Kết nối dữ liệu vào hệ thống theo dõi tập trung',
              'Thiết lập dashboard, cảnh báo và chỉ số tiêu thụ',
              'Liên kết dữ liệu năng lượng với dữ liệu phát thải khi doanh nghiệp cần quản trị ESG'
            ]
          }
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
          {
            title: 'Bối cảnh',
            type: 'text',
            content: 'Phù hợp với doanh nghiệp xuất khẩu, nhà máy sản xuất, chuỗi cung ứng hoặc tổ chức đang cần chuẩn hóa dữ liệu phát thải. Tình huống này đặc biệt quan trọng khi doanh nghiệp phải chuẩn bị dữ liệu cho ESG, audit hoặc yêu cầu minh bạch từ khách hàng và đối tác.'
          },
          {
            title: 'Bài toán',
            type: 'text',
            content: 'Dữ liệu phát thải thường nằm trong hóa đơn năng lượng, báo cáo sản xuất, vận tải, nguyên vật liệu, chi nhánh và file nội bộ. Khi dữ liệu chưa được chuẩn hóa, doanh nghiệp khó tổng hợp, khó kiểm tra và khó xây dựng báo cáo bền vững một cách nhất quán.'
          },
          {
            title: 'Dữ liệu cần kết nối',
            type: 'list',
            items: [
              'Dữ liệu năng lượng',
              'Dữ liệu nhiên liệu',
              'Dữ liệu sản xuất',
              'Dữ liệu vận tải',
              'Dữ liệu nguyên vật liệu',
              'Dữ liệu chi nhánh và nhà máy',
              'File nội bộ và biểu mẫu báo cáo',
              'Dữ liệu từ hệ thống vận hành liên quan'
            ]
          },
          {
            title: 'Cách Udata hỗ trợ',
            type: 'list',
            items: [
              'Uzero hỗ trợ thu thập, phân loại, tính toán và theo dõi dữ liệu phát thải',
              'Uzero giúp doanh nghiệp quản trị dữ liệu carbon theo đơn vị, chi nhánh, hoạt động hoặc nguồn phát sinh',
              'Ugate kết nối dữ liệu vận hành liên quan để phân tích mối liên hệ giữa hiệu suất, năng lượng, chi phí và phát thải',
              'Uboard bổ sung dữ liệu vận hành và năng lượng từ hiện trường nếu doanh nghiệp cần theo dõi realtime'
            ]
          },
          {
            title: 'Chỉ số nên theo dõi',
            type: 'list',
            items: [
              'Tổng phát thải theo giai đoạn',
              'Phát thải theo chi nhánh hoặc đơn vị',
              'Phát thải theo nguồn phát sinh',
              'Dữ liệu năng lượng liên quan',
              'Mức độ hoàn thiện dữ liệu ESG',
              'Tình trạng sẵn sàng cho báo cáo ESG',
              'Dữ liệu phục vụ audit và chuỗi cung ứng'
            ]
          },
          {
            title: 'Giá trị kỳ vọng',
            type: 'text',
            content: 'Doanh nghiệp có nền tảng dữ liệu rõ ràng hơn cho ESG, carbon, báo cáo bền vững và các yêu cầu audit trong chuỗi cung ứng.'
          },
          {
            title: 'Lộ trình triển khai gợi ý',
            type: 'list',
            items: [
              'Khảo sát nguồn dữ liệu phát thải và biểu mẫu báo cáo hiện có',
              'Xác định phạm vi dữ liệu cần quản trị theo đơn vị, chi nhánh hoặc hoạt động',
              'Chuẩn hóa dữ liệu năng lượng, nhiên liệu, sản xuất và vận tải',
              'Thiết lập dashboard carbon và báo cáo dữ liệu ESG',
              'Đánh giá mức độ hoàn thiện dữ liệu và mở rộng phạm vi theo lộ trình bền vững'
            ]
          }
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
          {
            title: 'Bối cảnh',
            type: 'text',
            content: 'Phù hợp với doanh nghiệp enterprise, tập đoàn, chuỗi nhà máy hoặc tổ chức có nhiều phòng ban và nhiều hệ thống dữ liệu. Khi dữ liệu vận hành ngày càng phức tạp, ban lãnh đạo cần một lớp thông tin thống nhất để theo dõi hiệu suất, chi phí và các điểm nghẽn.'
          },
          {
            title: 'Bài toán',
            type: 'text',
            content: 'Dữ liệu thường nằm rải rác giữa ERP, sản xuất, kho vận, tài chính, năng lượng, phát thải và tài liệu nội bộ. Khi dữ liệu thiếu đồng bộ, ban lãnh đạo khó có bức tranh tổng thể và quá trình ra quyết định dễ phụ thuộc vào báo cáo chậm.'
          },
          {
            title: 'Dữ liệu cần kết nối',
            type: 'list',
            items: [
              'Dữ liệu ERP',
              'Dữ liệu sản xuất',
              'Dữ liệu kho vận',
              'Dữ liệu tài chính',
              'Dữ liệu năng lượng',
              'Dữ liệu chi nhánh',
              'Dữ liệu phát thải',
              'Dữ liệu tài liệu và tri thức nội bộ'
            ]
          },
          {
            title: 'Cách Udata hỗ trợ',
            type: 'list',
            items: [
              'Ugate đóng vai trò lớp AI trung tâm kết nối và phân tích dữ liệu vận hành doanh nghiệp',
              'Ugate giúp chuyển dữ liệu rời rạc thành thông tin có ý nghĩa cho ban lãnh đạo',
              'Uboard bổ sung dữ liệu nhà máy, thiết bị và vận hành hiện trường theo thời gian thực',
              'Uzero bổ sung dữ liệu carbon, năng lượng và phát thải',
              'MiniUgate hỗ trợ khai thác tri thức nội bộ và tự động hóa phản hồi thông tin'
            ]
          },
          {
            title: 'Chỉ số nên theo dõi',
            type: 'list',
            items: [
              'Hiệu suất vận hành tổng thể',
              'Chi phí vận hành',
              'Dữ liệu dòng tiền liên quan',
              'Tồn kho và năng lực đáp ứng',
              'Mức tiêu thụ năng lượng',
              'Dữ liệu carbon và phát thải',
              'Thời gian tổng hợp báo cáo',
              'Tốc độ truy xuất thông tin nội bộ'
            ]
          },
          {
            title: 'Giá trị kỳ vọng',
            type: 'text',
            content: 'Ban lãnh đạo có thể nhìn thấy toàn bộ dòng chảy vận hành rõ hơn, phát hiện điểm nghẽn sớm hơn và ra quyết định dựa trên dữ liệu có ý nghĩa.'
          },
          {
            title: 'Lộ trình triển khai gợi ý',
            type: 'list',
            items: [
              'Khảo sát hệ thống dữ liệu đang vận hành trong từng phòng ban',
              'Xác định các chỉ số quản trị quan trọng cho ban lãnh đạo',
              'Kết nối dữ liệu từ các hệ thống ưu tiên vào lớp phân tích tập trung',
              'Thiết lập dashboard điều hành và mô hình phân quyền dữ liệu',
              'Đánh giá hiệu quả và mở rộng sang các chi nhánh hoặc mảng vận hành khác'
            ]
          }
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
          {
            title: 'Bối cảnh',
            type: 'text',
            content: 'Phù hợp với doanh nghiệp có nhiều tài liệu nội bộ, quy trình vận hành, thông tin sản phẩm, dữ liệu khách hàng hoặc kênh hỗ trợ cần được khai thác nhanh hơn. Đây là tình huống quan trọng với các đội ngũ sales, chăm sóc khách hàng, kỹ thuật và vận hành nội bộ.'
          },
          {
            title: 'Bài toán',
            type: 'text',
            content: 'Tài liệu kỹ thuật, quy trình xử lý sự cố, thông tin sản phẩm, lịch sử tư vấn và dữ liệu khách hàng thường nằm ở nhiều nơi. Nhân sự mất nhiều thời gian để tra cứu thông tin hoặc xử lý các câu hỏi lặp lại, dẫn đến chất lượng phản hồi chưa đồng đều.'
          },
          {
            title: 'Dữ liệu cần kết nối',
            type: 'list',
            items: [
              'Tài liệu kỹ thuật',
              'Quy trình xử lý sự cố',
              'Câu hỏi thường gặp',
              'Thông tin sản phẩm',
              'Dữ liệu khách hàng',
              'Lịch sử tư vấn hoặc hỗ trợ',
              'Tài liệu nội bộ và cơ sở tri thức'
            ]
          },
          {
            title: 'Cách Udata hỗ trợ',
            type: 'list',
            items: [
              'MiniUgate hỗ trợ phản hồi tự động, truy vấn tri thức và tương tác khách hàng bằng AI',
              'MiniUgate giúp đội ngũ sales, chăm sóc khách hàng hoặc vận hành nội bộ khai thác thông tin nhanh hơn',
              'Ugate kết nối các nguồn dữ liệu nội bộ để thông tin được tổ chức và truy xuất hiệu quả hơn',
              'Dữ liệu từ website, tài liệu, file nội bộ và hệ thống vận hành có thể được chuẩn hóa thành nguồn tri thức dùng chung'
            ]
          },
          {
            title: 'Chỉ số nên theo dõi',
            type: 'list',
            items: [
              'Thời gian tìm kiếm thông tin',
              'Thời gian phản hồi khách hàng',
              'Tỷ lệ câu hỏi lặp lại được tự động hóa',
              'Mức độ nhất quán trong phản hồi',
              'Thời gian xử lý yêu cầu nội bộ',
              'Khả năng tái sử dụng tri thức nội bộ'
            ]
          },
          {
            title: 'Giá trị kỳ vọng',
            type: 'text',
            content: 'Doanh nghiệp rút ngắn thời gian tìm kiếm thông tin, giảm tải tác vụ lặp lại và nâng cao chất lượng phản hồi giữa các đội nhóm hoặc với khách hàng.'
          },
          {
            title: 'Lộ trình triển khai gợi ý',
            type: 'list',
            items: [
              'Khảo sát nguồn tài liệu, câu hỏi thường gặp và dữ liệu khách hàng hiện có',
              'Chuẩn hóa dữ liệu đầu vào thành cơ sở tri thức có thể khai thác',
              'Thiết lập trợ lý AI theo từng vai trò sử dụng như sales, chăm sóc khách hàng hoặc kỹ thuật',
              'Kiểm thử chất lượng phản hồi và điều chỉnh ngữ cảnh trả lời',
              'Mở rộng sang nhiều kênh giao tiếp hoặc nhóm người dùng nội bộ khác'
            ]
          }
        ]
      }
    }
  ];

const caseImages = [
  "/images/cases/case1.png",
  "/images/cases/case2.png",
  "/images/cases/case3.png",
  "/images/cases/case4.png",
  "/images/cases/case5.png",
  "/images/cases/case6.png",
  "/images/cases/case7.png"
];

export default function UseCaseGrid() {
  const { t, lang } = useLanguage();
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedCase, setSelectedCase] = useState(null);

  const filters = [
    { id: 'All', vi: 'Tất cả', en: 'All' },
    { id: 'Uboard', vi: 'Uboard', en: 'Uboard' },
    { id: 'Ugate', vi: 'Ugate', en: 'Ugate' },
    { id: 'Uzero', vi: 'Uzero', en: 'Uzero' },
    { id: 'MiniUgate', vi: 'MiniUgate', en: 'MiniUgate' }
  ];

  const filteredCases = activeFilter === 'All' 
    ? USE_CASES_DATA 
    : USE_CASES_DATA.filter(c => c.tags.includes(activeFilter));

  return (
    <section id="usecase-grid" className="py-20 md:py-28 px-6 md:px-12 relative z-10 bg-[#080B10]">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('usecases.grid.title')}
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-3xl mx-auto">
            {t('usecases.grid.desc')}
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map(filter => {
            let activeColorClass = "";
            let hoverColorClass = "";
            switch (filter.id) {
              case 'Ugate':
              case 'MiniUgate':
                activeColorClass = 'bg-[#3B82F6] text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]';
                hoverColorClass = 'hover:border-[#3B82F6]/50 hover:text-[#3B82F6]';
                break;
              case 'Uzero':
                activeColorClass = 'bg-[#10B981] text-[#06101F] shadow-[0_0_15px_rgba(16,185,129,0.3)]';
                hoverColorClass = 'hover:border-[#10B981]/50 hover:text-[#10B981]';
                break;
              case 'Uboard':
              case 'All':
              default:
                activeColorClass = 'bg-[#22D3EE] text-[#06101F] shadow-[0_0_15px_rgba(34,211,238,0.3)]';
                hoverColorClass = 'hover:border-[#22D3EE]/50 hover:text-[#22D3EE]';
                break;
            }
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeFilter === filter.id
                    ? activeColorClass
                    : `bg-[#0C1017] border border-white/10 text-white ${hoverColorClass}`
                }`}
              >
                {lang === 'EN' ? filter.en : filter.vi}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {filteredCases.map((c, i) => {
            const imageSrc = caseImages[i % caseImages.length];
            return (
              <div 
                key={i} 
                onClick={() => setSelectedCase(c)}
                className="group relative min-h-[200px] sm:min-h-[240px] md:min-h-[450px] rounded-xl md:rounded-2xl overflow-hidden glass-card transition-all duration-700 hover:-translate-y-2 cursor-pointer border border-white/5 hover:border-[#22D3EE]/50 shadow-lg"
              >
                <img alt={lang === 'EN' ? c.enTitle : c.viTitle} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700" src={imageSrc} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06101F]/95 via-[#06101F]/70 to-transparent group-hover:from-[#06101F] group-hover:via-[#06101F]/90 transition-all duration-500"></div>

                <div className="absolute inset-0 p-4 sm:p-5 md:p-8 flex flex-col justify-end z-20">
                  <div className="flex items-center gap-1.5 md:gap-2 mb-2 md:mb-4">
                    <span className="material-symbols-outlined text-[#22D3EE] text-base md:text-xl">{c.icon}</span>
                    <span className="text-[9px] md:text-[10px] font-bold text-white/50 uppercase tracking-widest line-clamp-1">
                      {lang === 'EN' ? c.category.en : c.category.vi}
                    </span>
                  </div>
                  
                  <h3 className="text-sm sm:text-base md:text-2xl font-bold text-white mb-1 md:mb-2 group-hover:text-[#22D3EE] transition-colors duration-300 leading-snug md:leading-tight line-clamp-3">
                    {lang === 'EN' ? c.enTitle : c.viTitle}
                  </h3>
                  
                  {/* Hover content - Hidden on mobile to keep cards compact, visible on md+ */}
                  <div className="hidden md:grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                    <div className="overflow-hidden flex flex-col">
                      <p className="text-[#9CA3AF] text-sm mt-3 mb-6 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex-1">
                        {lang === 'EN' ? c.enDesc : c.viDesc}
                      </p>

                      <div className="flex flex-col gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        <div className="flex flex-wrap gap-2">
                          {c.tags.map(tag => {
                            let colorClass = "";
                            let shimmerClass = "";
                            switch (tag.toLowerCase()) {
                              case 'uboard': 
                                colorClass = 'border-[#22D3EE]/40 bg-[#22D3EE]/10 text-[#22D3EE] shadow-[0_0_15px_rgba(34,211,238,0.15)]';
                                shimmerClass = 'via-[#22D3EE]/30';
                                break;
                              case 'ugate': 
                              case 'miniugate':
                                colorClass = 'border-[#3B82F6]/40 bg-[#3B82F6]/10 text-[#3B82F6] shadow-[0_0_15px_rgba(59,130,246,0.15)]';
                                shimmerClass = 'via-[#3B82F6]/30';
                                break;
                              case 'uzero': 
                                colorClass = 'border-[#10B981]/40 bg-[#10B981]/10 text-[#10B981] shadow-[0_0_15px_rgba(16,185,129,0.15)]';
                                shimmerClass = 'via-[#10B981]/30';
                                break;
                              default:
                                colorClass = 'border-[#22D3EE]/40 bg-[#22D3EE]/10 text-[#22D3EE] shadow-[0_0_15px_rgba(34,211,238,0.15)]';
                                shimmerClass = 'via-[#22D3EE]/30';
                            }
                            return (
                              <span 
                                key={tag}
                                className={`px-3 py-1 rounded-md border text-xs font-bold tracking-wider relative overflow-hidden ${colorClass}`}
                              >
                                <div className={`absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent to-transparent group-hover:animate-[shimmer_2s_infinite] ${shimmerClass}`}></div>
                                <span className="relative z-10">{tag}</span>
                              </span>
                            );
                          })}
                        </div>
                        
                        <button 
                          className="flex items-center gap-2 text-[#22D3EE] font-bold text-sm hover:gap-3 transition-all w-fit group/btn"
                        >
                          {lang === 'EN' ? 'View Details' : 'Xem chi tiết'}
                          <span className="material-symbols-outlined text-base group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Render Modal */}
      <UseCaseModal 
        isOpen={!!selectedCase} 
        onClose={() => setSelectedCase(null)} 
        useCase={selectedCase} 
      />
    </section>
  );
}

