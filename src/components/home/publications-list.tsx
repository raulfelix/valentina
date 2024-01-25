import { graphql, useStaticQuery } from "gatsby";
import React, { useMemo, useState } from "react";

import { PublicationCardLarge } from "../publications/publication-card-large";
import { PublicationContainer } from "../publications/publication-card-large.styles";
import {
  Filter,
  PublicationFilters,
} from "../publications/publications.styles";

export const PublicationsList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { internal: { contentFilePath: { regex: "/publication/" } } }
        sort: { frontmatter: { date: DESC } }
      ) {
        nodes {
          id
          frontmatter {
            date
            slug
            title
            subtitle
            external_link
            publisher_name
            publisher_link
            hero_image {
              childImageSharp {
                fixed(width: 400) {
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

  const [filterKey, setFilter] = useState<string>();

  const keys = useMemo(() => {
    const pubGroups: { [key: string]: any } = {};
    data.allMdx.nodes.forEach((p) => {
      const name = p.frontmatter.publisher_name;
      if (!pubGroups[name]) {
        pubGroups[name] = [];
      }
      pubGroups[name].push(p);
    });
    return Object.keys(pubGroups);
  }, [data]);

  const filtered = filterKey
    ? data.allMdx.nodes.filter(
        (n) => n.frontmatter.publisher_name === filterKey
      )
    : data.allMdx.nodes;

  return (
    <>
      <PublicationFilters>
        {keys.map((key) => (
          <Filter
            type="button"
            key={key}
            $isActive={filterKey === key}
            onClick={() => {
              if (filterKey === key) {
                setFilter(undefined);
              } else {
                setFilter(key);
              }
            }}
          >
            {key}
          </Filter>
        ))}
      </PublicationFilters>
      <PublicationContainer>
        {filtered.map((n) => {
          return (
            <div key={n.id}>
              <PublicationCardLarge key={n.id} frontmatter={n.frontmatter} />
            </div>
          );
        })}
      </PublicationContainer>
    </>
  );
};
