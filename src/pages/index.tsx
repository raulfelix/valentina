import * as React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "../components/layout";
import { Grid, Col, Row } from "../styles/grid.styles";
import { Heading46 } from "../styles/typography";
import { PostCard } from "../components/blog/post-card";
import { PostCardLarge } from "../components/blog/post-card-large";
import { Contact } from "../components/contact";
import { Categories } from "../components/categories/categories";
import { PublicationsList } from "../components/home/publications-list";
import { TagLine } from "../components/home/tag-line";
import { UsydFashion } from "../components/usyd-fashion/usyd-fashion";
import * as Styled from "../components/home/home.styles";


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
      };
      timeToRead: string;
    }[];
  };
};

const IndexPage = ({ data }: PageProps<DataProps>) => {
  const firstPost = data.allMdx.nodes[0];
  return (
    <Layout>
      <TagLine />
      <Categories />
      <Styled.HomeSection>
        <Grid>
          <Row>
            <Col md={7}>
              <Heading46 as="h2">lAtest blog</Heading46>
              <Styled.PrimaryPost>
                <PostCardLarge {...firstPost} />
              </Styled.PrimaryPost>
              <Styled.SecondaryPosts>
                {data.allMdx.nodes.map(
                  (m) => m !== firstPost && <PostCard key={m.id} {...m} />
                )}
              </Styled.SecondaryPosts>
            </Col>
            <Col md={5}>
              {" "}
              <Heading46 as="h2">publicAtions</Heading46>
              <PublicationsList />
            </Col>
          </Row>
        </Grid>
      </Styled.HomeSection>
      <UsydFashion />
      <Contact />
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
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
