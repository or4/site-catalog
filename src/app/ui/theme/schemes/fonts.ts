import { SubjectType, FontFamilyType, FontSizeType } from 'ui/theme/schemes/types';

export const fontFamilies = {
  primary: 'Arial, Helvetica, sans-serif',
  secondary: 'Arial, Helvetica, sans-serif',
  buttonBase: 'Tahoma, sans-serif',

  // primary: 'Tahoma, Verdana, Arial, sans-serif',
  // secondary: 'Verdana, Tahoma, Arial, sans-serif',
};

export const fontFamilyScheme = {
  buttonBase: fontFamilies.buttonBase,
  tableCell: 'Verdana',
  tableHeader: 'Verdana',

  title: fontFamilies.primary,
  headerLogo: fontFamilies.primary,

  amountOnPage: fontFamilies.secondary,
  headerContacts: fontFamilies.secondary,
  navigationMenu: fontFamilies.secondary,
  pages: fontFamilies.secondary,
  vault: fontFamilies.secondary,
} as {[key in SubjectType]: string};


const fontSizes = {
  title: '16px', // title of article, title of screen contacts

  size1: '25px', // logo
  size2: '13px', // header__contacts, footer__text
} as {[key in FontSizeType]: string};

export const fontSizeScheme = {
  headerLogo: fontSizes.size1,
  navigationMenu: fontSizes.title,
  tableCell: '11px',

  amountOnPage: fontSizes.size2,
  headerContacts: fontSizes.size2,
  pages: fontSizes.size2,
  vault: fontSizes.size2,
} as {[key in SubjectType]: string};
