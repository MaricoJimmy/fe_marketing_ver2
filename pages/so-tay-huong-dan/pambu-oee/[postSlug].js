import parse from "html-react-parser";
import Head from "next/head";
import Image from "next/image";
import React, { useMemo } from "react";
import { v4 } from "uuid";
import BlogRelated from "../../../components/common/BlogRelated";
import Breadcrumb from "../../../components/common/Breadcrumb";
import { getApolloClient } from "../../../libs/apollo-client";
import { AllOEEPosts } from "../../../queries/guidesQueries";
import {
  MoreRelatedPostsQueryInSameCategory,
  PostDetailsQuery
} from "../../../queries/postQuery";
import { getDate } from "../../../utils";

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

export async function getStaticPaths() {
  let paths = [];

  const client = getApolloClient();

  const {
    data: {
      posts: { nodes: items },
    },
  } = await client.query({
    query: AllOEEPosts,
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

const OEEDetailPost = ({ post, relatedPosts }) => {
  const breadcrumbs = useMemo(() => {
    return [
      {
        label: "Trang chủ",
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

  return (
    <>
      <Head>
        <title>{post.title} | Pambu</title>
        <meta property="og:title" content={`${post.title} | Pambu`}></meta>
        <meta property="og:description" content={post.desc}></meta>
        <meta property="og:image" content={post.featuredImage.node.mediaItemUrl}></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="w-full flex justify-center items-center">
        <div className="px-5 py-3 md:px-8 md:py-10 max-w-screen-xl w-full">
          <Breadcrumb data={breadcrumbs} />
          <div className="mt-8 grid grid-cols-3 gap-10">
            <div className="col-span-2">
              <div className="mb-6">
                <h1 className="font-bold text-4xl text-green-secondary mb-2">{post.title}</h1>
                <p className="mt-6 text-gray/80 text-sm">Ngày xuất bản: {getDate(post.date)}</p>
                <h3 className="mt-4 text-lg text-gray font-medium" dangerouslySetInnerHTML={{ __html: post.excerpt }}></h3>
              </div>

              <div className="mt-10">
                <Image src={post.featuredImage.node.mediaItemUrl} width="1000" height="500" alt="" />
              </div>

              {parse(post.content, {
                replace: (domNode) => {
                  // image
                  if (domNode.name === "img") {
                    return (
                      <img
                        src={domNode.attribs.src}
                        alt={domNode.attribs.alt}
                        className="block mx-auto w-full"
                      />
                    );
                  }

                  // image caption
                  if (domNode.name === "figcaption") {
                    return (
                      <div className="text-center text-gray/80 italic text-md mt-2">
                        {domNode.children[0].data}
                      </div>
                    );
                  }

                  // heading 2
                  if (domNode.name === "h2") {
                    return (
                      <h2 className="text-gray font-bold text-3xl my-4">
                        {domNode.children[0].data}
                      </h2>
                    );
                  }

                  // heading 3
                  if (domNode.name === "h3") {
                    return (
                      <h3 className="text-gray font-bold text-2xl my-4">
                        {domNode.children[0].data}
                      </h3>
                    );
                  }

                  // heading 4
                  if (domNode.name === "h4") {
                    return (
                      <h4 className="text-gray font-bold text-xl my-4">
                        {domNode.children[0].data}
                      </h4>
                    );
                  }

                  // heading 5
                  if (domNode.name === "h5") {
                    return (
                      <h5 className="text-gray font-semibold text-lg my-4">
                        {domNode.children[0].data}
                      </h5>
                    );
                  }

                  // heading 6
                  if (domNode.name === "h6") {
                    return (
                      <h6 className="text-gray font-medium text-md my-4">
                        {domNode.children[0].data}
                      </h6>
                    );
                  }

                  // p
                  if (domNode.name === "p") {
                    return (
                      <p className="text-gray font-medium text-md my-4">
                        {domNode.children[0].data}
                      </p>
                    );
                  }

                  // table
                  if (domNode.name === "table") {
                    return (
                      <table className="border-collapse">
                        <thead>
                          <tr>
                            {
                              domNode.children[0].children[0].children.map(item => {
                                const data = item.children[0].children[0].data
                                return <th key={v4()} className='p-2 text-gray text-md bg-green-primary/20 border border-gray/40 border-collapse'>{data}</th>
                              })
                            }
                          </tr>
                        </thead>
                        <tbody>
                          {domNode.children[0].children.slice(1).map(item => {
                            const childrenItem = item.children
                            return (
                              <tr key={v4()} className=''>
                                {
                                  childrenItem.map(td => {
                                    const data = td.children[0].data
                                    return <td key={v4()} className='p-2 text-gray text-md border border-gray/40 border-collapse'>{data}</td>
                                  })
                                }
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    );
                  }
                },
              })}

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

export default OEEDetailPost
