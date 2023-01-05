import React from "react";
import Title from "../components/common/Title";
import { hygraphClient } from "../libs/hygraphClient";
import {
  NewsPostsQuery,
  OEEPostsQuery,
  PMSPostsQuery
} from "../queries/homePageQueries";

export async function getStaticProps() {
  const client = hygraphClient();

  const oeePosts = await client.request(OEEPostsQuery);
  const pmsPosts = await client.request(PMSPostsQuery);
  const newsPosts = await client.request(NewsPostsQuery);

  return {
    props: {
      oeePosts,
      pmsPosts,
      newsPosts,
    },
    revalidate: 60,
  };
}

const HomePage = ({ oeePosts, pmsPosts, newsPosts }) => {
  console.log("oeePosts", oeePosts);
  console.log("pmsPosts", pmsPosts);
  console.log("newsPosts", newsPosts);
  const firstPost = newsPosts.posts[0]
  return (
    <div>
      <Title
        label="Tin tức nổi bật"
        className="bg-green-primary"
      />
      <div className="mt-8">
        <div className="grid grid-cols-12 gap-16">
          <div className="col-span-12 lg:col-span-5">
            <div className="w-full border border-gray/20 rounded-lg">
              <div>
                <img src={firstPost.featuredImg.url} alt="" className="object-cover rounded-t-lg" />
              </div>
              <div className="p-8">
                <p className="text-xl text-gray font-semibold">{firstPost.title}</p>
                <span className="block mt-2 text-gray/60">
                  {new Date(firstPost.publishedAt).toLocaleDateString()}
                </span>
                <p className="mt-4 text-gray/80">
                  {firstPost.desc}
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <ul>
              {
                newsPosts.posts.slice(1, 5).map(post => (
                  <li key={post.id} className='mb-8 flex items-start'>
                    <div>
                      <img src={post.featuredImg.url} alt="" className="w-[145px] object-cover rounded" />
                    </div>
                    <div className="ml-8">
                      <p>{post.title}</p>
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
