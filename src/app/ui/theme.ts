const colors = {
  black: '#000',
  darkBlue: '#476687',
  grey1: '#333',
  grey2: '#676767',
  white: '#fff',
};

const fonts = {
  fontFamily: 'Tahoma, Verdana, sans-serif',
  fontFamilySecond: 'Verdana',
  size1: '25px', // logo
  size2: '13px', // header__contacts, footer__text
  size3: '16px', // navigation__item
};


export const theme = {
  colors,
  fonts,
  header: {
    logo: {
      color: colors.grey1,
      fontFamily: fonts.fontFamilySecond,
      fontSize: fonts.size1,
      textShadow: `${colors.black} 1px 1px 2px, ${colors.grey1} 0 0 1em`
    },
    contacts: {
      color: colors.darkBlue,
      fontFamily: fonts.fontFamily,
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
      fontFamily: fonts.fontFamily,
      fontSize: fonts.size3,
    }
  },
  footer: {
    mainText: {
      color: colors.grey2,
      fontFamily: fonts.fontFamily,
      fontSize: fonts.size2,
      lineHeight: '15px',
    },
    subText: {
      color: colors.grey2,
      fontFamily: fonts.fontFamily,
      fontSize: fonts.size2,
      lineHeight: '15px',
    }

  }
};

// export const lightFont = (color: string, fontSize: string, lineHeight?: string) => {
//   const font = {
//     color,
//     fontFamily: fonts.fontFamily,
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