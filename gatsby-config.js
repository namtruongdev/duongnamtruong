module.exports = {
  siteMetadata: {
    siteUrl: `https://duongnamtruong.com`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Duong Nam Truong | Full Stack Developer`,
        short_name: `Duong Nam Truong`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#7f449d`,
        display: `standalone`,
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-123121912-8',
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
    'gatsby-plugin-offline',
    `gatsby-plugin-preact`,
  ],
};
