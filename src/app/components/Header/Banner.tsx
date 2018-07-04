import React from 'react';
import banner from 'assets/images/banners/jaroslavl-small.jpg';
import { log, join } from 'utils';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    height: '100px',
  },
  banner: {
    height: '100px',
    width: '160px',
  },
};

const { classes } = jss.createStyleSheet(rawClasses).attach();

type Props = {
  className?: any;
  style?: any;
};
type State = {
};

export class Banner extends React.PureComponent<Props, State> {
  getStyle(customStyle: any) {
    const container = {
      height: '100px',
    };
    if (customStyle) {
      Object.assign(container, customStyle);
    }
    const banner = {
      height: '100px',
      width: '160px',
    };
    return {
      container,
      banner,
    };
  }
  render() {
    log('Header Banner render');
    const { className, style: customStyle } = this.props;

    return (
      <div className={join(classes.container, className || '')} style={customStyle} >
        <img className={classes.banner} src={banner} alt="" />
      </div>
    );
  }
}
