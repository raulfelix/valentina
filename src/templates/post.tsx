import React from "react";
import { HeadProps, graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import { Col, Grid, Row } from "../styles/grid.styles";
import { Text } from "../styles/typography.styles";
import { BlogShare } from "../components/blog/blog-share";
import { Embed } from "../components/blog/embed";
import * as Styled from "../components/blog/blog.styles";
import { SEO } from "../components/seo";
import { ContactHr } from "../components/contact.styles";
import { SubStack } from "../components/substack/substack";

export default function BlogPost({ data, children }) {
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <Layout withSmallHeader>
      <MDXProvider components={{ Embed }}>
        <Grid>
          <Row>
            <Col>
              <Styled.BlogHeroImage>
                <GatsbyImage
                  image={image}
                  alt={data.mdx.frontmatter.hero_image_alt}
                />
              </Styled.BlogHeroImage>
              <Styled.BlogContainer>
                <Styled.BlogSideText>
                  <Styled.BlogPageStickyContent>
                    <Styled.BlogCategory
                      to={`/category/${
                        data.mdx.frontmatter?.categories?.[0]?.toLowerCase() ||
                        ""
                      }`}
                    >
                      {data.mdx.frontmatter?.categories?.[0]}
                    </Styled.BlogCategory>
                    <BlogShare title={data.mdx.frontmatter.title} />
                    <Styled.BlogPageSubStack>
                      <SubStack />
                    </Styled.BlogPageSubStack>
                  </Styled.BlogPageStickyContent>
                </Styled.BlogSideText>
                <div>
                  <Styled.BlogHeader>
                    <Styled.BlogTitle>
                      {data.mdx.frontmatter.title}
                    </Styled.BlogTitle>
                    <Text>{data.mdx.frontmatter.subtitle}</Text>
                    <ContactHr />
                    <ContactHr />
                  </Styled.BlogHeader>
                  <Styled.BlogContent>
                    <Styled.BlogContentText>{children}</Styled.BlogContentText>
                  </Styled.BlogContent>
                </div>
              </Styled.BlogContainer>
            </Col>
          </Row>
        </Grid>
      </MDXProvider>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        slug
        categories
        date(formatString: "MMMM D, YYYY")
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
      excerpt
    }
  }
`;

export const Head = (props: HeadProps) => {
  console.log(props);

  const image = getImage(props.data.mdx.frontmatter.hero_image);
  return (
    <SEO
      title={`${props.data.mdx.frontmatter.title} - Valentina Carrizo, Journalist, Writer`}
      url={`blog/${props.data.mdx.frontmatter.slug}`}
      description={props.data.mdx.frontmatter.excerpt}
      customImage={image.images.fallback.src}
    >
      <meta property="og:type" content="article" />
    </SEO>
  );
};
