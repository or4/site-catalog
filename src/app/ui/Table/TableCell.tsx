import React from 'react';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    width: '50px',
    minWidth: '50px',
  }
};

const { classes } = jss.createStyleSheet(rawClasses).attach();

type Props = {
  value: string;
};
type State = {
};

export class TableCell extends React.PureComponent<Props, State> {
  getStyle() {
    const container = {
    };
    return {
      container,
    };
  }
  render() {
    const style = this.getStyle();
    const { value } = this.props;
    return (
      <div className={classes.container} style={style.container}>
        {value}
      </div>
    );
  }
}
