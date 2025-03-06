import { gql } from "@apollo/client";

const NotificationPostsQuery = gql`
  query PostsForNotification {
    posts(
      where: {
        categoryName: "notification"
        orderby: { field: DATE, order: DESC }
      }
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
  query PostsForBlog {
    posts(
      where: { categoryName: "blog", orderby: { field: DATE, order: DESC } }
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

const BlogPostsQuery = gql`
  query PostsForBlog {
    posts(
      where: { categoryName: "blog", orderby: { field: DATE, order: DESC } }
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
export { NotificationPostsQuery, PMSPostsQuery, BlogPostsQuery };
