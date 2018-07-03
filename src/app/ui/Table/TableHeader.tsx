import React from 'react';
import { flexRow, flexColumn } from 'ui/theme';
import { join } from 'util/helpers';
import { TableCell } from './TableCell';
import { tableCommonClasses as common, borderLeftTop } from './style';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    height: '32px',
    ...flexRow('center', 'space-between'),
  },
  cell: {
    height: '32px',
    ...flexRow('center', 'center'),
  },
  name: {
    textAlign: 'center' as 'center',
  },

  customCell: {
    ...flexColumn('center', 'center'),
    minWidth: '142px',
    maxWidth: '142px',
    height: '32px',
  },
  customCellPrice: {
    ...borderLeftTop,
    minWidth: '142px',
    maxWidth: '142px',
    height: '16px',
    textAlign: 'center' as 'center',
  },
  customCellPriceContainer: {
    ...flexRow('center', 'center'),
  },
};

const { classes } = jss.createStyleSheet(rawClasses).attach();

type Props = {
};
type State = {
};

export class TableHeader extends React.PureComponent<Props, State> {
  getStyle() {
    const container = {
    };
    return {
      container,
    };
  }
  render() {
    const style = this.getStyle();
    //const {  } = this.props;
    return (
      <div className={classes.container} style={style.container}>
        <TableCell className={join(common.id, classes.cell)}> Код <br /> товара </TableCell>
        <TableCell className={join(common.name, classes.name, classes.cell)} value={'Наименование'} />
        <TableCell className={join(common.unit, classes.cell)}>Ед. <br /> изм. </TableCell>
        <TableCell className={classes.customCell}>
          <div className={classes.customCellPrice}>
              Цена за ед.
          </div>
          <div className={classes.customCellPriceContainer}>
            <div className={common.opt}>Оптовая</div>
            <div className={common.roz}>Розница</div>
          </div>
        </TableCell>

        <TableCell className={join(common.weight, classes.cell)}>Вес ед. в <br /> кг.</TableCell>
        <TableCell className={join(common.place, classes.cell)} value={'Тарное место'} />
        <TableCell className={join(common.photo, classes.cell)} value={'Фото'} />
      </div>
    );
  }
}
