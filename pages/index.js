import React from "react";
import { hygraphClient } from "../libs/hygraphClient";
import {
  NewsPostsQuery,
  OEEPostsQuery,
  PMSPostsQuery,
} from "../queries/homePageQueries";

export async function getStaticProps() {
  const client = hygraphClient();

  const oeePosts = await client.request(OEEPostsQuery);
  const pmsPosts = await client.request(PMSPostsQuery);
  const newsPosts = await client.request(NewsPostsQuery);

  return {
    props: {
      oeePosts,
      pmsPosts,
      newsPosts,
    },
    revalidate: 60,
  };
}

const HomePage = ({ oeePosts, pmsPosts, newsPosts }) => {
  console.log("oeePosts", oeePosts);
  console.log("pmsPosts", pmsPosts);
  console.log("newsPosts", newsPosts);
  return <div>HomePage</div>;
};

export default HomePage;
