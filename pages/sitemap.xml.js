import { routeMaps } from "@/utils/router";
import { getApolloClient } from "../libs/apollo-client";
import {
  AllNewsPosts,
  AllNotiPosts,
  AllBlogPosts,
} from "../queries/guidesQueries";

function generateSiteMap({ notiPosts, blogPosts }) {
  const routes = Object.keys(routeMaps).reduce((acc, locale) => {
    Object.values(routeMaps[locale]).forEach((route) => {
      acc.push({ locale, route });
    });
    return acc;
  }, []);

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
        <loc>https://www.udata.ai/</loc>
     </url>
     ${routes
       .map(({ locale, route }) => {
         return `
         <url>
             <loc>${`https://www.udata.ai${route}`}</loc>
         </url>
       `;
       })
       .join("")}
     ${notiPosts
       .map(({ slug }) => {
         return `
         <url>
             <loc>${`https://www.udata.ai/thong-bao/${slug}`}</loc>
         </url>
       `;
       })
       .join("")}
     ${blogPosts
       .map(({ slug }) => {
         return `
         <url>
             <loc>${`https://www.udata.ai/blog/${slug}`}</loc>
         </url>
       `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const client = getApolloClient();

  const {
    data: {
      posts: { nodes: newsPosts },
    },
  } = await client.query({
    query: AllNewsPosts,
  });

  const {
    data: {
      posts: { nodes: notiPosts },
    },
  } = await client.query({
    query: AllNotiPosts,
  });

  const {
    data: {
      posts: { nodes: blogPosts },
    },
  } = await client.query({
    query: AllBlogPosts,
  });
  // We make an API call to gather the URLs for our site

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap({
    newsPosts,
    notiPosts,
    blogPosts,
  });

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
