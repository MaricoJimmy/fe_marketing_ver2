import React from "react";
import { hygraphClient } from "../../../libs/hygraphClient";
import { AllOEEPosts } from "../../../queries/guidesQueries";
import {
  MoreRelatedPostsQueryInSameCategory,
  PostDetailsQuery,
} from "../../../queries/postQuery";

export async function getStaticProps({ params }) {
  const client = hygraphClient();

  const { post } = await client.request(PostDetailsQuery, {
    slug: params.postSlug,
  });

  const { posts: relatedPosts } = await client.request(
    MoreRelatedPostsQueryInSameCategory,
    {
      slug: params.postSlug,
      category: "pambu-oee",
    }
  );

  if (!post) {
    return {
      notFound: true,
    };
  }

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

  const posts = await client.request(AllOEEPosts);

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

const OEEDetailPost = ({ post, relatedPosts }) => {
  console.log(post);
  console.log(relatedPosts);
  return <div>OEEDetailPost</div>;
};

export default OEEDetailPost;
