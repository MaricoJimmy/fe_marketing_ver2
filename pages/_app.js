import Script from "next/script";
import DefaultLayout from "../components/layout/DefaultLayout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || DefaultLayout
  return (
    <>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-TF6YXCZ2TW" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-TF6YXCZ2TW');
        `}
      </Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
