import { gql } from "@apollo/client";

const AllBlogPosts = gql`
  query AllPosts {
    posts(
      first: 100
      where: { categoryName: "blog", orderby: { field: DATE, order: DESC } }
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
        language {
          language
          key
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
        language {
          language
          key
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
        language {
          language
          key
        }
      }
    }
  }
`;

export { AllBlogPosts, AllNotiPosts, AllNewsPosts };
