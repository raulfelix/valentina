import styled from "styled-components";

import { rem } from "../../styles/styles";
import { CategoryList } from "../categories/categories.styles";
import { fontFamilyElderkin, fontSize30 } from "../../styles/typography.styles";
import { grey10 } from "../../styles/colour.styles";

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
  margin-bottom: ${rem(40)};

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

export const HomeSubStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: ${rem(40)} auto ${rem(80)} auto;
  position: relative;
  max-width: ${rem(369)};

  @media (min-width: 928px) {
    max-width: ${rem(1000)};
  }
`;

export const HomeSubStackContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;

  img {
    position: absolute;
    left: -${rem(40)};
    top: -${rem(0)};
    width: ${rem(60)};

    @media (min-width: 480px) {
      left: -${rem(110)};
      top: -${rem(40)};
      width: ${rem(150)};
    }
  }

  @media (min-width: 928px) {
    padding-left: ${rem(120)};
    width: 50%;

    img {
      left: 0;
    }
  }
`;

export const HomeSubStackMessage = styled.div`
  ${fontFamilyElderkin}
  border-bottom: 1px dashed ${grey10};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: ${fontSize30};
  max-width: ${rem(400)};
  padding: ${rem(24)} 0;
  text-align: center;

  @media (min-width: 928px) {
    border-top: 1px dashed ${grey10};
    margin-left: ${rem(40)};
    padding: 0 ${rem(24)};
    width: 50%;
  }
`;

export const HomeFlipBlade = styled.div`
  background-color: #393939;
`;

export const HomeFlip = styled.div`
  background-color: #fff2c5;
  position: relative;
  padding-top: max(60%, 326px);
  height: 0;
  width: 100%;
  max-width: 800px;
  margin: auto;

  iframe {
    position: absolute;
    border: none;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
`;
