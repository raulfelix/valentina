import styled from "styled-components";

import { rem, standardFocusState } from "../../styles/styles";
import { grey1, grey4 } from "../../styles/colour.styles";

export const Nav = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 40px;
  overflow: hidden;
  max-height: ${rem(400)};
  padding: 0;

  ${standardFocusState}

  img {
    display: block;
    width: ${rem(40)};
  }

  &:hover {
    cursor: pointer;
  }
`;

export const NavContent = styled.div`
  border: 1px solid ${grey4};
  background-color: ${grey1};
  width: ${rem(300)};
  position: absolute;
  padding: ${rem(20)};
  overflow: auto;
  z-index: 10;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      margin-bottom: ${rem(8)};
    }
  }

  ul:not(:first-child) {
    border-top: 1px solid ${grey4};
    margin-top: ${rem(20)};
    padding-top: ${rem(20)};
  }
`;
