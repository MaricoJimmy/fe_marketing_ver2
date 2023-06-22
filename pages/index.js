import Image from "next/image";
import Link from "next/link";
import React from "react";
import PageSeoHead from "../components/common/PageSeoHead";
import Title from "../components/common/Title";
import { getApolloClient } from "../libs/apollo-client";

import {
  NewsPostsQuery,
  OEEPostsQuery,
  PMSPostsQuery,
} from "../queries/homePageQueries";
import { getDate } from "../utils";
import { useTranslations } from "next-intl";

export async function getStaticProps({ locale }) {
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

  const localeNewPosts = newsPosts
    .filter((post) => {
      if (locale === "en") {
        return post.title.startsWith("EN-");
      }
      return post.title.startsWith("VN-");
    })
    .map((post) => {
      return {
        ...post,
        title:
          locale === "en"
            ? post.title.replace(/EN-\d{8}-/, "")
            : post.title.replace(/VN-\d{8}-/, ""),
      };
    });

  return {
    props: {
      oeePosts,
      pmsPosts,
      newsPosts: localeNewPosts,
    },
    revalidate: 60,
  };
}

const HomePage = ({ oeePosts, pmsPosts, newsPosts }) => {
  const t = useTranslations("Index");
  const firstPost = newsPosts[0];

  const metaTagData = {
    title: `${t("titleSocial")} | pambu.org`,
    desc: t("desc"),
    img: "/image/pambu.png",
  };
  return (
    <>
      <PageSeoHead data={metaTagData} />
      <div>
        <div className="w-full flex justify-center items-center">
          <div className="px-5 md:px-8 py-10 max-w-screen-xl w-full overflow-hidden md:overflow-visible">
            <div>
              <h1
                className="hidden md:block text-4xl text-gray text-center font-bold"
                dangerouslySetInnerHTML={{ __html: t.raw("title.desktop") }}
              ></h1>

              <h1
                className="block md:hidden text-2xl text-gray text-center font-bold"
                dangerouslySetInnerHTML={{ __html: t.raw("title.mobile") }}
              ></h1>
              <h4 className="mt-6 text-xl text-gray/80 text-center font-medium">
                {t("desc")}
              </h4>
              <div className="mt-10 md:mt-16 grid grid-cols-2 gap-10 md:gap-16">
                <div className="col-span-2 md:col-span-1 flex flex-col justify-between">
                  <h2 className="text-xl md:text-2xl text-gray text-center font-bold">
                    Pambu OEE <br />
                    <span className="text-gray/60 font-semibold">
                      {t("oee")}
                    </span>
                  </h2>
                  <div>
                    <div className="mt-8">
                      <Image
                        src="/image/oee/mockup-oee.png"
                        width="1240"
                        height="650"
                        alt=""
                      />
                    </div>
                    <div className="mt-8 flex items-center justify-center">
                      <Link href="/san-pham/pambu-oee">
                        <a
                          aria-label="pambu oee"
                          className="px-10 py-3 bg-primary hover:bg-secondary text-white font-semibold rounded-md duration-200"
                        >
                          {t("button.details")}
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 md:col-span-1 flex flex-col justify-between">
                  <h2 className="text-xl md:text-2xl text-gray text-center font-bold">
                    Pambu PMS <br />{" "}
                    <span className="text-gray/60 font-semibold">
                      {t("pms")}
                    </span>
                  </h2>
                  <div>
                    <div className="mt-8">
                      <Image
                        src="/image/pms/mockup-pms.png"
                        width="1240"
                        height="650"
                        alt=""
                      />
                    </div>
                    <div className="mt-8 flex items-center justify-center">
                      <Link href="/san-pham/pambu-pms">
                        <a
                          aria-label="pambu pms"
                          className="px-10 py-3 bg-primary hover:bg-secondary text-white font-semibold rounded-md duration-200"
                        >
                          {t("button.details")}
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {newsPosts.length > 0 && (
              <div className="mt-32">
                <div className="flex items-center justify-center">
                  <Title
                    label={t("section.news")}
                    className="bg-primary mx-auto"
                  />
                </div>
                <div className="mt-8">
                  <div className="grid grid-cols-12 gap-6 md:gap-10 lg:gap-16">
                    <div className="col-span-12 tall-md:col-span-12 lg:col-span-7">
                      <Link href={`/tin-tuc/${firstPost.slug}`}>
                        <a
                          ariaLabel={firstPost.title}
                          className="block w-full h-fit bg-white shadow-lg shadow-tertiary/80 rounded-3xl"
                        >
                          <div className="w-full h-[200px] lg:h-[250px] relative">
                            <Image
                              src={firstPost.featuredImage.node.mediaItemUrl}
                              alt=""
                              layout="fill"
                              objectFit="cover"
                              className="rounded-t-3xl"
                            />
                          </div>
                          <div className="p-8 h-full ">
                            <h3 className="text-lg md:text-xl text-gray font-semibold">
                              {firstPost.title}
                            </h3>
                            <span className="block mt-2 text-gray/80">
                              {getDate(firstPost.date)}
                            </span>
                            <h5
                              className="mt-4 text-gray desc-blog"
                              dangerouslySetInnerHTML={{
                                __html: firstPost.excerpt,
                              }}
                            ></h5>
                          </div>
                        </a>
                      </Link>
                    </div>
                    <div className="mt-8 md:mt-0 col-span-12 tall-md:col-span-12 lg:col-span-5">
                      <ul>
                        {newsPosts.slice(1).map((post) => (
                          <li key={post.id} className="mb-8 last:mb-0">
                            <Link href={`/tin-tuc/${post.slug}`}>
                              <a className="flex md:flex-row flex-col items-start">
                                <div className="relative border border-gray/20 md:min-w-[150px] md:w-[150px] w-full h-[150px] md:h-[65px] lg:h-[80px] rounded-2xl md:rounded-lg">
                                  <Image
                                    src={post.featuredImage.node.mediaItemUrl}
                                    alt=""
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-2xl md:rounded-lg"
                                  />
                                </div>
                                <div className="mt-4 md:mt-0 md:ml-6">
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
            )}
            <div className="my-16 md:mt-32">
              <div className="flex items-center justify-center">
                <Title
                  label={t("section.instruction.main")}
                  className="mx-auto bg-primary"
                />
              </div>
              <div className="mt-8 grid grid-cols-2 gap-10">
                <div className="col-span-2 lg:col-span-1">
                  <div className="p-6 md:p-8 w-full h-full flex flex-col items-center justify-between bg-white border border-tertiary rounded-3xl">
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
                        {t("section.instruction.sub.first")}
                      </h3>
                      <ul className="mt-10">
                        {oeePosts.map((post) => (
                          <li key={post.id} className="mb-8 last:mb-0">
                            <Link href={`/pambu-oee/${post.slug}`}>
                              <a className="flex md:flex-row flex-col items-start">
                                <div className="w-full h-[150px] md:min-w-[150px] md:w-[150px] md:h-[80px] lg:min-w-[100px] lg:w-[100px] lg:h-[50px] relative">
                                  <Image
                                    src={post.featuredImage.node.mediaItemUrl}
                                    alt=""
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-2xl md:rounded-lg"
                                  />
                                </div>
                                <div className="mt-4 md:mt-0 md:ml-4">
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
                        <a className="block px-10 py-3 bg-white hover:bg-primary text-primary hover:text-white border border-primary duration-200 rounded-md font-semibold">
                          {t("button.full")}
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <div className="p-6 md:p-8 w-full h-full flex flex-col items-center justify-between bg-white border border-tertiary rounded-3xl">
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
                        {t("section.instruction.sub.second")}
                      </h3>
                      <ul className="mt-10">
                        {pmsPosts.map((post) => (
                          <li key={post.id} className="mb-8 last:mb-0">
                            <Link href={`/pambu-pms/${post.slug}`}>
                              <a className="flex md:flex-row flex-col items-start">
                                <div className="w-full h-[150px] md:w-[150px] md:h-[80px] lg:min-w-[100px] lg:w-[100px] lg:h-[50px] relative">
                                  <Image
                                    src={post.featuredImage.node.mediaItemUrl}
                                    alt=""
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-2xl md:rounded-md"
                                  />
                                </div>
                                <div className="mt-4 md:mt-0 md:ml-4">
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
                        <a className="block px-10 py-3 bg-white hover:bg-primary text-primary hover:text-white border border-primary duration-200 rounded-md font-semibold">
                          {t("button.full")}
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
