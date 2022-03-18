import styled from "styled-components";

import { rem } from "../styles/styles";
import { fontSize40, headlineFont } from "../styles/typography.styles";
import { getColour } from "./categories/categories";
import {
  CategoryImageLabel,
} from "./categories/categories.styles";
import { BlogList } from "./blog/blog.styles";

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
  font-family: ${headlineFont};
  padding: ${rem(24)};
  margin-top: -40px;

  ${CategoryImageLabel} {
    color: ${({ category }) => getColour(category)?.text};
  }
`;

export const CategoryBlogList = styled(BlogList)`
  padding: ${rem(80)} 0;
`;
