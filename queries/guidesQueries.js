import { gql } from "graphql-request";

const AllPMSPosts = gql`
  query AllPosts {
    posts(
      where: { category: { slug: "pambu-pms" } }
      orderBy: publishedAt_ASC
    ) {
      id
      desc
      title
      slug
      featuredImg {
        height
        width
        url
      }
    }
  }
`;

const AllOEEPosts = gql`
  query AllPosts {
    posts(
      where: { category: { slug: "pambu-oee" } }
      orderBy: publishedAt_ASC
    ) {
      id
      desc
      title
      slug
      featuredImg {
        height
        width
        url
      }
    }
  }
`;

const AllNewsPosts = gql`
  query AllPosts {
    posts(where: { category: { slug: "tin-tuc" } }, orderBy: publishedAt_DESC) {
      id
      desc
      title
      slug
      featuredImg {
        height
        width
        url
      }
    }
  }
`;
export { AllPMSPosts, AllOEEPosts, AllNewsPosts };
