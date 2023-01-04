import React from "react";
import { hygraphClient } from "../../../libs/hygraphClient";
import { AllPMSPosts } from "../../../queries/guidesQueries";

export async function getStaticProps() {
  const client = hygraphClient();

  const { posts } = await client.request(AllPMSPosts);

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
}

const PMSGuidesPage = ({ posts }) => {
  console.log(posts);
  return <div>PMSGuidesPage</div>;
};

export default PMSGuidesPage;
