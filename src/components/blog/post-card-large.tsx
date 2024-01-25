import { IGatsbyImageData, getImage } from "gatsby-plugin-image";
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
  excerpt: string;
};

export const PostCardLarge = ({ excerpt, frontmatter }: Props) => {
  return (
    <Styled.PostCardLarge>
      <Styled.PostCardLink to={`/blog/${frontmatter.slug}`} />

      <Styled.PostCardHeader>
        <Styled.PostCardImageWrapper>
          <Styled.PostCardImage
            $imageUrl={
              frontmatter.hero_image.childImageSharp.gatsbyImageData.images
                .fallback.src
            }
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
