import React from 'react'
import Header from '../common/Header'

function DefaultLayout({ children }) {
    return (
        <div className='bg-white w-full min-h-screen'>
            <div className='w-full flex justify-center items-center'>
                <div className='max-w-screen-xl w-full'>
                    <Header />
                </div>
            </div>
            <div>
                {
                    children
                }
            </div>
        </div>
    )
}

export default DefaultLayout