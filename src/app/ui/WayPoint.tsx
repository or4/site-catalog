import React from 'react';
import { wayImage } from 'assets/images';
import { flexRow, theming, scheme } from 'ui/theme';

import jss from 'jss';
import preset from 'jss-preset-default';
import { OverlayImage } from 'ui/OverlayImage';
jss.setup(preset());

const rawClasses = {
  container: {
    borderRadius: scheme.borderRadius.default,
    cursor: 'pointer',
    marginBottom: '8px',
    position: 'relative' as 'relative',
    width: '263px',

    ...flexRow('center'),
    ...theming('sidebar-button'),

    '&:hover': {
      ...theming('sidebar-buttonHover'),
    }
  },
  image: {
    margin: '10px',
    width: '243px'
  }
};

const { classes } = jss.createStyleSheet(rawClasses).attach();

type Props = {
};
type State = {
  overlay: boolean;
};

export class WayPoint extends React.PureComponent<Props, State> {
  state = { overlay: false }
  onClick = () => {
    this.setState({
      overlay: !this.state.overlay
    });
  }
  render() {
    return (
      <div>
        <div className={classes.container} onClick={this.onClick}>
          <img className={classes.image} src={wayImage} alt="" />
        </div>

        <OverlayImage overlay={this.state.overlay} imageSrc={wayImage} onClose={this.onClick} />
      </div>
    );
  }
}
