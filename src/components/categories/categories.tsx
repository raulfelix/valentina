import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import * as Styled from "./categories.styles";

import sport from "./sport.png";
import fashion from "./fashion.png";
import music from "./music.png";
import sneakers from "./sneakers.png";
import travel from "./travel.png";

function getImage(cat: string) {
  switch (cat.toLowerCase()) {
    case "sneakers":
      return sneakers;
    case "fashion":
      return fashion;
    case "music":
      return music;
    case "sport":
      return sport;
    case "travel":
      return travel;
  }
}

export const Categories = () => {
  const data = useStaticQuery(graphql`
    query Categories {
      allMdx {
        group(field: frontmatter___categories) {
          category: fieldValue
          totalCount
        }
      }
    }
  `);

  return (
    <Styled.CategoryList>
      {data.allMdx.group.map((g: any) => {
        return (
          <Styled.Category to={`/category/${g.category}`}>
            <Styled.CategoryImage
              imageSrc={getImage(g.category)}
            ></Styled.CategoryImage>
            <Styled.CategoryLabel>{g.category}</Styled.CategoryLabel>
          </Styled.Category>
        );
      })}
    </Styled.CategoryList>
  );
};
