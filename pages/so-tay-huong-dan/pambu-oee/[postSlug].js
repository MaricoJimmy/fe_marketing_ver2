import Image from "next/image";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import BlogRelated from "../../../components/common/BlogRelated";
import Breadcrumb from "../../../components/common/Breadcrumb";
import PageSeoHead from "../../../components/common/PageSeoHead";
import SocialShare from "../../../components/common/SocialShare";
import { getApolloClient } from "../../../libs/apollo-client";
import { AllOEEPosts } from "../../../queries/guidesQueries";
import {
  MoreRelatedPostsQueryInSameCategory,
  PostDetailsQuery,
} from "../../../queries/postQuery";
import { getDate } from "../../../utils";
import { useTranslations } from "next-intl";

export async function getStaticProps({ params }) {
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
      category: "pambu-oee",
    },
  });
  const relatedPosts = items
    .filter((item) => item.slug !== params.postSlug)
    .slice(0, 5);
  return {
    props: {
      post,
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
    query: AllOEEPosts,
  });

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

const OEEDetailPost = ({ post, relatedPosts }) => {
  const router = useRouter();
  const t = useTranslations("Common");
  const breadcrumbs = useMemo(() => {
    return [
      {
        label: router.locale === "vi" ? "Trang chủ" : "Home",
        slug: "/",
      },
      {
        label: "Pambu OEE",
        slug: "/pambu-oee",
      },
      {
        label: post.title,
      },
    ];
  }, [post]);

  const metaTagData = {
    title: `${post.title} | pambu.org`,
    desc: post.excerpt.replace(/<[^>]+>/g, ""),
    img: post?.featuredImage?.node?.mediaItemUrl,
  };

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
                    {t("date")}: {getDate(post.date)}
                  </p>
                  <SocialShare data={router.asPath} />
                </div>
                <h3
                  className="mt-4 text-lg text-gray font-medium text-justify"
                  dangerouslySetInnerHTML={{ __html: post.excerpt }}
                ></h3>
              </div>

              <div className="mt-10">
                <Image
                  src={post?.featuredImage?.node?.mediaItemUrl}
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
            <div className="col-span-3 md:col-span-1">
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
                      <BlogRelated data={relatePost} category="pambu-oee" />
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

export default OEEDetailPost;
