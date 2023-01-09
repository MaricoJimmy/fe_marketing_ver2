import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Title from "../components/common/Title";
import { hygraphClient } from "../libs/hygraphClient";
import {
  NewsPostsQuery,
  OEEPostsQuery,
  PMSPostsQuery
} from "../queries/homePageQueries";
import { getDate } from "../utils";

export async function getStaticProps() {
  const client = hygraphClient();

  const oeePosts = await client.request(OEEPostsQuery);
  const pmsPosts = await client.request(PMSPostsQuery);
  const newsPosts = await client.request(NewsPostsQuery);

  return {
    props: {
      oeePosts,
      pmsPosts,
      newsPosts,
    },
    revalidate: 60,
  };
}

const HomePage = ({ oeePosts, pmsPosts, newsPosts }) => {
  console.log("oeePosts", oeePosts);
  console.log("pmsPosts", pmsPosts);
  console.log("newsPosts", newsPosts);
  const firstPost = newsPosts.posts[0]

  return (
    <>
      <Head>
        <title>Pambu</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <div className="w-full flex justify-center items-center">
          <div className="px-5 md:px-8 py-10 max-w-screen-xl w-full overflow-hidden md:overflow-visible">
            <div>
              <Title
                label="Tin tức nổi bật"
                className="bg-green-primary"
              />
              <div className="mt-8">
                <div className="grid grid-cols-12 gap-8 lg:gap-16">
                  <div className="col-span-12 md:col-span-5">
                    <Link href={`/tin-tuc/${firstPost.slug}`}>
                      <a className="block w-full h-fit shadow-lg rounded-lg">
                        <div className="w-full h-[200px] lg:h-[250px] relative">
                          <Image src={firstPost.featuredImg.url} alt="" layout="fill" objectFit="cover" className="rounded-t-lg" />
                        </div>
                        <div className="p-8 h-full ">
                          <h3 className="text-xl text-gray font-semibold">{firstPost.title}</h3>
                          <span className="block mt-2 text-gray/60">
                            {getDate(firstPost.publishedAt)}
                          </span>
                          <h5 className="mt-4 text-gray/80">
                            {firstPost.desc}
                          </h5>
                        </div>
                      </a>
                    </Link>
                  </div>
                  <div className="col-span-12 md:col-span-7">
                    <ul>
                      {
                        newsPosts.posts.slice(1, 5).map(post => (
                          <li key={post.id} className='mb-8'>
                            <Link href={`/tin-tuc/${post.slug}`}>
                              <a className="flex items-start">
                                <div className="relative border border-gray/20 min-w-[150px] w-[150px] h-[80px] md:h-[65px] lg:h-[80px] rounded-lg">
                                  <Image src={post.featuredImg.url} alt="" layout="fill" objectFit="cover" className="rounded-md" />
                                </div>
                                <div className="ml-6">
                                  <h4 className="text-lg tex-gray font-semibold">{post.title}</h4>
                                  <span className="mt-2 block text-gray/60">{getDate(post.publishedAt)}</span>
                                </div>
                              </a>
                            </Link>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 md:mt-32">
              <div className="flex items-center justify-center">
                <Title
                  label="Cẩm nang hướng dẫn"
                  className="mx-auto bg-green-primary"
                />
              </div>
              <div className="mt-8 grid grid-cols-2 gap-8">
                <div className="col-span-2 lg:col-span-1">
                  <div className="p-6 md:p-8 w-full h-full flex flex-col items-center justify-between bg-white border border-gray/20 rounded-lg">
                    <div className="w-full">
                      <div className="flex items-center justify-center">
                        <Image src="/image/oee/document-highlight.png" width="260" height="180" alt="" />
                      </div>
                      <h3 className="mt-6 text-2xl text-gray text-center font-semibold">Tài liệu Pambu OEE</h3>
                      <ul className="mt-8">
                        {
                          oeePosts.posts.map(post => (
                            <li key={post.id} className="mb-6 last:mb-0">
                              <Link href={`/pambu-oee/${post.slug}`}>
                                <a className="flex items-start">
                                  <div className="min-w-[100px] w-[100px] h-[50px] md:w-[150px] md:h-[80px] lg:w-[100px] lg:h-[50px] relative">
                                    <Image src={post.featuredImg.url} alt="" layout="fill" objectFit="cover" className="rounded-md" />
                                  </div>
                                  <div className="ml-4">
                                    <h5 className="text-lg text-gray font-semibold">{post.title}</h5>
                                    <span className="mt-2 text-gray/60">{getDate(post.publishedAt)}</span>
                                  </div>
                                </a>
                              </Link>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                    <div className="mt-8 flex items-center justify-center">
                      <Link href="/pambu-oee">
                        <a className="block px-6 py-3 bg-white text-green-primary border border-green-primary hover:bg-green-primary hover:text-white duration-200 rounded-md font-semibold">
                          Xem tất cả
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <div className="p-6 md:p-8 w-full h-full flex flex-col items-center justify-between bg-white border border-gray/20 rounded-lg">
                    <div className="w-full">
                      <div className="flex items-center justify-center">
                        <Image src="/image/pms/document-highlight.png" width="250" height="180" alt="" />
                      </div>
                      <h3 className="mt-6 text-2xl text-gray text-center font-semibold">Tài liệu Pambu PMS</h3>
                      <ul className="mt-8">
                        {
                          pmsPosts.posts.map(post => (
                            <li key={post.id} className="mb-6 last:mb-0">
                              <Link href={`/pambu-pms/${post.slug}`}>
                                <a className="flex items-start">
                                  <div className="min-w-[100px] w-[100px] h-[50px] md:w-[150px] md:h-[80px] lg:w-[100px] lg:h-[50px] relative">
                                    <Image src={post.featuredImg.url} alt="" layout="fill" objectFit="cover" className="rounded-md" />
                                  </div>
                                  <div className="ml-4">
                                    <h5 className="text-lg text-gray font-semibold">{post.title}</h5>
                                    <span className="mt-2 text-gray/60">{getDate(post.publishedAt)}</span>
                                  </div>
                                </a>
                              </Link>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                    <div className="mt-8 flex items-center justify-center">
                      <Link href="/pambu-pms">
                        <a className="block px-6 py-3 bg-white text-green-primary border border-green-primary hover:bg-green-primary hover:text-white duration-200 rounded-md font-semibold">
                          Xem tất cả
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
