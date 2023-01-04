import { gql } from "graphql-request";

const PostDetailsQuery = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      slug
      title
      content {
        markdown
        raw
      }
      createdAt
      desc
      featuredImg {
        height
        width
        url
      }
    }
  }
`;

const MoreRelatedPostsQueryInSameCategory = gql`
  query RelatedPosts($slug: String!, $category: String!) {
    posts(
      where: { slug_not: $slug, category: { slug: $category } }
      orderBy: publishedAt_ASC
      first: 5
    ) {
      slug
      title
      createdAt
      desc
      category {
        title
        slug
      }
      featuredImg {
        height
        width
        url
      }
    }
  }
`;
export { PostDetailsQuery, MoreRelatedPostsQueryInSameCategory };
