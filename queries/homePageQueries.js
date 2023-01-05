import { gql } from "graphql-request";

const OEEPostsQuery = gql`
  query PostsForPambuOEE {
    posts(
      where: { category: { slug: "pambu-oee" } }
      orderBy: publishedAt_ASC
      first: 5
    ) {
      id
      title
      slug
      desc
      featuredImg {
        height
        width
        url
      }
    }
  }
`;

const PMSPostsQuery = gql`
  query PostsForPambuPMS {
    posts(
      where: { category: { slug: "pambu-pms" } }
      orderBy: publishedAt_ASC
      first: 5
    ) {
      id
      title
      slug
      desc
      featuredImg {
        height
        width
        url
      }
    }
  }
`;

const NewsPostsQuery = gql`
  query PostsForPambuPMS {
    posts(
      where: { category: { slug: "tin-tuc" } }
      orderBy: publishedAt_DESC
      first: 5
    ) {
      id
      title
      slug
      desc
      publishedAt
      featuredImg {
        height
        width
        url
      }
    }
  }
`;
export { OEEPostsQuery, PMSPostsQuery, NewsPostsQuery };

