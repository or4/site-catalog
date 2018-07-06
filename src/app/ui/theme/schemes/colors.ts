import { SubjectType } from './types';

export const colors = {
  blue: '#203a8a', // title of article, screen contacts
  darkBlue: '#476687', // contacts of header

  black: '#000000',
  greyDark: '#333333', // rgba(51, 51, 51, 1)
  greyLight: '#676767', // rgba(103, 103, 103, 1)
  transparent: 'transparent',
  white: '#ffffff',
};

export const colorsScheme = {
  title: colors.blue,
  amountOnPage: colors.greyLight,
  buttonBase: 'rgba(0, 0, 0, 0.7)',
  headerContacts: colors.darkBlue,
  headerLogo: colors.greyDark,
  navigationMenu: colors.white,
  pages: colors.greyLight,
  vault: colors.greyLight,

  tableHeader: colors.white,
} as {[key in SubjectType]: string};


export const backgroundScheme = {
  amountOnPage: colors.transparent,
  buttonBaseHover: 'rgba(255, 255, 255, 0.1)',
  navigationMenu: colors.greyLight,
  pages: colors.transparent,
  buttonBase: 'rgba(255, 255, 255, 0.5)',
  tableCell: 'rgba(255, 255, 255, 0.5)',
  tableHeader: 'rgba(101,101,101, 0.8)',
  tableHeaderName: 'rgba(101,101,101, 1)',
} as {[key in SubjectType]: string};



export const bordersScheme = {
  buttonBase: '1px solid rgba(0, 0, 0, 0.3)',
  pages: '1px solid rgba(0, 0, 0, 0.2)',
  pagesHover: '1px solid rgba(0, 0, 0, 0.4)',
  pagesActive: '1px solid rgba(0, 0, 0, 0.4)',

  tableBorders: '1px solid rgba(0,0,0,0.2)',
} as {[key in SubjectType]: string};

