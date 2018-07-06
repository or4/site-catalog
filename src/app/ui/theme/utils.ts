import { scheme } from 'ui/theme';
import { SubjectType } from './schemes/types';
import { isUndefined } from 'utils';

type TAlignItems = 'normal' | 'center';
type TJustifyContent = 'center' | 'space-between' | 'flex-start' | 'space-evenly';

export const flexRow = (alignItems?: TAlignItems, justifyContent?: TJustifyContent) => {
  const style = {
    display: 'flex',
    flexDirection: 'row' as 'row',
  };
  alignItems && Object.assign(style, { alignItems, });
  justifyContent && Object.assign(style, { justifyContent, });
  return style;
};

export const flexColumn = (alignItems?: TAlignItems, justifyContent?: TJustifyContent) => {
  const style = {
    display: 'flex',
    flexDirection: 'column' as 'column',
  };
  alignItems && Object.assign(style, { alignItems, });
  justifyContent && Object.assign(style, { justifyContent, });
  return style;
};

export const theming = (subject: SubjectType) => {
  const font = { };

  !isUndefined(scheme.background[subject]) && Object.assign(font, { background: scheme.background[subject], });
  !isUndefined(scheme.borders[subject]) && Object.assign(font, { border: scheme.borders[subject], });
  !isUndefined(scheme.colors[subject]) && Object.assign(font, { color: scheme.colors[subject], });
  !isUndefined(scheme.fontSize[subject]) && Object.assign(font, { fontSize: scheme.fontSize[subject], });
  !isUndefined(scheme.fontFamily[subject]) && Object.assign(font, { fontFamily: scheme.fontFamily[subject], });
  !isUndefined(scheme.textShadows[subject]) && Object.assign(font, { textShadow: scheme.textShadows[subject], });

  return font;
};