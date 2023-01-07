import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function BlogCard({ data, category }) {
    const date = new Date(data.publishedAt).toLocaleDateString("vi-VN", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    return (
        <div className=''>
            <Link href={`/${category}/${data.slug}`}>
                <a className='block h-[480px] border border-gray/20 rounded-lg'>
                    <div className=''>
                        <Image src={data.featuredImg?.url} width="400" height="250" className='rounded-t-lg' alt='' />
                    </div>
                    <div className='p-6'>
                        <h4 className='text-xl text-gray font-semibold'>{data.title}</h4>
                        <h6 className='mt-2 text-sm text-gray/60'>{date}</h6>
                        <h5 className='mt-4 text-lg text-gray/80 desc-blog'>{data.desc}</h5>
                    </div>
                </a>
            </Link>
        </div>
    )
}

export default BlogCard