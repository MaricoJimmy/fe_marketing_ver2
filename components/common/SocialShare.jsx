import Image from "next/image";
import React from "react";

function SocialShare({ data }) {
  return (
    <a
      title="Share on Facebook"
      href={`https://www.facebook.com/sharer.php?u=https://udata.ai/${data}`}
      target="_blank"
      rel="noreferrer"
      className="p-2 block"
    >
      <Image src="/image/social/facebook.png" alt="" width="30" height="30" />
    </a>
  );
}

export default SocialShare;
