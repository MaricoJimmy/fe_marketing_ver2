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
import { Check } from "lucide-react";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const ContactPage = () => {
  const t = useTranslations("Contact");

  // const [purpose, setPurpose] = useState("for-self");

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
        // purpose,
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
    img: "/image/hero/home-pv.webp",
  };

  return (
    <>
      <PageSeoHead data={metaTagData} />
      <div className="flex flex-col">
        <div className="w-full flex justify-center items-center">
          <div className="px-5 py-8 max-w-screen-xl w-full">
            <div className="grid grid-cols-12 lg:gap-16 md:gap-14 gap-8">
              <div className="w-full h-full col-span-12 lg:col-span-6 bg-white">
                <Title
                  label={t("title")}
                  className="text-start"
                  data-aos="fade-right"
                />
                <h4
                  className="mt-4 text-neutral text-lg font-medium"
                  data-aos="fade-right"
                  data-aos-delay="100"
                  dangerouslySetInnerHTML={{ __html: t.raw("subTitle") }}
                ></h4>
                <div className="mt-4">
                  <h4
                    className="text-neutral text-lg font-bold"
                    data-aos="fade-right"
                    data-aos-delay="150"
                  >
                    {t("discoveries.title")}
                  </h4>
                  <ul className="mt-4 grid md:grid-cols-2 gap-4">
                    {t.raw("discoveries.list").map((item, index) => (
                      <li
                        key={item.title}
                        data-aos="fade-up"
                        data-aos-delay={`${100 + index * 50}`}
                        className="flex-1 p-4 flex flex-col gap-4 bg-gray/5 rounded-lg"
                      >
                        {/* <div>
                        </div> */}
                        <Check className="md:w-10 md:h-10 w-8 h-8 text-neutral flex-shrink-0" />
                        <div className="flex flex-col gap-2">
                          <span className="text-neutral text-lg font-semibold">
                            {item.title}
                          </span>
                          <span className="text-neutral">{item.content}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div
                id="form-contact"
                data-aos="fade-up"
                data-aos-delay="100"
                className="w-full h-full col-span-12 lg:col-span-6 border border-gray/20 rounded-lg"
              >
                <div className="p-6">
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
                    {/* <div className="">
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
                    </div> */}
                    <div className="mt-4">
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
                        title={t("form.button")}
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
