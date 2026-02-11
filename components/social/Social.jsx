import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const toggleIcon = {
  name: "Phone",
  image: "/image/social/phone.png",
};

const socials = [
  {
    name: "Facebook",
    image: "/image/social/facebook.webp",
    url: "https://www.facebook.com/profile.php?id=61566884154567",
  },
  {
    name: "Zalo",
    image: "/image/social/zalo.webp",
    url: "https://zalo.me/2371643343612098413",
  },
];

function Social() {
  const [isSocialMenuOpen, setIsSocialMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isSocialMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsSocialMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSocialMenuOpen]);

  return (
    <div className="fixed bottom-4 left-4 z-[1200]">
      <div className="flex flex-col items-start gap-2" ref={menuRef}>
        {isSocialMenuOpen &&
          socials.map((social, index) => (
            <Link key={index} href={social.url}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white flex items-center justify-center shadow-lg rounded-full w-[56px] h-[56px]"
              >
                <Image
                  src={social.image}
                  alt={social.name}
                  width={40}
                  height={40}
                />
              </a>
            </Link>
          ))}

        <button
          type="button"
          onClick={() => setIsSocialMenuOpen((prev) => !prev)}
          aria-expanded={isSocialMenuOpen}
          aria-label="Toggle social channels"
          className="p-2 w-[56px] h-[56px] bg-white flex items-center justify-center shadow-lg rounded-full"
        >
          <Image
            src={toggleIcon.image}
            alt={toggleIcon.name}
            width={40}
            height={40}
          />
        </button>
      </div>
    </div>
  );
}

export default Social;
