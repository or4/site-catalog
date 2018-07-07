import { colors } from './colors';
import { SubjectType } from 'ui/theme/schemes/types';

const header-logo = `${colors.black} 1px 1px 2px, ${colors.greyDark} 0 0 1em`;

export const textShadowsScheme = {
  header-logo,
} as {[key in SubjectType]: string};