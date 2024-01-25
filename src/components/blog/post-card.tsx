import React from "react";

import * as Styled from "./post-card.styles";

type Props = {
  excerpt: string;
  frontmatter: {
    title: string;
    categories: string[];
    date: string;
    hero_image: any;
    slug: string;
  };
  isSquare?: boolean;
};

export const PostCard = ({ excerpt, frontmatter }: Props) => {
  console.log(frontmatter.hero_image.childImageSharp.fixed?.srcWebp);
  return (
    <Styled.PostCard>
      <Styled.PostCardLink to={`/blog/${frontmatter.slug}`} />
      <Styled.PostCardHeader>
        <Styled.PostCardImageWrapper>
          <Styled.PostCardImage
            $imageUrl={frontmatter.hero_image.childImageSharp.fixed?.srcWebp}
          />
        </Styled.PostCardImageWrapper>
        <Styled.PostCardCategory>
          {frontmatter.categories[0]}
        </Styled.PostCardCategory>
      </Styled.PostCardHeader>

      <Styled.PostCardContent>
        <Styled.PostCardTitle>{frontmatter.title}</Styled.PostCardTitle>
        <Styled.PostCardExcerpt>{excerpt}</Styled.PostCardExcerpt>
      </Styled.PostCardContent>
    </Styled.PostCard>
  );
};
