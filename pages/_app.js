import { routeMaps } from "@/utils/router";
import AOS from "aos";
import "aos/dist/aos.css";
import { IntlProvider } from "next-intl";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";
import DefaultLayout from "../components/layout/DefaultLayout";
import MaintenanceLayout from "../components/layout/MaintenanceLayout";
import "../styles/globals.css";
import { AppProvider } from "@/contexts/AppContext";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const locale = router.locale || router.defaultLocale;
  const localeMessages = require(`../locales/${locale}.json`);
  const Layout = Component.Layout || DefaultLayout;
  const chatWidgetApiUrl =
    process.env.NEXT_PUBLIC_CHAT_WIDGET_API_URL || "https://mini.ugate.ai";
  const chatWidgetColor =
    process.env.NEXT_PUBLIC_CHAT_WIDGET_COLOR || "#1890ff";
  const chatWidgetOrigin =
    process.env.NEXT_PUBLIC_CHAT_WIDGET_ORIGIN || "https://mini.ugate.ai";
  const chatWidgetToken = process.env.NEXT_PUBLIC_CHAT_WIDGET_TOKEN || "";
  const chatWidgetScriptSrc =
    process.env.NEXT_PUBLIC_CHAT_WIDGET_SCRIPT_SRC ||
    `${chatWidgetOrigin}/chat-widget.js`;

  useEffect(() => {
    // Tự động điều hướng khi thay đổi locale
    const currentPath = router.pathname;
    const translatedPath = routeMaps[locale]?.[currentPath];

    if (translatedPath && translatedPath !== currentPath) {
      router.push(translatedPath, undefined, { locale });
    }
  }, [locale, router.pathname]);

  useEffect(() => {
    AOS.init({
      duration: 800, // Thời gian animation (ms)
      easing: "ease", // Hiệu ứng easing
      once: true, // Animation chỉ chạy một lần
    });
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>
      {/* <Script id="chat-widget" strategy="afterInteractive">
        {`
          (function() {
            var CHAT_WIDGET_API_URL = ${JSON.stringify(chatWidgetApiUrl)};
            var CHAT_WIDGET_COLOR = ${JSON.stringify(chatWidgetColor)};
            var CHAT_WIDGET_ORIGIN = ${JSON.stringify(chatWidgetOrigin)};
            var CHAT_WIDGET_TOKEN = ${JSON.stringify(chatWidgetToken)};
            var CHAT_WIDGET_SCRIPT_SRC = ${JSON.stringify(chatWidgetScriptSrc)};

            if (!CHAT_WIDGET_API_URL || !CHAT_WIDGET_ORIGIN || !CHAT_WIDGET_TOKEN || !CHAT_WIDGET_SCRIPT_SRC) return;
            if (window.__UGATE_CHAT_WIDGET_LOADED__) return;

            if (document.querySelector('script[src="' + CHAT_WIDGET_SCRIPT_SRC + '"]')) {
              window.__UGATE_CHAT_WIDGET_LOADED__ = true;
              return;
            }

            window.__UGATE_CHAT_WIDGET_LOADED__ = true;
            window.CHAT_WIDGET_API_URL = CHAT_WIDGET_API_URL;
            window.CHAT_WIDGET_COLOR = CHAT_WIDGET_COLOR;
            window.CHAT_WIDGET_ORIGIN = CHAT_WIDGET_ORIGIN;
            window.CHAT_WIDGET_TOKEN = CHAT_WIDGET_TOKEN;

            var script = document.createElement('script');
            script.src = CHAT_WIDGET_SCRIPT_SRC;
            script.async = true;
            document.head.appendChild(script);
          })();
        `}
      </Script> */}
      <IntlProvider messages={localeMessages} locale={locale}>
        <MaintenanceLayout>
          <AppProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AppProvider>
        </MaintenanceLayout>
      </IntlProvider>
    </>
  );
}

export default MyApp;
