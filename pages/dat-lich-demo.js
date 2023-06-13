import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import * as yup from "yup";
import Breadcrumb from "../components/common/Breadcrumb";
import Button from "../components/common/Button";
import FormGroup from "../components/common/FormGroup";
import PageSeoHead from "../components/common/PageSeoHead";
import Title from "../components/common/Title";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

const BookDemoPage = () => {
  const router = useRouter();
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
    productType: yup.object().shape(
      {
        oee: yup.bool().when("pms", {
          is: (pms) => !pms,
          then: yup.bool().oneOf([true], t("error.product")),
        }),
        pms: yup.bool().when("oee", {
          is: (oee) => !oee,
          then: yup.bool().oneOf([true], t("error.address")),
        }),
      },
      [
        ["oee", "pms"],
        ["pms", "oee"],
      ]
    ),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(schema) });

  const breadcrumbs = [
    {
      label: router.locale === "vi" ? "Trang chủ" : "Home",
      slug: "/",
    },
    {
      label: router.locale === "vi" ? "Đặt lịch Demo" : "Book a Demo",
    },
  ];

  console.log();

  const onSubmit = (formData, e) => {
    axios({
      method: "post",
      url: `https://formspree.io/f/xbjejbpw`,
      data: formData,
    })
      .then((r) => {
        toast.success("Đặt lịch thành công!");
        e.target.reset();
      })
      .catch((r) => {
        toast.error("Đã xảy ra lỗi!");
      });
  };

  const metaTagData = {
    title: `${t("demo")} | pambu.org`,
    desc: t("titleDemo"),
    img: "/image/demo-page.png",
  };

  return (
    <>
      <PageSeoHead data={metaTagData} />
      <div>
        <div className="w-full flex justify-center items-center">
          <div className="px-5 md:px-8 py-16 max-w-screen-xl w-full">
            <Breadcrumb data={breadcrumbs} />
            <div className="mt-8 grid grid-cols-12 gap-6 lg:gap-24">
              <div className="col-span-12 lg:col-span-6">
                <Title label={t("demo")} className="bg-blue-primary" />
                <div
                  className="mt-6 text-md text-gray/80 text-justify leading-7 font-medium"
                  dangerouslySetInnerHTML={{ __html: t.raw("bookDemo") }}
                ></div>
              </div>
              <div className="col-span-12 lg:col-span-6">
                <div className="p-6 md:p-8 w-full bg-white border border-gray/20 rounded-lg">
                  <h3 className="text-2xl text-gray text-center font-bold">
                    {t("book")}
                  </h3>
                  <form
                    action=""
                    className="mt-8 w-full"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div>
                      <FormGroup
                        register={register}
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
                    <div className="my-10 w-full h-[1px] bg-gray/20" />
                    <div>
                      <span className="text-base font-medium">
                        {t("form.product.title")}
                      </span>
                      <div className="flex items-start mt-4">
                        <div className="mt-1">
                          <input
                            {...register("productType.oee")}
                            id="oee"
                            // name="checkbox"
                            type="checkbox"
                            // value="oee"
                            className="w-4 h-4 bg-gray/40 border-gray/40 rounded "
                          />
                        </div>
                        <label
                          htmlFor="oee"
                          className="ml-4 font-medium text-gray-900"
                          dangerouslySetInnerHTML={{
                            __html: t.raw("form.product.oee"),
                          }}
                        ></label>
                      </div>
                      <div className="flex items-start mt-4">
                        <div className="mt-1">
                          <input
                            {...register("productType.pms")}
                            id="pms"
                            // name="checkbox"
                            type="checkbox"
                            // value="pms"
                            className="w-4 h-4 bg-gray/40 border-gray/40 rounded "
                          />
                        </div>
                        <label
                          htmlFor="pms"
                          className="ml-4 font-medium text-gray-900"
                          dangerouslySetInnerHTML={{
                            __html: t.raw("form.product.pms"),
                          }}
                        ></label>
                      </div>
                      {errors.productType && (
                        <p className="mt-4 text-sm text-red font-medium">
                          {errors.productType?.pms?.message &&
                            errors.productType?.oee?.message}
                        </p>
                      )}
                    </div>
                    <div className="mt-10">
                      <Button className="px-6 py-3 w-full bg-primary hover:bg-secondary text-white font-semibold">
                        {t("form.button")}
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </>
  );
};

export default BookDemoPage;
