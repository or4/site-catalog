import React from 'react';
import { join } from 'util/helpers';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    background: 'rgba(255, 255, 255, 0.5)',
    fontSize: '11px',
    lineHeight: '16px',
    fontFamily: 'Verdana',
    cursor: 'default',
  }
};

const { classes } = jss.createStyleSheet(rawClasses).attach();

type Props = {
  className?: string;
  value?: string;
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
    const { className, value } = this.props;
    return (
      <div className={join(classes.container, className || '')} style={style.container}>
        {value || this.props.children}
      </div>
    );
  }
}
