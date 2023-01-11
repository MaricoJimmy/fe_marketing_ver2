import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getDate } from '../../utils';

function BlogRelated({ data, category }) {
    return (
        <div className=''>
            <Link href={`/${category}/${data.slug}`}>
                <a className=''>
                    <div className='relative border border-gray/20 w-full h-[200px] lg:h-[150px]'>
                        <Image src={data.featuredImage.node.mediaItemUrl} layout="fill" objectFit='cover' alt='' />
                    </div>
                    <div className='mt-2 w-fit'>
                        <h5 className='text-lg text-gray font-semibold'>{data.title}</h5>
                        <span className='text-sm text-gray/80'>{getDate(data.date)}</span>
                    </div>
                </a>
            </Link>
        </div>
    )
}

export default BlogRelated