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
      <Select
        value={router.locale}
        onValueChange={(value) => handleChangeLanguage(value)}
      >
        <SelectTrigger
          className="border-none shadow-none focus:ring-0"
          isShowIcon={false}
          title="Language button"
        >
          <SelectValue
            placeholder={
              router.locale === "vi" ? (
                <div className="h-full flex items-center">
                  <Image
                    src="/image/vietnam-flag.png"
                    width="24"
                    height="24"
                    alt=""
                  />
                </div>
              ) : (
                <div className="h-full flex items-center">
                  <Image
                    src="/image/england-flag.png"
                    width="24"
                    height="24"
                    alt=""
                  />
                </div>
              )
            }
          />
        </SelectTrigger>
        <SelectContent className="w-fit bg-white">
          <SelectItem value="vi" title="Vietnamese">
            <Image
              src="/image/vietnam-flag.png"
              width="24"
              height="24"
              alt=""
            />
          </SelectItem>
          <SelectItem value="en" title="English">
            <Image
              src="/image/england-flag.png"
              width="24"
              height="24"
              alt=""
            />
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default LanguageButton;
