/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Awesome-tools-against-COVID-19`,
    description: `A portal for all awesome ongoing COVID-19 OSS projects`,
    author: `@kalvin807`,
  },
  pathPrefix: '/awesome-tools-vs-covid',
  plugins: [`gatsby-plugin-react-helmet`, `gatsby-plugin-material-ui`],
}
