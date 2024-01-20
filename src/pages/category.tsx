import * as React from "react";
import { graphql, PageProps } from "gatsby";
import type { HeadProps } from "gatsby";

import Layout from "../components/layout";
import { ListCard } from "../components/list-card";
import { Col, Grid, Row } from "../styles/grid.styles";
import * as Styled from "../components/category.styles";
import { CategoryImageLabel } from "../components/categories/categories.styles";
import { SEO } from "../components/seo";

const CategoryPage = (props: PageProps) => {
  const {
    pageContext: { category },
    data,
  } = props;

  return (
    <Layout bannerText={category}>
      <Styled.CategoryBlogList>
        <Grid>
          <Row>
            <Col>
              {data.allMdx.nodes.map((node) => (
                <ListCard
                  key={node.id}
                  excerpt={node.excerpt}
                  slug={`/blog/${node.slug}`}
                  frontmatter={node.frontmatter}
                />
              ))}
            </Col>
          </Row>
        </Grid>
      </Styled.CategoryBlogList>
    </Layout>
  );
};

export const Head = (props: HeadProps) => {
  return (
    <SEO
      title={`${props.pageContext?.category} - Valentina Carrizo, Journalist, Writer`}
      url={`category/${props.pageContext?.category}`}
    />
  );
};

export const query = graphql`
  query categoryList($category: [String!]) {
    allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { categories: { in: $category } } }
    ) {
      nodes {
        id
        slug
        excerpt
        frontmatter {
          hero_image_credit_link
          hero_image_credit_text
          date(formatString: "DD MMMM yyyy")
          title
          subtitle
          categories
          publisher_name
          external_link
          hero_image {
            childImageSharp {
              fixed(width: 800) {
                srcWebp
                srcSetWebp
                originalName
              }
            }
          }
        }
      }
    }
  }
`;

export default CategoryPage;
