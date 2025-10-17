import { useRouter } from "next/router";
import { Button } from "../ui/button";

function HeroSection({ video = "", labelBtn = "" }) {
  const router = useRouter();
  return (
    <div className="relative">
      <video
        className="w-full h-auto aspect-video object-contain"
        autoPlay
        loop
        muted
        playsInline
        popover="false"
      >
        <source src={video} type="video/mp4" />
      </video>
      <Button
        className="absolute md:bottom-1/3 bottom-10 lg:left-[80px] left-[25px] lg:w-[180px] md:w-[140px] lg:h-[50px] bg-[#66FDFF] md:text-lg text-neutral rounded-full font-semibold shadow-lg"
        data-aos="fade-right"
        data-aos-delay="300"
        onClick={() => router.push("/dung-thu")}
      >
        {labelBtn}
      </Button>
    </div>
  );
}

export default HeroSection;
