import * as React from 'react';
import { Link } from 'react-router';
import { theme } from 'ui/theme';

const mycss = require('./Navigation.scss');

type Props = {
};
type State = {
};

class Navigation extends React.PureComponent<Props, State> {
  getStyle() {
    const container = {
      ...theme.navigation.container,
    };
    const item = {
      margin: '0 30px',
      ...theme.navigation.item,
    };
    return {
      container,
      item,
    };
  }
  componentDidMount() {
    console.log('Navigation componentDidMount');
  }
  render() {
    const style = this.getStyle();

    return (
      <div style={style.container} className={mycss.navigation}>
        <Link className="navigation" to="about">About</Link>
        <Link to="production">Production</Link>
        <Link to="products">Products</Link>
        <Link to="news">News</Link>
        <Link to="contacts">Contacts</Link>
      </div>
    );
  }
}
export default Navigation;
