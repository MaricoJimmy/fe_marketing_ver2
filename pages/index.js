import Image from "next/image";
import Link from "next/link";
import React from "react";
import PageSeoHead from "../components/common/PageSeoHead";
import Title from "../components/common/Title";
import { getApolloClient } from "../libs/apollo-client";

import {
  NewsPostsQuery,
  OEEPostsQuery,
  PMSPostsQuery,
} from "../queries/homePageQueries";
import { getDate } from "../utils";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

export async function getStaticProps({ locale }) {
  const client = getApolloClient();

  const {
    data: {
      posts: { nodes: oeePosts },
    },
  } = await client.query({
    query: OEEPostsQuery,
  });
  const {
    data: {
      posts: { nodes: pmsPosts },
    },
  } = await client.query({
    query: PMSPostsQuery,
  });
  const {
    data: {
      posts: { nodes: newsPosts },
    },
  } = await client.query({
    query: NewsPostsQuery,
  });

  const localeNewPosts = newsPosts
    .filter((post) => {
      if (locale === "en") {
        return post.title.startsWith("EN-");
      }
      return post.title.startsWith("VN-");
    })
    .map((post) => {
      return {
        ...post,
        title:
          locale === "en"
            ? post.title.replace(/EN-\d{8}-/, "")
            : post.title.replace(/VN-\d{8}-/, ""),
      };
    })
    .slice(0, 5);

  const localeOEEPosts = oeePosts
    .filter((post) => {
      if (locale === "en") {
        return post.title.startsWith("EN-");
      }
      return post.title.startsWith("VN-");
    })
    .map((post) => {
      return {
        ...post,
        title:
          locale === "en"
            ? post.title.replace(/EN-\d{8}-/, "")
            : post.title.replace(/VN-\d{8}-/, ""),
      };
    })
    .slice(0, 5);

  return {
    props: {
      oeePosts: localeOEEPosts,
      pmsPosts,
      newsPosts: localeNewPosts,
    },
    revalidate: 60,
  };
}

const HomePage = ({ oeePosts, pmsPosts, newsPosts }) => {
  const { locale } = useRouter();
  const t = useTranslations("Index");
  const firstPost = newsPosts[0];

  const metaTagData = {
    title: `${t("titleSocial")} | pambu.org`,
    desc: t("desc"),
    img: "/image/pambu.png",
  };
  return (
    <>
      <PageSeoHead data={metaTagData} />
      <div>
       
      </div>
    </>
  );
};

export default HomePage;
