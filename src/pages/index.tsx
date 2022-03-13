import * as React from "react";
import { graphql, PageProps } from "gatsby";
import { TagLine } from "../components/home/tag-line";

import Layout from "../components/layout";
import { Grid, Col, Row } from "../styles/grid.styles";
import { PostCard } from "../components/blog/post-card";
import { PrimaryPost, SecondaryPosts } from "../components/home/home.styles";
import { PostCardLarge } from "../components/blog/post-card-large";
import { Heading46 } from "../styles/typography";

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

      <Grid>
        <Row>
          <Col md={8}>
            <Heading46 as="h2">lAtest blog</Heading46>
            <PrimaryPost>
              <PostCardLarge {...firstPost} />
            </PrimaryPost>
            <SecondaryPosts>
              {data.allMdx.nodes.map(
                (m) => m !== firstPost && <PostCard key={m.id} {...m} />
              )}
            </SecondaryPosts>
          </Col>
          <Col md={4}>
            {" "}
            <Heading46 as="h2">publicAtions</Heading46>
          </Col>
        </Row>
      </Grid>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(limit: 3, sort: { order: DESC, fields: frontmatter___date }) {
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
