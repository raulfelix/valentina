export const rem = (val: number | string): string =>
  `${parseFloat(val.toString()) / 16}rem`;
