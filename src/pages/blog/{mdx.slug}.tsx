import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../../components/layout'

type Props = {
  data: any
}
const BlogPost = ({ data }: Props) => {

  const image = getImage(data.mdx.frontmatter.hero_image)

  return (
    <Layout pageTitle="Super Cool Blog Posts">
      <GatsbyImage
      image={image}
      alt={data.mdx.frontmatter.hero_image_alt}
    />
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`

export default BlogPost