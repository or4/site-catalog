import * as React from 'react';
import { theme } from 'ui/theme';
import NavigationItem from './NavigationItem';
import { isSmall, isMedium, isLarge } from 'util/responsive';

type Props = {
};
type State = {
};

class Navigation extends React.PureComponent<Props, State> {
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

  getStyle() {
    const container = {};

    if (isSmall()) {
      Object.assign(container, {
        height: '4px',
        maxHeight: '4px',
        minHeight: '4px',
        ...theme.navigation.container,
      });
    } else if (isMedium() || isLarge()) {
      Object.assign(container, {
        height: '36px',
        maxHeight: '36px',
        ...theme.navigation.container,
      });
    }

    const subContainer = {
      alignItems: 'center' as 'center',
      display: 'flex',
      height: '36px',
      justifyContent: 'space-evenly' as 'space-evenly',
      maxWidth: '650px',
      margin: '0 auto',
    };
    return {
      container,
      subContainer,
    };
  }
  render() {
    const style = this.getStyle();

    return (
      <div style={style.container}>
        {isSmall() ? null : (
          <div style={style.subContainer}>
            <NavigationItem to="/about" text="О&nbsp;нас" />
            <NavigationItem to="/production" text="Производство" />
            <NavigationItem to="/products" text="Продукция" />
            <NavigationItem to="/news" text="Новости" />
            <NavigationItem to="/contacts" text="Контакты" />
          </div>)
        }
      </div>
    );
  }
}
export default Navigation;
