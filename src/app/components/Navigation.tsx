import * as React from 'react';
import { theme } from 'ui/theme';
import NavigationItem from 'components/NavigationItem';

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
        <NavigationItem to="about" text="About" />
        <NavigationItem to="production" text="Production" />
        <NavigationItem to="products" text="Products" />
        <NavigationItem to="news" text="News<" />
        <NavigationItem to="contacts" text="Contacts" />
      </div>
    );
  }
}
export default Navigation;
