import { contentTheme, headerTheme, navigationMenuTheme, pagesTheme, vaultTheme, amountOnPage, buttonBase } from './blocks';
import { flexRow, flexColumn } from './utils';
import { borderRadiusScheme } from './schemes';

const theme = {
  header: {
    ...headerTheme,
  },

  navigationMenu: {
    ...navigationMenuTheme,
  },

  content: {
    ...contentTheme,
  },

  pages: {
    ...pagesTheme,
  },

  amountOnPage: {
    ...amountOnPage,
  },

  buttonBase: {
    ...buttonBase,
  },

  vault: {
    ...vaultTheme,
  }
};

export { theme, flexRow, flexColumn, borderRadiusScheme };