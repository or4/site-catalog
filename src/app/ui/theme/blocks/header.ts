import { colorsScheme, fontFamilyScheme, fontSizeScheme, textShadowsScheme } from '../schemes';

export const headerTheme = {
  logo: {
    color: colorsScheme.headerLogoColor,
    fontFamily: fontFamilyScheme.headerLogo,
    fontSize: fontSizeScheme.headerLogo,
    textShadow: textShadowsScheme.logoTextShadow,
  },
  contacts: {
    color: colorsScheme.headerContactsColor,
    fontFamily: fontFamilyScheme.headerContacts,
    fontSize: fontSizeScheme.headerContacts,
    fontStyle: 'italic' as 'italic',
    lineHeight: '15px',
  },
};