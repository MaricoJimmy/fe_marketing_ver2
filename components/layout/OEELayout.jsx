import React from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'

function OEELayout({ children }) {
    return (
        <div className='bg-white w-full min-h-screen'>
            <Header isProductPage />
            <div>
                {
                    children
                }
            </div>
            <Footer />
        </div>
    )
}

export default OEELayout