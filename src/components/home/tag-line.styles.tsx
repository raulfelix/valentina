import styled from 'styled-components';

import { rem } from '../../styles/styles';
import { fontSize20, fontSizeLineHeight20 } from "../../styles/typography.styles";

export const TagLine = styled.div`
  font-size: ${fontSize20};
  line-height: ${fontSizeLineHeight20};
  max-width: ${rem(600)};
  margin: auto auto ${rem(60)} auto;
  text-align: center;
  
`