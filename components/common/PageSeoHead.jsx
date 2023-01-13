import Head from 'next/head'
import React from 'react'

function PageSeoHead({ data }) {
    return (
        <>
            <Head>
                <title>{data.title}</title>
                <meta property="og:title" content={data.title}></meta>
                <meta
                    property="og:description"
                    content={data.desc}
                ></meta>
                <meta name="description" content={data.desc}></meta>
                <meta property="og:image" content={data.img}></meta>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
        </>
    )
}

export default PageSeoHead