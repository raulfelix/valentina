import * as React from "react";
import { graphql } from "gatsby";
import type { PageProps } from "gatsby";

import Layout from "../../components/layout";
import { Col, Grid, Row } from "../../styles/grid.styles";
import { ListCard } from "../../components/list-card";
import { BlogCategories, BlogList } from "../../components/blog/blog.styles";
import { Categories } from "../../components/categories/categories";
import { LayoutContent } from "../../components/layout.styles";
import { SEO } from "../../components/seo";
import { PostCard } from "../../components/blog/post-card";

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
  const post1 = data.allMdx.nodes[0];
  const post2 = data.allMdx.nodes[1];
  const filtered =
    data.allMdx.nodes.length > 1
      ? data.allMdx.nodes.filter((n, index) => index > 1)
      : [];

  return (
    <Layout bannerText="Personal Blog">
      <LayoutContent>
        <BlogCategories>
          <Categories />
        </BlogCategories>
        <BlogList>
          <Grid>
            <Row>
              <Col sm={6}>
                <PostCard {...post1} />
              </Col>
              <Col sm={6}>
                <PostCard {...post2} />
              </Col>
            </Row>
          </Grid>
        </BlogList>

        <BlogList $marginBottom={false}>
          <Grid>
            <Row>
              {filtered.map((node) => (
                <Col md={6} key={node.id}>
                  <ListCard
                    excerpt={node.excerpt}
                    frontmatter={node.frontmatter}
                  />
                </Col>
              ))}
            </Row>
          </Grid>
        </BlogList>
      </LayoutContent>
    </Layout>
  );
};

export const query = graphql`
  {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { internal: { contentFilePath: { regex: "/blog/" } } }
    ) {
      nodes {
        id
        excerpt
        frontmatter {
          slug
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

export const Head = () => (
  <SEO title="Blog - Valentina Carrizo, Journalist, Writer" />
);
