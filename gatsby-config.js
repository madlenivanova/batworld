require("dotenv").config();

module.exports = {
  siteMetadata: {
    description: `quick & not so dirty`,
    author: `katerina vaseva`,
  },
  assetPrefix: process.env.ASSET_PREFIX,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`${__dirname}/src/layouts/index.js`),
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
        apiToken: `3f98b60750fe9c878b6160894bb1e0`,
        environment: `main`,
        previewMode: true,
        disableLiveReload: false,
      },
    },
  ],
};
