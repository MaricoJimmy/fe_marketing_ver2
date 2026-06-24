"use client";
import React, { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useRouter, useParams } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import HoverFillButton from '@/components/ui/HoverFillButton';
import AnimatedBackground from '@/components/AnimatedBackground';
import DataFlowLinesBG from '@/components/backgrounds/DataFlowLinesBG';
import NeuralPatternsBG from '@/components/backgrounds/NeuralPatternsBG';
import GridSystemBG from '@/components/backgrounds/GridSystemBG';
import MacbookScroll from '@/components/MacbookScroll';
import HeroSection from '@/components/HeroSection';
import TrustedBy from '@/components/TrustedBy';
import ProductFeaturesSlider from '@/components/ProductFeaturesSlider';

const PRODUCT_DATA = {
  VI: {
    uboard: {
      title: '<span class="whitespace-nowrap">Giám sát & Tối ưu</span><br />vận hành nhà máy bằng <span class="bg-gradient-to-r from-[#22D3EE] to-[#10F0CB] bg-clip-text text-transparent">AIoT</span>',
      subtitle: "Hợp nhất dữ liệu đa nguồn vào một nền tảng trực quan, giúp quản lý toàn diện hiệu suất, năng lượng và thiết bị. Đảm bảo vận hành ổn định, tối ưu chi phí và tạo đà cho chuyển đổi số xanh.",
      videoPlaceholder: "UBOARD INTERACTIVE 3D/VIDEO PLACEHOLDER",
      features: [
        {
          title: "Quản lý tập trung",
          description: "Uboard cho phép quản lý mọi thiết bị, tại mọi khu vực, chỉ trên một nền tảng duy nhất giúp quản lý dễ dàng mà không cần di chuyển.",
          image: "/image/uboard/central-monitor.webp"
        },
        {
          title: "Báo cáo AI",
          description: "Xuất báo cáo PDF/Excel định kỳ, AI hỗ trợ giải đáp các vấn đề từ dữ liệu báo cáo.",
          image: "/image/uboard/report-features.webp"
        },
        {
          title: "Thu thập và phân tích dữ liệu thời gian thực",
          description: "Bằng việc giám sát liên tục các hoạt động, Uboard giúp bạn phát hiện sớm các vấn đề tiềm ẩn và đưa ra các giải pháp kịp thời.",
          image: "/image/uboard/data-collect.webp"
        },
        {
          title: "Phân quyền theo vai trò",
          description: "Vai trò rõ ràng, dữ liệu tách biệt, đảm bảo bảo mật và kiểm soát chặt chẽ.",
          image: "/image/uboard/authorization.webp"
        },
        {
          title: "Cảnh báo thông minh theo KPI",
          description: "Thiết lập ngưỡng cảnh báo, phát hiện sớm bất thường, cảnh báo tức thì.",
          image: "/image/uboard/smart-warning.webp"
        },
        {
          title: "Bảo mật tuyệt đối",
          description: "Lưu trữ cloud ổn định & bảo mật. Truy cập mọi nơi, hỗ trợ cloud riêng, lưu 30 ngày khi mất kết nối.",
          image: "/image/uboard/data-security.webp"
        }
      ],
      useCases: [
        {
          title: "Ứng dụng trong giám sát vận hành điện mặt trời mái nhà",
          description: "Với hệ thống giám sát thông minh của Udata, nhà đầu tư và đơn vị vận hành có thể chủ động quản lý hệ thống điện mặt trời mái nhà một cách hiệu quả. Đem lại các lợi ích: Tăng sản lượng điện phát từ 2-5%; Cắt giảm chi phí bảo trì, giảm tổn thất sản lượng do sự cố âm thầm",
          image: "/image/uboard/Uboard-1.webp",
          icon: "solar_power",
          reverse: true
        },
        {
          title: "Ứng dụng trong thang máy, giám sát vận hành máy móc",
          description: "Với hệ thống giám sát thông minh của Udata, nhà sản xuất và đơn vị bảo trì có thể chủ động theo dõi, phát hiện sớm bất thường và tối ưu hiệu quả bảo trì thang máy một cách toàn diện. Đem lại các lợi ích: Giảm 25% thời gian bảo trì định kỳ; Nâng cao hiệu quả của kỹ thuật viên; Tối ưu chi phí bảo trì & nhân sự kỹ thuật",
          image: "/image/uboard/Uboard-2.webp",
          icon: "elevator",
          reverse: false
        },
        {
          title: "Ứng dụng trong quản lý hiệu suất và bảo dưỡng máy (OEE)",
          description: "Phân tích dữ liệu hoạt động sản xuất dựa trên những dữ liệu thu thập được nhằm đưa ra các báo cáo, cảnh báo giúp nhà máy kịp thời đưa ra các quyết định chính xác. Đem lại các lợi ích: Tính chi phí sản xuất chính xác theo từng ca/máy/sản phẩm; Tăng 20 - 25% hiệu suất sử dụng thiết bị (OEE); Tối ưu kế hoạch sản xuất và bảo trì.",
          image: "/image/uboard/Uboard-3.webp",
          icon: "precision_manufacturing",
          reverse: true
        },
        {
          title: "Ứng dụng trong quản lý năng lượng thông minh (EMS)",
          description: "Theo dõi, phân tích và tối ưu dữ liệu tiêu thụ từ các nguồn năng lượng như điện, khí, nhiệt, nước... giúp doanh nghiệp giảm chi phí, nâng cao hiệu suất và hướng đến vận hành bền vững. Đem lại các lợi ích: Tiết kiệm 4–15% năng lượng ngay năm đầu triển khai; Tăng ROI cho thiết bị, kéo dài tuổi thọ, giảm lỗi hệ thống; Quản trị năng lượng hiệu quả và chủ động.",
          image: "/image/uboard/Uboard-4.webp",
          icon: "energy_savings_leaf",
          reverse: false
        }
      ],
      comparison: {
        title: "Sự khác biệt mang tên Uboard",
        subtitle: "Đơn giản hóa dữ liệu vận hành. Tối ưu hóa hiệu suất.",
        items: [
          { old: "Hệ thống rời rạc, khó đồng bộ", new: "Nền tảng quản trị hợp nhất" },
          { old: "Cảnh báo bị động, phản hồi chậm", new: "Phân tích dự đoán & cảnh báo sớm" },
          { old: "Lập báo cáo thủ công, mất thời gian", new: "Báo cáo tự động & cập nhật thời gian thực" },
          { old: "Dữ liệu phân mảnh (Silo data)", new: "Trung tâm dữ liệu đồng nhất (Unified Data Hub)" }
        ]
      }
    },
    ugate: {
      title: '<span class="bg-gradient-to-r from-[#22D3EE] to-[#10F0CB] bg-clip-text text-transparent">Lớp AI trung tâm</span> kết nối và phân tích dữ liệu vận hành doanh nghiệp',
      subtitle: "Kết nối dữ liệu từ nhiều hệ thống vào một lớp AI trung tâm, giúp quan sát toàn diện dòng chảy vận hành, phân tích vấn đề thời gian thực và ra quyết định chính xác.",
      videoPlaceholder: "UGATE INTERACTIVE 3D/VIDEO PLACEHOLDER",
      features: [
        {
          title: "Hỏi đáp với AI",
          description: "Chụp ảnh lỗi thiết bị, AI đọc mã lỗi & cung cấp quy trình xử lý sự cố chuẩn hóa.",
          image: "/image/Ugate/AI-chat.webp"
        },
        {
          title: "Kho tri thức chung",
          description: "Quản lý tri thức tổ chức: lưu giữ kinh nghiệm xử lý sự cố, biến thành “kho tri thức chung” cho toàn công ty.",
          image: "/image/Ugate/knowledge.webp"
        },
        {
          title: "Quét mã vạch/serial",
          description: "AI quét mã vạch để đối chiếu, đảm bảo linh kiện chính hãng, giảm rủi ro hàng giả.",
          image: "/image/Ugate/qr.webp"
        },
        {
          title: "Phân quyền theo vai trò",
          description: "Vai trò rõ ràng, dữ liệu tách biệt, đảm bảo bảo mật và kiểm soát chặt chẽ.",
          image: "/image/Ugate/authorization.webp"
        },
        {
          title: "Lên kế hoạch sửa chữa và bảo trì",
          description: "Tự động phân tích dữ liệu thiết bị để đề xuất lịch bảo trì tối ưu, giúp giảm sự cố và kéo dài tuổi thọ vận hành.",
          image: "/image/Ugate/fixing.webp"
        },
        {
          title: "Quản lý tài nguyên",
          description: "Quản lý danh mục thiết bị, phụ tùng, nhà cung cấp và danh sách phân bổ.",
          image: "/image/Ugate/resources-management.webp"
        }
      ],
      useCases: [
        {
          title: "Ứng dụng trong Trợ lý AI cho vận hành & quản lý tri thức kỹ thuật",
          description: "Giúp doanh nghiệp tập trung dữ liệu vận hành, tiêu chuẩn hóa quy trình làm việc và quản trị tri thức để mọi đội nhóm phối hợp hiệu quả. Đem lại các lợi ích: Tập trung dữ liệu & vận hành; Rút ngắn 50% thời gian xử lý yêu cầu; Bảo toàn & tái sử dụng tri thức.",
          image: "/image/Ugate/Ugate-1.webp",
          icon: "smart_toy",
          reverse: true
        },
        {
          title: "Ứng dụng trong Trợ lý AI hội thoại & xác minh sản phẩm",
          description: "Giúp kỹ sư, quản lý và doanh nghiệp tra cứu tri thức tức thì, xác minh thiết bị chính hãng và minh bạch CO/CQ để giảm rủi ro và nâng cao hiệu quả. Đem lại các lợi ích: Giảm 90% thời gian tra cứu & xác minh; Đảm bảo thiết bị chính hãng, giảm rủi ro hàng giả; Rút ngắn 50% thời gian xử lý sự cố, hỗ trợ kỹ sư mới nhanh chóng thành thạo.",
          image: "/image/Ugate/Ugate-2.webp",
          icon: "verified_user",
          reverse: false
        }
      ]
    },
    uzero: {
      title: '<span class="bg-gradient-to-r from-[#22D3EE] to-[#10F0CB] bg-clip-text text-transparent">Quản trị carbon</span> và dữ liệu phát thải bằng nền tảng thông minh',
      subtitle: "Quản trị dữ liệu carbon có hệ thống: tự động thu thập, tính toán, trực quan hóa và báo cáo phát thải. Cung cấp cơ sở dữ liệu minh bạch giúp ban lãnh đạo đưa ra quyết định phát triển bền vững dài hạn.",
      videoPlaceholder: "UZERO INTERACTIVE 3D/VIDEO PLACEHOLDER",
      features: [
        {
          title: "Tính toán tự động",
          description: "Tự động lấy dữ liệu công tơ điện để tính phát thải gián tiếp (Scope 2).",
          image: "/image/uzero/auto-calculate.webp"
        },
        {
          title: "Báo cáo tự động",
          description: "Tự động xuất báo cáo theo ISO 14064, GHG Protocol, CDP, CBAM.",
          image: "/image/uzero/auto-report.webp"
        },
        {
          title: "Thu thập dữ liệu từ nhiều nguồn",
          description: "Nhập dữ liệu đa dạng hình thức: trực tiếp, tải lên file excel, API,...",
          image: "/image/uzero/data-collect.webp"
        },
        {
          title: "Tóm tắt phát thải",
          description: "So sánh, tính phát thải theo sản phẩm, đơn vị, sản lượng thực tế.",
          image:"/image/uzero/header-uzero.webp"
        },
        {
          title: "Tính toán cho toàn bộ chi nhánh",
          description: "Tính toán và quản lý phát thải cho tất cả các chi nhánh của doanh nghiệp.",
          image: "/image/uzero/calculate-all-sites.webp"
        },
        {
          title: "Hiển thị thông số trực quan",
          description: "Hiển thị các thông số và dữ liệu phát thải qua biểu đồ, dashboard dễ hiểu.",
          image: "/image/uzero/param-display.webp"
        }
      ],
      useCases: [
        {
          title: "Ứng dụng trong Quản lý phát thải khí nhà kính (GHG)",
          description: "Đo lường, trực quan hóa và quản lý phát thải khí nhà kính theo Phạm vi 1, 2 và 3, giúp doanh nghiệp tuân thủ các tiêu chuẩn ESG và nâng cao hiệu quả bền vững. Đem lại các lợi ích: Đảm bảo độ chính xác báo cáo và sẵn sàng kiểm toán để tuân thủ ESG; Giảm đến 80% thời gian so với phương pháp thủ công; Xác định nguồn phát thải chính để xây dựng chiến lược giảm thiểu hiệu quả",
          image: "/image/uzero/Uzero.webp",
          icon: "eco",
          reverse: true
        }
      ]
    },
    miniugate: {
      title: "MiniUgate",
      subtitle: "Phiên bản thu gọn, chi phí thấp, tối ưu cho các trạm quan trắc nhỏ.",
      videoPlaceholder: "MINI UGATE INTERACTIVE 3D/VIDEO PLACEHOLDER"
    }
  },
  EN: {
    uboard: {
      title: '<span class="bg-gradient-to-r from-[#22D3EE] to-[#10F0CB] bg-clip-text text-transparent">AIoT-powered</span> Factory Operation<br /><span class="whitespace-nowrap">Monitoring & Optimization</span>',
      subtitle: "Consolidate multi-source data into an intuitive platform for comprehensive management of performance, energy, and equipment. Ensure stable operations, optimize costs, and pave the way for green digital transformation.",
      videoPlaceholder: "UBOARD INTERACTIVE 3D/VIDEO PLACEHOLDER",
      features: [
        {
          title: "Centralized Management",
          description: "Uboard allows you to manage all devices across all areas on a single platform, making management easy without moving.",
          image: "/image/uboard/central-monitor.webp"
        },
        {
          title: "AI Reporting",
          description: "Export periodic PDF/Excel reports, with AI supporting answers to issues from report data.",
          image: "/image/uboard/report-features.webp"
        },
        {
          title: "Real-time Data Collection",
          description: "By continuously monitoring operations, Uboard helps you detect potential issues early and provide timely solutions.",
          image: "/image/uboard/data-collect.webp"
        },
        {
          title: "Role-based Access",
          description: "Clear roles, separate data, ensuring security and strict control.",
          image: "/image/uboard/authorization.webp"
        },
        {
          title: "Smart KPI Alerts",
          description: "Set alert thresholds, early detect anomalies, and issue instant warnings.",
          image: "/image/uboard/smart-warning.webp"
        },
        {
          title: "Absolute Security",
          description: "Stable & secure cloud storage. Access anywhere, private cloud support, saves for 30 days offline.",
          image: "/image/uboard/data-security.webp"
        }
      ],
      useCases: [
        {
          title: "Rooftop Solar Operation Monitoring",
          description: "With Udata's smart monitoring, investors can proactively manage solar systems efficiently. Benefits: Increase power output by 2-5%; Reduce maintenance costs and production loss.",
          image: "/image/uboard/Uboard-1.webp",
          icon: "solar_power",
          reverse: true
        },
        {
          title: "Elevator & Machinery Monitoring",
          description: "Proactively track, early detect anomalies, and optimize elevator maintenance. Benefits: Reduce periodic maintenance time by 25%; Improve technician efficiency; Optimize costs.",
          image: "/image/uboard/Uboard-2.webp",
          icon: "elevator",
          reverse: false
        },
        {
          title: "Overall Equipment Effectiveness (OEE)",
          description: "Analyze production data to issue reports/warnings, helping factories make accurate decisions. Benefits: Calculate precise costs; Increase OEE by 20-25%; Optimize plans.",
          image: "/image/uboard/Uboard-3.webp",
          icon: "precision_manufacturing",
          reverse: true
        },
        {
          title: "Energy Management System (EMS)",
          description: "Track, analyze, and optimize energy consumption (electricity, gas, heat, water). Benefits: Save 4-15% energy in the first year; Increase ROI; Proactive energy governance.",
          image: "/image/uboard/Uboard-4.webp",
          icon: "energy_savings_leaf",
          reverse: false
        }
      ],
      comparison: {
        title: "The Uboard Difference",
        subtitle: "Simplify operational data. Optimize performance.",
        items: [
          { old: "Multiple systems", new: "Single platform" },
          { old: "Reactive alerts", new: "Predictive insights" },
          { old: "Manual reporting", new: "Automated analytics" },
          { old: "Data silos", new: "Unified data hub" }
        ]
      }
    },
    ugate: {
      title: '<span class="bg-gradient-to-r from-[#22D3EE] to-[#10F0CB] bg-clip-text text-transparent">Central AI Layer</span> for Connecting & Analyzing Enterprise Operational Data',
      subtitle: "Connect data from multiple systems into a central AI layer to comprehensively observe operational workflows, analyze issues in real-time, and make accurate data-driven decisions.",
      videoPlaceholder: "UGATE INTERACTIVE 3D/VIDEO PLACEHOLDER",
      features: [
        {
          title: "Q&A with AI",
          description: "Take pictures of device errors, AI reads error codes & provides standardized troubleshooting.",
          image: "/image/Ugate/AI-chat.webp"
        },
        {
          title: "Shared Knowledge Base",
          description: "Manage organizational knowledge: store troubleshooting experience into a shared database.",
          image: "/image/Ugate/knowledge.webp"
        },
        {
          title: "Barcode/Serial Scanning",
          description: "AI scans barcodes for verification, ensuring genuine parts and reducing counterfeit risks.",
          image: "/image/Ugate/qr.webp"
        },
        {
          title: "Role-based Access",
          description: "Clear roles, separate data, ensuring security and strict control.",
          image: "/image/Ugate/authorization.webp"
        },
        {
          title: "Maintenance Planning",
          description: "Automatically analyze device data to propose optimal maintenance schedules.",
          image: "/image/Ugate/fixing.webp"
        },
        {
          title: "Resource Management",
          description: "Manage equipment catalog, spare parts, suppliers, and allocation lists.",
          image: "/image/Ugate/resources-management.webp"
        }
      ],
      useCases: [
        {
          title: "AI Assistant for Operations & Knowledge",
          description: "Help businesses centralize data, standardize workflows, and manage knowledge. Benefits: Centralized data; Reduce request processing time by 50%; Preserve knowledge.",
          image: "/image/Ugate/Ugate-1.webp",
          icon: "smart_toy",
          reverse: true
        },
        {
          title: "Conversational AI & Product Verification",
          description: "Lookup knowledge instantly, verify genuine equipment to reduce risks. Benefits: Reduce lookup time by 90%; Ensure genuine parts; Reduce troubleshooting time by 50%.",
          image: "/image/Ugate/Ugate-2.webp",
          icon: "verified_user",
          reverse: false
        }
      ]
    },
    uzero: {
      title: '<span class="bg-gradient-to-r from-[#22D3EE] to-[#10F0CB] bg-clip-text text-transparent">Carbon & Emission Data</span> Management via an Intelligent Platform',
      subtitle: "Systematically manage carbon data: automatically collect, calculate, visualize, and report emissions. Provide a transparent database to help leadership make long-term sustainable development decisions.",
      videoPlaceholder: "UZERO INTERACTIVE 3D/VIDEO PLACEHOLDER",
      features: [
        {
          title: "Automated Calculation",
          description: "Automatically fetch power meter data to calculate indirect emissions (Scope 2).",
          image: "/image/uzero/auto-calculate.webp"
        },
        {
          title: "Automated Reporting",
          description: "Automatically export reports according to ISO 14064, GHG Protocol, CDP, CBAM.",
          image: "/image/uzero/auto-report.webp"
        },
        {
          title: "Multi-source Data Collection",
          description: "Import data in various ways: direct, Excel upload, API, etc.",
          image: "/image/uzero/data-collect.webp"
        },
        {
          title: "Emission Summary",
          description: "Compare and calculate emissions by product, unit, and actual output.",
          image:"/image/uzero/header-uzero.webp"
        },
        {
          title: "All-Branch Calculation",
          description: "Calculate and manage emissions for all branches of the enterprise.",
          image: "/image/uzero/calculate-all-sites.webp"
        },
        {
          title: "Visual Parameters",
          description: "Display emission data and parameters via easy-to-understand charts and dashboards.",
          image: "/image/uzero/param-display.webp"
        }
      ],
      useCases: [
        {
          title: "Greenhouse Gas (GHG) Emission Management",
          description: "Measure, visualize, and manage Scope 1, 2, and 3 emissions to comply with ESG. Benefits: Ensure report accuracy for ESG compliance; Reduce time by 80%; Identify main sources.",
          image: "/image/uzero/Uzero.webp",
          icon: "eco",
          reverse: true
        }
      ]
    },
    miniugate: {
      title: "MiniUgate",
      subtitle: "A compact, low-cost version optimized for small monitoring stations.",
      videoPlaceholder: "MINI UGATE INTERACTIVE 3D/VIDEO PLACEHOLDER"
    }
  }
};
  
const UseCaseBlock = ({ useCase }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const { lang } = useLanguage();
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref}
      className={`flex flex-col md:flex-row gap-12 lg:gap-24 items-center overflow-hidden ${useCase.reverse ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Image Side */}
      <div 
        className="w-full md:w-1/2 transition-all duration-[1000ms] ease-out"
        style={{ 
          transform: isVisible ? 'translateX(0)' : `translateX(${useCase.reverse ? '100px' : '-100px'})`, 
          opacity: isVisible ? 1 : 0,
          transitionDelay: '100ms'
        }}
      >
        <div className="rounded-[40px] border border-white/10 bg-[#161618] p-3 shadow-2xl relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-electric-cyan/0 to-electric-cyan/5 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          <div className="rounded-[32px] overflow-hidden border border-white/5 bg-black">
            <img src={useCase.image} alt={useCase.title} className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </div>

      {/* Text Side */}
      <div 
        className="w-full md:w-1/2 space-y-8 transition-all duration-[1000ms] ease-out"
        style={{ 
          transform: isVisible ? 'translateX(0)' : `translateX(${useCase.reverse ? '-100px' : '100px'})`, 
          opacity: isVisible ? 1 : 0,
          transitionDelay: '300ms'
        }}
      >
        <div className="w-16 h-16 rounded-2xl bg-[#1A1A1D] border border-white/5 flex items-center justify-center shadow-lg">
          <span className="material-symbols-outlined text-3xl text-electric-cyan">{useCase.icon}</span>
        </div>
        <h2 className="text-white font-display-md text-3xl lg:text-4xl leading-tight font-bold">
          {useCase.title}
        </h2>
        <p className="text-on-surface-variant font-body-md text-base lg:text-lg leading-relaxed">
          {useCase.description}
        </p>
        
        {/* Learn More Button */}
        <button 
          onClick={() => {
            if (useCase.title.includes('OEE')) {
               router.push('/blog/oee-use-case');
            } else if (useCase.title.includes('EMS')) {
               router.push('/blog/ems-use-case');
            } else if (useCase.title.includes('điện mặt trời') || useCase.title.includes('Solar')) {
               router.push('/blog/solar-use-case');
            } else if (useCase.title.includes('thang máy') || useCase.title.includes('Elevator')) {
               router.push('/blog/elevator-use-case');
            } else if (useCase.title.includes('tri thức') || useCase.title.includes('Knowledge')) {
               router.push('/blog/ugate-ai-knowledge-use-case');
            } else if (useCase.title.includes('xác minh') || useCase.title.includes('Verification')) {
               router.push('/blog/ugate-ai-verification-use-case');
            } else if (useCase.title.includes('GHG') || useCase.title.includes('phát thải')) {
               router.push('/blog/uzero-ghg-use-case');
            } else {
               router.push('/use-case#usecase-grid');
            }
          }}
          className="flex items-center gap-2 text-electric-cyan font-bold text-lg hover:text-[#10F0CB] transition-colors group pt-2"
        >
          {lang === 'EN' ? 'Learn more' : 'Tìm hiểu thêm'}
          <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default function ProductPage() {
  const { t, lang } = useLanguage();
  const { id } = useParams();
  const router = useRouter();
  const product = PRODUCT_DATA[lang]?.[id?.toLowerCase()];

  const [isLoaded, setIsLoaded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const featuresRef = useRef(null);
  const [featuresVisible, setFeaturesVisible] = useState(false);

  useEffect(() => {
    if (product) {
      const plainTitle = product.title.replace(/<br\s*\/?>/gi, ' ').replace(/<[^>]+>/g, '');
      document.title = `${plainTitle} | Udata`;
    }
    // Trigger hero animations slightly after mount
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, [id, product]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setFeaturesVisible(true);
      },
      { threshold: 0.1 }
    );
    if (featuresRef.current) observer.observe(featuresRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // Always scroll to top when opening product page
    setIsLoaded(false); // Reset animation state on route change
    setFeaturesVisible(false);
  }, [id]);

  if (!product) {
    return <Navigate to="/" />;
  }

  const renderBackground = () => {
    switch (id) {
      case 'uboard': return <DataFlowLinesBG />;
      case 'ugate': return <NeuralPatternsBG />;
      case 'uzero': return <GridSystemBG />;
      default: return <AnimatedBackground />;
    }
  };

  return (
    <>
      {(['uboard', 'ugate', 'uzero'].includes(id?.toLowerCase())) && (
        <section className="relative pt-32 pb-20 px-4 md:px-margin-desktop min-h-[90vh] flex flex-col justify-center">
          {/* Video Background Layer */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center -mt-16">
            <video 
              autoPlay
              src={id?.toLowerCase() === 'uboard' ? "/videos/hero Uboard.mp4" : id?.toLowerCase() === 'ugate' ? "/videos/ugateplatform.mp4" : "/videos/uzeroplatform.mp4"}
              loop
              muted 
              playsInline
              className="absolute w-[85%] h-[95%] rounded-3xl object-cover opacity-70 shadow-2xl blur-sm"
            />
            {/* Watermark hider overlay for Uzero */}
            {id?.toLowerCase() === 'uzero' && (
              <div 
                className="absolute w-[85%] h-[95%] rounded-3xl pointer-events-none z-[5]" 
                style={{
                  background: 'radial-gradient(ellipse at center, transparent 40%, rgba(6, 16, 31, 1) 100%)',
                  boxShadow: 'inset 0 0 120px 60px rgba(6, 16, 31, 1)'
                }}
              />
            )}
            <div className="absolute inset-0 bg-background/30 z-10" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 blur-[120px] rounded-full opacity-50 z-20"></div>
          </div>

          <div className="max-w-[1440px] w-full mx-auto text-center relative z-10 -mt-16">
            <div className="max-w-[1200px] mx-auto space-y-md flex flex-col items-center w-full px-4">
              <div 
                className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/10 backdrop-blur-md transition-all duration-1000 ease-out mb-6"
                style={{ transform: isLoaded ? 'translateY(0)' : 'translateY(40px)', opacity: isLoaded ? 1 : 0 }}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#22D3EE] shadow-[0_0_12px_#22D3EE] animate-pulse"></span>
                <span className="text-[#22D3EE] font-title-md font-bold text-base md:text-lg tracking-[0.2em] uppercase">
                  {id}
                </span>
              </div>

              <h1 
                className="font-display-lg text-[24px] sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.3] md:leading-[1.2] drop-shadow-lg text-center w-full transition-all duration-1000 ease-out"
                style={{ transform: isLoaded ? 'translateY(0)' : 'translateY(40px)', opacity: isLoaded ? 1 : 0 }}
                dangerouslySetInnerHTML={{ __html: product.title }}
              />

              <p 
                className="font-body-md text-lg md:text-xl text-white/70 w-full mx-auto drop-shadow-md mt-6 text-center transition-all duration-1000 ease-out"
                style={{ transform: isLoaded ? 'translateY(0)' : 'translateY(40px)', opacity: isLoaded ? 1 : 0, transitionDelay: '150ms' }}
              >
                {product.subtitle}
              </p>

              <div 
                className="flex flex-wrap justify-center items-center gap-4 pt-8 transition-all duration-1000 ease-out"
                style={{ transform: isLoaded ? 'translateY(0)' : 'translateY(40px)', opacity: isLoaded ? 1 : 0, transitionDelay: '300ms' }}
              >
                <HoverFillButton 
                  onClick={() => { 
                    if (id?.toLowerCase() === 'ugate') {
                      window.location.href = 'https://ugate.udata.ai/vi/welcome'; 
                    } else {
                      router.push('/dung-thu');
                    }
                  }}
                  className="bg-gradient-to-r from-[#22D3EE] to-[#10F0CB] text-[#06101F] px-8 py-3.5 rounded-xl font-bold text-base shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all flex items-center gap-2"
                >
                  {lang === 'EN' ? `Get Demo ${id?.toLowerCase() === 'miniugate' ? 'MiniUgate' : id?.charAt(0).toUpperCase() + id?.slice(1).toLowerCase()}` : `Nhận Demo ${id?.toLowerCase() === 'miniugate' ? 'MiniUgate' : id?.charAt(0).toUpperCase() + id?.slice(1).toLowerCase()}`}
                  <span className="material-symbols-outlined text-sm font-bold">arrow_outward</span>
                </HoverFillButton>

                <HoverFillButton 
                  onClick={() => setShowVideo(true)}
                  rippleColor="bg-[#22D3EE]" 
                  className="border border-white/20 text-white px-8 py-3.5 rounded-xl font-bold text-base hover:bg-white/5 transition-all backdrop-blur-sm flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: '"FILL" 1' }}>play_arrow</span>
                  {lang === 'EN' ? 'Watch Demo' : 'Xem Demo'}
                </HoverFillButton>
              </div>
            </div>
          </div>
        </section>
      )}
      <div className={`relative ${(['uboard', 'ugate', 'uzero'].includes(id?.toLowerCase())) ? 'pt-0' : 'min-h-screen pt-32'} pb-20 px-4 md:px-margin-desktop bg-[#0A0A0A]`}>
        <div className={`transition-opacity duration-[1500ms] ${(['uboard', 'ugate', 'uzero'].includes(id?.toLowerCase())) ? (featuresVisible ? 'opacity-100' : 'opacity-0') : 'opacity-100'}`}>
          {renderBackground()}
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto text-center space-y-12">
          
          {!(id && ['uboard', 'ugate', 'uzero'].includes(id.toLowerCase())) && (
            <>
              {/* Headline section */}
              <div className="space-y-6 max-w-4xl mx-auto mt-10">
                <h1 
                  className="font-display-lg text-5xl md:text-[64px] font-bold text-white leading-tight tracking-tight transition-all duration-1000 ease-out"
                  style={{ transform: isLoaded ? 'translateY(0)' : 'translateY(40px)', opacity: isLoaded ? 1 : 0 }}
                >
                  {product.title}
                </h1>
                <p 
                  className="font-body-md text-xl md:text-2xl text-on-surface-variant leading-relaxed max-w-2xl mx-auto transition-all duration-1000 ease-out"
                  style={{ transform: isLoaded ? 'translateY(0)' : 'translateY(40px)', opacity: isLoaded ? 1 : 0, transitionDelay: '150ms' }}
                >
                  {product.subtitle}
                </p>
              </div>

              <div 
                className="pt-4 transition-all duration-1000 ease-out"
                style={{ transform: isLoaded ? 'translateY(0)' : 'translateY(40px)', opacity: isLoaded ? 1 : 0, transitionDelay: '300ms' }}
              >
                <HoverFillButton 
                  onClick={() => { 
                    if (id?.toLowerCase() === 'ugate') {
                      window.location.href = 'https://ugate.udata.ai/vi/welcome'; 
                    } else {
                      router.push('/dung-thu');
                    }
                  }}
                  className="bg-gradient-to-r from-[#22D3EE] to-[#10F0CB] text-[#06101F] px-8 py-3.5 rounded-full font-title-md text-lg font-bold shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all flex mx-auto items-center gap-2"
                >
                  {lang === 'EN' ? 'Get A Demo' : 'Nhận bản Demo'}
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </HoverFillButton>
              </div>

              {/* Video / 3D Placeholder */}
              <div 
                className="mt-16 w-full max-w-[1280px] mx-auto aspect-video rounded-3xl overflow-hidden border border-white/10 bg-[#161618] relative shadow-2xl flex items-center justify-center group transition-all duration-[1200ms] ease-out"
                style={{ transform: isLoaded ? 'translateY(0) scale(1)' : 'translateY(60px) scale(0.95)', opacity: isLoaded ? 1 : 0, transitionDelay: '450ms' }}
              >
                {/* Subtle grid background for the placeholder */}
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                
                <div className="relative z-10 text-center space-y-4">
                  <span className="material-symbols-outlined text-6xl text-white/20 group-hover:text-electric-cyan/50 transition-colors">play_circle</span>
                  <p className="text-white/40 font-medium tracking-widest uppercase text-sm">
                    {product.videoPlaceholder}
                  </p>
                </div>
              </div>
            </>
          )}
          
          <div className="w-[100vw] relative left-1/2 -translate-x-1/2 -mt-12 mb-12">
            <TrustedBy customStats={id?.toLowerCase() === 'ugate' ? [
              { value: "500+", labelKey: "trusted.stat1.label" },
              { value: "60-80%", label: lang === 'EN' ? "Less Manual Reporting" : "Giảm báo cáo thủ công" },
              { value: "3x", label: lang === 'EN' ? "Faster Operational Response" : "Phản hồi vận hành nhanh hơn" },
              { value: "6 weeks", label: lang === 'EN' ? "Quick Deploy + Full Integration" : "Triển khai nhanh + Tích hợp toàn diện" }
            ] : null} />
          </div>

        {/* Features Section */}
        {product.features && product.features.length > 0 && (
          <div ref={featuresRef}>
            <ProductFeaturesSlider features={product.features} />
          </div>
        )}

        {/* Use Cases Section (Zig-zag layout) */}
        {product.useCases && product.useCases.length > 0 && (
          <div className="mt-12 md:mt-16 max-w-[1280px] mx-auto text-left space-y-24 md:space-y-32 pb-24">
            {product.useCases.map((useCase, idx) => (
              <UseCaseBlock key={idx} useCase={useCase} />
            ))}
          </div>
        )}

        {/* Comparison Section */}
        {product.comparison && (
          <div className="max-w-[1000px] mx-auto text-center mt-12 mb-32 px-4">
            <h2 className="text-3xl md:text-5xl font-display-md font-bold text-white mb-4">
              {product.comparison.title}
            </h2>
            <p className="text-on-surface-variant font-body-md text-lg md:text-xl mb-12">
              {product.comparison.subtitle}
            </p>
            
            <div className="bg-[#161618] border border-white/10 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative">
              <div className="absolute inset-0 bg-gradient-to-b from-electric-cyan/5 to-transparent pointer-events-none"></div>
              <table className="w-full text-left border-collapse relative z-10">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-8 px-6 md:px-12 w-1/2 text-white/50 font-display-md text-xl font-medium">
                      {lang === 'EN' ? 'Traditional Monitoring' : 'Giám sát truyền thống'}
                    </th>
                    <th className="py-8 px-6 md:px-12 w-1/2 text-electric-cyan font-display-md text-2xl font-bold bg-[#1C2128]">
                      Uboard
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {product.comparison.items.map((item, idx) => (
                    <tr key={idx} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors group">
                      <td className="py-6 px-6 md:px-12 text-white/70 font-body-md text-base md:text-lg">
                        {item.old}
                      </td>
                      <td className="py-6 px-6 md:px-12 text-white font-body-md text-base md:text-lg font-medium bg-[#1C2128]/50 group-hover:bg-electric-cyan/10 transition-colors">
                        <span className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-electric-cyan text-base">check_circle</span>
                          {item.new}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* CTA Section */}
        {['uboard', 'ugate', 'uzero'].includes(id?.toLowerCase()) && (() => {
          const ctaContent = {
            uboard: {
              heading: lang === 'EN' 
                ? "Ready to bring your factory operational data into a unified platform?" 
                : "Sẵn sàng đưa dữ liệu vận hành nhà máy vào một nền tảng thống nhất?",
              desc: lang === 'EN'
                ? "Let Udata help you evaluate your current data status, identify key monitoring points, and build a Uboard deployment roadmap tailored to your business operations."
                : "Hãy cùng Udata đánh giá hiện trạng dữ liệu, xác định các điểm cần giám sát và xây dựng lộ trình triển khai Uboard phù hợp với mô hình vận hành của doanh nghiệp."
            },
            ugate: {
              heading: lang === 'EN'
                ? "Ready to build a central operational intelligence layer for your enterprise?"
                : "Sẵn sàng xây dựng lớp trí tuệ vận hành trung tâm cho doanh nghiệp?",
              desc: lang === 'EN'
                ? "Let Udata help you evaluate your current data status, identify systems to connect, and build a Ugate deployment roadmap tailored to your business operations."
                : "Hãy cùng Udata đánh giá hiện trạng dữ liệu, xác định các hệ thống cần kết nối và xây dựng lộ trình triển khai Ugate phù hợp với mô hình vận hành của doanh nghiệp."
            },
            uzero: {
              heading: lang === 'EN'
                ? "Ready to build a carbon data platform for your enterprise?"
                : "Sẵn sàng xây dựng nền tảng dữ liệu carbon cho doanh nghiệp?",
              desc: lang === 'EN'
                ? "Let Udata help you evaluate your current emission data status, identify data sources to connect, and build a Uzero deployment roadmap tailored to your ESG, carbon, and sustainability goals."
                : "Hãy cùng Udata đánh giá hiện trạng dữ liệu phát thải, xác định các nguồn dữ liệu cần kết nối và xây dựng lộ trình triển khai Uzero phù hợp với mục tiêu ESG, carbon và phát triển bền vững của doanh nghiệp."
            }
          };

          const content = ctaContent[id?.toLowerCase()];

          return (
            <div className="px-4 md:px-8 max-w-[1440px] mx-auto mt-20 mb-32">
              <div className="relative w-full rounded-[2.5rem] overflow-hidden border border-[#22D3EE]/20 glass-card bg-[#0A0E14]/60 backdrop-blur-2xl shadow-[0_0_80px_rgba(34,211,238,0.05)] py-16 px-6 sm:px-12 md:py-24 md:px-20 text-center group">
                {/* Animated Conic Gradient Background */}
                <div className="absolute inset-0 opacity-30 transition-opacity duration-1000 group-hover:opacity-50">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[200%] md:w-[200%] bg-[conic-gradient(from_0deg,transparent_0_340deg,#22D3EE_360deg)] md:animate-[spin_8s_linear_infinite] opacity-20"></div>
                </div>
                
                {/* Aesthetic Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]"></div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E14] via-[#0A0E14]/80 to-transparent"></div>
                
                <div className="relative z-10 flex flex-col items-center">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display-md font-bold text-white leading-tight max-w-3xl mx-auto drop-shadow-lg text-balance mb-4">
                    {content.heading}
                  </h2>
                  <p className="text-[#9CA3AF] text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-8 text-balance">
                    {content.desc}
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 w-full sm:w-auto">
                    <HoverFillButton 
                      onClick={() => { 
                        if (id?.toLowerCase() === 'ugate') {
                          window.location.href = 'https://ugate.udata.ai/vi/welcome'; 
                        } else {
                          router.push('/dung-thu');
                        }
                      }}
                      className="w-full sm:w-auto bg-gradient-to-r from-[#22D3EE] to-[#10F0CB] text-[#06101F] px-6 py-3 rounded-2xl font-bold text-sm md:text-base shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all flex items-center justify-center gap-2 hover:scale-105"
                    >
                      <span>{lang === 'EN' ? `Get Demo ${id?.toLowerCase() === 'miniugate' ? 'MiniUgate' : id?.charAt(0).toUpperCase() + id?.slice(1).toLowerCase()}` : `Nhận Demo ${id?.toLowerCase() === 'miniugate' ? 'MiniUgate' : id?.charAt(0).toUpperCase() + id?.slice(1).toLowerCase()}`}</span>
                      <span className="material-symbols-outlined text-lg font-bold">arrow_outward</span>
                    </HoverFillButton>
                    
                    <HoverFillButton 
                      onClick={() => setShowVideo(true)}
                      rippleColor="bg-[#22D3EE]" 
                      className="w-full sm:w-auto border border-white/20 text-white px-6 py-3 rounded-2xl font-bold text-sm md:text-base hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center gap-2 hover:scale-105 bg-black/40"
                    >
                      <span className="material-symbols-outlined text-lg">play_arrow</span>
                      <span>{lang === 'EN' ? "Explore Solutions" : "Khám phá giải pháp"}</span>
                    </HoverFillButton>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </div>

    {/* ── Video Modal ─────────────────────────────────────── */}
    {showVideo && typeof document !== 'undefined' && createPortal(
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8"
        style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)' }}
        onClick={() => setShowVideo(false)}
      >
        <div
          className="relative w-full max-w-5xl rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.8)]"
          style={{ aspectRatio: '16/9' }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/60 hover:bg-black/80 border border-white/20 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
            onClick={() => setShowVideo(false)}
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
          <iframe
            src={id?.toLowerCase() === 'ugate' 
              ? "https://drive.google.com/file/d/1vaVtwZWJjp573ZTL2lbMKiyKamRNkWmm/preview" 
              : "https://drive.google.com/file/d/1JizagW76cMPBPTwKy4VvylVqiBlWxkiR/preview"}
            className="w-full h-full"
            allow="autoplay"
            allowFullScreen
          />
        </div>
      </div>,
      document.body
    )}
    </>
  );
}
