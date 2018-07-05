import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { AppState, TCategory } from 'core/types';
import { logs } from 'utils';
import { Tree } from 'ui';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

type OwnProps = {
};
type StateProps = {
  categories: TCategory[];
};
type DispatchProps = {
};
type Props = StateProps & DispatchProps & OwnProps;

type State = {
};

const getClasses = () => ({
  container: {
    background: 'rgba(255, 255, 255, 0.5)',
    border: '1px solid rgba(0, 0, 0, 0.3)',
    borderRadius: '4px',
    padding: '10px 10px 10px 18px',
    margin: '0 10px',
  }
});

const { classes } = jss.createStyleSheet(getClasses()).attach();

class NavigationTreeComponent extends React.PureComponent<Props, State> {
  onClick = (itemId: string) => {
    const route = `/catalog/${itemId}`;
    browserHistory.push(route);
  }

  render() {
    logs('render', 'NavigationTreeComponent');

    if (!this.props.categories) {
      return null;
    }
    logs('categories', this.props.categories);

    return (
      <div className={classes.container}>
        <Tree data={this.props.categories as any} onClick={this.onClick} />
      </div>
    );
  }
}
const mapStateToProps = (state: AppState) => ({
  categories: state.categories.separated
});

const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => {
  return {
  };
};
export const NavigationTree = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(NavigationTreeComponent);
