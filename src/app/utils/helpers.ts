import { isInitial, isMedium } from 'utils/responsive';
import { isSmall } from 'utils';

export const capitalizeFirstLetter = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);

export const combineUrl = (relativeUrl: string) => (`http://rti-ck.kz${relativeUrl}`);

export const convertImgUrl = (url: string) => (url ? url.replace(/src=\"/g, 'src="http://rti-ck.kz/') : '');

export const isUndefined = (value: any) => typeof value === 'undefined';

export const join = (...rest: string[]) => rest.join(' ');
export const joinObjects = (...rest: any[]) => Object.assign.apply(null, rest);

export const pickBySize = (small: any, medium: any, large?: any, initial: any = '') => {
  if (isInitial()) {
    return initial;
  }
  if (isSmall()) { return small }

  if (isUndefined(large)) { return medium }

  if (isMedium()) { return medium }

  return large;
};