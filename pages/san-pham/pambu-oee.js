import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import PageSeoHead from "../../components/common/PageSeoHead";
import Title from "../../components/common/Title";
import OEELayout from "../../components/layout/OEELayout";
import FormDemo from "../../components/san-pham/FormDemo";
import HeroSection from "../../components/san-pham/HeroSection";
import HighLightFeature from "../../components/san-pham/HighLightFeature";
import NumberStatus from "../../components/san-pham/NumberStatus";
import Partner from "../../components/san-pham/Partner";
import Technologies from "../../components/san-pham/Technologies";
import VersionApp from "../../components/san-pham/VersionApp";
import { OEEDataPage } from "../../data/oee";

const OEELandingPage = () => {
  const [idQuestion, setIdQuestion] = useState(1);
  const [openQuestion, setOpenQuestion] = useState(false);

  const handleClickQuestion = (id) => {
    setIdQuestion(id);
    if (id === idQuestion) {
      setOpenQuestion(!openQuestion);
    } else {
      setOpenQuestion(true);
    }
  };

  const metaTagData = {
    title:
      "Pambu OEE - Giải Pháp Toàn Diện Về Quản Lý Hiệu Suất Và Bảo Dưỡng Máy",
    desc: "Pambu OEE là giải pháp toàn diện giúp doanh nghiệp quản lý hiệu quả máy móc, dây chuyền sản xuất. Hỗ trợ phân tích dữ liệu hoạt động sản xuất dựa trên những dữ liệu Pambu OEE thu thập được nhằm đưa ra các báo cáo, cảnh báo giúp khách hàng kịp thời đưa ra các quyết định chính xác.",
    img: "/image/oee/oee-page.png",
  };
  return (
    <>
      <PageSeoHead data={metaTagData} />
      <div className="">
        <HeroSection data={OEEDataPage.heroSection} />
        <div className="w-full flex justify-center items-center">
          <div className="px-5 py-3 md:px-8 md:py-6 max-w-screen-xl w-full overflow-hidden md:overflow-visible">
            <Partner />
            <HighLightFeature data={OEEDataPage.features} />
          </div>
        </div>
        <NumberStatus data={OEEDataPage.status} className="bg-[#7BDEFF]" />
        <div className="w-full flex justify-center items-center">
          <div className="px-5 py-3 md:px-8 md:py-6 max-w-screen-xl w-full">
            <Technologies />
          </div>
        </div>
        <VersionApp
          data={OEEDataPage.versions.data}
          img={OEEDataPage.versions.img}
          className="bg-tertiary"
        />
        <div className="w-full flex justify-center items-center">
          <div className="px-5 py-3 md:px-8 md:py-6 max-w-screen-xl w-full">
            <div className="mt-16 md:mt-32">
              <Title label="Hỏi và đáp" className="mr-auto bg-yellow-primary" />
              <div className="mt-8 grid grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-5 w-full flex items-start justify-center">
                  <Image
                    src="/image/oee/question.png"
                    width="400"
                    height="360"
                    alt=""
                  />
                </div>
                <div className="col-span-12 lg:col-span-7">
                  <div
                    onClick={() => handleClickQuestion(1)}
                    className="pb-4 border-b border-gray/20 cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <h4
                        className={`${
                          (idQuestion === 1 &&
                            openQuestion &&
                            "text-secondary") ||
                          "text-gray"
                        } mr-2 text-xl text-gray font-semibold`}
                      >
                        OEE là gì ?
                      </h4>
                      <div>
                        <svg
                          className={`${
                            (idQuestion === 1 &&
                              openQuestion &&
                              "rotate-180") ||
                            "rotate-0"
                          }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.01247 7.51367L10.0132 12.513L15.0125 7.51224"
                            stroke="#2e2e2e"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      className={`${
                        (idQuestion === 1 &&
                          openQuestion &&
                          "translate-x-0 block") ||
                        "-translate-x-1/4 hidden"
                      } mt-4 text-gray/80 leading-8 font-medium`}
                    >
                      <span>
                        OEE là Overall Equipment Effectiveness hay Hiệu Suất
                        Tổng Thể Thiết Bị là thước đo hiệu quả hoạt động
                        (effectiveness) của một thiết bị ...
                      </span>
                      <Link href="/pambu-oee">
                        <a className="ml-2 text-blue-primary underline">
                          Xem chi tiết tại đây
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div
                    onClick={() => handleClickQuestion(2)}
                    className="py-4 border-b border-gray/20 cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <h4
                        className={`${
                          (idQuestion === 2 &&
                            openQuestion &&
                            "text-secondary") ||
                          "text-gray"
                        } mr-2 text-xl text-gray font-semibold`}
                      >
                        Tại sao cần sử dụng Pambu OEE ?
                      </h4>
                      <div>
                        <svg
                          className={`${
                            (idQuestion === 2 &&
                              openQuestion &&
                              "rotate-180") ||
                            "rotate-0"
                          }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.01247 7.51367L10.0132 12.513L15.0125 7.51224"
                            stroke="#2e2e2e"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      className={`${
                        (idQuestion === 2 &&
                          openQuestion &&
                          "translate-x-0 block") ||
                        "-translate-x-1/4 hidden"
                      } mt-4 text-gray/80 leading-8 font-medium`}
                    >
                      <span>
                        Những khó khăn mà phần lớn các nhà máy thường hay gặp
                        phải trong quá trình sản xuất:
                      </span>
                      <p>
                        - Dữ liệu được ghi thủ công, dễ bị nhầm lẫn do yếu tố
                        con người
                      </p>
                      <p>
                        - Muốn nâng cao hiệu quả làm việc của máy móc, dây
                        chuyền nhưng không biết bắt đầu từ đâu
                      </p>
                      <p>
                        - Cần có dữ liệu để phân tích tình hình hoạt động và
                        nguyên nhân gây ra sự cố máy móc
                      </p>
                      <p>
                        - Không đánh giá được rủi ro, sự cố có thể xảy ra trong
                        tương lai
                      </p>
                      <span>
                        Trước những khó khăn đó Pambu OEE sẽ giúp nhà máy giải
                        quyết các vấn đề khó khăn trên một cách dễ dàng và tiết
                        kiệm
                      </span>
                    </div>
                  </div>
                  <div
                    onClick={() => handleClickQuestion(3)}
                    className="py-4 border-b border-gray/20 cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <h4
                        className={`${
                          (idQuestion === 3 &&
                            openQuestion &&
                            "text-secondary") ||
                          "text-gray"
                        } mr-2 text-xl text-gray font-semibold`}
                      >
                        Chi phí lắp đặt bao gồm những gì ?
                      </h4>
                      <div>
                        <svg
                          className={`${
                            (idQuestion === 3 &&
                              openQuestion &&
                              "rotate-180") ||
                            "rotate-0"
                          }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.01247 7.51367L10.0132 12.513L15.0125 7.51224"
                            stroke="#2e2e2e"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      className={`${
                        (idQuestion === 3 &&
                          openQuestion &&
                          "translate-x-0 block") ||
                        "-translate-x-1/4 hidden"
                      } mt-4 text-gray/80 leading-8 font-medium`}
                    >
                      <span>Bao gồm lắp đặt phần cứng, phầm mềm:</span>
                      <p>
                        - Phần cứng được lựa chọn sản phẩm từ các tập đoàn lớn
                        như Mitsubishi, Siemens, Schneider,…{" "}
                      </p>
                      <p>
                        - Phần mềm được nghiên cứu phát triển và quá trình kiểm
                        tra kỹ lưỡng. Bên cạnh đó sau khi sử dụng sản phẩm Pambu
                        mỗi phiên bản mới đều sẽ tự động cập nhật miễn phí cho
                        người sử dụng.
                      </p>
                      <span>
                        Để biết thêm thông tin chi tiết vui lòng đặt lịch demo
                        <Link href="/dat-lich-demo">
                          <a className="ml-1 text-blue-primary underline">
                            tại đây
                          </a>
                        </Link>{" "}
                        hoặc gọi điện trực tiếp để được đội ngũ chuyên gia tư
                        vấn qua số hotline:{" "}
                        <a
                          href="tel:0387430957"
                          className="text-secondary underline"
                        >
                          0387 430 957
                        </a>
                      </span>
                    </div>
                  </div>
                  <div
                    onClick={() => handleClickQuestion(4)}
                    className="py-4 border-b border-gray/20 cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <h4
                        className={`${
                          (idQuestion === 4 &&
                            openQuestion &&
                            "text-secondary") ||
                          "text-gray"
                        } mr-2 text-xl text-gray font-semibold`}
                      >
                        Mạng lưới phân phối gồm những đâu ?
                      </h4>
                      <div>
                        <svg
                          className={`${
                            (idQuestion === 4 &&
                              openQuestion &&
                              "rotate-180") ||
                            "rotate-0"
                          }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.01247 7.51367L10.0132 12.513L15.0125 7.51224"
                            stroke="#2e2e2e"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      className={`${
                        (idQuestion === 4 &&
                          openQuestion &&
                          "translate-x-0 block") ||
                        "-translate-x-1/4 hidden"
                      } mt-4 text-gray/80 leading-8 font-medium`}
                    >
                      <span>
                        Mạng lưới phân phối khắp cả nước với hai trụ sở văn
                        phòng đặt tại Hà Nội và Hồ Chí Minh nhằm mục đích khách
                        hàng được hỗ trợ tốt nhất bằng đội ngũ chuyên viên của
                        Pambu
                      </span>
                    </div>
                  </div>
                  <div
                    onClick={() => handleClickQuestion(5)}
                    className="py-4 cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <h4
                        className={`${
                          (idQuestion === 5 &&
                            openQuestion &&
                            "text-secondary") ||
                          "text-gray"
                        } mr-2 text-xl text-gray font-semibold`}
                      >
                        Thông tin lưu trữ sẽ được trong bao lâu ?
                      </h4>
                      <div>
                        <svg
                          className={`${
                            (idQuestion === 5 &&
                              openQuestion &&
                              "rotate-180") ||
                            "rotate-0"
                          }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.01247 7.51367L10.0132 12.513L15.0125 7.51224"
                            stroke="#2e2e2e"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      className={`${
                        (idQuestion === 5 &&
                          openQuestion &&
                          "translate-x-0 block") ||
                        "-translate-x-1/4 hidden"
                      } mt-4 text-gray/80 leading-8 font-medium`}
                    >
                      <span>Ước tính khoảng 10 năm</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FormDemo />
      </div>
    </>
  );
};

export default OEELandingPage;

OEELandingPage.Layout = OEELayout;
