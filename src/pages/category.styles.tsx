import styled from "styled-components";

import { mediaUp, rem } from "../styles/styles";
import { fontSize40 } from "../styles/typography.styles";
import { getColour } from "../components/categories/categories";
import {
  CategoryImage,
  CategoryImageLabel,
} from "../components/categories/categories.styles";
import { BlogList } from "../components/blog/blog.styles";

type CategoryHeaderProps = {
  category: string;
};

export const CategoryHeader = styled.div<CategoryHeaderProps>`
  background-color: ${({ category }) => getColour(category)?.bg};
  border-top: 1px solid ${({ category }) => getColour(category)?.bg2};
  border-bottom: 1px solid ${({ category }) => getColour(category)?.bg2};
  display: flex;
  justify-content: center;
  font-size: ${fontSize40};
  padding: ${rem(40)};
  margin-top: -40px;

  ${CategoryImage} {
    ${mediaUp.md`
      margin-top: -70px;
    `}
  }

  ${CategoryImageLabel} {
    color: ${({ category }) => getColour(category)?.text};
  }
`;

export const CategoryBlogList = styled(BlogList)`
  padding: ${rem(80)} 0;
`;
