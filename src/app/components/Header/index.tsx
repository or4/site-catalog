import React from 'react';
import { subscribeResize, unsubscribeResize, flexColumn, flexRow } from 'ui';
import { logs, pickBySize } from 'utils';

import { Logo } from './Logo';
import { Banner } from './Banner';
import { Contacts } from './Contacts';

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
    logs('render', 'Header');
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

