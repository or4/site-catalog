type TAlignItems = 'normal' | 'center';
type TJustifyContent = 'center' | 'space-between' | 'flex-start';

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
