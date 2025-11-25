import ScrollToTop from "@/components/common/ScrollToTop";
import TableOfContent from "@/components/common/TableOfContent";
import Tags from "@/components/common/Tags";
import { Button } from "@/components/ui/button";
import { useApp } from "@/contexts/AppContext";
import { ROUTER_BLOG } from "@/utils/constant";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import BlogRelated from "../../components/common/BlogRelated";
import PageSeoHead from "../../components/common/PageSeoHead";
import SocialShare from "../../components/common/SocialShare";
import { getApolloClient } from "../../libs/apollo-client";
import { AllBlogPosts } from "../../queries/guidesQueries";
import {
  MoreRelatedPostsQueryInSameCategory,
  PostDetailsQuery,
} from "../../queries/postQuery";
import {
  addIdsToHeadings,
  extractHeadings,
  getDate,
  getLocalizedPath,
} from "../../utils";

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
      posts: { nodes: allPostItems },
    },
  } = await client.query({
    query: AllBlogPosts,
  });

  const {
    data: {
      posts: { nodes: relatedPostItems },
    },
  } = await client.query({
    query: MoreRelatedPostsQueryInSameCategory,
    variables: {
      category: "blog",
    },
  });

  const relatedPosts = relatedPostItems
    .filter(
      (item) =>
        item.slug !== params.postSlug && item.language.language === locale
    )
    .slice(0, 5);

  const localePost = allPostItems.find((postItem) => {
    return (
      postItem.language.language !== locale &&
      postItem.language.key === post.language.key
    );
  });

  return {
    props: {
      post: {
        ...post,
        localeSlug: localePost?.slug || "",
      },
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
    query: AllBlogPosts,
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
  const t = useTranslations("Notification");
  const { setPostDetail } = useApp();

  const metaTagData = {
    title: `${post.title} | Udata.ai`,
    desc: post.excerpt.replace(/<[^>]+>/g, ""),
    img: post?.featuredImage?.node?.mediaItemUrl,
  };

  const postTags = post.tags?.nodes.map((tag) => tag.name) || [];

  // Add id to headings to create table of content
  const updatedContent = useMemo(() => {
    return post ? addIdsToHeadings(post.content) : post.content;
  }, [post]);
  // Extract headings from content to create table of content
  const tableOfContents = useMemo(() => {
    return updatedContent ? extractHeadings(updatedContent) : post.content;
  }, [updatedContent]);

  useEffect(() => {
    if (post) {
      setPostDetail(post);
    }
  }, [post, router]);

  return (
    <>
      <PageSeoHead data={metaTagData} />
      <div className="w-full flex justify-center items-center">
        <div className="px-5 md:px-8 py-10 max-w-screen-xl w-full">
          <Button
            variant="noBg"
            title={"Quay về"}
            className="px-0 flex items-center gap-2 text-neutral"
            onClick={() =>
              router.push(getLocalizedPath(ROUTER_BLOG, router.locale))
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-left"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            <span>{t("button.back")}</span>
          </Button>
          <div className="mt-4 grid lg:grid-cols-3 grid-cols-1 gap-10">
            <div className="lg:col-span-2 col-span-1">
              <div className="mb-6">
                <h1 className="font-bold text-4xl text-green-secondary mb-2">
                  {post.title}
                </h1>
                {postTags.length > 0 ? (
                  <div className="mt-4">
                    <Tags tags={postTags} />
                  </div>
                ) : (
                  ""
                )}
                <div className="mt-6 flex items-center">
                  <p className="mr-6 text-gray/80 text-sm">
                    {t("date")}: {getDate(post.date, router.locale)}
                  </p>
                  <SocialShare data={router.asPath} />
                </div>
                {/* <h3
                  className="mt-2 text-lg text-gray font-medium text-justify"
                  dangerouslySetInnerHTML={{ __html: post.excerpt }}
                ></h3> */}
                {tableOfContents && tableOfContents.length > 0 ? (
                  <div className="mt-2">
                    <TableOfContent headings={tableOfContents} />
                  </div>
                ) : null}
              </div>

              {/* <div className="mt-8">
                <Image
                  src={post?.featuredImage?.node?.mediaItemUrl}
                  width={1000}
                  height={600}
                  alt=""
                  className="rounded object-cover"
                />
              </div> */}

              <div
                className="content-wrapper mt-6"
                dangerouslySetInnerHTML={{ __html: updatedContent }}
              ></div>
            </div>
            <div className="lg:col-span-1 col-span-1">
              <div className="w-full bg-white border border-gray/20 p-4 md:p-6 rounded-xl">
                <div className="w-fit">
                  <h2 className="text-2xl text-center text-gray font-bold">
                    {t("relatedPost")}
                  </h2>
                  <div className="w-full flex">
                    <div className={`mt-2 w-[100px] h-[3px] bg-primary`}></div>
                  </div>
                </div>
                {relatedPosts.length > 0 ? (
                  <ul className="mt-6 lg:flex md:grid grid-cols-2 flex flex-col space-y-8 md:space-y-0 md:gap-8 gap-0">
                    {relatedPosts.map((relatePost) => (
                      <li key={relatePost.id} className="">
                        <BlogRelated data={relatePost} category="blog" />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="flex items-center justify-center h-[300px]">
                    <h5 className="text-center text-lg font-medium">
                      {t("noData.related")}
                    </h5>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* scroll to top button */}
      <div className="fixed bottom-24 right-7 z-10">
        <ScrollToTop />
      </div>
    </>
  );
};

export default NewsPostDetailsPage;
