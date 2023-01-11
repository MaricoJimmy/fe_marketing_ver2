import { RichText } from "@graphcms/rich-text-react-renderer";
import Head from "next/head";
import Image from "next/image";
import React, { useMemo } from "react";
import BlogRelated from "../../components/common/BlogRelated";
import Breadcrumb from "../../components/common/Breadcrumb";
import { hygraphClient } from "../../libs/hygraphClient";
import { AllNewsPosts } from "../../queries/guidesQueries";
import {
  MoreRelatedPostsQueryInSameCategory,
  PostDetailsQuery
} from "../../queries/postQuery";
import { getDate } from "../../utils";


export async function getStaticProps({ params }) {
  const client = hygraphClient();

  const { post } = await client.request(PostDetailsQuery, {
    slug: params.postSlug,
  });

  const { posts: relatedPosts } = await client.request(
    MoreRelatedPostsQueryInSameCategory,
    {
      slug: params.postSlug,
      category: "tin-tuc",
    }
  );

  return {
    props: {
      post,
      relatedPosts,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  let paths = [];

  const client = hygraphClient();

  const posts = await client.request(AllNewsPosts);

  posts.posts.forEach((post) => {
    paths.push({
      params: {
        postSlug: post.slug,
      },
    });
  });

  return {
    paths,
    fallback: "blocking",
  };
}

const NewsPostDetailsPage = ({ post, relatedPosts }) => {
  const content = post.content.raw;
  const title = post.title;
  const desc = post.desc

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
        <meta property="og:description" content={post.desc}></meta>
        <meta property="og:image" content={post.featuredImg.url}></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="w-full flex justify-center items-center">
        <div className="px-5 py-3 md:px-8 md:py-10 max-w-screen-xl w-full">
          <Breadcrumb data={breadcrumbs} />
          <div className="mt-8 grid grid-cols-3 gap-10">
            <div className="col-span-2">
              <div className="mb-6">
                <h1 className="font-bold text-4xl text-green-secondary mb-2">{title}</h1>
                <p className="mt-6 text-gray/80 text-sm">Ngày xuất bản: {getDate(post.createdAt)}</p>
                <h3 className="mt-4 text-lg text-gray font-medium">{desc}</h3>
              </div>

              <div className="mt-10">
                <Image src={post.featuredImg.url} width="1000" height="500" alt="" />
              </div>

              <RichText
                content={content}
                renderers={{
                  h2: ({ children }) => (
                    <h2 className="text-gray font-bold text-2xl my-4">{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-gray font-bold text-xl my-4">{children}</h3>
                  ),
                  h5: ({ children }) => (
                    <h5 className="text-gray font-bold text-sm my-4">{children}</h5>
                  ),
                  bold: ({ children }) => <strong>{children}</strong>,
                  h4: ({ children }) => (
                    <h4 className="my-4 text-gray font-bold text-xl ">{children}</h4>
                  ),
                  p: ({ children }) => (
                    <p className="w-full text-gray leading-7">{children}</p>
                  ),
                  table: ({ children }) => (
                    <table className="w-full border-collapse border border-gray-300 my-4">
                      {children}
                    </table>
                  ),
                  table_head: ({ children }) => (
                    <thead className="border-collapse border border-gray-300 bg-green-300">
                      {children}
                    </thead>
                  ),
                  table_header_cell: ({ children }) => (
                    <th className="text-gray border-collapse border border-gray-300 p-2">
                      {children}
                    </th>
                  ),
                  table_body: ({ children }) => (
                    <tbody className="border-collapse border border-gray-300">
                      {children}
                    </tbody>
                  ),

                  table_cell: ({ children }) => (
                    <td className="border-collapse border border-gray-300 p-2">
                      {children}
                    </td>
                  ),

                  ul: ({ children }) => (
                    <ul className="list-disc list-inside">{children}</ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-inside">{children}</ol>
                  ),
                  li: ({ children }) => <li className="my-2">{children}</li>,
                  a: ({ children, href }) => (
                    <a
                      href={href ? href : "#"}
                      className="text-green-700 hover:text-green-500"
                    >
                      {children}
                    </a>
                  ),
                  img: ({ src, altText, width, height }) => (
                    <div className="my-6">
                      <img
                        src={src}
                        alt={altText}
                        width={width}
                        height={height}
                        className="block mx-auto"
                      />
                      <p className="text-center text-gray-500 text-sm mt-2">
                        {altText}
                      </p>
                    </div>
                  ),
                }}
              />

            </div>
            <div className="col-span-1">
              <div className="w-full bg-white border border-gray/20 p-8 rounded-lg">
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
                      <BlogRelated data={relatePost} />
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
