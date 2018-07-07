import { colors } from './colors';

import { fontFamilies, fontSizes } from '../schemes/fonts';
import { textShadowsScheme } from '../schemes/shadows';
import { borderRadiusScheme } from 'ui/theme/schemes/radius';
import { SubjectType } from './types';

const general = {
  minHeight: '',
  defaultMargin1: '20px',
};


/**
 *  Font Color
 */
export const colorsScheme = {
  'header-contacts': colors.darkBlue,
  'header-logo': colors.greyDark,
  'navigationMenu': colors.white,


  'sidebar-button': 'rgba(0, 0, 0, 0.7)',
  'sidebar-sliderTitle': 'rgba(0,0,0,0.7)',
  'sidebar-sliderItem': 'rgba(0, 0, 0, 0.8)',

  'content-amountOnPage': colors.greyLight,
  'content-pages': colors.greyLight,
  'content-articleTitle': colors.blue,
  'scene-contactsTitle': colors.blue,
  'scene-contactsTitleText': colors.greyLight,

  'content-tableHeader': colors.white,

  'vault': colors.greyLight,
} as { [key in SubjectType]?: string };


// /**
//  *  Background Color
//  */
// export const backgroundScheme = {
//   sidebar-button: 'rgba(255, 255, 255, 0.5)',
//   buttonBaseHover: 'rgba(255, 255, 255, 0.1)',
//   sliderContainer: 'rgba(255, 255, 255, 0.3)',
//   sliderItem: '#fff',

//   content-amountOnPage: colors.transparent,
//   navigationMenu: colors.greyLight,
//   pages: colors.transparent,
//   tableCell: 'rgba(255, 255, 255, 0.5)',
//   content-tableHeader: 'rgba(101,101,101, 0.8)',
//   content-tableHeaderName: 'rgba(101,101,101, 1)',
//   navigationTree: 'rgba(255, 255, 255, 0.5)',
// } as { [key in SubjectType]: string };



// /**
//  *  Border Color with params
//  */
// export const bordersScheme = {
//   sidebar-button: '1px solid rgba(0, 0, 0, 0.3)',
//   sliderContainer: '1px solid rgba(0, 0, 0, 0.3)',

//   pages: '1px solid rgba(0, 0, 0, 0.2)',
//   content-pagesHover: '1px solid rgba(0, 0, 0, 0.4)',
//   content-pagesActive: '1px solid rgba(0, 0, 0, 0.4)',

//   tableBorders: '1px solid rgba(0,0,0,0.2)',
//   navigationTree: '1px solid rgba(0, 0, 0, 0.3)',
// } as { [key in SubjectType]: string };


// /**
//  *  Font Size
//  */
// export const fontSizeScheme = {
//   buttonBaseText: fontSizes.size13,
//   sliderTitle: fontSizes.size13,


//   header-logo: fontSizes.size25,

//   articleTitle: fontSizes.size15,
//   contactsTitle: fontSizes.size15,
//   contactsTitleText: fontSizes.size11,
//   navigationMenu: fontSizes.size15,
//   tableCell: fontSizes.size11,

//   content-amountOnPage: fontSizes.size13,
//   'header-contacts': fontSizes.size13,
//   pages: fontSizes.size13,
//   vault: fontSizes.size13,
//   navigationTreeItemCaption: fontSizes.size11,
// } as {[key in SubjectType]: string};



// /**
//  *  Font Size
//  */
// export const fontFamilyScheme = {
//   sliderTitle: fontFamilies.primary,
//   buttonBaseText: fontFamilies.secondary,


//   tableCell: 'Verdana',
//   content-tableHeader: 'Verdana',
//   navigationTreeItemCaption: fontFamilies.primary,

//   articleTitle: fontFamilies.primary,
//   contactsTitle: fontFamilies.primary,
//   contactsTitleText: fontFamilies.primary,
//   header-logo: fontFamilies.primary,

//   content-amountOnPage: fontFamilies.secondary,
//   'header-contacts': fontFamilies.secondary,
//   navigationMenu: fontFamilies.secondary,
//   pages: fontFamilies.secondary,
//   vault: fontFamilies.secondary,
// } as {[key in SubjectType]: string};



// export const scheme = {
//   general,
//   background: backgroundScheme,
//   borders: bordersScheme,
//   colors: colorsScheme,
//   fontFamily: fontFamilyScheme,
//   fontSize: fontSizeScheme,
//   textShadows: textShadowsScheme,
//   borderRadius: borderRadiusScheme,
// };
