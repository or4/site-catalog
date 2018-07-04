import { contentTheme, headerTheme, navigationMenuTheme, pagingTheme, vaultTheme } from './blocks';
import { flexRow, flexColumn } from './utils';

export const theme = {
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

export { flexRow, flexColumn };