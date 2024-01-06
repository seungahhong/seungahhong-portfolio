'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { pageview } from '../../lib/gtags';

const GoogleAnalytics = ({ gaID }: { gaID: string }) => {
	const pathname = usePathname();

	useEffect(() => {
		if (pathname && process.env.NODE_ENV !== 'development') {
			pageview(pathname);
		}
	}, [pathname]);

	if (process.env.NODE_ENV === 'development') {
		return null;
	}

	return (
		<>
			<Script
				strategy="afterInteractive"
				src={`https://www.googletagmanager.com/gtag/js?id=${gaID}`}
			/>
			<Script
				id="google-analytics"
				strategy="afterInteractive"
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
};
export default GoogleAnalytics;
