import { backgroundScheme, bordersScheme, colorsScheme } from '../schemes/colors';
import { fontFamilyScheme, fontSizeScheme } from '../schemes/fonts';
import { textShadowsScheme } from '../schemes/shadows';
import { borderRadiusScheme } from 'ui/theme/schemes/radius';

const general = {
  minHeight: '',
  defaultMargin1: '20px',
};

export const scheme = {
  general,
  background: backgroundScheme,
  borders: bordersScheme,
  colors: colorsScheme,
  fontFamily: fontFamilyScheme,
  fontSize: fontSizeScheme,
  textShadows: textShadowsScheme,
  borderRadius: borderRadiusScheme,
};
