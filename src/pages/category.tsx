import * as React from "react";
import { graphql, PageProps } from "gatsby";
import type { HeadProps } from "gatsby";

import Layout from "../components/layout";
import { ListCard } from "../components/list-card";
import { Col, Grid, Row } from "../styles/grid.styles";
import { SEO } from "../components/seo";
import { BlogList } from "../components/blog/blog.styles";

const CategoryPage = (props: PageProps) => {
  const {
    pageContext: { category },
    data,
  } = props;

  return (
    <Layout bannerText={category}>
      <BlogList>
        <Grid>
          <Row>
            {data.allMdx.nodes.map((node) => (
              <Col sm={6} key={node.id}>
                <ListCard
                  slug={`/blog/${node.frontmatter.slug}`}
                  frontmatter={node.frontmatter}
                />
              </Col>
            ))}
          </Row>
        </Grid>
      </BlogList>
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

export const query = graphql`query categoryList($category: [String!]) {
  allMdx(
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {categories: {in: $category}}}
  ) {
    nodes {
      id
      excerpt
      frontmatter {
        hero_image_credit_link
        hero_image_credit_text
        date(formatString: "DD MMMM yyyy")
        title
        subtitle
        slug
        categories
        publisher_name
        external_link
        hero_image {
          childImageSharp {
            gatsbyImageData(width: 800, placeholder: BLURRED, layout: FIXED)
          }
        }
      }
    }
  }
}`;

export default CategoryPage;
