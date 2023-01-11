import Head from 'next/head'
import React from 'react'

function NotFound() {
    return (
        <>
            <Head>
                <title>404 | Pambu</title>
                <meta property="og:title" content="404"></meta>
                <meta property="og:description" content="Trang này không tồn tại"></meta>
                <meta property="og:image" content="/image/logo.png"></meta>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className='min-h-screen flex items-center justify-center'>
                <p className='text-xl text-center font-semibold'>404 | Trang này không tồn tại.</p>
            </div>
        </>
    )
}

export default NotFound