import { gql } from "@apollo/client";

const PostDetailsQuery = gql`
  query Post($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      title
      slug
      excerpt
      date
      content
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
      tags {
        nodes {
          name
        }
      }
      language {
        language
        key
      }
    }
  }
`;

const MoreRelatedPostsQueryInSameCategory = gql`
  query RelatedPosts($category: String!) {
    posts(
      where: { categoryName: $category, orderby: { field: DATE, order: DESC } }
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
export { PostDetailsQuery, MoreRelatedPostsQueryInSameCategory };
