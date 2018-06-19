export type WidthSize =  'small' | 'medium' | 'large';

const sizeDimesions = {
  large: 1024,
  medium: 768,
  small: 430,
};

const getWidth = () => {
  try {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  } catch (e) {
    return 0;
  }
};

// const getHeight = () => window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
const isSize = (size: WidthSize) => getWidth() <= sizeDimesions[size];

export const isSmallWidth = () => isSize('small');
export const isMediumWidth = () => isSize('medium');
export const isLargeWidth = () => isSize('small');