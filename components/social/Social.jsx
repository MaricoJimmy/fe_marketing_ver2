import Image from "next/image";
import Link from "next/link";
import React from "react";

function Social() {
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
    {
      name: "Phone",
      image: "/image/social/phone.png",
      url: "tel:1800255698",
    },
  ];
  return (
    <div className="fixed bottom-4 right-4 z-[900] flex flex-col gap-2">
      {socials.map((social, index) => (
        <Link key={index} href={social.url} className="">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white flex items-center justify-center shadow-lg rounded-full"
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
    </div>
  );
}

export default Social;
