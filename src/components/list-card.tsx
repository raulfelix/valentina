import React from "react";

import * as Styled from "./list-card.styles";

type Props = {
  slug: string;
  frontmatter: {
    date: string;
    title: string;
    subtitle: string;
    categories: string[];
    external_link: string;
    hero_image: {
      childImageSharp: {
        fixed: {
          srcWebp: string;
        };
      };
    };
  };
};

export const ListCard = ({ slug, frontmatter }: Props) => (
  <Styled.ListCard to={slug}>
    <Styled.ListCardImageWrapper>
      <Styled.ListCardImage
        imageUrl={frontmatter.hero_image.childImageSharp.fixed.srcWebp}
      />
    </Styled.ListCardImageWrapper>
    <Styled.ListCardContent>
      <Styled.ListCardTitle>{frontmatter.title}</Styled.ListCardTitle>
      <Styled.ListCardDescription>
        {frontmatter.subtitle}
      </Styled.ListCardDescription>
      <Styled.ListCardCategory>
        {frontmatter.categories[0]}
      </Styled.ListCardCategory>
    </Styled.ListCardContent>
  </Styled.ListCard>
);
