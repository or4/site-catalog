import React from 'react';
import { TableItemType } from './types';
import { TableCell } from 'ui/Table/TableCell';
import { flexRow } from 'ui/theme';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    ...flexRow('center', 'center'),
  }
};

const { classes } = jss.createStyleSheet(rawClasses).attach();

type Props = {
  item: TableItemType;
};
type State = {
};

export class TableRow extends React.PureComponent<Props, State> {
  getStyle() {
    const container = {
    };
    return {
      container,
    };
  }
  render() {
    const style = this.getStyle();
    const { item } = this.props;
    return (
      <div className={classes.container} style={style.container}>
        <TableCell value={item.id} />
        <TableCell value={item.name} />
      </div>
    );
  }
}
