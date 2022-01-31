module.exports = {
  pathPrefix: "",
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "SPEC",
  },
  plugins: [
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-fontawesome-css",
    "gatsby-plugin-split-css",
    "gatsby-plugin-resolve-src",
  ],
};
