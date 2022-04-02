import React from "react";

import * as Styled from "./publication-card.styles";

type Props = {
  frontmatter: {
    date: string;
    title: string;
    subtitle: string;
    external_link: string;
    publisher_name: string;
    publisher_link: string;
    hero_image: {
      childImageSharp: {
        fixed: {
          srcWebp: string;
        };
      };
    };
  };
};

export const PublicationCard = ({ frontmatter }: Props) => {
  return (
    <Styled.PublicationCard>
      <Styled.PublicationCardImageWrapper>
        <Styled.PublicationCardImage
          imageUrl={frontmatter.hero_image?.childImageSharp?.fixed?.srcWebp}
        />
      </Styled.PublicationCardImageWrapper>
      <Styled.PublicationCardContent>
        <Styled.PublicationCardCategory
          href={frontmatter.publisher_link}
          target="_blank"
        >
          {frontmatter.publisher_name}
        </Styled.PublicationCardCategory>
        <Styled.PublicationCardTitle
          href={frontmatter.external_link}
          target="_blank"
        >
          {frontmatter.title}
        </Styled.PublicationCardTitle>
        {frontmatter.subtitle && (
          <Styled.PublicationCardDescription>
            {frontmatter.subtitle}
          </Styled.PublicationCardDescription>
        )}
      </Styled.PublicationCardContent>
    </Styled.PublicationCard>
  );
};
