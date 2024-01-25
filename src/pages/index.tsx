import * as React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "../components/layout";
import { Grid, Col, Row } from "../styles/grid.styles";
import { Heading46 } from "../styles/typography.styles";
import { PostCard } from "../components/blog/post-card";
import { PostCardLarge } from "../components/blog/post-card-large";
import { Categories } from "../components/categories/categories";
import { PublicationsList } from "../components/home/publications-list";
import { UsydFashion } from "../components/usyd-fashion/usyd-fashion";
import { SEO } from "../components/seo";
import * as Styled from "../components/home/home.styles";
import { SubStack } from "../components/substack/substack";

import bigarrow from "../components/substack/bigarrow.svg";

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
  const secondPost = data.allMdx.nodes[1];
  const thirdPost = data.allMdx.nodes[2];

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
            <Col lg={12}>
              <Styled.HomePosts>
                <Styled.HomeSecondaryPost>
                  <PostCard {...secondPost} isSquare />
                </Styled.HomeSecondaryPost>
                <Styled.HomeMainPost>
                  <PostCardLarge {...firstPost} />
                </Styled.HomeMainPost>
                <Styled.HomeSecondaryPost>
                  <PostCard {...thirdPost} isSquare />
                </Styled.HomeSecondaryPost>
              </Styled.HomePosts>
            </Col>
          </Row>
          <Styled.HomeSubStack>
            <Styled.HomeSubStackContainer>
              <img src={bigarrow} alt="" />
              <SubStack />
            </Styled.HomeSubStackContainer>
            <Styled.HomeSubStackMessage>
              <span>
                No spam, no nonsense. Just a good dose of critical thinking
              </span>
            </Styled.HomeSubStackMessage>
          </Styled.HomeSubStack>
          <Row>
            <Col lg={12}>
              <Heading46 as="h2">PUBLICATIONS</Heading46>
              <PublicationsList />
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
