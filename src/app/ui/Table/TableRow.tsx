import React from 'react';
import { TableItemType } from './types';
import { TableCell } from 'ui/Table/TableCell';
import { flexRow } from 'ui/theme';
import { tableCommonClasses as common } from 'ui/Table/style';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    ...flexRow('center', 'space-between'),
  },
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
        <TableCell className={common.id} value={item.id} />
        <TableCell className={common.name} value={item.name} />
        <TableCell className={common.unit} value={item.unit} />
        <TableCell className={common.opt} value={item.opt} />
        <TableCell className={common.roz} value={item.roz} />
        <TableCell className={common.weight} value={item.weight} />
        <TableCell className={common.place} value={item.place} />
        <TableCell className={common.photo} value={'фото'} />
      </div>
    );
  }
}
