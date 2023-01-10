import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import * as yup from "yup";
import Button from "../components/common/Button";
import FormGroup from "../components/common/FormGroup";
import Title from "../components/common/Title";

const schema = yup.object().shape({
  name: yup.string().required("Họ và tên không được để trống!"),
  companyName: yup.string().required("Tên công ty không được để trống!"),
  phoneNumber: yup.string().required("Số điện thoại không được để trống!").min(10, "Số điện thoại phải đủ 10 số!"),
  email: yup.string().email().required("Email không được để trống!"),
  address: yup.string().required("Địa chỉ không được để trống!"),
  productType: yup.object().shape(
    {
      oee: yup.bool().when("pms", {
        is: (pms) => !pms,
        then: yup.bool().oneOf([true], "Hãy chọn ít nhất một loại sản phẩm!")
      }),
      pms: yup.bool().when("oee", {
        is: (oee) => !oee,
        then: yup.bool().oneOf([true], "Hãy chọn ít nhất một loại sản phẩm!")
      })
    },
    [
      ["oee", "pms"],
      ["pms", "oee"]
    ]
  )
});

const BookDemoPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (formData) => {
    axios({
      method: "post",
      url: `https://formspree.io/f/mdovobpe`,
      data: formData
    })
      .then(r => {
        toast.success('Đặt lịch thành công!')
      })
      .catch(r => {
        toast.error("Đã xảy ra lỗi!")
      });
  };

  return <>
    <Head>
      <title>Đặt lịch Demo | Pambu</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div>
      <div className="w-full flex justify-center items-center">
        <div className="px-5 md:px-8 py-16 max-w-screen-xl w-full">
          <div className='grid grid-cols-12 gap-6 lg:gap-24'>
            <div className="col-span-12 lg:col-span-6">
              <Title
                label="Yêu cầu Demo"
                className='bg-blue-primary'
              />
              <div className='mt-6 text-md text-gray/80 text-justify leading-7 font-medium'>
                <p>Với mục tiêu cùng đồng hành với khách hàng, Pambu sẽ hỗ trợ khách hàng sử dụng demo miễn phí. Chương trình demo cụ thể như sau:</p>
                <ul className="mt-6 ml-6 list-disc">
                  <li>Đối với phần mềm Pambu OEE: khách hàng sẽ được trải nghiệm bản basic trên 1 máy sản xuất trong thời gian 2 tháng.</li>
                  <li>Đối với phần mềm Pambu PMS: khách hàng sẽ được trải nghiệm bản basic trên 1 phụ tải điện trong thời gian 2 tháng.</li>
                  <li>Toàn bộ thiết bị phần cứng Pambu cung cấp và lắp đặt miễn phí, khách hàng cung cấp hạ tầng Internet.</li>
                </ul>
                <p className="mt-6">
                  Các bước lên kế hoạch demo như sau:
                </p>
                <ul className="mt-6 ml-6 list-disc">
                  <li>Khảo sát mặt bằng thiết bị cần demo tại site của khách hàng.</li>
                  <li>Lên cấu hình và thời gian lắp đặt.</li>
                  <li>Thống nhất các điều khoản lắp đặt và bảo quản tài sản demo.</li>
                  <li>Lắp đặt demo và lắng nghe ý kiến phản hồi của khách hàng.</li>
                </ul>
                <p className="mt-6">
                  Còn chần chừ gì nữa mà không liên hệ ngay với đội ngũ Pambu tại hotline <a href="tel:+8454321232" className="font-bold">+8454321232</a> hoặc điền vào form dưới đây để sử dụng sản phẩm. Pambu rất vui lòng được đồng hành!
                </p>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className='p-6 md:p-8 w-full bg-white border border-gray/20 rounded-lg'>
                <h3 className='text-2xl text-gray text-center font-bold'>Đặt lịch Demo</h3>
                <form action="" className='mt-8 w-full' onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <FormGroup
                      register={register}
                      type="text"
                      name="name"
                      label="Họ và tên"
                      placeholder="Nhập họ và tên"
                      className={
                        errors?.name
                          ? "border-red"
                          : (isValid && "border-green-primary") || ""
                      }
                    />
                    {errors.name && (
                      <p className="mt-2 text-xs text-red font-medium">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className='mt-6'>
                    <FormGroup
                      register={register}
                      type="text"
                      name="companyName"
                      label="Tên công ty"
                      placeholder="Nhập tên công ty"
                      className={
                        errors?.companyName
                          ? "border-red"
                          : (isValid && "border-green-primary") || ""
                      }
                    />
                    {errors.companyName && (
                      <p className="mt-2 text-xs text-red font-medium">
                        {errors.companyName.message}
                      </p>
                    )}
                  </div>
                  <div className='mt-6'>
                    <FormGroup
                      register={register}
                      type="number"
                      name="phoneNumber"
                      label="Số điện thoại"
                      placeholder="Nhập số điện thoại"
                      className={
                        errors?.phoneNumber
                          ? "border-red"
                          : (isValid && "border-green-primary") || ""
                      }
                    />
                    {errors.phoneNumber && (
                      <p className="mt-2 text-xs text-red font-medium">
                        {errors.phoneNumber.message}
                      </p>
                    )}
                  </div>
                  <div className='mt-6'>
                    <FormGroup
                      register={register}
                      type="email"
                      name="email"
                      label="Email"
                      placeholder="Nhập email"
                      className={
                        errors?.email
                          ? "border-red"
                          : (isValid && "border-green-primary") || ""
                      }
                    />
                    {errors.email && (
                      <p className="mt-2 text-xs text-red font-medium">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className='mt-6'>
                    <FormGroup
                      register={register}
                      type="text"
                      name="address"
                      label="Địa chỉ"
                      placeholder="Nhập địa chỉ"
                      className={
                        errors?.address
                          ? "border-red"
                          : (isValid && "border-green-primary") || ""
                      }
                    />
                    {errors.address && (
                      <p className="mt-2 text-xs text-red font-medium">
                        {errors.address.message}
                      </p>
                    )}
                  </div>
                  <div className="my-10 w-full h-[1px] bg-gray/20" />
                  <div>
                    <span className="text-base font-medium">Chọn loại sản phẩm</span>
                    <div className="flex items-start mt-4">
                      <div className="mt-1">
                        <input
                          {...register("productType.oee")}
                          id="oee"
                          // name="checkbox"
                          type="checkbox"
                          // value="oee"
                          className="w-4 h-4 bg-gray/40 border-gray/40 rounded " />
                      </div>
                      <label htmlFor="oee" className="ml-4 font-medium text-gray-900">
                        <span className="font-semibold">Pambu OEE</span>: Giải pháp toàn diện về quản lý hiệu suất và bảo dưỡng máy móc
                        <Link href="/san-pham/pambu-oee">
                          <a className="ml-2 text-blue-primary underline">Xem chi tiết</a>
                        </Link>
                      </label>
                    </div>
                    <div className="flex items-start mt-4">
                      <div className="mt-1">
                        <input
                          {...register("productType.pms")}
                          id="pms"
                          // name="checkbox"
                          type="checkbox"
                          // value="pms"
                          className="w-4 h-4 bg-gray/40 border-gray/40 rounded " />
                      </div>
                      <label htmlFor="pms" className="ml-4 font-medium text-gray-900">
                        <span className="font-semibold">Pambu PMS</span>: Giám sát và quản lý năng lượng
                        <Link href="/san-pham/pambu-pms">
                          <a className="ml-2 text-blue-primary underline">Xem chi tiết</a>
                        </Link>
                      </label>
                    </div>
                    {errors.productType && (
                      <p className="mt-4 text-sm text-red font-medium">
                        {errors.productType?.pms?.message && errors.productType?.oee?.message}
                      </p>
                    )}
                  </div>
                  <div className='mt-10'>
                    <Button className="px-6 py-3 w-full bg-green-primary hover:bg-green-secondary text-white font-semibold">Đặt lịch</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  </>;
};

export default BookDemoPage;
