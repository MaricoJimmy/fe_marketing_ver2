import React from 'react'

function Title({ label, className = '' }) {
    return (
        <div className='w-fit'>
            <h2 className='text-3xl text-gray font-bold'>{label}</h2>
            <div className='w-full flex'>
                <div className={`mt-2 w-[100px] h-[3px] ${className}`}>
                </div>
            </div>
        </div>
    )
}

export default Title