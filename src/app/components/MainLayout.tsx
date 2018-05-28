import * as React from 'react';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

type Props = {
  children: any
};
type State = {
};

class MainLayout extends React.PureComponent<Props, State> {
  getStyle = () => {
    const container = {
      background: '#ccc',
    };

    return {
      container,
    }
  }
  render() {
    const { children } = this.props;

  const sheet = jss.createStyleSheet(this.getStyle()).attach();
  const { classes } = sheet;

  return (
      <div className={classes.container}>
        {children}
      </div>
    );
  }
}
export default MainLayout;
