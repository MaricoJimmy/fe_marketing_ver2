import Script from "next/script";
import DefaultLayout from "../components/layout/DefaultLayout";
import "../styles/globals.css";
import { IntlProvider } from "next-intl";
import { useRouter } from "next/router";
import MaintenanceLayout from "../components/layout/MaintenanceLayout";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const locale = router.locale || router.defaultLocale;
  const localeMessages = require(`../locales/${locale}.json`);
  const Layout = Component.Layout || DefaultLayout;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-TF6YXCZ2TW"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-TF6YXCZ2TW');
        `}
      </Script>
      <IntlProvider messages={localeMessages} locale={locale}>
        <MaintenanceLayout>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MaintenanceLayout>
      </IntlProvider>
    </>
  );
}

export default MyApp;
