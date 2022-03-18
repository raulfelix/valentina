import { css, BaseThemedCssFunction, CSSObject } from "styled-components";
import { grey10 } from "./colour.styles";

export const rem = (val: number | string): string =>
  `${parseFloat(val.toString()) / 16}rem`;

export const BREAKPOINT_SM = 576;
export const BREAKPOINT_MD = 768;
export const BREAKPOINT_LG = 992;
export const BREAKPOINT_XL = 1200;

type MediaSizeObject = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};
type MediaSize = keyof MediaSizeObject;

export const mediaSizes: MediaSizeObject = {
  xs: 0,
  sm: BREAKPOINT_SM,
  md: BREAKPOINT_MD,
  lg: BREAKPOINT_LG,
  xl: BREAKPOINT_XL,
};
const mediaDownSizes: MediaSizeObject = {
  xs: BREAKPOINT_SM,
  sm: BREAKPOINT_MD,
  md: BREAKPOINT_LG,
  lg: BREAKPOINT_XL,
  xl: 1200,
};

export const clearfix = `
  &::after {
    display: block;
    clear: both;
    content: '';
  }
`;

type MediaFunctionObject = {
  xs: BaseThemedCssFunction<{}>;
  sm: BaseThemedCssFunction<{}>;
  md: BaseThemedCssFunction<{}>;
  lg: BaseThemedCssFunction<{}>;
  xl: BaseThemedCssFunction<{}>;
};

export const mediaUp: MediaFunctionObject = (
  Object.keys(mediaSizes) as MediaSize[]
).reduce((acc, label) => {
  (acc as any)[label] = <Props extends object>(
    ...args: [CSSObject | TemplateStringsArray, any]
  ) => {
    return css<Props>`
      @media (min-width: ${mediaSizes[label]}px) {
        ${css<Props>(...args)};
      }
    `;
  };
  return acc;
}, {} as MediaFunctionObject);

export const mediaDown: MediaFunctionObject = (
  Object.keys(mediaDownSizes) as MediaSize[]
).reduce((acc, label) => {
  (acc as any)[label] = <Props extends object>(
    ...args: [CSSObject | TemplateStringsArray, any]
  ) => css<Props>`
    @media (max-width: ${mediaDownSizes[label]}px) {
      ${css<Props>(...args)};
    }
  `;
  return acc;
}, {} as MediaFunctionObject);

export const MEDIA_SM = `(min-width: ${BREAKPOINT_SM}px)`;
export const MEDIA_MD = `(min-width: ${BREAKPOINT_MD}px)`;
export const MEDIA_LG = `(min-width: ${BREAKPOINT_LG}px)`;
export const MEDIA_XL = `(min-width: ${BREAKPOINT_XL}px)`;

export type MinMediaQuery = typeof MEDIA_MD;

export const baseFocusState = css`
  outline: 2px solid ${grey10};
`