import { useRouter } from "next/router";
import { Button } from "../ui/button";
import Image from "next/image";

function HeroSection({ logo = "", data = {} }) {
  console.log("🚀 ~ HeroSection ~ data:", data);
  const router = useRouter();
  return (
    <div className="lg:px-10 px-4 lg:py-32 md:py-24 py-10 h-screen w-full bg-[url('/image/hero/bg-product.webp')] bg-center bg-cover bg-no-repeat flex items-center justify-center">
      <div className="flex flex-col items-center">
        <Image
          data-aos="fade-up"
          src={logo}
          alt="Logo"
          width={200}
          height={120}
        />
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="mt-4 text-4xl text-center text-transparent bg-gradient-to-r from-[#009CFA] to-[#081682] bg-clip-text font-semibold"
        >
          {data.heading}
        </h1>
        <h3
          data-aos="fade-up"
          data-aos-delay="150"
          className="mt-4 text-lg text-center text-[#081682] font-medium"
        >
          {data.excerpt}
        </h3>
        <Button
          size="lg"
          className="mt-6 shadow-md"
          data-aos="fade-up"
          data-aos-delay="200"
          onClick={() => router.push("/dung-thu")}
        >
          {data.contact}
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
