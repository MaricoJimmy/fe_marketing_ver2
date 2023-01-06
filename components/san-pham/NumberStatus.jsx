import React from 'react'
import { v4 } from 'uuid'

function NumberStatus({ data, className = '' }) {
    return (
        <div className='mt-16 md:mt-32'>
            <div className={`w-full h-full bg-gradient-to-r ${className}`}>
                <div className="w-full h-fit flex justify-center items-center">
                    <div className="px-8 py-16 max-w-screen-xl w-full">
                        <ul className='flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-32'>
                            {data.map(stat => (
                                <li key={v4()}>
                                    <div className='flex items-center justify-center'>{stat.icon}</div>
                                    <div className='mt-6 text-center'>
                                        <h3 className='text-5xl text-gray font-bold'>{stat.title}</h3>
                                        <h5 className='mt-4 text-lg text-gray/80 font-medium'>{stat.desc}</h5>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NumberStatus