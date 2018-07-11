import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { AppState, TCategory } from 'core/types';
import { logs } from 'utils';
import { Tree, theming } from 'ui';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

type OwnProps = {
  route?: string;
};
type StateProps = {
  categories: TCategory[];
};
type DispatchProps = {
};
type Props = StateProps & DispatchProps & OwnProps;

type State = {
};

const rawClasses = {
  container: {
    borderRadius: '4px',
    padding: '10px 10px 10px 18px',
    margin: '0 10px',
    minWidth: '235px',

    ...theming('sidebar-tree'),
  }
};

const { classes } = jss.createStyleSheet(rawClasses).attach();

class NavigationTreeComponent extends React.PureComponent<Props, State> {
  onClick = (itemId: string) => {
    let route;
    if (this.props.route === '/production') {
      route = `/production/${itemId}`;
    } else {
      route = `/products/${itemId}`;
    }
    browserHistory.push(route);
  }

  render() {
    logs('render', 'NavigationTreeComponent');

    if (!this.props.categories) {
      return null;
    }
    logs('categories', this.props.categories);
    const { route } = this.props;
    const isExpandTree = route === '/production';

    return (
      <div className={classes.container}>
        <Tree data={this.props.categories as any} onClick={this.onClick} isExpand={isExpandTree} />
      </div>
    );
  }
}
const mapStateToProps = (state: AppState, props: OwnProps) => {
  if (props.route === '/production') {
    try {
      return {
        categories: state.categories.separated.filter(item => item.id === '1')
      };
    } catch (err) {
      return {
        categories: []
      };
    }
  }
  return {
    categories: state.categories.separated
  };
};

const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => {
  return {
  };
};
export const NavigationTree = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(NavigationTreeComponent);
