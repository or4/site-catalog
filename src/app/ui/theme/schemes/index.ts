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

  'header-logo': colors.greyVeryDark,
  // 'header-banner': ,
  'header-contacts': colors.blueLight,

  'navigation': colors.white,

  'sidebar-button': colors.greyDark,
  // 'sidebar-buttonHover': ,
  // 'sidebar-buttonText': ,
  // 'sidebar-tree': ,
  // 'sidebar-treeItem': ,
  // 'sidebar-treeItemCaption': ,
  // 'sidebar-slider': ,
  'sidebar-sliderTitle': colors.greyDark,
  'sidebar-sliderItem': colors.greyVeryDark,

  'scene-about-text': colors.grey,

  'scene-products-title': colors.blueDark,
  'scene-products-description': colors.grey,
  'scene-products-pages': colors.grey,
  // 'scene-products-pagesHover': ,
  // 'scene-products-pagesActive': ,
  'scene-products-amountOnPage': colors.grey,
  // 'scene-products-table': ,
  'scene-products-tableHeader': colors.white,
  // 'scene-products-tableHeaderName': ,
  // 'scene-products-tableRow': ,
  // 'scene-products-tableCell': ,
  // 'scene-products-tableBorders': ,

  'scene-contacts-title': colors.blueDark,
  'scene-contacts-text': colors.grey,

  'vault': colors.grey,
  //'ui-overlay': ,
  //'ui-overlay-image-container': ,
  //'ui-overlay-image-container-hover': ,

} as { [key in SubjectType]?: string };


/**
 *  Background Color
 */
export const backgroundScheme = {

  // 'header-logo': ,
  // 'header-banner': ,
  // 'header-contacts': ,

  'navigation': colors.grey,

  'sidebar-button': colors.white5,
  'sidebar-buttonHover': colors.white1,
  // 'sidebar-buttonText': ,
  'sidebar-tree': colors.white5,
  // 'sidebar-treeItem': ,
  // 'sidebar-treeItemCaption': ,
  'sidebar-slider': colors.white5,
  // 'sidebar-sliderTitle': ,
  'sidebar-sliderItem': colors.white,

  // 'scene-about-text': ,

  // 'scene-products-title': ,
  //'scene-products-description': ,
  'scene-products-pages': colors.transparent,
  // 'scene-products-pagesHover': ,
  // 'scene-products-pagesActive': ,
  'scene-products-amountOnPage': colors.transparent,
  // 'scene-products-table': ,
  'scene-products-tableHeader': colors.greyLightTableHeader,
  'scene-products-tableHeaderName': colors.greyLightTableHeaderName,
  // 'scene-products-tableRow': ,
  'scene-products-tableCell': colors.white5,
  // 'scene-products-tableBorders': ,
  // 'scene-contacts-title': ,
  // 'scene-contacts-text': ,

  // 'vault': ,
  'ui-overlay': colors.greyLight,
  'ui-overlay-image-container': colors.white5,
  // 'ui-overlay-image-container-hover': colors.white1,

} as { [key in SubjectType]: string };



/**
 *  Border Color with params
 */
export const bordersScheme = {

  // 'header-logo': ,
  // 'header-banner': ,
  // 'header-contacts': ,

  // 'navigation': ,

  'sidebar-button': `1px solid ${colors.greyVeryLight}`,
  // 'sidebar-buttonHover': ,
  // 'sidebar-buttonText': ,
  'sidebar-tree': `1px solid ${colors.greyVeryLight}`,
  // 'sidebar-treeItem': ,
  // 'sidebar-treeItemCaption': ,
  'sidebar-slider': `1px solid ${colors.greyVeryLight}`,
  // 'sidebar-sliderTitle': ,
  // 'sidebar-sliderItem': ,

  // 'scene-about-text': ,

  // 'scene-products-title': ,
  //'scene-products-description': ,
  'scene-products-pages': `1px solid ${colors.greyVeryLight}`,
  'scene-products-pagesHover': `1px solid ${colors.greyLight}`,
  'scene-products-pagesActive': `1px solid ${colors.greyLight}`,
  // 'scene-products-amountOnPage': ,
  // 'scene-products-table': ,
  // 'scene-products-tableHeader': ,
  // 'scene-products-tableHeaderName': ,
  // 'scene-products-tableRow': ,
  // 'scene-products-tableCell': ,
  'scene-products-tableBorders': `1px solid ${colors.greyVeryLight}`,
  // 'scene-contacts-title': ,
  // 'scene-contacts-text': ,

  // 'vault': ,
  //'ui-overlay': ,
  //'ui-overlay-image-container': ,
  //'ui-overlay-image-container-hover': ,

} as { [key in SubjectType]: string };


/**
 *  Font Size
 */
export const fontSizeScheme = {

  'header-logo': fontSizes.size25,
  // 'header-banner': ,
  'header-contacts': fontSizes.size13,

  'navigation': fontSizes.size14,

  'sidebar-button': fontSizes.size12,
  // 'sidebar-buttonHover': ,
  // 'sidebar-buttonText': ,
  // 'sidebar-tree': ,
  // 'sidebar-treeItem': ,
  'sidebar-treeItemCaption': fontSizes.size11,
  // 'sidebar-slider': ,
  'sidebar-sliderTitle': fontSizes.size12,
  'sidebar-sliderItem': fontSizes.size12,

  'scene-about-text': fontSizes.size11,

  'scene-products-title': fontSizes.size15,
  'scene-products-description': fontSizes.size11,
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
  //'ui-overlay': ,
  //'ui-overlay-image-container': ,
  //'ui-overlay-image-container-hover': ,

} as {[key in SubjectType]: string};



/**
 *  Font Family
 */
export const fontFamilyScheme = {
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
