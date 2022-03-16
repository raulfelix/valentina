import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import * as Styled from "../../components/blog/blog.styles";

import Layout from "../../components/layout";
import { Col, Grid, Row } from "../../styles/grid.styles";
import { Text } from "../../styles/typography";
import { BlogShare } from "../../components/blog/blog-share";
import {
  Category,
  CategoryTextLink,
} from "../../components/categories/categories";

type Props = {
  data: any;
};

const BlogPost = ({ data }: Props) => {
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <Layout>
      <Grid>
        <Row>
          <Col>
            <Styled.BlogHeader>
              <Styled.BlogTitle>{data.mdx.frontmatter.title}</Styled.BlogTitle>
              <Text>{data.mdx.frontmatter.subtitle}</Text>
              <CategoryTextLink
                category={data.mdx.frontmatter?.categories?.[0] || ""}
              />
            </Styled.BlogHeader>
            <Styled.BlogHeroImage>
              <GatsbyImage
                image={image}
                alt={data.mdx.frontmatter.hero_image_alt}
              />
            </Styled.BlogHeroImage>
            <Styled.BlogContent>
              <Styled.BlogSideText>
                <Category
                  category={data.mdx.frontmatter?.categories?.[0] || ""}
                />
                <BlogShare
                  title={data.mdx.frontmatter.title}
                  url={window.location.href}
                />
              </Styled.BlogSideText>
              <Styled.BlogContentText>
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
              </Styled.BlogContentText>
            </Styled.BlogContent>
          </Col>
        </Row>
      </Grid>
    </Layout>
  );
};

// TODO filter out publicaitons
export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        categories
        date(formatString: "MMMM D, YYYY")
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      slug
      body
    }
  }
`;

export default BlogPost;
