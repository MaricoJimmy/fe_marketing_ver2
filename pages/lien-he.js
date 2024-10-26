import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import * as yup from "yup";
import PageSeoHead from "../components/common/PageSeoHead";
import Title from "../components/common/Title";
import FormGroup from "@/components/common/FormGroup";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ContactPage = () => {
  const router = useRouter();
  const t = useTranslations("Contact");

  const [purpose, setPurpose] = useState("for-self");

  const schema = yup.object().shape({
    name: yup.string().required(t("form.error.name")),
    companyName: yup.string().required(t("form.error.company")),
    email: yup.string().email().required(t("form.error.email")),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
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
      })
      .catch((r) => {
        toast.error(t("noti.error"));
      });
  };

  const metaTagData = {
    title: `${t("title")} | pambu.org`,
    desc: t("subTitle"),
    img: "/image/demo-page.png",
  };

  return (
    <>
      <PageSeoHead data={metaTagData} />
      <div className="flex flex-col">
        <div className="relative w-full lg:h-[300px] h-[200px] bg-[url('/image/bg/bg-contact.jpg')] bg-center bg-no-repeat bg-cover flex justify-center items-center">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-neutral/40 to-neutral/80"></div>
          <div className="z-10 px-5 md:px-8 py-16 max-w-screen-xl w-full lg:h-3/4 h-full flex flex-col gap-2">
            <Title label={t("title")} className="text-white" />
            <p className="text-white text-lg">{t("subTitle")}</p>
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
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-phone text-primary"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="text-xl text-neutral font-semibold">
                          Sale
                        </h4>
                        <h5 className="text-neutral font-medium">
                          minhnt@udata.ai
                        </h5>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-1 w-10 h-10 flex items-center justify-center rounded-full border border-gray/10">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-headset text-primary"
                        >
                          <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
                          <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
                        </svg>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="text-xl text-neutral font-semibold">
                          Support
                        </h4>
                        <h5 className="text-neutral font-medium">
                          support1@udata.ai
                        </h5>
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
                        className={errors?.name ? "border-error" : ""}
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
                        className={errors?.companyName ? "border-error" : ""}
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
                        type="email"
                        name="email"
                        label={t("form.email.label")}
                        placeholder={t("form.email.phd")}
                        className={errors?.email ? "border-error" : ""}
                      />
                      {errors.email && (
                        <p className="mt-2 text-xs text-error font-medium">
                          {errors.email.message}
                        </p>
                      )}
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
