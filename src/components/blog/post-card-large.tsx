import { IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import { ROUTE_CATEGORY } from "../../constants";
import { CategoryPill } from "../categories/categories";

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
      <Styled.PostCardImageWrapper>
        <Styled.PostCardImage
          imageUrl={frontmatter.hero_image.childImageSharp.fixed.srcWebp}
        />
      </Styled.PostCardImageWrapper>
      <Styled.PostCardLargeContent>
        <CategoryPill category={frontmatter?.categories[0]} />
        <Styled.PostCardTitleLarge to={`/blog/${slug}`}>
          {frontmatter?.title}
        </Styled.PostCardTitleLarge>
        <Styled.PostCardExcerpt>{excerpt}</Styled.PostCardExcerpt>
      </Styled.PostCardLargeContent>
    </Styled.PostCardLarge>
  );
};
