import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from 'store/reducers';
import { browserHistory } from 'react-router';
import { TCategory } from 'core/catalog/categories/types';
import { log } from 'util/logger';
import { Tree } from 'ui/Tree';

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
    console.log('NavigationTreeComponent goToRoute', route);
    browserHistory.push(route);
  }

  render() {
    log('NavigationTreeComponent render');

    if (!this.props.categories) {
      return null;
    }
    console.log('this.props.categories', this.props.categories);

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
