import React from 'react';
import { scheme, flexColumn } from 'ui/theme';
import { logs } from 'utils';
import { CompactIcon } from 'ui/CompactIcon';

type Props = {
  isCompact: boolean;
};
type State = {
};

export class LeftSideBar extends React.PureComponent<Props, State> {
  getStyle() {
    const container = {};

    Object.assign(container, {
      minHeight: scheme.general.minHeight,
      maxWidth: '285px',
      minWidth: '285px',
      marginLeft: '0',
      padding: '8px 0',
      width: '285px',
      // position: 'absolute' as 'absolute',
      // left: '0',

      ...flexColumn('center', 'flex-start'),
    });

    return {
      container,
    };
  }
  onCompactToggle = () => {

  }

  render() {
    logs('render', 'MiddleLayout LeftSideBar');
    const style = this.getStyle();

    return (
      <div style={style.container}>
        {this.props.children}
        <CompactIcon onClick={this.onCompactToggle} />
      </div>
    );
  }
}
