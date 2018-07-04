import { contentTheme, headerTheme, navigationTheme, pagingTheme, vaultTheme } from './blocks';
import { flexRow, flexColumn } from './utils';

export const theme = {
  content: {
    ...contentTheme,
  },
  header: {
    ...headerTheme,
  },
  navigation: {
    ...navigationTheme,
  },
  paging: {
    ...pagingTheme,
  },
  vault: {
    ...vaultTheme,
  }
};

export { flexRow, flexColumn };