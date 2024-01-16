/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: `Valentina Carrizo, Journalist, Writer`,
    siteUrl: `https://www.valentinacarrizo.com`,
    twitterUsername: `@Valentina4Pres`,
    image: "/v.jpeg",
    description: `Example project forValentina Carrizo is a writer and journalist from Australia specialising in long and short form journalism and criticism, and is experienced in the fashion, culture and lifestyle space. She is also a copywriter, and SEO expert with experience in AI prompt generation.`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-mdx",
    "gatsby-plugin-styled-components",
    "gatsby-remark-images",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-netlify",
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
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "publications",
        path: `${__dirname}/publication`,
      },
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
  ],
};
