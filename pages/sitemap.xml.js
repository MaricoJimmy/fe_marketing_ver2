import { getApolloClient } from "../libs/apollo-client";
import {
  AllNewsPosts,
  AllOEEPosts,
  AllPMSPosts,
} from "../queries/guidesQueries";

function generateSiteMap({ newsPosts, oeePosts, pmsPosts }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <url>
        <loc>https://www.udata.ai/</loc>
   </url>
   <url>
        <loc>https://www.udata.ai/san-pham/nen-tang-saas</loc>
   </url>
   <url>
        <loc>https://www.udata.ai/san-pham/tich-hop-du-lieu</loc>
   </url>
    <url>
        <loc>https://www.udata.ai/giai-phap/nha-dau-tu</loc>
   </url>
    <url>
        <loc>https://www.udata.ai/giai-phap/nha-quan-ly-cap-cao</loc>
   </url>
    <url>
        <loc>https://www.udata.ai/giai-phap/nha-quan-ly-van-hanh</loc>
   </url>
    <url>
        <loc>https://www.udata.ai/giai-phap/solar-rooftop</loc>
   </url>
    <url>
        <loc>https://www.udata.ai/giai-phap/nha-may</loc>
   </url>
    <url>
        <loc>https://www.udata.ai/giai-phap/thuy-san</loc>
   </url>
   <url>
        <loc>https://www.udata.ai/lien-he</loc>
   </url>
    <url>
        <loc>https://www.udata.ai/tuyen-dung</loc>
   </url>
    <url>
        <loc>https://www.udata.ai/ve-cong-ty</loc>
   </url>
       ${oeePosts
         .map(({ slug }) => {
           return `
        <url>
            <loc>${`https://www.udata.ai/case-study/${slug}`}</loc>
        </url>
      `;
         })
         .join("")}
        ${pmsPosts
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
      posts: { nodes: oeePosts },
    },
  } = await client.query({
    query: AllOEEPosts,
  });

  const {
    data: {
      posts: { nodes: pmsPosts },
    },
  } = await client.query({
    query: AllPMSPosts,
  });
  // We make an API call to gather the URLs for our site

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap({
    newsPosts,
    oeePosts,
    pmsPosts,
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
