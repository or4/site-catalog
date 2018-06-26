
export const capitalizeFirstLetter = (value: string) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

export const isUndefined = (value: any) => typeof value === 'undefined';

export const convertImgUrl = (url: string) => (url ? url.replace(/src=\"/g, 'src="http://rti-ck.kz/') : '');

export const combineUrl = (relativeUrl: string) => (`http://rti-ck.kz${relativeUrl}`);