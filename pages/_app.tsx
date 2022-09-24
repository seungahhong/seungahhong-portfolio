import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps, AppContext } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';

import GlobalStyles from '../styles/globalStyles';
import Layout from '../components/Layout';
import theme from '../styles/theme';
import Template from '../components/common/Template';

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

const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 1024px;
  padding: 96px 0 60px;
  margin: 0 auto;
`;

function MyApp({ Component, pageProps, canonical }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyles />
        <Template {...pageProps} canonical={canonical}>
          {getLayout(<Component {...pageProps} />)}
          {/* <Container>
            <Component {...pageProps} />
          </Container> */}
        </Template>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
