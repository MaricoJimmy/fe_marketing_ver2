import FormGroup from "@/components/common/FormGroup";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import * as yup from "yup";
import PageSeoHead from "../components/common/PageSeoHead";
import Title from "../components/common/Title";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const ContactPage = () => {
  const t = useTranslations("Contact");

  const [purpose, setPurpose] = useState("for-self");

  const schema = yup.object().shape({
    name: yup.string().required(t("form.error.name")),
    companyName: yup.string().required(t("form.error.company")),
    phone: yup
      .string()
      .required(t("form.error.phone.blank"))
      .matches(phoneRegExp, t("form.error.phone.valid")),
    email: yup.string().email().required(t("form.error.email")),
    fields: yup.string().required(t("form.error.fields")),
    requests: yup.string().required(t("form.error.requests")),
    sure: yup.boolean().oneOf([true], t("form.error.sure")),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (formData, e) => {
    axios({
      method: "post",
      url: `https://formspree.io/f/xbjejbpw`,
      data: {
        ...formData,
        purpose,
      },
    })
      .then((r) => {
        toast.success(t("noti.success"));
        e.target.reset();
        reset();
      })
      .catch((r) => {
        toast.error(t("noti.error"));
      });
  };

  const metaTagData = {
    title: `${t("title")} | Udata.ai`,
    desc: t("subTitle"),
    img: "/image/hero/home-pv.png",
  };

  return (
    <>
      <PageSeoHead data={metaTagData} />
      <div className="flex flex-col">
        <div className="relative w-full lg:h-[300px] h-[200px] bg-[url('/image/bg/bg-contact.jpg')] bg-center bg-no-repeat bg-cover flex justify-center items-center">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-neutral/40 to-neutral/80"></div>
          <div className="z-10 px-5 md:px-8 py-16 max-w-screen-xl w-full lg:h-3/4 h-full flex flex-col gap-2">
            <Title label={t("title")} className="text-white" />
          </div>
        </div>
        <div className="lg:-mt-20 relative z-10 w-full flex justify-center items-center">
          <div className="lg:px-5 lg:py-8 max-w-screen-xl w-full">
            <div className="grid grid-cols-12 lg:shadow-xl">
              <div className="w-full h-full col-span-12 lg:col-span-5 bg-white lg:order-1 order-2">
                <div className="px-6 py-14">
                  <h2 className="text-neutral text-3xl font-semibold">
                    {t("titleSection.first")}
                  </h2>
                  <div className="mt-8 flex flex-col gap-8">
                    <div className="flex items-start gap-4">
                      <div className="p-1 w-10 h-10 flex items-center justify-center rounded-full border border-gray/10">
                        <svg
                          width="27"
                          height="23"
                          viewBox="0 0 27 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.67962 3.32038L7.29289 2.70711C7.68342 2.31658 8.31658 2.31658 8.70711 2.70711L11.2929 5.29289C11.6834 5.68342 11.6834 6.31658 11.2929 6.70711L9.50048 8.49952C9.2016 8.7984 9.1275 9.255 9.31653 9.63307C10.4093 11.8186 12.1814 13.5907 14.3669 14.6835C14.745 14.8725 15.2016 14.7984 15.5005 14.4995L17.2929 12.7071C17.6834 12.3166 18.3166 12.3166 18.7071 12.7071L21.2929 15.2929C21.6834 15.6834 21.6834 16.3166 21.2929 16.7071L20.6796 17.3204C18.5683 19.4317 15.2257 19.6693 12.837 17.8777L11.6286 16.9714C9.88504 15.6638 8.33622 14.115 7.02857 12.3714L6.12226 11.163C4.33072 8.7743 4.56827 5.43173 6.67962 3.32038Z"
                            fill="#0069FF"
                          />
                        </svg>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="text-xl text-neutral font-semibold">
                          Hotline
                        </h4>
                        <a
                          href="tel:1800255698"
                          className="text-neutral font-medium"
                        >
                          1800 255 698
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-1 w-10 h-10 flex items-center justify-center rounded-full border border-gray/10">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.87868 5.87868C3 6.75736 3 8.17157 3 11V13C3 15.8284 3 17.2426 3.87868 18.1213C4.75736 19 6.17157 19 9 19H15C17.8284 19 19.2426 19 20.1213 18.1213C21 17.2426 21 15.8284 21 13V11C21 8.17157 21 6.75736 20.1213 5.87868C19.2426 5 17.8284 5 15 5H9C6.17157 5 4.75736 5 3.87868 5.87868ZM6.5547 8.16795C6.09517 7.8616 5.4743 7.98577 5.16795 8.4453C4.8616 8.90483 4.98577 9.5257 5.4453 9.83205L10.8906 13.4622C11.5624 13.9101 12.4376 13.9101 13.1094 13.4622L18.5547 9.83205C19.0142 9.5257 19.1384 8.90483 18.8321 8.4453C18.5257 7.98577 17.9048 7.8616 17.4453 8.16795L12 11.7982L6.5547 8.16795Z"
                            fill="#0069FF"
                          />
                        </svg>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="text-xl text-neutral font-semibold">
                          Support
                        </h4>
                        <a
                          href="mailto:support@udata.ai"
                          className="text-neutral font-medium"
                        >
                          support@udata.ai
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-1 w-10 h-10 flex items-center justify-center rounded-full border border-gray/10">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.87868 5.87868C3 6.75736 3 8.17157 3 11V13C3 15.8284 3 17.2426 3.87868 18.1213C4.75736 19 6.17157 19 9 19H15C17.8284 19 19.2426 19 20.1213 18.1213C21 17.2426 21 15.8284 21 13V11C21 8.17157 21 6.75736 20.1213 5.87868C19.2426 5 17.8284 5 15 5H9C6.17157 5 4.75736 5 3.87868 5.87868ZM6.5547 8.16795C6.09517 7.8616 5.4743 7.98577 5.16795 8.4453C4.8616 8.90483 4.98577 9.5257 5.4453 9.83205L10.8906 13.4622C11.5624 13.9101 12.4376 13.9101 13.1094 13.4622L18.5547 9.83205C19.0142 9.5257 19.1384 8.90483 18.8321 8.4453C18.5257 7.98577 17.9048 7.8616 17.4453 8.16795L12 11.7982L6.5547 8.16795Z"
                            fill="#0069FF"
                          />
                        </svg>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="text-xl text-neutral font-semibold">
                          Sales
                        </h4>
                        <a
                          href="mailto:sales@udata.ai"
                          className="text-neutral font-medium"
                        >
                          sales@udata.ai
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-full col-span-12 lg:col-span-7 bg-[#eef1f7]  lg:order-2 order-1">
                <div className="px-6 py-14">
                  <h2 className="text-neutral text-3xl font-semibold">
                    {t("titleSection.second")}
                  </h2>
                  <form
                    action=""
                    onSubmit={handleSubmit(onSubmit)}
                    className="mt-8 flex flex-col gap-4"
                  >
                    <div>
                      <FormGroup
                        register={register}
                        type="text"
                        name="name"
                        label={t("form.name.label")}
                        placeholder={t("form.name.phd")}
                        className={errors?.name ? "!border-error" : ""}
                      />
                      {errors.name && (
                        <p className="mt-2 text-xs text-error font-medium">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div className="">
                      <FormGroup
                        register={register}
                        type="text"
                        name="companyName"
                        label={t("form.company.label")}
                        placeholder={t("form.company.phd")}
                        className={errors?.companyName ? "!border-error" : ""}
                      />
                      {errors.companyName && (
                        <p className="mt-2 text-xs text-error font-medium">
                          {errors.companyName.message}
                        </p>
                      )}
                    </div>
                    <div className="">
                      <FormGroup
                        register={register}
                        type="number"
                        name="phone"
                        label={t("form.phone.label")}
                        placeholder={t("form.phone.phd")}
                        className={errors?.phone ? "!border-error" : ""}
                      />
                      {errors.phone && (
                        <p className="mt-2 text-xs text-error font-medium">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                    <div className="">
                      <FormGroup
                        register={register}
                        type="email"
                        name="email"
                        label={t("form.email.label")}
                        placeholder={t("form.email.phd")}
                        className={errors?.email ? "!border-error" : ""}
                      />
                      {errors.email && (
                        <p className="mt-2 text-xs text-error font-medium">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="" className="text-base font-medium">
                        {t("form.fields.label")}
                      </label>
                      <div className="mt-2">
                        <Controller
                          control={control}
                          name="fields"
                          render={({ field }) => (
                            <Select {...field} onValueChange={field.onChange}>
                              <SelectTrigger
                                className={`${
                                  errors?.fields ? "!border-error" : ""
                                } h-12 w-full !bg-white`}
                              >
                                <SelectValue
                                  placeholder={t("form.fields.label")}
                                />
                              </SelectTrigger>
                              <SelectContent className={`!bg-white`}>
                                {t.raw("form.fields.lists").map((item) => (
                                  <SelectItem key={item} value={item}>
                                    {item}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          )}
                        />
                        {errors.fields && (
                          <p className="mt-2 text-xs text-error font-medium">
                            {errors.fields.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="" className="text-base font-medium">
                        {t("form.requests.label")}
                      </label>
                      <div className="mt-2">
                        <Controller
                          control={control}
                          name="requests"
                          render={({ field }) => (
                            <Select {...field} onValueChange={field.onChange}>
                              <SelectTrigger
                                className={`${
                                  errors?.requests ? "!border-error" : ""
                                } h-12 w-full !bg-white`}
                              >
                                <SelectValue
                                  placeholder={t("form.requests.label")}
                                />
                              </SelectTrigger>
                              <SelectContent className="!bg-white">
                                {t.raw("form.requests.lists").map((item) => (
                                  <SelectItem key={item} value={item}>
                                    {item}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          )}
                        />
                        {errors.requests && (
                          <p className="mt-2 text-xs text-error font-medium">
                            {errors.requests.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="">
                      <label htmlFor="" className="text-base font-medium">
                        {t("form.target.label")}
                      </label>
                      <RadioGroup
                        value={purpose}
                        onValueChange={(value) => setPurpose(value)}
                        defaultValue="for-self"
                        className="mt-2 ml-6"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="for-self" id="for-self" />
                          <label htmlFor="for-self">
                            {t("form.target.for-self")}
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="for-customer"
                            id="for-customer"
                          />
                          <label htmlFor="for-customer">
                            {t("form.target.for-customer")}
                          </label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="">
                      <FormGroup
                        register={register}
                        type="text"
                        name="message"
                        isTextarea
                        label={t("form.message.label")}
                        placeholder={t("form.message.phd")}
                        className="!h-[120px]"
                      />
                    </div>
                    <div>
                      <Controller
                        control={control}
                        name="sure"
                        render={({ field }) => (
                          <div className="flex items-start space-x-2">
                            <Checkbox
                              id="sure"
                              {...field}
                              checked={field.value}
                              className={`${
                                errors?.sure ? "!border-error" : ""
                              }`}
                              onCheckedChange={() => {
                                field.onChange(!field.value);
                              }}
                            />
                            <label
                              htmlFor="sure"
                              className="leading-tight font-medium"
                            >
                              {t("form.checkboxSure")}
                            </label>
                          </div>
                        )}
                      />
                      {errors.sure && (
                        <p className="mt-2 text-xs text-error font-medium">
                          {errors.sure.message}
                        </p>
                      )}
                    </div>
                    <div className="mt-4 flex justify-end">
                      <Button
                        type="submit"
                        className="px-6 py-3 w-[100px] bg-primary hover:bg-secondary text-white font-semibold"
                      >
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

export default ContactPage;
