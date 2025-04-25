import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getDate } from "../../utils";

function BlogCard({ data, category, locale }) {
  return (
    <div className="w-full h-full">
      <Link href={`/${category}/${data.slug}`} locale={locale}>
        <a
          title={data.title}
          className="block h-full bg-white shadow-md shadow-tertiary/80 rounded-xl"
        >
          <div className="w-full h-[240px] relative border-b border-gray/20">
            <Image
              src={data?.featuredImage?.node?.mediaItemUrl}
              layout="fill"
              objectFit="cover"
              className="rounded-t-xl"
              alt=""
            />
          </div>
          <div className="p-6 w-full">
            <h4
              title={data.title}
              className="text-xl text-gray font-semibold truncate"
            >
              {data.title}
            </h4>
            <h6 className="mt-1 text-sm text-gray/80">
              {getDate(data.date, locale)}
            </h6>
            <h5
              className="mt-2 text-base text-gray desc-blog"
              dangerouslySetInnerHTML={{ __html: data.excerpt }}
            ></h5>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default BlogCard;
