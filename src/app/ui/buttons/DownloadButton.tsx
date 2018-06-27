import React from 'react';
import excelIcon from 'assets/tmp/excel.svg';
import textIcon from 'assets/tmp/price5-ubuntu.svg';
import { flexRow } from 'ui/theme';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const getClasses = () => {
  const container = {
    background: 'rgba(255, 255, 255, 0.3)',
    borderRadius: '25px',
    border: '1px solid rgba(0, 0, 0, 0.3)',
    height: '50px',
    marginBottom: '8px',
    width: '235px',

    ...flexRow('center', 'center'),
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.1)',
    }
  };
  const img = {
    height: '32px',
    // marginLeft: '13px',
    left: '20px',
    position: 'absolute' as 'absolute'
  };
  const text = {
    width: '120px',
    // marginLeft: '13px',
  };
  return {
    container,
    img,
    text,
  };
};

const sheet = jss.createStyleSheet(getClasses()).attach();
const { classes } = sheet;


type Props = {
};
type State = {
};

class DownloadButton extends React.PureComponent<Props, State> {

  render() {
    //const {  } = this.props;
    return (
      <div className={classes.container}>
        <img className={classes.img} src={excelIcon} alt="xls" />
        <img className={classes.text} src={textIcon} alt="text" />
      </div>
    );
  }
}
export default DownloadButton;
