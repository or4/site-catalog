import { backgroundColorsScheme, bordersScheme, colorsScheme,  fontFamilyScheme, fontSizeScheme } from '../schemes';

export const pagesTheme = {
  text: {
    background: backgroundColorsScheme.pages,
    border: bordersScheme.pages,
    color: colorsScheme.pages,
    fontFamily: fontFamilyScheme.pages,
    fontSize: fontSizeScheme.pages,
    lineHeight: '28px',
  },
  textHover: {
    border: bordersScheme.pagesHover,
  },
  textActive: {
    border: bordersScheme.pagesActive,
  },
};