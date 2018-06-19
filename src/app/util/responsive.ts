export type ScreenSize =  'small' | 'medium' | 'large';

const screenSizeDimesions = {
  large: Number.POSITIVE_INFINITY, // desktop
  medium: 1024, // landscape mobile, tablet, pc with small screen
  small: 430, // portrait mobile
};

const getWidth = () => {
  try {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  } catch (e) {
    return 0;
  }
};

// const getHeight = () => window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
const isSize = (size: ScreenSize) => getWidth() <= screenSizeDimesions[size];

export const isSmall = () => isSize('small');
export const isMedium = () => isSize('medium');
export const isLarge = () => isSize('large');

export const getScreenSize = (): ScreenSize => {
  if (isSmall()) return 'small';
  if (isMedium()) return 'medium';
  return 'large';
};

/*
template:

  isLarge() && Object.assign(container, {  });
  isMedium() && Object.assign(container, {  });
  isSmall() && Object.assign(container, {  });
*/