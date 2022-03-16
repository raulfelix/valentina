exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                categories
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMdx.edges
    const categoriesFound = []
    posts.forEach(post => {
      post.node.frontmatter.categories.forEach(cat => {
        if (categoriesFound.indexOf(cat) === -1) {
          categoriesFound.push(cat)
        }
      })
    })

    // create a page for each category
    categoriesFound.forEach(cat => {
      createPage({
        path: `category/${cat}`,
        component: `${__dirname}/src/pages/category.tsx`,
        context: {
          category: cat,
        },
      })
    })

    return null
  })
}