const colors = {
  black: '#000',
  darkBlue: '#476687',
  grey1: '#333',
  grey2: '#676767',
  white: '#fff',
};

const fonts = {
  fontFamily1: 'Tahoma, Verdana, Arial, sans-serif',
  fontFamily2: 'Verdana, Tahoma, Arial, sans-serif',
  size1: '25px', // logo
  size2: '13px', // header__contacts, footer__text
  size3: '16px', // navigation__item
};


export const theme = {
  colors,
  fonts,
  content: {
    minHeight: '600px',
    defaultMargin1: '20px',
    devBorder: '1px solid #aaa'
  },
  header: {
    logo: {
      color: colors.grey1,
      fontFamily: fonts.fontFamily2,
      fontSize: fonts.size1,
      textShadow: `${colors.black} 1px 1px 2px, ${colors.grey1} 0 0 1em`
    },
    contacts: {
      color: colors.darkBlue,
      fontFamily: fonts.fontFamily2,
      fontSize: fonts.size2,
      fontStyle: 'italic' as 'italic',
      lineHeight: '15px',
    },
  },
  navigation: {
    container: {
      background: colors.grey2,
    },
    item: {
      color: colors.white,
      fontFamily: fonts.fontFamily2,
      fontSize: fonts.size3,
    }
  },
  footer: {
    mainText: {
      color: colors.grey2,
      fontFamily: fonts.fontFamily2,
      fontSize: fonts.size2,
      lineHeight: '15px',
    },
    subText: {
      color: colors.grey2,
      fontFamily: fonts.fontFamily2,
      fontSize: fonts.size2,
      lineHeight: '15px',
    }
  },
  paging: {
    text: {
      color: colors.grey2,
      fontFamily: fonts.fontFamily2,
      fontSize: fonts.size2,
      lineHeight: '28px',
    }
  },
};

// export const lightFont = (color: string, fontSize: string, lineHeight?: string) => {
//   const font = {
//     color,
//     fontFamily: fonts.fontFamily2,
//     fontSize,
//   };

//   typeof lineHeight !== 'undefined' && Object.assign(font, {
//     lineHeight,
//   });

//   return font;
// };


// export const boxSizing = () => {
//   const style = {
//     boxSizing: 'border-box' as 'border-box',
//   };
//   return style;
// };

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
