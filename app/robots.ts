import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: [
      'https://seungahhong-portfolio.vercel.app/sitemap.xml',
      'https://seungahhong-portfolio.vercel.app/sitemap-0.xml',
    ],
  };
}
