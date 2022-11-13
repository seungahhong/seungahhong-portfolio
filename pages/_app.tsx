import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps, AppContext } from 'next/app';
import { ThemeProvider } from '@emotion/react';

import GlobalStyles from '../styles/globalStyles';
import Layout from '../templates/Layout';
import theme from '../styles/theme';
import Template from '../templates/Template';

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
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyles />
        <Template {...pageProps} canonical={canonical}>
          {getLayout(<Component {...pageProps} />)}
        </Template>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
