import { gql } from "@apollo/client";

const AllBlogPosts = gql`
  query AllPosts {
    posts(
      first: 100
      where: {
        categoryName: "blog"
        orderby: { field: DATE, order: DESC }
      }
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
const AllNotiPosts = gql`
  query AllPosts {
    posts(
      first: 100
      where: {
        categoryName: "notification"
        orderby: { field: DATE, order: DESC }
      }
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
      first: 100
      where: {
        categoryName: "notification"
        orderby: { field: DATE, order: DESC }
      }
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

export { AllBlogPosts, AllNotiPosts, AllNewsPosts };
