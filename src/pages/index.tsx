import * as React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "../components/layout";
import { Grid, Col, Row } from "../styles/grid.styles";
import { Heading40, StrongLink } from "../styles/typography.styles";
import { PostCard } from "../components/blog/post-card";
import { PostCardLarge } from "../components/blog/post-card-large";
import { Categories } from "../components/categories/categories";
import { PublicationsList } from "../components/home/publications-list";
import { UsydFashion } from "../components/usyd-fashion/usyd-fashion";
import * as Styled from "../components/home/home.styles";
import { HomePostContent } from "../components/layout.styles";
import { SEO } from "../components/seo";

type DataProps = {
  allMdx: {
    nodes: {
      id: string;
      excerpt: string;
      slug: string;
      frontmatter: {
        title: string;
        categories: string[];
        date: string;
        hero_image: any;
      };
      timeToRead: string;
    }[];
  };
};

const IndexPage = ({ data }: PageProps<DataProps>) => {
  const firstPost = data.allMdx.nodes[0];
  return (
    <Layout>
      <Styled.HomeSection>
        <Grid>
          <Row>
            <Col>
              <Categories />
            </Col>
          </Row>
          <Row>
            <Col lg={7}>
              <HomePostContent>
                <Heading40 as="h2">LATEST BLOG</Heading40>
                <Styled.PrimaryPost>
                  <PostCardLarge {...firstPost} />
                </Styled.PrimaryPost>
                <Styled.SecondaryPosts>
                  {data.allMdx.nodes.map(
                    (m) => m !== firstPost && <PostCard key={m.id} {...m} />
                  )}
                </Styled.SecondaryPosts>
                <StrongLink to="/blog">See all blog posts</StrongLink>
              </HomePostContent>
            </Col>
            <Col lg={5}>
              <Heading40 as="h2">PUBLICATIONS</Heading40>
              <PublicationsList />
              <StrongLink to="/publications">See all publications</StrongLink>
            </Col>
          </Row>
        </Grid>
      </Styled.HomeSection>
      <UsydFashion />
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(
      limit: 3
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
          date
          title
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

export default IndexPage;

export const Head = () => <SEO />;
