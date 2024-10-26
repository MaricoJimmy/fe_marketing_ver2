import { ROUTER_CONTACT } from "@/utils/constant";
import { useRouter } from "next/router";
import { Button } from "../ui/button";

function HeroSection({ data }) {
  const router = useRouter();
  return (
    <div
      className={`relative w-full min-h-[400px] flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat ${
        data.color === "blue"
          ? "bg-[url('/image/hero/pms-bg.jpg')]"
          : "bg-warning"
      }`}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-neutral/80 to-neutral/20"></div>
      <div className="relative z-10 lg:px-10 px-4 py-6">
        <h1 className="lg:text-5xl text-3xl text-center text-white font-bold">
          {data.heading}
        </h1>
        <h5 className="mt-2 text-center lg:text-lg text-sm text-white font-medium">
          {data.excerpt}
        </h5>
        <div className="mt-8 flex items-center justify-center">
          <Button
            onClick={() => router.push(ROUTER_CONTACT)}
            className="shadow-md"
            size="lg"
          >
            {data.contact}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
