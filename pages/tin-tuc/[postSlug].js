import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useMemo } from "react";
import BlogRelated from "../../components/common/BlogRelated";
import Breadcrumb from "../../components/common/Breadcrumb";
import PageSeoHead from "../../components/common/PageSeoHead";
import SocialShare from "../../components/common/SocialShare";
import { getApolloClient } from "../../libs/apollo-client";
import { AllNewsPosts } from "../../queries/guidesQueries";
import {
  MoreRelatedPostsQueryInSameCategory,
  PostDetailsQuery,
} from "../../queries/postQuery";
import { getDate } from "../../utils";
import { useTranslations } from "next-intl";

// import dynamic from "next/dynamic";

export async function getStaticProps({ params, locale }) {
  const client = getApolloClient();

  const {
    data: { post },
  } = await client.query({
    query: PostDetailsQuery,
    variables: {
      slug: params.postSlug,
    },
  });

  const {
    data: {
      posts: { nodes: items },
    },
  } = await client.query({
    query: MoreRelatedPostsQueryInSameCategory,
    variables: {
      category: "tin-tuc",
    },
  });

  const {
    data: {
      posts: { nodes: allPosts },
    },
  } = await client.query({
    query: AllNewsPosts,
  });

  const relatedPosts = items
    .filter((item) => item.slug !== params.postSlug)
    .slice(0, 5)
    .filter((post) => {
      if (locale === "en") {
        return post.title.startsWith("EN-");
      } else if (locale === "vi") {
        return post.title.startsWith("VN-");
      }
    });

  const currentPost = {
    ...post,
    title:
      locale === "en"
        ? post.title.replace(/EN-\d{8}-/, "")
        : post.title.replace(/VN-\d{8}-/, ""),
    viSlug: post.title.includes("VN-")
      ? post.slug
      : allPosts.find((item) => {
          const postDate = item.title.substring(3, 11);
          const targetDate = post.title.substring(3, 11);
          return postDate === targetDate && item.title.includes("VN-");
        }).slug,
    enSlug: post.title.includes("EN-")
      ? post.slug
      : allPosts.find((item) => {
          const postDate = item.title.substring(3, 11);
          const targetDate = post.title.substring(3, 11);
          return postDate === targetDate && item.title.includes("EN-");
        }).slug,
  };
  return {
    props: {
      post: currentPost,
      posts: allPosts,
      relatedPosts,
    },
  };
}

export async function getStaticPaths({ locales }) {
  let paths = [];

  const client = getApolloClient();

  const {
    data: {
      posts: { nodes: items },
    },
  } = await client.query({
    query: AllNewsPosts,
  });

  // items.forEach((post) => {
  //   paths.push({
  //     params: {
  //       postSlug: post.slug,
  //     },
  //   });
  // });

  paths = items.flatMap((post) => {
    return locales.map((locale) => ({
      params: {
        postSlug: post.slug,
      },
      locale,
    }));
  });

  return {
    paths,
    fallback: false,
  };
}

const NewsPostDetailsPage = ({ post, relatedPosts }) => {
  const router = useRouter();
  const t = useTranslations("Common");
  const breadcrumbs = useMemo(() => {
    return [
      {
        label: router.locale === "vi" ? "Trang chủ" : "Home",
        slug: "/",
      },
      {
        label: router.locale === "vi" ? "Tin tức" : "News",
        slug: "/tin-tuc",
      },
      {
        label:
          router.locale === "en"
            ? post.title.replace(/EN-\d{8}-/, "")
            : post.title.replace(/VN-\d{8}-/, ""),
      },
    ];
  }, [post, router.locale]);

  const metaTagData = {
    title: `${
      router.locale === "en"
        ? post.title.replace(/EN-\d{8}-/, "")
        : post.title.replace(/VN-\d{8}-/, "")
    }} | pambu.org`,
    desc: post.excerpt.replace(/<[^>]+>/g, ""),
    img: post.featuredImage.node.mediaItemUrl,
  };

  useEffect(() => {
    if (router.locale === "vi") {
      router.push("/tin-tuc/" + post.viSlug);
    } else {
      router.push("/news/" + post.enSlug);
    }
  }, [router.locale]);
  return (
    <>
      <PageSeoHead data={metaTagData} />
      <div className="w-full flex justify-center items-center">
        <div className="px-5 md:px-8 py-10 max-w-screen-xl w-full">
          <Breadcrumb data={breadcrumbs} />
          <div className="mt-8 grid grid-cols-3 gap-10">
            <div className="col-span-3 md:col-span-2">
              <div className="mb-6">
                <h1 className="font-bold text-4xl text-green-secondary mb-2">
                  {post.title}
                </h1>
                <div className="mt-3 flex items-center">
                  <p className="mr-6 text-gray/80 text-sm">
                    {t("date")}: {getDate(post.date, router.locale)}
                  </p>
                  <SocialShare data={router.asPath} />
                </div>
                <h3
                  className="mt-4 text-lg text-gray font-medium text-justify"
                  dangerouslySetInnerHTML={{ __html: post.excerpt }}
                ></h3>
              </div>

              <div className="mt-8">
                <Image
                  src={post.featuredImage.node.mediaItemUrl}
                  width="1000"
                  height="600"
                  alt=""
                  className="rounded"
                />
              </div>

              <div
                className="content-wrapper mt-6"
                dangerouslySetInnerHTML={{ __html: post.content }}
              ></div>
            </div>
            <div className="col-span-3 md:col-span-1 sticky top-24 w-fit h-screen overflow-auto common-wrapper">
              <div className="w-full bg-white border border-gray/20 p-6 md:p-8 rounded-3xl">
                <div className="w-fit">
                  <h2 className="text-2xl text-center text-gray font-bold">
                    {t("relatedPost")}
                  </h2>
                  <div className="w-full flex">
                    <div className={`mt-2 w-[100px] h-[3px] bg-primary`}></div>
                  </div>
                </div>
                <ul className="mt-6">
                  {relatedPosts.map((relatePost) => (
                    <li key={relatePost.id} className="mb-8 last:mb-0">
                      <BlogRelated data={relatePost} category="tin-tuc" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsPostDetailsPage;
