import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

export const borderLeftTop = {
  borderLeft: '1px solid rgba(0,0,0,0.2)',
  borderTop: '1px solid rgba(0,0,0,0.2)',
  boxSizing: 'border-box' as 'border-box',
};

export const borderBottom = {
  borderBottom: '1px solid rgba(0,0,0,0.2)',
  boxSizing: 'border-box' as 'border-box',
};

const borderRight = {
  borderRight: '1px solid rgba(0,0,0,0.2)',
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
    // maxWidth: '320px',
    paddingLeft: '5px',
    width: '100%',
  },
  unit: {
    ...borderLeftTop,
    minWidth: '41px',
    maxWidth: '41px',
    textAlign: 'center' as 'center',
  },
  opt: {
    ...borderLeftTop,
    minWidth: '71px',
    maxWidth: '71px',
    textAlign: 'center' as 'center',
  },
  roz: {
    ...borderLeftTop,
    minWidth: '71px',
    maxWidth: '71px',
    textAlign: 'center' as 'center',
  },
  weight: {
    ...borderLeftTop,
    minWidth: '73px',
    maxWidth: '73px',
    textAlign: 'center' as 'center',
  },
  place: {
    ...borderLeftTop,
    minWidth: '61px',
    maxWidth: '61px',
    textAlign: 'center' as 'center',
  },
  photo: {
    ...borderLeftTop,
    ...borderRight,
    minWidth: '56px',
    maxWidth: '56px',
    textAlign: 'center' as 'center',
  },
};

export const tableCommonClasses = jss.createStyleSheet(rawClasses).attach().classes;
