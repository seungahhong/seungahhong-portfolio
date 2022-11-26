import React, { FunctionComponent, ReactNode } from 'react';
import Head from 'next/head';

interface TemplateProps {
  title: string;
  description: string;
  url: string;
  author: string;
  canonical: string;
  children: ReactNode;
}

const Template: FunctionComponent<TemplateProps> = ({
  title = '홍승아 포트폴리오',
  description = '홍승아 포트폴리오에 오신걸 환영합니다.',
  url = 'https://seungahhong-portfolio.vercel.app',
  author = '홍승아',
  canonical,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <link rel="canonical" href={canonical} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta
          property="og:image"
          content={`${url}/_next/image?url=%2Fworks_portfolio_1_logo.png&w=3840&q=75`}
        />
        <meta property="og:site_name" content={author} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:site" content={author} />
        <meta
          property="twitter:image"
          content={`${url}/_next/image?url=%2Fworks_portfolio_1_logo.png&w=3840&q=75`}
        />
        <meta name="twitter:creator" content={author} />

        <meta
          name="google-site-verification"
          content="FC05NvDOB-arKsf_Q9aSiELFIEGfTH-zyMezBFwIn5Q"
        />
      </Head>
      {children}
    </>
  );
};

export default Template;
