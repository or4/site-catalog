import { contentTheme, headerTheme, navigationMenuTheme, pagingTheme, vaultTheme } from './blocks';
import { flexRow, flexColumn } from './utils';

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

  paging: {
    ...pagingTheme,
  },

  vault: {
    ...vaultTheme,
  }
};

export { theme, flexRow, flexColumn };