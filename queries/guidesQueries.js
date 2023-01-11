import { gql } from "@apollo/client";

const AllPMSPosts = gql`
  query AllPosts {
    posts(
      where: { categoryName: "pambu-pms", orderby: { field: DATE, order: ASC } }
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
const AllOEEPosts = gql`
  query AllPosts {
    posts(
      where: { categoryName: "pambu-oee", orderby: { field: DATE, order: ASC } }
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
const AllNewsPosts = gql`
  query AllPosts {
    posts(
      where: { categoryName: "tin-tuc", orderby: { field: DATE, order: DESC } }
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

export { AllPMSPosts, AllOEEPosts, AllNewsPosts };
