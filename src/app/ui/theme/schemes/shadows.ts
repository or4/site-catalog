import { colors } from './colors';
import { SubjectType } from 'ui/theme/schemes/types';

export const textShadowsScheme = {
  'header-logo': `${colors.black} 1px 1px 2px, ${colors.greyDark} 0 0 1em`,
} as {[key in SubjectType]: string};