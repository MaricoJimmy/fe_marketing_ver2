import BlogCard from "@/components/common/BlogCard";
import PageSeoHead from "@/components/common/PageSeoHead";
import Title from "@/components/common/Title";
import { getApolloClient } from "@/libs/apollo-client";
import { AllOEEPosts } from "@/queries/guidesQueries";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

export async function getStaticProps() {
  const client = getApolloClient();

  const {
    data: {
      posts: { nodes: items },
    },
  } = await client.query({
    query: AllOEEPosts,
  });
  return {
    props: {
      posts: items,
    },
    revalidate: 60,
  };
}

const CaseStudyPage = ({ posts }) => {
  const { locale } = useRouter();
  const t = useTranslations("Common");
  const breadcrumbs = [
    {
      label: locale === "vi" ? "Trang chủ" : "Home",
      slug: "/",
    },
    {
      label: "Pambu OEE",
    },
  ];

  const metaTagData = {
    title: `${t("document.oee")} | udata.ai`,
    desc: t("document.descOEE"),
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
              <Title label={"Case study"} />
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
                      category="case-study"
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

export default CaseStudyPage;
