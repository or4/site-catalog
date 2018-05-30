import React from 'react';
import { Link } from 'react-router';
import { theme } from 'ui/theme';

const css = require('./NavigationItem.scss');

type Props = {
  text: string;
  to: string;
};
type State = {
};

class NavigationItem extends React.PureComponent<Props, State> {
  getStyle() {
    const container = {
      display: 'inline-block',
      lineHeight: '36px',
      padding: '0 25px',
    };
    const sign = {
      color: theme.colors.white,
      marginRight: '10px',
    };
    const link = {
      color: theme.colors.white,
    };
    return {
      container,
      sign,
      link,
    };
  }
  render() {
    const style = this.getStyle();
    const { to, text, } = this.props;
    return (
      <div style={style.container}>
        <span style={style.sign}>◆</span>
        <Link style={style.link} className={css['navigation-item']} to={to}>{text}</Link>
      </div>
    );
  }
}
export default NavigationItem;
