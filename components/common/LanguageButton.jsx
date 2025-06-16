import Image from "next/image";
import { useRouter } from "next/router";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useApp } from "@/contexts/AppContext";
import { getLocalizedPath } from "@/utils";
import { ROUTER_BLOG } from "@/utils/constant";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

// Danh sách ngôn ngữ và lá cờ
const languageFlags = {
  vi: "/image/flag/vietnamese.png",
  en: "/image/flag/english.png",
  jp: "/image/flag/japanese.png",
  th: "/image/flag/thailand.png",
};

function LanguageButton() {
  const router = useRouter();
  const { postDetail } = useApp();

  const handleChangeLanguage = (value) => {
    // Check if the current path is a blog post detail page
    // then redirect to the same post in the selected language
    if (router.pathname.includes("/blog") && postDetail?.localeSlug) {
      const localizedPath = getLocalizedPath(ROUTER_BLOG, value);
      router.push(`${localizedPath}/${postDetail.localeSlug}`, null, {
        locale: value,
      });
      return;
    }

    router.push(
      {
        pathname: router.pathname,
        query: router.query,
      },
      null,
      { locale: value }
    );
  };

  return (
    <div className="relative w-fit">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="p-0 border border-gray/30 rounded-full bg-transparent hover:bg-transparent">
            <Image
              src={languageFlags[router.locale]}
              width="25"
              height="25"
              alt=""
              className="object-contain"
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="bg-white w-[80px]"
          collisionPadding={20}
        >
          {Object.entries(languageFlags).map(([locale, url]) => (
            <DropdownMenuItem
              key={locale}
              onClick={() => handleChangeLanguage(locale)}
              className={`${
                router.locale === locale ? "" : "opacity-30"
              } flex justify-center hover:bg-infor/50 cursor-pointer`}
            >
              <div className="border border-gray/30 h-[25px] w-[25px] rounded-full">
                <Image
                  src={languageFlags[locale] || url}
                  width={25}
                  height={25}
                  alt={`${locale} Flag`}
                  className="object-contain"
                />
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default LanguageButton;
