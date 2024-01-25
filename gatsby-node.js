const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve(`./src/templates/post.tsx`);
  return graphql(
    `
      {
        allMdx(
          filter: { internal: { contentFilePath: { regex: "/blog/" } } }
          sort: { frontmatter: { date: DESC } }
          limit: 1000
        ) {
          nodes {
            id
            frontmatter {
              categories
              title
              slug
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog posts pages.
    const posts = result.data.allMdx.nodes;
    const categoriesFound = [];
    posts.forEach((node) => {
      createPage({
        path: `blog/${node.frontmatter.slug}`,
        component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
        context: { id: node.id },
      });
      node.frontmatter.categories.forEach((cat) => {
        if (categoriesFound.indexOf(cat) === -1) {
          categoriesFound.push(cat);
        }
      });
    });

    // create a page for each category
    categoriesFound.forEach((cat) => {
      createPage({
        path: `category/${cat}`,
        component: `${__dirname}/src/pages/category.tsx`,
        context: {
          category: cat,
        },
      });
    });

    return null;
  });
};
