import styled, { css } from 'styled-components';

import { rem, mediaUp } from './styles';
const spacing12 = 12;

const col1 = css`
  flex-basis: 8.33333333%;
  max-width: 8.33333333%;
`;

const col2 = css`
  flex-basis: 16.66666667%;
  max-width: 16.66666667%;
`;

const col3 = css`
  flex-basis: 25%;
  max-width: 25%;
`;

const col4 = css`
  flex-basis: 33.33333333%;
  max-width: 33.33333333%;
`;

const col5 = css`
  flex-basis: 41.66666667%;
  max-width: 41.66666667%;
`;

const col6 = css`
  flex-basis: 50%;
  max-width: 50%;
`;

const col7 = css`
  flex-basis: 58.33333333%;
  max-width: 58.33333333%;
`;

const col8 = css`
  flex-basis: 66.66666667%;
  max-width: 66.66666667%;
`;

const col9 = css`
  flex-basis: 75%;
  max-width: 75%;
`;

const col10 = css`
  flex-basis: 83.33333333%;
  max-width: 83.33333333%;
`;

const col11 = css`
  flex-basis: 91.66666667%;
  max-width: 91.66666667%;
`;

const col12 = css`
  flex-basis: 100%;
  max-width: 100%;
`;

const proportions = [
  col1,
  col2,
  col3,
  col4,
  col5,
  col6,
  col7,
  col8,
  col9,
  col10,
  col11,
  col12,
];

type ColProportion = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type ColProps = {
  xs?: ColProportion;
  sm?: ColProportion;
  md?: ColProportion;
  lg?: ColProportion;
  xl?: ColProportion;
};

export const Col = styled.div<ColProps>`
  padding-left: ${rem(spacing12)};
  padding-right: ${rem(spacing12)};
  ${col12}

  ${mediaUp.xs<ColProps>`
    ${({ xs }) =>
      xs &&
      `
      ${proportions[xs - 1]}
    `}
  `}

  ${mediaUp.sm<ColProps>`
    ${({ sm }) =>
      sm &&
      `
      ${proportions[sm - 1]}
    `}
  `}

  ${mediaUp.md<ColProps>`
    ${({ md }) =>
      md &&
      `
      ${proportions[md - 1]}
    `}
  `}

  ${mediaUp.lg<ColProps>`
    ${({ lg }) =>
      lg &&
      `
      ${proportions[lg - 1]}
    `}
  `}

  ${mediaUp.xl<ColProps>`
    ${({ xl }) =>
      xl &&
      `
      ${proportions[xl - 1]}
    `}
  `}
`;

export const Row = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: -${rem(spacing12)};
  margin-right: -${rem(spacing12)};
`;


export const Grid = styled.div`
  margin: auto;
  max-width: 1400px;
  padding-left: ${rem(24)};
  padding-right: ${rem(24)};
`