import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";

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
  const image = getImage(frontmatter?.hero_image);

  console.log(image);
  return (
    <Styled.PostCardLarge>
      <Styled.PostCardLink to={`/blog/${slug}`} />
      <Styled.PostCardImage>
        <GatsbyImage image={image} alt=""/>
      </Styled.PostCardImage>
      <Styled.PostCardLargeContent>
        <Styled.PostCardCategory>{frontmatter?.categories.join(' ,')}</Styled.PostCardCategory>
        <Styled.PostCardTitleLarge to={`/blog/${slug}`}>{frontmatter?.title}</Styled.PostCardTitleLarge>
        <Styled.PostCardExcerpt>{excerpt}</Styled.PostCardExcerpt>
      </Styled.PostCardLargeContent>
    </Styled.PostCardLarge>
  );
};
