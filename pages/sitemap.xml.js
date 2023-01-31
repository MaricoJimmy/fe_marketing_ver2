import { getApolloClient } from "../libs/apollo-client";
import {
  AllNewsPosts,
  AllOEEPosts,
  AllPMSPosts
} from "../queries/guidesQueries";

function generateSiteMap({ newsPosts, oeePosts, pmsPosts }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <url>
        <loc>https://www.pambu.org/</loc>
   </url>
   <url>
        <loc>https://www.pambu.org/tin-tuc</loc>
   </url>
   <url>
        <loc>https://www.pambu.org/san-pham/pambu-oee</loc>
   </url>
   <url>
        <loc>https://www.pambu.org/san-pham/pambu-pms</loc>
   </url>
   <url>
        <loc>https://www.pambu.org/pambu-oee</loc>
   </url>
   <url>
        <loc>https://www.pambu.org/pambu-pms</loc>
   </url>
   <url>
        <loc>https://www.pambu.org/dat-lich-demo</loc>
   </url>
     ${newsPosts
      .map(({ slug }) => {
        return `
       <url>
           <loc>${`https://www.pambu.org/tin-tuc/${slug}`}</loc>
       </url>
     `;
      })
      .join("")}
       ${oeePosts
      .map(({ slug }) => {
        return `
        <url>
            <loc>${`https://www.pambu.org/pambu-oee/${slug}`}</loc>
        </url>
      `;
      })
      .join("")}
        ${pmsPosts
      .map(({ slug }) => {
        return `
            <url>
                <loc>${`https://www.pambu.org/pambu-pms/${slug}`}</loc>
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
