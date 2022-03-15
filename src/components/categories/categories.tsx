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

export const CategoryTextLink = ({ category }: { category: string }) => (
  <Styled.CategoryLink to={`/category/${category}`}>
    <Styled.CategoryLabel>{category}</Styled.CategoryLabel>
  </Styled.CategoryLink>
);

export const Category = ({ category }: { category: string }) => (
  <Styled.Category to={`/category/${category}`}>
    <Styled.CategoryImage imageSrc={getImage(category)}></Styled.CategoryImage>
    <Styled.CategoryLabel>{category}</Styled.CategoryLabel>
  </Styled.Category>
);

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
      {data.allMdx.group.map((g: any, i: number) => {
        return <Category key={i} category={g.category} />;
      })}
    </Styled.CategoryList>
  );
};
