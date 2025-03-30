module.exports = {
  runtimeCaching: [
    {
      urlPattern: /\.(?:js|css|woff2|png|jpg|jpeg|svg|gif|ico|webp)$/,
      handler: "CacheFirst",
      options: {
        cacheName: "static-assets",
        expiration: { maxAgeSeconds: 60 * 60 * 24 * 30 },
      },
    },

    {
      urlPattern: /.*/,
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "html-cache",
        expiration: { maxAgeSeconds: 60 * 60 * 24 * 7 },
      },
    },
  ],
};
