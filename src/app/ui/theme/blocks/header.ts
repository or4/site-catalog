import { colorsScheme, fontFamilyScheme, fontSizeScheme, textShadowsScheme } from '../schemes';

export const headerTheme = {
  logo: {
    color: colorsScheme.headerLogo,
    fontFamily: fontFamilyScheme.headerLogo,
    fontSize: fontSizeScheme.headerLogo,
    textShadow: textShadowsScheme.logoTextShadow,
  },
  contacts: {
    color: colorsScheme.headerContacts,
    fontFamily: fontFamilyScheme.headerContacts,
    fontSize: fontSizeScheme.headerContacts,
    fontStyle: 'italic' as 'italic',
    lineHeight: '15px',
  },
};