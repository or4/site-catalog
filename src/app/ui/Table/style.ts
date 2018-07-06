import { scheme } from 'ui/theme';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

export const borderLeftTop = {
  borderLeft: scheme.borders.tableBorders,
  borderTop: scheme.borders.tableBorders,
  boxSizing: 'border-box' as 'border-box',
};

export const borderBottom = {
  borderBottom: scheme.borders.tableBorders,
  boxSizing: 'border-box' as 'border-box',
};

const borderRight = {
  borderRight: scheme.borders.tableBorders,
  boxSizing: 'border-box' as 'border-box',
};


const rawClasses = {
  id: {
    ...borderLeftTop,
    minWidth: '60px',
    maxWidth: '60px',
    textAlign: 'center' as 'center',
  },
  name: {
    ...borderLeftTop,
    minWidth: '145px',
    paddingLeft: '5px',
    width: '100%',
  },
  unit: {
    ...borderLeftTop,
    minWidth: '60px',
    maxWidth: '60px',
    textAlign: 'center' as 'center',
  },
  opt: {
    ...borderLeftTop,
    minWidth: '75px',
    maxWidth: '75px',
    textAlign: 'center' as 'center',
  },
  roz: {
    ...borderLeftTop,
    minWidth: '75px',
    maxWidth: '75px',
    textAlign: 'center' as 'center',
  },
  weight: {
    ...borderLeftTop,
    minWidth: '75px',
    maxWidth: '75px',
    textAlign: 'center' as 'center',
  },
  place: {
    ...borderLeftTop,
    minWidth: '75px',
    maxWidth: '75px',
    textAlign: 'center' as 'center',
  },
  photo: {
    ...borderLeftTop,
    ...borderRight,
    minWidth: '75px',
    maxWidth: '75px',
    textAlign: 'center' as 'center',
  },
};

export const tableCommonClasses = jss.createStyleSheet(rawClasses).attach().classes;
