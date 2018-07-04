import React from 'react';
import { theme } from 'ui/theme';
import { NavigationMenuItem } from 'ui/NavigationMenuItem';
import { subscribeResize, unsubscribeResize } from 'ui/Resize';
import { log, isSmall, isMedium, isLarge } from 'utils';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClassesSmall = {
  container: {
    height: '2px',
    maxHeight: '2px',
    minHeight: '2px',
    ...theme.navigationMenu.container,
  },
  subContainer: {
    display: 'none',
  }
};
const classesSmall = jss.createStyleSheet(rawClassesSmall).attach().classes;

const rawClassesAnother = {
  container: {
    height: '36px',
    maxHeight: '36px',
    ...theme.navigationMenu.container,
  },
  subContainer: {
    alignItems: 'center' as 'center',
    display: 'flex',
    height: '36px',
    justifyContent: 'space-evenly' as 'space-evenly',
    maxWidth: '650px',
    margin: '0 auto',
  }
};
const classesAnother = jss.createStyleSheet(rawClassesAnother).attach().classes;

type Props = {
};
type State = {
};

export class NavigationMenu extends React.PureComponent<Props, State> {
  componentDidMount() { subscribeResize(this, 'NavigationMenu') }
  componentWillUnmount() { unsubscribeResize(this, 'NavigationMenu') }

  render() {
    log('NavigationMenu render');
    const classes = isSmall() ? classesSmall : classesAnother;

    return (
      <div className={classes.container}>
        <div className={classes.subContainer}>
          <NavigationMenuItem to="/about" text="О&nbsp;нас" />
          <NavigationMenuItem to="/production" text="Производство" />
          <NavigationMenuItem to="/products" text="Продукция" />
          <NavigationMenuItem to="/news" text="Новости" />
          <NavigationMenuItem to="/contacts" text="Контакты" />
        </div>
      </div>
    );
  }
}
