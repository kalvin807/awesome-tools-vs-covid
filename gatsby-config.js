/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Awesome Tools against COVID-19',
    description: 'A portal for all awesome ongoing COVID-19 OSS projects',
    author: '@kalvin807',
    url: 'https://kalvin807.github.io/awesome-tools-vs-covid',
    image: '/favicon/favicon.ico',
  },
  pathPrefix: '/awesome-tools-vs-covid',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-material-ui',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Awesome Tools aganist COVID-19 `,
        short_name: `Tools aganist COVID-19 `,
        start_url: `/`,
        background_color: `#1a237e`,
        theme_color: `#1a237e`,
        display: `standalone`,
        icon: `static/favicon/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
