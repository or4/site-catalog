import * as React from 'react';
import { Link } from 'react-router';
import { theme } from 'ui/theme';

type Props = {
};
type State = {
};

class Navigation extends React.PureComponent<Props, State> {
  getStyle() {
    const container = {
      alignItems: 'center' as 'center',
      display: 'flex',
      height: '36px',
      justifyContent: 'center' as 'center',
      maxHeight: '36px',

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
    //const {  } = this.props;
    return (
      <div style={style.container}>
        <Link style={style.item} to="about">About</Link>
        <Link style={style.item} to="production">Production</Link>
        <Link style={style.item} to="products">Products</Link>
        <Link style={style.item} to="news">News</Link>
        <Link style={style.item} to="contacts">Contacts</Link>
      </div>
    );
  }
}
export default Navigation;
