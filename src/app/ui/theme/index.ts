import { contentTheme, headerTheme, navigationTheme, pagingTheme, vaultTheme } from './blocks';
import { flexRow, flexColumn } from './utils';

export const theme = {
  header: {
    ...headerTheme,
  },

  navigation: {
    ...navigationTheme,
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