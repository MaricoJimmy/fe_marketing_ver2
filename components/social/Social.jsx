import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const useIsMobile = (breakpoint = 768) => {
  // Khởi tạo state, mặc định là false (desktop)
  // Sẽ được cập nhật chính xác khi component mount phía client
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Hàm này chỉ chạy ở client (nơi có 'window')
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Kiểm tra ngay khi component mount
    checkScreenSize();

    // Thêm event listener để theo dõi khi thay đổi kích thước cửa sổ
    window.addEventListener("resize", checkScreenSize);

    // Dọn dẹp event listener khi component unmount
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [breakpoint]); // Chỉ chạy lại effect nếu breakpoint thay đổi

  return isMobile;
};
// --- END: Hook ---

// --- START: Cấu hình các số điện thoại bạn muốn ---
const phoneContacts = [
  {
    name: "0903 909 431", // Tên hiển thị
    phone: "0903909431", // SĐT (không có dấu cách)
    position: "bottom-[6.5rem] right-[0.5rem] rotate-[75deg]",
  },
  {
    name: "0335 754 033",
    phone: "0335754033",
    position: "bottom-[4.5rem] right-[3.5rem] rotate-[45deg]",
  },
  {
    name: "0903 344 470",
    phone: "0903344470",
    position: "bottom-[0.5rem] right-[5.5rem]",
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

  // 👇 SỬ DỤNG HOOK MỚI
  const isMobile = useIsMobile();

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

  // 👇 HÀM MỚI: Xử lý copy SĐT cho desktop
  const handleDesktopPhoneClick = (e, phone, name) => {
    e.stopPropagation(); // Ngăn menu đóng lại
    navigator.clipboard.writeText(phone);
    // Tùy chọn: Bạn có thể dùng toast (thông báo) ở đây thay vì alert
    alert(`Đã sao chép SĐT: ${name} (${phone})`);
  };

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

      {/* Phần Phone Menu mới */}
      <div className="relative w-[56px] h-[56px]" ref={phoneMenuRef}>
        {/* Nút Phone (dùng <button> để toggle) */}
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

        {/* 👇 SỬA ĐỔI CHỖ NÀY: Render có điều kiện */}
        {phoneContacts.map((contact) => {
          // Gom các class CSS chung lại
          const contactClasses = `
            ${contactLinkBaseStyle} 
            ${transitionBaseStyle}
            absolute z-10
            ${
              isPhoneMenuOpen
                ? `opacity-100 ${contact.position}` // Bung ra vị trí đã định
                : "opacity-0 bottom-0 right-0" // Ẩn đi và thu về gốc
            }
          `;

          // Kiểm tra isMobile để render thẻ
          return isMobile ? (
            // === PHIÊN BẢN DI ĐỘNG (Bấm để gọi) ===
            <Link key={contact.name} href={`tel:${contact.phone}`} passHref>
              <a
                className={contactClasses}
                onClick={(e) => e.stopPropagation()}
              >
                {contact.name}
              </a>
            </Link>
          ) : (
            // === PHIÊN BẢN DESKTOP (Bấm để copy) ===
            <span
              key={contact.name}
              className={`${contactClasses} cursor-pointer`} // Thêm cursor-pointer
              title={`Bấm để sao chép SĐT: ${contact.phone}`} // Tooltip
              // onClick={(e) =>
              //   handleDesktopPhoneClick(e, contact.phone, contact.name)
              // }
            >
              {contact.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Social;
