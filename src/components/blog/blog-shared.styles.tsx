import styled from "styled-components";

import { rem } from "../../styles/styles";
import { Text, headlineFont } from "../../styles/typography";
import { ContactIcon } from "../contact.styles";

export const BlogShare = styled.div`
  border-top: 1px solid #eee;
  padding-top: ${rem(20)};
  text-align: center;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  ${Text} {
    font-weight: normal;
    font-family: ${headlineFont};
    margin-bottom: ${rem(8)};
  }
`;

export const BlogShareIcon = styled(ContactIcon)`
  margin: 0 ${rem(8)} ${rem(24)}  ${rem(8)};
  width: auto;

  img {
    width: 40px;
  }
`