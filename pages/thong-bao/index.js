import BlogCard from "@/components/common/BlogCard";
import PageSeoHead from "@/components/common/PageSeoHead";
import Title from "@/components/common/Title";
import { getApolloClient } from "@/libs/apollo-client";
import { AllNotiPosts } from "@/queries/guidesQueries";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import ReactPaginate from "react-paginate";

export async function getStaticProps() {
  const client = getApolloClient();

  const {
    data: {
      posts: { nodes: items },
    },
  } = await client.query({
    query: AllNotiPosts,
  });
  return {
    props: {
      posts: items,
    },
    revalidate: 60,
  };
}

const PAGE_SIZE = 6;

const NotificationPage = ({ posts }) => {
  const { locale } = useRouter();
  const t = useTranslations("Notification");

  const metaTagData = {
    title: `${t("title")} | Udata.ai`,
    desc: t("title"),
    img: "/image/blog-page.png",
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
              <Title label={t("title")} />
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
                        <BlogCard
                          data={post}
                          category="thong-bao"
                          locale={locale}
                        />
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

export default NotificationPage;
