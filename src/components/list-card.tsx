import React from "react";

import * as Styled from "./list-card.styles";
import { PostCardCategory } from "./blog/post-card.styles";

type Props = {
  slug: string;
  frontmatter: {
    date: string;
    title: string;
    subtitle: string;
    categories: string[];
    publisher_name: string;
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

export const ListCard = ({ slug, frontmatter }: Props) =>
  frontmatter.external_link ? (
    <Styled.ListCardAnchor href={frontmatter.external_link} target="_blank">
      <Styled.ListCardImageWrapper>
        <Styled.ListCardImage
          imageUrl={frontmatter.hero_image.childImageSharp.fixed.srcWebp}
        />
        <Styled.ListCardCategory>
          {frontmatter.publisher_name}
        </Styled.ListCardCategory>
      </Styled.ListCardImageWrapper>
      <Styled.ListCardContent>
        <Styled.ListCardTitle>{frontmatter.title}</Styled.ListCardTitle>
        <Styled.ListCardDescription>
          {frontmatter.subtitle}
        </Styled.ListCardDescription>
      </Styled.ListCardContent>
    </Styled.ListCardAnchor>
  ) : (
    <Styled.ListCard to={slug}>
      <Styled.ListCardImageWrapper>
        <Styled.ListCardImage
          imageUrl={frontmatter.hero_image.childImageSharp.fixed.srcWebp}
        />
        <Styled.ListCardCategory>
          {frontmatter.categories[0]}
        </Styled.ListCardCategory>
      </Styled.ListCardImageWrapper>
      <Styled.ListCardContent>
        <Styled.ListCardTitle>{frontmatter.title}</Styled.ListCardTitle>
        <Styled.ListCardDescription>
          {frontmatter.subtitle}
        </Styled.ListCardDescription>
      </Styled.ListCardContent>
    </Styled.ListCard>
  );
