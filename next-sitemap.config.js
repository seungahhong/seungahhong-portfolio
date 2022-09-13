/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://seungahhong-portfolio.vercel.app/',
  generateRobotsTxt: true,
  sitemapSize: 7000,
};
