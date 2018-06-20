import { log } from 'util/logger';

export type ScreenSize = 'initital' | 'small' | 'medium' | 'large';

const screenSizeDimesions: {[key in ScreenSize] : number} = {
  initital: 0, // server rendering
  small: 550, // portrait mobile
  medium: 1024, // landscape mobile, tablet, pc with small screen
  large: Number.POSITIVE_INFINITY, // desktop
};

// return 0, when server rendering
const getWidth = () => {
  try { return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth } catch (e) { return 0 }
};

// const getHeight = () => window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
const isSize = (size: ScreenSize) => getWidth() <= screenSizeDimesions[size];

export const isInitial = () => {
  const is = isSize('initital');
  is && log('isInitial', is);
  return is;
};
export const isSmall = () => {
  const is = isSize('small');
  is && log('isSmall', is);
  return is;
};
export const isMedium = () => {
  const is = isSize('medium');
  is && log('isMedium', is);
  return is;
};
export const isLarge = () => {
  const is = isSize('large');
  is && log('isLarge', is);
  return is;
};

// export const getScreenSize = (): ScreenSize => {
//   if (isInitial()) return 'initital';
//   if (isSmall()) return 'small';
//   if (isMedium()) return 'medium';
//   return 'large';
// };


/*
template:

  isLarge() && Object.assign(container, {  });
  isMedium() && Object.assign(container, {  });
  isSmall() && Object.assign(container, {  });
*/