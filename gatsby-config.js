const path = require("path");
require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `HS Bespoke Features Starter`,
    description: `quick & not so dirty`,
    author: `@gatsbyjs`,
  },
  assetPrefix: `https://static.highsnobiety.com/interactive-stories/2021-04-crocs-fix-2/`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `@wardpeet/gatsby-plugin-static-site`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          react: require.resolve(`${__dirname}/node_modules/react`),
        },
        extensions: [],
      },
    },
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
        name: `gatsby-starter-default`,
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
          "@src": "src",
          "@components": "src/components",
          "@providers": "src/providers",
          "@styles": "src/styles",
          "@assets": "src/assets",
          "@plugins": "src/plugins",
          "@utilities": "src/utilities",
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
