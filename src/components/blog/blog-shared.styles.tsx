import styled from "styled-components";

import { grey4 } from "../../styles/colour.styles";
import { rem } from "../../styles/styles";
import { Text, headlineFont } from "../../styles/typography.styles";
import { ContactIcon } from "../contact.styles";

export const BlogShare = styled.div`
  border-bottom: 1px solid ${grey4};
  margin-bottom: ${rem(12)};
  padding-bottom: ${rem(12)};
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