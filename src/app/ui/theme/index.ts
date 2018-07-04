import { contentTheme } from './blocks/content';
import { headerTheme } from './blocks/header';
import { navigationTheme } from './blocks/navigation';
import { pagingTheme } from './blocks/paging';
import { vaultTheme } from './blocks/vault';
import { flexRow, flexColumn } from './utils';

export const theme = {
  ...contentTheme,
  ...headerTheme,
  ...navigationTheme,
  ...pagingTheme,
  ...vaultTheme,
};

export { flexRow, flexColumn };