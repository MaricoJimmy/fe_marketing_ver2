import Image from 'next/image'
import React from 'react'
import Title from '../common/Title'

function Partner() {
    return (
        <div className='mt-16 md:mt-32'>
            <div className='flex items-center justify-center'>
                <Title
                    label="Đối tác"
                    className='mx-auto bg-green-primary'
                />
            </div>
            <div className='mt-16 flex flex-wrap items-center justify-center gap-10 md:gap-24'>
                <div className='w-fit h-fit hover:-translate-y-2 duration-300'>
                    <Image src="/image/partner/partner-1.png" width="220" height="50" alt="" />
                </div>
                <div className='w-fit h-fit hover:-translate-y-2 duration-300'>
                    <Image src="/image/partner/partner-2.png" width="100" height="65" alt="" />
                </div>
                <div className='w-fit h-fit hover:-translate-y-2 duration-300'>
                    <Image src="/image/partner/partner-3.png" width="220" height="50" alt="" />
                </div>
            </div>
            <div className='mt-10 flex flex-wrap items-center justify-center gap-10 md:gap-24'>
                <div className='w-fit h-fit hover:-translate-y-2 duration-300'>
                    <Image src="/image/partner/partner-4.png" width="160" height="50" alt="" />
                </div>
                <div className='w-fit h-fit hover:-translate-y-2 duration-300'>
                    <Image src="/image/partner/partner-5.png" width="220" height="50" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Partner