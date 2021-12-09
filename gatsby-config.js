module.exports = {
  siteMetadata: {
    siteUrl: `https://evanwalter.dev`,
    title: `Evan Walter | Software Engineer`,
    description: `I am a Software Engineer specializing in React.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Evan Walter | Software Engineer`,
        short_name: `Evan Walter`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#0c3483`,
        display: `standalone`,
        icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
  ],
};
