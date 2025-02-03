import React, { useMemo, useState } from "react";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import { getApolloClient } from "@/libs/apollo-client";
import { AllPMSPosts } from "@/queries/guidesQueries";
import PageSeoHead from "@/components/common/PageSeoHead";
import Breadcrumb from "@/components/common/Breadcrumb";
import Title from "@/components/common/Title";
import BlogCard from "@/components/common/BlogCard";
import ReactPaginate from "react-paginate";

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

const PAGE_SIZE = 6;

const BlogPage = ({ posts }) => {
  const { locale } = useRouter();
  const t = useTranslations("Common");
  const metaTagData = {
    title: `${t("document.pms")} | Udata.ai`,
    desc: t("document.descPMS"),
    img: "/image/pambu.png",
  };

  // state
  const [itemOffset, setItemOffset] = useState(0);

  const currentPostsByPage = useMemo(() => {
    const endOffset = itemOffset + PAGE_SIZE;
    return posts.slice(itemOffset, endOffset);
  }, [posts, itemOffset]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * PAGE_SIZE) % posts.length;
    setItemOffset(newOffset);
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
              {currentPostsByPage.length > 0 ? (
                <div>
                  <ul className="grid grid-cols-12 gap-6 md:gap-8">
                    {currentPostsByPage.map((post) => (
                      <li
                        key={post.id}
                        className="col-span-12 md:col-span-6 lg:col-span-4 h-full"
                      >
                        <BlogCard data={post} category="blog" locale={locale} />
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <ReactPaginate
                      breakLabel="..."
                      nextLabel=">"
                      onPageChange={handlePageClick}
                      pageRangeDisplayed={5}
                      pageCount={Math.ceil(posts.length / PAGE_SIZE)}
                      previousLabel="<"
                      renderOnZeroPageCount={null}
                      containerClassName="flex justify-center items-center gap-4"
                      pageLinkClassName="flex justify-center items-center w-8 h-8 rounded-md bg-white border border-gray/20 font-medium"
                      activeLinkClassName="bg-primary text-white"
                      disabledClassName="opacity-50"
                    />
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center w-full h-[50vh]">
                  <h3 className="text-lg font-medium">
                    Hiện không có tin tức nào!
                  </h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
