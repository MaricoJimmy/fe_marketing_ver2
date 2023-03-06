import React from "react";
import BlogCard from "../../../components/common/BlogCard";
import Breadcrumb from "../../../components/common/Breadcrumb";
import PageSeoHead from "../../../components/common/PageSeoHead";
import Title from "../../../components/common/Title";
import { getApolloClient } from "../../../libs/apollo-client";
import { AllPMSPosts } from "../../../queries/guidesQueries";

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

const PMSGuidesPage = ({ posts }) => {
  const breadcrumbs = [
    {
      label: "Trang chủ",
      slug: "/",
    },
    {
      label: "Pambu PMS",
    },
  ];

  const metaTagData = {
    title: "Tài liệu Pambu PMS | pambu.org",
    desc: "Giám Sát Và Quản Lý Năng Lượng",
    img: "/image/pambu.png",
  };
  return (
    <>
      <PageSeoHead data={metaTagData} />
      <div>
        <div className="w-full flex justify-center items-center">
          <div className="px-5 md:px-8 py-16 max-w-screen-xl w-full">
            <Breadcrumb data={breadcrumbs} />
            <div className="mt-8">
              <Title
                label="Tài liệu Pambu PMS"
                className="bg-primary !w-full"
              />
            </div>
            <div className="mt-8">
              <ul className="grid grid-cols-12 gap-6 md:gap-8">
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="col-span-12 md:col-span-6 lg:col-span-4 h-full"
                  >
                    <BlogCard data={post} category="pambu-pms" />
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

export default PMSGuidesPage;
