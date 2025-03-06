import ScrollToTop from "@/components/common/ScrollToTop";
import { Button } from "@/components/ui/button";
import { getDate, getLocalizedPath } from "@/utils";
import {
  ROUTER_BLOG,
  ROUTER_CONTACT,
  ROUTER_NOTIFICATION,
} from "@/utils/constant";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/router";
import PageSeoHead from "../components/common/PageSeoHead";
import { getApolloClient } from "../libs/apollo-client";
import {
  BlogPostsQuery,
  NotificationPostsQuery,
} from "../queries/homePageQueries";

export async function getStaticProps() {
  const client = getApolloClient();

  const {
    data: {
      posts: { nodes: notificationPosts },
    },
  } = await client.query({
    query: NotificationPostsQuery,
  });
  const {
    data: {
      posts: { nodes: blogPosts },
    },
  } = await client.query({
    query: BlogPostsQuery,
  });

  return {
    props: {
      notificationPosts: notificationPosts.slice(0, 5),
      blogPosts: blogPosts.slice(0, 5),
    },
    revalidate: 60,
  };
}

const HomePage = ({ notificationPosts, blogPosts }) => {
  const router = useRouter();
  const t = useTranslations("Index");
  const metaTagData = {
    title: `${t("titleSocial")} | Udata.ai`,
    desc: t("desc"),
    img: "/image/hero/home-pv.png",
  };

  const renderSectionSolution = ({ title, solutions, direction = "right" }) => {
    return (
      <>
        <h4
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-gray lg:text-2xl text-xl text-center font-semibold"
        >
          {title}
        </h4>
        <ul className="mt-6 flex flex-col lg:space-y-8 space-y-4">
          {solutions.map((solution, index) => (
            <li
              data-aos={`fade-${direction}`}
              data-aos-delay={`${index * 100 + 200}`}
              key={solution.title}
              onClick={() => router.push(solution.link)}
              className="px-10 py-8 bg-infor/10 flex items-center gap-2 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <div
                className="shrink-0 text-primary"
                dangerouslySetInnerHTML={{ __html: solution.icon }}
              ></div>
              <h5 className="flex-1 lg:text-lg text-sm text-center font-medium">
                {solution.title}
              </h5>
            </li>
          ))}
        </ul>
      </>
    );
  };

  const renderSectionBlog = ({
    title,
    img,
    posts,
    link,
    direction = "right",
  }) => {
    return (
      <div
        data-aos={`fade-${direction}`}
        data-aos-delay="200"
        className="px-6 py-8 w-full h-full flex flex-col items-center justify-between gap-10 bg-white rounded-xl shadow-md"
      >
        <div className="flex flex-col space-y-4">
          <div className="shrink-0 flex items-center justify-center">
            <Image
              src={img}
              width={300}
              height={200}
              alt=""
              objectFit="contain"
            />
          </div>
          <h3 className="text-center text-neutral text-2xl font-semibold">
            {title}
          </h3>
          <ul className="flex-1 flex flex-col space-y-4">
            {posts?.length > 0 ? (
              posts.map((blog) => (
                <li
                  key={blog.slug}
                  className="flex items-center gap-4 cursor-pointer"
                  onClick={() => router.push(`${link}/${blog.slug}`)}
                >
                  <div className="relative shrink-0 w-[100px] h-[50px]">
                    <Image
                      src={blog?.featuredImage?.node?.mediaItemUrl}
                      width={0}
                      height={0}
                      layout="fill"
                      alt=""
                      objectFit="contain"
                      className="rounded-md bg-gray/10"
                    />
                  </div>
                  <div>
                    <h5 className="text-base text-neutral font-semibold">
                      {blog.title}
                    </h5>
                    <h6 className="text-gray text-sm">
                      {getDate(blog.date, router.locale)}
                    </h6>
                  </div>
                </li>
              ))
            ) : (
              <div className="w-full h-full flex-1 flex items-center justify-center">
                <h4 className="text-lg text-center text-gray font-semibold">
                  Hiện chưa có bài viết nào!
                </h4>
              </div>
            )}
          </ul>
        </div>
        <div>
          <Button variant="outline" onClick={() => router.push(link)}>
            {t("button.full")}
          </Button>
        </div>
      </div>
    );
  };

  return (
    <>
      <PageSeoHead data={metaTagData} />
      <div>
        {/* hero section */}
        <section className="w-full h-screen flex items-center bg-[url('/image/bg/bg-home.png')] bg-center bg-cover bg-no-repeat">
          <div className="lg:p-14 p-8 lg:w-full md:w-[70%]">
            <h1
              data-aos="fade-up"
              className="lg:text-7xl text-4xl text-white font-semibold"
            >
              Udata
            </h1>
            <h4
              data-aos="fade-up"
              data-aos-delay="100"
              className="mt-2 text-white lg:text-2xl text-xl font-medium"
            >
              Iot Platform
            </h4>
            <h3
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-10 text-white lg:text-3xl text-2xl font-semibold transition duration-300 ease-out group"
            >
              {t("titleSocial")}
            </h3>
            <div className="mt-4">
              <Button
                size="lg"
                onClick={() =>
                  router.push(getLocalizedPath(ROUTER_CONTACT, router.locale))
                }
                data-aos="fade-up"
                data-aos-delay="300"
                className="relative rounded-md group overflow-hidden font-medium bg-white text-primary shadow-md"
              >
                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-primary group-hover:h-full opacity-90"></span>
                <span className="relative group-hover:text-white">
                  {t("button.start")}
                </span>
              </Button>
            </div>
          </div>
        </section>
        {/* features */}
        <section className="w-full flex justify-center items-center">
          <div className="px-5 py-20 md:px-8 lg:py-32 max-w-screen-xl w-full">
            <h2
              data-aos="fade-up"
              className="text-neutral text-center lg:text-4xl text-2xl font-bold"
            >
              {t("solutions.title")}
            </h2>
            <div className="lg:mt-20 mt-6 grid lg:grid-cols-2 gap-10">
              <div>
                {renderSectionSolution({
                  ...t.raw("solutions.byObject"),
                  direction: "right",
                })}
              </div>
              <div>
                {renderSectionSolution({
                  ...t.raw("solutions.byFields"),
                  direction: "left",
                })}
              </div>
            </div>
          </div>
        </section>
        {/* blog */}
        <section className="w-full flex justify-center items-center bg-primary/5">
          <div className="px-5 py-20 md:px-8 lg:py-32 max-w-screen-xl w-full">
            <h2
              data-aos="fade-up"
              className="text-neutral text-center lg:text-4xl text-2xl font-bold"
            >
              {t("news")}
            </h2>
            <div className="mt-10 grid lg:grid-cols-2 gap-10">
              <div className="w-full h-full">
                {renderSectionBlog({
                  title: t("notification"),
                  img: "/image/oee/document-highlight.png",
                  posts: notificationPosts,
                  link: ROUTER_NOTIFICATION,
                  direction: "right",
                })}
              </div>
              <div className="w-full h-full">
                {renderSectionBlog({
                  title: "Blog",
                  img: "/image/pms/document-highlight.png",
                  posts: blogPosts,
                  link: ROUTER_BLOG,
                  direction: "left",
                })}
              </div>
            </div>
          </div>
        </section>
        {/* about-us */}
        <section className="w-full flex justify-center items-center">
          <div className="px-5 py-20 md:px-8 lg:py-32 max-w-screen-xl w-full grid lg:grid-cols-2 gap-10">
            <div data-aos="fade-up">
              <div>
                <h4 className="text-infor lg:text-2xl text-xl font-semibold uppercase">
                  {t("about-us.title")}
                </h4>
                <h2 className="mt-4 text-neutral lg:text-5xl text-4xl font-semibold">
                  Udata: Unlock your Data
                </h2>
              </div>
              <div
                className="lg:mt-14 mt-8 flex flex-col gap-1 text-gray lg:text-lg text-justify"
                dangerouslySetInnerHTML={{ __html: t.raw("about-us.content") }}
              ></div>
            </div>
            <div data-aos="fade-left" className="flex flex-col items-center">
              <div className="relative w-full lg:h-full h-[300px]">
                <Image
                  src="/image/about-us/about-us-2.png"
                  width={0}
                  height={0}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                  className="rounded"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="fixed bottom-24 right-7 z-10">
          <ScrollToTop />
        </div>
      </div>
    </>
  );
};

export default HomePage;
