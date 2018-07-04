import React from 'react';
import { theme, flexColumn } from 'ui/theme';
import { log } from 'utils';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    padding: `0 ${theme.content.defaultMargin1} ${theme.content.defaultMargin1} ${theme.content.defaultMargin1}`,
    ...flexColumn('center', 'center'),
  },
  mainText: {
    fontWeight: '700' as 'bold',
    marginBottom: '8px',
    textAlign: 'left' as 'left',

    ...theme.vault.mainText,
  },
  subText: {
    textAlign: 'left' as 'left',
    ...theme.vault.subText,
  },
};

const { classes } = jss.createStyleSheet(rawClasses).attach();

type Props = {
};
type State = {
};

export class Vault extends React.PureComponent<Props, State> {
  render() {
    log('Vault render');
    return (
      <div className={classes.container}>
        <div className={classes.mainText}>
          Все права защищены © Резинотехника - СК, 2011—2018
        </div>
        <div className={classes.subText}>
          Информация, представленная на сайте, не является публичной офертой.
          Полное или частичное использование материалов сайта возможно только с письменного разрешения Фирмы &quot;Резинотехника&quot;.
        </div>
      </div>
    );
  }
}
