import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '../common/Button'

function HeroSection({ data }) {
    return (
        <div className="grid grid-cols-12 gap-6">
            <div className="col-span-7 flex items-center justify-center">
                <div className="w-full">
                    <h1 className="text-4xl text-gray font-bold">
                        {data.heading}
                    </h1>
                    <p className="mt-6 text-gray/80 text-justify font-medium">{data.excerpt}</p>
                    <Button className={`mt-10 px-6 py-3 text-white font-semibold ${data.color === "green" ? "bg-green-primary" : "bg-orange-primary"}`}>
                        <Link href='/dat-lich-demo'>
                            <a>
                                Đặt lịch demo
                            </a>
                        </Link>
                    </Button>
                </div>
            </div>
            <div className="col-span-5 h-[450px]">
                <div className="relative w-full h-full">
                    <div className="relative w-full h-full blur-3xl">
                        <div className={`absolute top-16 left-1/2 w-[200px] h-[200px] rounded-full ${data.color === "green" ? "bg-green-primary" : "bg-orange-primary"}`}>
                        </div>
                        <div className={`absolute top-36 left-24 w-[250px] h-[250px] rounded-full ${data.color === "green" ? "bg-green-primary" : "bg-orange-primary"}`}>
                        </div>
                    </div>
                    <div className="absolute top-0 left-0 w-full">
                        <Image src='/image/line.png' width='500' height='500' />
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                        <Image src={data.img} width='430' height='350' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection