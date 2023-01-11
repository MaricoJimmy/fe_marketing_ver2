import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getDate } from '../../utils';

function BlogCard({ data, category }) {
    return (
        <div className=''>
            <Link href={`/${category}/${data.slug}`}>
                <a className='block h-[480px] border border-gray/20 rounded-lg'>
                    <div className=''>
                        <Image src={data.featuredImage.node.mediaItemUrl} width="400" height="250" className='rounded-t-lg' alt='' />
                    </div>
                    <div className='p-6'>
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