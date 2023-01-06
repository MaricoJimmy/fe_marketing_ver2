import Image from 'next/image'
import React from 'react'

function Technologies() {
    return (
        <div className='mt-16 md:mt-32'>
            <div className='w-full flex items-center justify-center'>
                <h3 className='max-w-[900px] text-2xl md:text-3xl text-gray/60 text-center font-semibold'>
                    SỬ DỤNG CÔNG NGHỆ, PHẦN CỨNG ĐẾN TỪ CÁC TẬP ĐOÀN HÀNG ĐẦU TRÊN THẾ GIỚI
                </h3>
            </div>
            <div className='mt-16 flex flex-wrap items-center justify-center gap-10 lg:gap-32'>
                <div className='w-fit h-fit hover:-translate-y-2 duration-300'>
                    <Image src="/image/technology/tech-1.png" width="100" height="60" alt='' />
                </div>
                <div className='w-fit h-fit hover:-translate-y-2 duration-300'>
                    <Image src="/image/technology/tech-2.png" width="70" height="60" alt='' />
                </div>
                <div className='w-fit h-fit hover:-translate-y-2 duration-300'>
                    <Image src="/image/technology/tech-3.png" width="80" height="60" alt='' />
                </div>
                <div className='w-fit h-fit hover:-translate-y-2 duration-300'>
                    <Image src="/image/technology/tech-4.png" width="60" height="60" alt='' />
                </div>
            </div>
            <div className='mt-10 flex flex-wrap items-center justify-center gap-10 lg:gap-24'>
                <div className='w-fit h-fit hover:-translate-y-2 duration-300'>
                    <Image src="/image/technology/tech-5.png" width="90" height="70" alt='' />
                </div>
                <div className='w-fit h-fit hover:-translate-y-2 duration-300'>
                    <Image src="/image/technology/tech-6.png" width="180" height="35" alt='' />
                </div>
                <div className='w-fit h-fit hover:-translate-y-2 duration-300'>
                    <Image src="/image/technology/tech-7.png" width="70" height="65" alt='' />
                </div>
                <div className='w-fit h-fit hover:-translate-y-2 duration-300'>
                    <Image src="/image/technology/tech-8.png" width="150" height="60" alt='' />
                </div>
            </div>
        </div>
    )
}

export default Technologies