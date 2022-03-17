import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../../components/layout";
import { Col, Grid, Row } from "../../styles/grid.styles";
import { Text } from "../../styles/typography.styles";
import { BlogShare } from "../../components/blog/blog-share";
import { CategoryPill } from "../../components/categories/categories";
import * as Styled from "../../components/blog/blog.styles";

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
              <CategoryPill
                category={data.mdx.frontmatter?.categories?.[0] || ""}
              />
              <Styled.BlogTitle>{data.mdx.frontmatter.title}</Styled.BlogTitle>
              <Text>{data.mdx.frontmatter.subtitle}</Text>
            </Styled.BlogHeader>
            <Styled.BlogHeroImage>
              <GatsbyImage
                image={image}
                alt={data.mdx.frontmatter.hero_image_alt}
              />
            </Styled.BlogHeroImage>
            <Styled.BlogContent>
              <Styled.BlogSideText>
                <BlogShare
                  title={data.mdx.frontmatter.title}
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
