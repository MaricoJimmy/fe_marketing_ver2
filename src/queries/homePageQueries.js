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
        language {
          language
          key
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
        language {
          language
          key
        }
      }
    }
  }
`;

const BlogPostsQuery = gql`
  query PostsForNotification {
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
        language {
          language
          key
        }
      }
    }
  }
`;
export { NotificationPostsQuery, PMSPostsQuery, BlogPostsQuery };
