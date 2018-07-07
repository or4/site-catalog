import { SubjectType, FontFamilyType, FontSizeType } from 'ui/theme/schemes/types';

export const fontFamilies = {
  primary: 'Arial, Helvetica, sans-serif',
  secondary: 'Arial, Helvetica, sans-serif',
  buttonBase: 'Tahoma, sans-serif',

  // primary: 'Tahoma, Verdana, Arial, sans-serif',
  // secondary: 'Verdana, Tahoma, Arial, sans-serif',
};

export const fontFamilyScheme = {
  buttonBaseText: fontFamilies.buttonBase,
  tableCell: 'Verdana',
  tableHeader: 'Verdana',
  navigationTreeItemCaption: fontFamilies.primary,

  articleTitle: fontFamilies.primary,
  headerLogo: fontFamilies.primary,

  amountOnPage: fontFamilies.secondary,
  headerContacts: fontFamilies.secondary,
  navigationMenu: fontFamilies.secondary,
  pages: fontFamilies.secondary,
  vault: fontFamilies.secondary,
} as {[key in SubjectType]: string};


const fontSizes = {
  size15: '15px', // title of article, title of screen contacts

  size25: '25px', // logo
  size13: '13px', // header__contacts, footer__text
  size11: '11px',
} as {[key in FontSizeType]: string};

export const fontSizeScheme = {
  headerLogo: fontSizes.size25,

  articleTitle: fontSizes.size15,
  contactsTitle: fontSizes.size15,
  navigationMenu: fontSizes.size15,
  tableCell: fontSizes.size11,
  buttonBaseText: fontSizes.size13,

  amountOnPage: fontSizes.size13,
  headerContacts: fontSizes.size13,
  pages: fontSizes.size13,
  vault: fontSizes.size13,
  navigationTreeItemCaption: fontSizes.size11,
} as {[key in SubjectType]: string};
