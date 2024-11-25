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
                  <PostCard {...secondPost} />
                </Styled.HomeSecondaryPost>
                <Styled.HomeMainPost>
                  <PostCardLarge {...firstPost} />
                </Styled.HomeMainPost>
                <Styled.HomeSecondaryPost>
                  <PostCard {...thirdPost} />
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
      <Styled.HomeFlipBlade>
        <Styled.HomeFlip>
          <iframe src="https://heyzine.com/flip-book/5ff6ebebfe.html"></iframe>
        </Styled.HomeFlip>
      </Styled.HomeFlipBlade>
    </Layout>
  );
};

export const query = graphql`
  {
    allMdx(
      limit: 3
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
          date
          title
          categories
          hero_image {
            childImageSharp {
              gatsbyImageData(width: 800, placeholder: BLURRED, layout: FIXED)
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;

export const Head = () => <SEO />;
