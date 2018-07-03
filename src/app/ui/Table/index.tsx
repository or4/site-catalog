import React from 'react';
import { TableItemType } from './types';
import { TableRow } from './TableRow';
import { borderBottom } from './style';

import jss from 'jss';
import preset from 'jss-preset-default';
import { TableHeader } from 'ui/Table/TableHeader';
jss.setup(preset());

const rawClasses = {
  container: {
    background: 'rgba(255, 255, 255, 0.4)',
    borderRadius: '4px',
    ...borderBottom,
  }
};

const { classes } = jss.createStyleSheet(rawClasses).attach();

type Props = {
  items: TableItemType[];
};
type State = {
};

export class Table extends React.PureComponent<Props, State> {
  getStyle() {
    const container = {
    };
    return {
      container,
    };
  }
  render() {
    const style = this.getStyle();
    const { items } = this.props;
    console.log('Table, items', items);
    return (
      <div className={classes.container} style={style.container}>
        <TableHeader />
        {items.map(
          (item: TableItemType) => <TableRow key={item.idKey} item={item} />
        )}
      </div>
    );
  }
}
