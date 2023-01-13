import Link from 'next/link'
import React from 'react'
import { v4 } from 'uuid'

function Breadcrumb({ data }) {
    return (
        <ul className='flex flex-wrap items-center gap-2'>
            {
                data.map((item, idx) => (
                    <li key={v4()}>
                        {
                            idx !== data.length - 1 && (
                                <Link href={item.slug}>
                                    <a className='flex items-center'>
                                        <span className='text-sm text-gray/80 font-semibold mr-2'>
                                            {item.label}
                                        </span>
                                        <svg width="14" height="14" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.5 3L7.5 6L4.5 9" stroke="#2E2E2E" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </Link>
                            ) || (
                                <div className='flex items-center'>
                                    <span className='text-sm text-gray/80 font-semibold'>
                                        {item.label}
                                    </span>
                                </div>
                            )
                        }
                    </li>
                ))
            }
        </ul>
    )
}

export default Breadcrumb