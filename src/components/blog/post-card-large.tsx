import { IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import { ROUTE_CATEGORY } from "../../constants";

import * as Styled from "./post-card.styles";

type Props = {
  frontmatter: {
    title: string;
    categories: string[];
    date: string;
    hero_image: IGatsbyImageData;
  };
  slug: string;
  excerpt: string;
};

export const PostCardLarge = ({ excerpt, slug, frontmatter }: Props) => {
  return (
    <Styled.PostCardLarge>
      <Styled.PostCardLink to={`/blog/${slug}`} />

      <Styled.PostCardHeader>
        <Styled.PostCardImageWrapper>
          <Styled.PostCardImage
            imageUrl={frontmatter.hero_image.childImageSharp.fixed.srcWebp}
          />
        </Styled.PostCardImageWrapper>
        <Styled.PostCardCategory>
          {frontmatter.categories[0]}
        </Styled.PostCardCategory>
      </Styled.PostCardHeader>

      <Styled.PostCardLargeContent>
        <Styled.PostCardTitleLarge>
          {frontmatter?.title}
        </Styled.PostCardTitleLarge>
        <Styled.PostCardExcerpt>{excerpt}</Styled.PostCardExcerpt>
      </Styled.PostCardLargeContent>
    </Styled.PostCardLarge>
  );
};
