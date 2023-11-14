import { gql } from "@apollo/client";

const OEEPostsQuery = gql`
  query PostsForPambuOEE {
    posts(
      where: { categoryName: "pambu-oee", orderby: { field: DATE, order: ASC } }
      first: 100
    ) {
      nodes {
        id
        title
        slug
        excerpt
        date
        featuredImage {
          node {
            altText
            caption
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
        }
      }
    }
  }
`;

const PMSPostsQuery = gql`
  query PostsForPambuPMS {
    posts(
      where: { categoryName: "pambu-pms", orderby: { field: DATE, order: ASC } }
      first: 100
    ) {
      nodes {
        id
        title
        slug
        excerpt
        date
        featuredImage {
          node {
            altText
            caption
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
        }
      }
    }
  }
`;

const NewsPostsQuery = gql`
  query PostsForPambuPMS {
    posts(
      where: { categoryName: "tin-tuc", orderby: { field: DATE, order: DESC } }
      first: 100
    ) {
      nodes {
        id
        title
        slug
        excerpt
        date
        featuredImage {
          node {
            altText
            caption
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
        }
      }
    }
  }
`;
export { OEEPostsQuery, PMSPostsQuery, NewsPostsQuery };
