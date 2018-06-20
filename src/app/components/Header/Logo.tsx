import React from 'react';
import { theme } from 'ui/theme';
import { isSmall } from 'util/responsive';

type Props = {
  className?: any;
  style?: any;
};
type State = {
};

class Logo extends React.PureComponent<Props, State> {
  componentDidMount() {
    try {
      window.addEventListener('resize', this.resize);
    } catch (error) { }
  }

  componentWillUnmount() {
    try {
      window.removeEventListener('resize', this.resize);
    } catch (error) { }
  }
  resize = () => this.forceUpdate()
  getStyle(customStyle: any) {
    const container = {
      width: isSmall() ? '268px' : '245px', // line break
      textAlign: 'center' as 'center',
      ...theme.header.logo,
    };
    if (customStyle) {
      Object.assign(container, customStyle);
    }
    return {
      container,
    };
  }
  render() {
    const { className, style: customStyle } = this.props;
    const style = this.getStyle(customStyle);
    const classes = className ? className : '';
    return (
      <div style={style.container} className={classes}>
        РЕЗИНОТЕХНИКА СК
      </div>
    );
  }
}
export default Logo;
