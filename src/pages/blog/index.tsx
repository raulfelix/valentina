import * as React from "react";
import { graphql } from "gatsby";
import type { PageProps } from "gatsby";

import Layout from "../../components/layout";
import { Col, Grid, Row } from "../../styles/grid.styles";
import { ListCard } from "../../components/list-card";
import { BlogList } from "../../components/blog/blog.styles";
import { Categories } from "../../components/categories/categories";
import { LayoutContent } from "../../components/layout.styles";
import { SEO } from "../../components/seo";

type DataProps = {
  allMdx: {
    nodes: {
      id: string;
      slug: string;
      excerpt: string;
      frontmatter: {
        title: string;
        date: string;
      };
    }[];
  };
};

const BlogPage = ({ data }: PageProps<DataProps>) => {
  return (
    <Layout>
      <LayoutContent>
        <Categories />
        <BlogList>
          <Grid>
            <Row>
              <Col>
                {data.allMdx.nodes.map((node) => (
                  <ListCard
                    key={node.id}
                    excerpt={node.excerpt}
                    slug={node.slug}
                    frontmatter={node.frontmatter}
                  />
                ))}
              </Col>
            </Row>
          </Grid>
        </BlogList>
      </LayoutContent>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { fileAbsolutePath: { regex: "/(blog)/" } }
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

export default BlogPage;

export const Head = () => <SEO />;
