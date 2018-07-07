import React from 'react';
import { subscribeResize, unsubscribeResize, NavigationMenuItem, theming, flexRow } from 'ui';
import { logs, pickBySize } from 'utils';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClassesSmall = {
  container: {
    height: '2px',
    maxHeight: '2px',
    minHeight: '2px',

    ...theming('navigation'),
  },
  subContainer: {
    display: 'none',
  }
};
const classesSmall = jss.createStyleSheet(rawClassesSmall).attach().classes;

const rawClassesMedium = {
  container: {
    height: '36px',
    maxHeight: '36px',

    ...theming('navigation'),
  },
  subContainer: {
    height: '36px',
    maxWidth: '520px', // 4 items
    // maxWidth: '650px', // 5 items
    margin: '0 auto',

    ...flexRow('center', 'space-evenly'),
  }
};
const classesMedium = jss.createStyleSheet(rawClassesMedium).attach().classes;

type Props = {
};
type State = {
};

export class NavigationMenu extends React.PureComponent<Props, State> {
  componentDidMount() { subscribeResize(this, 'NavigationMenu') }
  componentWillUnmount() { unsubscribeResize(this, 'NavigationMenu') }

  render() {
    logs('render', 'NavigationMenu');
    const classes = pickBySize(classesSmall, classesMedium);

    return (
      <div className={classes.container}>
        <div className={classes.subContainer}>
          <NavigationMenuItem to="/about" text="О&nbsp;нас" />
          <NavigationMenuItem to="/production" text="Производство" />
          <NavigationMenuItem to="/products" text="Продукция" />
          <NavigationMenuItem to="/contacts" text="Контакты" />
        </div>
      </div>
    );
  }
}
