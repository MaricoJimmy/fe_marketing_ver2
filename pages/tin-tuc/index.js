import React from "react";
import { hygraphClient } from "../../libs/hygraphClient";
import { AllNewsPosts } from "../../queries/guidesQueries";

export async function getStaticProps() {
  const client = hygraphClient();

  const { posts } = await client.request(AllNewsPosts);

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
}

const AllNewsPage = ({ posts }) => {
  console.log(posts);
  return <div>AllNewsPage</div>;
};

export default AllNewsPage;
