import React from 'react';
import { Logo } from 'components/Header/Logo';
import { Banner } from 'components/Header/Banner';
import { Contacts } from 'components/Header/Contacts';
import { log, pickBySize } from 'utils';
import { flexColumn, flexRow } from 'ui/theme';
import { subscribeResize, unsubscribeResize } from 'ui/Resize';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClassesSmall = {
  container: {
    ...flexColumn('center', 'space-between'),
  },
  logo: {
    marginTop: '30px',
    marginBottom: '30px',
  },
  banner: {
    display: 'none',
  },
  contacts: {
    display: 'none',
  },
};
const classesSmall = jss.createStyleSheet(rawClassesSmall).attach().classes;


const rawClassesMedium = {
  container: {
    maxHeight: '140px',
    minHeight: '140px',
    ...flexRow('center', 'space-between'),
  },
  logo: {
    marginLeft: '40px'
  },
  banner: {
    display: 'none',
  },
  contacts: {
    marginLeft: 'auto',
    marginRight: '40px',
  },
};
const classesMedium = jss.createStyleSheet(rawClassesMedium).attach().classes;


const rawClassesLarge = {
  container: {
    maxHeight: '140px',
    minHeight: '140px',
    ...flexRow('center', 'space-between'),
  },
  logo: {
    marginLeft: '40px'
  },
  banner: {
    marginLeft: 'auto',
    marginRight: '40px',
  },
  contacts: {
    marginRight: '40px',
  },
};
const classesLarge = jss.createStyleSheet(rawClassesLarge).attach().classes;

type Props = {
};
type State = {
};

export class Header extends React.PureComponent<Props, State> {
  componentDidMount() { subscribeResize(this, 'Header') }
  componentWillUnmount() { unsubscribeResize(this, 'Header') }

  render() {
    log('Header render');
    const classes = pickBySize(classesSmall, classesMedium, classesLarge);

    return (
      <div className={classes.container}>
        <Logo className={classes.logo} />
        <Banner className={classes.banner} />
        <Contacts className={classes.contacts} />
      </div>
    );
  }
}

