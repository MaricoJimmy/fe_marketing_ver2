import PageSeoHead from "@/components/common/PageSeoHead";

const CareerLandingLayout = ({ children }) => <>{children}</>;

const CareerLandingPage = () => {
  const metaTagData = {
    title: "Tuyen dung | Udata.ai",
    desc: "Trang tuyen dung Udata.",
    img: "/image/hero/home-pv.webp",
  };

  return (
    <>
      <PageSeoHead data={metaTagData} />
      <div className="h-screen w-full overflow-hidden bg-white">
        <iframe
          src="/tuyen-dung-app/index.html"
          title="Tuyen dung Udata"
          className="h-full w-full border-0"
          loading="lazy"
        />
      </div>
    </>
  );
};

CareerLandingLayout.displayName = "CareerLandingLayout";
CareerLandingPage.Layout = CareerLandingLayout;

export default CareerLandingPage;
