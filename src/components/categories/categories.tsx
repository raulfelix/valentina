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
  azure8,
  gold1,
  gold8,
  lime1,
  lime8,
  magenta1,
  magenta8,
  purple1,
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

function getColour(cat: string) {
  switch (cat.toLowerCase()) {
    case "sneakers":
      return {
        bg: magenta1,
        text: magenta8,
      };
    case "fashion":
      return {
        bg: lime1,
        text: lime8,
      };
    case "music":
      return { bg: purple1, text: purple8 };
    case "sport":
      return { bg: azure1, text: azure8 };
    case "travel":
      return { bg: gold1, text: gold8 };
  }
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
      allMdx(filter: {fileAbsolutePath: {regex: "/(blog)/"}}) {
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
