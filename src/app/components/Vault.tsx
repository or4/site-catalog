import React from 'react';
import { scheme, flexColumn, fontPrimary } from 'ui/theme';
import { logs } from 'utils';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    padding: `0 ${scheme.general.defaultMargin1} ${scheme.general.defaultMargin1} ${scheme.general.defaultMargin1}`,
    ...flexColumn('center', 'center'),
  },
  mainText: {
    fontWeight: '700' as 'bold',
    marginBottom: '8px',
    textAlign: 'left' as 'left',

    ...fontPrimary('vault', '15px')
  },
  subText: {
    lineHeight: '15px',
    textAlign: 'left' as 'left',

    ...fontPrimary('vault', '15px')
  },
};

const { classes } = jss.createStyleSheet(rawClasses).attach();

type Props = {
};
type State = {
};

export class Vault extends React.PureComponent<Props, State> {
  render() {
    logs('render', 'Vault');
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
