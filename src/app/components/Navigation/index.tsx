import * as React from 'react';
import { theme } from 'ui/theme';
import NavigationItem from './NavigationItem';
import { isSmall, isMedium, isLarge } from 'util/responsive';
import log from 'util/logger';
import { subscribeResize, unsubscribeResize } from 'components/Resize';

type Props = {
};
type State = {
};

class Navigation extends React.PureComponent<Props, State> {
  componentDidMount() { subscribeResize(this, 'Navigation') }
  componentWillUnmount() { unsubscribeResize(this, 'Navigation') }

  getStyle() {
    const container = {};
    const subContainer = {};

    if (isSmall()) {
      Object.assign(container, {
        height: '2px',
        maxHeight: '2px',
        minHeight: '2px',
        ...theme.navigation.container,
      });
      Object.assign(subContainer, {
        display: 'none',
      });
    } else if (isMedium() || isLarge()) {
      Object.assign(container, {
        height: '36px',
        maxHeight: '36px',
        ...theme.navigation.container,
      });
      Object.assign(subContainer, {
        alignItems: 'center' as 'center',
        display: 'flex',
        height: '36px',
        justifyContent: 'space-evenly' as 'space-evenly',
        maxWidth: '650px',
        margin: '0 auto',
      });
    }

    return {
      container,
      subContainer,
    };
  }
  render() {
    log('Navigation render');

    const style = this.getStyle();

    return (
      <div style={style.container}>
        <div style={style.subContainer}>
          <NavigationItem to="/about" text="О&nbsp;нас" />
          <NavigationItem to="/production" text="Производство" />
          <NavigationItem to="/products" text="Продукция" />
          <NavigationItem to="/news" text="Новости" />
          <NavigationItem to="/contacts" text="Контакты" />
        </div>
      </div>
    );
  }
}
export default Navigation;
