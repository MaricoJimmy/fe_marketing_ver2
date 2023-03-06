import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import PageSeoHead from "../../components/common/PageSeoHead";
import Title from "../../components/common/Title";
import PMSLayout from "../../components/layout/PMSLayout";
import FormDemo from "../../components/san-pham/FormDemo";
import HeroSection from "../../components/san-pham/HeroSection";
import HighLightFeature from "../../components/san-pham/HighLightFeature";
import NumberStatus from "../../components/san-pham/NumberStatus";
import Partner from "../../components/san-pham/Partner";
import Technologies from "../../components/san-pham/Technologies";
import VersionApp from "../../components/san-pham/VersionApp";
import { PMSDataPage } from "../../data/pms";

const PMSLandingPage = () => {
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
    title: "Giám Sát Năng Lượng Cùng Pambu PMS",
    desc: "Lãng phí tài nguyên là vết thương đang rỉ máu của doanh nghiệp. Pambu PMS là giải pháp toàn diện, đơn giản, hiệu quả giúp doanh nghiệp lên kế hoạch sử dụng năng lượng tối ưu. Theo dõi, phát hiện sớm những điểm thất thoát lãng phí. Cung cấp bức tranh toàn cảnh về mặt bằng sử dụng năng lượng và hơn thế nữa.",
    img: "/image/pms/pms-page.png",
  };
  return (
    <>
      <PageSeoHead data={metaTagData} />
      <div className="">
        <div className="w-full flex justify-center items-center">
          <div className="px-5 py-3 md:px-8 md:py-6 max-w-screen-xl w-full overflow-hidden md:overflow-visible">
            <HeroSection data={PMSDataPage.heroSection} isPMSPage />
            <Partner />
            <HighLightFeature data={PMSDataPage.features} />
          </div>
        </div>
        <NumberStatus
          data={PMSDataPage.status}
          className="from-orange-primary/20 to-yellow-primary/20"
        />
        <div className="w-full flex justify-center items-center">
          <div className="px-5 py-3 md:px-8 md:py-6 max-w-screen-xl w-full">
            <Technologies />
            <VersionApp
              data={PMSDataPage.versions.data}
              img={PMSDataPage.versions.img}
            />
            <div className="mt-16 md:mt-32">
              <Title label="Hỏi và đáp" className="mr-auto bg-yellow-primary" />
              <div className="mt-8 grid grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-5 w-full flex items-start justify-center">
                  <Image
                    src="/image/pms/question.png"
                    width="600"
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
                            "text-orange-secondary") ||
                          "text-gray"
                        } mr-2 text-xl text-gray font-semibold`}
                      >
                        PMS là gì ?
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
                      } mt-4 text-gray/60 font-medium leading-8`}
                    >
                      <span>
                        PMS là từ viết tắt của Power Monitoring Software - Phần
                        mềm giám sát năng lượng ...
                      </span>
                      <Link href="/pambu-pms">
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
                            "text-orange-secondary") ||
                          "text-gray"
                        } mr-2 text-xl text-gray font-semibold`}
                      >
                        Chi phí lắp đặt Pambu PMS bao gồm những gì ?
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
                      } mt-4 text-gray/60 font-medium leading-8`}
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
                    onClick={() => handleClickQuestion(3)}
                    className="py-4 border-b border-gray/20 cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <h4
                        className={`${
                          (idQuestion === 3 &&
                            openQuestion &&
                            "text-orange-secondary") ||
                          "text-gray"
                        } mr-2 text-xl text-gray font-semibold`}
                      >
                        Mạng lưới phân phối của Pambu gồm những đâu ?
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
                      } mt-4 text-gray/60 font-medium leading-8`}
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
                    onClick={() => handleClickQuestion(4)}
                    className="py-4 border-b border-gray/20 cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <h4
                        className={`${
                          (idQuestion === 4 &&
                            openQuestion &&
                            "text-orange-secondary") ||
                          "text-gray"
                        } mr-2 text-xl text-gray font-semibold`}
                      >
                        Dữ liệu sẽ được lưu trữ trong bao lâu ?
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
                      } mt-4 text-gray/60 font-medium leading-8`}
                    >
                      <span>Ước tính khoảng 10 năm.</span>
                    </div>
                  </div>
                  <div
                    onClick={() => handleClickQuestion(5)}
                    className="py-4 border-b border-gray/20 cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <h4
                        className={`${
                          (idQuestion === 5 &&
                            openQuestion &&
                            "text-orange-secondary") ||
                          "text-gray"
                        } mr-2 text-xl text-gray font-semibold`}
                      >
                        Pambu PMS có phải cài đặt không? Chạy trên nền tảng nào?
                        Có tốn bộ nhớ không?
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
                      } mt-4 text-gray/60 font-medium leading-8`}
                    >
                      <span>
                        Pambu PMS chạy trên nền trình duyệt web, vậy nên phần
                        mềm này có thể chạy trên đa thiết bị có trình duyệt web:
                        laptop, máy tính bảng, smartphone v.v. Pambu PMS không
                        cần cài đặt nên tốn rất ít bộ nhớ (hầu như không đáng
                        kể).
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FormDemo isPMSPage />
      </div>
    </>
  );
};

export default PMSLandingPage;

PMSLandingPage.Layout = PMSLayout;
