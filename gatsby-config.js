module.exports = {
  siteMetadata: {
    title: `Evan Walter | Full Stack Engineer`,
    siteUrl: `https://evanwalter.dev`,
    description: `I am a Full Stack specializing in Node.js, React, and TypeScript.`,
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
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Evan Walter | Full Stack Engineer`,
        short_name: `Evan Walter`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#0c3483`,
        display: `standalone`,
        icon: `src/assets/images/favicon.ico`, // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
  ],
};
