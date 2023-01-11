import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getDate } from '../../utils';

function BlogCard({ data, category }) {
    return (
        <div className='w-full'>
            <Link href={`/${category}/${data.slug}`}>
                <a className='block md:h-[500px] border border-gray/20 rounded-lg'>
                    <div className='w-full h-[240px] relative'>
                        <Image src={data.featuredImage.node.mediaItemUrl} layout='fill' objectFit='cover' className='rounded-t-lg' alt='' />
                    </div>
                    <div className='p-6 w-full'>
                        <h4 className='text-xl text-gray font-semibold'>{data.title}</h4>
                        <h6 className='mt-2 text-sm text-gray/60'>{getDate(data.date)}</h6>
                        <h5 className='mt-4 text-lg text-gray/80 desc-blog' dangerouslySetInnerHTML={{ __html: data.excerpt }}></h5>
                    </div>
                </a>
            </Link>
        </div>
    )
}

export default BlogCard