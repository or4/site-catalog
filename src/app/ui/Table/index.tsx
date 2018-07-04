import React from 'react';
import { TableItemType } from './types';
import { TableRow } from './TableRow';
import { TableHeader } from 'ui/Table/TableHeader';
import { getPosition } from 'ui/Tree/util';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
  }
};

const { classes } = jss.createStyleSheet(rawClasses).attach();

type Props = {
  items: TableItemType[];
};
type State = {
};

export class Table extends React.PureComponent<Props, State> {
  render() {
    const { items } = this.props;
    console.log('Table, items', items);
    return (
      <div className={classes.container}>
        <TableHeader />
        {items.map(
          (item: TableItemType, index: number, arr: TableItemType[]) =>
            <TableRow key={item.id} item={item} position={getPosition(index, arr.length - 1)} />
        )}
      </div>
    );
  }
}
