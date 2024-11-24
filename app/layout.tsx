import { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import GoogleAnalytics from './templates/GoogleAnalytics';

import '../styles/globals.css';
import Navbar from './components/NavBar';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: '홍승아 포트폴리오',
  description: '홍승아 포트폴리오에 오신걸 환영합니다.',
  metadataBase: new URL('https://seungahhong-portfolio.vercel.app'),
  openGraph: {
    type: 'website',
    title: '홍승아 포트폴리오',
    description: '홍승아 포트폴리오에 오신걸 환영합니다.',
    url: 'https://seungahhong-portfolio.vercel.app',
    images: '_next/image?url=%2Fworks_portfolio_1_logo.webp&w=3840&q=75',
    siteName: '홍승아',
  },
  twitter: {
    card: 'summary',
    title: '홍승아 포트폴리오',
    description: '홍승아 포트폴리오에 오신걸 환영합니다.',
    site: '홍승아',
    creator: '홍승아',
    images: '_next/image?url=%2Fworks_portfolio_1_logo.webp&w=3840&q=75',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <head>
        {/* GA 설정 시작 */}
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID ? (
          <GoogleAnalytics gaID={process.env.NEXT_PUBLIC_GA_ID} />
        ) : null}
        {/* GA 설정 끝 */}
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <link rel="canonical" href="https://seungahhong-portfolio.vercel.app" />
        <meta
          name="google-site-verification"
          content="FC05NvDOB-arKsf_Q9aSiELFIEGfTH-zyMezBFwIn5Q"
        />
      </head>
      <body>
        <div className="flex flex-col h-[100vh] my-0 mx-auto">
          <Navbar />
          <main className="flex justify-center flex-grow pl-0 lg:pl-[25%]">
            {children}
          </main>
          <section className="pl-0 lg:pl-[25%]">
            <Footer />
          </section>
        </div>
      </body>
    </html>
  );
}
