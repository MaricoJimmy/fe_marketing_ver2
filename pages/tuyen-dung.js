import PageSeoHead from "@/components/common/PageSeoHead";
import ScrollToTop from "@/components/common/ScrollToTop";
import Title from "@/components/common/Title";
import { useTranslations } from "next-intl";
import Link from "next/link";

const AboutUsPage = () => {
  const t = useTranslations("Career");

  const metaTagData = {
    title: t("title"),
    desc: t("excerpt"),
    img: "/image/hero/home-pv.png",
  };

  const renderCareer = ({ title, location, exp, link }) => {
    return (
      <Link href={link}>
        <a
          rel="noopener noreferrer"
          target="_blank"
          className="p-4 block w-full h-full lg:min-h-[180px] bg-white rounded-lg shadow-md"
        >
          <h3 className="text-xl text-neutral font-semibold">{title}</h3>
          <div className="mt-4 flex flex-col space-y-2">
            <div className="flex items-start gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary shrink-0"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <h5 className="text-gray font-medium">
                {location.main} <br /> {location.sub}
              </h5>
            </div>
            <div className="flex items-start gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary shrink-0"
              >
                <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                <rect width="20" height="14" x="2" y="6" rx="2" />
              </svg>
              <h5 className="text-gray font-medium">{exp}</h5>
            </div>
          </div>
        </a>
      </Link>
    );
  };
  return (
    <>
      <PageSeoHead data={metaTagData} />
      <div className="w-full h-full flex items-center justify-center bg-infor/5">
        <div className="lg:px-20 md:px-10 px-4 py-8 w-full max-w-screen-xl">
          <Title label={t("title")} />
          <div className="mt-8 w-full grid lg:grid-cols-2 lg:gap-8 gap-4">
            {t.raw("careers").map((career, idx) => (
              <div key={idx}>{renderCareer(career)}</div>
            ))}
          </div>
        </div>

        <div className="fixed bottom-5 right-5 z-10">
          <ScrollToTop />
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
