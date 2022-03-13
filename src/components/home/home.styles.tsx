import styled from 'styled-components';

import { mediaUp, rem } from '../../styles/styles';

export const HomeSection = styled.div`
  margin-bottom: ${rem(80)};
`;

export const PrimaryPost = styled.div`
  display: flex;
  margin-bottom: ${rem(24)};
`

export const SecondaryPosts = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -${rem(12)};
  margin-right: -${rem(12)};

  ${mediaUp.sm`
    & > div {
      flex: 1;
    }
  `}
`