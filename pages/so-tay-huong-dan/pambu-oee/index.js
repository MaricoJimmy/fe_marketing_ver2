import React from "react";
import { hygraphClient } from "../../../libs/hygraphClient";
import { AllOEEPosts } from "../../../queries/guidesQueries";

export async function getStaticProps() {
  const client = hygraphClient();

  const { posts } = await client.request(AllOEEPosts);

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
}

const OEEGuidesPage = ({ posts }) => {
  console.log(posts);
  return <div>OEEGuidesPage</div>;
};

export default OEEGuidesPage;
