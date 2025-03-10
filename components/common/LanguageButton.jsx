import Image from "next/image";
import { useRouter } from "next/router";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

function LanguageButton() {
  const router = useRouter();

  return (
    <div className="relative w-fit">
      <Select
        value={router.locale}
        onValueChange={(value) => {
          router.push(
            {
              pathname: router.pathname,
              query: router.query,
            },
            null,
            { locale: value }
          );
        }}
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
