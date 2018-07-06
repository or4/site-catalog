import React from 'react';
import { TableItemType } from './types';
import { TableCell } from 'ui/Table/TableCell';
import { flexRow, borderBottomRightRadius, borderBottomLeftRadius } from 'ui/theme';
import { tableCommonClasses as common, borderBottom } from 'ui/Table/style';
import { join, PositionType, isLast as checkLast } from 'utils';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    ...flexRow('normal', 'space-between'),
  },
  name: {
    justifyContent: 'flex-start' as 'flex-start',
  },
  bottomRow: {
    ...borderBottom,
    ...borderBottomRightRadius(),
  },

  borderBottomLeftRadius: {
    ...borderBottomLeftRadius(),
  },
  borderBottomRightRadius: {
    ...borderBottomRightRadius(),
  },
};

const { classes } = jss.createStyleSheet(rawClasses).attach();

type Props = {
  item: TableItemType;
  position: PositionType;
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
    const { item, position } = this.props;
    const isLast = checkLast(position);
    let last = isLast ? classes.bottomRow : '';

    return (
      <div className={classes.container} style={style.container}>
        <TableCell className={join(common.id, last, isLast ? classes.borderBottomLeftRadius : '')} value={item.id} />
        <TableCell className={join(common.name, classes.name, last)} value={item.name} />
        <TableCell className={join(common.unit, last)} value={item.unit} />
        <TableCell className={join(common.opt, last)} value={item.opt} />
        <TableCell className={join(common.roz, last)} value={item.roz} />
        <TableCell className={join(common.weight, last)} value={item.weight} />
        <TableCell className={join(common.place, last)} value={item.place} />
        <TableCell className={join(common.photo, last, isLast ? classes.borderBottomRightRadius : '')} value={'фото'} />
      </div>
    );
  }
}
