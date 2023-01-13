import Head from "next/head";
import Image from "next/image";
import React, { useMemo } from "react";
import BlogRelated from "../../components/common/BlogRelated";
import Breadcrumb from "../../components/common/Breadcrumb";
import { getApolloClient } from "../../libs/apollo-client";
import { AllNewsPosts } from "../../queries/guidesQueries";
import {
  MoreRelatedPostsQueryInSameCategory,
  PostDetailsQuery
} from "../../queries/postQuery";
import { getDate } from "../../utils";

// import dynamic from "next/dynamic";

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
      category: "tin-tuc",
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

export async function getStaticPaths() {
  let paths = [];

  const client = getApolloClient();

  const {
    data: {
      posts: { nodes: items },
    },
  } = await client.query({
    query: AllNewsPosts,
  });

  items.forEach((post) => {
    paths.push({
      params: {
        postSlug: post.slug,
      },
    });
  });

  return {
    paths,
    fallback: false,
  };
}

const NewsPostDetailsPage = ({ post, relatedPosts }) => {
  const breadcrumbs = useMemo(() => {
    return [
      {
        label: "Trang chủ",
        slug: "/"
      },
      {
        label: "Tin tức",
        slug: "/tin-tuc"
      },
      {
        label: post.title,
      }
    ]
  }, [post])
  return (
    <>
      <Head>
        <title>{post.title} | Pambu</title>
        <meta property="og:title" content={`${post.title} | Pambu`}></meta>
        <meta property="og:description" content={post.excerpt.replace(/<[^>]+>/g, '')}></meta>
        <meta property="og:image" content={post.featuredImage.node.mediaItemUrl}></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="w-full flex justify-center items-center">
        <div className="px-5 md:px-8 py-10 max-w-screen-xl w-full">
          <Breadcrumb data={breadcrumbs} />
          <div className="mt-8 grid grid-cols-3 gap-10">
            <div className="col-span-3 md:col-span-2">
              <div className="mb-6">
                <h1 className="font-bold text-4xl text-green-secondary mb-2">{post.title}</h1>
                <p className="mt-6 text-gray/80 text-sm">Ngày xuất bản: {getDate(post.date)}</p>
                <h3 className="mt-4 text-lg text-gray font-medium text-justify" dangerouslySetInnerHTML={{ __html: post.excerpt }}></h3>
              </div>

              <div className="mt-8">
                <Image src={post.featuredImage.node.mediaItemUrl} width="1000" height="500" alt="" className="rounded" />
              </div>

              <div className="content-wrapper mt-6" dangerouslySetInnerHTML={{ __html: post.content }}>
              </div>

            </div>
            <div className="col-span-3 md:col-span-1">
              <div className="w-full bg-white border border-gray/20 p-6 md:p-8 rounded-lg">
                <div className='w-fit'>
                  <h2 className='text-2xl text-center text-gray font-bold'>Bài viết liên quan</h2>
                  <div className='w-full flex'>
                    <div className={`mt-2 w-[100px] h-[3px] bg-green-primary`}>
                    </div>
                  </div>
                </div>
                <ul className="mt-6">
                  {relatedPosts.map(relatePost => (
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
