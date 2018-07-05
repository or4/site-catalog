import React from 'react';
import { theme, flexColumn, scheme } from 'ui/theme';
import { logs } from 'utils';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    padding: `0 ${theme.content.defaultMargin1} ${theme.content.defaultMargin1} ${theme.content.defaultMargin1}`,
    ...flexColumn('center', 'center'),
  },
  mainText: {
    color: scheme.colors.vault,
    fontFamily: scheme.fontFamily.vault,
    fontSize: scheme.fontSize.vault,
    fontWeight: '700' as 'bold',
    marginBottom: '8px',
    lineHeight: '15px',
    textAlign: 'left' as 'left',
  },
  subText: {
    color: scheme.colors.vault,
    fontFamily: scheme.fontFamily.vault,
    fontSize: scheme.fontSize.vault,
    lineHeight: '15px',
    textAlign: 'left' as 'left',
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
