import { ReactElement, ReactNode, useEffect } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import type { AppProps, AppContext } from 'next/app';
import Script from 'next/script';
import { ThemeProvider } from '@emotion/react';

import GlobalStyles from '../styles/globalStyles';
import Layout from '../templates/Layout';
import theme from '../styles/theme';
import Template from '../templates/Template';
import * as gtag from '../lib/gtags';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  canonical: string;
};

MyApp.getInitialProps = ({ ctx }: AppContext) => {
  const { asPath } = ctx;
  const canonical = `https://seungahhong-portfolio.vercel.app${asPath}`;

  return {
    canonical,
  };
};

function MyApp({ Component, pageProps, canonical }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page: any) => page);

  // GA 설정 시작
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  // GA 설정 끝

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyles />
        <Template {...pageProps} canonical={canonical}>
          {/* GA 설정 시작 */}
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          {/* GA 설정 끝 */}
          {getLayout(<Component {...pageProps} />)}
        </Template>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
