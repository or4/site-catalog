import React from 'react';
import { theme, flexColumn } from 'ui/theme';
import { logs } from 'utils';

type Props = {
};
type State = {
};

export class RightSideBar extends React.PureComponent<Props, State> {
  getStyle() {
    const container = {};

    Object.assign(container, {
      minHeight: theme.content.minHeight,
      maxWidth: '245px',
      minWidth: '245px',
      padding: '8px 0',
      width: '245px',

      ...flexColumn('center', 'flex-start'),
    });

    return {
      container,
    };
  }
  render() {
    logs('render', 'MiddleLayout RightSideBar');
    const style = this.getStyle();
    //const {  } = this.props;
    return (
      <div style={style.container}>
        {this.props.children}
      </div>
    );
  }
}
