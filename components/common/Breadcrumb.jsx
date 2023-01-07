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
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.5 5L12.5 10L7.5 15" stroke="#2e2e2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </Link>
                            ) || (
                                <div className='flex items-center'>
                                    <span className='text-sm text-gray/80 font-semibold mr-2'>
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