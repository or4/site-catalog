export type ScreenSize = 'initital' | 'small' | 'medium' | 'large';

const screenSizeDimesions: {[key in ScreenSize] : number} = {
  initital: 0, // server rendering
  small: 550, // portrait mobile
  medium: 1024, // landscape mobile, tablet, pc with small screen
  large: Number.POSITIVE_INFINITY, // desktop
};

const getWidth = () => {
  // return 0, when server rendering
  try { return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth } catch (e) { return 0 }
};

// const getHeight = () => window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
const isSize = (size: ScreenSize) => getWidth() <= screenSizeDimesions[size];

export const isInitial = () => isSize('initital');
export const isSmall = () => isSize('small');
export const isMedium = () => isSize('medium');
export const isLarge = () => isSize('large');

export const getScreenSize = (): ScreenSize => {
  if (isInitial()) return 'initital';
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