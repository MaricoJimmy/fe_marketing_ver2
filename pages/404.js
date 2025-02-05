import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Head from "next/head";
import { useRouter } from "next/router";

function NotFound() {
  const router = useRouter();
  const t = useTranslations("404");
  return (
    <>
      <Head>
        <title>404 | Udata.ai</title>
        <meta property="og:title" content="404"></meta>
        <meta
          property="og:description"
          content="Trang này không tồn tại"
        ></meta>
        <meta property="og:image" content="/image/logo.png"></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className="h-[50vh]">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-infor">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-neutral md:text-4xl">
              {t("title")}
            </p>
            <p className="mb-4 text-lg font-light text-neutral">
              {t("content")}
            </p>
            <Button size="lg" className="mt-8" onClick={() => router.push("/")}>
              {t("button")}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFound;
