import Head from "next/head";
import React from "react";
import BlogCard from "../../components/common/BlogCard";
import Title from "../../components/common/Title";
import { hygraphClient } from "../../libs/hygraphClient";
import { AllNewsPosts } from "../../queries/guidesQueries";

export async function getStaticProps() {
  const client = hygraphClient();

  const { posts } = await client.request(AllNewsPosts);

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
}

const AllNewsPage = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <Head>
        <title>Tin tức | Pambu</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <div className="w-full flex justify-center items-center">
          <div className="px-5 md:px-8 py-16 max-w-screen-xl w-full">
            <Title
              label="Tin tức nổi bật"
              className="bg-green-primary !w-full"
            />
            <div className="mt-8">
              <ul className="grid grid-cols-12 gap-8">
                {
                  posts.map(post => (
                    <li key={post.id} className='col-span-12 md:col-span-6 lg:col-span-4'>
                      <BlogCard data={post} category='tin-tuc' />
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>);
};

export default AllNewsPage;
