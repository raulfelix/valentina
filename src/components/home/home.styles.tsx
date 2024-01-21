import styled from "styled-components";

import { rem } from "../../styles/styles";
import { CategoryList } from "../categories/categories.styles";

export const HomeSection = styled.div`
  margin-bottom: ${rem(80)};

  ${CategoryList} {
    display: none;
    @media (min-width: 768px) {
      display: flex;
    }
  }
`;

export const HomeMainPost = styled.div`
  width: 100%;
`;

export const HomeSecondaryPost = styled.div`
  width: 100%;
`;

export const HomePosts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${rem(40)};
  margin-bottom: ${rem(80)};

  @media (min-width: 768px) {
    ${HomeMainPost}, ${HomeSecondaryPost} {
      flex: 1;
    }
  }

  @media (min-width: 1000px) {
    ${HomeMainPost} {
      flex: 1.5;
    }
  }
`;
