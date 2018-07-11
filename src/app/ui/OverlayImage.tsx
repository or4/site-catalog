import React from 'react'; import { theming } from 'ui/theme';
import Overlay from 'ui/Overlay';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    cursor: 'pointer',
    padding: '10px',
    ...theming('ui-overlay-image-container'),
    '&:hover': {
      ...theming('ui-overlay-image-container-hover'),
    }
  },
  image: {

    // alignItems: 'center' as 'center',
    // display: 'flex',
    // height: '100vh',
    // justifyContent: 'center' as 'center',
    // left: '360px',
    // position: 'fixed' as 'fixed',
    // top: '0',
    // width: 'calc(100% - 360px)',
    // zIndex: 1,

    // ...theming('ui-overlay'),
  },
};

const { classes } = jss.createStyleSheet(rawClasses).attach();


type Props = {
  imageSrc: any;
  overlay: boolean;
  onClose: () => void;
};
type State = {
};

export class OverlayImage extends React.PureComponent<Props, State> {
  getStyle() {
    const container = {
    };
    return {
      container,
    };
  }
  render() {
    const { imageSrc, overlay, onClose } = this.props;
    return (
      <Overlay overlay={overlay} onClose={onClose}>
        <div className={classes.container}>
          <img className={classes.image} src={imageSrc} alt="" />
        </div>
      </Overlay>

    );
  }
}
