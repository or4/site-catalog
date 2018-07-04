import { colors } from '../colors';
import { fonts } from '../fonts';

export const headerTheme = {
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
};