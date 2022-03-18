/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
      title: `Valentina`,
      siteUrl: `https://www.valentina.com`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-mdx",
    "gatsby-plugin-styled-components",
    "gatsby-remark-images",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/blog`,
        ignore: [`publications/**/\.*`],
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "publications",
        path: `${__dirname}/publication`,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Valentina",
        short_name: "Valentina",
        start_url: "/",
        background_color: "#FFFFFF",
        theme_color: "#FFFFFF",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: `${__dirname}/src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
  ]
}
