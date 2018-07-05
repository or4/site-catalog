import { isInitial, isMedium } from 'utils/responsive';
import { isSmall } from 'utils';

export const join = (...rest: string[]) => rest.join(' ');

export const capitalizeFirstLetter = (value: string) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

export const isUndefined = (value: any) => typeof value === 'undefined';

export const pickBySize = (small: any, medium: any, large?: any, initial: any = '') => {
  if (isInitial()) {
    return initial;
  }
  if (isSmall()) { return small }

  if (isUndefined(large)) { return medium }

  if (isMedium()) { return medium }

  return large;
};
