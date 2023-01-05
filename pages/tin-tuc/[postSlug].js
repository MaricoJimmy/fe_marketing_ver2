import React from "react";
import { hygraphClient } from "../../libs/hygraphClient";
import { AllNewsPosts } from "../../queries/guidesQueries";
import { RichText } from "@graphcms/rich-text-react-renderer";

import {
  MoreRelatedPostsQueryInSameCategory,
  PostDetailsQuery,
} from "../../queries/postQuery";

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
  console.log(post);
  console.log(relatedPosts);
  const content = post.content.raw;
  const title = post.title;
  const date = new Date(post.createdAt).toLocaleDateString("vi-VN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div>
      <div className="w-full min-h-screen">
        <div className="max-w-3xl mx-auto w-full p-4 text-justify">
          <div className="mb-6">
            <h1 className="font-bold text-4xl text-green-600 mb-2">{title}</h1>
            <p className="text-gray-500 text-sm">Ngày xuất bản: {date}</p>
          </div>

          <RichText
            content={content}
            renderers={{
              h2: ({ children }) => (
                <h1 className="font-bold text-2xl">{children}</h1>
              ),
              h3: ({ children }) => (
                <h1 className="font-bold text-xl">{children}</h1>
              ),
              h4: ({ children }) => (
                <h1 className="font-bold text-lg">{children}</h1>
              ),
              h4: ({ children }) => <h1 className="font-bold">{children}</h1>,
              h5: ({ children }) => (
                <h1 className="font-bold text-sm">{children}</h1>
              ),
              bold: ({ children }) => <strong>{children}</strong>,
              h4: ({ children }) => (
                <h1 className="my-4 font-bold text-xl ">{children}</h1>
              ),
              p: ({ children }) => (
                <p className="w-full leading-7">{children}</p>
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
                <th className="border-collapse border border-gray-300 p-2">
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
      </div>
    </div>
  );
};

export default NewsPostDetailsPage;
