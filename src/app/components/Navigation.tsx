import * as React from 'react';
import { theme } from 'ui/theme';
import NavigationItem from 'components/NavigationItem';

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
    return {
      container,
    };
  }
  componentDidMount() {
    // console.log('Navigation componentDidMount');
  }
  render() {
    const style = this.getStyle();
    // console.log('style', style);

    return (
      <div style={style.container}>
        <NavigationItem to="about" text="О нас" />
        <NavigationItem to="production" text="Производство" />
        <NavigationItem to="products" text="Продукция" />
        <NavigationItem to="news" text="Новости" />
        <NavigationItem to="contacts" text="Контакты" />
      </div>
    );
  }
}
export default Navigation;
