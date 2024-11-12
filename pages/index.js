import Image from "next/image";
import PageSeoHead from "../components/common/PageSeoHead";
import { getApolloClient } from "../libs/apollo-client";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import {
  NewsPostsQuery,
  OEEPostsQuery,
  PMSPostsQuery,
} from "../queries/homePageQueries";
import { getDate } from "@/utils";
import { ROUTER_BLOG, ROUTER_CASE_STUDY } from "@/utils/constant";

export async function getStaticProps({ locale }) {
  const client = getApolloClient();

  const {
    data: {
      posts: { nodes: oeePosts },
    },
  } = await client.query({
    query: OEEPostsQuery,
  });
  const {
    data: {
      posts: { nodes: pmsPosts },
    },
  } = await client.query({
    query: PMSPostsQuery,
  });
  const {
    data: {
      posts: { nodes: newsPosts },
    },
  } = await client.query({
    query: NewsPostsQuery,
  });

  const localeNewPosts = newsPosts
    .map((post) => {
      return {
        ...post,
      };
    })
    .slice(0, 5);

  const localeOEEPosts = oeePosts
    .map((post) => {
      return {
        ...post,
      };
    })
    .slice(0, 5);

  return {
    props: {
      oeePosts: localeOEEPosts,
      pmsPosts,
      newsPosts: localeNewPosts,
    },
    revalidate: 60,
  };
}

const HomePage = ({ oeePosts, pmsPosts, newsPosts }) => {
  const router = useRouter();
  const t = useTranslations("Index");
  const firstPost = newsPosts[0];

  const metaTagData = {
    title: `${t("titleSocial")} | udata.ai`,
    desc: t("desc"),
    img: "/image/hero/home-pv.png",
  };

  const solutionsByObject = {
    title: "Giải pháp theo đối tượng",
    solutions: [
      {
        title: "Giải pháp cho Chủ đầu tư - Quản lý cấp cao",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-user"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        ),
      },
      {
        title: "Giải pháp cho Cấp quản lý",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M17 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M7 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          </svg>
        ),
      },
      {
        title: "Giải pháp cho Cấp vận hành",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <circle cx="12" cy="12" r="4" />
          </svg>
        ),
      },
    ],
  };

  const solutionsByFields = {
    title: "Giải pháp theo từng lĩnh vực",
    solutions: [
      {
        title: "Năng lượng mặt trời áp mái",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
        ),
      },
      {
        title: "Nhà máy công nghiệp",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
            <path d="M17 18h1" />
            <path d="M12 18h1" />
            <path d="M7 18h1" />
          </svg>
        ),
      },
      {
        title: "Nuôi trồng thủy sản",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 16s9-15 20-4C11 23 2 8 2 8" />
          </svg>
        ),
      },
    ],
  };

  const renderSectionSolution = ({ title, solutions }) => {
    return (
      <>
        <h4 className="text-gray lg:text-2xl text-xl text-center font-semibold">
          {title}
        </h4>
        <ul className="mt-6 flex flex-col lg:space-y-8 space-y-4">
          {solutions.map((solution) => (
            <li
              key={solution.title}
              className="px-10 py-8 bg-infor/10 flex items-center gap-2 rounded-lg shadow-md"
            >
              <div className="shrink-0 text-primary">{solution.icon}</div>
              <h5 className="flex-1 lg:text-lg text-sm text-center font-medium">
                {solution.title}
              </h5>
            </li>
          ))}
        </ul>
      </>
    );
  };

  const renderSectionBlog = ({ title, img, blogs, link }) => {
    return (
      <div className="px-6 py-8 w-full h-full flex flex-col items-center justify-between gap-10 bg-white rounded-xl shadow-md">
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
            {blogs.length > 0 ? (
              blogs.map((blog) => (
                <li
                  key={blog._id}
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
                      className="rounded-md"
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
            Xem thêm
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
        <section className="w-full h-[500px] flex md:items-center bg-[url('/image/bg/bg-home.png')] bg-center bg-cover bg-no-repeat">
          <div className="lg:p-14 p-8 lg:w-full md:w-[70%]">
            <h1 className="lg:text-7xl text-4xl text-white font-semibold">
              Udata
            </h1>
            <h4 className="mt-2 text-white lg:text-2xl text-xl font-medium">
              Iot Platform
            </h4>
            <h3 className="mt-10 text-white lg:text-3xl text-2xl font-semibold">
              Nền tảng quản lý và giám sát năng lượng
            </h3>
            <div className="mt-4">
              <Button size="lg">Bắt đầu</Button>
            </div>
          </div>
        </section>
        {/* features */}
        <section className="w-full flex justify-center items-center">
          <div className="px-5 py-20 md:px-8 lg:py-44 max-w-screen-xl w-full">
            <h2 className="text-neutral text-center lg:text-4xl text-2xl font-bold">
              Udata.ai phá vỡ giới hạn trong việc sử dụng dữ liệu của bạn
            </h2>
            <div className="lg:mt-20 mt-6 grid lg:grid-cols-2 gap-10">
              <div>{renderSectionSolution(solutionsByObject)}</div>
              <div>{renderSectionSolution(solutionsByFields)}</div>
            </div>
          </div>
        </section>
        {/* blog */}
        <section className="w-full flex justify-center items-center bg-primary/5">
          <div className="px-5 py-20 md:px-8 lg:py-44 max-w-screen-xl w-full">
            <h2 className="text-neutral text-center lg:text-4xl text-2xl font-bold">
              Tin tức
            </h2>
            <div className="mt-10 grid lg:grid-cols-2 gap-10">
              <div className="w-full h-full">
                {renderSectionBlog({
                  title: "Case study",
                  img: "/image/oee/document-highlight.png",
                  blogs: oeePosts,
                  link: ROUTER_CASE_STUDY,
                })}
              </div>
              <div className="w-full h-full">
                {renderSectionBlog({
                  title: "Blog",
                  img: "/image/pms/document-highlight.png",
                  blogs: pmsPosts,
                  link: ROUTER_BLOG,
                })}
              </div>
            </div>
          </div>
        </section>
        {/* about-us */}
        <section className="w-full flex justify-center items-center">
          <div className="px-5 py-20 md:px-8 lg:py-44 max-w-screen-xl w-full grid lg:grid-cols-2 gap-10">
            <div>
              <div>
                <h4 className="text-infor lg:text-2xl text-xl font-semibold uppercase">
                  Về chúng tôi
                </h4>
                <h2 className="mt-4 text-neutral lg:text-5xl text-4xl font-semibold">
                  Udata: Unlock your Data
                </h2>
              </div>
              <div className="lg:mt-14 mt-8 flex flex-col gap-1 text-gray lg:text-lg text-justify">
                <p>
                  Được phát triển từ năm 2022. Năm 2024, Udata được đầu tư bởi
                  DHG.
                </p>
                <p>
                  Udata hướng tới mục tiêu trở thành nền tảng phần mềm{" "}
                  <span className="font-semibold">
                    hàng đầu Việt Nam và Đông Nam Á
                  </span>{" "}
                  trong lĩnh vực quản trị năng lượng, phân tích dữ liệu IoT trên
                  nền tảng dữ liệu đám mây (SaaS), chúng tôi cung cấp giải pháp
                  toàn diện cho các doanh nghiệp, tổ chức giúp phân tích và tối
                  ưu hóa tiêu thụ năng lượng, các thông số hoạt động IoT từ máy
                  móc, môi trường, thiết bị,... Từ đó giúp giảm chi phí, tăng
                  năng suất, và góp phần đạt được mục tiêu phát triển bền vững.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="relative w-full lg:h-1/2 h-[200px]">
                <Image
                  src="/image/about-us/dhg.png"
                  width={0}
                  height={0}
                  layout="fill"
                  objectFit="contain"
                  alt=""
                />
              </div>
              <div className="relative w-full lg:h-1/2 h-[300px]">
                <Image
                  src="/image/about-us/about-us-2.png"
                  width={0}
                  height={0}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
