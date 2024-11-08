module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "https://market-assets.strapi.io",
            "*.amazonaws.com",
            `${process.env.AWS_CDN_URL}`,
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "*.amazonaws.com",
            `${process.env.AWS_CDN_URL}`,
          ],
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
