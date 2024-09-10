/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.penify.dev/",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [
      "https://www.penify.dev/sitemap.xml",
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
