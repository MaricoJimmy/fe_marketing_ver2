import Head from "next/head";
import React from "react";
import BlogCard from "../../../components/common/BlogCard";
import Breadcrumb from "../../../components/common/Breadcrumb";
import Title from "../../../components/common/Title";
import { getApolloClient } from "../../../libs/apollo-client";
import { AllOEEPosts } from "../../../queries/guidesQueries";

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

const OEEGuidesPage = ({ posts }) => {
  const breadcrumbs = [
    {
      label: "Trang chủ",
      slug: "/",
    },
    {
      label: "Pambu OEE",
    },
  ];
  return (
    <>
      <Head>
        <title>Tài liệu Pambu OEE | Pambu</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <div className="w-full flex justify-center items-center">
          <div className="px-5 md:px-8 py-16 max-w-screen-xl w-full">
            <Breadcrumb data={breadcrumbs} />
            <div className="mt-8">
              <Title
                label="Tài liệu Pambu OEE"
                className="bg-green-primary !w-full"
              />
            </div>
            <div className="mt-8">
              <ul className="grid grid-cols-12 gap-8">
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="col-span-12 md:col-span-6 lg:col-span-4"
                  >
                    <BlogCard data={post} category="pambu-oee" />
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

export default OEEGuidesPage;
