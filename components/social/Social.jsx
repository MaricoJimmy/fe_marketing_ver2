import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

// --- START: Cấu hình các số điện thoại bạn muốn ---
const phoneContacts = [
  {
    name: "Sale 1", // Tên hiển thị
    phone: "0903909431", // SĐT
    position: "bottom-[5.5rem] right-[0.5rem] rotate-[75deg]", // 88px bottom, 8px right
  },
  {
    name: "Sale 2",
    phone: "0335754033",
    position: "bottom-[3.5rem] right-[3.5rem] rotate-[45deg]", // 56px bottom, 56px right
  },
  {
    name: "Sale 3",
    phone: "0903344470",
    position: "bottom-[0.5rem] right-[5.5rem]", // 8px bottom, 88px right
  },
];
// --- END: Cấu hình ---

// Icon điện thoại
const phoneIcon = {
  name: "Phone",
  image: "/image/social/phone.png",
};

// Các social khác
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
  const [isPhoneMenuOpen, setIsPhoneMenuOpen] = useState(false);
  const phoneMenuRef = useRef(null);

  // Hook xử lý "click outside"
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isPhoneMenuOpen &&
        phoneMenuRef.current &&
        !phoneMenuRef.current.contains(event.target)
      ) {
        setIsPhoneMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPhoneMenuOpen]);

  // Style cho các nút SĐT con
  const contactLinkBaseStyle =
    "px-2 py-1 h-fit bg-white flex items-center justify-center shadow-xl rounded-full text-neutral font-semibold text-sm whitespace-nowrap hover:bg-gray-100";

  // Style cho hiệu ứng transition
  const transitionBaseStyle = "transition-all duration-300 ease-in-out";

  return (
    <div className="fixed bottom-4 right-4 z-[900] flex flex-col gap-2 items-end">
      {/* Render các nút social (FB, Zalo) */}
      {socials.map((social, index) => (
        <Link key={index} href={social.url}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              isPhoneMenuOpen ? "opacity-50" : ""
            } p-2 bg-white flex items-center justify-center shadow-lg rounded-full w-[56px] h-[56px]`}
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

      {/* Phần Phone Menu mới 
        - div cha là 'relative' để các con 'absolute'
        - w-[56px] h-[56px] bằng kích thước nút phone
      */}
      <div className="relative w-[56px] h-[56px]" ref={phoneMenuRef}>
        {/* Nút Phone (dùng <button> để toggle) */}
        {/* Nút này phải là 'absolute' để các nút con có thể bung ra từ cùng 1 vị trí */}
        <button
          type="button"
          onClick={() => setIsPhoneMenuOpen((prev) => !prev)}
          className="p-2 w-[56px] h-[56px] bg-white flex items-center justify-center shadow-lg rounded-full absolute bottom-0 right-0 z-20"
        >
          <Image
            src={phoneIcon.image}
            alt={phoneIcon.name}
            width={40}
            height={40}
          />
        </button>

        {/* Các nút SĐT (chỉ hiện khi isPhoneMenuOpen=true) */}
        {phoneContacts.map((contact) => (
          <Link key={contact.name} href={`tel:${contact.phone}`}>
            <a
              className={`
                ${contactLinkBaseStyle} 
                ${transitionBaseStyle}
                absolute z-10
                ${
                  isPhoneMenuOpen
                    ? `opacity-100 ${contact.position}` // Bung ra vị trí đã định
                    : "opacity-0 bottom-0 right-0" // Ẩn đi và thu về gốc
                }
              `}
              // Ngăn click vào nút con làm đóng menu (do event bubbling)
              onClick={(e) => e.stopPropagation()}
            >
              {contact.name}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Social;
