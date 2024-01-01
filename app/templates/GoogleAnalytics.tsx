import Script from 'next/script';

const GoogleAnalytics = ({ gaID }: { gaID: string }) => (
  <>
    <Script
      async
      src={`https://www.googletagmanager.com/gtag/js? 
      id=${gaID}`}
     />
    <Script
      id="google-analytics"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gaID}');
        `,
      }}
     />
  </>
);
export default GoogleAnalytics;
