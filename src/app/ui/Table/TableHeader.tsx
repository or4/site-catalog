import React from 'react';
import { flexRow, flexColumn, theming, borderTopLeftRadius, borderTopRightRadius } from 'ui/theme';
import { join } from 'utils';
import { TableCell } from './TableCell';
import { tableCommonClasses as common, borderLeftTop } from './style';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    height: '54px',
    ...flexRow('center', 'space-between'),
  },
  cell: {
    fontWeight: '700' as 'bold',
    height: '54px',
    ...theming('scene-products-tableHeader'),
    ...flexRow('center', 'center'),
  },
  name: {
    ...theming('scene-products-tableHeaderName'),
  },

  borderTopLeftRadius: {
    ...borderTopLeftRadius(),
  },
  borderTopRightRadius: {
    ...borderTopRightRadius(),
  },

  customCell: {
    fontWeight: '700' as 'bold',
    height: '54px',
    minWidth: '150px',
    maxWidth: '150px',

    ...theming('scene-products-tableHeader'),
    ...flexColumn('center', 'center'),
  },
  customCellPrice: {
    minWidth: '150px',
    maxWidth: '150px',
    height: '27px',
    textAlign: 'center' as 'center',

    ...borderLeftTop,
    ...flexRow('center', 'center'),
  },
  customCellPriceContainer: {
    height: '27px',
    ...flexRow('center'),
  },
  customCellPriceItem: {
    height: '27px',
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
    return (
      <div className={classes.container} style={style.container}>
        <TableCell className={join(common.id, classes.cell, classes.borderTopLeftRadius)}> Код <br /> товара </TableCell>
        <TableCell className={join(common.name, classes.name, classes.cell)} value={'Наименование'} />
        <TableCell className={join(common.unit, classes.cell)}>Ед. <br /> изм. </TableCell>
        <TableCell className={classes.customCell}>
          <div className={classes.customCellPrice}>
              Цена за ед.
          </div>
          <div className={classes.customCellPriceContainer}>
            <div className={join(common.opt, classes.customCellPriceItem)}>Оптовая</div>
            <div className={join(common.roz, classes.customCellPriceItem)}>Розница</div>
          </div>
        </TableCell>

        <TableCell className={join(common.weight, classes.cell)}>Вес ед. в <br /> кг.</TableCell>
        <TableCell className={join(common.place, classes.cell)} value={'Тарное место'} />
        <TableCell className={join(common.photo, classes.cell, classes.borderTopRightRadius)} value={'Фото'} />
      </div>
    );
  }
}
