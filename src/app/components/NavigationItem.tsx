import React from 'react';
import { Link } from 'react-router';
// import { theme } from 'ui/theme';

type Props = {
  text: string;
  to: string;
};
type State = {
};

class NavigationItem extends React.PureComponent<Props, State> {
  getStyle() {
    const container = {
    };
    return {
      container,
    };
  }
  render() {
    const style = this.getStyle();
    const { to, text, } = this.props;
    return (
      <Link style={style.container} className="navigation" to={to}>{text}</Link>
    );
  }
}
export default NavigationItem;
