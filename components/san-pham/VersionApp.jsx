import Image from 'next/image'
import React from 'react'
import { v4 } from 'uuid'
import Title from '../common/Title'

function VersionApp({ data }) {
    return (
        <div className='mt-32'>
            <div className='w-full flex items-center justify-end'>
                <Title
                    label="Phiên bản phần mềm"
                    className='ml-auto bg-orange-primary'
                />
            </div>
            <div className='mt-8 grid grid-cols-12 gap-6'>
                <div className="col-span-7">
                    <table class="w-full table-auto">
                        <thead>
                            <tr>
                                <th className='text-xl text-left text-gray/80 font-semibold'>Tính năng</th>
                                <th className='text-xl text-center text-gray/80 font-semibold'>Basic</th>
                                <th className='text-xl text-center text-gray/80 font-semibold'>Pro</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(featureInVersion => (
                                    <tr key={v4()} className='border-b border-gray/20 last:border-b-none'>
                                        <td className='py-3 text-lg font-medium'>{featureInVersion.title}</td>
                                        <td className='py-3 text-lg font-medium'>Malcolm Lockyer</td>
                                        <td className='py-3 text-lg font-medium'>1961</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className="col-span-5 w-full flex items-end justify-center">
                    <Image src="/image/oee/version-app.png" width="500" height="420" />
                </div>
            </div>
        </div>
    )
}

export default VersionApp