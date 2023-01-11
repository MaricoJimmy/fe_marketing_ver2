import Head from "next/head";
import React from "react";
import BlogCard from "../../../components/common/BlogCard";
import Breadcrumb from "../../../components/common/Breadcrumb";
import Title from "../../../components/common/Title";
import { hygraphClient } from "../../../libs/hygraphClient";
import { AllOEEPosts } from "../../../queries/guidesQueries";

export async function getStaticProps() {
  const client = hygraphClient();

  const { posts } = await client.request(AllOEEPosts);

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
}

const OEEGuidesPage = ({ posts }) => {
  const breadcrumbs = [
    {
      label: "Trang chủ",
      slug: "/"
    },
    {
      label: "Pambu OEE",
    }
  ]
  return <>
    <Head>
      <title>Tài liệu Pambu OEE | Pambu</title>
      <meta property="og:title" content="Tài liệu Pambu OEE | Pambu"></meta>
      <meta property="og:description" content="Số tay Pambu OEE cung cấp các cẩm nang chi tiết về khái niệm cũng như các nội dung liên quan đến Pambu OEE"></meta>
      <meta property="og:image" content="/image/logo.png"></meta>
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
              {
                posts.map(post => (
                  <li key={post.id} className='col-span-12 md:col-span-6 lg:col-span-4'>
                    <BlogCard data={post} category="pambu-oee" />
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  </>;
};

export default OEEGuidesPage;
