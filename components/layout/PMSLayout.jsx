import React from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'
import Hotline from '../common/Hotline'

function PMSLayout({ children }) {
    return (
        <div className='bg-white w-full min-h-screen'>
            <Hotline isPMSPage />
            <Header isPMSPage />
            <div>
                {
                    children
                }
            </div>
            <Footer />
        </div>
    )
}

export default PMSLayout