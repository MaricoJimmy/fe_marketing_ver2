import Image from "next/image";
import Link from "next/link";
import React from "react";
import PageSeoHead from "../components/common/PageSeoHead";
import Title from "../components/common/Title";
import { getApolloClient } from "../libs/apollo-client";

import {
  NewsPostsQuery,
  OEEPostsQuery,
  PMSPostsQuery
} from "../queries/homePageQueries";
import { getDate } from "../utils";

export async function getStaticProps() {
  const client = getApolloClient();

  const {
    data: {
      posts: { nodes: oeePosts },
    },
  } = await client.query({
    query: OEEPostsQuery,
  });
  const {
    data: {
      posts: { nodes: pmsPosts },
    },
  } = await client.query({
    query: PMSPostsQuery,
  });
  const {
    data: {
      posts: { nodes: newsPosts },
    },
  } = await client.query({
    query: NewsPostsQuery,
  });

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
  const firstPost = newsPosts[0]

  const metaTagData = {
    title: "Pambu - Phần Mềm Quản Lý, Giám Sát Năng Lượng Và Hiệu Suất Máy | pambu.org",
    desc: "Chìa khóa mở ra cánh cửa số hóa dữ liệu nhà máy. Tiên phong trong công nghệ Cloud",
    img: "/image/home-page.png"
  }
  return (
    <>
      <PageSeoHead data={metaTagData} />
      <div>
        <div className="w-full flex justify-center items-center">
          <div className="px-5 md:px-8 py-10 max-w-screen-xl w-full overflow-hidden md:overflow-visible">
            <div>
              <h1 className="hidden md:block text-4xl text-gray text-center font-bold">Pambu - Phần Mềm Quản Lý, Giám Sát <br /> <span className="text-green-secondary">Năng Lượng</span> Và <span className="text-green-secondary">Hiệu Suất</span> Máy</h1>
              <h1 className="block md:hidden text-2xl text-gray text-center font-bold">Pambu - Phần Mềm Quản Lý, Giám Sát <span className="text-green-secondary">Năng Lượng</span> Và <span className="text-green-secondary">Hiệu Suất</span> Máy</h1>
              <h4 className="mt-6 text-xl text-gray/80 text-center font-medium">
                Chìa khóa mở ra  cánh cửa số hóa dữ liệu nhà máy. Tiên phong trong công nghệ Cloud
              </h4>
              <div className="mt-10 md:mt-16 grid grid-cols-2 gap-6 md:gap-16">
                <div className="col-span-2 md:col-span-1">
                  <h2 className="text-xl md:text-2xl text-gray text-center font-bold">
                    Pambu OEE <br /><span className="text-gray/60 font-semibold">Phần mềm quản lý hiệu suất và bảo dưỡng máy</span>
                  </h2>
                  <div className="mt-8">
                    <Image src="/image/oee/mockup-oee.png" width='1240' height='650' alt='' />
                  </div>
                  <div className="mt-8 flex items-center justify-center">
                    <Link href='/san-pham/pambu-oee'>
                      <a ariaLabel="pambu oee" className="px-10 py-3 bg-white hover:bg-green-secondary border border-green-secondary text-green-secondary hover:text-white font-semibold rounded-md duration-200">Xem chi tiết</a>
                    </Link>
                  </div>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <h2 className="text-xl md:text-2xl text-gray text-center font-bold">
                    Pambu PMS <br /> <span className="text-gray/60 font-semibold">Phần mềm giám sát năng lượng</span>
                  </h2>
                  <div className="mt-8">
                    <Image src="/image/pms/mockup-pms.png" width='1240' height='650' alt='' />
                  </div>
                  <div className="mt-8 flex items-center justify-center">
                    <Link href='/san-pham/pambu-pms'>
                      <a ariaLabel="pambu pms" className="px-10 py-3 bg-white hover:bg-green-secondary border border-green-secondary text-green-secondary hover:text-white font-semibold rounded-md duration-200">Xem chi tiết</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-32">
              <Title label="Tin tức nổi bật" className="bg-green-primary" />
              <div className="mt-8">
                <div className="grid grid-cols-12 gap-6 lg:gap-16">
                  <div className="col-span-12 md:col-span-6 lg:col-span-7">
                    <Link href={`/tin-tuc/${firstPost.slug}`}>
                      <a ariaLabel={firstPost.title} className="block w-full h-fit shadow-lg rounded-lg">
                        <div className="w-full h-[200px] lg:h-[250px] relative">
                          <Image
                            src={firstPost.featuredImage.node.mediaItemUrl}
                            alt=""
                            layout="fill"
                            objectFit="cover"
                            className="rounded-t-lg"
                          />
                        </div>
                        <div className="p-8 h-full ">
                          <h3 className="text-xl text-gray font-semibold">
                            {firstPost.title}
                          </h3>
                          <span className="block mt-2 text-gray/80">
                            {getDate(firstPost.date)}
                          </span>
                          <h5 className="mt-4 text-gray" dangerouslySetInnerHTML={{ __html: firstPost.excerpt }}>
                          </h5>
                        </div>
                      </a>
                    </Link>
                  </div>
                  <div className="col-span-12 md:col-span-6 lg:col-span-5">
                    <ul>
                      {newsPosts.slice(1).map((post) => (
                        <li key={post.id} className="mb-8">
                          <Link href={`/tin-tuc/${post.slug}`}>
                            <a className="flex items-start">
                              <div className="relative border border-gray/20 min-w-[150px] w-[150px] h-[80px] md:h-[65px] lg:h-[80px] rounded-lg">
                                <Image
                                  src={post.featuredImage.node.mediaItemUrl}
                                  alt=""
                                  layout="fill"
                                  objectFit="cover"
                                  className="rounded-md"
                                />
                              </div>
                              <div className="ml-6">
                                <h4 className="text-lg tex-gray font-semibold">
                                  {post.title}
                                </h4>
                                <span className="mt-2 block text-gray/80">
                                  {getDate(post.date)}
                                </span>
                              </div>
                            </a>
                          </Link>
                        </li>
                      ))}
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
                        <Image
                          src="/image/oee/document-highlight.png"
                          width="260"
                          height="180"
                          alt=""
                        />
                      </div>
                      <h3 className="mt-6 text-2xl text-gray text-center font-semibold">
                        Tài liệu Pambu OEE
                      </h3>
                      <ul className="mt-8">
                        {oeePosts.map((post) => (
                          <li key={post.id} className="mb-6 last:mb-0">
                            <Link href={`/pambu-oee/${post.slug}`}>
                              <a className="flex items-start">
                                <div className="min-w-[100px] w-[100px] h-[50px] md:min-w-[150px] md:w-[150px] md:h-[80px] lg:min-w-[100px] lg:w-[100px] lg:h-[50px] relative">
                                  <Image
                                    src={post.featuredImage.node.mediaItemUrl}
                                    alt=""
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-md"
                                  />
                                </div>
                                <div className="ml-4">
                                  <h5 className="text-lg text-gray font-semibold">
                                    {post.title}
                                  </h5>
                                  <span className="mt-2 text-gray/60">
                                    {getDate(post.date)}
                                  </span>
                                </div>
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-8 flex items-center justify-center">
                      <Link href="/pambu-oee">
                        <a className="block px-6 py-3 bg-white hover:bg-green-secondary border border-green-secondary text-green-secondary hover:text-white duration-200 rounded-md font-semibold">
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
                        <Image
                          src="/image/pms/document-highlight.png"
                          width="250"
                          height="180"
                          alt=""
                        />
                      </div>
                      <h3 className="mt-6 text-2xl text-gray text-center font-semibold">
                        Tài liệu Pambu PMS
                      </h3>
                      <ul className="mt-8">
                        {pmsPosts.map((post) => (
                          <li key={post.id} className="mb-6 last:mb-0">
                            <Link href={`/pambu-pms/${post.slug}`}>
                              <a className="flex items-start">
                                <div className="min-w-[100px] w-[100px] h-[50px] md:w-[150px] md:h-[80px] lg:w-[100px] lg:h-[50px] relative">
                                  <Image
                                    src={post.featuredImage.node.mediaItemUrl}
                                    alt=""
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-md"
                                  />
                                </div>
                                <div className="ml-4">
                                  <h5 className="text-lg text-gray font-semibold">
                                    {post.title}
                                  </h5>
                                  <span className="mt-2 text-gray/60">
                                    {getDate(post.date)}
                                  </span>
                                </div>
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-8 flex items-center justify-center">
                      <Link href="/pambu-pms">
                        <a className="block px-6 py-3 bg-white hover:bg-green-secondary border border-green-secondary text-green-secondary hover:text-white duration-200 rounded-md font-semibold">
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
