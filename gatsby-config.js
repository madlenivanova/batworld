require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `HS Bespoke Features Starter`,
    description: `quick & not so dirty`,
    author: `@highsnob`,
  },
  assetPrefix: process.env.ASSET_PREFIX,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `@wardpeet/gatsby-plugin-static-site`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Highsnob bespoke feature`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/hs-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          react: require.resolve(`${__dirname}/node_modules/react`),
          "@src": "src",
          "@components": "src/components",
          "@providers": "src/providers",
          "@fonts": "src/fonts",
          "@assets": "src/assets",
          "@plugins": "src/plugins",
          "@utilities": "src/utilities",
          "@effects": "src/effects",
        },
        extensions: [],
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `301e42ddbf53a95a63eee3f3b8ee40`,
        environment: `main`,
        previewMode: true,
        disableLiveReload: false,
      },
    },
  ],
};
