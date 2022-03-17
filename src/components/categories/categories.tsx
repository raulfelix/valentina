import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import * as Styled from "./categories.styles";

import sport from "./sport.png";
import fashion from "./fashion.png";
import music from "./music.png";
import sneakers from "./sneakers.png";
import travel from "./travel.png";
import {
  azure1,
  azure2,
  azure8,
  cyan1,
  cyan2,
  cyan8,
  grey2,
  grey4,
  grey8,
  magenta1,
  magenta2,
  magenta8,
  purple1,
  purple2,
  purple8,
} from "../../styles/colour.styles";

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

export function getColour(cat: string) {
  switch (cat?.toLowerCase()) {
    case "sneakers":
      return {
        bg: purple1,
        bg2: purple2,
        text: purple8,
      };
    case "fashion":
      return {
        bg: magenta1,
        bg2: magenta2,
        text: magenta8,
      };
    case "music":
      return { bg: purple1, bg2: purple2, text: purple8 };
    case "sport":
      return { bg: azure1, bg2: azure2, text: azure8 };
    case "travel":
      return { bg: cyan1, bg2: cyan2, text: cyan8 };
  }
  return { bg: grey2, bg2: grey4, text: grey8 };
}

export const CategoryPill = ({ category }: { category: string }) => (
  <Styled.CategoryPill
    to={`/category/${category}`}
    $colour={getColour(category)}
  >
    <span>{category}</span>
  </Styled.CategoryPill>
);

export const CategoryTextLink = ({ category }: { category: string }) => (
  <Styled.CategoryLink to={`/category/${category}`} $colour={getColour(category)}>
    {category}
  </Styled.CategoryLink>
);

export const CategoryImage = ({ category }: { category: string }) => (
  <Styled.Category to={`/category/${category}`}>
    <Styled.CategoryImage imageSrc={getImage(category)}></Styled.CategoryImage>
    <Styled.CategoryImageLabel>{category}</Styled.CategoryImageLabel>
  </Styled.Category>
);

export const Categories = () => {
  const data = useStaticQuery(graphql`
    query Categories {
      allMdx(filter: { fileAbsolutePath: { regex: "/(blog)/" } }) {
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
        return <CategoryPill key={i} category={g.category} />;
      })}
    </Styled.CategoryList>
  );
};
