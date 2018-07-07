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

  'header-logo': colors.greyDark,
  // 'header-banner': ,
  'header-contacts': colors.darkBlue,

  'navigation': colors.white,

  'sidebar-button': 'rgba(0, 0, 0, 0.7)',
  // 'sidebar-buttonHover': ,
  // 'sidebar-buttonText': ,
  // 'sidebar-tree': ,
  // 'sidebar-treeItem': ,
  // 'sidebar-treeItemCaption': ,
  // 'sidebar-slider': ,
  'sidebar-sliderTitle': 'rgba(0,0,0,0.7)',
  'sidebar-sliderItem': 'rgba(0, 0, 0, 0.8)',

  'scene-products-title': colors.blue,
  'scene-products-pages': colors.greyLight,
  // 'scene-products-pagesHover': ,
  // 'scene-products-pagesActive': ,
  'scene-products-amountOnPage': colors.greyLight,
  // 'scene-products-table': ,
  'scene-products-tableHeader': colors.white,
  // 'scene-products-tableHeaderName': ,
  // 'scene-products-tableRow': ,
  // 'scene-products-tableCell': ,
  // 'scene-products-tableBorders': ,

  'scene-contacts-title': colors.blue,
  'scene-contacts-text': colors.greyLight,

  'vault': colors.greyLight,

} as { [key in SubjectType]?: string };


/**
 *  Background Color
 */
export const backgroundScheme = {

  // 'header-logo': ,
  // 'header-banner': ,
  // 'header-contacts': ,

  'navigation': colors.greyLight,

  'sidebar-button': 'rgba(255, 255, 255, 0.5)',
  'sidebar-buttonHover': 'rgba(255, 255, 255, 0.1)',
  // 'sidebar-buttonText': ,
  'sidebar-tree': 'rgba(255, 255, 255, 0.5)',
  // 'sidebar-treeItem': ,
  // 'sidebar-treeItemCaption': ,
  'sidebar-slider': 'rgba(255, 255, 255, 0.3)',
  // 'sidebar-sliderTitle': ,
  'sidebar-sliderItem': '#fff',

  // 'scene-products-title': ,
  'scene-products-pages': colors.transparent,
  // 'scene-products-pagesHover': ,
  // 'scene-products-pagesActive': ,
  'scene-products-amountOnPage': colors.transparent,
  // 'scene-products-table': ,
  'scene-products-tableHeader': 'rgba(101,101,101, 0.8)',
  'scene-products-tableHeaderName': 'rgba(101,101,101, 1)',
  // 'scene-products-tableRow': ,
  'scene-products-tableCell': 'rgba(255, 255, 255, 0.5)',
  // 'scene-products-tableBorders': ,
  // 'scene-contacts-title': ,
  // 'scene-contacts-text': ,

  // 'vault': ,

} as { [key in SubjectType]: string };



/**
 *  Border Color with params
 */
export const bordersScheme = {

  // 'header-logo': ,
  // 'header-banner': ,
  // 'header-contacts': ,

  // 'navigation': ,

  'sidebar-button': '1px solid rgba(0, 0, 0, 0.3)',
  // 'sidebar-buttonHover': ,
  // 'sidebar-buttonText': ,
  'sidebar-tree': '1px solid rgba(0, 0, 0, 0.3)',
  // 'sidebar-treeItem': ,
  // 'sidebar-treeItemCaption': ,
  'sidebar-slider': '1px solid rgba(0, 0, 0, 0.3)',
  // 'sidebar-sliderTitle': ,
  // 'sidebar-sliderItem': ,

  // 'scene-products-title': ,
  'scene-products-pages': '1px solid rgba(0, 0, 0, 0.2)',
  'scene-products-pagesHover': '1px solid rgba(0, 0, 0, 0.4)',
  'scene-products-pagesActive': '1px solid rgba(0, 0, 0, 0.4)',
  // 'scene-products-amountOnPage': ,
  // 'scene-products-table': ,
  // 'scene-products-tableHeader': ,
  // 'scene-products-tableHeaderName': ,
  // 'scene-products-tableRow': ,
  // 'scene-products-tableCell': ,
  'scene-products-tableBorders': '1px solid rgba(0,0,0,0.2)',
  // 'scene-contacts-title': ,
  // 'scene-contacts-text': ,

  // 'vault': ,

} as { [key in SubjectType]: string };


/**
 *  Font Size
 */
export const fontSizeScheme = {

  'header-logo': fontSizes.size25,
  // 'header-banner': ,
  'header-contacts': fontSizes.size13,

  'navigation': fontSizes.size15,

  'sidebar-button': fontSizes.size12,
  // 'sidebar-buttonHover': ,
  // 'sidebar-buttonText': ,
  // 'sidebar-tree': ,
  // 'sidebar-treeItem': ,
  'sidebar-treeItemCaption': fontSizes.size11,
  // 'sidebar-slider': ,
  'sidebar-sliderTitle': fontSizes.size12,
  'sidebar-sliderItem': fontSizes.size12,

  'scene-products-title': fontSizes.size15,
  'scene-products-pages': fontSizes.size13,
  // 'scene-products-pagesHover': ,
  // 'scene-products-pagesActive': ,
  'scene-products-amountOnPage': fontSizes.size13,
  // 'scene-products-table': ,
  // 'scene-products-tableHeader': ,
  // 'scene-products-tableHeaderName': ,
  // 'scene-products-tableRow': ,
  'scene-products-tableCell': fontSizes.size11,
  // 'scene-products-tableBorders': ,
  'scene-contacts-title': fontSizes.size15,
  'scene-contacts-text': fontSizes.size11,

  'vault': fontSizes.size13,

} as {[key in SubjectType]: string};



/**
 *  Font Family
 */
export const fontFamilyScheme = {
  // sliderTitle: fontFamilies.primary,
  // buttonBaseText: fontFamilies.secondary,


  // tableCell: 'Verdana',
  // content-tableHeader: 'Verdana',
  // navigationTreeItemCaption: fontFamilies.primary,

  // articleTitle: fontFamilies.primary,
  // contactsTitle: fontFamilies.primary,
  // contactsTitleText: fontFamilies.primary,
  // header-logo: fontFamilies.primary,

  // content-amountOnPage: fontFamilies.secondary,
  // 'header-contacts': fontFamilies.secondary,
  // navigation: fontFamilies.secondary,
  // pages: fontFamilies.secondary,
  // vault: fontFamilies.secondary,
} as {[key in SubjectType]: string};



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
