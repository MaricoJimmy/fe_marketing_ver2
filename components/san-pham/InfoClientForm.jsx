import { yupResolver } from "@hookform/resolvers/yup";
import React from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from '../common/Button';
import FormGroup from '../common/FormGroup';

const schema = yup.object().shape({
  name: yup.string().required("Họ và tên không được để trống!"),
  companyName: yup.string().required("Tên công ty không được để trống!"),
  phoneNumber: yup.string().required("Số điện thoại không được để trống!").min(10, "Số điện thoại phải đủ 10 số!"),
  email: yup.string().email().required("Email không được để trống!"),
  address: yup.string().required("Địa chỉ không được để trống!"),
});

function InfoClientForm({ isPMSPage }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div className='p-6 md:p-8 w-full bg-white rounded-lg'>
      <h3 className='text-2xl text-gray text-center font-bold'>Thông tin khách hàng</h3>
      <form action="" className='mt-8 w-full' onSubmit={handleSubmit(onSubmit)}>
        <div>
          <FormGroup
            register={register}
            type="text"
            name="name"
            label="Họ và tên"
            placeholder="Nhập họ và tên"
            className={
              errors?.userName
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
              errors?.userName
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
              errors?.userName
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
              errors?.userName
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
              errors?.userName
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
        <div className='mt-10'>
          <Button className={`${isPMSPage && "bg-orange-primary hover:bg-orange-secondary" || "bg-green-primary hover:bg-green-secondary"} px-6 py-3 w-full text-white font-semibold duration-200`}>Đặt lịch</Button>
        </div>
      </form>
    </div>
  )
}

export default InfoClientForm