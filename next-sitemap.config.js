/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://snorkell-landing-page-v2.vercel.app/",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [
      "https://snorkell-landing-page-v2.vercel.app/sitemap.xml",
    ],
  },
  exclude: [],
  generateIndexSitemap: false,
  outDir: "public",
  transform: async (_, path) => {
    return {
      loc: path,
      changefreq: "daily",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    };
  },
};
