import { graphql, PageProps } from "gatsby";
import * as React from "react";

import Layout from "../components/layout";
import { Col, Grid, Row } from "../styles/grid.styles";
import { PublicationCard } from "../components/publications/publication-card";
import * as Styled from "../components/publications/publications.styles";

import honisoit from "../components/publications/honisoit.png";
import deadgoodmusic from "../components/publications/deadgoodmusic.png";
import icon from "../components/publications/icon.png";
import grazia from "../components/publications/grazia.png";
import gluestore from "../components/publications/gluestore.png";
import { SEO } from "../components/seo";

type DataProps = {
  allMdx: {
    nodes: {
      id: string;
      frontmatter: {
        title: string;
        subtitle: string;
        date: string;
        external_link: string;
        publisher_name: string;
        publisher_link: string;
      };
    }[];
  };
};

function getIcon(name: string) {
  switch (name.toLowerCase()) {
    case "honi soit":
      return honisoit;
    case "dead good music":
      return deadgoodmusic;
    case "icon":
      return icon;
    case "grazia":
      return grazia;
    case "gluestore":
      return gluestore;
  }
  return "";
}

const PublicationsPage = ({ data }: PageProps<DataProps>) => {
  const pubGroups: { [key: string]: any } = {};

  data.allMdx.nodes.forEach((p) => {
    const name = p.frontmatter.publisher_name;
    if (!pubGroups[name]) {
      pubGroups[name] = [];
    }
    pubGroups[name].push(p);
  });

  const keys = Object.keys(pubGroups);
  return (
    <Layout>
      <Grid>
        <Row>
          <Col>
            <Styled.List>
              <Styled.PublicationFilters>
                {keys.map((key) => (
                  <a key={key} href={`#${key}`}>
                    {key}
                  </a>
                ))}
              </Styled.PublicationFilters>
              {keys.map((key) => (
                <Styled.PublicationGroup key={key} id={key}>
                  <Styled.PublicationIcon>
                    <img src={getIcon(key)} alt={key} height={40} />
                  </Styled.PublicationIcon>
                  <div>
                    {pubGroups[key].map((p) => (
                      <PublicationCard key={p.id} frontmatter={p.frontmatter} />
                    ))}
                  </div>
                </Styled.PublicationGroup>
              ))}
            </Styled.List>
          </Col>
        </Row>
      </Grid>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/(publication)/" } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      nodes {
        id
        frontmatter {
          date(formatString: "DD MMMM yyyy")
          title
          subtitle
          external_link
          publisher_name
          publisher_link
          hero_image {
            childImageSharp {
              fixed(width: 800) {
                srcWebp
                srcSetWebp
                originalName
              }
            }
          }
          hero_image_credit_link
          hero_image_credit_text
        }
      }
    }
  }
`;

export default PublicationsPage;

export const Head = () => (
  <SEO title="Publications - Valentina Carrizo, Journalist, Writer" />
);
