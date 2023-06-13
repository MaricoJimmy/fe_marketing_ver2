import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import * as yup from "yup";
import Button from "../common/Button";
import FormGroup from "../common/FormGroup";
import { useTranslations } from "next-intl";

function InfoClientForm({ isPMSPage, productType }) {
  const t = useTranslations("Product");

  const schema = yup.object().shape({
    name: yup.string().required(t("error.name")),
    companyName: yup.string().required(t("error.company")),
    phoneNumber: yup
      .string()
      .required(t("error.phone.required"))
      .min(10, t("error.phone.min")),
    email: yup.string().email().required(t("error.email")),
    address: yup.string().required(t("error.address")),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (formData, e) => {
    axios({
      method: "post",
      url: `https://formspree.io/f/xjvdvzpd`,
      data: { formData, productType },
    })
      .then((r) => {
        toast.success(t("noti.success"));
        e.target.reset();
      })
      .catch((r) => {
        toast.error(t("noti.error"));
      });
  };

  // const inputRef = useRef(null);

  // useEffect(() => {
  //   inputRef.current && inputRef.current.focus()
  // }, [])

  return (
    <div className="p-6 md:p-8 w-full bg-white rounded-lg">
      <h3 className="text-2xl text-gray text-center font-bold">
        {t("form.title")}
      </h3>
      <form action="" className="mt-8 w-full" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <FormGroup
            register={register}
            // ref={inputRef}
            type="text"
            name="name"
            label={t("form.name.label")}
            placeholder={t("form.name.phd")}
            className={errors?.name ? "border-red" : ""}
          />
          {errors.name && (
            <p className="mt-2 text-xs text-red font-medium">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="mt-6">
          <FormGroup
            register={register}
            type="text"
            name="companyName"
            label={t("form.company.label")}
            placeholder={t("form.company.phd")}
            className={errors?.companyName ? "border-red" : ""}
          />
          {errors.companyName && (
            <p className="mt-2 text-xs text-red font-medium">
              {errors.companyName.message}
            </p>
          )}
        </div>
        <div className="mt-6">
          <FormGroup
            register={register}
            type="number"
            name="phoneNumber"
            label={t("form.phone.label")}
            placeholder={t("form.phone.phd")}
            className={errors?.phoneNumber ? "border-red" : ""}
          />
          {errors.phoneNumber && (
            <p className="mt-2 text-xs text-red font-medium">
              {errors.phoneNumber.message}
            </p>
          )}
        </div>
        <div className="mt-6">
          <FormGroup
            register={register}
            type="email"
            name="email"
            label={t("form.email.label")}
            placeholder={t("form.email.phd")}
            className={errors?.email ? "border-red" : ""}
          />
          {errors.email && (
            <p className="mt-2 text-xs text-red font-medium">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="mt-6">
          <FormGroup
            register={register}
            type="text"
            name="address"
            label={t("form.address.label")}
            placeholder={t("form.address.phd")}
            className={errors?.address ? "border-red" : ""}
          />
          {errors.address && (
            <p className="mt-2 text-xs text-red font-medium">
              {errors.address.message}
            </p>
          )}
        </div>
        <div className="mt-10">
          <Button
            className={`${
              (isPMSPage && "bg-orange-primary hover:bg-orange-secondary") ||
              "bg-primary hover:bg-secondary"
            } px-6 py-3 w-full text-white font-semibold duration-200`}
          >
            {t("form.button")}
          </Button>
        </div>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default InfoClientForm;
