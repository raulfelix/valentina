import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import * as Styled from "./tag-line.styles";
import { PublicationCard } from "../publications/publication-card";

export const PublicationsList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/(publication)/" } }
        limit: 6
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        nodes {
          id
          slug
          frontmatter {
            date
            title
            subtitle
            external_link
            publisher_name
            publisher_link
            publisher_icon {
              childImageSharp {
                fixed(width: 190) {
                  tracedSVG
                  aspectRatio
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
  `);

  return (
    <>
      {data.allMdx.nodes.map((n) => {
        return <PublicationCard key={n.id} frontmatter={n.frontmatter} />;
      })}
    </>
  );
};
