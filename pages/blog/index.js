import React from "react";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import { getApolloClient } from "@/libs/apollo-client";
import { AllPMSPosts } from "@/queries/guidesQueries";
import PageSeoHead from "@/components/common/PageSeoHead";
import Breadcrumb from "@/components/common/Breadcrumb";
import Title from "@/components/common/Title";
import BlogCard from "@/components/common/BlogCard";

export async function getStaticProps() {
  const client = getApolloClient();

  const {
    data: {
      posts: { nodes: items },
    },
  } = await client.query({
    query: AllPMSPosts,
  });
  return {
    props: {
      posts: items,
    },
    revalidate: 60,
  };
}

const BlogPage = ({ posts }) => {
  const { locale } = useRouter();
  const t = useTranslations("Common");
  const breadcrumbs = [
    {
      label: locale === "vi" ? "Trang chủ" : "Home",
      slug: "/",
    },
    {
      label: "Pambu PMS",
    },
  ];

  const metaTagData = {
    title: `${t("document.pms")} | pambu.org`,
    desc: t("document.descPMS"),
    img: "/image/pambu.png",
  };
  return (
    <>
      <PageSeoHead data={metaTagData} />
      <div>
        <div className="w-full flex justify-center items-center">
          <div className="px-5 md:px-8 py-16 max-w-screen-xl w-full">
            {/* <Breadcrumb data={breadcrumbs} /> */}
            <div className="mt-">
              <Title label={"Blog"} />
            </div>
            <div className="mt-8">
              <ul className="grid grid-cols-12 gap-6 md:gap-8">
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="col-span-12 md:col-span-6 lg:col-span-4 h-full"
                  >
                    <BlogCard
                      data={post}
                      category="pambu-pms"
                      locale={locale}
                    />
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

export default BlogPage;
