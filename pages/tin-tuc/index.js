import React, { useEffect } from "react";
import BlogCard from "../../components/common/BlogCard";
import Breadcrumb from "../../components/common/Breadcrumb";
import PageSeoHead from "../../components/common/PageSeoHead";
import Title from "../../components/common/Title";
import { getApolloClient } from "../../libs/apollo-client";
import { AllNewsPosts } from "../../queries/guidesQueries";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

export async function getStaticProps(context) {
  const { locale } = context;
  const client = getApolloClient();

  const {
    data: {
      posts: { nodes: items },
    },
  } = await client.query({
    query: AllNewsPosts,
  });

  return {
    props: {
      posts: items,
      locale,
    },
    revalidate: 60,
  };
}

const AllNewsPage = ({ posts, locale }) => {
  const router = useRouter();
  const t = useTranslations("Common");
  const breadcrumbs = [
    {
      label: locale === "vi" ? "Trang chủ" : "Home",
      slug: "/",
    },
    {
      label: locale === "vi" ? "Tin tức" : "News",
    },
  ];

  const metaTagData = {
    title: `${t("news")} | pambu.org`,
    desc: t("titleNews"),
    img: "/image/pambu.png",
  };

  const postsByLocale = posts
    .filter((post) => {
      if (locale === "en") {
        return post.title.startsWith("EN-");
      } else if (locale === "vi") {
        return post.title.startsWith("VN-");
      }
    })
    .map((post) => {
      return {
        ...post,
        title:
          locale === "en"
            ? post.title.replace(/EN-\d{8}-/, "")
            : post.title.replace(/VN-\d{8}-/, ""),
      };
    });

  useEffect(() => {
    if (router.locale === "vi") {
      router.push("/tin-tuc");
    } else {
      router.push("/news");
    }
  }, [router.locale]);

  return (
    <>
      <PageSeoHead data={metaTagData} />
      <div>
        <div className="w-full flex justify-center items-center">
          <div className="px-5 md:px-8 py-16 max-w-screen-xl w-full">
            <Breadcrumb data={breadcrumbs} />
            <div className="mt-8">
              <Title label={t("news")} className="bg-primary !w-full" />
            </div>
            <div className="mt-8">
              <ul className="grid grid-cols-12 gap-6 md:gap-8">
                {postsByLocale.map((post) => (
                  <li
                    key={post.id}
                    className="col-span-12 md:col-span-6 lg:col-span-4 h-full"
                  >
                    <BlogCard data={post} category="tin-tuc" locale={locale} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllNewsPage;
